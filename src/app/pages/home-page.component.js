import { JSFComponent, router } from '../../framework';

class HomePageComponent extends JSFComponent {
    constructor(config) {
        super(config)
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
        console.log('Component after render')
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
        <div class="col l6 offset-l3 m8 offset-m2 s10 offset-s1" style="margin-top: 25px;">
          <div class="card">
            <div class="card-image">
              <img src="http://materializecss.com/images/sample-1.jpg">
              <span class="card-title">Card Title</span>
            </div>
            <div class="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a class="js-link" href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    `
});
