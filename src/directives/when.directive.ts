import {Directive, directive} from 'lit/directive.js';

export const when = directive(
    class extends Directive {
        update(part, [condition, value]) {
            return this.render(condition, value);
        }
        render(condition: boolean, value) {
            return condition ? value : '';
        }
    }
);
