class Pagination {
    constructor(items) {
        this.items = items;

        this.firstBtn = document.querySelector('.first__btn');
        this.prevBtn = document.querySelector('.prev__btn');
        this.nextBtn = document.querySelector('.next__btn');
        this.lastBtn = document.querySelector('.last__btn');
        this.currBtn = document.querySelector('.curr__btn');
        this.list = document.querySelector('.activity__list');

        this.prevBtn.addEventListener('click', this.clickHandler.bind(null, 'prev'));
        this.nextBtn.addEventListener('click', this.clickHandler.bind(null, 'next'));
        this.firstBtn.addEventListener('click', this.clickHandler.bind(null, 'first'));
        this.lastBtn.addEventListener('click', this.clickHandler.bind(null, 'last'));

        this.changePage();
    }

    currentPage = 1;
    itemsOnPage = 10;

    clickHandler = (btn, e) => {
        switch (btn) {
            case 'prev':
                if (this.currentPage > 1)
                    --this.currentPage;
                break;
            case 'next':
                if (this.currentPage < this.getPagesNumber())
                    ++this.currentPage;
                break;
            case 'first':
                this.currentPage = 1;
                break;
            case 'last':
                this.currentPage = this.getPagesNumber();
                break;
        }

        this.changePage();
    }

    changePage = () => {
        const itemsBeginIndex = (this.currentPage - 1) * this.itemsOnPage;
        const itemsEndIndex = itemsBeginIndex + this.itemsOnPage;

        this.list.innerHTML = '';

        for (let i = itemsBeginIndex; i < itemsEndIndex && i < this.items.length; i++) {
            let li = this.items[i];
            this.list.innerHTML += li.outerHTML;
        }

        this.currBtn.innerHTML = this.currentPage;
    }

    getPagesNumber = () => {
        return Math.ceil(this.items.length / this.itemsOnPage);
    }


    removeListeners = () => {
        this.prevBtn.removeEventListener('click', this.clickHandler);
        this.nextBtn.removeEventListener('click', this.clickHandler);
        this.firstBtn.removeEventListener('click', this.clickHandler);
        this.lastBtn.removeEventListener('click', this.clickHandler);

        delete this.items;
    }
}

export default Pagination;