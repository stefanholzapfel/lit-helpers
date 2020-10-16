# lit-state
A utility extension for LitElement

This package contains no Javascript. You have to compile to JS first. If you use webpack's ts-loader you can just enable  "allowTsInNodeModules":

```
{
    test: /\.ts$/,
    use: {
        loader: 'ts-loader',
        options: {
            allowTsInNodeModules: true
        }
}
```

To get it to work just use LitElementEnhanced instead of LitElement.  

You can then use all of LitElement's features plus:

<h3>Add logic to callbacks from everywhere</h3>
```
myLitElementEnhanced.connectedCallbackAddLogic(() => 
    {
        console.log('Execute this during element's connected callback!');
    }
);

myLitElementEnhanced.disconnectedCallbackAddLogic(() => 
    {
        console.log('Execute this during element's disconnected callback!');
    }
);
```
