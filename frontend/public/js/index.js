import { menuBtns } from './constants/constants.js';
import ActionCreator from './modules/actionCreator.js';
import Filter from './modules/filter.js';

class App {
    constructor() {
        this.homeBtn = document.querySelector('.home');
        this.analiticsBtn = document.querySelector('.analitics');

        this.homeBtn.addEventListener('click', this.addActivePage);
        this.analiticsBtn.addEventListener('click', this.addActivePage);
    }

    addActivePage = () => {
        const currPage = window.location.pathname;
        const activeBtn = menuBtns[currPage];

        this[activeBtn.active].classList.add('active');
        this[activeBtn.notActive].classList.remove('active');
    }

    init = () => {
        if (window.location.pathname === '/home') {
            this.actionCreator = new ActionCreator();
            this.actionCreator.init();
        } else {
            this.filter = new Filter();
        }

        this.addActivePage();
    }

    destroy = () => {
        this.homeBtn.removeEventListener('click', this.addActivePage);
        this.analiticsBtn.removeEventListener('click', this.addActivePage);

        if (this.actionCreator)
            this.actionCreator.removeListeners();

        if (this.filter)
            this.filter.removeListeners();
    }
}

const app = new App();

window.onbeforeunload = () => {
    app.destroy();
}

app.init();