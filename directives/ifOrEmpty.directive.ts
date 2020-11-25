import { directive } from 'lit-html';

export const ifOrEmpty = directive((condition: Boolean, value: any) => (part) => {
    part.setValue(condition ? value : '');
});
