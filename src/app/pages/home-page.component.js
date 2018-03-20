import { _, http, JSFComponent, router } from 'framework';

class HomePageComponent extends JSFComponent {
    constructor(config) {
        super(config);

        this.data = {
            title: 'Page Title',
            ip: 'Loading...'
        }
    }

    events() {
        return {
            'click .js-link': 'goToTabs'
        }
    }

    onInit() {
        console.log('Component init')
    }

    afterInit() {

        http.get('https://api.ipify.org/?format=json').then(({ip}) => {

            _.delay(2000).then(() => {
                this.data.ip = ip;
                this.render()
            });
        })
    }

    goToTabs(event) {
        event.preventDefault();

        router.navigate('tabs')
    }
}

export const homePageComponent = new HomePageComponent({
    selector: 'app-home-page',
    template: `
        <div class="row">
        <div class="col l6 offset-l3 m8 offset-m2 s10 offset-s1 home_block">
          <div class="card">
            <div class="card-image">
              <img src="http://materializecss.com/images/sample-1.jpg">
              <span class="card-title">{{ title }}</span>
            </div>
            <div class="card-content">
              <p>YOUR IP: {{ ip }}</p>
            </div>
            <div class="card-action">
              <a class="js-link" href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    `,
    styles: `
        .home_block { margin-top: 40px; }
    `
});
