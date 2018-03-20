import { _ } from 'framework/tools/util';

export function initDirectives(directives) {
    if (_.isUndefined(directives)) return;

    directives.forEach(d => d.init())
}