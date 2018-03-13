import { homePageComponent } from './pages/home-page.component';
import { tabsPageComponent } from './pages/tabs-page.component';
import { notFoundComponeent } from './common/not-found.component';

export const appRoutes = [
    { path: '', component: homePageComponent },
    { path: 'tabs', component: tabsPageComponent },
    { path: '**', component: notFoundComponeent }
];