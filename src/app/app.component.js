import { JSFComponent } from '../framework';

class AppComponent extends JSFComponent {
    constructor(config) {
        super(config)
    }
}

export const appComponent = new AppComponent({
    selector: 'app-root',
    template: `
        <div><h4>App Component Works!</h4></div>
    `
});