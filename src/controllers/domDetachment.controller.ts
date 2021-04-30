import {ReactiveController, ReactiveControllerHost} from 'lit';

export class DomDetachmentController implements ReactiveController {
    host: ReactiveControllerHost;

    constructor(host: ReactiveControllerHost) {
        (this.host = host).addController(this);
    }
    
    private detachmentCallbacks: Function[] = [];
    addLogic(callback: () => void): void {
        this.detachmentCallbacks.push(callback);
    }

    hostDisconnected() {
        this.detachmentCallbacks.forEach(callback => callback());
        this.detachmentCallbacks = [];
    }
}
