import { areas } from '../constants/constants.js';
import urls from '../constants/requestData.js'
import getCookie from '../utils/utils.js';

class ActionCreator {
    constructor() {}

    postAction = area => {
        const uid = getCookie('uid');
        fetch(`${urls.baseUrl}${urls.postActionUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ area, uid })
        })
        .then(resp => console.log(resp.statusText))
        .catch(err => console.log(err))
    }

    clickHandler = e => {
        let target = e.target;
        for (let area of areas) {
            if (target.closest(`.${area}`)
            || target.classList.contains(area)) {
                this.postAction(area);
                break;
            }
        }
    }

    addListeners = () => {
        this.container = document.querySelector('.content');
        this.container.addEventListener('click', this.clickHandler);
    }

    removeListeners = () => {
        this.container.removeEventListener('click', this.clickHandler);
        delete this.container;
    }

    init = () => {
        this.addListeners();
    }
}

export default ActionCreator;