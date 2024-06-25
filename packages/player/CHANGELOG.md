# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 0.4.4 (2024-06-25)


### Bug Fixes

* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* add timeline and dynamic variable change to video player ([#22](https://github.com/havenhq/revideo/issues/22)) ([af26c93](https://github.com/havenhq/revideo/commit/af26c93b34e98bd4bf563290d2050154b5d0561c))
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* expose parts of player to outside of shadow root ([#956](https://github.com/havenhq/revideo/issues/956)) ([c996d39](https://github.com/havenhq/revideo/commit/c996d394dda9ba8c6a32f0360bf09e722ec15b0e)), closes [#950](https://github.com/havenhq/revideo/issues/950)
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* **player:** add auto mode ([c107259](https://github.com/havenhq/revideo/commit/c107259f7c2a3886ccfe4ca0140d13064aed238f))
* **player:** improve accessibility ([0fc9235](https://github.com/havenhq/revideo/commit/0fc923576e7b12f9bc799f3a4e861861d49a2406))
* project variables ([#255](https://github.com/havenhq/revideo/issues/255)) ([4883295](https://github.com/havenhq/revideo/commit/488329525939928af52b4a4d8488f1e1cd4cf6f7))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))


### Reverts

* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.





## 0.4.3 (2024-06-24)


### Bug Fixes

* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* add timeline and dynamic variable change to video player ([#22](https://github.com/havenhq/revideo/issues/22)) ([af26c93](https://github.com/havenhq/revideo/commit/af26c93b34e98bd4bf563290d2050154b5d0561c))
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* expose parts of player to outside of shadow root ([#956](https://github.com/havenhq/revideo/issues/956)) ([c996d39](https://github.com/havenhq/revideo/commit/c996d394dda9ba8c6a32f0360bf09e722ec15b0e)), closes [#950](https://github.com/havenhq/revideo/issues/950)
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* **player:** add auto mode ([c107259](https://github.com/havenhq/revideo/commit/c107259f7c2a3886ccfe4ca0140d13064aed238f))
* **player:** improve accessibility ([0fc9235](https://github.com/havenhq/revideo/commit/0fc923576e7b12f9bc799f3a4e861861d49a2406))
* project variables ([#255](https://github.com/havenhq/revideo/issues/255)) ([4883295](https://github.com/havenhq/revideo/commit/488329525939928af52b4a4d8488f1e1cd4cf6f7))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))


### Reverts

* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.





## 0.4.2 (2024-06-16)


### Bug Fixes

* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* add timeline and dynamic variable change to video player ([#22](https://github.com/havenhq/revideo/issues/22)) ([af26c93](https://github.com/havenhq/revideo/commit/af26c93b34e98bd4bf563290d2050154b5d0561c))
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* expose parts of player to outside of shadow root ([#956](https://github.com/havenhq/revideo/issues/956)) ([c996d39](https://github.com/havenhq/revideo/commit/c996d394dda9ba8c6a32f0360bf09e722ec15b0e)), closes [#950](https://github.com/havenhq/revideo/issues/950)
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* **player:** add auto mode ([c107259](https://github.com/havenhq/revideo/commit/c107259f7c2a3886ccfe4ca0140d13064aed238f))
* **player:** improve accessibility ([0fc9235](https://github.com/havenhq/revideo/commit/0fc923576e7b12f9bc799f3a4e861861d49a2406))
* project variables ([#255](https://github.com/havenhq/revideo/issues/255)) ([4883295](https://github.com/havenhq/revideo/commit/488329525939928af52b4a4d8488f1e1cd4cf6f7))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))


### Reverts

* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.





## 0.4.1 (2024-06-12)


### Bug Fixes

* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* add timeline and dynamic variable change to video player ([#22](https://github.com/havenhq/revideo/issues/22)) ([af26c93](https://github.com/havenhq/revideo/commit/af26c93b34e98bd4bf563290d2050154b5d0561c))
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* expose parts of player to outside of shadow root ([#956](https://github.com/havenhq/revideo/issues/956)) ([c996d39](https://github.com/havenhq/revideo/commit/c996d394dda9ba8c6a32f0360bf09e722ec15b0e)), closes [#950](https://github.com/havenhq/revideo/issues/950)
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* **player:** add auto mode ([c107259](https://github.com/havenhq/revideo/commit/c107259f7c2a3886ccfe4ca0140d13064aed238f))
* **player:** improve accessibility ([0fc9235](https://github.com/havenhq/revideo/commit/0fc923576e7b12f9bc799f3a4e861861d49a2406))
* project variables ([#255](https://github.com/havenhq/revideo/issues/255)) ([4883295](https://github.com/havenhq/revideo/commit/488329525939928af52b4a4d8488f1e1cd4cf6f7))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))


### Reverts

* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.





# 0.4.0 (2024-06-11)


### Bug Fixes

* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* add timeline and dynamic variable change to video player ([#22](https://github.com/havenhq/revideo/issues/22)) ([af26c93](https://github.com/havenhq/revideo/commit/af26c93b34e98bd4bf563290d2050154b5d0561c))
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* expose parts of player to outside of shadow root ([#956](https://github.com/havenhq/revideo/issues/956)) ([c996d39](https://github.com/havenhq/revideo/commit/c996d394dda9ba8c6a32f0360bf09e722ec15b0e)), closes [#950](https://github.com/havenhq/revideo/issues/950)
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* **player:** add auto mode ([c107259](https://github.com/havenhq/revideo/commit/c107259f7c2a3886ccfe4ca0140d13064aed238f))
* **player:** improve accessibility ([0fc9235](https://github.com/havenhq/revideo/commit/0fc923576e7b12f9bc799f3a4e861861d49a2406))
* project variables ([#255](https://github.com/havenhq/revideo/issues/255)) ([4883295](https://github.com/havenhq/revideo/commit/488329525939928af52b4a4d8488f1e1cd4cf6f7))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))


### Reverts

* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.





## 0.3.6 (2024-06-08)


### Bug Fixes

* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* add timeline and dynamic variable change to video player ([#22](https://github.com/havenhq/revideo/issues/22)) ([af26c93](https://github.com/havenhq/revideo/commit/af26c93b34e98bd4bf563290d2050154b5d0561c))
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* expose parts of player to outside of shadow root ([#956](https://github.com/havenhq/revideo/issues/956)) ([c996d39](https://github.com/havenhq/revideo/commit/c996d394dda9ba8c6a32f0360bf09e722ec15b0e)), closes [#950](https://github.com/havenhq/revideo/issues/950)
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* **player:** add auto mode ([c107259](https://github.com/havenhq/revideo/commit/c107259f7c2a3886ccfe4ca0140d13064aed238f))
* **player:** improve accessibility ([0fc9235](https://github.com/havenhq/revideo/commit/0fc923576e7b12f9bc799f3a4e861861d49a2406))
* project variables ([#255](https://github.com/havenhq/revideo/issues/255)) ([4883295](https://github.com/havenhq/revideo/commit/488329525939928af52b4a4d8488f1e1cd4cf6f7))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))


### Reverts

* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.





## 0.3.5 (2024-06-04)


### Bug Fixes

* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* add timeline and dynamic variable change to video player ([#22](https://github.com/havenhq/revideo/issues/22)) ([af26c93](https://github.com/havenhq/revideo/commit/af26c93b34e98bd4bf563290d2050154b5d0561c))
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* expose parts of player to outside of shadow root ([#956](https://github.com/havenhq/revideo/issues/956)) ([c996d39](https://github.com/havenhq/revideo/commit/c996d394dda9ba8c6a32f0360bf09e722ec15b0e)), closes [#950](https://github.com/havenhq/revideo/issues/950)
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* **player:** add auto mode ([c107259](https://github.com/havenhq/revideo/commit/c107259f7c2a3886ccfe4ca0140d13064aed238f))
* **player:** improve accessibility ([0fc9235](https://github.com/havenhq/revideo/commit/0fc923576e7b12f9bc799f3a4e861861d49a2406))
* project variables ([#255](https://github.com/havenhq/revideo/issues/255)) ([4883295](https://github.com/havenhq/revideo/commit/488329525939928af52b4a4d8488f1e1cd4cf6f7))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))


### Reverts

* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.





## 0.3.4 (2024-05-20)


### Bug Fixes

* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* add timeline and dynamic variable change to video player ([#22](https://github.com/havenhq/revideo/issues/22)) ([af26c93](https://github.com/havenhq/revideo/commit/af26c93b34e98bd4bf563290d2050154b5d0561c))
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* expose parts of player to outside of shadow root ([#956](https://github.com/havenhq/revideo/issues/956)) ([c996d39](https://github.com/havenhq/revideo/commit/c996d394dda9ba8c6a32f0360bf09e722ec15b0e)), closes [#950](https://github.com/havenhq/revideo/issues/950)
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* **player:** add auto mode ([c107259](https://github.com/havenhq/revideo/commit/c107259f7c2a3886ccfe4ca0140d13064aed238f))
* **player:** improve accessibility ([0fc9235](https://github.com/havenhq/revideo/commit/0fc923576e7b12f9bc799f3a4e861861d49a2406))
* project variables ([#255](https://github.com/havenhq/revideo/issues/255)) ([4883295](https://github.com/havenhq/revideo/commit/488329525939928af52b4a4d8488f1e1cd4cf6f7))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))


### Reverts

* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.





## 0.3.3 (2024-05-17)


### Bug Fixes

* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* add timeline and dynamic variable change to video player ([#22](https://github.com/havenhq/revideo/issues/22)) ([af26c93](https://github.com/havenhq/revideo/commit/af26c93b34e98bd4bf563290d2050154b5d0561c))
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* expose parts of player to outside of shadow root ([#956](https://github.com/havenhq/revideo/issues/956)) ([c996d39](https://github.com/havenhq/revideo/commit/c996d394dda9ba8c6a32f0360bf09e722ec15b0e)), closes [#950](https://github.com/havenhq/revideo/issues/950)
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* **player:** add auto mode ([c107259](https://github.com/havenhq/revideo/commit/c107259f7c2a3886ccfe4ca0140d13064aed238f))
* **player:** improve accessibility ([0fc9235](https://github.com/havenhq/revideo/commit/0fc923576e7b12f9bc799f3a4e861861d49a2406))
* project variables ([#255](https://github.com/havenhq/revideo/issues/255)) ([4883295](https://github.com/havenhq/revideo/commit/488329525939928af52b4a4d8488f1e1cd4cf6f7))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))


### Reverts

* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.





## 0.3.2 (2024-05-09)


### Bug Fixes

* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* add timeline and dynamic variable change to video player ([#22](https://github.com/havenhq/revideo/issues/22)) ([af26c93](https://github.com/havenhq/revideo/commit/af26c93b34e98bd4bf563290d2050154b5d0561c))
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* expose parts of player to outside of shadow root ([#956](https://github.com/havenhq/revideo/issues/956)) ([c996d39](https://github.com/havenhq/revideo/commit/c996d394dda9ba8c6a32f0360bf09e722ec15b0e)), closes [#950](https://github.com/havenhq/revideo/issues/950)
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* **player:** add auto mode ([c107259](https://github.com/havenhq/revideo/commit/c107259f7c2a3886ccfe4ca0140d13064aed238f))
* **player:** improve accessibility ([0fc9235](https://github.com/havenhq/revideo/commit/0fc923576e7b12f9bc799f3a4e861861d49a2406))
* project variables ([#255](https://github.com/havenhq/revideo/issues/255)) ([4883295](https://github.com/havenhq/revideo/commit/488329525939928af52b4a4d8488f1e1cd4cf6f7))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))


### Reverts

* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.





## 0.3.1 (2024-05-08)


### Bug Fixes

* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* add timeline and dynamic variable change to video player ([#22](https://github.com/havenhq/revideo/issues/22)) ([af26c93](https://github.com/havenhq/revideo/commit/af26c93b34e98bd4bf563290d2050154b5d0561c))
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* expose parts of player to outside of shadow root ([#956](https://github.com/havenhq/revideo/issues/956)) ([c996d39](https://github.com/havenhq/revideo/commit/c996d394dda9ba8c6a32f0360bf09e722ec15b0e)), closes [#950](https://github.com/havenhq/revideo/issues/950)
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* **player:** add auto mode ([c107259](https://github.com/havenhq/revideo/commit/c107259f7c2a3886ccfe4ca0140d13064aed238f))
* **player:** improve accessibility ([0fc9235](https://github.com/havenhq/revideo/commit/0fc923576e7b12f9bc799f3a4e861861d49a2406))
* project variables ([#255](https://github.com/havenhq/revideo/issues/255)) ([4883295](https://github.com/havenhq/revideo/commit/488329525939928af52b4a4d8488f1e1cd4cf6f7))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))


### Reverts

* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.





# 0.3.0 (2024-05-03)


### Bug Fixes

* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* add timeline and dynamic variable change to video player ([#22](https://github.com/havenhq/revideo/issues/22)) ([af26c93](https://github.com/havenhq/revideo/commit/af26c93b34e98bd4bf563290d2050154b5d0561c))
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* expose parts of player to outside of shadow root ([#956](https://github.com/havenhq/revideo/issues/956)) ([c996d39](https://github.com/havenhq/revideo/commit/c996d394dda9ba8c6a32f0360bf09e722ec15b0e)), closes [#950](https://github.com/havenhq/revideo/issues/950)
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* **player:** add auto mode ([c107259](https://github.com/havenhq/revideo/commit/c107259f7c2a3886ccfe4ca0140d13064aed238f))
* **player:** improve accessibility ([0fc9235](https://github.com/havenhq/revideo/commit/0fc923576e7b12f9bc799f3a4e861861d49a2406))
* project variables ([#255](https://github.com/havenhq/revideo/issues/255)) ([4883295](https://github.com/havenhq/revideo/commit/488329525939928af52b4a4d8488f1e1cd4cf6f7))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))


### Reverts

* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.





## 0.2.13 (2024-04-24)


### Bug Fixes

* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* add timeline and dynamic variable change to video player ([#22](https://github.com/havenhq/revideo/issues/22)) ([af26c93](https://github.com/havenhq/revideo/commit/af26c93b34e98bd4bf563290d2050154b5d0561c))
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* expose parts of player to outside of shadow root ([#956](https://github.com/havenhq/revideo/issues/956)) ([c996d39](https://github.com/havenhq/revideo/commit/c996d394dda9ba8c6a32f0360bf09e722ec15b0e)), closes [#950](https://github.com/havenhq/revideo/issues/950)
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* **player:** add auto mode ([c107259](https://github.com/havenhq/revideo/commit/c107259f7c2a3886ccfe4ca0140d13064aed238f))
* **player:** improve accessibility ([0fc9235](https://github.com/havenhq/revideo/commit/0fc923576e7b12f9bc799f3a4e861861d49a2406))
* project variables ([#255](https://github.com/havenhq/revideo/issues/255)) ([4883295](https://github.com/havenhq/revideo/commit/488329525939928af52b4a4d8488f1e1cd4cf6f7))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))


### Reverts

* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.





## 0.2.11 (2024-04-22)


### Bug Fixes

* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* **player:** visibility on white background ([#36](https://github.com/havenhq/revideo/issues/36)) ([4376d11](https://github.com/havenhq/revideo/commit/4376d1170ee33f3a364a5f51a186a1e92fbf61b5))
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* add timeline and dynamic variable change to video player ([#22](https://github.com/havenhq/revideo/issues/22)) ([af26c93](https://github.com/havenhq/revideo/commit/af26c93b34e98bd4bf563290d2050154b5d0561c))
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* expose parts of player to outside of shadow root ([#956](https://github.com/havenhq/revideo/issues/956)) ([c996d39](https://github.com/havenhq/revideo/commit/c996d394dda9ba8c6a32f0360bf09e722ec15b0e)), closes [#950](https://github.com/havenhq/revideo/issues/950)
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* **player:** add auto mode ([c107259](https://github.com/havenhq/revideo/commit/c107259f7c2a3886ccfe4ca0140d13064aed238f))
* **player:** improve accessibility ([0fc9235](https://github.com/havenhq/revideo/commit/0fc923576e7b12f9bc799f3a4e861861d49a2406))
* project variables ([#255](https://github.com/havenhq/revideo/issues/255)) ([4883295](https://github.com/havenhq/revideo/commit/488329525939928af52b4a4d8488f1e1cd4cf6f7))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))


### Reverts

* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
