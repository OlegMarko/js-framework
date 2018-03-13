import { JSFComponent } from '../framework';

class AppComponent extends JSFComponent {
    constructor(config) {
        super(config)
    }
}

export const appComponent = new AppComponent({
    selector: 'app-root',
    template: `
        <app-header></app-header>
        
        <router-view></router-view>
        
        <app-footer></app-footer>
    `
});