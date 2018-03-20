import { renderComponent } from 'framework/core/component/render-component';
import { $, _, router } from 'framework';

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

    $('router-view').html(`<${route.component.selector}></${route.component.selector}>`);

    renderComponent(route.component);
}