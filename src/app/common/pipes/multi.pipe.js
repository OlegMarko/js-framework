import { JSFPipe } from 'framework';

class AppMultiPipe extends JSFPipe {
    constructor(config) {
        super(config)
    }
}

export const appMultiPipe = new AppMultiPipe({
    name: 'multi',
    transform(value, number = 2) {
        return +value * number
    }
});
