# Angular2 - just playground
* [Quick Start](https://angular.io/docs/js/latest/quickstart.html)

``` bash
$ npm install -g tsd@^0.6.0
$ npm install -g typescript@^1.5.0-beta

# cd my/project/folder
$ tsd install angular2 es6-promise rx rx-lite
$ touch app.ts index.html

# start wtaching app.ts
$ tsc --watch -m commonjs -t es5 --emitDecoratorMetadata app.ts
```
