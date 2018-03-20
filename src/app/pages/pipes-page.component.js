import { JSFComponent } from 'framework';

class PipePageComponent extends JSFComponent {
    constructor(config) {
        super(config);

        this.data = {
            number: 10
        }
    }
}

export const pipePageComponent = new PipePageComponent({
    selector: 'app-pipe-page',
    template: `
      <div class="row">
        <div class="col l6 offset-l3 m8 offset-m2 s10 offset-s1 pipe_block">
          <h3>{{ number }}</h3>
          <h3>{{ number | multi }}</h3>
          <h3>{{ number | multi:5 }}</h3>
          <h3>{{ number | multi:15 }}</h3>
        </div>
      </div>
    `,
    styles: `
        .pipe_block { margin-top: 30px; }
    `
});
