# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 0.5.4 (2024-08-06)


### Bug Fixes

* change executable file permissions ([#38](https://github.com/havenhq/revideo/issues/38)) ([23025a2](https://github.com/havenhq/revideo/commit/23025a2caefd993f7e4751b1efced3a25ed497a6))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **create:** fix package type ([#40](https://github.com/havenhq/revideo/issues/40)) ([f07aa5d](https://github.com/havenhq/revideo/commit/f07aa5d8f6c3485464ed3158187340c7db7d5af7))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* npm init shows correct setup commands for nextjs template ([#148](https://github.com/havenhq/revideo/issues/148)) ([882925e](https://github.com/havenhq/revideo/commit/882925ee897e4fd9c84d77ed9f73546ad39f3de1))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove comma in vite.config.ts ([#86](https://github.com/havenhq/revideo/issues/86)) ([c1a35cf](https://github.com/havenhq/revideo/commit/c1a35cf82f22271b7aec233df4a664136427c295))
* remove unnecessary rendererplugins to fix parameterized rendering ([#27](https://github.com/havenhq/revideo/issues/27)) ([c5f9bd6](https://github.com/havenhq/revideo/commit/c5f9bd678b40fae532a1bc6b3c466a5d6920e4ac))
* **vite-plugin:** fix js template ([#337](https://github.com/havenhq/revideo/issues/337)) ([3b33d73](https://github.com/havenhq/revideo/commit/3b33d73416541d491b633bada29f085f5489f6c2))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* **create:** add exporter selection ([#673](https://github.com/havenhq/revideo/issues/673)) ([82fd47d](https://github.com/havenhq/revideo/commit/82fd47d93ffad6125a685880a132ce0d3a388693))
* **create:** include simple animation ([#931](https://github.com/havenhq/revideo/issues/931)) ([925f63f](https://github.com/havenhq/revideo/commit/925f63f3588922224511b1687ac44ba7b9920d83))
* **create:** support command-line arguments ([#668](https://github.com/havenhq/revideo/issues/668)) ([fa62a98](https://github.com/havenhq/revideo/commit/fa62a9868d5cd33f1cb6ac5f147cca81917457dc))
* encode video with wasm ([#162](https://github.com/havenhq/revideo/issues/162)) ([c756fd8](https://github.com/havenhq/revideo/commit/c756fd8293d49b8abc8887c94bfb8f0d04e65842))
* expose render progress as argument ([#98](https://github.com/havenhq/revideo/issues/98)) ([4470e9e](https://github.com/havenhq/revideo/commit/4470e9e3715cdfbd36a54caa4978da2704d3f5f1))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* make progress logging optional through a callback ([#83](https://github.com/havenhq/revideo/issues/83)) ([a9767dd](https://github.com/havenhq/revideo/commit/a9767dda0cdc696547a1b2397a707a90a4f63a1a))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* update quickstart project in "create" package ([#11](https://github.com/havenhq/revideo/issues/11)) ([7d30483](https://github.com/havenhq/revideo/commit/7d304834e2305d1fac0079ac057eaea3bcb33c66))
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

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





## 0.5.3 (2024-07-31)


### Bug Fixes

* change executable file permissions ([#38](https://github.com/havenhq/revideo/issues/38)) ([23025a2](https://github.com/havenhq/revideo/commit/23025a2caefd993f7e4751b1efced3a25ed497a6))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **create:** fix package type ([#40](https://github.com/havenhq/revideo/issues/40)) ([f07aa5d](https://github.com/havenhq/revideo/commit/f07aa5d8f6c3485464ed3158187340c7db7d5af7))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* npm init shows correct setup commands for nextjs template ([#148](https://github.com/havenhq/revideo/issues/148)) ([882925e](https://github.com/havenhq/revideo/commit/882925ee897e4fd9c84d77ed9f73546ad39f3de1))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove comma in vite.config.ts ([#86](https://github.com/havenhq/revideo/issues/86)) ([c1a35cf](https://github.com/havenhq/revideo/commit/c1a35cf82f22271b7aec233df4a664136427c295))
* remove unnecessary rendererplugins to fix parameterized rendering ([#27](https://github.com/havenhq/revideo/issues/27)) ([c5f9bd6](https://github.com/havenhq/revideo/commit/c5f9bd678b40fae532a1bc6b3c466a5d6920e4ac))
* **vite-plugin:** fix js template ([#337](https://github.com/havenhq/revideo/issues/337)) ([3b33d73](https://github.com/havenhq/revideo/commit/3b33d73416541d491b633bada29f085f5489f6c2))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* **create:** add exporter selection ([#673](https://github.com/havenhq/revideo/issues/673)) ([82fd47d](https://github.com/havenhq/revideo/commit/82fd47d93ffad6125a685880a132ce0d3a388693))
* **create:** include simple animation ([#931](https://github.com/havenhq/revideo/issues/931)) ([925f63f](https://github.com/havenhq/revideo/commit/925f63f3588922224511b1687ac44ba7b9920d83))
* **create:** support command-line arguments ([#668](https://github.com/havenhq/revideo/issues/668)) ([fa62a98](https://github.com/havenhq/revideo/commit/fa62a9868d5cd33f1cb6ac5f147cca81917457dc))
* encode video with wasm ([#162](https://github.com/havenhq/revideo/issues/162)) ([c756fd8](https://github.com/havenhq/revideo/commit/c756fd8293d49b8abc8887c94bfb8f0d04e65842))
* expose render progress as argument ([#98](https://github.com/havenhq/revideo/issues/98)) ([4470e9e](https://github.com/havenhq/revideo/commit/4470e9e3715cdfbd36a54caa4978da2704d3f5f1))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* make progress logging optional through a callback ([#83](https://github.com/havenhq/revideo/issues/83)) ([a9767dd](https://github.com/havenhq/revideo/commit/a9767dda0cdc696547a1b2397a707a90a4f63a1a))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* update quickstart project in "create" package ([#11](https://github.com/havenhq/revideo/issues/11)) ([7d30483](https://github.com/havenhq/revideo/commit/7d304834e2305d1fac0079ac057eaea3bcb33c66))
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

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





## 0.5.2 (2024-07-25)


### Bug Fixes

* change executable file permissions ([#38](https://github.com/havenhq/revideo/issues/38)) ([23025a2](https://github.com/havenhq/revideo/commit/23025a2caefd993f7e4751b1efced3a25ed497a6))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **create:** fix package type ([#40](https://github.com/havenhq/revideo/issues/40)) ([f07aa5d](https://github.com/havenhq/revideo/commit/f07aa5d8f6c3485464ed3158187340c7db7d5af7))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* npm init shows correct setup commands for nextjs template ([#148](https://github.com/havenhq/revideo/issues/148)) ([882925e](https://github.com/havenhq/revideo/commit/882925ee897e4fd9c84d77ed9f73546ad39f3de1))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove comma in vite.config.ts ([#86](https://github.com/havenhq/revideo/issues/86)) ([c1a35cf](https://github.com/havenhq/revideo/commit/c1a35cf82f22271b7aec233df4a664136427c295))
* remove unnecessary rendererplugins to fix parameterized rendering ([#27](https://github.com/havenhq/revideo/issues/27)) ([c5f9bd6](https://github.com/havenhq/revideo/commit/c5f9bd678b40fae532a1bc6b3c466a5d6920e4ac))
* **vite-plugin:** fix js template ([#337](https://github.com/havenhq/revideo/issues/337)) ([3b33d73](https://github.com/havenhq/revideo/commit/3b33d73416541d491b633bada29f085f5489f6c2))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* **create:** add exporter selection ([#673](https://github.com/havenhq/revideo/issues/673)) ([82fd47d](https://github.com/havenhq/revideo/commit/82fd47d93ffad6125a685880a132ce0d3a388693))
* **create:** include simple animation ([#931](https://github.com/havenhq/revideo/issues/931)) ([925f63f](https://github.com/havenhq/revideo/commit/925f63f3588922224511b1687ac44ba7b9920d83))
* **create:** support command-line arguments ([#668](https://github.com/havenhq/revideo/issues/668)) ([fa62a98](https://github.com/havenhq/revideo/commit/fa62a9868d5cd33f1cb6ac5f147cca81917457dc))
* encode video with wasm ([#162](https://github.com/havenhq/revideo/issues/162)) ([c756fd8](https://github.com/havenhq/revideo/commit/c756fd8293d49b8abc8887c94bfb8f0d04e65842))
* expose render progress as argument ([#98](https://github.com/havenhq/revideo/issues/98)) ([4470e9e](https://github.com/havenhq/revideo/commit/4470e9e3715cdfbd36a54caa4978da2704d3f5f1))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* make progress logging optional through a callback ([#83](https://github.com/havenhq/revideo/issues/83)) ([a9767dd](https://github.com/havenhq/revideo/commit/a9767dda0cdc696547a1b2397a707a90a4f63a1a))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* update quickstart project in "create" package ([#11](https://github.com/havenhq/revideo/issues/11)) ([7d30483](https://github.com/havenhq/revideo/commit/7d304834e2305d1fac0079ac057eaea3bcb33c66))
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

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





# 0.5.0 (2024-07-24)


### Bug Fixes

* change executable file permissions ([#38](https://github.com/havenhq/revideo/issues/38)) ([23025a2](https://github.com/havenhq/revideo/commit/23025a2caefd993f7e4751b1efced3a25ed497a6))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **create:** fix package type ([#40](https://github.com/havenhq/revideo/issues/40)) ([f07aa5d](https://github.com/havenhq/revideo/commit/f07aa5d8f6c3485464ed3158187340c7db7d5af7))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* npm init shows correct setup commands for nextjs template ([#148](https://github.com/havenhq/revideo/issues/148)) ([882925e](https://github.com/havenhq/revideo/commit/882925ee897e4fd9c84d77ed9f73546ad39f3de1))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove comma in vite.config.ts ([#86](https://github.com/havenhq/revideo/issues/86)) ([c1a35cf](https://github.com/havenhq/revideo/commit/c1a35cf82f22271b7aec233df4a664136427c295))
* remove unnecessary rendererplugins to fix parameterized rendering ([#27](https://github.com/havenhq/revideo/issues/27)) ([c5f9bd6](https://github.com/havenhq/revideo/commit/c5f9bd678b40fae532a1bc6b3c466a5d6920e4ac))
* **vite-plugin:** fix js template ([#337](https://github.com/havenhq/revideo/issues/337)) ([3b33d73](https://github.com/havenhq/revideo/commit/3b33d73416541d491b633bada29f085f5489f6c2))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* **create:** add exporter selection ([#673](https://github.com/havenhq/revideo/issues/673)) ([82fd47d](https://github.com/havenhq/revideo/commit/82fd47d93ffad6125a685880a132ce0d3a388693))
* **create:** include simple animation ([#931](https://github.com/havenhq/revideo/issues/931)) ([925f63f](https://github.com/havenhq/revideo/commit/925f63f3588922224511b1687ac44ba7b9920d83))
* **create:** support command-line arguments ([#668](https://github.com/havenhq/revideo/issues/668)) ([fa62a98](https://github.com/havenhq/revideo/commit/fa62a9868d5cd33f1cb6ac5f147cca81917457dc))
* encode video with wasm ([#162](https://github.com/havenhq/revideo/issues/162)) ([c756fd8](https://github.com/havenhq/revideo/commit/c756fd8293d49b8abc8887c94bfb8f0d04e65842))
* expose render progress as argument ([#98](https://github.com/havenhq/revideo/issues/98)) ([4470e9e](https://github.com/havenhq/revideo/commit/4470e9e3715cdfbd36a54caa4978da2704d3f5f1))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* make progress logging optional through a callback ([#83](https://github.com/havenhq/revideo/issues/83)) ([a9767dd](https://github.com/havenhq/revideo/commit/a9767dda0cdc696547a1b2397a707a90a4f63a1a))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* update quickstart project in "create" package ([#11](https://github.com/havenhq/revideo/issues/11)) ([7d30483](https://github.com/havenhq/revideo/commit/7d304834e2305d1fac0079ac057eaea3bcb33c66))
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

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





## 0.4.8 (2024-07-15)


### Bug Fixes

* change executable file permissions ([#38](https://github.com/havenhq/revideo/issues/38)) ([23025a2](https://github.com/havenhq/revideo/commit/23025a2caefd993f7e4751b1efced3a25ed497a6))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **create:** fix package type ([#40](https://github.com/havenhq/revideo/issues/40)) ([f07aa5d](https://github.com/havenhq/revideo/commit/f07aa5d8f6c3485464ed3158187340c7db7d5af7))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* npm init shows correct setup commands for nextjs template ([#148](https://github.com/havenhq/revideo/issues/148)) ([882925e](https://github.com/havenhq/revideo/commit/882925ee897e4fd9c84d77ed9f73546ad39f3de1))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove comma in vite.config.ts ([#86](https://github.com/havenhq/revideo/issues/86)) ([c1a35cf](https://github.com/havenhq/revideo/commit/c1a35cf82f22271b7aec233df4a664136427c295))
* remove unnecessary rendererplugins to fix parameterized rendering ([#27](https://github.com/havenhq/revideo/issues/27)) ([c5f9bd6](https://github.com/havenhq/revideo/commit/c5f9bd678b40fae532a1bc6b3c466a5d6920e4ac))
* **vite-plugin:** fix js template ([#337](https://github.com/havenhq/revideo/issues/337)) ([3b33d73](https://github.com/havenhq/revideo/commit/3b33d73416541d491b633bada29f085f5489f6c2))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* **create:** add exporter selection ([#673](https://github.com/havenhq/revideo/issues/673)) ([82fd47d](https://github.com/havenhq/revideo/commit/82fd47d93ffad6125a685880a132ce0d3a388693))
* **create:** include simple animation ([#931](https://github.com/havenhq/revideo/issues/931)) ([925f63f](https://github.com/havenhq/revideo/commit/925f63f3588922224511b1687ac44ba7b9920d83))
* **create:** support command-line arguments ([#668](https://github.com/havenhq/revideo/issues/668)) ([fa62a98](https://github.com/havenhq/revideo/commit/fa62a9868d5cd33f1cb6ac5f147cca81917457dc))
* encode video with wasm ([#162](https://github.com/havenhq/revideo/issues/162)) ([c756fd8](https://github.com/havenhq/revideo/commit/c756fd8293d49b8abc8887c94bfb8f0d04e65842))
* expose render progress as argument ([#98](https://github.com/havenhq/revideo/issues/98)) ([4470e9e](https://github.com/havenhq/revideo/commit/4470e9e3715cdfbd36a54caa4978da2704d3f5f1))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* make progress logging optional through a callback ([#83](https://github.com/havenhq/revideo/issues/83)) ([a9767dd](https://github.com/havenhq/revideo/commit/a9767dda0cdc696547a1b2397a707a90a4f63a1a))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* update quickstart project in "create" package ([#11](https://github.com/havenhq/revideo/issues/11)) ([7d30483](https://github.com/havenhq/revideo/commit/7d304834e2305d1fac0079ac057eaea3bcb33c66))
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

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





## 0.4.7 (2024-07-10)


### Bug Fixes

* change executable file permissions ([#38](https://github.com/havenhq/revideo/issues/38)) ([23025a2](https://github.com/havenhq/revideo/commit/23025a2caefd993f7e4751b1efced3a25ed497a6))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **create:** fix package type ([#40](https://github.com/havenhq/revideo/issues/40)) ([f07aa5d](https://github.com/havenhq/revideo/commit/f07aa5d8f6c3485464ed3158187340c7db7d5af7))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* npm init shows correct setup commands for nextjs template ([#148](https://github.com/havenhq/revideo/issues/148)) ([882925e](https://github.com/havenhq/revideo/commit/882925ee897e4fd9c84d77ed9f73546ad39f3de1))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove comma in vite.config.ts ([#86](https://github.com/havenhq/revideo/issues/86)) ([c1a35cf](https://github.com/havenhq/revideo/commit/c1a35cf82f22271b7aec233df4a664136427c295))
* remove unnecessary rendererplugins to fix parameterized rendering ([#27](https://github.com/havenhq/revideo/issues/27)) ([c5f9bd6](https://github.com/havenhq/revideo/commit/c5f9bd678b40fae532a1bc6b3c466a5d6920e4ac))
* **vite-plugin:** fix js template ([#337](https://github.com/havenhq/revideo/issues/337)) ([3b33d73](https://github.com/havenhq/revideo/commit/3b33d73416541d491b633bada29f085f5489f6c2))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* **create:** add exporter selection ([#673](https://github.com/havenhq/revideo/issues/673)) ([82fd47d](https://github.com/havenhq/revideo/commit/82fd47d93ffad6125a685880a132ce0d3a388693))
* **create:** include simple animation ([#931](https://github.com/havenhq/revideo/issues/931)) ([925f63f](https://github.com/havenhq/revideo/commit/925f63f3588922224511b1687ac44ba7b9920d83))
* **create:** support command-line arguments ([#668](https://github.com/havenhq/revideo/issues/668)) ([fa62a98](https://github.com/havenhq/revideo/commit/fa62a9868d5cd33f1cb6ac5f147cca81917457dc))
* encode video with wasm ([#162](https://github.com/havenhq/revideo/issues/162)) ([c756fd8](https://github.com/havenhq/revideo/commit/c756fd8293d49b8abc8887c94bfb8f0d04e65842))
* expose render progress as argument ([#98](https://github.com/havenhq/revideo/issues/98)) ([4470e9e](https://github.com/havenhq/revideo/commit/4470e9e3715cdfbd36a54caa4978da2704d3f5f1))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* make progress logging optional through a callback ([#83](https://github.com/havenhq/revideo/issues/83)) ([a9767dd](https://github.com/havenhq/revideo/commit/a9767dda0cdc696547a1b2397a707a90a4f63a1a))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* update quickstart project in "create" package ([#11](https://github.com/havenhq/revideo/issues/11)) ([7d30483](https://github.com/havenhq/revideo/commit/7d304834e2305d1fac0079ac057eaea3bcb33c66))
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

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





## 0.4.6 (2024-06-27)


### Bug Fixes

* change executable file permissions ([#38](https://github.com/havenhq/revideo/issues/38)) ([23025a2](https://github.com/havenhq/revideo/commit/23025a2caefd993f7e4751b1efced3a25ed497a6))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **create:** fix package type ([#40](https://github.com/havenhq/revideo/issues/40)) ([f07aa5d](https://github.com/havenhq/revideo/commit/f07aa5d8f6c3485464ed3158187340c7db7d5af7))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* npm init shows correct setup commands for nextjs template ([#148](https://github.com/havenhq/revideo/issues/148)) ([882925e](https://github.com/havenhq/revideo/commit/882925ee897e4fd9c84d77ed9f73546ad39f3de1))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove comma in vite.config.ts ([#86](https://github.com/havenhq/revideo/issues/86)) ([c1a35cf](https://github.com/havenhq/revideo/commit/c1a35cf82f22271b7aec233df4a664136427c295))
* remove unnecessary rendererplugins to fix parameterized rendering ([#27](https://github.com/havenhq/revideo/issues/27)) ([c5f9bd6](https://github.com/havenhq/revideo/commit/c5f9bd678b40fae532a1bc6b3c466a5d6920e4ac))
* **vite-plugin:** fix js template ([#337](https://github.com/havenhq/revideo/issues/337)) ([3b33d73](https://github.com/havenhq/revideo/commit/3b33d73416541d491b633bada29f085f5489f6c2))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* **create:** add exporter selection ([#673](https://github.com/havenhq/revideo/issues/673)) ([82fd47d](https://github.com/havenhq/revideo/commit/82fd47d93ffad6125a685880a132ce0d3a388693))
* **create:** include simple animation ([#931](https://github.com/havenhq/revideo/issues/931)) ([925f63f](https://github.com/havenhq/revideo/commit/925f63f3588922224511b1687ac44ba7b9920d83))
* **create:** support command-line arguments ([#668](https://github.com/havenhq/revideo/issues/668)) ([fa62a98](https://github.com/havenhq/revideo/commit/fa62a9868d5cd33f1cb6ac5f147cca81917457dc))
* encode video with wasm ([#162](https://github.com/havenhq/revideo/issues/162)) ([c756fd8](https://github.com/havenhq/revideo/commit/c756fd8293d49b8abc8887c94bfb8f0d04e65842))
* expose render progress as argument ([#98](https://github.com/havenhq/revideo/issues/98)) ([4470e9e](https://github.com/havenhq/revideo/commit/4470e9e3715cdfbd36a54caa4978da2704d3f5f1))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* make progress logging optional through a callback ([#83](https://github.com/havenhq/revideo/issues/83)) ([a9767dd](https://github.com/havenhq/revideo/commit/a9767dda0cdc696547a1b2397a707a90a4f63a1a))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* update quickstart project in "create" package ([#11](https://github.com/havenhq/revideo/issues/11)) ([7d30483](https://github.com/havenhq/revideo/commit/7d304834e2305d1fac0079ac057eaea3bcb33c66))
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

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





## 0.4.5 (2024-06-26)


### Bug Fixes

* change executable file permissions ([#38](https://github.com/havenhq/revideo/issues/38)) ([23025a2](https://github.com/havenhq/revideo/commit/23025a2caefd993f7e4751b1efced3a25ed497a6))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **create:** fix package type ([#40](https://github.com/havenhq/revideo/issues/40)) ([f07aa5d](https://github.com/havenhq/revideo/commit/f07aa5d8f6c3485464ed3158187340c7db7d5af7))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* npm init shows correct setup commands for nextjs template ([#148](https://github.com/havenhq/revideo/issues/148)) ([882925e](https://github.com/havenhq/revideo/commit/882925ee897e4fd9c84d77ed9f73546ad39f3de1))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove comma in vite.config.ts ([#86](https://github.com/havenhq/revideo/issues/86)) ([c1a35cf](https://github.com/havenhq/revideo/commit/c1a35cf82f22271b7aec233df4a664136427c295))
* remove unnecessary rendererplugins to fix parameterized rendering ([#27](https://github.com/havenhq/revideo/issues/27)) ([c5f9bd6](https://github.com/havenhq/revideo/commit/c5f9bd678b40fae532a1bc6b3c466a5d6920e4ac))
* **vite-plugin:** fix js template ([#337](https://github.com/havenhq/revideo/issues/337)) ([3b33d73](https://github.com/havenhq/revideo/commit/3b33d73416541d491b633bada29f085f5489f6c2))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* **create:** add exporter selection ([#673](https://github.com/havenhq/revideo/issues/673)) ([82fd47d](https://github.com/havenhq/revideo/commit/82fd47d93ffad6125a685880a132ce0d3a388693))
* **create:** include simple animation ([#931](https://github.com/havenhq/revideo/issues/931)) ([925f63f](https://github.com/havenhq/revideo/commit/925f63f3588922224511b1687ac44ba7b9920d83))
* **create:** support command-line arguments ([#668](https://github.com/havenhq/revideo/issues/668)) ([fa62a98](https://github.com/havenhq/revideo/commit/fa62a9868d5cd33f1cb6ac5f147cca81917457dc))
* encode video with wasm ([#162](https://github.com/havenhq/revideo/issues/162)) ([c756fd8](https://github.com/havenhq/revideo/commit/c756fd8293d49b8abc8887c94bfb8f0d04e65842))
* expose render progress as argument ([#98](https://github.com/havenhq/revideo/issues/98)) ([4470e9e](https://github.com/havenhq/revideo/commit/4470e9e3715cdfbd36a54caa4978da2704d3f5f1))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* make progress logging optional through a callback ([#83](https://github.com/havenhq/revideo/issues/83)) ([a9767dd](https://github.com/havenhq/revideo/commit/a9767dda0cdc696547a1b2397a707a90a4f63a1a))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* update quickstart project in "create" package ([#11](https://github.com/havenhq/revideo/issues/11)) ([7d30483](https://github.com/havenhq/revideo/commit/7d304834e2305d1fac0079ac057eaea3bcb33c66))
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

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





## 0.4.4 (2024-06-25)


### Bug Fixes

* change executable file permissions ([#38](https://github.com/havenhq/revideo/issues/38)) ([23025a2](https://github.com/havenhq/revideo/commit/23025a2caefd993f7e4751b1efced3a25ed497a6))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **create:** fix package type ([#40](https://github.com/havenhq/revideo/issues/40)) ([f07aa5d](https://github.com/havenhq/revideo/commit/f07aa5d8f6c3485464ed3158187340c7db7d5af7))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* npm init shows correct setup commands for nextjs template ([#148](https://github.com/havenhq/revideo/issues/148)) ([882925e](https://github.com/havenhq/revideo/commit/882925ee897e4fd9c84d77ed9f73546ad39f3de1))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove comma in vite.config.ts ([#86](https://github.com/havenhq/revideo/issues/86)) ([c1a35cf](https://github.com/havenhq/revideo/commit/c1a35cf82f22271b7aec233df4a664136427c295))
* remove unnecessary rendererplugins to fix parameterized rendering ([#27](https://github.com/havenhq/revideo/issues/27)) ([c5f9bd6](https://github.com/havenhq/revideo/commit/c5f9bd678b40fae532a1bc6b3c466a5d6920e4ac))
* **vite-plugin:** fix js template ([#337](https://github.com/havenhq/revideo/issues/337)) ([3b33d73](https://github.com/havenhq/revideo/commit/3b33d73416541d491b633bada29f085f5489f6c2))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* **create:** add exporter selection ([#673](https://github.com/havenhq/revideo/issues/673)) ([82fd47d](https://github.com/havenhq/revideo/commit/82fd47d93ffad6125a685880a132ce0d3a388693))
* **create:** include simple animation ([#931](https://github.com/havenhq/revideo/issues/931)) ([925f63f](https://github.com/havenhq/revideo/commit/925f63f3588922224511b1687ac44ba7b9920d83))
* **create:** support command-line arguments ([#668](https://github.com/havenhq/revideo/issues/668)) ([fa62a98](https://github.com/havenhq/revideo/commit/fa62a9868d5cd33f1cb6ac5f147cca81917457dc))
* encode video with wasm ([#162](https://github.com/havenhq/revideo/issues/162)) ([c756fd8](https://github.com/havenhq/revideo/commit/c756fd8293d49b8abc8887c94bfb8f0d04e65842))
* expose render progress as argument ([#98](https://github.com/havenhq/revideo/issues/98)) ([4470e9e](https://github.com/havenhq/revideo/commit/4470e9e3715cdfbd36a54caa4978da2704d3f5f1))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* make progress logging optional through a callback ([#83](https://github.com/havenhq/revideo/issues/83)) ([a9767dd](https://github.com/havenhq/revideo/commit/a9767dda0cdc696547a1b2397a707a90a4f63a1a))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* update quickstart project in "create" package ([#11](https://github.com/havenhq/revideo/issues/11)) ([7d30483](https://github.com/havenhq/revideo/commit/7d304834e2305d1fac0079ac057eaea3bcb33c66))
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

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





## 0.4.3 (2024-06-24)


### Bug Fixes

* change executable file permissions ([#38](https://github.com/havenhq/revideo/issues/38)) ([23025a2](https://github.com/havenhq/revideo/commit/23025a2caefd993f7e4751b1efced3a25ed497a6))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **create:** fix package type ([#40](https://github.com/havenhq/revideo/issues/40)) ([f07aa5d](https://github.com/havenhq/revideo/commit/f07aa5d8f6c3485464ed3158187340c7db7d5af7))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* npm init shows correct setup commands for nextjs template ([#148](https://github.com/havenhq/revideo/issues/148)) ([882925e](https://github.com/havenhq/revideo/commit/882925ee897e4fd9c84d77ed9f73546ad39f3de1))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove comma in vite.config.ts ([#86](https://github.com/havenhq/revideo/issues/86)) ([c1a35cf](https://github.com/havenhq/revideo/commit/c1a35cf82f22271b7aec233df4a664136427c295))
* remove unnecessary rendererplugins to fix parameterized rendering ([#27](https://github.com/havenhq/revideo/issues/27)) ([c5f9bd6](https://github.com/havenhq/revideo/commit/c5f9bd678b40fae532a1bc6b3c466a5d6920e4ac))
* **vite-plugin:** fix js template ([#337](https://github.com/havenhq/revideo/issues/337)) ([3b33d73](https://github.com/havenhq/revideo/commit/3b33d73416541d491b633bada29f085f5489f6c2))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* **create:** add exporter selection ([#673](https://github.com/havenhq/revideo/issues/673)) ([82fd47d](https://github.com/havenhq/revideo/commit/82fd47d93ffad6125a685880a132ce0d3a388693))
* **create:** include simple animation ([#931](https://github.com/havenhq/revideo/issues/931)) ([925f63f](https://github.com/havenhq/revideo/commit/925f63f3588922224511b1687ac44ba7b9920d83))
* **create:** support command-line arguments ([#668](https://github.com/havenhq/revideo/issues/668)) ([fa62a98](https://github.com/havenhq/revideo/commit/fa62a9868d5cd33f1cb6ac5f147cca81917457dc))
* expose render progress as argument ([#98](https://github.com/havenhq/revideo/issues/98)) ([4470e9e](https://github.com/havenhq/revideo/commit/4470e9e3715cdfbd36a54caa4978da2704d3f5f1))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* make progress logging optional through a callback ([#83](https://github.com/havenhq/revideo/issues/83)) ([a9767dd](https://github.com/havenhq/revideo/commit/a9767dda0cdc696547a1b2397a707a90a4f63a1a))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* update quickstart project in "create" package ([#11](https://github.com/havenhq/revideo/issues/11)) ([7d30483](https://github.com/havenhq/revideo/commit/7d304834e2305d1fac0079ac057eaea3bcb33c66))
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

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





## 0.4.2 (2024-06-16)


### Bug Fixes

* change executable file permissions ([#38](https://github.com/havenhq/revideo/issues/38)) ([23025a2](https://github.com/havenhq/revideo/commit/23025a2caefd993f7e4751b1efced3a25ed497a6))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **create:** fix package type ([#40](https://github.com/havenhq/revideo/issues/40)) ([f07aa5d](https://github.com/havenhq/revideo/commit/f07aa5d8f6c3485464ed3158187340c7db7d5af7))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* npm init shows correct setup commands for nextjs template ([#148](https://github.com/havenhq/revideo/issues/148)) ([882925e](https://github.com/havenhq/revideo/commit/882925ee897e4fd9c84d77ed9f73546ad39f3de1))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove comma in vite.config.ts ([#86](https://github.com/havenhq/revideo/issues/86)) ([c1a35cf](https://github.com/havenhq/revideo/commit/c1a35cf82f22271b7aec233df4a664136427c295))
* remove unnecessary rendererplugins to fix parameterized rendering ([#27](https://github.com/havenhq/revideo/issues/27)) ([c5f9bd6](https://github.com/havenhq/revideo/commit/c5f9bd678b40fae532a1bc6b3c466a5d6920e4ac))
* **vite-plugin:** fix js template ([#337](https://github.com/havenhq/revideo/issues/337)) ([3b33d73](https://github.com/havenhq/revideo/commit/3b33d73416541d491b633bada29f085f5489f6c2))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* **create:** add exporter selection ([#673](https://github.com/havenhq/revideo/issues/673)) ([82fd47d](https://github.com/havenhq/revideo/commit/82fd47d93ffad6125a685880a132ce0d3a388693))
* **create:** include simple animation ([#931](https://github.com/havenhq/revideo/issues/931)) ([925f63f](https://github.com/havenhq/revideo/commit/925f63f3588922224511b1687ac44ba7b9920d83))
* **create:** support command-line arguments ([#668](https://github.com/havenhq/revideo/issues/668)) ([fa62a98](https://github.com/havenhq/revideo/commit/fa62a9868d5cd33f1cb6ac5f147cca81917457dc))
* expose render progress as argument ([#98](https://github.com/havenhq/revideo/issues/98)) ([4470e9e](https://github.com/havenhq/revideo/commit/4470e9e3715cdfbd36a54caa4978da2704d3f5f1))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* make progress logging optional through a callback ([#83](https://github.com/havenhq/revideo/issues/83)) ([a9767dd](https://github.com/havenhq/revideo/commit/a9767dda0cdc696547a1b2397a707a90a4f63a1a))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* update quickstart project in "create" package ([#11](https://github.com/havenhq/revideo/issues/11)) ([7d30483](https://github.com/havenhq/revideo/commit/7d304834e2305d1fac0079ac057eaea3bcb33c66))
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

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





## 0.4.1 (2024-06-12)


### Bug Fixes

* change executable file permissions ([#38](https://github.com/havenhq/revideo/issues/38)) ([23025a2](https://github.com/havenhq/revideo/commit/23025a2caefd993f7e4751b1efced3a25ed497a6))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **create:** fix package type ([#40](https://github.com/havenhq/revideo/issues/40)) ([f07aa5d](https://github.com/havenhq/revideo/commit/f07aa5d8f6c3485464ed3158187340c7db7d5af7))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove comma in vite.config.ts ([#86](https://github.com/havenhq/revideo/issues/86)) ([c1a35cf](https://github.com/havenhq/revideo/commit/c1a35cf82f22271b7aec233df4a664136427c295))
* remove unnecessary rendererplugins to fix parameterized rendering ([#27](https://github.com/havenhq/revideo/issues/27)) ([c5f9bd6](https://github.com/havenhq/revideo/commit/c5f9bd678b40fae532a1bc6b3c466a5d6920e4ac))
* **vite-plugin:** fix js template ([#337](https://github.com/havenhq/revideo/issues/337)) ([3b33d73](https://github.com/havenhq/revideo/commit/3b33d73416541d491b633bada29f085f5489f6c2))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* **create:** add exporter selection ([#673](https://github.com/havenhq/revideo/issues/673)) ([82fd47d](https://github.com/havenhq/revideo/commit/82fd47d93ffad6125a685880a132ce0d3a388693))
* **create:** include simple animation ([#931](https://github.com/havenhq/revideo/issues/931)) ([925f63f](https://github.com/havenhq/revideo/commit/925f63f3588922224511b1687ac44ba7b9920d83))
* **create:** support command-line arguments ([#668](https://github.com/havenhq/revideo/issues/668)) ([fa62a98](https://github.com/havenhq/revideo/commit/fa62a9868d5cd33f1cb6ac5f147cca81917457dc))
* expose render progress as argument ([#98](https://github.com/havenhq/revideo/issues/98)) ([4470e9e](https://github.com/havenhq/revideo/commit/4470e9e3715cdfbd36a54caa4978da2704d3f5f1))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* make progress logging optional through a callback ([#83](https://github.com/havenhq/revideo/issues/83)) ([a9767dd](https://github.com/havenhq/revideo/commit/a9767dda0cdc696547a1b2397a707a90a4f63a1a))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* update quickstart project in "create" package ([#11](https://github.com/havenhq/revideo/issues/11)) ([7d30483](https://github.com/havenhq/revideo/commit/7d304834e2305d1fac0079ac057eaea3bcb33c66))
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

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





# 0.4.0 (2024-06-11)


### Bug Fixes

* change executable file permissions ([#38](https://github.com/havenhq/revideo/issues/38)) ([23025a2](https://github.com/havenhq/revideo/commit/23025a2caefd993f7e4751b1efced3a25ed497a6))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **create:** fix package type ([#40](https://github.com/havenhq/revideo/issues/40)) ([f07aa5d](https://github.com/havenhq/revideo/commit/f07aa5d8f6c3485464ed3158187340c7db7d5af7))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove comma in vite.config.ts ([#86](https://github.com/havenhq/revideo/issues/86)) ([c1a35cf](https://github.com/havenhq/revideo/commit/c1a35cf82f22271b7aec233df4a664136427c295))
* remove unnecessary rendererplugins to fix parameterized rendering ([#27](https://github.com/havenhq/revideo/issues/27)) ([c5f9bd6](https://github.com/havenhq/revideo/commit/c5f9bd678b40fae532a1bc6b3c466a5d6920e4ac))
* **vite-plugin:** fix js template ([#337](https://github.com/havenhq/revideo/issues/337)) ([3b33d73](https://github.com/havenhq/revideo/commit/3b33d73416541d491b633bada29f085f5489f6c2))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* **create:** add exporter selection ([#673](https://github.com/havenhq/revideo/issues/673)) ([82fd47d](https://github.com/havenhq/revideo/commit/82fd47d93ffad6125a685880a132ce0d3a388693))
* **create:** include simple animation ([#931](https://github.com/havenhq/revideo/issues/931)) ([925f63f](https://github.com/havenhq/revideo/commit/925f63f3588922224511b1687ac44ba7b9920d83))
* **create:** support command-line arguments ([#668](https://github.com/havenhq/revideo/issues/668)) ([fa62a98](https://github.com/havenhq/revideo/commit/fa62a9868d5cd33f1cb6ac5f147cca81917457dc))
* expose render progress as argument ([#98](https://github.com/havenhq/revideo/issues/98)) ([4470e9e](https://github.com/havenhq/revideo/commit/4470e9e3715cdfbd36a54caa4978da2704d3f5f1))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* make progress logging optional through a callback ([#83](https://github.com/havenhq/revideo/issues/83)) ([a9767dd](https://github.com/havenhq/revideo/commit/a9767dda0cdc696547a1b2397a707a90a4f63a1a))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* update quickstart project in "create" package ([#11](https://github.com/havenhq/revideo/issues/11)) ([7d30483](https://github.com/havenhq/revideo/commit/7d304834e2305d1fac0079ac057eaea3bcb33c66))
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

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





## 0.3.6 (2024-06-08)


### Bug Fixes

* change executable file permissions ([#38](https://github.com/havenhq/revideo/issues/38)) ([23025a2](https://github.com/havenhq/revideo/commit/23025a2caefd993f7e4751b1efced3a25ed497a6))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **create:** fix package type ([#40](https://github.com/havenhq/revideo/issues/40)) ([f07aa5d](https://github.com/havenhq/revideo/commit/f07aa5d8f6c3485464ed3158187340c7db7d5af7))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove comma in vite.config.ts ([#86](https://github.com/havenhq/revideo/issues/86)) ([c1a35cf](https://github.com/havenhq/revideo/commit/c1a35cf82f22271b7aec233df4a664136427c295))
* remove unnecessary rendererplugins to fix parameterized rendering ([#27](https://github.com/havenhq/revideo/issues/27)) ([c5f9bd6](https://github.com/havenhq/revideo/commit/c5f9bd678b40fae532a1bc6b3c466a5d6920e4ac))
* **vite-plugin:** fix js template ([#337](https://github.com/havenhq/revideo/issues/337)) ([3b33d73](https://github.com/havenhq/revideo/commit/3b33d73416541d491b633bada29f085f5489f6c2))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* **create:** add exporter selection ([#673](https://github.com/havenhq/revideo/issues/673)) ([82fd47d](https://github.com/havenhq/revideo/commit/82fd47d93ffad6125a685880a132ce0d3a388693))
* **create:** include simple animation ([#931](https://github.com/havenhq/revideo/issues/931)) ([925f63f](https://github.com/havenhq/revideo/commit/925f63f3588922224511b1687ac44ba7b9920d83))
* **create:** support command-line arguments ([#668](https://github.com/havenhq/revideo/issues/668)) ([fa62a98](https://github.com/havenhq/revideo/commit/fa62a9868d5cd33f1cb6ac5f147cca81917457dc))
* expose render progress as argument ([#98](https://github.com/havenhq/revideo/issues/98)) ([4470e9e](https://github.com/havenhq/revideo/commit/4470e9e3715cdfbd36a54caa4978da2704d3f5f1))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* make progress logging optional through a callback ([#83](https://github.com/havenhq/revideo/issues/83)) ([a9767dd](https://github.com/havenhq/revideo/commit/a9767dda0cdc696547a1b2397a707a90a4f63a1a))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* update quickstart project in "create" package ([#11](https://github.com/havenhq/revideo/issues/11)) ([7d30483](https://github.com/havenhq/revideo/commit/7d304834e2305d1fac0079ac057eaea3bcb33c66))
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

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





## 0.3.5 (2024-06-04)


### Bug Fixes

* change executable file permissions ([#38](https://github.com/havenhq/revideo/issues/38)) ([23025a2](https://github.com/havenhq/revideo/commit/23025a2caefd993f7e4751b1efced3a25ed497a6))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **create:** fix package type ([#40](https://github.com/havenhq/revideo/issues/40)) ([f07aa5d](https://github.com/havenhq/revideo/commit/f07aa5d8f6c3485464ed3158187340c7db7d5af7))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove comma in vite.config.ts ([#86](https://github.com/havenhq/revideo/issues/86)) ([c1a35cf](https://github.com/havenhq/revideo/commit/c1a35cf82f22271b7aec233df4a664136427c295))
* remove unnecessary rendererplugins to fix parameterized rendering ([#27](https://github.com/havenhq/revideo/issues/27)) ([c5f9bd6](https://github.com/havenhq/revideo/commit/c5f9bd678b40fae532a1bc6b3c466a5d6920e4ac))
* **vite-plugin:** fix js template ([#337](https://github.com/havenhq/revideo/issues/337)) ([3b33d73](https://github.com/havenhq/revideo/commit/3b33d73416541d491b633bada29f085f5489f6c2))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* **create:** add exporter selection ([#673](https://github.com/havenhq/revideo/issues/673)) ([82fd47d](https://github.com/havenhq/revideo/commit/82fd47d93ffad6125a685880a132ce0d3a388693))
* **create:** include simple animation ([#931](https://github.com/havenhq/revideo/issues/931)) ([925f63f](https://github.com/havenhq/revideo/commit/925f63f3588922224511b1687ac44ba7b9920d83))
* **create:** support command-line arguments ([#668](https://github.com/havenhq/revideo/issues/668)) ([fa62a98](https://github.com/havenhq/revideo/commit/fa62a9868d5cd33f1cb6ac5f147cca81917457dc))
* expose render progress as argument ([#98](https://github.com/havenhq/revideo/issues/98)) ([4470e9e](https://github.com/havenhq/revideo/commit/4470e9e3715cdfbd36a54caa4978da2704d3f5f1))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* make progress logging optional through a callback ([#83](https://github.com/havenhq/revideo/issues/83)) ([a9767dd](https://github.com/havenhq/revideo/commit/a9767dda0cdc696547a1b2397a707a90a4f63a1a))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* update quickstart project in "create" package ([#11](https://github.com/havenhq/revideo/issues/11)) ([7d30483](https://github.com/havenhq/revideo/commit/7d304834e2305d1fac0079ac057eaea3bcb33c66))
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

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





## 0.3.4 (2024-05-20)


### Bug Fixes

* change executable file permissions ([#38](https://github.com/havenhq/revideo/issues/38)) ([23025a2](https://github.com/havenhq/revideo/commit/23025a2caefd993f7e4751b1efced3a25ed497a6))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **create:** fix package type ([#40](https://github.com/havenhq/revideo/issues/40)) ([f07aa5d](https://github.com/havenhq/revideo/commit/f07aa5d8f6c3485464ed3158187340c7db7d5af7))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove comma in vite.config.ts ([#86](https://github.com/havenhq/revideo/issues/86)) ([c1a35cf](https://github.com/havenhq/revideo/commit/c1a35cf82f22271b7aec233df4a664136427c295))
* remove unnecessary rendererplugins to fix parameterized rendering ([#27](https://github.com/havenhq/revideo/issues/27)) ([c5f9bd6](https://github.com/havenhq/revideo/commit/c5f9bd678b40fae532a1bc6b3c466a5d6920e4ac))
* **vite-plugin:** fix js template ([#337](https://github.com/havenhq/revideo/issues/337)) ([3b33d73](https://github.com/havenhq/revideo/commit/3b33d73416541d491b633bada29f085f5489f6c2))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* **create:** add exporter selection ([#673](https://github.com/havenhq/revideo/issues/673)) ([82fd47d](https://github.com/havenhq/revideo/commit/82fd47d93ffad6125a685880a132ce0d3a388693))
* **create:** include simple animation ([#931](https://github.com/havenhq/revideo/issues/931)) ([925f63f](https://github.com/havenhq/revideo/commit/925f63f3588922224511b1687ac44ba7b9920d83))
* **create:** support command-line arguments ([#668](https://github.com/havenhq/revideo/issues/668)) ([fa62a98](https://github.com/havenhq/revideo/commit/fa62a9868d5cd33f1cb6ac5f147cca81917457dc))
* expose render progress as argument ([#98](https://github.com/havenhq/revideo/issues/98)) ([4470e9e](https://github.com/havenhq/revideo/commit/4470e9e3715cdfbd36a54caa4978da2704d3f5f1))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* make progress logging optional through a callback ([#83](https://github.com/havenhq/revideo/issues/83)) ([a9767dd](https://github.com/havenhq/revideo/commit/a9767dda0cdc696547a1b2397a707a90a4f63a1a))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* update quickstart project in "create" package ([#11](https://github.com/havenhq/revideo/issues/11)) ([7d30483](https://github.com/havenhq/revideo/commit/7d304834e2305d1fac0079ac057eaea3bcb33c66))
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

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





## 0.3.3 (2024-05-17)


### Bug Fixes

* change executable file permissions ([#38](https://github.com/havenhq/revideo/issues/38)) ([23025a2](https://github.com/havenhq/revideo/commit/23025a2caefd993f7e4751b1efced3a25ed497a6))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **create:** fix package type ([#40](https://github.com/havenhq/revideo/issues/40)) ([f07aa5d](https://github.com/havenhq/revideo/commit/f07aa5d8f6c3485464ed3158187340c7db7d5af7))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove comma in vite.config.ts ([#86](https://github.com/havenhq/revideo/issues/86)) ([c1a35cf](https://github.com/havenhq/revideo/commit/c1a35cf82f22271b7aec233df4a664136427c295))
* remove unnecessary rendererplugins to fix parameterized rendering ([#27](https://github.com/havenhq/revideo/issues/27)) ([c5f9bd6](https://github.com/havenhq/revideo/commit/c5f9bd678b40fae532a1bc6b3c466a5d6920e4ac))
* **vite-plugin:** fix js template ([#337](https://github.com/havenhq/revideo/issues/337)) ([3b33d73](https://github.com/havenhq/revideo/commit/3b33d73416541d491b633bada29f085f5489f6c2))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* **create:** add exporter selection ([#673](https://github.com/havenhq/revideo/issues/673)) ([82fd47d](https://github.com/havenhq/revideo/commit/82fd47d93ffad6125a685880a132ce0d3a388693))
* **create:** include simple animation ([#931](https://github.com/havenhq/revideo/issues/931)) ([925f63f](https://github.com/havenhq/revideo/commit/925f63f3588922224511b1687ac44ba7b9920d83))
* **create:** support command-line arguments ([#668](https://github.com/havenhq/revideo/issues/668)) ([fa62a98](https://github.com/havenhq/revideo/commit/fa62a9868d5cd33f1cb6ac5f147cca81917457dc))
* expose render progress as argument ([#98](https://github.com/havenhq/revideo/issues/98)) ([4470e9e](https://github.com/havenhq/revideo/commit/4470e9e3715cdfbd36a54caa4978da2704d3f5f1))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* make progress logging optional through a callback ([#83](https://github.com/havenhq/revideo/issues/83)) ([a9767dd](https://github.com/havenhq/revideo/commit/a9767dda0cdc696547a1b2397a707a90a4f63a1a))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* update quickstart project in "create" package ([#11](https://github.com/havenhq/revideo/issues/11)) ([7d30483](https://github.com/havenhq/revideo/commit/7d304834e2305d1fac0079ac057eaea3bcb33c66))
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

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





## 0.3.2 (2024-05-09)


### Bug Fixes

* change executable file permissions ([#38](https://github.com/havenhq/revideo/issues/38)) ([23025a2](https://github.com/havenhq/revideo/commit/23025a2caefd993f7e4751b1efced3a25ed497a6))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **create:** fix package type ([#40](https://github.com/havenhq/revideo/issues/40)) ([f07aa5d](https://github.com/havenhq/revideo/commit/f07aa5d8f6c3485464ed3158187340c7db7d5af7))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove comma in vite.config.ts ([#86](https://github.com/havenhq/revideo/issues/86)) ([c1a35cf](https://github.com/havenhq/revideo/commit/c1a35cf82f22271b7aec233df4a664136427c295))
* remove unnecessary rendererplugins to fix parameterized rendering ([#27](https://github.com/havenhq/revideo/issues/27)) ([c5f9bd6](https://github.com/havenhq/revideo/commit/c5f9bd678b40fae532a1bc6b3c466a5d6920e4ac))
* **vite-plugin:** fix js template ([#337](https://github.com/havenhq/revideo/issues/337)) ([3b33d73](https://github.com/havenhq/revideo/commit/3b33d73416541d491b633bada29f085f5489f6c2))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* **create:** add exporter selection ([#673](https://github.com/havenhq/revideo/issues/673)) ([82fd47d](https://github.com/havenhq/revideo/commit/82fd47d93ffad6125a685880a132ce0d3a388693))
* **create:** include simple animation ([#931](https://github.com/havenhq/revideo/issues/931)) ([925f63f](https://github.com/havenhq/revideo/commit/925f63f3588922224511b1687ac44ba7b9920d83))
* **create:** support command-line arguments ([#668](https://github.com/havenhq/revideo/issues/668)) ([fa62a98](https://github.com/havenhq/revideo/commit/fa62a9868d5cd33f1cb6ac5f147cca81917457dc))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* make progress logging optional through a callback ([#83](https://github.com/havenhq/revideo/issues/83)) ([a9767dd](https://github.com/havenhq/revideo/commit/a9767dda0cdc696547a1b2397a707a90a4f63a1a))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* update quickstart project in "create" package ([#11](https://github.com/havenhq/revideo/issues/11)) ([7d30483](https://github.com/havenhq/revideo/commit/7d304834e2305d1fac0079ac057eaea3bcb33c66))
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

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





## 0.3.1 (2024-05-08)


### Bug Fixes

* change executable file permissions ([#38](https://github.com/havenhq/revideo/issues/38)) ([23025a2](https://github.com/havenhq/revideo/commit/23025a2caefd993f7e4751b1efced3a25ed497a6))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **create:** fix package type ([#40](https://github.com/havenhq/revideo/issues/40)) ([f07aa5d](https://github.com/havenhq/revideo/commit/f07aa5d8f6c3485464ed3158187340c7db7d5af7))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove comma in vite.config.ts ([#86](https://github.com/havenhq/revideo/issues/86)) ([c1a35cf](https://github.com/havenhq/revideo/commit/c1a35cf82f22271b7aec233df4a664136427c295))
* remove unnecessary rendererplugins to fix parameterized rendering ([#27](https://github.com/havenhq/revideo/issues/27)) ([c5f9bd6](https://github.com/havenhq/revideo/commit/c5f9bd678b40fae532a1bc6b3c466a5d6920e4ac))
* **vite-plugin:** fix js template ([#337](https://github.com/havenhq/revideo/issues/337)) ([3b33d73](https://github.com/havenhq/revideo/commit/3b33d73416541d491b633bada29f085f5489f6c2))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* **create:** add exporter selection ([#673](https://github.com/havenhq/revideo/issues/673)) ([82fd47d](https://github.com/havenhq/revideo/commit/82fd47d93ffad6125a685880a132ce0d3a388693))
* **create:** include simple animation ([#931](https://github.com/havenhq/revideo/issues/931)) ([925f63f](https://github.com/havenhq/revideo/commit/925f63f3588922224511b1687ac44ba7b9920d83))
* **create:** support command-line arguments ([#668](https://github.com/havenhq/revideo/issues/668)) ([fa62a98](https://github.com/havenhq/revideo/commit/fa62a9868d5cd33f1cb6ac5f147cca81917457dc))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* make progress logging optional through a callback ([#83](https://github.com/havenhq/revideo/issues/83)) ([a9767dd](https://github.com/havenhq/revideo/commit/a9767dda0cdc696547a1b2397a707a90a4f63a1a))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* update quickstart project in "create" package ([#11](https://github.com/havenhq/revideo/issues/11)) ([7d30483](https://github.com/havenhq/revideo/commit/7d304834e2305d1fac0079ac057eaea3bcb33c66))
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

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





# 0.3.0 (2024-05-03)


### Bug Fixes

* change executable file permissions ([#38](https://github.com/havenhq/revideo/issues/38)) ([23025a2](https://github.com/havenhq/revideo/commit/23025a2caefd993f7e4751b1efced3a25ed497a6))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **create:** fix package type ([#40](https://github.com/havenhq/revideo/issues/40)) ([f07aa5d](https://github.com/havenhq/revideo/commit/f07aa5d8f6c3485464ed3158187340c7db7d5af7))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove unnecessary rendererplugins to fix parameterized rendering ([#27](https://github.com/havenhq/revideo/issues/27)) ([c5f9bd6](https://github.com/havenhq/revideo/commit/c5f9bd678b40fae532a1bc6b3c466a5d6920e4ac))
* **vite-plugin:** fix js template ([#337](https://github.com/havenhq/revideo/issues/337)) ([3b33d73](https://github.com/havenhq/revideo/commit/3b33d73416541d491b633bada29f085f5489f6c2))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* **create:** add exporter selection ([#673](https://github.com/havenhq/revideo/issues/673)) ([82fd47d](https://github.com/havenhq/revideo/commit/82fd47d93ffad6125a685880a132ce0d3a388693))
* **create:** include simple animation ([#931](https://github.com/havenhq/revideo/issues/931)) ([925f63f](https://github.com/havenhq/revideo/commit/925f63f3588922224511b1687ac44ba7b9920d83))
* **create:** support command-line arguments ([#668](https://github.com/havenhq/revideo/issues/668)) ([fa62a98](https://github.com/havenhq/revideo/commit/fa62a9868d5cd33f1cb6ac5f147cca81917457dc))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* make progress logging optional through a callback ([#83](https://github.com/havenhq/revideo/issues/83)) ([a9767dd](https://github.com/havenhq/revideo/commit/a9767dda0cdc696547a1b2397a707a90a4f63a1a))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* update quickstart project in "create" package ([#11](https://github.com/havenhq/revideo/issues/11)) ([7d30483](https://github.com/havenhq/revideo/commit/7d304834e2305d1fac0079ac057eaea3bcb33c66))
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

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





# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 0.2.13 (2024-04-24)


### Bug Fixes

* change executable file permissions ([#38](https://github.com/havenhq/revideo/issues/38)) ([23025a2](https://github.com/havenhq/revideo/commit/23025a2caefd993f7e4751b1efced3a25ed497a6))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **create:** fix package type ([#40](https://github.com/havenhq/revideo/issues/40)) ([f07aa5d](https://github.com/havenhq/revideo/commit/f07aa5d8f6c3485464ed3158187340c7db7d5af7))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* remove unnecessary rendererplugins to fix parameterized rendering ([#27](https://github.com/havenhq/revideo/issues/27)) ([c5f9bd6](https://github.com/havenhq/revideo/commit/c5f9bd678b40fae532a1bc6b3c466a5d6920e4ac))
* **vite-plugin:** fix js template ([#337](https://github.com/havenhq/revideo/issues/337)) ([3b33d73](https://github.com/havenhq/revideo/commit/3b33d73416541d491b633bada29f085f5489f6c2))


### Code Refactoring

* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* **create:** add exporter selection ([#673](https://github.com/havenhq/revideo/issues/673)) ([82fd47d](https://github.com/havenhq/revideo/commit/82fd47d93ffad6125a685880a132ce0d3a388693))
* **create:** include simple animation ([#931](https://github.com/havenhq/revideo/issues/931)) ([925f63f](https://github.com/havenhq/revideo/commit/925f63f3588922224511b1687ac44ba7b9920d83))
* **create:** support command-line arguments ([#668](https://github.com/havenhq/revideo/issues/668)) ([fa62a98](https://github.com/havenhq/revideo/commit/fa62a9868d5cd33f1cb6ac5f147cca81917457dc))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* update quickstart project in "create" package ([#11](https://github.com/havenhq/revideo/issues/11)) ([7d30483](https://github.com/havenhq/revideo/commit/7d304834e2305d1fac0079ac057eaea3bcb33c66))
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

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





## 0.2.11 (2024-04-22)

### Bug Fixes

- change executable file permissions
  ([#38](https://github.com/havenhq/revideo/issues/38))
  ([23025a2](https://github.com/havenhq/revideo/commit/23025a2caefd993f7e4751b1efced3a25ed497a6))
- correct dependencies for create package
  ([#15](https://github.com/havenhq/revideo/issues/15))
  ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
- **create:** fix package type
  ([#40](https://github.com/havenhq/revideo/issues/40))
  ([f07aa5d](https://github.com/havenhq/revideo/commit/f07aa5d8f6c3485464ed3158187340c7db7d5af7))
- **create:** update templates
  ([#439](https://github.com/havenhq/revideo/issues/439))
  ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
- fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93))
  ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
- move hardcoded imports and plugins outside of loop
  ([af6a4a9](https://github.com/havenhq/revideo/commit/af6a4a9e27a29b1e6d21139fb9dfff86dcc835da))
- **player:** visibility on white background
  ([#36](https://github.com/havenhq/revideo/issues/36))
  ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
- remove unnecessary rendererplugins to fix parameterized rendering
  ([#27](https://github.com/havenhq/revideo/issues/27))
  ([c5f9bd6](https://github.com/havenhq/revideo/commit/c5f9bd678b40fae532a1bc6b3c466a5d6920e4ac))
- **vite-plugin:** fix js template
  ([#337](https://github.com/havenhq/revideo/issues/337))
  ([3b33d73](https://github.com/havenhq/revideo/commit/3b33d73416541d491b633bada29f085f5489f6c2))

### Code Refactoring

- remove legacy package
  ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))

### Features

- add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36))
  ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)),
  closes [#30](https://github.com/havenhq/revideo/issues/30)
- **create:** add exporter selection
  ([#673](https://github.com/havenhq/revideo/issues/673))
  ([82fd47d](https://github.com/havenhq/revideo/commit/82fd47d93ffad6125a685880a132ce0d3a388693))
- **create:** include simple animation
  ([#931](https://github.com/havenhq/revideo/issues/931))
  ([925f63f](https://github.com/havenhq/revideo/commit/925f63f3588922224511b1687ac44ba7b9920d83))
- **create:** support command-line arguments
  ([#668](https://github.com/havenhq/revideo/issues/668))
  ([fa62a98](https://github.com/havenhq/revideo/commit/fa62a9868d5cd33f1cb6ac5f147cca81917457dc))
- extract konva to separate package
  ([#60](https://github.com/havenhq/revideo/issues/60))
  ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
- make scenes independent of names
  ([#53](https://github.com/havenhq/revideo/issues/53))
  ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)),
  closes [#25](https://github.com/havenhq/revideo/issues/25)
- publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6))
  ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
- support for multiple projects
  ([#57](https://github.com/havenhq/revideo/issues/57))
  ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)),
  closes [#141414](https://github.com/havenhq/revideo/issues/141414)
- update quickstart project in "create" package
  ([#11](https://github.com/havenhq/revideo/issues/11))
  ([7d30483](https://github.com/havenhq/revideo/commit/7d304834e2305d1fac0079ac057eaea3bcb33c66))
- update vite from v3 to v4
  ([#495](https://github.com/havenhq/revideo/issues/495))
  ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)),
  closes [#197](https://github.com/havenhq/revideo/issues/197)

### Reverts

- "ci(release): 9.1.3 [skip ci]"
  ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
- ci(release): 1.0.1 [skip ci]
  ([#175](https://github.com/havenhq/revideo/issues/175))
  ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
- ci(release): 2.0.0 [skip ci]
  ([#176](https://github.com/havenhq/revideo/issues/176))
  ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
- ci(release): 3.12.4 [skip ci]
  ([#908](https://github.com/havenhq/revideo/issues/908))
  ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))

### BREAKING CHANGES

- remove legacy package
- change to import paths

See
[the migration guide](https://motion-canvas.github.io/guides/migration/12.0.0)
for more info.

- change the way scenes are imported

Scene files no longer need to follow the pattern: `[name].scene.tsx`. When
importing scenes in the project file, a dedicated `?scene` query param should be
used:

```ts
import example from './scenes/example?scene';

export default new Project({
  name: 'project',
  scenes: [example],
});
```
