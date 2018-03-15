import { JSFModule } from 'framework';
import { appComponent } from './app.component';
import { appHeader } from './common/app.header';
import { appFooter } from './common/app.footer';
import { appRoutes } from './app.routes';

class AppModule extends JSFModule {
    constructor(config) {
        super(config)
    }
}

export const appModule = new AppModule({
    components: [
        appHeader,
        appFooter
    ],
    bootstrap: appComponent,
    routes: appRoutes
});
