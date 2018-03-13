import { JSFComponent } from '../../framework';

class NotFoundComponent extends JSFComponent {
    constructor(config) {
        super(config)
    }
}

export const notFoundComponeent = new NotFoundComponent({
    selector: 'app-not-found',
    template: `
        <div style="display: flex; align-items: center; justify-content: center;">
            <div class="center-align">
                <h2 class="red darken-1">Page Not Found</h2>
                <h3 class="red darken-1">404</h3>
                <a href="#">Home</a>
            </div>
        </div>
    `
});
