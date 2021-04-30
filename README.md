# lit-helpers
A utility extension for Lit 2

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

<h3>when</h3>

Usable location: any

Renders the value if condition is true, renders empty string otherwise.

Signature: ```when(condition: boolean, value: unknown)```

Use instead of ternary operator when you have no else branch.
