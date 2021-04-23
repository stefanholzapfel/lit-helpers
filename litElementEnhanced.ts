import {LitElement} from 'lit';

export class LitElementEnhanced extends LitElement {
    constructor() {
        super();
    }

    private connectedCallbackExtensions: Function[] = [];
    connectedCallbackAddLogic(callback: () => void): void {
        this.connectedCallbackExtensions.push(callback);
    }

    connectedCallback(): void {
        super.connectedCallback();
        this.connectedCallbackExtensions.forEach(callback => callback());
    }

    private disconnectedCallbackExtensions: Function[] = [];
    disconnectedCallbackAddLogic(callback: () => void): void {
        this.disconnectedCallbackExtensions.push(callback);
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();
        this.disconnectedCallbackExtensions.forEach(callback => callback());
    }
}
