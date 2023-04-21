# lit-helpers
A utility library for Lit

<h1>Installation</h1>

```
npm install @stefanholzapfel/lit-helpers
```

This package includes some helper controllers and directives.

<h2>Reactive controllers</h2>

<h3>DomDetachmentController</h3>

Programmatically add callbacks to execute when LitElement is detached from DOM.
```
@customElement('my-element')
export class MyElement extends LitElement{
    // Create the controller and store it
    private domDetachmentController = new DomDetachmentController(this);
    
    anyElementFunction() {
        this.domDetachmentController.addLogic(() => {
            // do something, e.g. clean up dynamically created subscriptions
        })
    }
}
```

<h2>Directives</h2>
