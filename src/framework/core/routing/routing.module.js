import { renderComponent } from 'framework/core/component/render-component';
import { _, router } from 'framework/index';

export class RoutingModule {
    constructor(routes) {
        this.routes = routes
    }

    init() {
        window.addEventListener('hashchange', renderRoute.bind(this));
        renderRoute.call(this);
    }
}

function renderRoute() {
    let url = router.getURL();
    let route = this.routes.find(r => r.path === url);

    if (_.isUndefined(route)) {
        route = this.routes.find(r => r.path === '**')
    }

    document.querySelector('router-view').innerHTML = `<${route.component.selector}></${route.component.selector}>`;

    renderComponent(route.component);
}