import { bootstrap } from './framework';
import { appModule } from './app/app.module';
import { jsf } from './framework';

jsf.delay(2000).then(() => {
    bootstrap(appModule)
});
