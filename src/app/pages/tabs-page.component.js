import { $, JSFComponent } from 'framework';

class TabsPageComponent extends JSFComponent {
    constructor(config) {
        super(config)
    }

    events() {
        return {
            'click .collapsible': 'onTabClick'
        }
    }

    onTabClick({target}) {
        let $target = $(target);
        if (!$target.hasClass('collapsible-header')) return;

        this.el.findAll('.js-tab').forEach(e => e.removeClass('active'));
        $target.parent().addClass('active');
    }
}

export const tabsPageComponent = new TabsPageComponent({
    selector: 'app-tabs-page',
    template: `
        <div class="row">
            <div class="col s6 offset-s3">
                <ul class="collapsible popout collapsible-accordion">
                    <li class="js-tab">
                      <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
                      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li class="js-tab">
                      <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
                      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li class="js-tab active">
                      <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
                      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                </ul>
            </div>
        </div>
    `
});
