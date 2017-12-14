# sandbox-component

> A Vue.js component module

# Usage

## ES6 Modules / CommonJS

```bash
$ npm run build
```

```js
import SandboxComponent from 'dist/sandbox-component';

Vue.component('sandbox-component', SandboxComponent);
```

```html
<sandbox-component text="Hello World!"></sandbox-component>
```

## UMD

```bash
$ npm run build:umd
```

```html
<sandbox-component text="Hello World!"></sandbox-component>

<script src="https://unpkg.com/vue" charset="utf-8"></script>
<script src="./dist/sandbox-component.min.js" charset="utf-8"></script>

<script type="text/javascript">
  Vue.component('sandbox-component', window.SandboxComponent);
</script>
```

## Installation

### Using yarn

`yarn add sandbox-component`

### Using npm

`npm i --save sandbox-component`

## Demo and Docs

`npm run serve`

## Tests

This template uses karma with chai by default, you can change test settings in poi.config.js

`npm run test`
`npm run test:watch`
`npm run test:cov`

## License

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)
