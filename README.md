# simple-vite-layer

Integrate the vue plugin of the vite community, a vite layer that looks like a
framework

<br />

power by [vite-layers](https://github.com/markthree/vite-layers)

<br />

## Integration

- [unocss](https://github.com/unocss/unocss)
- [@vitejs/plugin-vue](https://github.com/vitejs/vite-plugin-vue)
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)

<br />

## Playground

👉
[starter StackBlitz](https://stackblitz.com/github.com/markthree/simple-vite-layer-starter)

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

```ts
// src/main.ts
import "uno.css";
// ... other content
```

### ts

If you are using TS and there is `tsconfig.node.json`, you need to add types

```json5
{
  "compilerOptions": {
    "types": ["vite"] // add vite
    // ...other content
  }
}
```

<br />

## License

Made with [markthree](https://github.com/markthree)

Published under [MIT License](./LICENSE).
