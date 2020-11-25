import { directive } from 'lit-html';

export const when = directive((condition: Boolean, value: any) => (part) => {
    part.setValue(condition ? value : '');
});
