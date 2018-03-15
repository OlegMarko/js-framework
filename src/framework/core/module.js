import { jsf, router } from '../';

export class Module {
    constructor(config) {
        this.components = config.components;
        this.bootstrapComponent = config.bootstrap;
        this.routes = config.routes;
    }

    start() {
        this.initComponents();

        if (this.routes) this.initRoutes()
    }

    initComponents() {
        this.bootstrapComponent.render();
        this.components.forEach(this.renderComponent.bind(this))
    }

    initRoutes() {
        window.addEventListener('hashchange', this.renderRoute.bind(this));
        this.renderRoute();
    }

    renderRoute() {
        let url = router.getURL();
        let route = this.routes.find(r => r.path === url);

        if (jsf.isUndefined(route)) {
            route = this.routes.find(r => r.path === '**')
        }

        document.querySelector('router-view').innerHTML = `<${route.component.selector}></${route.component.selector}>`;

        this.renderComponent(route.component);
    }

    renderComponent(c) {
        if (!jsf.isUndefined(c.onInit)) c.onInit();

        c.render();

        if (!jsf.isUndefined(c.afterInit)) c.afterInit();
    }
}