import { jsf } from '../';

export class Component {
    constructor(config) {
        this.selector = config.selector;
        this.template = config.template;
        this.el = null
    }

    render () {
        this.el = document.querySelector(this.selector);

        if (!this.el) {
            throw new Error(`Component with selector ${this.selector} wasn't found`)
        }

        this.el.innerHTML = this.template;

        this._initEvents()
    }

    _initEvents() {
        if (jsf.isUndefined(this.events)) return;

        let events = this.events();

        Object.keys(events).forEach(k => {
            let listener = k.split(' ');

            this.el
                .querySelector(listener[1])
                .addEventListener(listener[0], this[events[k]].bind(this))
        });
    }
}