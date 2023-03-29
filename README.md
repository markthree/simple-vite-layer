# simple-vite-layer

<br />

## Integration

- [unocss](https://github.com/unocss/unocss)
- [@vitejs/plugin-vue](https://github.com/vitejs/vite-plugin-vue)
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)

<br />

## Usage

### install

```shell
npm i vue simple-vite-layer vite-layers -D
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
