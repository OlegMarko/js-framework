import { JSFComponent } from 'framework';

class AppHeader extends JSFComponent {
    constructor(config) {
        super(config)
    }
}

export const appHeader = new AppHeader({
    selector: 'app-header',
    template: `
        <nav class="indigo">
            <div class="nav-wrapper" style="margin-left: 20px;">
                <a href="#" class="brand-logo">JS Framework</a>
                <ul class="right hide-on-med-and-down">
                    <li><a href="#">Home</a></li>
                    <li><a href="#tabs">Tabs</a></li>
                    <li><a href="#directive">Directive</a></li>
                    <li><a href="#pipe">Pipes</a></li>
                </ul>
            </div>
        </nav>
    `
});