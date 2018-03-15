import { renderComponent } from 'framework/core/component/render-component';
import { _ } from 'framework/tools/util';

export function initComponents(bootstrap, components) {

    if(_.isUndefined(bootstrap)) {
        throw new Error('Bootstrap component isn\'t defined')
    }

    [bootstrap, ...components].forEach(renderComponent)
}