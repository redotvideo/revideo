# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 0.4.6 (2024-06-27)


### Bug Fixes

* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* exclude preact from optimizations ([#894](https://github.com/havenhq/revideo/issues/894)) ([15687cc](https://github.com/havenhq/revideo/commit/15687cc975abcf4538a5ce51402d2308057d42e5))
* **ffmpeg:** looping of video tag ([#122](https://github.com/havenhq/revideo/issues/122)) ([109c675](https://github.com/havenhq/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* fix dependency bundling ([#897](https://github.com/havenhq/revideo/issues/897)) ([5376012](https://github.com/havenhq/revideo/commit/5376012cd02b8bca5abc2d3cf5a724662244c449))
* fix dependency bundling again ([#898](https://github.com/havenhq/revideo/issues/898)) ([d6e0f48](https://github.com/havenhq/revideo/commit/d6e0f48e67cf6baee710b8d5b185e620e67ceda5))
* fix project selection screen ([#938](https://github.com/havenhq/revideo/issues/938)) ([3b3f287](https://github.com/havenhq/revideo/commit/3b3f2871d9884c67f7d46215dd12fc02e27f8054))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove dependency pre-bundling warning ([#676](https://github.com/havenhq/revideo/issues/676)) ([38c81ff](https://github.com/havenhq/revideo/commit/38c81ffa5ea0ef2d2beec9d015896f5873629d74))
* **vite-plugin:** add missing headers to html ([#219](https://github.com/havenhq/revideo/issues/219)) ([2552bcf](https://github.com/havenhq/revideo/commit/2552bcfbe2e90f3d4b86810d39f8cee24349e405)), closes [#201](https://github.com/havenhq/revideo/issues/201)
* **vite-plugin:** can't assign port ([#538](https://github.com/havenhq/revideo/issues/538)) ([61b692b](https://github.com/havenhq/revideo/commit/61b692bf97bb7e15d31469ada2e3dda84c2b99f8))
* **vite-plugin:** create empty output directory if not exist ([#787](https://github.com/havenhq/revideo/issues/787)) ([20cceef](https://github.com/havenhq/revideo/commit/20cceef8525e809bff9706fcd7082d7e103a085b))
* **vite-plugin:** handle unusual characters in file names ([#821](https://github.com/havenhq/revideo/issues/821)) ([1e57497](https://github.com/havenhq/revideo/commit/1e5749785d55a41605a5438eee08672ef01f3914)), closes [#764](https://github.com/havenhq/revideo/issues/764)
* **vite-plugin:** ignore query param in devserver ([#351](https://github.com/havenhq/revideo/issues/351)) ([5644d72](https://github.com/havenhq/revideo/commit/5644d72d36adcdc817f0856aaff0be5507338cb8))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** hot module replacement for audio ([#793](https://github.com/havenhq/revideo/issues/793)) ([d40c1a8](https://github.com/havenhq/revideo/commit/d40c1a83c645c8984cca1ebc6fe687b445a0550c))
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* encode video with wasm ([#162](https://github.com/havenhq/revideo/issues/162)) ([c756fd8](https://github.com/havenhq/revideo/commit/c756fd8293d49b8abc8887c94bfb8f0d04e65842))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* finalize custom exporters ([#660](https://github.com/havenhq/revideo/issues/660)) ([6a50430](https://github.com/havenhq/revideo/commit/6a50430cdf9928992ca078eba39c484a5253da2b))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* make transparent video optional ([#91](https://github.com/havenhq/revideo/issues/91)) ([6a052d5](https://github.com/havenhq/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* plugin architecture ([#564](https://github.com/havenhq/revideo/issues/564)) ([1c375b8](https://github.com/havenhq/revideo/commit/1c375b81e0af8a76467d42dd46a7031adb9d71d3))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* **vite-plugin:** add entry point ([#721](https://github.com/havenhq/revideo/issues/721)) ([e634b6c](https://github.com/havenhq/revideo/commit/e634b6cb67b3c569d21d424661708ca946ea4cc3))
* **vite-plugin:** improve audio handling ([#154](https://github.com/havenhq/revideo/issues/154)) ([482f144](https://github.com/havenhq/revideo/commit/482f14447ae54543346fab0f9e5b94631c5cfd4d))
* **vite-plugin:** support glob for project files ([#834](https://github.com/havenhq/revideo/issues/834)) ([67029c4](https://github.com/havenhq/revideo/commit/67029c4c2cf756cbe2b7ed59dc55cb895de81d52)), closes [#324](https://github.com/havenhq/revideo/issues/324)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
* remove legacy package
* change to import paths

See [the migration guide](https://motion-canvas.github.io/guides/migration/12.0.0) for more info.
* change the way scenes are imported

Scene files no longer need to follow the pattern: `[name].scene.tsx`.
When importing scenes in the project file, a dedicated `?scene` query param should be used:
```ts
import example from './scenes/example?scene';

export default new Project({
  name: 'project',
  scenes: [example],
});
```
* change the overall structure of a project

`vite` and `@motion-canvas/vite-plugin` packages are now required to build a project:
```
npm i -D vite @motion-canvas/vite-plugin
```
The following `vite.config.ts` file needs to be created in the root of the project:
```ts
import {defineConfig} from 'vite';
import motionCanvas from '@motion-canvas/vite-plugin';

export default defineConfig({
  plugins: [motionCanvas()],
});
```

Types exposed by Motion Canvas are no longer global.
An additional `motion-canvas.d.ts` file needs to be created in the `src` directory:
```ts
/// <reference types="@motion-canvas/core/project" />
```

 Finally, the `bootstrap` function no longer exists.
 Project files should export an instance of the `Project` class instead:
 ```ts
 import {Project} from '@motion-canvas/core/lib';

 import example from './scenes/example.scene';

 export default new Project({
   name: 'project',
   scenes: [example],
   // same options as in bootstrap() are available:





## 0.4.5 (2024-06-26)


### Bug Fixes

* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* exclude preact from optimizations ([#894](https://github.com/havenhq/revideo/issues/894)) ([15687cc](https://github.com/havenhq/revideo/commit/15687cc975abcf4538a5ce51402d2308057d42e5))
* **ffmpeg:** looping of video tag ([#122](https://github.com/havenhq/revideo/issues/122)) ([109c675](https://github.com/havenhq/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* fix dependency bundling ([#897](https://github.com/havenhq/revideo/issues/897)) ([5376012](https://github.com/havenhq/revideo/commit/5376012cd02b8bca5abc2d3cf5a724662244c449))
* fix dependency bundling again ([#898](https://github.com/havenhq/revideo/issues/898)) ([d6e0f48](https://github.com/havenhq/revideo/commit/d6e0f48e67cf6baee710b8d5b185e620e67ceda5))
* fix project selection screen ([#938](https://github.com/havenhq/revideo/issues/938)) ([3b3f287](https://github.com/havenhq/revideo/commit/3b3f2871d9884c67f7d46215dd12fc02e27f8054))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove dependency pre-bundling warning ([#676](https://github.com/havenhq/revideo/issues/676)) ([38c81ff](https://github.com/havenhq/revideo/commit/38c81ffa5ea0ef2d2beec9d015896f5873629d74))
* **vite-plugin:** add missing headers to html ([#219](https://github.com/havenhq/revideo/issues/219)) ([2552bcf](https://github.com/havenhq/revideo/commit/2552bcfbe2e90f3d4b86810d39f8cee24349e405)), closes [#201](https://github.com/havenhq/revideo/issues/201)
* **vite-plugin:** can't assign port ([#538](https://github.com/havenhq/revideo/issues/538)) ([61b692b](https://github.com/havenhq/revideo/commit/61b692bf97bb7e15d31469ada2e3dda84c2b99f8))
* **vite-plugin:** create empty output directory if not exist ([#787](https://github.com/havenhq/revideo/issues/787)) ([20cceef](https://github.com/havenhq/revideo/commit/20cceef8525e809bff9706fcd7082d7e103a085b))
* **vite-plugin:** handle unusual characters in file names ([#821](https://github.com/havenhq/revideo/issues/821)) ([1e57497](https://github.com/havenhq/revideo/commit/1e5749785d55a41605a5438eee08672ef01f3914)), closes [#764](https://github.com/havenhq/revideo/issues/764)
* **vite-plugin:** ignore query param in devserver ([#351](https://github.com/havenhq/revideo/issues/351)) ([5644d72](https://github.com/havenhq/revideo/commit/5644d72d36adcdc817f0856aaff0be5507338cb8))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** hot module replacement for audio ([#793](https://github.com/havenhq/revideo/issues/793)) ([d40c1a8](https://github.com/havenhq/revideo/commit/d40c1a83c645c8984cca1ebc6fe687b445a0550c))
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* encode video with wasm ([#162](https://github.com/havenhq/revideo/issues/162)) ([c756fd8](https://github.com/havenhq/revideo/commit/c756fd8293d49b8abc8887c94bfb8f0d04e65842))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* finalize custom exporters ([#660](https://github.com/havenhq/revideo/issues/660)) ([6a50430](https://github.com/havenhq/revideo/commit/6a50430cdf9928992ca078eba39c484a5253da2b))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* make transparent video optional ([#91](https://github.com/havenhq/revideo/issues/91)) ([6a052d5](https://github.com/havenhq/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* plugin architecture ([#564](https://github.com/havenhq/revideo/issues/564)) ([1c375b8](https://github.com/havenhq/revideo/commit/1c375b81e0af8a76467d42dd46a7031adb9d71d3))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* **vite-plugin:** add entry point ([#721](https://github.com/havenhq/revideo/issues/721)) ([e634b6c](https://github.com/havenhq/revideo/commit/e634b6cb67b3c569d21d424661708ca946ea4cc3))
* **vite-plugin:** improve audio handling ([#154](https://github.com/havenhq/revideo/issues/154)) ([482f144](https://github.com/havenhq/revideo/commit/482f14447ae54543346fab0f9e5b94631c5cfd4d))
* **vite-plugin:** support glob for project files ([#834](https://github.com/havenhq/revideo/issues/834)) ([67029c4](https://github.com/havenhq/revideo/commit/67029c4c2cf756cbe2b7ed59dc55cb895de81d52)), closes [#324](https://github.com/havenhq/revideo/issues/324)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
* remove legacy package
* change to import paths

See [the migration guide](https://motion-canvas.github.io/guides/migration/12.0.0) for more info.
* change the way scenes are imported

Scene files no longer need to follow the pattern: `[name].scene.tsx`.
When importing scenes in the project file, a dedicated `?scene` query param should be used:
```ts
import example from './scenes/example?scene';

export default new Project({
  name: 'project',
  scenes: [example],
});
```
* change the overall structure of a project

`vite` and `@motion-canvas/vite-plugin` packages are now required to build a project:
```
npm i -D vite @motion-canvas/vite-plugin
```
The following `vite.config.ts` file needs to be created in the root of the project:
```ts
import {defineConfig} from 'vite';
import motionCanvas from '@motion-canvas/vite-plugin';

export default defineConfig({
  plugins: [motionCanvas()],
});
```

Types exposed by Motion Canvas are no longer global.
An additional `motion-canvas.d.ts` file needs to be created in the `src` directory:
```ts
/// <reference types="@motion-canvas/core/project" />
```

 Finally, the `bootstrap` function no longer exists.
 Project files should export an instance of the `Project` class instead:
 ```ts
 import {Project} from '@motion-canvas/core/lib';

 import example from './scenes/example.scene';

 export default new Project({
   name: 'project',
   scenes: [example],
   // same options as in bootstrap() are available:





## 0.4.4 (2024-06-25)


### Bug Fixes

* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* exclude preact from optimizations ([#894](https://github.com/havenhq/revideo/issues/894)) ([15687cc](https://github.com/havenhq/revideo/commit/15687cc975abcf4538a5ce51402d2308057d42e5))
* **ffmpeg:** looping of video tag ([#122](https://github.com/havenhq/revideo/issues/122)) ([109c675](https://github.com/havenhq/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* fix dependency bundling ([#897](https://github.com/havenhq/revideo/issues/897)) ([5376012](https://github.com/havenhq/revideo/commit/5376012cd02b8bca5abc2d3cf5a724662244c449))
* fix dependency bundling again ([#898](https://github.com/havenhq/revideo/issues/898)) ([d6e0f48](https://github.com/havenhq/revideo/commit/d6e0f48e67cf6baee710b8d5b185e620e67ceda5))
* fix project selection screen ([#938](https://github.com/havenhq/revideo/issues/938)) ([3b3f287](https://github.com/havenhq/revideo/commit/3b3f2871d9884c67f7d46215dd12fc02e27f8054))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove dependency pre-bundling warning ([#676](https://github.com/havenhq/revideo/issues/676)) ([38c81ff](https://github.com/havenhq/revideo/commit/38c81ffa5ea0ef2d2beec9d015896f5873629d74))
* **vite-plugin:** add missing headers to html ([#219](https://github.com/havenhq/revideo/issues/219)) ([2552bcf](https://github.com/havenhq/revideo/commit/2552bcfbe2e90f3d4b86810d39f8cee24349e405)), closes [#201](https://github.com/havenhq/revideo/issues/201)
* **vite-plugin:** can't assign port ([#538](https://github.com/havenhq/revideo/issues/538)) ([61b692b](https://github.com/havenhq/revideo/commit/61b692bf97bb7e15d31469ada2e3dda84c2b99f8))
* **vite-plugin:** create empty output directory if not exist ([#787](https://github.com/havenhq/revideo/issues/787)) ([20cceef](https://github.com/havenhq/revideo/commit/20cceef8525e809bff9706fcd7082d7e103a085b))
* **vite-plugin:** handle unusual characters in file names ([#821](https://github.com/havenhq/revideo/issues/821)) ([1e57497](https://github.com/havenhq/revideo/commit/1e5749785d55a41605a5438eee08672ef01f3914)), closes [#764](https://github.com/havenhq/revideo/issues/764)
* **vite-plugin:** ignore query param in devserver ([#351](https://github.com/havenhq/revideo/issues/351)) ([5644d72](https://github.com/havenhq/revideo/commit/5644d72d36adcdc817f0856aaff0be5507338cb8))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** hot module replacement for audio ([#793](https://github.com/havenhq/revideo/issues/793)) ([d40c1a8](https://github.com/havenhq/revideo/commit/d40c1a83c645c8984cca1ebc6fe687b445a0550c))
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* encode video with wasm ([#162](https://github.com/havenhq/revideo/issues/162)) ([c756fd8](https://github.com/havenhq/revideo/commit/c756fd8293d49b8abc8887c94bfb8f0d04e65842))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* finalize custom exporters ([#660](https://github.com/havenhq/revideo/issues/660)) ([6a50430](https://github.com/havenhq/revideo/commit/6a50430cdf9928992ca078eba39c484a5253da2b))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* make transparent video optional ([#91](https://github.com/havenhq/revideo/issues/91)) ([6a052d5](https://github.com/havenhq/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* plugin architecture ([#564](https://github.com/havenhq/revideo/issues/564)) ([1c375b8](https://github.com/havenhq/revideo/commit/1c375b81e0af8a76467d42dd46a7031adb9d71d3))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* **vite-plugin:** add entry point ([#721](https://github.com/havenhq/revideo/issues/721)) ([e634b6c](https://github.com/havenhq/revideo/commit/e634b6cb67b3c569d21d424661708ca946ea4cc3))
* **vite-plugin:** improve audio handling ([#154](https://github.com/havenhq/revideo/issues/154)) ([482f144](https://github.com/havenhq/revideo/commit/482f14447ae54543346fab0f9e5b94631c5cfd4d))
* **vite-plugin:** support glob for project files ([#834](https://github.com/havenhq/revideo/issues/834)) ([67029c4](https://github.com/havenhq/revideo/commit/67029c4c2cf756cbe2b7ed59dc55cb895de81d52)), closes [#324](https://github.com/havenhq/revideo/issues/324)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
* remove legacy package
* change to import paths

See [the migration guide](https://motion-canvas.github.io/guides/migration/12.0.0) for more info.
* change the way scenes are imported

Scene files no longer need to follow the pattern: `[name].scene.tsx`.
When importing scenes in the project file, a dedicated `?scene` query param should be used:
```ts
import example from './scenes/example?scene';

export default new Project({
  name: 'project',
  scenes: [example],
});
```
* change the overall structure of a project

`vite` and `@motion-canvas/vite-plugin` packages are now required to build a project:
```
npm i -D vite @motion-canvas/vite-plugin
```
The following `vite.config.ts` file needs to be created in the root of the project:
```ts
import {defineConfig} from 'vite';
import motionCanvas from '@motion-canvas/vite-plugin';

export default defineConfig({
  plugins: [motionCanvas()],
});
```

Types exposed by Motion Canvas are no longer global.
An additional `motion-canvas.d.ts` file needs to be created in the `src` directory:
```ts
/// <reference types="@motion-canvas/core/project" />
```

 Finally, the `bootstrap` function no longer exists.
 Project files should export an instance of the `Project` class instead:
 ```ts
 import {Project} from '@motion-canvas/core/lib';

 import example from './scenes/example.scene';

 export default new Project({
   name: 'project',
   scenes: [example],
   // same options as in bootstrap() are available:





## 0.4.3 (2024-06-24)


### Bug Fixes

* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* exclude preact from optimizations ([#894](https://github.com/havenhq/revideo/issues/894)) ([15687cc](https://github.com/havenhq/revideo/commit/15687cc975abcf4538a5ce51402d2308057d42e5))
* **ffmpeg:** looping of video tag ([#122](https://github.com/havenhq/revideo/issues/122)) ([109c675](https://github.com/havenhq/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* fix dependency bundling ([#897](https://github.com/havenhq/revideo/issues/897)) ([5376012](https://github.com/havenhq/revideo/commit/5376012cd02b8bca5abc2d3cf5a724662244c449))
* fix dependency bundling again ([#898](https://github.com/havenhq/revideo/issues/898)) ([d6e0f48](https://github.com/havenhq/revideo/commit/d6e0f48e67cf6baee710b8d5b185e620e67ceda5))
* fix project selection screen ([#938](https://github.com/havenhq/revideo/issues/938)) ([3b3f287](https://github.com/havenhq/revideo/commit/3b3f2871d9884c67f7d46215dd12fc02e27f8054))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove dependency pre-bundling warning ([#676](https://github.com/havenhq/revideo/issues/676)) ([38c81ff](https://github.com/havenhq/revideo/commit/38c81ffa5ea0ef2d2beec9d015896f5873629d74))
* **vite-plugin:** add missing headers to html ([#219](https://github.com/havenhq/revideo/issues/219)) ([2552bcf](https://github.com/havenhq/revideo/commit/2552bcfbe2e90f3d4b86810d39f8cee24349e405)), closes [#201](https://github.com/havenhq/revideo/issues/201)
* **vite-plugin:** can't assign port ([#538](https://github.com/havenhq/revideo/issues/538)) ([61b692b](https://github.com/havenhq/revideo/commit/61b692bf97bb7e15d31469ada2e3dda84c2b99f8))
* **vite-plugin:** create empty output directory if not exist ([#787](https://github.com/havenhq/revideo/issues/787)) ([20cceef](https://github.com/havenhq/revideo/commit/20cceef8525e809bff9706fcd7082d7e103a085b))
* **vite-plugin:** handle unusual characters in file names ([#821](https://github.com/havenhq/revideo/issues/821)) ([1e57497](https://github.com/havenhq/revideo/commit/1e5749785d55a41605a5438eee08672ef01f3914)), closes [#764](https://github.com/havenhq/revideo/issues/764)
* **vite-plugin:** ignore query param in devserver ([#351](https://github.com/havenhq/revideo/issues/351)) ([5644d72](https://github.com/havenhq/revideo/commit/5644d72d36adcdc817f0856aaff0be5507338cb8))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** hot module replacement for audio ([#793](https://github.com/havenhq/revideo/issues/793)) ([d40c1a8](https://github.com/havenhq/revideo/commit/d40c1a83c645c8984cca1ebc6fe687b445a0550c))
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* finalize custom exporters ([#660](https://github.com/havenhq/revideo/issues/660)) ([6a50430](https://github.com/havenhq/revideo/commit/6a50430cdf9928992ca078eba39c484a5253da2b))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* make transparent video optional ([#91](https://github.com/havenhq/revideo/issues/91)) ([6a052d5](https://github.com/havenhq/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* plugin architecture ([#564](https://github.com/havenhq/revideo/issues/564)) ([1c375b8](https://github.com/havenhq/revideo/commit/1c375b81e0af8a76467d42dd46a7031adb9d71d3))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* **vite-plugin:** add entry point ([#721](https://github.com/havenhq/revideo/issues/721)) ([e634b6c](https://github.com/havenhq/revideo/commit/e634b6cb67b3c569d21d424661708ca946ea4cc3))
* **vite-plugin:** improve audio handling ([#154](https://github.com/havenhq/revideo/issues/154)) ([482f144](https://github.com/havenhq/revideo/commit/482f14447ae54543346fab0f9e5b94631c5cfd4d))
* **vite-plugin:** support glob for project files ([#834](https://github.com/havenhq/revideo/issues/834)) ([67029c4](https://github.com/havenhq/revideo/commit/67029c4c2cf756cbe2b7ed59dc55cb895de81d52)), closes [#324](https://github.com/havenhq/revideo/issues/324)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
* remove legacy package
* change to import paths

See [the migration guide](https://motion-canvas.github.io/guides/migration/12.0.0) for more info.
* change the way scenes are imported

Scene files no longer need to follow the pattern: `[name].scene.tsx`.
When importing scenes in the project file, a dedicated `?scene` query param should be used:
```ts
import example from './scenes/example?scene';

export default new Project({
  name: 'project',
  scenes: [example],
});
```
* change the overall structure of a project

`vite` and `@motion-canvas/vite-plugin` packages are now required to build a project:
```
npm i -D vite @motion-canvas/vite-plugin
```
The following `vite.config.ts` file needs to be created in the root of the project:
```ts
import {defineConfig} from 'vite';
import motionCanvas from '@motion-canvas/vite-plugin';

export default defineConfig({
  plugins: [motionCanvas()],
});
```

Types exposed by Motion Canvas are no longer global.
An additional `motion-canvas.d.ts` file needs to be created in the `src` directory:
```ts
/// <reference types="@motion-canvas/core/project" />
```

 Finally, the `bootstrap` function no longer exists.
 Project files should export an instance of the `Project` class instead:
 ```ts
 import {Project} from '@motion-canvas/core/lib';

 import example from './scenes/example.scene';

 export default new Project({
   name: 'project',
   scenes: [example],
   // same options as in bootstrap() are available:





## 0.4.2 (2024-06-16)


### Bug Fixes

* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* exclude preact from optimizations ([#894](https://github.com/havenhq/revideo/issues/894)) ([15687cc](https://github.com/havenhq/revideo/commit/15687cc975abcf4538a5ce51402d2308057d42e5))
* **ffmpeg:** looping of video tag ([#122](https://github.com/havenhq/revideo/issues/122)) ([109c675](https://github.com/havenhq/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* fix dependency bundling ([#897](https://github.com/havenhq/revideo/issues/897)) ([5376012](https://github.com/havenhq/revideo/commit/5376012cd02b8bca5abc2d3cf5a724662244c449))
* fix dependency bundling again ([#898](https://github.com/havenhq/revideo/issues/898)) ([d6e0f48](https://github.com/havenhq/revideo/commit/d6e0f48e67cf6baee710b8d5b185e620e67ceda5))
* fix project selection screen ([#938](https://github.com/havenhq/revideo/issues/938)) ([3b3f287](https://github.com/havenhq/revideo/commit/3b3f2871d9884c67f7d46215dd12fc02e27f8054))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove dependency pre-bundling warning ([#676](https://github.com/havenhq/revideo/issues/676)) ([38c81ff](https://github.com/havenhq/revideo/commit/38c81ffa5ea0ef2d2beec9d015896f5873629d74))
* **vite-plugin:** add missing headers to html ([#219](https://github.com/havenhq/revideo/issues/219)) ([2552bcf](https://github.com/havenhq/revideo/commit/2552bcfbe2e90f3d4b86810d39f8cee24349e405)), closes [#201](https://github.com/havenhq/revideo/issues/201)
* **vite-plugin:** can't assign port ([#538](https://github.com/havenhq/revideo/issues/538)) ([61b692b](https://github.com/havenhq/revideo/commit/61b692bf97bb7e15d31469ada2e3dda84c2b99f8))
* **vite-plugin:** create empty output directory if not exist ([#787](https://github.com/havenhq/revideo/issues/787)) ([20cceef](https://github.com/havenhq/revideo/commit/20cceef8525e809bff9706fcd7082d7e103a085b))
* **vite-plugin:** handle unusual characters in file names ([#821](https://github.com/havenhq/revideo/issues/821)) ([1e57497](https://github.com/havenhq/revideo/commit/1e5749785d55a41605a5438eee08672ef01f3914)), closes [#764](https://github.com/havenhq/revideo/issues/764)
* **vite-plugin:** ignore query param in devserver ([#351](https://github.com/havenhq/revideo/issues/351)) ([5644d72](https://github.com/havenhq/revideo/commit/5644d72d36adcdc817f0856aaff0be5507338cb8))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** hot module replacement for audio ([#793](https://github.com/havenhq/revideo/issues/793)) ([d40c1a8](https://github.com/havenhq/revideo/commit/d40c1a83c645c8984cca1ebc6fe687b445a0550c))
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* finalize custom exporters ([#660](https://github.com/havenhq/revideo/issues/660)) ([6a50430](https://github.com/havenhq/revideo/commit/6a50430cdf9928992ca078eba39c484a5253da2b))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* make transparent video optional ([#91](https://github.com/havenhq/revideo/issues/91)) ([6a052d5](https://github.com/havenhq/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* plugin architecture ([#564](https://github.com/havenhq/revideo/issues/564)) ([1c375b8](https://github.com/havenhq/revideo/commit/1c375b81e0af8a76467d42dd46a7031adb9d71d3))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* **vite-plugin:** add entry point ([#721](https://github.com/havenhq/revideo/issues/721)) ([e634b6c](https://github.com/havenhq/revideo/commit/e634b6cb67b3c569d21d424661708ca946ea4cc3))
* **vite-plugin:** improve audio handling ([#154](https://github.com/havenhq/revideo/issues/154)) ([482f144](https://github.com/havenhq/revideo/commit/482f14447ae54543346fab0f9e5b94631c5cfd4d))
* **vite-plugin:** support glob for project files ([#834](https://github.com/havenhq/revideo/issues/834)) ([67029c4](https://github.com/havenhq/revideo/commit/67029c4c2cf756cbe2b7ed59dc55cb895de81d52)), closes [#324](https://github.com/havenhq/revideo/issues/324)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
* remove legacy package
* change to import paths

See [the migration guide](https://motion-canvas.github.io/guides/migration/12.0.0) for more info.
* change the way scenes are imported

Scene files no longer need to follow the pattern: `[name].scene.tsx`.
When importing scenes in the project file, a dedicated `?scene` query param should be used:
```ts
import example from './scenes/example?scene';

export default new Project({
  name: 'project',
  scenes: [example],
});
```
* change the overall structure of a project

`vite` and `@motion-canvas/vite-plugin` packages are now required to build a project:
```
npm i -D vite @motion-canvas/vite-plugin
```
The following `vite.config.ts` file needs to be created in the root of the project:
```ts
import {defineConfig} from 'vite';
import motionCanvas from '@motion-canvas/vite-plugin';

export default defineConfig({
  plugins: [motionCanvas()],
});
```

Types exposed by Motion Canvas are no longer global.
An additional `motion-canvas.d.ts` file needs to be created in the `src` directory:
```ts
/// <reference types="@motion-canvas/core/project" />
```

 Finally, the `bootstrap` function no longer exists.
 Project files should export an instance of the `Project` class instead:
 ```ts
 import {Project} from '@motion-canvas/core/lib';

 import example from './scenes/example.scene';

 export default new Project({
   name: 'project',
   scenes: [example],
   // same options as in bootstrap() are available:





## 0.4.1 (2024-06-12)


### Bug Fixes

* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* exclude preact from optimizations ([#894](https://github.com/havenhq/revideo/issues/894)) ([15687cc](https://github.com/havenhq/revideo/commit/15687cc975abcf4538a5ce51402d2308057d42e5))
* **ffmpeg:** looping of video tag ([#122](https://github.com/havenhq/revideo/issues/122)) ([109c675](https://github.com/havenhq/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* fix dependency bundling ([#897](https://github.com/havenhq/revideo/issues/897)) ([5376012](https://github.com/havenhq/revideo/commit/5376012cd02b8bca5abc2d3cf5a724662244c449))
* fix dependency bundling again ([#898](https://github.com/havenhq/revideo/issues/898)) ([d6e0f48](https://github.com/havenhq/revideo/commit/d6e0f48e67cf6baee710b8d5b185e620e67ceda5))
* fix project selection screen ([#938](https://github.com/havenhq/revideo/issues/938)) ([3b3f287](https://github.com/havenhq/revideo/commit/3b3f2871d9884c67f7d46215dd12fc02e27f8054))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove dependency pre-bundling warning ([#676](https://github.com/havenhq/revideo/issues/676)) ([38c81ff](https://github.com/havenhq/revideo/commit/38c81ffa5ea0ef2d2beec9d015896f5873629d74))
* **vite-plugin:** add missing headers to html ([#219](https://github.com/havenhq/revideo/issues/219)) ([2552bcf](https://github.com/havenhq/revideo/commit/2552bcfbe2e90f3d4b86810d39f8cee24349e405)), closes [#201](https://github.com/havenhq/revideo/issues/201)
* **vite-plugin:** can't assign port ([#538](https://github.com/havenhq/revideo/issues/538)) ([61b692b](https://github.com/havenhq/revideo/commit/61b692bf97bb7e15d31469ada2e3dda84c2b99f8))
* **vite-plugin:** create empty output directory if not exist ([#787](https://github.com/havenhq/revideo/issues/787)) ([20cceef](https://github.com/havenhq/revideo/commit/20cceef8525e809bff9706fcd7082d7e103a085b))
* **vite-plugin:** handle unusual characters in file names ([#821](https://github.com/havenhq/revideo/issues/821)) ([1e57497](https://github.com/havenhq/revideo/commit/1e5749785d55a41605a5438eee08672ef01f3914)), closes [#764](https://github.com/havenhq/revideo/issues/764)
* **vite-plugin:** ignore query param in devserver ([#351](https://github.com/havenhq/revideo/issues/351)) ([5644d72](https://github.com/havenhq/revideo/commit/5644d72d36adcdc817f0856aaff0be5507338cb8))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** hot module replacement for audio ([#793](https://github.com/havenhq/revideo/issues/793)) ([d40c1a8](https://github.com/havenhq/revideo/commit/d40c1a83c645c8984cca1ebc6fe687b445a0550c))
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* finalize custom exporters ([#660](https://github.com/havenhq/revideo/issues/660)) ([6a50430](https://github.com/havenhq/revideo/commit/6a50430cdf9928992ca078eba39c484a5253da2b))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* make transparent video optional ([#91](https://github.com/havenhq/revideo/issues/91)) ([6a052d5](https://github.com/havenhq/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* plugin architecture ([#564](https://github.com/havenhq/revideo/issues/564)) ([1c375b8](https://github.com/havenhq/revideo/commit/1c375b81e0af8a76467d42dd46a7031adb9d71d3))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* **vite-plugin:** add entry point ([#721](https://github.com/havenhq/revideo/issues/721)) ([e634b6c](https://github.com/havenhq/revideo/commit/e634b6cb67b3c569d21d424661708ca946ea4cc3))
* **vite-plugin:** improve audio handling ([#154](https://github.com/havenhq/revideo/issues/154)) ([482f144](https://github.com/havenhq/revideo/commit/482f14447ae54543346fab0f9e5b94631c5cfd4d))
* **vite-plugin:** support glob for project files ([#834](https://github.com/havenhq/revideo/issues/834)) ([67029c4](https://github.com/havenhq/revideo/commit/67029c4c2cf756cbe2b7ed59dc55cb895de81d52)), closes [#324](https://github.com/havenhq/revideo/issues/324)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
* remove legacy package
* change to import paths

See [the migration guide](https://motion-canvas.github.io/guides/migration/12.0.0) for more info.
* change the way scenes are imported

Scene files no longer need to follow the pattern: `[name].scene.tsx`.
When importing scenes in the project file, a dedicated `?scene` query param should be used:
```ts
import example from './scenes/example?scene';

export default new Project({
  name: 'project',
  scenes: [example],
});
```
* change the overall structure of a project

`vite` and `@motion-canvas/vite-plugin` packages are now required to build a project:
```
npm i -D vite @motion-canvas/vite-plugin
```
The following `vite.config.ts` file needs to be created in the root of the project:
```ts
import {defineConfig} from 'vite';
import motionCanvas from '@motion-canvas/vite-plugin';

export default defineConfig({
  plugins: [motionCanvas()],
});
```

Types exposed by Motion Canvas are no longer global.
An additional `motion-canvas.d.ts` file needs to be created in the `src` directory:
```ts
/// <reference types="@motion-canvas/core/project" />
```

 Finally, the `bootstrap` function no longer exists.
 Project files should export an instance of the `Project` class instead:
 ```ts
 import {Project} from '@motion-canvas/core/lib';

 import example from './scenes/example.scene';

 export default new Project({
   name: 'project',
   scenes: [example],
   // same options as in bootstrap() are available:





# 0.4.0 (2024-06-11)


### Bug Fixes

* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* exclude preact from optimizations ([#894](https://github.com/havenhq/revideo/issues/894)) ([15687cc](https://github.com/havenhq/revideo/commit/15687cc975abcf4538a5ce51402d2308057d42e5))
* **ffmpeg:** looping of video tag ([#122](https://github.com/havenhq/revideo/issues/122)) ([109c675](https://github.com/havenhq/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* fix dependency bundling ([#897](https://github.com/havenhq/revideo/issues/897)) ([5376012](https://github.com/havenhq/revideo/commit/5376012cd02b8bca5abc2d3cf5a724662244c449))
* fix dependency bundling again ([#898](https://github.com/havenhq/revideo/issues/898)) ([d6e0f48](https://github.com/havenhq/revideo/commit/d6e0f48e67cf6baee710b8d5b185e620e67ceda5))
* fix project selection screen ([#938](https://github.com/havenhq/revideo/issues/938)) ([3b3f287](https://github.com/havenhq/revideo/commit/3b3f2871d9884c67f7d46215dd12fc02e27f8054))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove dependency pre-bundling warning ([#676](https://github.com/havenhq/revideo/issues/676)) ([38c81ff](https://github.com/havenhq/revideo/commit/38c81ffa5ea0ef2d2beec9d015896f5873629d74))
* **vite-plugin:** add missing headers to html ([#219](https://github.com/havenhq/revideo/issues/219)) ([2552bcf](https://github.com/havenhq/revideo/commit/2552bcfbe2e90f3d4b86810d39f8cee24349e405)), closes [#201](https://github.com/havenhq/revideo/issues/201)
* **vite-plugin:** can't assign port ([#538](https://github.com/havenhq/revideo/issues/538)) ([61b692b](https://github.com/havenhq/revideo/commit/61b692bf97bb7e15d31469ada2e3dda84c2b99f8))
* **vite-plugin:** create empty output directory if not exist ([#787](https://github.com/havenhq/revideo/issues/787)) ([20cceef](https://github.com/havenhq/revideo/commit/20cceef8525e809bff9706fcd7082d7e103a085b))
* **vite-plugin:** handle unusual characters in file names ([#821](https://github.com/havenhq/revideo/issues/821)) ([1e57497](https://github.com/havenhq/revideo/commit/1e5749785d55a41605a5438eee08672ef01f3914)), closes [#764](https://github.com/havenhq/revideo/issues/764)
* **vite-plugin:** ignore query param in devserver ([#351](https://github.com/havenhq/revideo/issues/351)) ([5644d72](https://github.com/havenhq/revideo/commit/5644d72d36adcdc817f0856aaff0be5507338cb8))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** hot module replacement for audio ([#793](https://github.com/havenhq/revideo/issues/793)) ([d40c1a8](https://github.com/havenhq/revideo/commit/d40c1a83c645c8984cca1ebc6fe687b445a0550c))
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* finalize custom exporters ([#660](https://github.com/havenhq/revideo/issues/660)) ([6a50430](https://github.com/havenhq/revideo/commit/6a50430cdf9928992ca078eba39c484a5253da2b))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* make transparent video optional ([#91](https://github.com/havenhq/revideo/issues/91)) ([6a052d5](https://github.com/havenhq/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* plugin architecture ([#564](https://github.com/havenhq/revideo/issues/564)) ([1c375b8](https://github.com/havenhq/revideo/commit/1c375b81e0af8a76467d42dd46a7031adb9d71d3))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* **vite-plugin:** add entry point ([#721](https://github.com/havenhq/revideo/issues/721)) ([e634b6c](https://github.com/havenhq/revideo/commit/e634b6cb67b3c569d21d424661708ca946ea4cc3))
* **vite-plugin:** improve audio handling ([#154](https://github.com/havenhq/revideo/issues/154)) ([482f144](https://github.com/havenhq/revideo/commit/482f14447ae54543346fab0f9e5b94631c5cfd4d))
* **vite-plugin:** support glob for project files ([#834](https://github.com/havenhq/revideo/issues/834)) ([67029c4](https://github.com/havenhq/revideo/commit/67029c4c2cf756cbe2b7ed59dc55cb895de81d52)), closes [#324](https://github.com/havenhq/revideo/issues/324)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
* remove legacy package
* change to import paths

See [the migration guide](https://motion-canvas.github.io/guides/migration/12.0.0) for more info.
* change the way scenes are imported

Scene files no longer need to follow the pattern: `[name].scene.tsx`.
When importing scenes in the project file, a dedicated `?scene` query param should be used:
```ts
import example from './scenes/example?scene';

export default new Project({
  name: 'project',
  scenes: [example],
});
```
* change the overall structure of a project

`vite` and `@motion-canvas/vite-plugin` packages are now required to build a project:
```
npm i -D vite @motion-canvas/vite-plugin
```
The following `vite.config.ts` file needs to be created in the root of the project:
```ts
import {defineConfig} from 'vite';
import motionCanvas from '@motion-canvas/vite-plugin';

export default defineConfig({
  plugins: [motionCanvas()],
});
```

Types exposed by Motion Canvas are no longer global.
An additional `motion-canvas.d.ts` file needs to be created in the `src` directory:
```ts
/// <reference types="@motion-canvas/core/project" />
```

 Finally, the `bootstrap` function no longer exists.
 Project files should export an instance of the `Project` class instead:
 ```ts
 import {Project} from '@motion-canvas/core/lib';

 import example from './scenes/example.scene';

 export default new Project({
   name: 'project',
   scenes: [example],
   // same options as in bootstrap() are available:





## 0.3.6 (2024-06-08)


### Bug Fixes

* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* exclude preact from optimizations ([#894](https://github.com/havenhq/revideo/issues/894)) ([15687cc](https://github.com/havenhq/revideo/commit/15687cc975abcf4538a5ce51402d2308057d42e5))
* **ffmpeg:** looping of video tag ([#122](https://github.com/havenhq/revideo/issues/122)) ([109c675](https://github.com/havenhq/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* fix dependency bundling ([#897](https://github.com/havenhq/revideo/issues/897)) ([5376012](https://github.com/havenhq/revideo/commit/5376012cd02b8bca5abc2d3cf5a724662244c449))
* fix dependency bundling again ([#898](https://github.com/havenhq/revideo/issues/898)) ([d6e0f48](https://github.com/havenhq/revideo/commit/d6e0f48e67cf6baee710b8d5b185e620e67ceda5))
* fix project selection screen ([#938](https://github.com/havenhq/revideo/issues/938)) ([3b3f287](https://github.com/havenhq/revideo/commit/3b3f2871d9884c67f7d46215dd12fc02e27f8054))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove dependency pre-bundling warning ([#676](https://github.com/havenhq/revideo/issues/676)) ([38c81ff](https://github.com/havenhq/revideo/commit/38c81ffa5ea0ef2d2beec9d015896f5873629d74))
* **vite-plugin:** add missing headers to html ([#219](https://github.com/havenhq/revideo/issues/219)) ([2552bcf](https://github.com/havenhq/revideo/commit/2552bcfbe2e90f3d4b86810d39f8cee24349e405)), closes [#201](https://github.com/havenhq/revideo/issues/201)
* **vite-plugin:** can't assign port ([#538](https://github.com/havenhq/revideo/issues/538)) ([61b692b](https://github.com/havenhq/revideo/commit/61b692bf97bb7e15d31469ada2e3dda84c2b99f8))
* **vite-plugin:** create empty output directory if not exist ([#787](https://github.com/havenhq/revideo/issues/787)) ([20cceef](https://github.com/havenhq/revideo/commit/20cceef8525e809bff9706fcd7082d7e103a085b))
* **vite-plugin:** handle unusual characters in file names ([#821](https://github.com/havenhq/revideo/issues/821)) ([1e57497](https://github.com/havenhq/revideo/commit/1e5749785d55a41605a5438eee08672ef01f3914)), closes [#764](https://github.com/havenhq/revideo/issues/764)
* **vite-plugin:** ignore query param in devserver ([#351](https://github.com/havenhq/revideo/issues/351)) ([5644d72](https://github.com/havenhq/revideo/commit/5644d72d36adcdc817f0856aaff0be5507338cb8))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** hot module replacement for audio ([#793](https://github.com/havenhq/revideo/issues/793)) ([d40c1a8](https://github.com/havenhq/revideo/commit/d40c1a83c645c8984cca1ebc6fe687b445a0550c))
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* finalize custom exporters ([#660](https://github.com/havenhq/revideo/issues/660)) ([6a50430](https://github.com/havenhq/revideo/commit/6a50430cdf9928992ca078eba39c484a5253da2b))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* make transparent video optional ([#91](https://github.com/havenhq/revideo/issues/91)) ([6a052d5](https://github.com/havenhq/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* plugin architecture ([#564](https://github.com/havenhq/revideo/issues/564)) ([1c375b8](https://github.com/havenhq/revideo/commit/1c375b81e0af8a76467d42dd46a7031adb9d71d3))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* **vite-plugin:** add entry point ([#721](https://github.com/havenhq/revideo/issues/721)) ([e634b6c](https://github.com/havenhq/revideo/commit/e634b6cb67b3c569d21d424661708ca946ea4cc3))
* **vite-plugin:** improve audio handling ([#154](https://github.com/havenhq/revideo/issues/154)) ([482f144](https://github.com/havenhq/revideo/commit/482f14447ae54543346fab0f9e5b94631c5cfd4d))
* **vite-plugin:** support glob for project files ([#834](https://github.com/havenhq/revideo/issues/834)) ([67029c4](https://github.com/havenhq/revideo/commit/67029c4c2cf756cbe2b7ed59dc55cb895de81d52)), closes [#324](https://github.com/havenhq/revideo/issues/324)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
* remove legacy package
* change to import paths

See [the migration guide](https://motion-canvas.github.io/guides/migration/12.0.0) for more info.
* change the way scenes are imported

Scene files no longer need to follow the pattern: `[name].scene.tsx`.
When importing scenes in the project file, a dedicated `?scene` query param should be used:
```ts
import example from './scenes/example?scene';

export default new Project({
  name: 'project',
  scenes: [example],
});
```
* change the overall structure of a project

`vite` and `@motion-canvas/vite-plugin` packages are now required to build a project:
```
npm i -D vite @motion-canvas/vite-plugin
```
The following `vite.config.ts` file needs to be created in the root of the project:
```ts
import {defineConfig} from 'vite';
import motionCanvas from '@motion-canvas/vite-plugin';

export default defineConfig({
  plugins: [motionCanvas()],
});
```

Types exposed by Motion Canvas are no longer global.
An additional `motion-canvas.d.ts` file needs to be created in the `src` directory:
```ts
/// <reference types="@motion-canvas/core/project" />
```

 Finally, the `bootstrap` function no longer exists.
 Project files should export an instance of the `Project` class instead:
 ```ts
 import {Project} from '@motion-canvas/core/lib';

 import example from './scenes/example.scene';

 export default new Project({
   name: 'project',
   scenes: [example],
   // same options as in bootstrap() are available:





## 0.3.5 (2024-06-04)


### Bug Fixes

* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* exclude preact from optimizations ([#894](https://github.com/havenhq/revideo/issues/894)) ([15687cc](https://github.com/havenhq/revideo/commit/15687cc975abcf4538a5ce51402d2308057d42e5))
* fix dependency bundling ([#897](https://github.com/havenhq/revideo/issues/897)) ([5376012](https://github.com/havenhq/revideo/commit/5376012cd02b8bca5abc2d3cf5a724662244c449))
* fix dependency bundling again ([#898](https://github.com/havenhq/revideo/issues/898)) ([d6e0f48](https://github.com/havenhq/revideo/commit/d6e0f48e67cf6baee710b8d5b185e620e67ceda5))
* fix project selection screen ([#938](https://github.com/havenhq/revideo/issues/938)) ([3b3f287](https://github.com/havenhq/revideo/commit/3b3f2871d9884c67f7d46215dd12fc02e27f8054))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove dependency pre-bundling warning ([#676](https://github.com/havenhq/revideo/issues/676)) ([38c81ff](https://github.com/havenhq/revideo/commit/38c81ffa5ea0ef2d2beec9d015896f5873629d74))
* **vite-plugin:** add missing headers to html ([#219](https://github.com/havenhq/revideo/issues/219)) ([2552bcf](https://github.com/havenhq/revideo/commit/2552bcfbe2e90f3d4b86810d39f8cee24349e405)), closes [#201](https://github.com/havenhq/revideo/issues/201)
* **vite-plugin:** can't assign port ([#538](https://github.com/havenhq/revideo/issues/538)) ([61b692b](https://github.com/havenhq/revideo/commit/61b692bf97bb7e15d31469ada2e3dda84c2b99f8))
* **vite-plugin:** create empty output directory if not exist ([#787](https://github.com/havenhq/revideo/issues/787)) ([20cceef](https://github.com/havenhq/revideo/commit/20cceef8525e809bff9706fcd7082d7e103a085b))
* **vite-plugin:** handle unusual characters in file names ([#821](https://github.com/havenhq/revideo/issues/821)) ([1e57497](https://github.com/havenhq/revideo/commit/1e5749785d55a41605a5438eee08672ef01f3914)), closes [#764](https://github.com/havenhq/revideo/issues/764)
* **vite-plugin:** ignore query param in devserver ([#351](https://github.com/havenhq/revideo/issues/351)) ([5644d72](https://github.com/havenhq/revideo/commit/5644d72d36adcdc817f0856aaff0be5507338cb8))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** hot module replacement for audio ([#793](https://github.com/havenhq/revideo/issues/793)) ([d40c1a8](https://github.com/havenhq/revideo/commit/d40c1a83c645c8984cca1ebc6fe687b445a0550c))
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* finalize custom exporters ([#660](https://github.com/havenhq/revideo/issues/660)) ([6a50430](https://github.com/havenhq/revideo/commit/6a50430cdf9928992ca078eba39c484a5253da2b))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* make transparent video optional ([#91](https://github.com/havenhq/revideo/issues/91)) ([6a052d5](https://github.com/havenhq/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* plugin architecture ([#564](https://github.com/havenhq/revideo/issues/564)) ([1c375b8](https://github.com/havenhq/revideo/commit/1c375b81e0af8a76467d42dd46a7031adb9d71d3))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* **vite-plugin:** add entry point ([#721](https://github.com/havenhq/revideo/issues/721)) ([e634b6c](https://github.com/havenhq/revideo/commit/e634b6cb67b3c569d21d424661708ca946ea4cc3))
* **vite-plugin:** improve audio handling ([#154](https://github.com/havenhq/revideo/issues/154)) ([482f144](https://github.com/havenhq/revideo/commit/482f14447ae54543346fab0f9e5b94631c5cfd4d))
* **vite-plugin:** support glob for project files ([#834](https://github.com/havenhq/revideo/issues/834)) ([67029c4](https://github.com/havenhq/revideo/commit/67029c4c2cf756cbe2b7ed59dc55cb895de81d52)), closes [#324](https://github.com/havenhq/revideo/issues/324)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
* remove legacy package
* change to import paths

See [the migration guide](https://motion-canvas.github.io/guides/migration/12.0.0) for more info.
* change the way scenes are imported

Scene files no longer need to follow the pattern: `[name].scene.tsx`.
When importing scenes in the project file, a dedicated `?scene` query param should be used:
```ts
import example from './scenes/example?scene';

export default new Project({
  name: 'project',
  scenes: [example],
});
```
* change the overall structure of a project

`vite` and `@motion-canvas/vite-plugin` packages are now required to build a project:
```
npm i -D vite @motion-canvas/vite-plugin
```
The following `vite.config.ts` file needs to be created in the root of the project:
```ts
import {defineConfig} from 'vite';
import motionCanvas from '@motion-canvas/vite-plugin';

export default defineConfig({
  plugins: [motionCanvas()],
});
```

Types exposed by Motion Canvas are no longer global.
An additional `motion-canvas.d.ts` file needs to be created in the `src` directory:
```ts
/// <reference types="@motion-canvas/core/project" />
```

 Finally, the `bootstrap` function no longer exists.
 Project files should export an instance of the `Project` class instead:
 ```ts
 import {Project} from '@motion-canvas/core/lib';

 import example from './scenes/example.scene';

 export default new Project({
   name: 'project',
   scenes: [example],
   // same options as in bootstrap() are available:





## 0.3.4 (2024-05-20)


### Bug Fixes

* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* exclude preact from optimizations ([#894](https://github.com/havenhq/revideo/issues/894)) ([15687cc](https://github.com/havenhq/revideo/commit/15687cc975abcf4538a5ce51402d2308057d42e5))
* fix dependency bundling ([#897](https://github.com/havenhq/revideo/issues/897)) ([5376012](https://github.com/havenhq/revideo/commit/5376012cd02b8bca5abc2d3cf5a724662244c449))
* fix dependency bundling again ([#898](https://github.com/havenhq/revideo/issues/898)) ([d6e0f48](https://github.com/havenhq/revideo/commit/d6e0f48e67cf6baee710b8d5b185e620e67ceda5))
* fix project selection screen ([#938](https://github.com/havenhq/revideo/issues/938)) ([3b3f287](https://github.com/havenhq/revideo/commit/3b3f2871d9884c67f7d46215dd12fc02e27f8054))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove dependency pre-bundling warning ([#676](https://github.com/havenhq/revideo/issues/676)) ([38c81ff](https://github.com/havenhq/revideo/commit/38c81ffa5ea0ef2d2beec9d015896f5873629d74))
* **vite-plugin:** add missing headers to html ([#219](https://github.com/havenhq/revideo/issues/219)) ([2552bcf](https://github.com/havenhq/revideo/commit/2552bcfbe2e90f3d4b86810d39f8cee24349e405)), closes [#201](https://github.com/havenhq/revideo/issues/201)
* **vite-plugin:** can't assign port ([#538](https://github.com/havenhq/revideo/issues/538)) ([61b692b](https://github.com/havenhq/revideo/commit/61b692bf97bb7e15d31469ada2e3dda84c2b99f8))
* **vite-plugin:** create empty output directory if not exist ([#787](https://github.com/havenhq/revideo/issues/787)) ([20cceef](https://github.com/havenhq/revideo/commit/20cceef8525e809bff9706fcd7082d7e103a085b))
* **vite-plugin:** handle unusual characters in file names ([#821](https://github.com/havenhq/revideo/issues/821)) ([1e57497](https://github.com/havenhq/revideo/commit/1e5749785d55a41605a5438eee08672ef01f3914)), closes [#764](https://github.com/havenhq/revideo/issues/764)
* **vite-plugin:** ignore query param in devserver ([#351](https://github.com/havenhq/revideo/issues/351)) ([5644d72](https://github.com/havenhq/revideo/commit/5644d72d36adcdc817f0856aaff0be5507338cb8))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** hot module replacement for audio ([#793](https://github.com/havenhq/revideo/issues/793)) ([d40c1a8](https://github.com/havenhq/revideo/commit/d40c1a83c645c8984cca1ebc6fe687b445a0550c))
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* finalize custom exporters ([#660](https://github.com/havenhq/revideo/issues/660)) ([6a50430](https://github.com/havenhq/revideo/commit/6a50430cdf9928992ca078eba39c484a5253da2b))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* make transparent video optional ([#91](https://github.com/havenhq/revideo/issues/91)) ([6a052d5](https://github.com/havenhq/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* plugin architecture ([#564](https://github.com/havenhq/revideo/issues/564)) ([1c375b8](https://github.com/havenhq/revideo/commit/1c375b81e0af8a76467d42dd46a7031adb9d71d3))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* **vite-plugin:** add entry point ([#721](https://github.com/havenhq/revideo/issues/721)) ([e634b6c](https://github.com/havenhq/revideo/commit/e634b6cb67b3c569d21d424661708ca946ea4cc3))
* **vite-plugin:** improve audio handling ([#154](https://github.com/havenhq/revideo/issues/154)) ([482f144](https://github.com/havenhq/revideo/commit/482f14447ae54543346fab0f9e5b94631c5cfd4d))
* **vite-plugin:** support glob for project files ([#834](https://github.com/havenhq/revideo/issues/834)) ([67029c4](https://github.com/havenhq/revideo/commit/67029c4c2cf756cbe2b7ed59dc55cb895de81d52)), closes [#324](https://github.com/havenhq/revideo/issues/324)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
* remove legacy package
* change to import paths

See [the migration guide](https://motion-canvas.github.io/guides/migration/12.0.0) for more info.
* change the way scenes are imported

Scene files no longer need to follow the pattern: `[name].scene.tsx`.
When importing scenes in the project file, a dedicated `?scene` query param should be used:
```ts
import example from './scenes/example?scene';

export default new Project({
  name: 'project',
  scenes: [example],
});
```
* change the overall structure of a project

`vite` and `@motion-canvas/vite-plugin` packages are now required to build a project:
```
npm i -D vite @motion-canvas/vite-plugin
```
The following `vite.config.ts` file needs to be created in the root of the project:
```ts
import {defineConfig} from 'vite';
import motionCanvas from '@motion-canvas/vite-plugin';

export default defineConfig({
  plugins: [motionCanvas()],
});
```

Types exposed by Motion Canvas are no longer global.
An additional `motion-canvas.d.ts` file needs to be created in the `src` directory:
```ts
/// <reference types="@motion-canvas/core/project" />
```

 Finally, the `bootstrap` function no longer exists.
 Project files should export an instance of the `Project` class instead:
 ```ts
 import {Project} from '@motion-canvas/core/lib';

 import example from './scenes/example.scene';

 export default new Project({
   name: 'project',
   scenes: [example],
   // same options as in bootstrap() are available:





## 0.3.3 (2024-05-17)


### Bug Fixes

* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* exclude preact from optimizations ([#894](https://github.com/havenhq/revideo/issues/894)) ([15687cc](https://github.com/havenhq/revideo/commit/15687cc975abcf4538a5ce51402d2308057d42e5))
* fix dependency bundling ([#897](https://github.com/havenhq/revideo/issues/897)) ([5376012](https://github.com/havenhq/revideo/commit/5376012cd02b8bca5abc2d3cf5a724662244c449))
* fix dependency bundling again ([#898](https://github.com/havenhq/revideo/issues/898)) ([d6e0f48](https://github.com/havenhq/revideo/commit/d6e0f48e67cf6baee710b8d5b185e620e67ceda5))
* fix project selection screen ([#938](https://github.com/havenhq/revideo/issues/938)) ([3b3f287](https://github.com/havenhq/revideo/commit/3b3f2871d9884c67f7d46215dd12fc02e27f8054))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove dependency pre-bundling warning ([#676](https://github.com/havenhq/revideo/issues/676)) ([38c81ff](https://github.com/havenhq/revideo/commit/38c81ffa5ea0ef2d2beec9d015896f5873629d74))
* **vite-plugin:** add missing headers to html ([#219](https://github.com/havenhq/revideo/issues/219)) ([2552bcf](https://github.com/havenhq/revideo/commit/2552bcfbe2e90f3d4b86810d39f8cee24349e405)), closes [#201](https://github.com/havenhq/revideo/issues/201)
* **vite-plugin:** can't assign port ([#538](https://github.com/havenhq/revideo/issues/538)) ([61b692b](https://github.com/havenhq/revideo/commit/61b692bf97bb7e15d31469ada2e3dda84c2b99f8))
* **vite-plugin:** create empty output directory if not exist ([#787](https://github.com/havenhq/revideo/issues/787)) ([20cceef](https://github.com/havenhq/revideo/commit/20cceef8525e809bff9706fcd7082d7e103a085b))
* **vite-plugin:** handle unusual characters in file names ([#821](https://github.com/havenhq/revideo/issues/821)) ([1e57497](https://github.com/havenhq/revideo/commit/1e5749785d55a41605a5438eee08672ef01f3914)), closes [#764](https://github.com/havenhq/revideo/issues/764)
* **vite-plugin:** ignore query param in devserver ([#351](https://github.com/havenhq/revideo/issues/351)) ([5644d72](https://github.com/havenhq/revideo/commit/5644d72d36adcdc817f0856aaff0be5507338cb8))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** hot module replacement for audio ([#793](https://github.com/havenhq/revideo/issues/793)) ([d40c1a8](https://github.com/havenhq/revideo/commit/d40c1a83c645c8984cca1ebc6fe687b445a0550c))
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* finalize custom exporters ([#660](https://github.com/havenhq/revideo/issues/660)) ([6a50430](https://github.com/havenhq/revideo/commit/6a50430cdf9928992ca078eba39c484a5253da2b))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* make transparent video optional ([#91](https://github.com/havenhq/revideo/issues/91)) ([6a052d5](https://github.com/havenhq/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* plugin architecture ([#564](https://github.com/havenhq/revideo/issues/564)) ([1c375b8](https://github.com/havenhq/revideo/commit/1c375b81e0af8a76467d42dd46a7031adb9d71d3))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* **vite-plugin:** add entry point ([#721](https://github.com/havenhq/revideo/issues/721)) ([e634b6c](https://github.com/havenhq/revideo/commit/e634b6cb67b3c569d21d424661708ca946ea4cc3))
* **vite-plugin:** improve audio handling ([#154](https://github.com/havenhq/revideo/issues/154)) ([482f144](https://github.com/havenhq/revideo/commit/482f14447ae54543346fab0f9e5b94631c5cfd4d))
* **vite-plugin:** support glob for project files ([#834](https://github.com/havenhq/revideo/issues/834)) ([67029c4](https://github.com/havenhq/revideo/commit/67029c4c2cf756cbe2b7ed59dc55cb895de81d52)), closes [#324](https://github.com/havenhq/revideo/issues/324)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
* remove legacy package
* change to import paths

See [the migration guide](https://motion-canvas.github.io/guides/migration/12.0.0) for more info.
* change the way scenes are imported

Scene files no longer need to follow the pattern: `[name].scene.tsx`.
When importing scenes in the project file, a dedicated `?scene` query param should be used:
```ts
import example from './scenes/example?scene';

export default new Project({
  name: 'project',
  scenes: [example],
});
```
* change the overall structure of a project

`vite` and `@motion-canvas/vite-plugin` packages are now required to build a project:
```
npm i -D vite @motion-canvas/vite-plugin
```
The following `vite.config.ts` file needs to be created in the root of the project:
```ts
import {defineConfig} from 'vite';
import motionCanvas from '@motion-canvas/vite-plugin';

export default defineConfig({
  plugins: [motionCanvas()],
});
```

Types exposed by Motion Canvas are no longer global.
An additional `motion-canvas.d.ts` file needs to be created in the `src` directory:
```ts
/// <reference types="@motion-canvas/core/project" />
```

 Finally, the `bootstrap` function no longer exists.
 Project files should export an instance of the `Project` class instead:
 ```ts
 import {Project} from '@motion-canvas/core/lib';

 import example from './scenes/example.scene';

 export default new Project({
   name: 'project',
   scenes: [example],
   // same options as in bootstrap() are available:





## 0.3.2 (2024-05-09)


### Bug Fixes

* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* exclude preact from optimizations ([#894](https://github.com/havenhq/revideo/issues/894)) ([15687cc](https://github.com/havenhq/revideo/commit/15687cc975abcf4538a5ce51402d2308057d42e5))
* fix dependency bundling ([#897](https://github.com/havenhq/revideo/issues/897)) ([5376012](https://github.com/havenhq/revideo/commit/5376012cd02b8bca5abc2d3cf5a724662244c449))
* fix dependency bundling again ([#898](https://github.com/havenhq/revideo/issues/898)) ([d6e0f48](https://github.com/havenhq/revideo/commit/d6e0f48e67cf6baee710b8d5b185e620e67ceda5))
* fix project selection screen ([#938](https://github.com/havenhq/revideo/issues/938)) ([3b3f287](https://github.com/havenhq/revideo/commit/3b3f2871d9884c67f7d46215dd12fc02e27f8054))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove dependency pre-bundling warning ([#676](https://github.com/havenhq/revideo/issues/676)) ([38c81ff](https://github.com/havenhq/revideo/commit/38c81ffa5ea0ef2d2beec9d015896f5873629d74))
* **vite-plugin:** add missing headers to html ([#219](https://github.com/havenhq/revideo/issues/219)) ([2552bcf](https://github.com/havenhq/revideo/commit/2552bcfbe2e90f3d4b86810d39f8cee24349e405)), closes [#201](https://github.com/havenhq/revideo/issues/201)
* **vite-plugin:** can't assign port ([#538](https://github.com/havenhq/revideo/issues/538)) ([61b692b](https://github.com/havenhq/revideo/commit/61b692bf97bb7e15d31469ada2e3dda84c2b99f8))
* **vite-plugin:** create empty output directory if not exist ([#787](https://github.com/havenhq/revideo/issues/787)) ([20cceef](https://github.com/havenhq/revideo/commit/20cceef8525e809bff9706fcd7082d7e103a085b))
* **vite-plugin:** handle unusual characters in file names ([#821](https://github.com/havenhq/revideo/issues/821)) ([1e57497](https://github.com/havenhq/revideo/commit/1e5749785d55a41605a5438eee08672ef01f3914)), closes [#764](https://github.com/havenhq/revideo/issues/764)
* **vite-plugin:** ignore query param in devserver ([#351](https://github.com/havenhq/revideo/issues/351)) ([5644d72](https://github.com/havenhq/revideo/commit/5644d72d36adcdc817f0856aaff0be5507338cb8))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** hot module replacement for audio ([#793](https://github.com/havenhq/revideo/issues/793)) ([d40c1a8](https://github.com/havenhq/revideo/commit/d40c1a83c645c8984cca1ebc6fe687b445a0550c))
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* finalize custom exporters ([#660](https://github.com/havenhq/revideo/issues/660)) ([6a50430](https://github.com/havenhq/revideo/commit/6a50430cdf9928992ca078eba39c484a5253da2b))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* make transparent video optional ([#91](https://github.com/havenhq/revideo/issues/91)) ([6a052d5](https://github.com/havenhq/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* plugin architecture ([#564](https://github.com/havenhq/revideo/issues/564)) ([1c375b8](https://github.com/havenhq/revideo/commit/1c375b81e0af8a76467d42dd46a7031adb9d71d3))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* **vite-plugin:** add entry point ([#721](https://github.com/havenhq/revideo/issues/721)) ([e634b6c](https://github.com/havenhq/revideo/commit/e634b6cb67b3c569d21d424661708ca946ea4cc3))
* **vite-plugin:** improve audio handling ([#154](https://github.com/havenhq/revideo/issues/154)) ([482f144](https://github.com/havenhq/revideo/commit/482f14447ae54543346fab0f9e5b94631c5cfd4d))
* **vite-plugin:** support glob for project files ([#834](https://github.com/havenhq/revideo/issues/834)) ([67029c4](https://github.com/havenhq/revideo/commit/67029c4c2cf756cbe2b7ed59dc55cb895de81d52)), closes [#324](https://github.com/havenhq/revideo/issues/324)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
* remove legacy package
* change to import paths

See [the migration guide](https://motion-canvas.github.io/guides/migration/12.0.0) for more info.
* change the way scenes are imported

Scene files no longer need to follow the pattern: `[name].scene.tsx`.
When importing scenes in the project file, a dedicated `?scene` query param should be used:
```ts
import example from './scenes/example?scene';

export default new Project({
  name: 'project',
  scenes: [example],
});
```
* change the overall structure of a project

`vite` and `@motion-canvas/vite-plugin` packages are now required to build a project:
```
npm i -D vite @motion-canvas/vite-plugin
```
The following `vite.config.ts` file needs to be created in the root of the project:
```ts
import {defineConfig} from 'vite';
import motionCanvas from '@motion-canvas/vite-plugin';

export default defineConfig({
  plugins: [motionCanvas()],
});
```

Types exposed by Motion Canvas are no longer global.
An additional `motion-canvas.d.ts` file needs to be created in the `src` directory:
```ts
/// <reference types="@motion-canvas/core/project" />
```

 Finally, the `bootstrap` function no longer exists.
 Project files should export an instance of the `Project` class instead:
 ```ts
 import {Project} from '@motion-canvas/core/lib';

 import example from './scenes/example.scene';

 export default new Project({
   name: 'project',
   scenes: [example],
   // same options as in bootstrap() are available:





## 0.3.1 (2024-05-08)


### Bug Fixes

* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* exclude preact from optimizations ([#894](https://github.com/havenhq/revideo/issues/894)) ([15687cc](https://github.com/havenhq/revideo/commit/15687cc975abcf4538a5ce51402d2308057d42e5))
* fix dependency bundling ([#897](https://github.com/havenhq/revideo/issues/897)) ([5376012](https://github.com/havenhq/revideo/commit/5376012cd02b8bca5abc2d3cf5a724662244c449))
* fix dependency bundling again ([#898](https://github.com/havenhq/revideo/issues/898)) ([d6e0f48](https://github.com/havenhq/revideo/commit/d6e0f48e67cf6baee710b8d5b185e620e67ceda5))
* fix project selection screen ([#938](https://github.com/havenhq/revideo/issues/938)) ([3b3f287](https://github.com/havenhq/revideo/commit/3b3f2871d9884c67f7d46215dd12fc02e27f8054))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove dependency pre-bundling warning ([#676](https://github.com/havenhq/revideo/issues/676)) ([38c81ff](https://github.com/havenhq/revideo/commit/38c81ffa5ea0ef2d2beec9d015896f5873629d74))
* **vite-plugin:** add missing headers to html ([#219](https://github.com/havenhq/revideo/issues/219)) ([2552bcf](https://github.com/havenhq/revideo/commit/2552bcfbe2e90f3d4b86810d39f8cee24349e405)), closes [#201](https://github.com/havenhq/revideo/issues/201)
* **vite-plugin:** can't assign port ([#538](https://github.com/havenhq/revideo/issues/538)) ([61b692b](https://github.com/havenhq/revideo/commit/61b692bf97bb7e15d31469ada2e3dda84c2b99f8))
* **vite-plugin:** create empty output directory if not exist ([#787](https://github.com/havenhq/revideo/issues/787)) ([20cceef](https://github.com/havenhq/revideo/commit/20cceef8525e809bff9706fcd7082d7e103a085b))
* **vite-plugin:** handle unusual characters in file names ([#821](https://github.com/havenhq/revideo/issues/821)) ([1e57497](https://github.com/havenhq/revideo/commit/1e5749785d55a41605a5438eee08672ef01f3914)), closes [#764](https://github.com/havenhq/revideo/issues/764)
* **vite-plugin:** ignore query param in devserver ([#351](https://github.com/havenhq/revideo/issues/351)) ([5644d72](https://github.com/havenhq/revideo/commit/5644d72d36adcdc817f0856aaff0be5507338cb8))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** hot module replacement for audio ([#793](https://github.com/havenhq/revideo/issues/793)) ([d40c1a8](https://github.com/havenhq/revideo/commit/d40c1a83c645c8984cca1ebc6fe687b445a0550c))
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* finalize custom exporters ([#660](https://github.com/havenhq/revideo/issues/660)) ([6a50430](https://github.com/havenhq/revideo/commit/6a50430cdf9928992ca078eba39c484a5253da2b))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* make transparent video optional ([#91](https://github.com/havenhq/revideo/issues/91)) ([6a052d5](https://github.com/havenhq/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* plugin architecture ([#564](https://github.com/havenhq/revideo/issues/564)) ([1c375b8](https://github.com/havenhq/revideo/commit/1c375b81e0af8a76467d42dd46a7031adb9d71d3))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* **vite-plugin:** add entry point ([#721](https://github.com/havenhq/revideo/issues/721)) ([e634b6c](https://github.com/havenhq/revideo/commit/e634b6cb67b3c569d21d424661708ca946ea4cc3))
* **vite-plugin:** improve audio handling ([#154](https://github.com/havenhq/revideo/issues/154)) ([482f144](https://github.com/havenhq/revideo/commit/482f14447ae54543346fab0f9e5b94631c5cfd4d))
* **vite-plugin:** support glob for project files ([#834](https://github.com/havenhq/revideo/issues/834)) ([67029c4](https://github.com/havenhq/revideo/commit/67029c4c2cf756cbe2b7ed59dc55cb895de81d52)), closes [#324](https://github.com/havenhq/revideo/issues/324)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
* remove legacy package
* change to import paths

See [the migration guide](https://motion-canvas.github.io/guides/migration/12.0.0) for more info.
* change the way scenes are imported

Scene files no longer need to follow the pattern: `[name].scene.tsx`.
When importing scenes in the project file, a dedicated `?scene` query param should be used:
```ts
import example from './scenes/example?scene';

export default new Project({
  name: 'project',
  scenes: [example],
});
```
* change the overall structure of a project

`vite` and `@motion-canvas/vite-plugin` packages are now required to build a project:
```
npm i -D vite @motion-canvas/vite-plugin
```
The following `vite.config.ts` file needs to be created in the root of the project:
```ts
import {defineConfig} from 'vite';
import motionCanvas from '@motion-canvas/vite-plugin';

export default defineConfig({
  plugins: [motionCanvas()],
});
```

Types exposed by Motion Canvas are no longer global.
An additional `motion-canvas.d.ts` file needs to be created in the `src` directory:
```ts
/// <reference types="@motion-canvas/core/project" />
```

 Finally, the `bootstrap` function no longer exists.
 Project files should export an instance of the `Project` class instead:
 ```ts
 import {Project} from '@motion-canvas/core/lib';

 import example from './scenes/example.scene';

 export default new Project({
   name: 'project',
   scenes: [example],
   // same options as in bootstrap() are available:





# 0.3.0 (2024-05-03)


### Bug Fixes

* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* exclude preact from optimizations ([#894](https://github.com/havenhq/revideo/issues/894)) ([15687cc](https://github.com/havenhq/revideo/commit/15687cc975abcf4538a5ce51402d2308057d42e5))
* fix dependency bundling ([#897](https://github.com/havenhq/revideo/issues/897)) ([5376012](https://github.com/havenhq/revideo/commit/5376012cd02b8bca5abc2d3cf5a724662244c449))
* fix dependency bundling again ([#898](https://github.com/havenhq/revideo/issues/898)) ([d6e0f48](https://github.com/havenhq/revideo/commit/d6e0f48e67cf6baee710b8d5b185e620e67ceda5))
* fix project selection screen ([#938](https://github.com/havenhq/revideo/issues/938)) ([3b3f287](https://github.com/havenhq/revideo/commit/3b3f2871d9884c67f7d46215dd12fc02e27f8054))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove dependency pre-bundling warning ([#676](https://github.com/havenhq/revideo/issues/676)) ([38c81ff](https://github.com/havenhq/revideo/commit/38c81ffa5ea0ef2d2beec9d015896f5873629d74))
* **vite-plugin:** add missing headers to html ([#219](https://github.com/havenhq/revideo/issues/219)) ([2552bcf](https://github.com/havenhq/revideo/commit/2552bcfbe2e90f3d4b86810d39f8cee24349e405)), closes [#201](https://github.com/havenhq/revideo/issues/201)
* **vite-plugin:** can't assign port ([#538](https://github.com/havenhq/revideo/issues/538)) ([61b692b](https://github.com/havenhq/revideo/commit/61b692bf97bb7e15d31469ada2e3dda84c2b99f8))
* **vite-plugin:** create empty output directory if not exist ([#787](https://github.com/havenhq/revideo/issues/787)) ([20cceef](https://github.com/havenhq/revideo/commit/20cceef8525e809bff9706fcd7082d7e103a085b))
* **vite-plugin:** handle unusual characters in file names ([#821](https://github.com/havenhq/revideo/issues/821)) ([1e57497](https://github.com/havenhq/revideo/commit/1e5749785d55a41605a5438eee08672ef01f3914)), closes [#764](https://github.com/havenhq/revideo/issues/764)
* **vite-plugin:** ignore query param in devserver ([#351](https://github.com/havenhq/revideo/issues/351)) ([5644d72](https://github.com/havenhq/revideo/commit/5644d72d36adcdc817f0856aaff0be5507338cb8))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** hot module replacement for audio ([#793](https://github.com/havenhq/revideo/issues/793)) ([d40c1a8](https://github.com/havenhq/revideo/commit/d40c1a83c645c8984cca1ebc6fe687b445a0550c))
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* finalize custom exporters ([#660](https://github.com/havenhq/revideo/issues/660)) ([6a50430](https://github.com/havenhq/revideo/commit/6a50430cdf9928992ca078eba39c484a5253da2b))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* plugin architecture ([#564](https://github.com/havenhq/revideo/issues/564)) ([1c375b8](https://github.com/havenhq/revideo/commit/1c375b81e0af8a76467d42dd46a7031adb9d71d3))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* **vite-plugin:** add entry point ([#721](https://github.com/havenhq/revideo/issues/721)) ([e634b6c](https://github.com/havenhq/revideo/commit/e634b6cb67b3c569d21d424661708ca946ea4cc3))
* **vite-plugin:** improve audio handling ([#154](https://github.com/havenhq/revideo/issues/154)) ([482f144](https://github.com/havenhq/revideo/commit/482f14447ae54543346fab0f9e5b94631c5cfd4d))
* **vite-plugin:** support glob for project files ([#834](https://github.com/havenhq/revideo/issues/834)) ([67029c4](https://github.com/havenhq/revideo/commit/67029c4c2cf756cbe2b7ed59dc55cb895de81d52)), closes [#324](https://github.com/havenhq/revideo/issues/324)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
* remove legacy package
* change to import paths

See [the migration guide](https://motion-canvas.github.io/guides/migration/12.0.0) for more info.
* change the way scenes are imported

Scene files no longer need to follow the pattern: `[name].scene.tsx`.
When importing scenes in the project file, a dedicated `?scene` query param should be used:
```ts
import example from './scenes/example?scene';

export default new Project({
  name: 'project',
  scenes: [example],
});
```
* change the overall structure of a project

`vite` and `@motion-canvas/vite-plugin` packages are now required to build a project:
```
npm i -D vite @motion-canvas/vite-plugin
```
The following `vite.config.ts` file needs to be created in the root of the project:
```ts
import {defineConfig} from 'vite';
import motionCanvas from '@motion-canvas/vite-plugin';

export default defineConfig({
  plugins: [motionCanvas()],
});
```

Types exposed by Motion Canvas are no longer global.
An additional `motion-canvas.d.ts` file needs to be created in the `src` directory:
```ts
/// <reference types="@motion-canvas/core/project" />
```

 Finally, the `bootstrap` function no longer exists.
 Project files should export an instance of the `Project` class instead:
 ```ts
 import {Project} from '@motion-canvas/core/lib';

 import example from './scenes/example.scene';

 export default new Project({
   name: 'project',
   scenes: [example],
   // same options as in bootstrap() are available:





## 0.2.13 (2024-04-24)


### Bug Fixes

* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* exclude preact from optimizations ([#894](https://github.com/havenhq/revideo/issues/894)) ([15687cc](https://github.com/havenhq/revideo/commit/15687cc975abcf4538a5ce51402d2308057d42e5))
* fix dependency bundling ([#897](https://github.com/havenhq/revideo/issues/897)) ([5376012](https://github.com/havenhq/revideo/commit/5376012cd02b8bca5abc2d3cf5a724662244c449))
* fix dependency bundling again ([#898](https://github.com/havenhq/revideo/issues/898)) ([d6e0f48](https://github.com/havenhq/revideo/commit/d6e0f48e67cf6baee710b8d5b185e620e67ceda5))
* fix project selection screen ([#938](https://github.com/havenhq/revideo/issues/938)) ([3b3f287](https://github.com/havenhq/revideo/commit/3b3f2871d9884c67f7d46215dd12fc02e27f8054))
* remove dependency pre-bundling warning ([#676](https://github.com/havenhq/revideo/issues/676)) ([38c81ff](https://github.com/havenhq/revideo/commit/38c81ffa5ea0ef2d2beec9d015896f5873629d74))
* **vite-plugin:** add missing headers to html ([#219](https://github.com/havenhq/revideo/issues/219)) ([2552bcf](https://github.com/havenhq/revideo/commit/2552bcfbe2e90f3d4b86810d39f8cee24349e405)), closes [#201](https://github.com/havenhq/revideo/issues/201)
* **vite-plugin:** can't assign port ([#538](https://github.com/havenhq/revideo/issues/538)) ([61b692b](https://github.com/havenhq/revideo/commit/61b692bf97bb7e15d31469ada2e3dda84c2b99f8))
* **vite-plugin:** create empty output directory if not exist ([#787](https://github.com/havenhq/revideo/issues/787)) ([20cceef](https://github.com/havenhq/revideo/commit/20cceef8525e809bff9706fcd7082d7e103a085b))
* **vite-plugin:** handle unusual characters in file names ([#821](https://github.com/havenhq/revideo/issues/821)) ([1e57497](https://github.com/havenhq/revideo/commit/1e5749785d55a41605a5438eee08672ef01f3914)), closes [#764](https://github.com/havenhq/revideo/issues/764)
* **vite-plugin:** ignore query param in devserver ([#351](https://github.com/havenhq/revideo/issues/351)) ([5644d72](https://github.com/havenhq/revideo/commit/5644d72d36adcdc817f0856aaff0be5507338cb8))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** hot module replacement for audio ([#793](https://github.com/havenhq/revideo/issues/793)) ([d40c1a8](https://github.com/havenhq/revideo/commit/d40c1a83c645c8984cca1ebc6fe687b445a0550c))
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* finalize custom exporters ([#660](https://github.com/havenhq/revideo/issues/660)) ([6a50430](https://github.com/havenhq/revideo/commit/6a50430cdf9928992ca078eba39c484a5253da2b))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* plugin architecture ([#564](https://github.com/havenhq/revideo/issues/564)) ([1c375b8](https://github.com/havenhq/revideo/commit/1c375b81e0af8a76467d42dd46a7031adb9d71d3))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* **vite-plugin:** add entry point ([#721](https://github.com/havenhq/revideo/issues/721)) ([e634b6c](https://github.com/havenhq/revideo/commit/e634b6cb67b3c569d21d424661708ca946ea4cc3))
* **vite-plugin:** improve audio handling ([#154](https://github.com/havenhq/revideo/issues/154)) ([482f144](https://github.com/havenhq/revideo/commit/482f14447ae54543346fab0f9e5b94631c5cfd4d))
* **vite-plugin:** support glob for project files ([#834](https://github.com/havenhq/revideo/issues/834)) ([67029c4](https://github.com/havenhq/revideo/commit/67029c4c2cf756cbe2b7ed59dc55cb895de81d52)), closes [#324](https://github.com/havenhq/revideo/issues/324)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
* remove legacy package
* change to import paths

See [the migration guide](https://motion-canvas.github.io/guides/migration/12.0.0) for more info.
* change the way scenes are imported

Scene files no longer need to follow the pattern: `[name].scene.tsx`.
When importing scenes in the project file, a dedicated `?scene` query param should be used:
```ts
import example from './scenes/example?scene';

export default new Project({
  name: 'project',
  scenes: [example],
});
```
* change the overall structure of a project

`vite` and `@motion-canvas/vite-plugin` packages are now required to build a project:
```
npm i -D vite @motion-canvas/vite-plugin
```
The following `vite.config.ts` file needs to be created in the root of the project:
```ts
import {defineConfig} from 'vite';
import motionCanvas from '@motion-canvas/vite-plugin';

export default defineConfig({
  plugins: [motionCanvas()],
});
```

Types exposed by Motion Canvas are no longer global.
An additional `motion-canvas.d.ts` file needs to be created in the `src` directory:
```ts
/// <reference types="@motion-canvas/core/project" />
```

 Finally, the `bootstrap` function no longer exists.
 Project files should export an instance of the `Project` class instead:
 ```ts
 import {Project} from '@motion-canvas/core/lib';

 import example from './scenes/example.scene';

 export default new Project({
   name: 'project',
   scenes: [example],
   // same options as in bootstrap() are available:





## 0.2.11 (2024-04-22)


### Bug Fixes

* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* exclude preact from optimizations ([#894](https://github.com/havenhq/revideo/issues/894)) ([15687cc](https://github.com/havenhq/revideo/commit/15687cc975abcf4538a5ce51402d2308057d42e5))
* fix dependency bundling ([#897](https://github.com/havenhq/revideo/issues/897)) ([5376012](https://github.com/havenhq/revideo/commit/5376012cd02b8bca5abc2d3cf5a724662244c449))
* fix dependency bundling again ([#898](https://github.com/havenhq/revideo/issues/898)) ([d6e0f48](https://github.com/havenhq/revideo/commit/d6e0f48e67cf6baee710b8d5b185e620e67ceda5))
* fix project selection screen ([#938](https://github.com/havenhq/revideo/issues/938)) ([3b3f287](https://github.com/havenhq/revideo/commit/3b3f2871d9884c67f7d46215dd12fc02e27f8054))
* remove dependency pre-bundling warning ([#676](https://github.com/havenhq/revideo/issues/676)) ([38c81ff](https://github.com/havenhq/revideo/commit/38c81ffa5ea0ef2d2beec9d015896f5873629d74))
* **vite-plugin:** add missing headers to html ([#219](https://github.com/havenhq/revideo/issues/219)) ([2552bcf](https://github.com/havenhq/revideo/commit/2552bcfbe2e90f3d4b86810d39f8cee24349e405)), closes [#201](https://github.com/havenhq/revideo/issues/201)
* **vite-plugin:** can't assign port ([#538](https://github.com/havenhq/revideo/issues/538)) ([61b692b](https://github.com/havenhq/revideo/commit/61b692bf97bb7e15d31469ada2e3dda84c2b99f8))
* **vite-plugin:** create empty output directory if not exist ([#787](https://github.com/havenhq/revideo/issues/787)) ([20cceef](https://github.com/havenhq/revideo/commit/20cceef8525e809bff9706fcd7082d7e103a085b))
* **vite-plugin:** handle unusual characters in file names ([#821](https://github.com/havenhq/revideo/issues/821)) ([1e57497](https://github.com/havenhq/revideo/commit/1e5749785d55a41605a5438eee08672ef01f3914)), closes [#764](https://github.com/havenhq/revideo/issues/764)
* **vite-plugin:** ignore query param in devserver ([#351](https://github.com/havenhq/revideo/issues/351)) ([5644d72](https://github.com/havenhq/revideo/commit/5644d72d36adcdc817f0856aaff0be5507338cb8))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** hot module replacement for audio ([#793](https://github.com/havenhq/revideo/issues/793)) ([d40c1a8](https://github.com/havenhq/revideo/commit/d40c1a83c645c8984cca1ebc6fe687b445a0550c))
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* finalize custom exporters ([#660](https://github.com/havenhq/revideo/issues/660)) ([6a50430](https://github.com/havenhq/revideo/commit/6a50430cdf9928992ca078eba39c484a5253da2b))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* plugin architecture ([#564](https://github.com/havenhq/revideo/issues/564)) ([1c375b8](https://github.com/havenhq/revideo/commit/1c375b81e0af8a76467d42dd46a7031adb9d71d3))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* **vite-plugin:** add entry point ([#721](https://github.com/havenhq/revideo/issues/721)) ([e634b6c](https://github.com/havenhq/revideo/commit/e634b6cb67b3c569d21d424661708ca946ea4cc3))
* **vite-plugin:** improve audio handling ([#154](https://github.com/havenhq/revideo/issues/154)) ([482f144](https://github.com/havenhq/revideo/commit/482f14447ae54543346fab0f9e5b94631c5cfd4d))
* **vite-plugin:** support glob for project files ([#834](https://github.com/havenhq/revideo/issues/834)) ([67029c4](https://github.com/havenhq/revideo/commit/67029c4c2cf756cbe2b7ed59dc55cb895de81d52)), closes [#324](https://github.com/havenhq/revideo/issues/324)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
* remove legacy package
* change to import paths

See [the migration guide](https://motion-canvas.github.io/guides/migration/12.0.0) for more info.
* change the way scenes are imported

Scene files no longer need to follow the pattern: `[name].scene.tsx`.
When importing scenes in the project file, a dedicated `?scene` query param should be used:
```ts
import example from './scenes/example?scene';

export default new Project({
  name: 'project',
  scenes: [example],
});
```
* change the overall structure of a project

`vite` and `@motion-canvas/vite-plugin` packages are now required to build a project:
```
npm i -D vite @motion-canvas/vite-plugin
```
The following `vite.config.ts` file needs to be created in the root of the project:
```ts
import {defineConfig} from 'vite';
import motionCanvas from '@motion-canvas/vite-plugin';

export default defineConfig({
  plugins: [motionCanvas()],
});
```

Types exposed by Motion Canvas are no longer global.
An additional `motion-canvas.d.ts` file needs to be created in the `src` directory:
```ts
/// <reference types="@motion-canvas/core/project" />
```

 Finally, the `bootstrap` function no longer exists.
 Project files should export an instance of the `Project` class instead:
 ```ts
 import {Project} from '@motion-canvas/core/lib';

 import example from './scenes/example.scene';

 export default new Project({
   name: 'project',
   scenes: [example],
   // same options as in bootstrap() are available:
