import { $, _ } from 'framework';

export class Component {
    constructor(config) {
        this.selector = config.selector;
        this.template = config.template;
        this.styles = config.styles;
        this.el = null
    }

    render () {
        initStyles(this.styles);

        this.el = $(this.selector);
        if (!this.el) { throw new Error(`Component with selector ${this.selector} wasn't found`) }
        this.el.html(compileTemplate(this.template, this.data));

        initEvents.call(this)
    }
}

function initEvents() {
    if (_.isUndefined(this.events)) return;

    let events = this.events();

    Object.keys(events).forEach(k => {
        let listener = k.split(' ');

        this.el
            .find(listener[1])
            .on(listener[0], this[events[k]].bind(this))
    });
}

function compileTemplate(template, data) {
    if (_.isUndefined(data)) return template;

    let regex = /\{{(.*?)}}/g

    template = template.replace(regex, (str, d) => {
        let key = d.trim();

        return data[key]
    });

    return template;
}

function initStyles(styles) {
    if (_.isUndefined(styles)) return;

    let style = $(document.createElement('style'));
    style.html(styles);
    $(document.head).append(style)
}
