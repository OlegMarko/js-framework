import { JSFModule } from '../framework';
import { appComponent } from './app.component';

class AppModule extends JSFModule {
    constructor(config) {
        super(config)
    }
}

export const appModule = new AppModule({
    components: [
        appComponent
    ]
});
