# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 0.5.9 (2024-09-10)


### Bug Fixes

* add case for data urls ([#241](https://github.com/redotvideo/revideo/issues/241)) ([a5f9de2](https://github.com/redotvideo/revideo/commit/a5f9de22604e2ee85fac50c36d7a9b4724d757ff))
* audio timing when rendering with multiple workers ([#144](https://github.com/redotvideo/revideo/issues/144)) ([7e59476](https://github.com/redotvideo/revideo/commit/7e59476851b1b8fb464dc626bad97b0b021d5fb3))
* better ffmpeg error when not installed ([#65](https://github.com/redotvideo/revideo/issues/65)) ([e5a7782](https://github.com/redotvideo/revideo/commit/e5a77826676d6155fa8f772ec56d4aa09954e350))
* calculate audio duration correctly when playback rate is not zero ([#216](https://github.com/redotvideo/revideo/issues/216)) ([35025a7](https://github.com/redotvideo/revideo/commit/35025a79298b5b6173b5fa24c938a8b20cd3597c))
* calculate audio padding according to input sample rate, not target sample rate ([#41](https://github.com/redotvideo/revideo/issues/41)) ([cae94e5](https://github.com/redotvideo/revideo/commit/cae94e5b1017d31688028d8a3de9b86916580155))
* clean up when rendering through ui to avoid using old audio files for mute video ([#185](https://github.com/redotvideo/revideo/issues/185)) ([ab485f2](https://github.com/redotvideo/revideo/commit/ab485f260cc31bf4973e084ed73e00165bdd5d9b))
* correct dependencies for create package ([#15](https://github.com/redotvideo/revideo/issues/15)) ([27a2737](https://github.com/redotvideo/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/redotvideo/revideo/issues/62)) ([04cdc5b](https://github.com/redotvideo/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* ffmpeg logs and remove non-public-folder path case ([#81](https://github.com/redotvideo/revideo/issues/81)) ([e492cc4](https://github.com/redotvideo/revideo/commit/e492cc47bac7c1542a287d7fab6fecb89b75fc0a))
* **ffmpeg:** audios get quieter when there are many ([#106](https://github.com/redotvideo/revideo/issues/106)) ([9c32e7d](https://github.com/redotvideo/revideo/commit/9c32e7d3d5a726789984739870bedf4bcc31f5d8))
* **ffmpeg:** check if audio stream is present in video before extracting ([#12](https://github.com/redotvideo/revideo/issues/12)) ([1234fd1](https://github.com/redotvideo/revideo/commit/1234fd17769ca332061b4252aa770ea623a5348a))
* **ffmpeg:** looping of video tag ([#122](https://github.com/redotvideo/revideo/issues/122)) ([109c675](https://github.com/redotvideo/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* **ffmpeg:** set last image ([#133](https://github.com/redotvideo/revideo/issues/133)) ([416f960](https://github.com/redotvideo/revideo/commit/416f960b9ab1d755449add67295e52bc15f43568))
* pin ffmpeg v6 ([#77](https://github.com/redotvideo/revideo/issues/77)) ([3e2a7cd](https://github.com/redotvideo/revideo/commit/3e2a7cda6cd7c2762d4db02e74f7ec68db020981))
* prevent progress error when rendering from ui ([#71](https://github.com/redotvideo/revideo/issues/71)) ([534e089](https://github.com/redotvideo/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove console.log ([#25](https://github.com/redotvideo/revideo/issues/25)) ([dd376bc](https://github.com/redotvideo/revideo/commit/dd376bcd2ad6ba21dc5b5ff564fe70d7bc52a2f7))
* resolve asset file paths differently when they are inside project ([#5](https://github.com/redotvideo/revideo/issues/5)) ([e0a3917](https://github.com/redotvideo/revideo/commit/e0a39175a34f501ffce0fa4508c83e84244fd43c))
* resolve path correctly when file is in public folder ([#8](https://github.com/redotvideo/revideo/issues/8)) ([d1a74a4](https://github.com/redotvideo/revideo/commit/d1a74a4b0aaf89a535d7e7f95ce51de8ba3aaa78))
* resolve remote file urls in exporter correctly ([#7](https://github.com/redotvideo/revideo/issues/7)) ([1807191](https://github.com/redotvideo/revideo/commit/18071918fa295f83a9d12f885d2079965a694d7f))
* set ffmpeg path in generate-audio ([#173](https://github.com/redotvideo/revideo/issues/173)) ([2dc429b](https://github.com/redotvideo/revideo/commit/2dc429b5a721fe9401fa36575fe39a8081d6f902))
* surface error ([#38](https://github.com/redotvideo/revideo/issues/38)) ([15cddfb](https://github.com/redotvideo/revideo/commit/15cddfba081c79d0315cbfa02cd448bab5817195))
* use default ffmpeg path ([#68](https://github.com/redotvideo/revideo/issues/68)) ([ea86320](https://github.com/redotvideo/revideo/commit/ea863207760523ff2a24c765ade21e10c532929f))


### Features

* add partial rendering function ([#107](https://github.com/redotvideo/revideo/issues/107)) ([d2e3f27](https://github.com/redotvideo/revideo/commit/d2e3f274506fc4cadd6d309e34889edb7a22ac4d))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/redotvideo/revideo/issues/9)) ([9e0d67b](https://github.com/redotvideo/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* custom ffmpeg path ([#93](https://github.com/redotvideo/revideo/issues/93)) ([a7554e4](https://github.com/redotvideo/revideo/commit/a7554e4a39adb7686188f415ad871ac3e391ced5))
* encode video with wasm ([#162](https://github.com/redotvideo/revideo/issues/162)) ([c756fd8](https://github.com/redotvideo/revideo/commit/c756fd8293d49b8abc8887c94bfb8f0d04e65842))
* expose revideo project as web service ([#29](https://github.com/redotvideo/revideo/issues/29)) ([c2a2a96](https://github.com/redotvideo/revideo/commit/c2a2a96db199f772471833cf51bddd2574f08289))
* let user pass viteConfig in renderVideo, fix audio sync ([#153](https://github.com/redotvideo/revideo/issues/153)) ([b9d9cc7](https://github.com/redotvideo/revideo/commit/b9d9cc7b1590923f00864f5fa0d2263c0a4201e7))
* make transparent video optional ([#91](https://github.com/redotvideo/revideo/issues/91)) ([6a052d5](https://github.com/redotvideo/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/redotvideo/revideo/issues/74)) ([dc9ddd1](https://github.com/redotvideo/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/redotvideo/revideo/issues/6)) ([1e508b9](https://github.com/redotvideo/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* range parameters for rendering ([#56](https://github.com/redotvideo/revideo/issues/56)) ([794a37e](https://github.com/redotvideo/revideo/commit/794a37e9553bec4f15176cda991bbc513b8e2aea))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/redotvideo/revideo/issues/33)) ([a6e1bcd](https://github.com/redotvideo/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* serve assets through cli ([#124](https://github.com/redotvideo/revideo/issues/124)) ([fdccde1](https://github.com/redotvideo/revideo/commit/fdccde12f058811382e7e2084ebe4b9e05af1b80))
* show progress during renderVideo ([#70](https://github.com/redotvideo/revideo/issues/70)) ([79f472e](https://github.com/redotvideo/revideo/commit/79f472ecf00968c24bb2238b881a0d8fd8a1f94e))
* transparent video ([#75](https://github.com/redotvideo/revideo/issues/75)) ([5f7b909](https://github.com/redotvideo/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))


### Performance Improvements

* faster ffmpeg decoder ([#268](https://github.com/redotvideo/revideo/issues/268)) ([f1c1afb](https://github.com/redotvideo/revideo/commit/f1c1afb718bc58fe6925568f72dc4da827b98f3f))
* move audio delay to last concatenation step for faster processing ([#253](https://github.com/redotvideo/revideo/issues/253)) ([6740938](https://github.com/redotvideo/revideo/commit/6740938542dc0c988f730879320624a762daa919))
* parallelize image and audio processing during render ([#61](https://github.com/redotvideo/revideo/issues/61)) ([2119a01](https://github.com/redotvideo/revideo/commit/2119a0179636a91e1f2fd86f7857814a6a907407))
* use canvas.toBlob instead of toDataUrl to render faster ([#67](https://github.com/redotvideo/revideo/issues/67)) ([de402a3](https://github.com/redotvideo/revideo/commit/de402a38630eba4cb4d83e74595498b9ee28d3e5))


### Reverts

* Revert "perf: move audio delay to last concatenation step for faster processi…" (#266) ([7146760](https://github.com/redotvideo/revideo/commit/7146760e592187ceb239ab63ff9ca7cb5b1ab5e8)), closes [#266](https://github.com/redotvideo/revideo/issues/266)





## 0.5.8 (2024-09-10)


### Bug Fixes

* add case for data urls ([#241](https://github.com/redotvideo/revideo/issues/241)) ([a5f9de2](https://github.com/redotvideo/revideo/commit/a5f9de22604e2ee85fac50c36d7a9b4724d757ff))
* audio timing when rendering with multiple workers ([#144](https://github.com/redotvideo/revideo/issues/144)) ([7e59476](https://github.com/redotvideo/revideo/commit/7e59476851b1b8fb464dc626bad97b0b021d5fb3))
* better ffmpeg error when not installed ([#65](https://github.com/redotvideo/revideo/issues/65)) ([e5a7782](https://github.com/redotvideo/revideo/commit/e5a77826676d6155fa8f772ec56d4aa09954e350))
* calculate audio duration correctly when playback rate is not zero ([#216](https://github.com/redotvideo/revideo/issues/216)) ([35025a7](https://github.com/redotvideo/revideo/commit/35025a79298b5b6173b5fa24c938a8b20cd3597c))
* calculate audio padding according to input sample rate, not target sample rate ([#41](https://github.com/redotvideo/revideo/issues/41)) ([cae94e5](https://github.com/redotvideo/revideo/commit/cae94e5b1017d31688028d8a3de9b86916580155))
* clean up when rendering through ui to avoid using old audio files for mute video ([#185](https://github.com/redotvideo/revideo/issues/185)) ([ab485f2](https://github.com/redotvideo/revideo/commit/ab485f260cc31bf4973e084ed73e00165bdd5d9b))
* correct dependencies for create package ([#15](https://github.com/redotvideo/revideo/issues/15)) ([27a2737](https://github.com/redotvideo/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/redotvideo/revideo/issues/62)) ([04cdc5b](https://github.com/redotvideo/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* ffmpeg logs and remove non-public-folder path case ([#81](https://github.com/redotvideo/revideo/issues/81)) ([e492cc4](https://github.com/redotvideo/revideo/commit/e492cc47bac7c1542a287d7fab6fecb89b75fc0a))
* **ffmpeg:** audios get quieter when there are many ([#106](https://github.com/redotvideo/revideo/issues/106)) ([9c32e7d](https://github.com/redotvideo/revideo/commit/9c32e7d3d5a726789984739870bedf4bcc31f5d8))
* **ffmpeg:** check if audio stream is present in video before extracting ([#12](https://github.com/redotvideo/revideo/issues/12)) ([1234fd1](https://github.com/redotvideo/revideo/commit/1234fd17769ca332061b4252aa770ea623a5348a))
* **ffmpeg:** looping of video tag ([#122](https://github.com/redotvideo/revideo/issues/122)) ([109c675](https://github.com/redotvideo/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* **ffmpeg:** set last image ([#133](https://github.com/redotvideo/revideo/issues/133)) ([416f960](https://github.com/redotvideo/revideo/commit/416f960b9ab1d755449add67295e52bc15f43568))
* pin ffmpeg v6 ([#77](https://github.com/redotvideo/revideo/issues/77)) ([3e2a7cd](https://github.com/redotvideo/revideo/commit/3e2a7cda6cd7c2762d4db02e74f7ec68db020981))
* prevent progress error when rendering from ui ([#71](https://github.com/redotvideo/revideo/issues/71)) ([534e089](https://github.com/redotvideo/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove console.log ([#25](https://github.com/redotvideo/revideo/issues/25)) ([dd376bc](https://github.com/redotvideo/revideo/commit/dd376bcd2ad6ba21dc5b5ff564fe70d7bc52a2f7))
* resolve asset file paths differently when they are inside project ([#5](https://github.com/redotvideo/revideo/issues/5)) ([e0a3917](https://github.com/redotvideo/revideo/commit/e0a39175a34f501ffce0fa4508c83e84244fd43c))
* resolve path correctly when file is in public folder ([#8](https://github.com/redotvideo/revideo/issues/8)) ([d1a74a4](https://github.com/redotvideo/revideo/commit/d1a74a4b0aaf89a535d7e7f95ce51de8ba3aaa78))
* resolve remote file urls in exporter correctly ([#7](https://github.com/redotvideo/revideo/issues/7)) ([1807191](https://github.com/redotvideo/revideo/commit/18071918fa295f83a9d12f885d2079965a694d7f))
* set ffmpeg path in generate-audio ([#173](https://github.com/redotvideo/revideo/issues/173)) ([2dc429b](https://github.com/redotvideo/revideo/commit/2dc429b5a721fe9401fa36575fe39a8081d6f902))
* surface error ([#38](https://github.com/redotvideo/revideo/issues/38)) ([15cddfb](https://github.com/redotvideo/revideo/commit/15cddfba081c79d0315cbfa02cd448bab5817195))
* use default ffmpeg path ([#68](https://github.com/redotvideo/revideo/issues/68)) ([ea86320](https://github.com/redotvideo/revideo/commit/ea863207760523ff2a24c765ade21e10c532929f))


### Features

* add partial rendering function ([#107](https://github.com/redotvideo/revideo/issues/107)) ([d2e3f27](https://github.com/redotvideo/revideo/commit/d2e3f274506fc4cadd6d309e34889edb7a22ac4d))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/redotvideo/revideo/issues/9)) ([9e0d67b](https://github.com/redotvideo/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* custom ffmpeg path ([#93](https://github.com/redotvideo/revideo/issues/93)) ([a7554e4](https://github.com/redotvideo/revideo/commit/a7554e4a39adb7686188f415ad871ac3e391ced5))
* encode video with wasm ([#162](https://github.com/redotvideo/revideo/issues/162)) ([c756fd8](https://github.com/redotvideo/revideo/commit/c756fd8293d49b8abc8887c94bfb8f0d04e65842))
* expose revideo project as web service ([#29](https://github.com/redotvideo/revideo/issues/29)) ([c2a2a96](https://github.com/redotvideo/revideo/commit/c2a2a96db199f772471833cf51bddd2574f08289))
* let user pass viteConfig in renderVideo, fix audio sync ([#153](https://github.com/redotvideo/revideo/issues/153)) ([b9d9cc7](https://github.com/redotvideo/revideo/commit/b9d9cc7b1590923f00864f5fa0d2263c0a4201e7))
* make transparent video optional ([#91](https://github.com/redotvideo/revideo/issues/91)) ([6a052d5](https://github.com/redotvideo/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/redotvideo/revideo/issues/74)) ([dc9ddd1](https://github.com/redotvideo/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/redotvideo/revideo/issues/6)) ([1e508b9](https://github.com/redotvideo/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* range parameters for rendering ([#56](https://github.com/redotvideo/revideo/issues/56)) ([794a37e](https://github.com/redotvideo/revideo/commit/794a37e9553bec4f15176cda991bbc513b8e2aea))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/redotvideo/revideo/issues/33)) ([a6e1bcd](https://github.com/redotvideo/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* serve assets through cli ([#124](https://github.com/redotvideo/revideo/issues/124)) ([fdccde1](https://github.com/redotvideo/revideo/commit/fdccde12f058811382e7e2084ebe4b9e05af1b80))
* show progress during renderVideo ([#70](https://github.com/redotvideo/revideo/issues/70)) ([79f472e](https://github.com/redotvideo/revideo/commit/79f472ecf00968c24bb2238b881a0d8fd8a1f94e))
* transparent video ([#75](https://github.com/redotvideo/revideo/issues/75)) ([5f7b909](https://github.com/redotvideo/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))


### Performance Improvements

* faster ffmpeg decoder ([#268](https://github.com/redotvideo/revideo/issues/268)) ([f1c1afb](https://github.com/redotvideo/revideo/commit/f1c1afb718bc58fe6925568f72dc4da827b98f3f))
* move audio delay to last concatenation step for faster processing ([#253](https://github.com/redotvideo/revideo/issues/253)) ([6740938](https://github.com/redotvideo/revideo/commit/6740938542dc0c988f730879320624a762daa919))
* parallelize image and audio processing during render ([#61](https://github.com/redotvideo/revideo/issues/61)) ([2119a01](https://github.com/redotvideo/revideo/commit/2119a0179636a91e1f2fd86f7857814a6a907407))
* use canvas.toBlob instead of toDataUrl to render faster ([#67](https://github.com/redotvideo/revideo/issues/67)) ([de402a3](https://github.com/redotvideo/revideo/commit/de402a38630eba4cb4d83e74595498b9ee28d3e5))


### Reverts

* Revert "perf: move audio delay to last concatenation step for faster processi…" (#266) ([7146760](https://github.com/redotvideo/revideo/commit/7146760e592187ceb239ab63ff9ca7cb5b1ab5e8)), closes [#266](https://github.com/redotvideo/revideo/issues/266)





## 0.5.7 (2024-08-26)


### Bug Fixes

* add case for data urls ([#241](https://github.com/redotvideo/revideo/issues/241)) ([a5f9de2](https://github.com/redotvideo/revideo/commit/a5f9de22604e2ee85fac50c36d7a9b4724d757ff))
* audio timing when rendering with multiple workers ([#144](https://github.com/redotvideo/revideo/issues/144)) ([7e59476](https://github.com/redotvideo/revideo/commit/7e59476851b1b8fb464dc626bad97b0b021d5fb3))
* better ffmpeg error when not installed ([#65](https://github.com/redotvideo/revideo/issues/65)) ([e5a7782](https://github.com/redotvideo/revideo/commit/e5a77826676d6155fa8f772ec56d4aa09954e350))
* calculate audio duration correctly when playback rate is not zero ([#216](https://github.com/redotvideo/revideo/issues/216)) ([35025a7](https://github.com/redotvideo/revideo/commit/35025a79298b5b6173b5fa24c938a8b20cd3597c))
* calculate audio padding according to input sample rate, not target sample rate ([#41](https://github.com/redotvideo/revideo/issues/41)) ([cae94e5](https://github.com/redotvideo/revideo/commit/cae94e5b1017d31688028d8a3de9b86916580155))
* clean up when rendering through ui to avoid using old audio files for mute video ([#185](https://github.com/redotvideo/revideo/issues/185)) ([ab485f2](https://github.com/redotvideo/revideo/commit/ab485f260cc31bf4973e084ed73e00165bdd5d9b))
* correct dependencies for create package ([#15](https://github.com/redotvideo/revideo/issues/15)) ([27a2737](https://github.com/redotvideo/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/redotvideo/revideo/issues/62)) ([04cdc5b](https://github.com/redotvideo/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* ffmpeg logs and remove non-public-folder path case ([#81](https://github.com/redotvideo/revideo/issues/81)) ([e492cc4](https://github.com/redotvideo/revideo/commit/e492cc47bac7c1542a287d7fab6fecb89b75fc0a))
* **ffmpeg:** audios get quieter when there are many ([#106](https://github.com/redotvideo/revideo/issues/106)) ([9c32e7d](https://github.com/redotvideo/revideo/commit/9c32e7d3d5a726789984739870bedf4bcc31f5d8))
* **ffmpeg:** check if audio stream is present in video before extracting ([#12](https://github.com/redotvideo/revideo/issues/12)) ([1234fd1](https://github.com/redotvideo/revideo/commit/1234fd17769ca332061b4252aa770ea623a5348a))
* **ffmpeg:** looping of video tag ([#122](https://github.com/redotvideo/revideo/issues/122)) ([109c675](https://github.com/redotvideo/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* **ffmpeg:** set last image ([#133](https://github.com/redotvideo/revideo/issues/133)) ([416f960](https://github.com/redotvideo/revideo/commit/416f960b9ab1d755449add67295e52bc15f43568))
* pin ffmpeg v6 ([#77](https://github.com/redotvideo/revideo/issues/77)) ([3e2a7cd](https://github.com/redotvideo/revideo/commit/3e2a7cda6cd7c2762d4db02e74f7ec68db020981))
* prevent progress error when rendering from ui ([#71](https://github.com/redotvideo/revideo/issues/71)) ([534e089](https://github.com/redotvideo/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove console.log ([#25](https://github.com/redotvideo/revideo/issues/25)) ([dd376bc](https://github.com/redotvideo/revideo/commit/dd376bcd2ad6ba21dc5b5ff564fe70d7bc52a2f7))
* resolve asset file paths differently when they are inside project ([#5](https://github.com/redotvideo/revideo/issues/5)) ([e0a3917](https://github.com/redotvideo/revideo/commit/e0a39175a34f501ffce0fa4508c83e84244fd43c))
* resolve path correctly when file is in public folder ([#8](https://github.com/redotvideo/revideo/issues/8)) ([d1a74a4](https://github.com/redotvideo/revideo/commit/d1a74a4b0aaf89a535d7e7f95ce51de8ba3aaa78))
* resolve remote file urls in exporter correctly ([#7](https://github.com/redotvideo/revideo/issues/7)) ([1807191](https://github.com/redotvideo/revideo/commit/18071918fa295f83a9d12f885d2079965a694d7f))
* set ffmpeg path in generate-audio ([#173](https://github.com/redotvideo/revideo/issues/173)) ([2dc429b](https://github.com/redotvideo/revideo/commit/2dc429b5a721fe9401fa36575fe39a8081d6f902))
* surface error ([#38](https://github.com/redotvideo/revideo/issues/38)) ([15cddfb](https://github.com/redotvideo/revideo/commit/15cddfba081c79d0315cbfa02cd448bab5817195))
* use default ffmpeg path ([#68](https://github.com/redotvideo/revideo/issues/68)) ([ea86320](https://github.com/redotvideo/revideo/commit/ea863207760523ff2a24c765ade21e10c532929f))


### Features

* add partial rendering function ([#107](https://github.com/redotvideo/revideo/issues/107)) ([d2e3f27](https://github.com/redotvideo/revideo/commit/d2e3f274506fc4cadd6d309e34889edb7a22ac4d))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/redotvideo/revideo/issues/9)) ([9e0d67b](https://github.com/redotvideo/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* custom ffmpeg path ([#93](https://github.com/redotvideo/revideo/issues/93)) ([a7554e4](https://github.com/redotvideo/revideo/commit/a7554e4a39adb7686188f415ad871ac3e391ced5))
* encode video with wasm ([#162](https://github.com/redotvideo/revideo/issues/162)) ([c756fd8](https://github.com/redotvideo/revideo/commit/c756fd8293d49b8abc8887c94bfb8f0d04e65842))
* expose revideo project as web service ([#29](https://github.com/redotvideo/revideo/issues/29)) ([c2a2a96](https://github.com/redotvideo/revideo/commit/c2a2a96db199f772471833cf51bddd2574f08289))
* let user pass viteConfig in renderVideo, fix audio sync ([#153](https://github.com/redotvideo/revideo/issues/153)) ([b9d9cc7](https://github.com/redotvideo/revideo/commit/b9d9cc7b1590923f00864f5fa0d2263c0a4201e7))
* make transparent video optional ([#91](https://github.com/redotvideo/revideo/issues/91)) ([6a052d5](https://github.com/redotvideo/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/redotvideo/revideo/issues/74)) ([dc9ddd1](https://github.com/redotvideo/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/redotvideo/revideo/issues/6)) ([1e508b9](https://github.com/redotvideo/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* range parameters for rendering ([#56](https://github.com/redotvideo/revideo/issues/56)) ([794a37e](https://github.com/redotvideo/revideo/commit/794a37e9553bec4f15176cda991bbc513b8e2aea))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/redotvideo/revideo/issues/33)) ([a6e1bcd](https://github.com/redotvideo/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* serve assets through cli ([#124](https://github.com/redotvideo/revideo/issues/124)) ([fdccde1](https://github.com/redotvideo/revideo/commit/fdccde12f058811382e7e2084ebe4b9e05af1b80))
* show progress during renderVideo ([#70](https://github.com/redotvideo/revideo/issues/70)) ([79f472e](https://github.com/redotvideo/revideo/commit/79f472ecf00968c24bb2238b881a0d8fd8a1f94e))
* transparent video ([#75](https://github.com/redotvideo/revideo/issues/75)) ([5f7b909](https://github.com/redotvideo/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))


### Performance Improvements

* move audio delay to last concatenation step for faster processing ([#253](https://github.com/redotvideo/revideo/issues/253)) ([6740938](https://github.com/redotvideo/revideo/commit/6740938542dc0c988f730879320624a762daa919))
* parallelize image and audio processing during render ([#61](https://github.com/redotvideo/revideo/issues/61)) ([2119a01](https://github.com/redotvideo/revideo/commit/2119a0179636a91e1f2fd86f7857814a6a907407))
* use canvas.toBlob instead of toDataUrl to render faster ([#67](https://github.com/redotvideo/revideo/issues/67)) ([de402a3](https://github.com/redotvideo/revideo/commit/de402a38630eba4cb4d83e74595498b9ee28d3e5))


### Reverts

* Revert "perf: move audio delay to last concatenation step for faster processi…" (#266) ([7146760](https://github.com/redotvideo/revideo/commit/7146760e592187ceb239ab63ff9ca7cb5b1ab5e8)), closes [#266](https://github.com/redotvideo/revideo/issues/266)





## 0.5.6 (2024-08-20)


### Bug Fixes

* add case for data urls ([#241](https://github.com/redotvideo/revideo/issues/241)) ([a5f9de2](https://github.com/redotvideo/revideo/commit/a5f9de22604e2ee85fac50c36d7a9b4724d757ff))
* audio timing when rendering with multiple workers ([#144](https://github.com/redotvideo/revideo/issues/144)) ([7e59476](https://github.com/redotvideo/revideo/commit/7e59476851b1b8fb464dc626bad97b0b021d5fb3))
* better ffmpeg error when not installed ([#65](https://github.com/redotvideo/revideo/issues/65)) ([e5a7782](https://github.com/redotvideo/revideo/commit/e5a77826676d6155fa8f772ec56d4aa09954e350))
* calculate audio duration correctly when playback rate is not zero ([#216](https://github.com/redotvideo/revideo/issues/216)) ([35025a7](https://github.com/redotvideo/revideo/commit/35025a79298b5b6173b5fa24c938a8b20cd3597c))
* calculate audio padding according to input sample rate, not target sample rate ([#41](https://github.com/redotvideo/revideo/issues/41)) ([cae94e5](https://github.com/redotvideo/revideo/commit/cae94e5b1017d31688028d8a3de9b86916580155))
* clean up when rendering through ui to avoid using old audio files for mute video ([#185](https://github.com/redotvideo/revideo/issues/185)) ([ab485f2](https://github.com/redotvideo/revideo/commit/ab485f260cc31bf4973e084ed73e00165bdd5d9b))
* correct dependencies for create package ([#15](https://github.com/redotvideo/revideo/issues/15)) ([27a2737](https://github.com/redotvideo/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/redotvideo/revideo/issues/62)) ([04cdc5b](https://github.com/redotvideo/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* ffmpeg logs and remove non-public-folder path case ([#81](https://github.com/redotvideo/revideo/issues/81)) ([e492cc4](https://github.com/redotvideo/revideo/commit/e492cc47bac7c1542a287d7fab6fecb89b75fc0a))
* **ffmpeg:** audios get quieter when there are many ([#106](https://github.com/redotvideo/revideo/issues/106)) ([9c32e7d](https://github.com/redotvideo/revideo/commit/9c32e7d3d5a726789984739870bedf4bcc31f5d8))
* **ffmpeg:** check if audio stream is present in video before extracting ([#12](https://github.com/redotvideo/revideo/issues/12)) ([1234fd1](https://github.com/redotvideo/revideo/commit/1234fd17769ca332061b4252aa770ea623a5348a))
* **ffmpeg:** looping of video tag ([#122](https://github.com/redotvideo/revideo/issues/122)) ([109c675](https://github.com/redotvideo/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* **ffmpeg:** set last image ([#133](https://github.com/redotvideo/revideo/issues/133)) ([416f960](https://github.com/redotvideo/revideo/commit/416f960b9ab1d755449add67295e52bc15f43568))
* pin ffmpeg v6 ([#77](https://github.com/redotvideo/revideo/issues/77)) ([3e2a7cd](https://github.com/redotvideo/revideo/commit/3e2a7cda6cd7c2762d4db02e74f7ec68db020981))
* prevent progress error when rendering from ui ([#71](https://github.com/redotvideo/revideo/issues/71)) ([534e089](https://github.com/redotvideo/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove console.log ([#25](https://github.com/redotvideo/revideo/issues/25)) ([dd376bc](https://github.com/redotvideo/revideo/commit/dd376bcd2ad6ba21dc5b5ff564fe70d7bc52a2f7))
* resolve asset file paths differently when they are inside project ([#5](https://github.com/redotvideo/revideo/issues/5)) ([e0a3917](https://github.com/redotvideo/revideo/commit/e0a39175a34f501ffce0fa4508c83e84244fd43c))
* resolve path correctly when file is in public folder ([#8](https://github.com/redotvideo/revideo/issues/8)) ([d1a74a4](https://github.com/redotvideo/revideo/commit/d1a74a4b0aaf89a535d7e7f95ce51de8ba3aaa78))
* resolve remote file urls in exporter correctly ([#7](https://github.com/redotvideo/revideo/issues/7)) ([1807191](https://github.com/redotvideo/revideo/commit/18071918fa295f83a9d12f885d2079965a694d7f))
* set ffmpeg path in generate-audio ([#173](https://github.com/redotvideo/revideo/issues/173)) ([2dc429b](https://github.com/redotvideo/revideo/commit/2dc429b5a721fe9401fa36575fe39a8081d6f902))
* surface error ([#38](https://github.com/redotvideo/revideo/issues/38)) ([15cddfb](https://github.com/redotvideo/revideo/commit/15cddfba081c79d0315cbfa02cd448bab5817195))
* use default ffmpeg path ([#68](https://github.com/redotvideo/revideo/issues/68)) ([ea86320](https://github.com/redotvideo/revideo/commit/ea863207760523ff2a24c765ade21e10c532929f))


### Features

* add partial rendering function ([#107](https://github.com/redotvideo/revideo/issues/107)) ([d2e3f27](https://github.com/redotvideo/revideo/commit/d2e3f274506fc4cadd6d309e34889edb7a22ac4d))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/redotvideo/revideo/issues/9)) ([9e0d67b](https://github.com/redotvideo/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* custom ffmpeg path ([#93](https://github.com/redotvideo/revideo/issues/93)) ([a7554e4](https://github.com/redotvideo/revideo/commit/a7554e4a39adb7686188f415ad871ac3e391ced5))
* encode video with wasm ([#162](https://github.com/redotvideo/revideo/issues/162)) ([c756fd8](https://github.com/redotvideo/revideo/commit/c756fd8293d49b8abc8887c94bfb8f0d04e65842))
* expose revideo project as web service ([#29](https://github.com/redotvideo/revideo/issues/29)) ([c2a2a96](https://github.com/redotvideo/revideo/commit/c2a2a96db199f772471833cf51bddd2574f08289))
* let user pass viteConfig in renderVideo, fix audio sync ([#153](https://github.com/redotvideo/revideo/issues/153)) ([b9d9cc7](https://github.com/redotvideo/revideo/commit/b9d9cc7b1590923f00864f5fa0d2263c0a4201e7))
* make transparent video optional ([#91](https://github.com/redotvideo/revideo/issues/91)) ([6a052d5](https://github.com/redotvideo/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/redotvideo/revideo/issues/74)) ([dc9ddd1](https://github.com/redotvideo/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/redotvideo/revideo/issues/6)) ([1e508b9](https://github.com/redotvideo/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* range parameters for rendering ([#56](https://github.com/redotvideo/revideo/issues/56)) ([794a37e](https://github.com/redotvideo/revideo/commit/794a37e9553bec4f15176cda991bbc513b8e2aea))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/redotvideo/revideo/issues/33)) ([a6e1bcd](https://github.com/redotvideo/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* serve assets through cli ([#124](https://github.com/redotvideo/revideo/issues/124)) ([fdccde1](https://github.com/redotvideo/revideo/commit/fdccde12f058811382e7e2084ebe4b9e05af1b80))
* show progress during renderVideo ([#70](https://github.com/redotvideo/revideo/issues/70)) ([79f472e](https://github.com/redotvideo/revideo/commit/79f472ecf00968c24bb2238b881a0d8fd8a1f94e))
* transparent video ([#75](https://github.com/redotvideo/revideo/issues/75)) ([5f7b909](https://github.com/redotvideo/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))


### Performance Improvements

* move audio delay to last concatenation step for faster processing ([#253](https://github.com/redotvideo/revideo/issues/253)) ([6740938](https://github.com/redotvideo/revideo/commit/6740938542dc0c988f730879320624a762daa919))
* parallelize image and audio processing during render ([#61](https://github.com/redotvideo/revideo/issues/61)) ([2119a01](https://github.com/redotvideo/revideo/commit/2119a0179636a91e1f2fd86f7857814a6a907407))
* use canvas.toBlob instead of toDataUrl to render faster ([#67](https://github.com/redotvideo/revideo/issues/67)) ([de402a3](https://github.com/redotvideo/revideo/commit/de402a38630eba4cb4d83e74595498b9ee28d3e5))





## 0.5.5 (2024-08-14)


### Bug Fixes

* audio timing when rendering with multiple workers ([#144](https://github.com/redotvideo/revideo/issues/144)) ([7e59476](https://github.com/redotvideo/revideo/commit/7e59476851b1b8fb464dc626bad97b0b021d5fb3))
* better ffmpeg error when not installed ([#65](https://github.com/redotvideo/revideo/issues/65)) ([e5a7782](https://github.com/redotvideo/revideo/commit/e5a77826676d6155fa8f772ec56d4aa09954e350))
* calculate audio duration correctly when playback rate is not zero ([#216](https://github.com/redotvideo/revideo/issues/216)) ([35025a7](https://github.com/redotvideo/revideo/commit/35025a79298b5b6173b5fa24c938a8b20cd3597c))
* calculate audio padding according to input sample rate, not target sample rate ([#41](https://github.com/redotvideo/revideo/issues/41)) ([cae94e5](https://github.com/redotvideo/revideo/commit/cae94e5b1017d31688028d8a3de9b86916580155))
* clean up when rendering through ui to avoid using old audio files for mute video ([#185](https://github.com/redotvideo/revideo/issues/185)) ([ab485f2](https://github.com/redotvideo/revideo/commit/ab485f260cc31bf4973e084ed73e00165bdd5d9b))
* correct dependencies for create package ([#15](https://github.com/redotvideo/revideo/issues/15)) ([27a2737](https://github.com/redotvideo/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/redotvideo/revideo/issues/62)) ([04cdc5b](https://github.com/redotvideo/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* ffmpeg logs and remove non-public-folder path case ([#81](https://github.com/redotvideo/revideo/issues/81)) ([e492cc4](https://github.com/redotvideo/revideo/commit/e492cc47bac7c1542a287d7fab6fecb89b75fc0a))
* **ffmpeg:** audios get quieter when there are many ([#106](https://github.com/redotvideo/revideo/issues/106)) ([9c32e7d](https://github.com/redotvideo/revideo/commit/9c32e7d3d5a726789984739870bedf4bcc31f5d8))
* **ffmpeg:** check if audio stream is present in video before extracting ([#12](https://github.com/redotvideo/revideo/issues/12)) ([1234fd1](https://github.com/redotvideo/revideo/commit/1234fd17769ca332061b4252aa770ea623a5348a))
* **ffmpeg:** looping of video tag ([#122](https://github.com/redotvideo/revideo/issues/122)) ([109c675](https://github.com/redotvideo/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* **ffmpeg:** set last image ([#133](https://github.com/redotvideo/revideo/issues/133)) ([416f960](https://github.com/redotvideo/revideo/commit/416f960b9ab1d755449add67295e52bc15f43568))
* pin ffmpeg v6 ([#77](https://github.com/redotvideo/revideo/issues/77)) ([3e2a7cd](https://github.com/redotvideo/revideo/commit/3e2a7cda6cd7c2762d4db02e74f7ec68db020981))
* prevent progress error when rendering from ui ([#71](https://github.com/redotvideo/revideo/issues/71)) ([534e089](https://github.com/redotvideo/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove console.log ([#25](https://github.com/redotvideo/revideo/issues/25)) ([dd376bc](https://github.com/redotvideo/revideo/commit/dd376bcd2ad6ba21dc5b5ff564fe70d7bc52a2f7))
* resolve asset file paths differently when they are inside project ([#5](https://github.com/redotvideo/revideo/issues/5)) ([e0a3917](https://github.com/redotvideo/revideo/commit/e0a39175a34f501ffce0fa4508c83e84244fd43c))
* resolve path correctly when file is in public folder ([#8](https://github.com/redotvideo/revideo/issues/8)) ([d1a74a4](https://github.com/redotvideo/revideo/commit/d1a74a4b0aaf89a535d7e7f95ce51de8ba3aaa78))
* resolve remote file urls in exporter correctly ([#7](https://github.com/redotvideo/revideo/issues/7)) ([1807191](https://github.com/redotvideo/revideo/commit/18071918fa295f83a9d12f885d2079965a694d7f))
* set ffmpeg path in generate-audio ([#173](https://github.com/redotvideo/revideo/issues/173)) ([2dc429b](https://github.com/redotvideo/revideo/commit/2dc429b5a721fe9401fa36575fe39a8081d6f902))
* surface error ([#38](https://github.com/redotvideo/revideo/issues/38)) ([15cddfb](https://github.com/redotvideo/revideo/commit/15cddfba081c79d0315cbfa02cd448bab5817195))
* use default ffmpeg path ([#68](https://github.com/redotvideo/revideo/issues/68)) ([ea86320](https://github.com/redotvideo/revideo/commit/ea863207760523ff2a24c765ade21e10c532929f))


### Features

* add partial rendering function ([#107](https://github.com/redotvideo/revideo/issues/107)) ([d2e3f27](https://github.com/redotvideo/revideo/commit/d2e3f274506fc4cadd6d309e34889edb7a22ac4d))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/redotvideo/revideo/issues/9)) ([9e0d67b](https://github.com/redotvideo/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* custom ffmpeg path ([#93](https://github.com/redotvideo/revideo/issues/93)) ([a7554e4](https://github.com/redotvideo/revideo/commit/a7554e4a39adb7686188f415ad871ac3e391ced5))
* encode video with wasm ([#162](https://github.com/redotvideo/revideo/issues/162)) ([c756fd8](https://github.com/redotvideo/revideo/commit/c756fd8293d49b8abc8887c94bfb8f0d04e65842))
* expose revideo project as web service ([#29](https://github.com/redotvideo/revideo/issues/29)) ([c2a2a96](https://github.com/redotvideo/revideo/commit/c2a2a96db199f772471833cf51bddd2574f08289))
* let user pass viteConfig in renderVideo, fix audio sync ([#153](https://github.com/redotvideo/revideo/issues/153)) ([b9d9cc7](https://github.com/redotvideo/revideo/commit/b9d9cc7b1590923f00864f5fa0d2263c0a4201e7))
* make transparent video optional ([#91](https://github.com/redotvideo/revideo/issues/91)) ([6a052d5](https://github.com/redotvideo/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/redotvideo/revideo/issues/74)) ([dc9ddd1](https://github.com/redotvideo/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/redotvideo/revideo/issues/6)) ([1e508b9](https://github.com/redotvideo/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* range parameters for rendering ([#56](https://github.com/redotvideo/revideo/issues/56)) ([794a37e](https://github.com/redotvideo/revideo/commit/794a37e9553bec4f15176cda991bbc513b8e2aea))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/redotvideo/revideo/issues/33)) ([a6e1bcd](https://github.com/redotvideo/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* serve assets through cli ([#124](https://github.com/redotvideo/revideo/issues/124)) ([fdccde1](https://github.com/redotvideo/revideo/commit/fdccde12f058811382e7e2084ebe4b9e05af1b80))
* show progress during renderVideo ([#70](https://github.com/redotvideo/revideo/issues/70)) ([79f472e](https://github.com/redotvideo/revideo/commit/79f472ecf00968c24bb2238b881a0d8fd8a1f94e))
* transparent video ([#75](https://github.com/redotvideo/revideo/issues/75)) ([5f7b909](https://github.com/redotvideo/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))


### Performance Improvements

* parallelize image and audio processing during render ([#61](https://github.com/redotvideo/revideo/issues/61)) ([2119a01](https://github.com/redotvideo/revideo/commit/2119a0179636a91e1f2fd86f7857814a6a907407))
* use canvas.toBlob instead of toDataUrl to render faster ([#67](https://github.com/redotvideo/revideo/issues/67)) ([de402a3](https://github.com/redotvideo/revideo/commit/de402a38630eba4cb4d83e74595498b9ee28d3e5))





## 0.5.4 (2024-08-06)


### Bug Fixes

* audio timing when rendering with multiple workers ([#144](https://github.com/redotvideo/revideo/issues/144)) ([7e59476](https://github.com/redotvideo/revideo/commit/7e59476851b1b8fb464dc626bad97b0b021d5fb3))
* better ffmpeg error when not installed ([#65](https://github.com/redotvideo/revideo/issues/65)) ([e5a7782](https://github.com/redotvideo/revideo/commit/e5a77826676d6155fa8f772ec56d4aa09954e350))
* calculate audio duration correctly when playback rate is not zero ([#216](https://github.com/redotvideo/revideo/issues/216)) ([35025a7](https://github.com/redotvideo/revideo/commit/35025a79298b5b6173b5fa24c938a8b20cd3597c))
* calculate audio padding according to input sample rate, not target sample rate ([#41](https://github.com/redotvideo/revideo/issues/41)) ([cae94e5](https://github.com/redotvideo/revideo/commit/cae94e5b1017d31688028d8a3de9b86916580155))
* clean up when rendering through ui to avoid using old audio files for mute video ([#185](https://github.com/redotvideo/revideo/issues/185)) ([ab485f2](https://github.com/redotvideo/revideo/commit/ab485f260cc31bf4973e084ed73e00165bdd5d9b))
* correct dependencies for create package ([#15](https://github.com/redotvideo/revideo/issues/15)) ([27a2737](https://github.com/redotvideo/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/redotvideo/revideo/issues/62)) ([04cdc5b](https://github.com/redotvideo/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* ffmpeg logs and remove non-public-folder path case ([#81](https://github.com/redotvideo/revideo/issues/81)) ([e492cc4](https://github.com/redotvideo/revideo/commit/e492cc47bac7c1542a287d7fab6fecb89b75fc0a))
* **ffmpeg:** audios get quieter when there are many ([#106](https://github.com/redotvideo/revideo/issues/106)) ([9c32e7d](https://github.com/redotvideo/revideo/commit/9c32e7d3d5a726789984739870bedf4bcc31f5d8))
* **ffmpeg:** check if audio stream is present in video before extracting ([#12](https://github.com/redotvideo/revideo/issues/12)) ([1234fd1](https://github.com/redotvideo/revideo/commit/1234fd17769ca332061b4252aa770ea623a5348a))
* **ffmpeg:** looping of video tag ([#122](https://github.com/redotvideo/revideo/issues/122)) ([109c675](https://github.com/redotvideo/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* **ffmpeg:** set last image ([#133](https://github.com/redotvideo/revideo/issues/133)) ([416f960](https://github.com/redotvideo/revideo/commit/416f960b9ab1d755449add67295e52bc15f43568))
* pin ffmpeg v6 ([#77](https://github.com/redotvideo/revideo/issues/77)) ([3e2a7cd](https://github.com/redotvideo/revideo/commit/3e2a7cda6cd7c2762d4db02e74f7ec68db020981))
* prevent progress error when rendering from ui ([#71](https://github.com/redotvideo/revideo/issues/71)) ([534e089](https://github.com/redotvideo/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove console.log ([#25](https://github.com/redotvideo/revideo/issues/25)) ([dd376bc](https://github.com/redotvideo/revideo/commit/dd376bcd2ad6ba21dc5b5ff564fe70d7bc52a2f7))
* resolve asset file paths differently when they are inside project ([#5](https://github.com/redotvideo/revideo/issues/5)) ([e0a3917](https://github.com/redotvideo/revideo/commit/e0a39175a34f501ffce0fa4508c83e84244fd43c))
* resolve path correctly when file is in public folder ([#8](https://github.com/redotvideo/revideo/issues/8)) ([d1a74a4](https://github.com/redotvideo/revideo/commit/d1a74a4b0aaf89a535d7e7f95ce51de8ba3aaa78))
* resolve remote file urls in exporter correctly ([#7](https://github.com/redotvideo/revideo/issues/7)) ([1807191](https://github.com/redotvideo/revideo/commit/18071918fa295f83a9d12f885d2079965a694d7f))
* set ffmpeg path in generate-audio ([#173](https://github.com/redotvideo/revideo/issues/173)) ([2dc429b](https://github.com/redotvideo/revideo/commit/2dc429b5a721fe9401fa36575fe39a8081d6f902))
* surface error ([#38](https://github.com/redotvideo/revideo/issues/38)) ([15cddfb](https://github.com/redotvideo/revideo/commit/15cddfba081c79d0315cbfa02cd448bab5817195))
* use default ffmpeg path ([#68](https://github.com/redotvideo/revideo/issues/68)) ([ea86320](https://github.com/redotvideo/revideo/commit/ea863207760523ff2a24c765ade21e10c532929f))


### Features

* add partial rendering function ([#107](https://github.com/redotvideo/revideo/issues/107)) ([d2e3f27](https://github.com/redotvideo/revideo/commit/d2e3f274506fc4cadd6d309e34889edb7a22ac4d))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/redotvideo/revideo/issues/9)) ([9e0d67b](https://github.com/redotvideo/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* custom ffmpeg path ([#93](https://github.com/redotvideo/revideo/issues/93)) ([a7554e4](https://github.com/redotvideo/revideo/commit/a7554e4a39adb7686188f415ad871ac3e391ced5))
* encode video with wasm ([#162](https://github.com/redotvideo/revideo/issues/162)) ([c756fd8](https://github.com/redotvideo/revideo/commit/c756fd8293d49b8abc8887c94bfb8f0d04e65842))
* expose revideo project as web service ([#29](https://github.com/redotvideo/revideo/issues/29)) ([c2a2a96](https://github.com/redotvideo/revideo/commit/c2a2a96db199f772471833cf51bddd2574f08289))
* let user pass viteConfig in renderVideo, fix audio sync ([#153](https://github.com/redotvideo/revideo/issues/153)) ([b9d9cc7](https://github.com/redotvideo/revideo/commit/b9d9cc7b1590923f00864f5fa0d2263c0a4201e7))
* make transparent video optional ([#91](https://github.com/redotvideo/revideo/issues/91)) ([6a052d5](https://github.com/redotvideo/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/redotvideo/revideo/issues/74)) ([dc9ddd1](https://github.com/redotvideo/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/redotvideo/revideo/issues/6)) ([1e508b9](https://github.com/redotvideo/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* range parameters for rendering ([#56](https://github.com/redotvideo/revideo/issues/56)) ([794a37e](https://github.com/redotvideo/revideo/commit/794a37e9553bec4f15176cda991bbc513b8e2aea))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/redotvideo/revideo/issues/33)) ([a6e1bcd](https://github.com/redotvideo/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* serve assets through cli ([#124](https://github.com/redotvideo/revideo/issues/124)) ([fdccde1](https://github.com/redotvideo/revideo/commit/fdccde12f058811382e7e2084ebe4b9e05af1b80))
* show progress during renderVideo ([#70](https://github.com/redotvideo/revideo/issues/70)) ([79f472e](https://github.com/redotvideo/revideo/commit/79f472ecf00968c24bb2238b881a0d8fd8a1f94e))
* transparent video ([#75](https://github.com/redotvideo/revideo/issues/75)) ([5f7b909](https://github.com/redotvideo/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))


### Performance Improvements

* parallelize image and audio processing during render ([#61](https://github.com/redotvideo/revideo/issues/61)) ([2119a01](https://github.com/redotvideo/revideo/commit/2119a0179636a91e1f2fd86f7857814a6a907407))
* use canvas.toBlob instead of toDataUrl to render faster ([#67](https://github.com/redotvideo/revideo/issues/67)) ([de402a3](https://github.com/redotvideo/revideo/commit/de402a38630eba4cb4d83e74595498b9ee28d3e5))





## 0.5.3 (2024-07-31)


### Bug Fixes

* audio timing when rendering with multiple workers ([#144](https://github.com/redotvideo/revideo/issues/144)) ([7e59476](https://github.com/redotvideo/revideo/commit/7e59476851b1b8fb464dc626bad97b0b021d5fb3))
* better ffmpeg error when not installed ([#65](https://github.com/redotvideo/revideo/issues/65)) ([e5a7782](https://github.com/redotvideo/revideo/commit/e5a77826676d6155fa8f772ec56d4aa09954e350))
* calculate audio duration correctly when playback rate is not zero ([#216](https://github.com/redotvideo/revideo/issues/216)) ([35025a7](https://github.com/redotvideo/revideo/commit/35025a79298b5b6173b5fa24c938a8b20cd3597c))
* calculate audio padding according to input sample rate, not target sample rate ([#41](https://github.com/redotvideo/revideo/issues/41)) ([cae94e5](https://github.com/redotvideo/revideo/commit/cae94e5b1017d31688028d8a3de9b86916580155))
* clean up when rendering through ui to avoid using old audio files for mute video ([#185](https://github.com/redotvideo/revideo/issues/185)) ([ab485f2](https://github.com/redotvideo/revideo/commit/ab485f260cc31bf4973e084ed73e00165bdd5d9b))
* correct dependencies for create package ([#15](https://github.com/redotvideo/revideo/issues/15)) ([27a2737](https://github.com/redotvideo/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/redotvideo/revideo/issues/62)) ([04cdc5b](https://github.com/redotvideo/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* ffmpeg logs and remove non-public-folder path case ([#81](https://github.com/redotvideo/revideo/issues/81)) ([e492cc4](https://github.com/redotvideo/revideo/commit/e492cc47bac7c1542a287d7fab6fecb89b75fc0a))
* **ffmpeg:** audios get quieter when there are many ([#106](https://github.com/redotvideo/revideo/issues/106)) ([9c32e7d](https://github.com/redotvideo/revideo/commit/9c32e7d3d5a726789984739870bedf4bcc31f5d8))
* **ffmpeg:** check if audio stream is present in video before extracting ([#12](https://github.com/redotvideo/revideo/issues/12)) ([1234fd1](https://github.com/redotvideo/revideo/commit/1234fd17769ca332061b4252aa770ea623a5348a))
* **ffmpeg:** looping of video tag ([#122](https://github.com/redotvideo/revideo/issues/122)) ([109c675](https://github.com/redotvideo/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* **ffmpeg:** set last image ([#133](https://github.com/redotvideo/revideo/issues/133)) ([416f960](https://github.com/redotvideo/revideo/commit/416f960b9ab1d755449add67295e52bc15f43568))
* pin ffmpeg v6 ([#77](https://github.com/redotvideo/revideo/issues/77)) ([3e2a7cd](https://github.com/redotvideo/revideo/commit/3e2a7cda6cd7c2762d4db02e74f7ec68db020981))
* prevent progress error when rendering from ui ([#71](https://github.com/redotvideo/revideo/issues/71)) ([534e089](https://github.com/redotvideo/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove console.log ([#25](https://github.com/redotvideo/revideo/issues/25)) ([dd376bc](https://github.com/redotvideo/revideo/commit/dd376bcd2ad6ba21dc5b5ff564fe70d7bc52a2f7))
* resolve asset file paths differently when they are inside project ([#5](https://github.com/redotvideo/revideo/issues/5)) ([e0a3917](https://github.com/redotvideo/revideo/commit/e0a39175a34f501ffce0fa4508c83e84244fd43c))
* resolve path correctly when file is in public folder ([#8](https://github.com/redotvideo/revideo/issues/8)) ([d1a74a4](https://github.com/redotvideo/revideo/commit/d1a74a4b0aaf89a535d7e7f95ce51de8ba3aaa78))
* resolve remote file urls in exporter correctly ([#7](https://github.com/redotvideo/revideo/issues/7)) ([1807191](https://github.com/redotvideo/revideo/commit/18071918fa295f83a9d12f885d2079965a694d7f))
* set ffmpeg path in generate-audio ([#173](https://github.com/redotvideo/revideo/issues/173)) ([2dc429b](https://github.com/redotvideo/revideo/commit/2dc429b5a721fe9401fa36575fe39a8081d6f902))
* surface error ([#38](https://github.com/redotvideo/revideo/issues/38)) ([15cddfb](https://github.com/redotvideo/revideo/commit/15cddfba081c79d0315cbfa02cd448bab5817195))
* use default ffmpeg path ([#68](https://github.com/redotvideo/revideo/issues/68)) ([ea86320](https://github.com/redotvideo/revideo/commit/ea863207760523ff2a24c765ade21e10c532929f))


### Features

* add partial rendering function ([#107](https://github.com/redotvideo/revideo/issues/107)) ([d2e3f27](https://github.com/redotvideo/revideo/commit/d2e3f274506fc4cadd6d309e34889edb7a22ac4d))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/redotvideo/revideo/issues/9)) ([9e0d67b](https://github.com/redotvideo/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* custom ffmpeg path ([#93](https://github.com/redotvideo/revideo/issues/93)) ([a7554e4](https://github.com/redotvideo/revideo/commit/a7554e4a39adb7686188f415ad871ac3e391ced5))
* encode video with wasm ([#162](https://github.com/redotvideo/revideo/issues/162)) ([c756fd8](https://github.com/redotvideo/revideo/commit/c756fd8293d49b8abc8887c94bfb8f0d04e65842))
* expose revideo project as web service ([#29](https://github.com/redotvideo/revideo/issues/29)) ([c2a2a96](https://github.com/redotvideo/revideo/commit/c2a2a96db199f772471833cf51bddd2574f08289))
* let user pass viteConfig in renderVideo, fix audio sync ([#153](https://github.com/redotvideo/revideo/issues/153)) ([b9d9cc7](https://github.com/redotvideo/revideo/commit/b9d9cc7b1590923f00864f5fa0d2263c0a4201e7))
* make transparent video optional ([#91](https://github.com/redotvideo/revideo/issues/91)) ([6a052d5](https://github.com/redotvideo/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/redotvideo/revideo/issues/74)) ([dc9ddd1](https://github.com/redotvideo/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/redotvideo/revideo/issues/6)) ([1e508b9](https://github.com/redotvideo/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* range parameters for rendering ([#56](https://github.com/redotvideo/revideo/issues/56)) ([794a37e](https://github.com/redotvideo/revideo/commit/794a37e9553bec4f15176cda991bbc513b8e2aea))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/redotvideo/revideo/issues/33)) ([a6e1bcd](https://github.com/redotvideo/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* serve assets through cli ([#124](https://github.com/redotvideo/revideo/issues/124)) ([fdccde1](https://github.com/redotvideo/revideo/commit/fdccde12f058811382e7e2084ebe4b9e05af1b80))
* show progress during renderVideo ([#70](https://github.com/redotvideo/revideo/issues/70)) ([79f472e](https://github.com/redotvideo/revideo/commit/79f472ecf00968c24bb2238b881a0d8fd8a1f94e))
* transparent video ([#75](https://github.com/redotvideo/revideo/issues/75)) ([5f7b909](https://github.com/redotvideo/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))


### Performance Improvements

* parallelize image and audio processing during render ([#61](https://github.com/redotvideo/revideo/issues/61)) ([2119a01](https://github.com/redotvideo/revideo/commit/2119a0179636a91e1f2fd86f7857814a6a907407))
* use canvas.toBlob instead of toDataUrl to render faster ([#67](https://github.com/redotvideo/revideo/issues/67)) ([de402a3](https://github.com/redotvideo/revideo/commit/de402a38630eba4cb4d83e74595498b9ee28d3e5))





## 0.5.2 (2024-07-25)


### Bug Fixes

* audio timing when rendering with multiple workers ([#144](https://github.com/redotvideo/revideo/issues/144)) ([7e59476](https://github.com/redotvideo/revideo/commit/7e59476851b1b8fb464dc626bad97b0b021d5fb3))
* better ffmpeg error when not installed ([#65](https://github.com/redotvideo/revideo/issues/65)) ([e5a7782](https://github.com/redotvideo/revideo/commit/e5a77826676d6155fa8f772ec56d4aa09954e350))
* calculate audio padding according to input sample rate, not target sample rate ([#41](https://github.com/redotvideo/revideo/issues/41)) ([cae94e5](https://github.com/redotvideo/revideo/commit/cae94e5b1017d31688028d8a3de9b86916580155))
* clean up when rendering through ui to avoid using old audio files for mute video ([#185](https://github.com/redotvideo/revideo/issues/185)) ([ab485f2](https://github.com/redotvideo/revideo/commit/ab485f260cc31bf4973e084ed73e00165bdd5d9b))
* correct dependencies for create package ([#15](https://github.com/redotvideo/revideo/issues/15)) ([27a2737](https://github.com/redotvideo/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/redotvideo/revideo/issues/62)) ([04cdc5b](https://github.com/redotvideo/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* ffmpeg logs and remove non-public-folder path case ([#81](https://github.com/redotvideo/revideo/issues/81)) ([e492cc4](https://github.com/redotvideo/revideo/commit/e492cc47bac7c1542a287d7fab6fecb89b75fc0a))
* **ffmpeg:** audios get quieter when there are many ([#106](https://github.com/redotvideo/revideo/issues/106)) ([9c32e7d](https://github.com/redotvideo/revideo/commit/9c32e7d3d5a726789984739870bedf4bcc31f5d8))
* **ffmpeg:** check if audio stream is present in video before extracting ([#12](https://github.com/redotvideo/revideo/issues/12)) ([1234fd1](https://github.com/redotvideo/revideo/commit/1234fd17769ca332061b4252aa770ea623a5348a))
* **ffmpeg:** looping of video tag ([#122](https://github.com/redotvideo/revideo/issues/122)) ([109c675](https://github.com/redotvideo/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* **ffmpeg:** set last image ([#133](https://github.com/redotvideo/revideo/issues/133)) ([416f960](https://github.com/redotvideo/revideo/commit/416f960b9ab1d755449add67295e52bc15f43568))
* pin ffmpeg v6 ([#77](https://github.com/redotvideo/revideo/issues/77)) ([3e2a7cd](https://github.com/redotvideo/revideo/commit/3e2a7cda6cd7c2762d4db02e74f7ec68db020981))
* prevent progress error when rendering from ui ([#71](https://github.com/redotvideo/revideo/issues/71)) ([534e089](https://github.com/redotvideo/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove console.log ([#25](https://github.com/redotvideo/revideo/issues/25)) ([dd376bc](https://github.com/redotvideo/revideo/commit/dd376bcd2ad6ba21dc5b5ff564fe70d7bc52a2f7))
* resolve asset file paths differently when they are inside project ([#5](https://github.com/redotvideo/revideo/issues/5)) ([e0a3917](https://github.com/redotvideo/revideo/commit/e0a39175a34f501ffce0fa4508c83e84244fd43c))
* resolve path correctly when file is in public folder ([#8](https://github.com/redotvideo/revideo/issues/8)) ([d1a74a4](https://github.com/redotvideo/revideo/commit/d1a74a4b0aaf89a535d7e7f95ce51de8ba3aaa78))
* resolve remote file urls in exporter correctly ([#7](https://github.com/redotvideo/revideo/issues/7)) ([1807191](https://github.com/redotvideo/revideo/commit/18071918fa295f83a9d12f885d2079965a694d7f))
* set ffmpeg path in generate-audio ([#173](https://github.com/redotvideo/revideo/issues/173)) ([2dc429b](https://github.com/redotvideo/revideo/commit/2dc429b5a721fe9401fa36575fe39a8081d6f902))
* surface error ([#38](https://github.com/redotvideo/revideo/issues/38)) ([15cddfb](https://github.com/redotvideo/revideo/commit/15cddfba081c79d0315cbfa02cd448bab5817195))
* use default ffmpeg path ([#68](https://github.com/redotvideo/revideo/issues/68)) ([ea86320](https://github.com/redotvideo/revideo/commit/ea863207760523ff2a24c765ade21e10c532929f))


### Features

* add partial rendering function ([#107](https://github.com/redotvideo/revideo/issues/107)) ([d2e3f27](https://github.com/redotvideo/revideo/commit/d2e3f274506fc4cadd6d309e34889edb7a22ac4d))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/redotvideo/revideo/issues/9)) ([9e0d67b](https://github.com/redotvideo/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* custom ffmpeg path ([#93](https://github.com/redotvideo/revideo/issues/93)) ([a7554e4](https://github.com/redotvideo/revideo/commit/a7554e4a39adb7686188f415ad871ac3e391ced5))
* encode video with wasm ([#162](https://github.com/redotvideo/revideo/issues/162)) ([c756fd8](https://github.com/redotvideo/revideo/commit/c756fd8293d49b8abc8887c94bfb8f0d04e65842))
* expose revideo project as web service ([#29](https://github.com/redotvideo/revideo/issues/29)) ([c2a2a96](https://github.com/redotvideo/revideo/commit/c2a2a96db199f772471833cf51bddd2574f08289))
* let user pass viteConfig in renderVideo, fix audio sync ([#153](https://github.com/redotvideo/revideo/issues/153)) ([b9d9cc7](https://github.com/redotvideo/revideo/commit/b9d9cc7b1590923f00864f5fa0d2263c0a4201e7))
* make transparent video optional ([#91](https://github.com/redotvideo/revideo/issues/91)) ([6a052d5](https://github.com/redotvideo/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/redotvideo/revideo/issues/74)) ([dc9ddd1](https://github.com/redotvideo/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/redotvideo/revideo/issues/6)) ([1e508b9](https://github.com/redotvideo/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* range parameters for rendering ([#56](https://github.com/redotvideo/revideo/issues/56)) ([794a37e](https://github.com/redotvideo/revideo/commit/794a37e9553bec4f15176cda991bbc513b8e2aea))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/redotvideo/revideo/issues/33)) ([a6e1bcd](https://github.com/redotvideo/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* serve assets through cli ([#124](https://github.com/redotvideo/revideo/issues/124)) ([fdccde1](https://github.com/redotvideo/revideo/commit/fdccde12f058811382e7e2084ebe4b9e05af1b80))
* show progress during renderVideo ([#70](https://github.com/redotvideo/revideo/issues/70)) ([79f472e](https://github.com/redotvideo/revideo/commit/79f472ecf00968c24bb2238b881a0d8fd8a1f94e))
* transparent video ([#75](https://github.com/redotvideo/revideo/issues/75)) ([5f7b909](https://github.com/redotvideo/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))


### Performance Improvements

* parallelize image and audio processing during render ([#61](https://github.com/redotvideo/revideo/issues/61)) ([2119a01](https://github.com/redotvideo/revideo/commit/2119a0179636a91e1f2fd86f7857814a6a907407))
* use canvas.toBlob instead of toDataUrl to render faster ([#67](https://github.com/redotvideo/revideo/issues/67)) ([de402a3](https://github.com/redotvideo/revideo/commit/de402a38630eba4cb4d83e74595498b9ee28d3e5))





# 0.5.0 (2024-07-24)


### Bug Fixes

* audio timing when rendering with multiple workers ([#144](https://github.com/redotvideo/revideo/issues/144)) ([7e59476](https://github.com/redotvideo/revideo/commit/7e59476851b1b8fb464dc626bad97b0b021d5fb3))
* better ffmpeg error when not installed ([#65](https://github.com/redotvideo/revideo/issues/65)) ([e5a7782](https://github.com/redotvideo/revideo/commit/e5a77826676d6155fa8f772ec56d4aa09954e350))
* calculate audio padding according to input sample rate, not target sample rate ([#41](https://github.com/redotvideo/revideo/issues/41)) ([cae94e5](https://github.com/redotvideo/revideo/commit/cae94e5b1017d31688028d8a3de9b86916580155))
* clean up when rendering through ui to avoid using old audio files for mute video ([#185](https://github.com/redotvideo/revideo/issues/185)) ([ab485f2](https://github.com/redotvideo/revideo/commit/ab485f260cc31bf4973e084ed73e00165bdd5d9b))
* correct dependencies for create package ([#15](https://github.com/redotvideo/revideo/issues/15)) ([27a2737](https://github.com/redotvideo/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/redotvideo/revideo/issues/62)) ([04cdc5b](https://github.com/redotvideo/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* ffmpeg logs and remove non-public-folder path case ([#81](https://github.com/redotvideo/revideo/issues/81)) ([e492cc4](https://github.com/redotvideo/revideo/commit/e492cc47bac7c1542a287d7fab6fecb89b75fc0a))
* **ffmpeg:** audios get quieter when there are many ([#106](https://github.com/redotvideo/revideo/issues/106)) ([9c32e7d](https://github.com/redotvideo/revideo/commit/9c32e7d3d5a726789984739870bedf4bcc31f5d8))
* **ffmpeg:** check if audio stream is present in video before extracting ([#12](https://github.com/redotvideo/revideo/issues/12)) ([1234fd1](https://github.com/redotvideo/revideo/commit/1234fd17769ca332061b4252aa770ea623a5348a))
* **ffmpeg:** looping of video tag ([#122](https://github.com/redotvideo/revideo/issues/122)) ([109c675](https://github.com/redotvideo/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* **ffmpeg:** set last image ([#133](https://github.com/redotvideo/revideo/issues/133)) ([416f960](https://github.com/redotvideo/revideo/commit/416f960b9ab1d755449add67295e52bc15f43568))
* pin ffmpeg v6 ([#77](https://github.com/redotvideo/revideo/issues/77)) ([3e2a7cd](https://github.com/redotvideo/revideo/commit/3e2a7cda6cd7c2762d4db02e74f7ec68db020981))
* prevent progress error when rendering from ui ([#71](https://github.com/redotvideo/revideo/issues/71)) ([534e089](https://github.com/redotvideo/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove console.log ([#25](https://github.com/redotvideo/revideo/issues/25)) ([dd376bc](https://github.com/redotvideo/revideo/commit/dd376bcd2ad6ba21dc5b5ff564fe70d7bc52a2f7))
* resolve asset file paths differently when they are inside project ([#5](https://github.com/redotvideo/revideo/issues/5)) ([e0a3917](https://github.com/redotvideo/revideo/commit/e0a39175a34f501ffce0fa4508c83e84244fd43c))
* resolve path correctly when file is in public folder ([#8](https://github.com/redotvideo/revideo/issues/8)) ([d1a74a4](https://github.com/redotvideo/revideo/commit/d1a74a4b0aaf89a535d7e7f95ce51de8ba3aaa78))
* resolve remote file urls in exporter correctly ([#7](https://github.com/redotvideo/revideo/issues/7)) ([1807191](https://github.com/redotvideo/revideo/commit/18071918fa295f83a9d12f885d2079965a694d7f))
* set ffmpeg path in generate-audio ([#173](https://github.com/redotvideo/revideo/issues/173)) ([2dc429b](https://github.com/redotvideo/revideo/commit/2dc429b5a721fe9401fa36575fe39a8081d6f902))
* surface error ([#38](https://github.com/redotvideo/revideo/issues/38)) ([15cddfb](https://github.com/redotvideo/revideo/commit/15cddfba081c79d0315cbfa02cd448bab5817195))
* use default ffmpeg path ([#68](https://github.com/redotvideo/revideo/issues/68)) ([ea86320](https://github.com/redotvideo/revideo/commit/ea863207760523ff2a24c765ade21e10c532929f))


### Features

* add partial rendering function ([#107](https://github.com/redotvideo/revideo/issues/107)) ([d2e3f27](https://github.com/redotvideo/revideo/commit/d2e3f274506fc4cadd6d309e34889edb7a22ac4d))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/redotvideo/revideo/issues/9)) ([9e0d67b](https://github.com/redotvideo/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* custom ffmpeg path ([#93](https://github.com/redotvideo/revideo/issues/93)) ([a7554e4](https://github.com/redotvideo/revideo/commit/a7554e4a39adb7686188f415ad871ac3e391ced5))
* encode video with wasm ([#162](https://github.com/redotvideo/revideo/issues/162)) ([c756fd8](https://github.com/redotvideo/revideo/commit/c756fd8293d49b8abc8887c94bfb8f0d04e65842))
* expose revideo project as web service ([#29](https://github.com/redotvideo/revideo/issues/29)) ([c2a2a96](https://github.com/redotvideo/revideo/commit/c2a2a96db199f772471833cf51bddd2574f08289))
* let user pass viteConfig in renderVideo, fix audio sync ([#153](https://github.com/redotvideo/revideo/issues/153)) ([b9d9cc7](https://github.com/redotvideo/revideo/commit/b9d9cc7b1590923f00864f5fa0d2263c0a4201e7))
* make transparent video optional ([#91](https://github.com/redotvideo/revideo/issues/91)) ([6a052d5](https://github.com/redotvideo/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/redotvideo/revideo/issues/74)) ([dc9ddd1](https://github.com/redotvideo/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/redotvideo/revideo/issues/6)) ([1e508b9](https://github.com/redotvideo/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* range parameters for rendering ([#56](https://github.com/redotvideo/revideo/issues/56)) ([794a37e](https://github.com/redotvideo/revideo/commit/794a37e9553bec4f15176cda991bbc513b8e2aea))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/redotvideo/revideo/issues/33)) ([a6e1bcd](https://github.com/redotvideo/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* serve assets through cli ([#124](https://github.com/redotvideo/revideo/issues/124)) ([fdccde1](https://github.com/redotvideo/revideo/commit/fdccde12f058811382e7e2084ebe4b9e05af1b80))
* show progress during renderVideo ([#70](https://github.com/redotvideo/revideo/issues/70)) ([79f472e](https://github.com/redotvideo/revideo/commit/79f472ecf00968c24bb2238b881a0d8fd8a1f94e))
* transparent video ([#75](https://github.com/redotvideo/revideo/issues/75)) ([5f7b909](https://github.com/redotvideo/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))


### Performance Improvements

* parallelize image and audio processing during render ([#61](https://github.com/redotvideo/revideo/issues/61)) ([2119a01](https://github.com/redotvideo/revideo/commit/2119a0179636a91e1f2fd86f7857814a6a907407))
* use canvas.toBlob instead of toDataUrl to render faster ([#67](https://github.com/redotvideo/revideo/issues/67)) ([de402a3](https://github.com/redotvideo/revideo/commit/de402a38630eba4cb4d83e74595498b9ee28d3e5))





## 0.4.8 (2024-07-15)


### Bug Fixes

* audio timing when rendering with multiple workers ([#144](https://github.com/redotvideo/revideo/issues/144)) ([7e59476](https://github.com/redotvideo/revideo/commit/7e59476851b1b8fb464dc626bad97b0b021d5fb3))
* better ffmpeg error when not installed ([#65](https://github.com/redotvideo/revideo/issues/65)) ([e5a7782](https://github.com/redotvideo/revideo/commit/e5a77826676d6155fa8f772ec56d4aa09954e350))
* calculate audio padding according to input sample rate, not target sample rate ([#41](https://github.com/redotvideo/revideo/issues/41)) ([cae94e5](https://github.com/redotvideo/revideo/commit/cae94e5b1017d31688028d8a3de9b86916580155))
* clean up when rendering through ui to avoid using old audio files for mute video ([#185](https://github.com/redotvideo/revideo/issues/185)) ([ab485f2](https://github.com/redotvideo/revideo/commit/ab485f260cc31bf4973e084ed73e00165bdd5d9b))
* correct dependencies for create package ([#15](https://github.com/redotvideo/revideo/issues/15)) ([27a2737](https://github.com/redotvideo/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/redotvideo/revideo/issues/62)) ([04cdc5b](https://github.com/redotvideo/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* ffmpeg logs and remove non-public-folder path case ([#81](https://github.com/redotvideo/revideo/issues/81)) ([e492cc4](https://github.com/redotvideo/revideo/commit/e492cc47bac7c1542a287d7fab6fecb89b75fc0a))
* **ffmpeg:** audios get quieter when there are many ([#106](https://github.com/redotvideo/revideo/issues/106)) ([9c32e7d](https://github.com/redotvideo/revideo/commit/9c32e7d3d5a726789984739870bedf4bcc31f5d8))
* **ffmpeg:** check if audio stream is present in video before extracting ([#12](https://github.com/redotvideo/revideo/issues/12)) ([1234fd1](https://github.com/redotvideo/revideo/commit/1234fd17769ca332061b4252aa770ea623a5348a))
* **ffmpeg:** looping of video tag ([#122](https://github.com/redotvideo/revideo/issues/122)) ([109c675](https://github.com/redotvideo/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* **ffmpeg:** set last image ([#133](https://github.com/redotvideo/revideo/issues/133)) ([416f960](https://github.com/redotvideo/revideo/commit/416f960b9ab1d755449add67295e52bc15f43568))
* pin ffmpeg v6 ([#77](https://github.com/redotvideo/revideo/issues/77)) ([3e2a7cd](https://github.com/redotvideo/revideo/commit/3e2a7cda6cd7c2762d4db02e74f7ec68db020981))
* prevent progress error when rendering from ui ([#71](https://github.com/redotvideo/revideo/issues/71)) ([534e089](https://github.com/redotvideo/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove console.log ([#25](https://github.com/redotvideo/revideo/issues/25)) ([dd376bc](https://github.com/redotvideo/revideo/commit/dd376bcd2ad6ba21dc5b5ff564fe70d7bc52a2f7))
* resolve asset file paths differently when they are inside project ([#5](https://github.com/redotvideo/revideo/issues/5)) ([e0a3917](https://github.com/redotvideo/revideo/commit/e0a39175a34f501ffce0fa4508c83e84244fd43c))
* resolve path correctly when file is in public folder ([#8](https://github.com/redotvideo/revideo/issues/8)) ([d1a74a4](https://github.com/redotvideo/revideo/commit/d1a74a4b0aaf89a535d7e7f95ce51de8ba3aaa78))
* resolve remote file urls in exporter correctly ([#7](https://github.com/redotvideo/revideo/issues/7)) ([1807191](https://github.com/redotvideo/revideo/commit/18071918fa295f83a9d12f885d2079965a694d7f))
* set ffmpeg path in generate-audio ([#173](https://github.com/redotvideo/revideo/issues/173)) ([2dc429b](https://github.com/redotvideo/revideo/commit/2dc429b5a721fe9401fa36575fe39a8081d6f902))
* surface error ([#38](https://github.com/redotvideo/revideo/issues/38)) ([15cddfb](https://github.com/redotvideo/revideo/commit/15cddfba081c79d0315cbfa02cd448bab5817195))
* use default ffmpeg path ([#68](https://github.com/redotvideo/revideo/issues/68)) ([ea86320](https://github.com/redotvideo/revideo/commit/ea863207760523ff2a24c765ade21e10c532929f))


### Features

* add partial rendering function ([#107](https://github.com/redotvideo/revideo/issues/107)) ([d2e3f27](https://github.com/redotvideo/revideo/commit/d2e3f274506fc4cadd6d309e34889edb7a22ac4d))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/redotvideo/revideo/issues/9)) ([9e0d67b](https://github.com/redotvideo/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* custom ffmpeg path ([#93](https://github.com/redotvideo/revideo/issues/93)) ([a7554e4](https://github.com/redotvideo/revideo/commit/a7554e4a39adb7686188f415ad871ac3e391ced5))
* encode video with wasm ([#162](https://github.com/redotvideo/revideo/issues/162)) ([c756fd8](https://github.com/redotvideo/revideo/commit/c756fd8293d49b8abc8887c94bfb8f0d04e65842))
* expose revideo project as web service ([#29](https://github.com/redotvideo/revideo/issues/29)) ([c2a2a96](https://github.com/redotvideo/revideo/commit/c2a2a96db199f772471833cf51bddd2574f08289))
* let user pass viteConfig in renderVideo, fix audio sync ([#153](https://github.com/redotvideo/revideo/issues/153)) ([b9d9cc7](https://github.com/redotvideo/revideo/commit/b9d9cc7b1590923f00864f5fa0d2263c0a4201e7))
* make transparent video optional ([#91](https://github.com/redotvideo/revideo/issues/91)) ([6a052d5](https://github.com/redotvideo/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/redotvideo/revideo/issues/74)) ([dc9ddd1](https://github.com/redotvideo/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/redotvideo/revideo/issues/6)) ([1e508b9](https://github.com/redotvideo/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* range parameters for rendering ([#56](https://github.com/redotvideo/revideo/issues/56)) ([794a37e](https://github.com/redotvideo/revideo/commit/794a37e9553bec4f15176cda991bbc513b8e2aea))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/redotvideo/revideo/issues/33)) ([a6e1bcd](https://github.com/redotvideo/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* serve assets through cli ([#124](https://github.com/redotvideo/revideo/issues/124)) ([fdccde1](https://github.com/redotvideo/revideo/commit/fdccde12f058811382e7e2084ebe4b9e05af1b80))
* show progress during renderVideo ([#70](https://github.com/redotvideo/revideo/issues/70)) ([79f472e](https://github.com/redotvideo/revideo/commit/79f472ecf00968c24bb2238b881a0d8fd8a1f94e))
* transparent video ([#75](https://github.com/redotvideo/revideo/issues/75)) ([5f7b909](https://github.com/redotvideo/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))


### Performance Improvements

* parallelize image and audio processing during render ([#61](https://github.com/redotvideo/revideo/issues/61)) ([2119a01](https://github.com/redotvideo/revideo/commit/2119a0179636a91e1f2fd86f7857814a6a907407))
* use canvas.toBlob instead of toDataUrl to render faster ([#67](https://github.com/redotvideo/revideo/issues/67)) ([de402a3](https://github.com/redotvideo/revideo/commit/de402a38630eba4cb4d83e74595498b9ee28d3e5))





## 0.4.7 (2024-07-10)


### Bug Fixes

* audio timing when rendering with multiple workers ([#144](https://github.com/redotvideo/revideo/issues/144)) ([7e59476](https://github.com/redotvideo/revideo/commit/7e59476851b1b8fb464dc626bad97b0b021d5fb3))
* better ffmpeg error when not installed ([#65](https://github.com/redotvideo/revideo/issues/65)) ([e5a7782](https://github.com/redotvideo/revideo/commit/e5a77826676d6155fa8f772ec56d4aa09954e350))
* calculate audio padding according to input sample rate, not target sample rate ([#41](https://github.com/redotvideo/revideo/issues/41)) ([cae94e5](https://github.com/redotvideo/revideo/commit/cae94e5b1017d31688028d8a3de9b86916580155))
* clean up when rendering through ui to avoid using old audio files for mute video ([#185](https://github.com/redotvideo/revideo/issues/185)) ([ab485f2](https://github.com/redotvideo/revideo/commit/ab485f260cc31bf4973e084ed73e00165bdd5d9b))
* correct dependencies for create package ([#15](https://github.com/redotvideo/revideo/issues/15)) ([27a2737](https://github.com/redotvideo/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/redotvideo/revideo/issues/62)) ([04cdc5b](https://github.com/redotvideo/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* ffmpeg logs and remove non-public-folder path case ([#81](https://github.com/redotvideo/revideo/issues/81)) ([e492cc4](https://github.com/redotvideo/revideo/commit/e492cc47bac7c1542a287d7fab6fecb89b75fc0a))
* **ffmpeg:** audios get quieter when there are many ([#106](https://github.com/redotvideo/revideo/issues/106)) ([9c32e7d](https://github.com/redotvideo/revideo/commit/9c32e7d3d5a726789984739870bedf4bcc31f5d8))
* **ffmpeg:** check if audio stream is present in video before extracting ([#12](https://github.com/redotvideo/revideo/issues/12)) ([1234fd1](https://github.com/redotvideo/revideo/commit/1234fd17769ca332061b4252aa770ea623a5348a))
* **ffmpeg:** looping of video tag ([#122](https://github.com/redotvideo/revideo/issues/122)) ([109c675](https://github.com/redotvideo/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* **ffmpeg:** set last image ([#133](https://github.com/redotvideo/revideo/issues/133)) ([416f960](https://github.com/redotvideo/revideo/commit/416f960b9ab1d755449add67295e52bc15f43568))
* pin ffmpeg v6 ([#77](https://github.com/redotvideo/revideo/issues/77)) ([3e2a7cd](https://github.com/redotvideo/revideo/commit/3e2a7cda6cd7c2762d4db02e74f7ec68db020981))
* prevent progress error when rendering from ui ([#71](https://github.com/redotvideo/revideo/issues/71)) ([534e089](https://github.com/redotvideo/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove console.log ([#25](https://github.com/redotvideo/revideo/issues/25)) ([dd376bc](https://github.com/redotvideo/revideo/commit/dd376bcd2ad6ba21dc5b5ff564fe70d7bc52a2f7))
* resolve asset file paths differently when they are inside project ([#5](https://github.com/redotvideo/revideo/issues/5)) ([e0a3917](https://github.com/redotvideo/revideo/commit/e0a39175a34f501ffce0fa4508c83e84244fd43c))
* resolve path correctly when file is in public folder ([#8](https://github.com/redotvideo/revideo/issues/8)) ([d1a74a4](https://github.com/redotvideo/revideo/commit/d1a74a4b0aaf89a535d7e7f95ce51de8ba3aaa78))
* resolve remote file urls in exporter correctly ([#7](https://github.com/redotvideo/revideo/issues/7)) ([1807191](https://github.com/redotvideo/revideo/commit/18071918fa295f83a9d12f885d2079965a694d7f))
* set ffmpeg path in generate-audio ([#173](https://github.com/redotvideo/revideo/issues/173)) ([2dc429b](https://github.com/redotvideo/revideo/commit/2dc429b5a721fe9401fa36575fe39a8081d6f902))
* surface error ([#38](https://github.com/redotvideo/revideo/issues/38)) ([15cddfb](https://github.com/redotvideo/revideo/commit/15cddfba081c79d0315cbfa02cd448bab5817195))
* use default ffmpeg path ([#68](https://github.com/redotvideo/revideo/issues/68)) ([ea86320](https://github.com/redotvideo/revideo/commit/ea863207760523ff2a24c765ade21e10c532929f))


### Features

* add partial rendering function ([#107](https://github.com/redotvideo/revideo/issues/107)) ([d2e3f27](https://github.com/redotvideo/revideo/commit/d2e3f274506fc4cadd6d309e34889edb7a22ac4d))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/redotvideo/revideo/issues/9)) ([9e0d67b](https://github.com/redotvideo/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* custom ffmpeg path ([#93](https://github.com/redotvideo/revideo/issues/93)) ([a7554e4](https://github.com/redotvideo/revideo/commit/a7554e4a39adb7686188f415ad871ac3e391ced5))
* encode video with wasm ([#162](https://github.com/redotvideo/revideo/issues/162)) ([c756fd8](https://github.com/redotvideo/revideo/commit/c756fd8293d49b8abc8887c94bfb8f0d04e65842))
* expose revideo project as web service ([#29](https://github.com/redotvideo/revideo/issues/29)) ([c2a2a96](https://github.com/redotvideo/revideo/commit/c2a2a96db199f772471833cf51bddd2574f08289))
* let user pass viteConfig in renderVideo, fix audio sync ([#153](https://github.com/redotvideo/revideo/issues/153)) ([b9d9cc7](https://github.com/redotvideo/revideo/commit/b9d9cc7b1590923f00864f5fa0d2263c0a4201e7))
* make transparent video optional ([#91](https://github.com/redotvideo/revideo/issues/91)) ([6a052d5](https://github.com/redotvideo/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/redotvideo/revideo/issues/74)) ([dc9ddd1](https://github.com/redotvideo/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/redotvideo/revideo/issues/6)) ([1e508b9](https://github.com/redotvideo/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* range parameters for rendering ([#56](https://github.com/redotvideo/revideo/issues/56)) ([794a37e](https://github.com/redotvideo/revideo/commit/794a37e9553bec4f15176cda991bbc513b8e2aea))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/redotvideo/revideo/issues/33)) ([a6e1bcd](https://github.com/redotvideo/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* serve assets through cli ([#124](https://github.com/redotvideo/revideo/issues/124)) ([fdccde1](https://github.com/redotvideo/revideo/commit/fdccde12f058811382e7e2084ebe4b9e05af1b80))
* show progress during renderVideo ([#70](https://github.com/redotvideo/revideo/issues/70)) ([79f472e](https://github.com/redotvideo/revideo/commit/79f472ecf00968c24bb2238b881a0d8fd8a1f94e))
* transparent video ([#75](https://github.com/redotvideo/revideo/issues/75)) ([5f7b909](https://github.com/redotvideo/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))


### Performance Improvements

* parallelize image and audio processing during render ([#61](https://github.com/redotvideo/revideo/issues/61)) ([2119a01](https://github.com/redotvideo/revideo/commit/2119a0179636a91e1f2fd86f7857814a6a907407))
* use canvas.toBlob instead of toDataUrl to render faster ([#67](https://github.com/redotvideo/revideo/issues/67)) ([de402a3](https://github.com/redotvideo/revideo/commit/de402a38630eba4cb4d83e74595498b9ee28d3e5))





## 0.4.6 (2024-06-27)


### Bug Fixes

* audio timing when rendering with multiple workers ([#144](https://github.com/redotvideo/revideo/issues/144)) ([7e59476](https://github.com/redotvideo/revideo/commit/7e59476851b1b8fb464dc626bad97b0b021d5fb3))
* better ffmpeg error when not installed ([#65](https://github.com/redotvideo/revideo/issues/65)) ([e5a7782](https://github.com/redotvideo/revideo/commit/e5a77826676d6155fa8f772ec56d4aa09954e350))
* calculate audio padding according to input sample rate, not target sample rate ([#41](https://github.com/redotvideo/revideo/issues/41)) ([cae94e5](https://github.com/redotvideo/revideo/commit/cae94e5b1017d31688028d8a3de9b86916580155))
* correct dependencies for create package ([#15](https://github.com/redotvideo/revideo/issues/15)) ([27a2737](https://github.com/redotvideo/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/redotvideo/revideo/issues/62)) ([04cdc5b](https://github.com/redotvideo/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* ffmpeg logs and remove non-public-folder path case ([#81](https://github.com/redotvideo/revideo/issues/81)) ([e492cc4](https://github.com/redotvideo/revideo/commit/e492cc47bac7c1542a287d7fab6fecb89b75fc0a))
* **ffmpeg:** audios get quieter when there are many ([#106](https://github.com/redotvideo/revideo/issues/106)) ([9c32e7d](https://github.com/redotvideo/revideo/commit/9c32e7d3d5a726789984739870bedf4bcc31f5d8))
* **ffmpeg:** check if audio stream is present in video before extracting ([#12](https://github.com/redotvideo/revideo/issues/12)) ([1234fd1](https://github.com/redotvideo/revideo/commit/1234fd17769ca332061b4252aa770ea623a5348a))
* **ffmpeg:** looping of video tag ([#122](https://github.com/redotvideo/revideo/issues/122)) ([109c675](https://github.com/redotvideo/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* **ffmpeg:** set last image ([#133](https://github.com/redotvideo/revideo/issues/133)) ([416f960](https://github.com/redotvideo/revideo/commit/416f960b9ab1d755449add67295e52bc15f43568))
* pin ffmpeg v6 ([#77](https://github.com/redotvideo/revideo/issues/77)) ([3e2a7cd](https://github.com/redotvideo/revideo/commit/3e2a7cda6cd7c2762d4db02e74f7ec68db020981))
* prevent progress error when rendering from ui ([#71](https://github.com/redotvideo/revideo/issues/71)) ([534e089](https://github.com/redotvideo/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove console.log ([#25](https://github.com/redotvideo/revideo/issues/25)) ([dd376bc](https://github.com/redotvideo/revideo/commit/dd376bcd2ad6ba21dc5b5ff564fe70d7bc52a2f7))
* resolve asset file paths differently when they are inside project ([#5](https://github.com/redotvideo/revideo/issues/5)) ([e0a3917](https://github.com/redotvideo/revideo/commit/e0a39175a34f501ffce0fa4508c83e84244fd43c))
* resolve path correctly when file is in public folder ([#8](https://github.com/redotvideo/revideo/issues/8)) ([d1a74a4](https://github.com/redotvideo/revideo/commit/d1a74a4b0aaf89a535d7e7f95ce51de8ba3aaa78))
* resolve remote file urls in exporter correctly ([#7](https://github.com/redotvideo/revideo/issues/7)) ([1807191](https://github.com/redotvideo/revideo/commit/18071918fa295f83a9d12f885d2079965a694d7f))
* set ffmpeg path in generate-audio ([#173](https://github.com/redotvideo/revideo/issues/173)) ([2dc429b](https://github.com/redotvideo/revideo/commit/2dc429b5a721fe9401fa36575fe39a8081d6f902))
* surface error ([#38](https://github.com/redotvideo/revideo/issues/38)) ([15cddfb](https://github.com/redotvideo/revideo/commit/15cddfba081c79d0315cbfa02cd448bab5817195))
* use default ffmpeg path ([#68](https://github.com/redotvideo/revideo/issues/68)) ([ea86320](https://github.com/redotvideo/revideo/commit/ea863207760523ff2a24c765ade21e10c532929f))


### Features

* add partial rendering function ([#107](https://github.com/redotvideo/revideo/issues/107)) ([d2e3f27](https://github.com/redotvideo/revideo/commit/d2e3f274506fc4cadd6d309e34889edb7a22ac4d))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/redotvideo/revideo/issues/9)) ([9e0d67b](https://github.com/redotvideo/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* custom ffmpeg path ([#93](https://github.com/redotvideo/revideo/issues/93)) ([a7554e4](https://github.com/redotvideo/revideo/commit/a7554e4a39adb7686188f415ad871ac3e391ced5))
* encode video with wasm ([#162](https://github.com/redotvideo/revideo/issues/162)) ([c756fd8](https://github.com/redotvideo/revideo/commit/c756fd8293d49b8abc8887c94bfb8f0d04e65842))
* expose revideo project as web service ([#29](https://github.com/redotvideo/revideo/issues/29)) ([c2a2a96](https://github.com/redotvideo/revideo/commit/c2a2a96db199f772471833cf51bddd2574f08289))
* let user pass viteConfig in renderVideo, fix audio sync ([#153](https://github.com/redotvideo/revideo/issues/153)) ([b9d9cc7](https://github.com/redotvideo/revideo/commit/b9d9cc7b1590923f00864f5fa0d2263c0a4201e7))
* make transparent video optional ([#91](https://github.com/redotvideo/revideo/issues/91)) ([6a052d5](https://github.com/redotvideo/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/redotvideo/revideo/issues/74)) ([dc9ddd1](https://github.com/redotvideo/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/redotvideo/revideo/issues/6)) ([1e508b9](https://github.com/redotvideo/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* range parameters for rendering ([#56](https://github.com/redotvideo/revideo/issues/56)) ([794a37e](https://github.com/redotvideo/revideo/commit/794a37e9553bec4f15176cda991bbc513b8e2aea))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/redotvideo/revideo/issues/33)) ([a6e1bcd](https://github.com/redotvideo/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* serve assets through cli ([#124](https://github.com/redotvideo/revideo/issues/124)) ([fdccde1](https://github.com/redotvideo/revideo/commit/fdccde12f058811382e7e2084ebe4b9e05af1b80))
* show progress during renderVideo ([#70](https://github.com/redotvideo/revideo/issues/70)) ([79f472e](https://github.com/redotvideo/revideo/commit/79f472ecf00968c24bb2238b881a0d8fd8a1f94e))
* transparent video ([#75](https://github.com/redotvideo/revideo/issues/75)) ([5f7b909](https://github.com/redotvideo/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))


### Performance Improvements

* parallelize image and audio processing during render ([#61](https://github.com/redotvideo/revideo/issues/61)) ([2119a01](https://github.com/redotvideo/revideo/commit/2119a0179636a91e1f2fd86f7857814a6a907407))
* use canvas.toBlob instead of toDataUrl to render faster ([#67](https://github.com/redotvideo/revideo/issues/67)) ([de402a3](https://github.com/redotvideo/revideo/commit/de402a38630eba4cb4d83e74595498b9ee28d3e5))





## 0.4.5 (2024-06-26)


### Bug Fixes

* audio timing when rendering with multiple workers ([#144](https://github.com/redotvideo/revideo/issues/144)) ([7e59476](https://github.com/redotvideo/revideo/commit/7e59476851b1b8fb464dc626bad97b0b021d5fb3))
* better ffmpeg error when not installed ([#65](https://github.com/redotvideo/revideo/issues/65)) ([e5a7782](https://github.com/redotvideo/revideo/commit/e5a77826676d6155fa8f772ec56d4aa09954e350))
* calculate audio padding according to input sample rate, not target sample rate ([#41](https://github.com/redotvideo/revideo/issues/41)) ([cae94e5](https://github.com/redotvideo/revideo/commit/cae94e5b1017d31688028d8a3de9b86916580155))
* correct dependencies for create package ([#15](https://github.com/redotvideo/revideo/issues/15)) ([27a2737](https://github.com/redotvideo/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/redotvideo/revideo/issues/62)) ([04cdc5b](https://github.com/redotvideo/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* ffmpeg logs and remove non-public-folder path case ([#81](https://github.com/redotvideo/revideo/issues/81)) ([e492cc4](https://github.com/redotvideo/revideo/commit/e492cc47bac7c1542a287d7fab6fecb89b75fc0a))
* **ffmpeg:** audios get quieter when there are many ([#106](https://github.com/redotvideo/revideo/issues/106)) ([9c32e7d](https://github.com/redotvideo/revideo/commit/9c32e7d3d5a726789984739870bedf4bcc31f5d8))
* **ffmpeg:** check if audio stream is present in video before extracting ([#12](https://github.com/redotvideo/revideo/issues/12)) ([1234fd1](https://github.com/redotvideo/revideo/commit/1234fd17769ca332061b4252aa770ea623a5348a))
* **ffmpeg:** looping of video tag ([#122](https://github.com/redotvideo/revideo/issues/122)) ([109c675](https://github.com/redotvideo/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* **ffmpeg:** set last image ([#133](https://github.com/redotvideo/revideo/issues/133)) ([416f960](https://github.com/redotvideo/revideo/commit/416f960b9ab1d755449add67295e52bc15f43568))
* pin ffmpeg v6 ([#77](https://github.com/redotvideo/revideo/issues/77)) ([3e2a7cd](https://github.com/redotvideo/revideo/commit/3e2a7cda6cd7c2762d4db02e74f7ec68db020981))
* prevent progress error when rendering from ui ([#71](https://github.com/redotvideo/revideo/issues/71)) ([534e089](https://github.com/redotvideo/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove console.log ([#25](https://github.com/redotvideo/revideo/issues/25)) ([dd376bc](https://github.com/redotvideo/revideo/commit/dd376bcd2ad6ba21dc5b5ff564fe70d7bc52a2f7))
* resolve asset file paths differently when they are inside project ([#5](https://github.com/redotvideo/revideo/issues/5)) ([e0a3917](https://github.com/redotvideo/revideo/commit/e0a39175a34f501ffce0fa4508c83e84244fd43c))
* resolve path correctly when file is in public folder ([#8](https://github.com/redotvideo/revideo/issues/8)) ([d1a74a4](https://github.com/redotvideo/revideo/commit/d1a74a4b0aaf89a535d7e7f95ce51de8ba3aaa78))
* resolve remote file urls in exporter correctly ([#7](https://github.com/redotvideo/revideo/issues/7)) ([1807191](https://github.com/redotvideo/revideo/commit/18071918fa295f83a9d12f885d2079965a694d7f))
* surface error ([#38](https://github.com/redotvideo/revideo/issues/38)) ([15cddfb](https://github.com/redotvideo/revideo/commit/15cddfba081c79d0315cbfa02cd448bab5817195))
* use default ffmpeg path ([#68](https://github.com/redotvideo/revideo/issues/68)) ([ea86320](https://github.com/redotvideo/revideo/commit/ea863207760523ff2a24c765ade21e10c532929f))


### Features

* add partial rendering function ([#107](https://github.com/redotvideo/revideo/issues/107)) ([d2e3f27](https://github.com/redotvideo/revideo/commit/d2e3f274506fc4cadd6d309e34889edb7a22ac4d))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/redotvideo/revideo/issues/9)) ([9e0d67b](https://github.com/redotvideo/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* custom ffmpeg path ([#93](https://github.com/redotvideo/revideo/issues/93)) ([a7554e4](https://github.com/redotvideo/revideo/commit/a7554e4a39adb7686188f415ad871ac3e391ced5))
* encode video with wasm ([#162](https://github.com/redotvideo/revideo/issues/162)) ([c756fd8](https://github.com/redotvideo/revideo/commit/c756fd8293d49b8abc8887c94bfb8f0d04e65842))
* expose revideo project as web service ([#29](https://github.com/redotvideo/revideo/issues/29)) ([c2a2a96](https://github.com/redotvideo/revideo/commit/c2a2a96db199f772471833cf51bddd2574f08289))
* let user pass viteConfig in renderVideo, fix audio sync ([#153](https://github.com/redotvideo/revideo/issues/153)) ([b9d9cc7](https://github.com/redotvideo/revideo/commit/b9d9cc7b1590923f00864f5fa0d2263c0a4201e7))
* make transparent video optional ([#91](https://github.com/redotvideo/revideo/issues/91)) ([6a052d5](https://github.com/redotvideo/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/redotvideo/revideo/issues/74)) ([dc9ddd1](https://github.com/redotvideo/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/redotvideo/revideo/issues/6)) ([1e508b9](https://github.com/redotvideo/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* range parameters for rendering ([#56](https://github.com/redotvideo/revideo/issues/56)) ([794a37e](https://github.com/redotvideo/revideo/commit/794a37e9553bec4f15176cda991bbc513b8e2aea))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/redotvideo/revideo/issues/33)) ([a6e1bcd](https://github.com/redotvideo/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* serve assets through cli ([#124](https://github.com/redotvideo/revideo/issues/124)) ([fdccde1](https://github.com/redotvideo/revideo/commit/fdccde12f058811382e7e2084ebe4b9e05af1b80))
* show progress during renderVideo ([#70](https://github.com/redotvideo/revideo/issues/70)) ([79f472e](https://github.com/redotvideo/revideo/commit/79f472ecf00968c24bb2238b881a0d8fd8a1f94e))
* transparent video ([#75](https://github.com/redotvideo/revideo/issues/75)) ([5f7b909](https://github.com/redotvideo/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))


### Performance Improvements

* parallelize image and audio processing during render ([#61](https://github.com/redotvideo/revideo/issues/61)) ([2119a01](https://github.com/redotvideo/revideo/commit/2119a0179636a91e1f2fd86f7857814a6a907407))
* use canvas.toBlob instead of toDataUrl to render faster ([#67](https://github.com/redotvideo/revideo/issues/67)) ([de402a3](https://github.com/redotvideo/revideo/commit/de402a38630eba4cb4d83e74595498b9ee28d3e5))





## 0.4.4 (2024-06-25)


### Bug Fixes

* audio timing when rendering with multiple workers ([#144](https://github.com/redotvideo/revideo/issues/144)) ([7e59476](https://github.com/redotvideo/revideo/commit/7e59476851b1b8fb464dc626bad97b0b021d5fb3))
* better ffmpeg error when not installed ([#65](https://github.com/redotvideo/revideo/issues/65)) ([e5a7782](https://github.com/redotvideo/revideo/commit/e5a77826676d6155fa8f772ec56d4aa09954e350))
* calculate audio padding according to input sample rate, not target sample rate ([#41](https://github.com/redotvideo/revideo/issues/41)) ([cae94e5](https://github.com/redotvideo/revideo/commit/cae94e5b1017d31688028d8a3de9b86916580155))
* correct dependencies for create package ([#15](https://github.com/redotvideo/revideo/issues/15)) ([27a2737](https://github.com/redotvideo/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/redotvideo/revideo/issues/62)) ([04cdc5b](https://github.com/redotvideo/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* ffmpeg logs and remove non-public-folder path case ([#81](https://github.com/redotvideo/revideo/issues/81)) ([e492cc4](https://github.com/redotvideo/revideo/commit/e492cc47bac7c1542a287d7fab6fecb89b75fc0a))
* **ffmpeg:** audios get quieter when there are many ([#106](https://github.com/redotvideo/revideo/issues/106)) ([9c32e7d](https://github.com/redotvideo/revideo/commit/9c32e7d3d5a726789984739870bedf4bcc31f5d8))
* **ffmpeg:** check if audio stream is present in video before extracting ([#12](https://github.com/redotvideo/revideo/issues/12)) ([1234fd1](https://github.com/redotvideo/revideo/commit/1234fd17769ca332061b4252aa770ea623a5348a))
* **ffmpeg:** looping of video tag ([#122](https://github.com/redotvideo/revideo/issues/122)) ([109c675](https://github.com/redotvideo/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* **ffmpeg:** set last image ([#133](https://github.com/redotvideo/revideo/issues/133)) ([416f960](https://github.com/redotvideo/revideo/commit/416f960b9ab1d755449add67295e52bc15f43568))
* pin ffmpeg v6 ([#77](https://github.com/redotvideo/revideo/issues/77)) ([3e2a7cd](https://github.com/redotvideo/revideo/commit/3e2a7cda6cd7c2762d4db02e74f7ec68db020981))
* prevent progress error when rendering from ui ([#71](https://github.com/redotvideo/revideo/issues/71)) ([534e089](https://github.com/redotvideo/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove console.log ([#25](https://github.com/redotvideo/revideo/issues/25)) ([dd376bc](https://github.com/redotvideo/revideo/commit/dd376bcd2ad6ba21dc5b5ff564fe70d7bc52a2f7))
* resolve asset file paths differently when they are inside project ([#5](https://github.com/redotvideo/revideo/issues/5)) ([e0a3917](https://github.com/redotvideo/revideo/commit/e0a39175a34f501ffce0fa4508c83e84244fd43c))
* resolve path correctly when file is in public folder ([#8](https://github.com/redotvideo/revideo/issues/8)) ([d1a74a4](https://github.com/redotvideo/revideo/commit/d1a74a4b0aaf89a535d7e7f95ce51de8ba3aaa78))
* resolve remote file urls in exporter correctly ([#7](https://github.com/redotvideo/revideo/issues/7)) ([1807191](https://github.com/redotvideo/revideo/commit/18071918fa295f83a9d12f885d2079965a694d7f))
* surface error ([#38](https://github.com/redotvideo/revideo/issues/38)) ([15cddfb](https://github.com/redotvideo/revideo/commit/15cddfba081c79d0315cbfa02cd448bab5817195))
* use default ffmpeg path ([#68](https://github.com/redotvideo/revideo/issues/68)) ([ea86320](https://github.com/redotvideo/revideo/commit/ea863207760523ff2a24c765ade21e10c532929f))


### Features

* add partial rendering function ([#107](https://github.com/redotvideo/revideo/issues/107)) ([d2e3f27](https://github.com/redotvideo/revideo/commit/d2e3f274506fc4cadd6d309e34889edb7a22ac4d))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/redotvideo/revideo/issues/9)) ([9e0d67b](https://github.com/redotvideo/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* custom ffmpeg path ([#93](https://github.com/redotvideo/revideo/issues/93)) ([a7554e4](https://github.com/redotvideo/revideo/commit/a7554e4a39adb7686188f415ad871ac3e391ced5))
* encode video with wasm ([#162](https://github.com/redotvideo/revideo/issues/162)) ([c756fd8](https://github.com/redotvideo/revideo/commit/c756fd8293d49b8abc8887c94bfb8f0d04e65842))
* expose revideo project as web service ([#29](https://github.com/redotvideo/revideo/issues/29)) ([c2a2a96](https://github.com/redotvideo/revideo/commit/c2a2a96db199f772471833cf51bddd2574f08289))
* let user pass viteConfig in renderVideo, fix audio sync ([#153](https://github.com/redotvideo/revideo/issues/153)) ([b9d9cc7](https://github.com/redotvideo/revideo/commit/b9d9cc7b1590923f00864f5fa0d2263c0a4201e7))
* make transparent video optional ([#91](https://github.com/redotvideo/revideo/issues/91)) ([6a052d5](https://github.com/redotvideo/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/redotvideo/revideo/issues/74)) ([dc9ddd1](https://github.com/redotvideo/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/redotvideo/revideo/issues/6)) ([1e508b9](https://github.com/redotvideo/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* range parameters for rendering ([#56](https://github.com/redotvideo/revideo/issues/56)) ([794a37e](https://github.com/redotvideo/revideo/commit/794a37e9553bec4f15176cda991bbc513b8e2aea))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/redotvideo/revideo/issues/33)) ([a6e1bcd](https://github.com/redotvideo/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* serve assets through cli ([#124](https://github.com/redotvideo/revideo/issues/124)) ([fdccde1](https://github.com/redotvideo/revideo/commit/fdccde12f058811382e7e2084ebe4b9e05af1b80))
* show progress during renderVideo ([#70](https://github.com/redotvideo/revideo/issues/70)) ([79f472e](https://github.com/redotvideo/revideo/commit/79f472ecf00968c24bb2238b881a0d8fd8a1f94e))
* transparent video ([#75](https://github.com/redotvideo/revideo/issues/75)) ([5f7b909](https://github.com/redotvideo/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))


### Performance Improvements

* parallelize image and audio processing during render ([#61](https://github.com/redotvideo/revideo/issues/61)) ([2119a01](https://github.com/redotvideo/revideo/commit/2119a0179636a91e1f2fd86f7857814a6a907407))
* use canvas.toBlob instead of toDataUrl to render faster ([#67](https://github.com/redotvideo/revideo/issues/67)) ([de402a3](https://github.com/redotvideo/revideo/commit/de402a38630eba4cb4d83e74595498b9ee28d3e5))





## 0.4.3 (2024-06-24)


### Bug Fixes

* audio timing when rendering with multiple workers ([#144](https://github.com/redotvideo/revideo/issues/144)) ([7e59476](https://github.com/redotvideo/revideo/commit/7e59476851b1b8fb464dc626bad97b0b021d5fb3))
* better ffmpeg error when not installed ([#65](https://github.com/redotvideo/revideo/issues/65)) ([e5a7782](https://github.com/redotvideo/revideo/commit/e5a77826676d6155fa8f772ec56d4aa09954e350))
* calculate audio padding according to input sample rate, not target sample rate ([#41](https://github.com/redotvideo/revideo/issues/41)) ([cae94e5](https://github.com/redotvideo/revideo/commit/cae94e5b1017d31688028d8a3de9b86916580155))
* correct dependencies for create package ([#15](https://github.com/redotvideo/revideo/issues/15)) ([27a2737](https://github.com/redotvideo/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/redotvideo/revideo/issues/62)) ([04cdc5b](https://github.com/redotvideo/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* ffmpeg logs and remove non-public-folder path case ([#81](https://github.com/redotvideo/revideo/issues/81)) ([e492cc4](https://github.com/redotvideo/revideo/commit/e492cc47bac7c1542a287d7fab6fecb89b75fc0a))
* **ffmpeg:** audios get quieter when there are many ([#106](https://github.com/redotvideo/revideo/issues/106)) ([9c32e7d](https://github.com/redotvideo/revideo/commit/9c32e7d3d5a726789984739870bedf4bcc31f5d8))
* **ffmpeg:** check if audio stream is present in video before extracting ([#12](https://github.com/redotvideo/revideo/issues/12)) ([1234fd1](https://github.com/redotvideo/revideo/commit/1234fd17769ca332061b4252aa770ea623a5348a))
* **ffmpeg:** looping of video tag ([#122](https://github.com/redotvideo/revideo/issues/122)) ([109c675](https://github.com/redotvideo/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* **ffmpeg:** set last image ([#133](https://github.com/redotvideo/revideo/issues/133)) ([416f960](https://github.com/redotvideo/revideo/commit/416f960b9ab1d755449add67295e52bc15f43568))
* pin ffmpeg v6 ([#77](https://github.com/redotvideo/revideo/issues/77)) ([3e2a7cd](https://github.com/redotvideo/revideo/commit/3e2a7cda6cd7c2762d4db02e74f7ec68db020981))
* prevent progress error when rendering from ui ([#71](https://github.com/redotvideo/revideo/issues/71)) ([534e089](https://github.com/redotvideo/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove console.log ([#25](https://github.com/redotvideo/revideo/issues/25)) ([dd376bc](https://github.com/redotvideo/revideo/commit/dd376bcd2ad6ba21dc5b5ff564fe70d7bc52a2f7))
* resolve asset file paths differently when they are inside project ([#5](https://github.com/redotvideo/revideo/issues/5)) ([e0a3917](https://github.com/redotvideo/revideo/commit/e0a39175a34f501ffce0fa4508c83e84244fd43c))
* resolve path correctly when file is in public folder ([#8](https://github.com/redotvideo/revideo/issues/8)) ([d1a74a4](https://github.com/redotvideo/revideo/commit/d1a74a4b0aaf89a535d7e7f95ce51de8ba3aaa78))
* resolve remote file urls in exporter correctly ([#7](https://github.com/redotvideo/revideo/issues/7)) ([1807191](https://github.com/redotvideo/revideo/commit/18071918fa295f83a9d12f885d2079965a694d7f))
* surface error ([#38](https://github.com/redotvideo/revideo/issues/38)) ([15cddfb](https://github.com/redotvideo/revideo/commit/15cddfba081c79d0315cbfa02cd448bab5817195))
* use default ffmpeg path ([#68](https://github.com/redotvideo/revideo/issues/68)) ([ea86320](https://github.com/redotvideo/revideo/commit/ea863207760523ff2a24c765ade21e10c532929f))


### Features

* add partial rendering function ([#107](https://github.com/redotvideo/revideo/issues/107)) ([d2e3f27](https://github.com/redotvideo/revideo/commit/d2e3f274506fc4cadd6d309e34889edb7a22ac4d))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/redotvideo/revideo/issues/9)) ([9e0d67b](https://github.com/redotvideo/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* custom ffmpeg path ([#93](https://github.com/redotvideo/revideo/issues/93)) ([a7554e4](https://github.com/redotvideo/revideo/commit/a7554e4a39adb7686188f415ad871ac3e391ced5))
* expose revideo project as web service ([#29](https://github.com/redotvideo/revideo/issues/29)) ([c2a2a96](https://github.com/redotvideo/revideo/commit/c2a2a96db199f772471833cf51bddd2574f08289))
* let user pass viteConfig in renderVideo, fix audio sync ([#153](https://github.com/redotvideo/revideo/issues/153)) ([b9d9cc7](https://github.com/redotvideo/revideo/commit/b9d9cc7b1590923f00864f5fa0d2263c0a4201e7))
* make transparent video optional ([#91](https://github.com/redotvideo/revideo/issues/91)) ([6a052d5](https://github.com/redotvideo/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/redotvideo/revideo/issues/74)) ([dc9ddd1](https://github.com/redotvideo/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/redotvideo/revideo/issues/6)) ([1e508b9](https://github.com/redotvideo/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* range parameters for rendering ([#56](https://github.com/redotvideo/revideo/issues/56)) ([794a37e](https://github.com/redotvideo/revideo/commit/794a37e9553bec4f15176cda991bbc513b8e2aea))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/redotvideo/revideo/issues/33)) ([a6e1bcd](https://github.com/redotvideo/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* serve assets through cli ([#124](https://github.com/redotvideo/revideo/issues/124)) ([fdccde1](https://github.com/redotvideo/revideo/commit/fdccde12f058811382e7e2084ebe4b9e05af1b80))
* show progress during renderVideo ([#70](https://github.com/redotvideo/revideo/issues/70)) ([79f472e](https://github.com/redotvideo/revideo/commit/79f472ecf00968c24bb2238b881a0d8fd8a1f94e))
* transparent video ([#75](https://github.com/redotvideo/revideo/issues/75)) ([5f7b909](https://github.com/redotvideo/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))


### Performance Improvements

* parallelize image and audio processing during render ([#61](https://github.com/redotvideo/revideo/issues/61)) ([2119a01](https://github.com/redotvideo/revideo/commit/2119a0179636a91e1f2fd86f7857814a6a907407))
* use canvas.toBlob instead of toDataUrl to render faster ([#67](https://github.com/redotvideo/revideo/issues/67)) ([de402a3](https://github.com/redotvideo/revideo/commit/de402a38630eba4cb4d83e74595498b9ee28d3e5))





## 0.4.2 (2024-06-16)


### Bug Fixes

* audio timing when rendering with multiple workers ([#144](https://github.com/redotvideo/revideo/issues/144)) ([7e59476](https://github.com/redotvideo/revideo/commit/7e59476851b1b8fb464dc626bad97b0b021d5fb3))
* better ffmpeg error when not installed ([#65](https://github.com/redotvideo/revideo/issues/65)) ([e5a7782](https://github.com/redotvideo/revideo/commit/e5a77826676d6155fa8f772ec56d4aa09954e350))
* calculate audio padding according to input sample rate, not target sample rate ([#41](https://github.com/redotvideo/revideo/issues/41)) ([cae94e5](https://github.com/redotvideo/revideo/commit/cae94e5b1017d31688028d8a3de9b86916580155))
* correct dependencies for create package ([#15](https://github.com/redotvideo/revideo/issues/15)) ([27a2737](https://github.com/redotvideo/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/redotvideo/revideo/issues/62)) ([04cdc5b](https://github.com/redotvideo/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* ffmpeg logs and remove non-public-folder path case ([#81](https://github.com/redotvideo/revideo/issues/81)) ([e492cc4](https://github.com/redotvideo/revideo/commit/e492cc47bac7c1542a287d7fab6fecb89b75fc0a))
* **ffmpeg:** audios get quieter when there are many ([#106](https://github.com/redotvideo/revideo/issues/106)) ([9c32e7d](https://github.com/redotvideo/revideo/commit/9c32e7d3d5a726789984739870bedf4bcc31f5d8))
* **ffmpeg:** check if audio stream is present in video before extracting ([#12](https://github.com/redotvideo/revideo/issues/12)) ([1234fd1](https://github.com/redotvideo/revideo/commit/1234fd17769ca332061b4252aa770ea623a5348a))
* **ffmpeg:** looping of video tag ([#122](https://github.com/redotvideo/revideo/issues/122)) ([109c675](https://github.com/redotvideo/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* **ffmpeg:** set last image ([#133](https://github.com/redotvideo/revideo/issues/133)) ([416f960](https://github.com/redotvideo/revideo/commit/416f960b9ab1d755449add67295e52bc15f43568))
* pin ffmpeg v6 ([#77](https://github.com/redotvideo/revideo/issues/77)) ([3e2a7cd](https://github.com/redotvideo/revideo/commit/3e2a7cda6cd7c2762d4db02e74f7ec68db020981))
* prevent progress error when rendering from ui ([#71](https://github.com/redotvideo/revideo/issues/71)) ([534e089](https://github.com/redotvideo/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove console.log ([#25](https://github.com/redotvideo/revideo/issues/25)) ([dd376bc](https://github.com/redotvideo/revideo/commit/dd376bcd2ad6ba21dc5b5ff564fe70d7bc52a2f7))
* resolve asset file paths differently when they are inside project ([#5](https://github.com/redotvideo/revideo/issues/5)) ([e0a3917](https://github.com/redotvideo/revideo/commit/e0a39175a34f501ffce0fa4508c83e84244fd43c))
* resolve path correctly when file is in public folder ([#8](https://github.com/redotvideo/revideo/issues/8)) ([d1a74a4](https://github.com/redotvideo/revideo/commit/d1a74a4b0aaf89a535d7e7f95ce51de8ba3aaa78))
* resolve remote file urls in exporter correctly ([#7](https://github.com/redotvideo/revideo/issues/7)) ([1807191](https://github.com/redotvideo/revideo/commit/18071918fa295f83a9d12f885d2079965a694d7f))
* surface error ([#38](https://github.com/redotvideo/revideo/issues/38)) ([15cddfb](https://github.com/redotvideo/revideo/commit/15cddfba081c79d0315cbfa02cd448bab5817195))
* use default ffmpeg path ([#68](https://github.com/redotvideo/revideo/issues/68)) ([ea86320](https://github.com/redotvideo/revideo/commit/ea863207760523ff2a24c765ade21e10c532929f))


### Features

* add partial rendering function ([#107](https://github.com/redotvideo/revideo/issues/107)) ([d2e3f27](https://github.com/redotvideo/revideo/commit/d2e3f274506fc4cadd6d309e34889edb7a22ac4d))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/redotvideo/revideo/issues/9)) ([9e0d67b](https://github.com/redotvideo/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* custom ffmpeg path ([#93](https://github.com/redotvideo/revideo/issues/93)) ([a7554e4](https://github.com/redotvideo/revideo/commit/a7554e4a39adb7686188f415ad871ac3e391ced5))
* expose revideo project as web service ([#29](https://github.com/redotvideo/revideo/issues/29)) ([c2a2a96](https://github.com/redotvideo/revideo/commit/c2a2a96db199f772471833cf51bddd2574f08289))
* let user pass viteConfig in renderVideo, fix audio sync ([#153](https://github.com/redotvideo/revideo/issues/153)) ([b9d9cc7](https://github.com/redotvideo/revideo/commit/b9d9cc7b1590923f00864f5fa0d2263c0a4201e7))
* make transparent video optional ([#91](https://github.com/redotvideo/revideo/issues/91)) ([6a052d5](https://github.com/redotvideo/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/redotvideo/revideo/issues/74)) ([dc9ddd1](https://github.com/redotvideo/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/redotvideo/revideo/issues/6)) ([1e508b9](https://github.com/redotvideo/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* range parameters for rendering ([#56](https://github.com/redotvideo/revideo/issues/56)) ([794a37e](https://github.com/redotvideo/revideo/commit/794a37e9553bec4f15176cda991bbc513b8e2aea))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/redotvideo/revideo/issues/33)) ([a6e1bcd](https://github.com/redotvideo/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* serve assets through cli ([#124](https://github.com/redotvideo/revideo/issues/124)) ([fdccde1](https://github.com/redotvideo/revideo/commit/fdccde12f058811382e7e2084ebe4b9e05af1b80))
* show progress during renderVideo ([#70](https://github.com/redotvideo/revideo/issues/70)) ([79f472e](https://github.com/redotvideo/revideo/commit/79f472ecf00968c24bb2238b881a0d8fd8a1f94e))
* transparent video ([#75](https://github.com/redotvideo/revideo/issues/75)) ([5f7b909](https://github.com/redotvideo/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))


### Performance Improvements

* parallelize image and audio processing during render ([#61](https://github.com/redotvideo/revideo/issues/61)) ([2119a01](https://github.com/redotvideo/revideo/commit/2119a0179636a91e1f2fd86f7857814a6a907407))
* use canvas.toBlob instead of toDataUrl to render faster ([#67](https://github.com/redotvideo/revideo/issues/67)) ([de402a3](https://github.com/redotvideo/revideo/commit/de402a38630eba4cb4d83e74595498b9ee28d3e5))





## 0.4.1 (2024-06-12)


### Bug Fixes

* audio timing when rendering with multiple workers ([#144](https://github.com/redotvideo/revideo/issues/144)) ([7e59476](https://github.com/redotvideo/revideo/commit/7e59476851b1b8fb464dc626bad97b0b021d5fb3))
* better ffmpeg error when not installed ([#65](https://github.com/redotvideo/revideo/issues/65)) ([e5a7782](https://github.com/redotvideo/revideo/commit/e5a77826676d6155fa8f772ec56d4aa09954e350))
* calculate audio padding according to input sample rate, not target sample rate ([#41](https://github.com/redotvideo/revideo/issues/41)) ([cae94e5](https://github.com/redotvideo/revideo/commit/cae94e5b1017d31688028d8a3de9b86916580155))
* correct dependencies for create package ([#15](https://github.com/redotvideo/revideo/issues/15)) ([27a2737](https://github.com/redotvideo/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/redotvideo/revideo/issues/62)) ([04cdc5b](https://github.com/redotvideo/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* ffmpeg logs and remove non-public-folder path case ([#81](https://github.com/redotvideo/revideo/issues/81)) ([e492cc4](https://github.com/redotvideo/revideo/commit/e492cc47bac7c1542a287d7fab6fecb89b75fc0a))
* **ffmpeg:** audios get quieter when there are many ([#106](https://github.com/redotvideo/revideo/issues/106)) ([9c32e7d](https://github.com/redotvideo/revideo/commit/9c32e7d3d5a726789984739870bedf4bcc31f5d8))
* **ffmpeg:** check if audio stream is present in video before extracting ([#12](https://github.com/redotvideo/revideo/issues/12)) ([1234fd1](https://github.com/redotvideo/revideo/commit/1234fd17769ca332061b4252aa770ea623a5348a))
* **ffmpeg:** looping of video tag ([#122](https://github.com/redotvideo/revideo/issues/122)) ([109c675](https://github.com/redotvideo/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* **ffmpeg:** set last image ([#133](https://github.com/redotvideo/revideo/issues/133)) ([416f960](https://github.com/redotvideo/revideo/commit/416f960b9ab1d755449add67295e52bc15f43568))
* pin ffmpeg v6 ([#77](https://github.com/redotvideo/revideo/issues/77)) ([3e2a7cd](https://github.com/redotvideo/revideo/commit/3e2a7cda6cd7c2762d4db02e74f7ec68db020981))
* prevent progress error when rendering from ui ([#71](https://github.com/redotvideo/revideo/issues/71)) ([534e089](https://github.com/redotvideo/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove console.log ([#25](https://github.com/redotvideo/revideo/issues/25)) ([dd376bc](https://github.com/redotvideo/revideo/commit/dd376bcd2ad6ba21dc5b5ff564fe70d7bc52a2f7))
* resolve asset file paths differently when they are inside project ([#5](https://github.com/redotvideo/revideo/issues/5)) ([e0a3917](https://github.com/redotvideo/revideo/commit/e0a39175a34f501ffce0fa4508c83e84244fd43c))
* resolve path correctly when file is in public folder ([#8](https://github.com/redotvideo/revideo/issues/8)) ([d1a74a4](https://github.com/redotvideo/revideo/commit/d1a74a4b0aaf89a535d7e7f95ce51de8ba3aaa78))
* resolve remote file urls in exporter correctly ([#7](https://github.com/redotvideo/revideo/issues/7)) ([1807191](https://github.com/redotvideo/revideo/commit/18071918fa295f83a9d12f885d2079965a694d7f))
* surface error ([#38](https://github.com/redotvideo/revideo/issues/38)) ([15cddfb](https://github.com/redotvideo/revideo/commit/15cddfba081c79d0315cbfa02cd448bab5817195))
* use default ffmpeg path ([#68](https://github.com/redotvideo/revideo/issues/68)) ([ea86320](https://github.com/redotvideo/revideo/commit/ea863207760523ff2a24c765ade21e10c532929f))


### Features

* add partial rendering function ([#107](https://github.com/redotvideo/revideo/issues/107)) ([d2e3f27](https://github.com/redotvideo/revideo/commit/d2e3f274506fc4cadd6d309e34889edb7a22ac4d))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/redotvideo/revideo/issues/9)) ([9e0d67b](https://github.com/redotvideo/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* custom ffmpeg path ([#93](https://github.com/redotvideo/revideo/issues/93)) ([a7554e4](https://github.com/redotvideo/revideo/commit/a7554e4a39adb7686188f415ad871ac3e391ced5))
* expose revideo project as web service ([#29](https://github.com/redotvideo/revideo/issues/29)) ([c2a2a96](https://github.com/redotvideo/revideo/commit/c2a2a96db199f772471833cf51bddd2574f08289))
* make transparent video optional ([#91](https://github.com/redotvideo/revideo/issues/91)) ([6a052d5](https://github.com/redotvideo/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/redotvideo/revideo/issues/74)) ([dc9ddd1](https://github.com/redotvideo/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/redotvideo/revideo/issues/6)) ([1e508b9](https://github.com/redotvideo/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* range parameters for rendering ([#56](https://github.com/redotvideo/revideo/issues/56)) ([794a37e](https://github.com/redotvideo/revideo/commit/794a37e9553bec4f15176cda991bbc513b8e2aea))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/redotvideo/revideo/issues/33)) ([a6e1bcd](https://github.com/redotvideo/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* serve assets through cli ([#124](https://github.com/redotvideo/revideo/issues/124)) ([fdccde1](https://github.com/redotvideo/revideo/commit/fdccde12f058811382e7e2084ebe4b9e05af1b80))
* show progress during renderVideo ([#70](https://github.com/redotvideo/revideo/issues/70)) ([79f472e](https://github.com/redotvideo/revideo/commit/79f472ecf00968c24bb2238b881a0d8fd8a1f94e))
* transparent video ([#75](https://github.com/redotvideo/revideo/issues/75)) ([5f7b909](https://github.com/redotvideo/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))


### Performance Improvements

* parallelize image and audio processing during render ([#61](https://github.com/redotvideo/revideo/issues/61)) ([2119a01](https://github.com/redotvideo/revideo/commit/2119a0179636a91e1f2fd86f7857814a6a907407))
* use canvas.toBlob instead of toDataUrl to render faster ([#67](https://github.com/redotvideo/revideo/issues/67)) ([de402a3](https://github.com/redotvideo/revideo/commit/de402a38630eba4cb4d83e74595498b9ee28d3e5))





# 0.4.0 (2024-06-11)


### Bug Fixes

* better ffmpeg error when not installed ([#65](https://github.com/redotvideo/revideo/issues/65)) ([e5a7782](https://github.com/redotvideo/revideo/commit/e5a77826676d6155fa8f772ec56d4aa09954e350))
* calculate audio padding according to input sample rate, not target sample rate ([#41](https://github.com/redotvideo/revideo/issues/41)) ([cae94e5](https://github.com/redotvideo/revideo/commit/cae94e5b1017d31688028d8a3de9b86916580155))
* correct dependencies for create package ([#15](https://github.com/redotvideo/revideo/issues/15)) ([27a2737](https://github.com/redotvideo/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/redotvideo/revideo/issues/62)) ([04cdc5b](https://github.com/redotvideo/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* ffmpeg logs and remove non-public-folder path case ([#81](https://github.com/redotvideo/revideo/issues/81)) ([e492cc4](https://github.com/redotvideo/revideo/commit/e492cc47bac7c1542a287d7fab6fecb89b75fc0a))
* **ffmpeg:** audios get quieter when there are many ([#106](https://github.com/redotvideo/revideo/issues/106)) ([9c32e7d](https://github.com/redotvideo/revideo/commit/9c32e7d3d5a726789984739870bedf4bcc31f5d8))
* **ffmpeg:** check if audio stream is present in video before extracting ([#12](https://github.com/redotvideo/revideo/issues/12)) ([1234fd1](https://github.com/redotvideo/revideo/commit/1234fd17769ca332061b4252aa770ea623a5348a))
* **ffmpeg:** looping of video tag ([#122](https://github.com/redotvideo/revideo/issues/122)) ([109c675](https://github.com/redotvideo/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* **ffmpeg:** set last image ([#133](https://github.com/redotvideo/revideo/issues/133)) ([416f960](https://github.com/redotvideo/revideo/commit/416f960b9ab1d755449add67295e52bc15f43568))
* pin ffmpeg v6 ([#77](https://github.com/redotvideo/revideo/issues/77)) ([3e2a7cd](https://github.com/redotvideo/revideo/commit/3e2a7cda6cd7c2762d4db02e74f7ec68db020981))
* prevent progress error when rendering from ui ([#71](https://github.com/redotvideo/revideo/issues/71)) ([534e089](https://github.com/redotvideo/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove console.log ([#25](https://github.com/redotvideo/revideo/issues/25)) ([dd376bc](https://github.com/redotvideo/revideo/commit/dd376bcd2ad6ba21dc5b5ff564fe70d7bc52a2f7))
* resolve asset file paths differently when they are inside project ([#5](https://github.com/redotvideo/revideo/issues/5)) ([e0a3917](https://github.com/redotvideo/revideo/commit/e0a39175a34f501ffce0fa4508c83e84244fd43c))
* resolve path correctly when file is in public folder ([#8](https://github.com/redotvideo/revideo/issues/8)) ([d1a74a4](https://github.com/redotvideo/revideo/commit/d1a74a4b0aaf89a535d7e7f95ce51de8ba3aaa78))
* resolve remote file urls in exporter correctly ([#7](https://github.com/redotvideo/revideo/issues/7)) ([1807191](https://github.com/redotvideo/revideo/commit/18071918fa295f83a9d12f885d2079965a694d7f))
* surface error ([#38](https://github.com/redotvideo/revideo/issues/38)) ([15cddfb](https://github.com/redotvideo/revideo/commit/15cddfba081c79d0315cbfa02cd448bab5817195))
* use default ffmpeg path ([#68](https://github.com/redotvideo/revideo/issues/68)) ([ea86320](https://github.com/redotvideo/revideo/commit/ea863207760523ff2a24c765ade21e10c532929f))


### Features

* add partial rendering function ([#107](https://github.com/redotvideo/revideo/issues/107)) ([d2e3f27](https://github.com/redotvideo/revideo/commit/d2e3f274506fc4cadd6d309e34889edb7a22ac4d))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/redotvideo/revideo/issues/9)) ([9e0d67b](https://github.com/redotvideo/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* custom ffmpeg path ([#93](https://github.com/redotvideo/revideo/issues/93)) ([a7554e4](https://github.com/redotvideo/revideo/commit/a7554e4a39adb7686188f415ad871ac3e391ced5))
* expose revideo project as web service ([#29](https://github.com/redotvideo/revideo/issues/29)) ([c2a2a96](https://github.com/redotvideo/revideo/commit/c2a2a96db199f772471833cf51bddd2574f08289))
* make transparent video optional ([#91](https://github.com/redotvideo/revideo/issues/91)) ([6a052d5](https://github.com/redotvideo/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/redotvideo/revideo/issues/74)) ([dc9ddd1](https://github.com/redotvideo/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/redotvideo/revideo/issues/6)) ([1e508b9](https://github.com/redotvideo/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* range parameters for rendering ([#56](https://github.com/redotvideo/revideo/issues/56)) ([794a37e](https://github.com/redotvideo/revideo/commit/794a37e9553bec4f15176cda991bbc513b8e2aea))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/redotvideo/revideo/issues/33)) ([a6e1bcd](https://github.com/redotvideo/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* serve assets through cli ([#124](https://github.com/redotvideo/revideo/issues/124)) ([fdccde1](https://github.com/redotvideo/revideo/commit/fdccde12f058811382e7e2084ebe4b9e05af1b80))
* show progress during renderVideo ([#70](https://github.com/redotvideo/revideo/issues/70)) ([79f472e](https://github.com/redotvideo/revideo/commit/79f472ecf00968c24bb2238b881a0d8fd8a1f94e))
* transparent video ([#75](https://github.com/redotvideo/revideo/issues/75)) ([5f7b909](https://github.com/redotvideo/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))


### Performance Improvements

* parallelize image and audio processing during render ([#61](https://github.com/redotvideo/revideo/issues/61)) ([2119a01](https://github.com/redotvideo/revideo/commit/2119a0179636a91e1f2fd86f7857814a6a907407))
* use canvas.toBlob instead of toDataUrl to render faster ([#67](https://github.com/redotvideo/revideo/issues/67)) ([de402a3](https://github.com/redotvideo/revideo/commit/de402a38630eba4cb4d83e74595498b9ee28d3e5))





## 0.3.6 (2024-06-08)


### Bug Fixes

* better ffmpeg error when not installed ([#65](https://github.com/redotvideo/revideo/issues/65)) ([e5a7782](https://github.com/redotvideo/revideo/commit/e5a77826676d6155fa8f772ec56d4aa09954e350))
* calculate audio padding according to input sample rate, not target sample rate ([#41](https://github.com/redotvideo/revideo/issues/41)) ([cae94e5](https://github.com/redotvideo/revideo/commit/cae94e5b1017d31688028d8a3de9b86916580155))
* correct dependencies for create package ([#15](https://github.com/redotvideo/revideo/issues/15)) ([27a2737](https://github.com/redotvideo/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/redotvideo/revideo/issues/62)) ([04cdc5b](https://github.com/redotvideo/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* ffmpeg logs and remove non-public-folder path case ([#81](https://github.com/redotvideo/revideo/issues/81)) ([e492cc4](https://github.com/redotvideo/revideo/commit/e492cc47bac7c1542a287d7fab6fecb89b75fc0a))
* **ffmpeg:** audios get quieter when there are many ([#106](https://github.com/redotvideo/revideo/issues/106)) ([9c32e7d](https://github.com/redotvideo/revideo/commit/9c32e7d3d5a726789984739870bedf4bcc31f5d8))
* **ffmpeg:** check if audio stream is present in video before extracting ([#12](https://github.com/redotvideo/revideo/issues/12)) ([1234fd1](https://github.com/redotvideo/revideo/commit/1234fd17769ca332061b4252aa770ea623a5348a))
* **ffmpeg:** looping of video tag ([#122](https://github.com/redotvideo/revideo/issues/122)) ([109c675](https://github.com/redotvideo/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* pin ffmpeg v6 ([#77](https://github.com/redotvideo/revideo/issues/77)) ([3e2a7cd](https://github.com/redotvideo/revideo/commit/3e2a7cda6cd7c2762d4db02e74f7ec68db020981))
* prevent progress error when rendering from ui ([#71](https://github.com/redotvideo/revideo/issues/71)) ([534e089](https://github.com/redotvideo/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove console.log ([#25](https://github.com/redotvideo/revideo/issues/25)) ([dd376bc](https://github.com/redotvideo/revideo/commit/dd376bcd2ad6ba21dc5b5ff564fe70d7bc52a2f7))
* resolve asset file paths differently when they are inside project ([#5](https://github.com/redotvideo/revideo/issues/5)) ([e0a3917](https://github.com/redotvideo/revideo/commit/e0a39175a34f501ffce0fa4508c83e84244fd43c))
* resolve path correctly when file is in public folder ([#8](https://github.com/redotvideo/revideo/issues/8)) ([d1a74a4](https://github.com/redotvideo/revideo/commit/d1a74a4b0aaf89a535d7e7f95ce51de8ba3aaa78))
* resolve remote file urls in exporter correctly ([#7](https://github.com/redotvideo/revideo/issues/7)) ([1807191](https://github.com/redotvideo/revideo/commit/18071918fa295f83a9d12f885d2079965a694d7f))
* surface error ([#38](https://github.com/redotvideo/revideo/issues/38)) ([15cddfb](https://github.com/redotvideo/revideo/commit/15cddfba081c79d0315cbfa02cd448bab5817195))
* use default ffmpeg path ([#68](https://github.com/redotvideo/revideo/issues/68)) ([ea86320](https://github.com/redotvideo/revideo/commit/ea863207760523ff2a24c765ade21e10c532929f))


### Features

* add partial rendering function ([#107](https://github.com/redotvideo/revideo/issues/107)) ([d2e3f27](https://github.com/redotvideo/revideo/commit/d2e3f274506fc4cadd6d309e34889edb7a22ac4d))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/redotvideo/revideo/issues/9)) ([9e0d67b](https://github.com/redotvideo/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* custom ffmpeg path ([#93](https://github.com/redotvideo/revideo/issues/93)) ([a7554e4](https://github.com/redotvideo/revideo/commit/a7554e4a39adb7686188f415ad871ac3e391ced5))
* expose revideo project as web service ([#29](https://github.com/redotvideo/revideo/issues/29)) ([c2a2a96](https://github.com/redotvideo/revideo/commit/c2a2a96db199f772471833cf51bddd2574f08289))
* make transparent video optional ([#91](https://github.com/redotvideo/revideo/issues/91)) ([6a052d5](https://github.com/redotvideo/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/redotvideo/revideo/issues/74)) ([dc9ddd1](https://github.com/redotvideo/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/redotvideo/revideo/issues/6)) ([1e508b9](https://github.com/redotvideo/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* range parameters for rendering ([#56](https://github.com/redotvideo/revideo/issues/56)) ([794a37e](https://github.com/redotvideo/revideo/commit/794a37e9553bec4f15176cda991bbc513b8e2aea))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/redotvideo/revideo/issues/33)) ([a6e1bcd](https://github.com/redotvideo/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* show progress during renderVideo ([#70](https://github.com/redotvideo/revideo/issues/70)) ([79f472e](https://github.com/redotvideo/revideo/commit/79f472ecf00968c24bb2238b881a0d8fd8a1f94e))
* transparent video ([#75](https://github.com/redotvideo/revideo/issues/75)) ([5f7b909](https://github.com/redotvideo/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))


### Performance Improvements

* parallelize image and audio processing during render ([#61](https://github.com/redotvideo/revideo/issues/61)) ([2119a01](https://github.com/redotvideo/revideo/commit/2119a0179636a91e1f2fd86f7857814a6a907407))
* use canvas.toBlob instead of toDataUrl to render faster ([#67](https://github.com/redotvideo/revideo/issues/67)) ([de402a3](https://github.com/redotvideo/revideo/commit/de402a38630eba4cb4d83e74595498b9ee28d3e5))





## 0.3.5 (2024-06-04)


### Bug Fixes

* better ffmpeg error when not installed ([#65](https://github.com/redotvideo/revideo/issues/65)) ([e5a7782](https://github.com/redotvideo/revideo/commit/e5a77826676d6155fa8f772ec56d4aa09954e350))
* calculate audio padding according to input sample rate, not target sample rate ([#41](https://github.com/redotvideo/revideo/issues/41)) ([cae94e5](https://github.com/redotvideo/revideo/commit/cae94e5b1017d31688028d8a3de9b86916580155))
* correct dependencies for create package ([#15](https://github.com/redotvideo/revideo/issues/15)) ([27a2737](https://github.com/redotvideo/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/redotvideo/revideo/issues/62)) ([04cdc5b](https://github.com/redotvideo/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* ffmpeg logs and remove non-public-folder path case ([#81](https://github.com/redotvideo/revideo/issues/81)) ([e492cc4](https://github.com/redotvideo/revideo/commit/e492cc47bac7c1542a287d7fab6fecb89b75fc0a))
* **ffmpeg:** audios get quieter when there are many ([#106](https://github.com/redotvideo/revideo/issues/106)) ([9c32e7d](https://github.com/redotvideo/revideo/commit/9c32e7d3d5a726789984739870bedf4bcc31f5d8))
* **ffmpeg:** check if audio stream is present in video before extracting ([#12](https://github.com/redotvideo/revideo/issues/12)) ([1234fd1](https://github.com/redotvideo/revideo/commit/1234fd17769ca332061b4252aa770ea623a5348a))
* pin ffmpeg v6 ([#77](https://github.com/redotvideo/revideo/issues/77)) ([3e2a7cd](https://github.com/redotvideo/revideo/commit/3e2a7cda6cd7c2762d4db02e74f7ec68db020981))
* prevent progress error when rendering from ui ([#71](https://github.com/redotvideo/revideo/issues/71)) ([534e089](https://github.com/redotvideo/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove console.log ([#25](https://github.com/redotvideo/revideo/issues/25)) ([dd376bc](https://github.com/redotvideo/revideo/commit/dd376bcd2ad6ba21dc5b5ff564fe70d7bc52a2f7))
* resolve asset file paths differently when they are inside project ([#5](https://github.com/redotvideo/revideo/issues/5)) ([e0a3917](https://github.com/redotvideo/revideo/commit/e0a39175a34f501ffce0fa4508c83e84244fd43c))
* resolve path correctly when file is in public folder ([#8](https://github.com/redotvideo/revideo/issues/8)) ([d1a74a4](https://github.com/redotvideo/revideo/commit/d1a74a4b0aaf89a535d7e7f95ce51de8ba3aaa78))
* resolve remote file urls in exporter correctly ([#7](https://github.com/redotvideo/revideo/issues/7)) ([1807191](https://github.com/redotvideo/revideo/commit/18071918fa295f83a9d12f885d2079965a694d7f))
* surface error ([#38](https://github.com/redotvideo/revideo/issues/38)) ([15cddfb](https://github.com/redotvideo/revideo/commit/15cddfba081c79d0315cbfa02cd448bab5817195))
* use default ffmpeg path ([#68](https://github.com/redotvideo/revideo/issues/68)) ([ea86320](https://github.com/redotvideo/revideo/commit/ea863207760523ff2a24c765ade21e10c532929f))


### Features

* add partial rendering function ([#107](https://github.com/redotvideo/revideo/issues/107)) ([d2e3f27](https://github.com/redotvideo/revideo/commit/d2e3f274506fc4cadd6d309e34889edb7a22ac4d))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/redotvideo/revideo/issues/9)) ([9e0d67b](https://github.com/redotvideo/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* custom ffmpeg path ([#93](https://github.com/redotvideo/revideo/issues/93)) ([a7554e4](https://github.com/redotvideo/revideo/commit/a7554e4a39adb7686188f415ad871ac3e391ced5))
* expose revideo project as web service ([#29](https://github.com/redotvideo/revideo/issues/29)) ([c2a2a96](https://github.com/redotvideo/revideo/commit/c2a2a96db199f772471833cf51bddd2574f08289))
* make transparent video optional ([#91](https://github.com/redotvideo/revideo/issues/91)) ([6a052d5](https://github.com/redotvideo/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/redotvideo/revideo/issues/74)) ([dc9ddd1](https://github.com/redotvideo/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/redotvideo/revideo/issues/6)) ([1e508b9](https://github.com/redotvideo/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* range parameters for rendering ([#56](https://github.com/redotvideo/revideo/issues/56)) ([794a37e](https://github.com/redotvideo/revideo/commit/794a37e9553bec4f15176cda991bbc513b8e2aea))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/redotvideo/revideo/issues/33)) ([a6e1bcd](https://github.com/redotvideo/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* show progress during renderVideo ([#70](https://github.com/redotvideo/revideo/issues/70)) ([79f472e](https://github.com/redotvideo/revideo/commit/79f472ecf00968c24bb2238b881a0d8fd8a1f94e))
* transparent video ([#75](https://github.com/redotvideo/revideo/issues/75)) ([5f7b909](https://github.com/redotvideo/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))


### Performance Improvements

* parallelize image and audio processing during render ([#61](https://github.com/redotvideo/revideo/issues/61)) ([2119a01](https://github.com/redotvideo/revideo/commit/2119a0179636a91e1f2fd86f7857814a6a907407))
* use canvas.toBlob instead of toDataUrl to render faster ([#67](https://github.com/redotvideo/revideo/issues/67)) ([de402a3](https://github.com/redotvideo/revideo/commit/de402a38630eba4cb4d83e74595498b9ee28d3e5))





## 0.3.4 (2024-05-20)


### Bug Fixes

* better ffmpeg error when not installed ([#65](https://github.com/redotvideo/revideo/issues/65)) ([e5a7782](https://github.com/redotvideo/revideo/commit/e5a77826676d6155fa8f772ec56d4aa09954e350))
* calculate audio padding according to input sample rate, not target sample rate ([#41](https://github.com/redotvideo/revideo/issues/41)) ([cae94e5](https://github.com/redotvideo/revideo/commit/cae94e5b1017d31688028d8a3de9b86916580155))
* correct dependencies for create package ([#15](https://github.com/redotvideo/revideo/issues/15)) ([27a2737](https://github.com/redotvideo/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/redotvideo/revideo/issues/62)) ([04cdc5b](https://github.com/redotvideo/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* ffmpeg logs and remove non-public-folder path case ([#81](https://github.com/redotvideo/revideo/issues/81)) ([e492cc4](https://github.com/redotvideo/revideo/commit/e492cc47bac7c1542a287d7fab6fecb89b75fc0a))
* **ffmpeg:** audios get quieter when there are many ([#106](https://github.com/redotvideo/revideo/issues/106)) ([9c32e7d](https://github.com/redotvideo/revideo/commit/9c32e7d3d5a726789984739870bedf4bcc31f5d8))
* **ffmpeg:** check if audio stream is present in video before extracting ([#12](https://github.com/redotvideo/revideo/issues/12)) ([1234fd1](https://github.com/redotvideo/revideo/commit/1234fd17769ca332061b4252aa770ea623a5348a))
* pin ffmpeg v6 ([#77](https://github.com/redotvideo/revideo/issues/77)) ([3e2a7cd](https://github.com/redotvideo/revideo/commit/3e2a7cda6cd7c2762d4db02e74f7ec68db020981))
* prevent progress error when rendering from ui ([#71](https://github.com/redotvideo/revideo/issues/71)) ([534e089](https://github.com/redotvideo/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove console.log ([#25](https://github.com/redotvideo/revideo/issues/25)) ([dd376bc](https://github.com/redotvideo/revideo/commit/dd376bcd2ad6ba21dc5b5ff564fe70d7bc52a2f7))
* resolve asset file paths differently when they are inside project ([#5](https://github.com/redotvideo/revideo/issues/5)) ([e0a3917](https://github.com/redotvideo/revideo/commit/e0a39175a34f501ffce0fa4508c83e84244fd43c))
* resolve path correctly when file is in public folder ([#8](https://github.com/redotvideo/revideo/issues/8)) ([d1a74a4](https://github.com/redotvideo/revideo/commit/d1a74a4b0aaf89a535d7e7f95ce51de8ba3aaa78))
* resolve remote file urls in exporter correctly ([#7](https://github.com/redotvideo/revideo/issues/7)) ([1807191](https://github.com/redotvideo/revideo/commit/18071918fa295f83a9d12f885d2079965a694d7f))
* surface error ([#38](https://github.com/redotvideo/revideo/issues/38)) ([15cddfb](https://github.com/redotvideo/revideo/commit/15cddfba081c79d0315cbfa02cd448bab5817195))
* use default ffmpeg path ([#68](https://github.com/redotvideo/revideo/issues/68)) ([ea86320](https://github.com/redotvideo/revideo/commit/ea863207760523ff2a24c765ade21e10c532929f))


### Features

* add partial rendering function ([#107](https://github.com/redotvideo/revideo/issues/107)) ([d2e3f27](https://github.com/redotvideo/revideo/commit/d2e3f274506fc4cadd6d309e34889edb7a22ac4d))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/redotvideo/revideo/issues/9)) ([9e0d67b](https://github.com/redotvideo/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* custom ffmpeg path ([#93](https://github.com/redotvideo/revideo/issues/93)) ([a7554e4](https://github.com/redotvideo/revideo/commit/a7554e4a39adb7686188f415ad871ac3e391ced5))
* expose revideo project as web service ([#29](https://github.com/redotvideo/revideo/issues/29)) ([c2a2a96](https://github.com/redotvideo/revideo/commit/c2a2a96db199f772471833cf51bddd2574f08289))
* make transparent video optional ([#91](https://github.com/redotvideo/revideo/issues/91)) ([6a052d5](https://github.com/redotvideo/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/redotvideo/revideo/issues/74)) ([dc9ddd1](https://github.com/redotvideo/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/redotvideo/revideo/issues/6)) ([1e508b9](https://github.com/redotvideo/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* range parameters for rendering ([#56](https://github.com/redotvideo/revideo/issues/56)) ([794a37e](https://github.com/redotvideo/revideo/commit/794a37e9553bec4f15176cda991bbc513b8e2aea))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/redotvideo/revideo/issues/33)) ([a6e1bcd](https://github.com/redotvideo/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* show progress during renderVideo ([#70](https://github.com/redotvideo/revideo/issues/70)) ([79f472e](https://github.com/redotvideo/revideo/commit/79f472ecf00968c24bb2238b881a0d8fd8a1f94e))
* transparent video ([#75](https://github.com/redotvideo/revideo/issues/75)) ([5f7b909](https://github.com/redotvideo/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))


### Performance Improvements

* parallelize image and audio processing during render ([#61](https://github.com/redotvideo/revideo/issues/61)) ([2119a01](https://github.com/redotvideo/revideo/commit/2119a0179636a91e1f2fd86f7857814a6a907407))
* use canvas.toBlob instead of toDataUrl to render faster ([#67](https://github.com/redotvideo/revideo/issues/67)) ([de402a3](https://github.com/redotvideo/revideo/commit/de402a38630eba4cb4d83e74595498b9ee28d3e5))





## 0.3.3 (2024-05-17)


### Bug Fixes

* better ffmpeg error when not installed ([#65](https://github.com/redotvideo/revideo/issues/65)) ([e5a7782](https://github.com/redotvideo/revideo/commit/e5a77826676d6155fa8f772ec56d4aa09954e350))
* calculate audio padding according to input sample rate, not target sample rate ([#41](https://github.com/redotvideo/revideo/issues/41)) ([cae94e5](https://github.com/redotvideo/revideo/commit/cae94e5b1017d31688028d8a3de9b86916580155))
* correct dependencies for create package ([#15](https://github.com/redotvideo/revideo/issues/15)) ([27a2737](https://github.com/redotvideo/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/redotvideo/revideo/issues/62)) ([04cdc5b](https://github.com/redotvideo/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* ffmpeg logs and remove non-public-folder path case ([#81](https://github.com/redotvideo/revideo/issues/81)) ([e492cc4](https://github.com/redotvideo/revideo/commit/e492cc47bac7c1542a287d7fab6fecb89b75fc0a))
* **ffmpeg:** check if audio stream is present in video before extracting ([#12](https://github.com/redotvideo/revideo/issues/12)) ([1234fd1](https://github.com/redotvideo/revideo/commit/1234fd17769ca332061b4252aa770ea623a5348a))
* pin ffmpeg v6 ([#77](https://github.com/redotvideo/revideo/issues/77)) ([3e2a7cd](https://github.com/redotvideo/revideo/commit/3e2a7cda6cd7c2762d4db02e74f7ec68db020981))
* prevent progress error when rendering from ui ([#71](https://github.com/redotvideo/revideo/issues/71)) ([534e089](https://github.com/redotvideo/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove console.log ([#25](https://github.com/redotvideo/revideo/issues/25)) ([dd376bc](https://github.com/redotvideo/revideo/commit/dd376bcd2ad6ba21dc5b5ff564fe70d7bc52a2f7))
* resolve asset file paths differently when they are inside project ([#5](https://github.com/redotvideo/revideo/issues/5)) ([e0a3917](https://github.com/redotvideo/revideo/commit/e0a39175a34f501ffce0fa4508c83e84244fd43c))
* resolve path correctly when file is in public folder ([#8](https://github.com/redotvideo/revideo/issues/8)) ([d1a74a4](https://github.com/redotvideo/revideo/commit/d1a74a4b0aaf89a535d7e7f95ce51de8ba3aaa78))
* resolve remote file urls in exporter correctly ([#7](https://github.com/redotvideo/revideo/issues/7)) ([1807191](https://github.com/redotvideo/revideo/commit/18071918fa295f83a9d12f885d2079965a694d7f))
* surface error ([#38](https://github.com/redotvideo/revideo/issues/38)) ([15cddfb](https://github.com/redotvideo/revideo/commit/15cddfba081c79d0315cbfa02cd448bab5817195))
* use default ffmpeg path ([#68](https://github.com/redotvideo/revideo/issues/68)) ([ea86320](https://github.com/redotvideo/revideo/commit/ea863207760523ff2a24c765ade21e10c532929f))


### Features

* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/redotvideo/revideo/issues/9)) ([9e0d67b](https://github.com/redotvideo/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* custom ffmpeg path ([#93](https://github.com/redotvideo/revideo/issues/93)) ([a7554e4](https://github.com/redotvideo/revideo/commit/a7554e4a39adb7686188f415ad871ac3e391ced5))
* expose revideo project as web service ([#29](https://github.com/redotvideo/revideo/issues/29)) ([c2a2a96](https://github.com/redotvideo/revideo/commit/c2a2a96db199f772471833cf51bddd2574f08289))
* make transparent video optional ([#91](https://github.com/redotvideo/revideo/issues/91)) ([6a052d5](https://github.com/redotvideo/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/redotvideo/revideo/issues/74)) ([dc9ddd1](https://github.com/redotvideo/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/redotvideo/revideo/issues/6)) ([1e508b9](https://github.com/redotvideo/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* range parameters for rendering ([#56](https://github.com/redotvideo/revideo/issues/56)) ([794a37e](https://github.com/redotvideo/revideo/commit/794a37e9553bec4f15176cda991bbc513b8e2aea))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/redotvideo/revideo/issues/33)) ([a6e1bcd](https://github.com/redotvideo/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* show progress during renderVideo ([#70](https://github.com/redotvideo/revideo/issues/70)) ([79f472e](https://github.com/redotvideo/revideo/commit/79f472ecf00968c24bb2238b881a0d8fd8a1f94e))
* transparent video ([#75](https://github.com/redotvideo/revideo/issues/75)) ([5f7b909](https://github.com/redotvideo/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))


### Performance Improvements

* parallelize image and audio processing during render ([#61](https://github.com/redotvideo/revideo/issues/61)) ([2119a01](https://github.com/redotvideo/revideo/commit/2119a0179636a91e1f2fd86f7857814a6a907407))
* use canvas.toBlob instead of toDataUrl to render faster ([#67](https://github.com/redotvideo/revideo/issues/67)) ([de402a3](https://github.com/redotvideo/revideo/commit/de402a38630eba4cb4d83e74595498b9ee28d3e5))





## 0.3.2 (2024-05-09)


### Bug Fixes

* better ffmpeg error when not installed ([#65](https://github.com/redotvideo/revideo/issues/65)) ([e5a7782](https://github.com/redotvideo/revideo/commit/e5a77826676d6155fa8f772ec56d4aa09954e350))
* calculate audio padding according to input sample rate, not target sample rate ([#41](https://github.com/redotvideo/revideo/issues/41)) ([cae94e5](https://github.com/redotvideo/revideo/commit/cae94e5b1017d31688028d8a3de9b86916580155))
* correct dependencies for create package ([#15](https://github.com/redotvideo/revideo/issues/15)) ([27a2737](https://github.com/redotvideo/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/redotvideo/revideo/issues/62)) ([04cdc5b](https://github.com/redotvideo/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* ffmpeg logs and remove non-public-folder path case ([#81](https://github.com/redotvideo/revideo/issues/81)) ([e492cc4](https://github.com/redotvideo/revideo/commit/e492cc47bac7c1542a287d7fab6fecb89b75fc0a))
* **ffmpeg:** check if audio stream is present in video before extracting ([#12](https://github.com/redotvideo/revideo/issues/12)) ([1234fd1](https://github.com/redotvideo/revideo/commit/1234fd17769ca332061b4252aa770ea623a5348a))
* pin ffmpeg v6 ([#77](https://github.com/redotvideo/revideo/issues/77)) ([3e2a7cd](https://github.com/redotvideo/revideo/commit/3e2a7cda6cd7c2762d4db02e74f7ec68db020981))
* prevent progress error when rendering from ui ([#71](https://github.com/redotvideo/revideo/issues/71)) ([534e089](https://github.com/redotvideo/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove console.log ([#25](https://github.com/redotvideo/revideo/issues/25)) ([dd376bc](https://github.com/redotvideo/revideo/commit/dd376bcd2ad6ba21dc5b5ff564fe70d7bc52a2f7))
* resolve asset file paths differently when they are inside project ([#5](https://github.com/redotvideo/revideo/issues/5)) ([e0a3917](https://github.com/redotvideo/revideo/commit/e0a39175a34f501ffce0fa4508c83e84244fd43c))
* resolve path correctly when file is in public folder ([#8](https://github.com/redotvideo/revideo/issues/8)) ([d1a74a4](https://github.com/redotvideo/revideo/commit/d1a74a4b0aaf89a535d7e7f95ce51de8ba3aaa78))
* resolve remote file urls in exporter correctly ([#7](https://github.com/redotvideo/revideo/issues/7)) ([1807191](https://github.com/redotvideo/revideo/commit/18071918fa295f83a9d12f885d2079965a694d7f))
* surface error ([#38](https://github.com/redotvideo/revideo/issues/38)) ([15cddfb](https://github.com/redotvideo/revideo/commit/15cddfba081c79d0315cbfa02cd448bab5817195))
* use default ffmpeg path ([#68](https://github.com/redotvideo/revideo/issues/68)) ([ea86320](https://github.com/redotvideo/revideo/commit/ea863207760523ff2a24c765ade21e10c532929f))


### Features

* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/redotvideo/revideo/issues/9)) ([9e0d67b](https://github.com/redotvideo/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* custom ffmpeg path ([#93](https://github.com/redotvideo/revideo/issues/93)) ([a7554e4](https://github.com/redotvideo/revideo/commit/a7554e4a39adb7686188f415ad871ac3e391ced5))
* expose revideo project as web service ([#29](https://github.com/redotvideo/revideo/issues/29)) ([c2a2a96](https://github.com/redotvideo/revideo/commit/c2a2a96db199f772471833cf51bddd2574f08289))
* make transparent video optional ([#91](https://github.com/redotvideo/revideo/issues/91)) ([6a052d5](https://github.com/redotvideo/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/redotvideo/revideo/issues/74)) ([dc9ddd1](https://github.com/redotvideo/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/redotvideo/revideo/issues/6)) ([1e508b9](https://github.com/redotvideo/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* range parameters for rendering ([#56](https://github.com/redotvideo/revideo/issues/56)) ([794a37e](https://github.com/redotvideo/revideo/commit/794a37e9553bec4f15176cda991bbc513b8e2aea))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/redotvideo/revideo/issues/33)) ([a6e1bcd](https://github.com/redotvideo/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* show progress during renderVideo ([#70](https://github.com/redotvideo/revideo/issues/70)) ([79f472e](https://github.com/redotvideo/revideo/commit/79f472ecf00968c24bb2238b881a0d8fd8a1f94e))
* transparent video ([#75](https://github.com/redotvideo/revideo/issues/75)) ([5f7b909](https://github.com/redotvideo/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))


### Performance Improvements

* parallelize image and audio processing during render ([#61](https://github.com/redotvideo/revideo/issues/61)) ([2119a01](https://github.com/redotvideo/revideo/commit/2119a0179636a91e1f2fd86f7857814a6a907407))
* use canvas.toBlob instead of toDataUrl to render faster ([#67](https://github.com/redotvideo/revideo/issues/67)) ([de402a3](https://github.com/redotvideo/revideo/commit/de402a38630eba4cb4d83e74595498b9ee28d3e5))





## 0.3.1 (2024-05-08)


### Bug Fixes

* better ffmpeg error when not installed ([#65](https://github.com/redotvideo/revideo/issues/65)) ([e5a7782](https://github.com/redotvideo/revideo/commit/e5a77826676d6155fa8f772ec56d4aa09954e350))
* calculate audio padding according to input sample rate, not target sample rate ([#41](https://github.com/redotvideo/revideo/issues/41)) ([cae94e5](https://github.com/redotvideo/revideo/commit/cae94e5b1017d31688028d8a3de9b86916580155))
* correct dependencies for create package ([#15](https://github.com/redotvideo/revideo/issues/15)) ([27a2737](https://github.com/redotvideo/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/redotvideo/revideo/issues/62)) ([04cdc5b](https://github.com/redotvideo/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* ffmpeg logs and remove non-public-folder path case ([#81](https://github.com/redotvideo/revideo/issues/81)) ([e492cc4](https://github.com/redotvideo/revideo/commit/e492cc47bac7c1542a287d7fab6fecb89b75fc0a))
* **ffmpeg:** check if audio stream is present in video before extracting ([#12](https://github.com/redotvideo/revideo/issues/12)) ([1234fd1](https://github.com/redotvideo/revideo/commit/1234fd17769ca332061b4252aa770ea623a5348a))
* pin ffmpeg v6 ([#77](https://github.com/redotvideo/revideo/issues/77)) ([3e2a7cd](https://github.com/redotvideo/revideo/commit/3e2a7cda6cd7c2762d4db02e74f7ec68db020981))
* prevent progress error when rendering from ui ([#71](https://github.com/redotvideo/revideo/issues/71)) ([534e089](https://github.com/redotvideo/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove console.log ([#25](https://github.com/redotvideo/revideo/issues/25)) ([dd376bc](https://github.com/redotvideo/revideo/commit/dd376bcd2ad6ba21dc5b5ff564fe70d7bc52a2f7))
* resolve asset file paths differently when they are inside project ([#5](https://github.com/redotvideo/revideo/issues/5)) ([e0a3917](https://github.com/redotvideo/revideo/commit/e0a39175a34f501ffce0fa4508c83e84244fd43c))
* resolve path correctly when file is in public folder ([#8](https://github.com/redotvideo/revideo/issues/8)) ([d1a74a4](https://github.com/redotvideo/revideo/commit/d1a74a4b0aaf89a535d7e7f95ce51de8ba3aaa78))
* resolve remote file urls in exporter correctly ([#7](https://github.com/redotvideo/revideo/issues/7)) ([1807191](https://github.com/redotvideo/revideo/commit/18071918fa295f83a9d12f885d2079965a694d7f))
* surface error ([#38](https://github.com/redotvideo/revideo/issues/38)) ([15cddfb](https://github.com/redotvideo/revideo/commit/15cddfba081c79d0315cbfa02cd448bab5817195))
* use default ffmpeg path ([#68](https://github.com/redotvideo/revideo/issues/68)) ([ea86320](https://github.com/redotvideo/revideo/commit/ea863207760523ff2a24c765ade21e10c532929f))


### Features

* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/redotvideo/revideo/issues/9)) ([9e0d67b](https://github.com/redotvideo/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* expose revideo project as web service ([#29](https://github.com/redotvideo/revideo/issues/29)) ([c2a2a96](https://github.com/redotvideo/revideo/commit/c2a2a96db199f772471833cf51bddd2574f08289))
* make transparent video optional ([#91](https://github.com/redotvideo/revideo/issues/91)) ([6a052d5](https://github.com/redotvideo/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/redotvideo/revideo/issues/74)) ([dc9ddd1](https://github.com/redotvideo/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/redotvideo/revideo/issues/6)) ([1e508b9](https://github.com/redotvideo/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* range parameters for rendering ([#56](https://github.com/redotvideo/revideo/issues/56)) ([794a37e](https://github.com/redotvideo/revideo/commit/794a37e9553bec4f15176cda991bbc513b8e2aea))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/redotvideo/revideo/issues/33)) ([a6e1bcd](https://github.com/redotvideo/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* show progress during renderVideo ([#70](https://github.com/redotvideo/revideo/issues/70)) ([79f472e](https://github.com/redotvideo/revideo/commit/79f472ecf00968c24bb2238b881a0d8fd8a1f94e))
* transparent video ([#75](https://github.com/redotvideo/revideo/issues/75)) ([5f7b909](https://github.com/redotvideo/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))


### Performance Improvements

* parallelize image and audio processing during render ([#61](https://github.com/redotvideo/revideo/issues/61)) ([2119a01](https://github.com/redotvideo/revideo/commit/2119a0179636a91e1f2fd86f7857814a6a907407))
* use canvas.toBlob instead of toDataUrl to render faster ([#67](https://github.com/redotvideo/revideo/issues/67)) ([de402a3](https://github.com/redotvideo/revideo/commit/de402a38630eba4cb4d83e74595498b9ee28d3e5))





# 0.3.0 (2024-05-03)


### Bug Fixes

* better ffmpeg error when not installed ([#65](https://github.com/redotvideo/revideo/issues/65)) ([e5a7782](https://github.com/redotvideo/revideo/commit/e5a77826676d6155fa8f772ec56d4aa09954e350))
* calculate audio padding according to input sample rate, not target sample rate ([#41](https://github.com/redotvideo/revideo/issues/41)) ([cae94e5](https://github.com/redotvideo/revideo/commit/cae94e5b1017d31688028d8a3de9b86916580155))
* correct dependencies for create package ([#15](https://github.com/redotvideo/revideo/issues/15)) ([27a2737](https://github.com/redotvideo/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/redotvideo/revideo/issues/62)) ([04cdc5b](https://github.com/redotvideo/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* ffmpeg logs and remove non-public-folder path case ([#81](https://github.com/redotvideo/revideo/issues/81)) ([e492cc4](https://github.com/redotvideo/revideo/commit/e492cc47bac7c1542a287d7fab6fecb89b75fc0a))
* **ffmpeg:** check if audio stream is present in video before extracting ([#12](https://github.com/redotvideo/revideo/issues/12)) ([1234fd1](https://github.com/redotvideo/revideo/commit/1234fd17769ca332061b4252aa770ea623a5348a))
* pin ffmpeg v6 ([#77](https://github.com/redotvideo/revideo/issues/77)) ([3e2a7cd](https://github.com/redotvideo/revideo/commit/3e2a7cda6cd7c2762d4db02e74f7ec68db020981))
* prevent progress error when rendering from ui ([#71](https://github.com/redotvideo/revideo/issues/71)) ([534e089](https://github.com/redotvideo/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* remove console.log ([#25](https://github.com/redotvideo/revideo/issues/25)) ([dd376bc](https://github.com/redotvideo/revideo/commit/dd376bcd2ad6ba21dc5b5ff564fe70d7bc52a2f7))
* resolve asset file paths differently when they are inside project ([#5](https://github.com/redotvideo/revideo/issues/5)) ([e0a3917](https://github.com/redotvideo/revideo/commit/e0a39175a34f501ffce0fa4508c83e84244fd43c))
* resolve path correctly when file is in public folder ([#8](https://github.com/redotvideo/revideo/issues/8)) ([d1a74a4](https://github.com/redotvideo/revideo/commit/d1a74a4b0aaf89a535d7e7f95ce51de8ba3aaa78))
* resolve remote file urls in exporter correctly ([#7](https://github.com/redotvideo/revideo/issues/7)) ([1807191](https://github.com/redotvideo/revideo/commit/18071918fa295f83a9d12f885d2079965a694d7f))
* surface error ([#38](https://github.com/redotvideo/revideo/issues/38)) ([15cddfb](https://github.com/redotvideo/revideo/commit/15cddfba081c79d0315cbfa02cd448bab5817195))
* use default ffmpeg path ([#68](https://github.com/redotvideo/revideo/issues/68)) ([ea86320](https://github.com/redotvideo/revideo/commit/ea863207760523ff2a24c765ade21e10c532929f))


### Features

* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/redotvideo/revideo/issues/9)) ([9e0d67b](https://github.com/redotvideo/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* expose revideo project as web service ([#29](https://github.com/redotvideo/revideo/issues/29)) ([c2a2a96](https://github.com/redotvideo/revideo/commit/c2a2a96db199f772471833cf51bddd2574f08289))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/redotvideo/revideo/issues/74)) ([dc9ddd1](https://github.com/redotvideo/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/redotvideo/revideo/issues/6)) ([1e508b9](https://github.com/redotvideo/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* range parameters for rendering ([#56](https://github.com/redotvideo/revideo/issues/56)) ([794a37e](https://github.com/redotvideo/revideo/commit/794a37e9553bec4f15176cda991bbc513b8e2aea))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/redotvideo/revideo/issues/33)) ([a6e1bcd](https://github.com/redotvideo/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* show progress during renderVideo ([#70](https://github.com/redotvideo/revideo/issues/70)) ([79f472e](https://github.com/redotvideo/revideo/commit/79f472ecf00968c24bb2238b881a0d8fd8a1f94e))
* transparent video ([#75](https://github.com/redotvideo/revideo/issues/75)) ([5f7b909](https://github.com/redotvideo/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))


### Performance Improvements

* parallelize image and audio processing during render ([#61](https://github.com/redotvideo/revideo/issues/61)) ([2119a01](https://github.com/redotvideo/revideo/commit/2119a0179636a91e1f2fd86f7857814a6a907407))
* use canvas.toBlob instead of toDataUrl to render faster ([#67](https://github.com/redotvideo/revideo/issues/67)) ([de402a3](https://github.com/redotvideo/revideo/commit/de402a38630eba4cb4d83e74595498b9ee28d3e5))
