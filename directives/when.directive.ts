import {directive, Directive} from 'lit-html/directive.js';

export const whenDirective = directive(
    class extends Directive {
        update(part, [condition, value]) {
            return this.render(condition, value);
        }
        render(condition, value) {
            return condition ? value : '';
        }
    }
);
