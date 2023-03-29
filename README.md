# simple-vite-layer

<br />

## Features

- vue
- unocss

<br />

## Usage

### install

```shell
npm i simple-vite-layer vite-layers -D
```

### configuration

```ts
// vite.config.ts
import { Layers } from "vite-layers";

export default Layers({
  extends: ["simple-vite-layer"],
  vite: {}, // Your vite configuration
});
```

<br />

## License

Made with [markthree](https://github.com/markthree)

Published under [MIT License](./LICENSE).
