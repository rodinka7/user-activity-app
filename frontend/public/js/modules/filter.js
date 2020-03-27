import Pagination from './pagination.js';

class Filter {
    constructor() {
        this.els = [...document.querySelectorAll('.activity__item')];

        this.uidFilter = document.querySelector('.user__filter > input');
        this.areaFilter = document.querySelector('.area__filter > input');

        this.uidFilter.addEventListener('change', this.changeHandler.bind(null, 'uid'));
        this.areaFilter.addEventListener('change', this.changeHandler.bind(null, 'area'));

        this.pagination = new Pagination(this.els);
    }

    filterValues = {};

    changeHandler = (filterField, e) => {
        const value = e.target.value;

        this.filterValues[filterField] = value;

        this.pagination.items = this.els.filter(item => {
            let show = 0;

            for (let val in this.filterValues) {
                if (item.innerText.includes(this.filterValues[val]))
                    ++show;
            }

            return show === Object.keys(this.filterValues).length;
        });

        this.pagination.changePage();
    }

    removeListeners = () => {
        this.uidFilter.removeEventListener('change', this.changeHandler);
        this.areaFilter.removeEventListener('change', this.changeHandler);

        if (this.pagination)
            this.pagination.removeListeners();

        delete this.els;
    }
}

export default Filter;