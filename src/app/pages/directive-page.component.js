import { JSFComponent, router } from 'framework';

class DirectivePageComponent extends JSFComponent {
    constructor(config) {
        super(config);
    }
}

export const directivePageComponent = new DirectivePageComponent({
    selector: 'app-directive-page',
    template: `
      <div class="row">
        <div class="col l6 offset-l3 m8 offset-m2 s10 offset-s1 dir_block">
          <h2 appHover="red">Set Pointer here</h2>
        </div>
      </div>
    `,
    styles: `
        .dir_block { margin-top: 30px; }
    `
});
