import { JSFComponent } from '../../framework';

class TabsPageComponent extends JSFComponent {
    constructor(config) {
        super(config)
    }
}

export const tabsPageComponent = new TabsPageComponent({
    selector: 'app-tabs-page',
    template: `
        <h1>Tabs Page</h1>
    `
});
