# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 0.4.6 (2024-06-27)


### Bug Fixes

* **2d:** account for offset in cardinal points ([#883](https://github.com/havenhq/revideo/issues/883)) ([24da258](https://github.com/havenhq/revideo/commit/24da258f5937087b363eeb9146a9d22747b02e70)), closes [#882](https://github.com/havenhq/revideo/issues/882)
* **2d:** account for spawners in scene graph ([#935](https://github.com/havenhq/revideo/issues/935)) ([ca325f5](https://github.com/havenhq/revideo/commit/ca325f5ad0ae987e76106f5e65fef3ed7b3ca08d))
* **2d:** add missing Curve properties to Circle ([#805](https://github.com/havenhq/revideo/issues/805)) ([38c7900](https://github.com/havenhq/revideo/commit/38c79000403d7c3c99dde9e4c825a448d5f55054))
* **2d:** add missing Fragment export ([#553](https://github.com/havenhq/revideo/issues/553)) ([229afb4](https://github.com/havenhq/revideo/commit/229afb4fe7d95f09b480ab4a813f8dff549f381f))
* **2d:** add missing jsx dev runtime ([#547](https://github.com/havenhq/revideo/issues/547)) ([d61cb7d](https://github.com/havenhq/revideo/commit/d61cb7dd24ab66ae17d5bd6f5ccb34c4fd1e7569)), closes [#545](https://github.com/havenhq/revideo/issues/545)
* **2d:** add missing middle property ([#891](https://github.com/havenhq/revideo/issues/891)) ([61e2e96](https://github.com/havenhq/revideo/commit/61e2e96e3b8f37a68ebdddb432baba04858fd4f3))
* **2d:** add missing shape export ([#111](https://github.com/havenhq/revideo/issues/111)) ([02a1fa7](https://github.com/havenhq/revideo/commit/02a1fa7ea62155e498809f2e57ff29a18c82ac12))
* **2d:** better error handling ([#524](https://github.com/havenhq/revideo/issues/524)) ([b7475ba](https://github.com/havenhq/revideo/commit/b7475ba5ff35d37ee198577d1205d6ecd6fd2092))
* **2d:** calculate arrow orientations for curves correctly ([#597](https://github.com/havenhq/revideo/issues/597)) ([1626811](https://github.com/havenhq/revideo/commit/1626811ec4cd1bd2a3d43e393ced40a7da462c3a))
* **2d:** calculate Txt cache bbox from contents ([#836](https://github.com/havenhq/revideo/issues/836)) ([33e1a12](https://github.com/havenhq/revideo/commit/33e1a1296f21d26e9ed45ae92132825dca17054d)), closes [#465](https://github.com/havenhq/revideo/issues/465)
* **2d:** clone size correctly ([#562](https://github.com/havenhq/revideo/issues/562)) ([cdd3df1](https://github.com/havenhq/revideo/commit/cdd3df1bff25b04b905e289264831d8d328caaab)), closes [#559](https://github.com/havenhq/revideo/issues/559)
* **2d:** correct layout defaults ([#442](https://github.com/havenhq/revideo/issues/442)) ([c116c35](https://github.com/havenhq/revideo/commit/c116c355179ba3b2487634fb82b9a5bc2ea266bf))
* **2d:** correctly append Txt nodes to view ([#644](https://github.com/havenhq/revideo/issues/644)) ([24bb51a](https://github.com/havenhq/revideo/commit/24bb51aa04778c33ce327926b27332efaa554e5f))
* **2d:** correctly support external image urls ([#678](https://github.com/havenhq/revideo/issues/678)) ([a08556b](https://github.com/havenhq/revideo/commit/a08556b6e2822a55db593f610ea4dd6cb8494adb)), closes [#677](https://github.com/havenhq/revideo/issues/677)
* **2d:** fix cache bbox for lines ([#467](https://github.com/havenhq/revideo/issues/467)) ([9fd1444](https://github.com/havenhq/revideo/commit/9fd144417bb0b6301da6c522a988775f5ff142ac)), closes [#466](https://github.com/havenhq/revideo/issues/466)
* **2d:** fix circle segment ([#557](https://github.com/havenhq/revideo/issues/557)) ([adebff4](https://github.com/havenhq/revideo/commit/adebff492b76a512d79151b00adf1b383d25c5b5))
* **2d:** fix CodeBlock types ([#563](https://github.com/havenhq/revideo/issues/563)) ([25160fa](https://github.com/havenhq/revideo/commit/25160fa4d92af88429110356e42f6e3b4f88a90f)), closes [#560](https://github.com/havenhq/revideo/issues/560)
* **2d:** fix curve arrow alignment when animating start signal ([#615](https://github.com/havenhq/revideo/issues/615)) ([2fefc40](https://github.com/havenhq/revideo/commit/2fefc4026050159ba204c7629832ad83e8bfa51b))
* **2d:** fix cyclic dependency in cardinal points ([#645](https://github.com/havenhq/revideo/issues/645)) ([def23f9](https://github.com/havenhq/revideo/commit/def23f925ee7200c8740ecd51c7f6117d67b6ef8))
* **2d:** fix font ligatures in CodeBlock ([#231](https://github.com/havenhq/revideo/issues/231)) ([11ee3fe](https://github.com/havenhq/revideo/commit/11ee3fef5ad878313cf19833df6881333ced4dac))
* **2d:** fix Gradient and Pattern signals ([#376](https://github.com/havenhq/revideo/issues/376)) ([6e0dc8a](https://github.com/havenhq/revideo/commit/6e0dc8af8d19f93fd6a42addca2b3a2958b4dd33))
* **2d:** fix height when tweening text ([#905](https://github.com/havenhq/revideo/issues/905)) ([1c6a796](https://github.com/havenhq/revideo/commit/1c6a7965be137c1ab69741cdd1e9aaa6df4208c4))
* **2d:** fix import order ([#94](https://github.com/havenhq/revideo/issues/94)) ([bcc0bcf](https://github.com/havenhq/revideo/commit/bcc0bcffae47855bd8f7ab06454aaebe93c4aa24)), closes [#76](https://github.com/havenhq/revideo/issues/76)
* **2d:** fix initial value of endOffset ([#433](https://github.com/havenhq/revideo/issues/433)) ([9fe82b3](https://github.com/havenhq/revideo/commit/9fe82b3d21ba0150a2378e541a4652ca707c2d15))
* **2d:** fix layout calculation for nodes not explicitly added to view ([#331](https://github.com/havenhq/revideo/issues/331)) ([528e2d5](https://github.com/havenhq/revideo/commit/528e2d5a0abec99819e022d2848b256ece9f869a))
* **2d:** fix letterSpacing ([#448](https://github.com/havenhq/revideo/issues/448)) ([bb5ffc4](https://github.com/havenhq/revideo/commit/bb5ffc48efa82b9db818e8e52aa35e9c2ad8ce89)), closes [#447](https://github.com/havenhq/revideo/issues/447)
* **2d:** fix line arc length ([#503](https://github.com/havenhq/revideo/issues/503)) ([4f1cd59](https://github.com/havenhq/revideo/commit/4f1cd59e6bcba0b16b36be88b28a60ae46d4d9ab)), closes [#497](https://github.com/havenhq/revideo/issues/497)
* **2d:** fix Line cache ([#232](https://github.com/havenhq/revideo/issues/232)) ([a953b64](https://github.com/havenhq/revideo/commit/a953b64540c020657845efc84d4179142a7a0974)), closes [#205](https://github.com/havenhq/revideo/issues/205)
* **2d:** fix line jitter under certain conditions ([#863](https://github.com/havenhq/revideo/issues/863)) ([fb110a2](https://github.com/havenhq/revideo/commit/fb110a2f3583fc040bf2c39560934162bd146d9b))
* **2d:** fix Line overview crashing ([#142](https://github.com/havenhq/revideo/issues/142)) ([6bd5fd9](https://github.com/havenhq/revideo/commit/6bd5fd941e583e44f5d920ecd20215efb1eed58a))
* **2d:** fix nested cache canvases ([#554](https://github.com/havenhq/revideo/issues/554)) ([e601441](https://github.com/havenhq/revideo/commit/e6014413b215af6fb1a7953f8db83893d4025f0b)), closes [#551](https://github.com/havenhq/revideo/issues/551)
* **2d:** fix package.json entry ([#720](https://github.com/havenhq/revideo/issues/720)) ([12e9bf6](https://github.com/havenhq/revideo/commit/12e9bf6f40ab7afc02e2f55260544f3864920ded))
* **2d:** fix signal initialization ([#382](https://github.com/havenhq/revideo/issues/382)) ([ea36e79](https://github.com/havenhq/revideo/commit/ea36e791a20bfd1b491ffa9917be686c51bc3899))
* **2d:** fix tweening cardinal points ([#829](https://github.com/havenhq/revideo/issues/829)) ([cc16737](https://github.com/havenhq/revideo/commit/cc16737cd59081582fbb488a880e8d3c11c14918))
* **2d:** fix Txt decorators ([#526](https://github.com/havenhq/revideo/issues/526)) ([25b30ed](https://github.com/havenhq/revideo/commit/25b30ed3861f46d72147335480912ce5f564be79))
* **2d:** fix types ([#659](https://github.com/havenhq/revideo/issues/659)) ([a32af29](https://github.com/havenhq/revideo/commit/a32af29ef3bd2e5dbf08697ebfee53230fceadc1))
* **2d:** format whitespaces according to HTML ([#372](https://github.com/havenhq/revideo/issues/372)) ([83fb565](https://github.com/havenhq/revideo/commit/83fb565742d98f060c0400c8cbaf9961b69f34d0)), closes [#370](https://github.com/havenhq/revideo/issues/370)
* **2d:** handle division by zero in lines ([#407](https://github.com/havenhq/revideo/issues/407)) ([a17871a](https://github.com/havenhq/revideo/commit/a17871a2ce63dd5bb32bc719037327c4e9dde217))
* **2d:** handle floating point errors in acos ([#381](https://github.com/havenhq/revideo/issues/381)) ([5bca8fd](https://github.com/havenhq/revideo/commit/5bca8fd0bbdcf28f2793c124b7d6b0afd560c4b8))
* **2d:** handle lines with no points ([#233](https://github.com/havenhq/revideo/issues/233)) ([8108474](https://github.com/havenhq/revideo/commit/81084743dfad7b6419760796fda825047909d4d4)), closes [#212](https://github.com/havenhq/revideo/issues/212)
* **2d:** ignore children with disabled layout ([#669](https://github.com/havenhq/revideo/issues/669)) ([b98c462](https://github.com/havenhq/revideo/commit/b98c4625c3634495e86ca23d19355035e457db06)), closes [#580](https://github.com/havenhq/revideo/issues/580)
* **2d:** improve Curve hitbox ([#778](https://github.com/havenhq/revideo/issues/778)) ([8af723c](https://github.com/havenhq/revideo/commit/8af723c0322de39d2defe0363bba03f4f9542f08))
* **2d:** improve Rect radius ([#221](https://github.com/havenhq/revideo/issues/221)) ([3437e42](https://github.com/havenhq/revideo/commit/3437e42713a3f4a8d44d246ee01e2eb23b61e06a)), closes [#207](https://github.com/havenhq/revideo/issues/207)
* **2d:** make Text respect textWrap=pre ([#287](https://github.com/havenhq/revideo/issues/287)) ([cb07f4b](https://github.com/havenhq/revideo/commit/cb07f4bdf07edc8a086b934ca5ab769682b9a010))
* **2d:** minor fixes ([#915](https://github.com/havenhq/revideo/issues/915)) ([63cfc9e](https://github.com/havenhq/revideo/commit/63cfc9e033f2c2ac6d6ed2a0d8f615fcf642ab59))
* **2d:** point arrow heads in correct direction ([#792](https://github.com/havenhq/revideo/issues/792)) ([52ed52e](https://github.com/havenhq/revideo/commit/52ed52e963cc69a066a0353680acaca35b9c937a)), closes [#783](https://github.com/havenhq/revideo/issues/783)
* **2d:** prevent src warnings in Icon and Latex ([#899](https://github.com/havenhq/revideo/issues/899)) ([5eebab7](https://github.com/havenhq/revideo/commit/5eebab71d8061e233872e049e77b847f9fd077a1))
* **2d:** remove circular dependencies ([#780](https://github.com/havenhq/revideo/issues/780)) ([cdf3af5](https://github.com/havenhq/revideo/commit/cdf3af500a58151ee3549c6e728751aab3e6f75c))
* **2d:** smoothly play videos when presenting ([#600](https://github.com/havenhq/revideo/issues/600)) ([294fe6a](https://github.com/havenhq/revideo/commit/294fe6ac056ab074c77214fcf9035f53fac9258c)), closes [#578](https://github.com/havenhq/revideo/issues/578)
* **2d:** some signal setters not returning owners ([#143](https://github.com/havenhq/revideo/issues/143)) ([09ab7f9](https://github.com/havenhq/revideo/commit/09ab7f96afcaae608399a653c0b4878ba9b467d4))
* **2d:** stop code highlighting from jumping ([#230](https://github.com/havenhq/revideo/issues/230)) ([67ef1c4](https://github.com/havenhq/revideo/commit/67ef1c497056dd1f8f9e20d1d7fc1af03ec3849e))
* **2d:** stop mutating children ([#903](https://github.com/havenhq/revideo/issues/903)) ([f9552a8](https://github.com/havenhq/revideo/commit/f9552a8658ccde6c7b2466ad40b12cf28c6ec805))
* **2d:** strip query string from video URL for warning ([#164](https://github.com/havenhq/revideo/issues/164)) ([ea61226](https://github.com/havenhq/revideo/commit/ea61226fc9838649636c007bbc98bffb3fc0e364))
* **2d:** switch iframes to ShadowDOM ([#90](https://github.com/havenhq/revideo/issues/90)) ([86176be](https://github.com/havenhq/revideo/commit/86176be055c08aba59272afcda00ed586f6c7ad6))
* **2d:** textDirection property for RTL/LTR text ([#404](https://github.com/havenhq/revideo/issues/404)) ([f240b1b](https://github.com/havenhq/revideo/commit/f240b1bd140a884f6901b7cfcb97ce3e9ce4b48d))
* **2d:** textWrap not working in Firefox ([#541](https://github.com/havenhq/revideo/issues/541)) ([f10e057](https://github.com/havenhq/revideo/commit/f10e057fd13ed9dcc70ebc0ca63963708ec159c8)), closes [#517](https://github.com/havenhq/revideo/issues/517)
* **2d:** wait for reused async resources ([#599](https://github.com/havenhq/revideo/issues/599)) ([280e065](https://github.com/havenhq/revideo/commit/280e065fe69e9a744b7b12eb4609e7d87f76bb63)), closes [#593](https://github.com/havenhq/revideo/issues/593)
* account for italic fonts in cache ([#968](https://github.com/havenhq/revideo/issues/968)) ([abb0906](https://github.com/havenhq/revideo/commit/abb090695c4257d9877d0cb11954093c49149ddc)), closes [#934](https://github.com/havenhq/revideo/issues/934)
* await font load before drawing ([#31](https://github.com/havenhq/revideo/issues/31)) ([cbfb5cb](https://github.com/havenhq/revideo/commit/cbfb5cb136d85a657c99187da166b64aae8be3a1))
* await font load without throwing async node error ([#69](https://github.com/havenhq/revideo/issues/69)) ([fddebe6](https://github.com/havenhq/revideo/commit/fddebe60a610af718c880b9e198eebe8555ea9a5))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/havenhq/revideo/issues/62)) ([04cdc5b](https://github.com/havenhq/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* **ffmpeg:** looping of video tag ([#122](https://github.com/havenhq/revideo/issues/122)) ([109c675](https://github.com/havenhq/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* fix compound property setter ([#218](https://github.com/havenhq/revideo/issues/218)) ([6cd1b95](https://github.com/havenhq/revideo/commit/6cd1b952df950554eb637c9f8e82947c415d00c5)), closes [#208](https://github.com/havenhq/revideo/issues/208) [#210](https://github.com/havenhq/revideo/issues/210)
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* frame-sampling ([#165](https://github.com/havenhq/revideo/issues/165)) ([d82d3e6](https://github.com/havenhq/revideo/commit/d82d3e615cf6fa67696f4968220059a43bf846bf))
* offset bug ([#157](https://github.com/havenhq/revideo/issues/157)) ([1ddaa4f](https://github.com/havenhq/revideo/commit/1ddaa4fbd500d3d3031a201261de651e6dbd5752))
* plug memory leaks ([#385](https://github.com/havenhq/revideo/issues/385)) ([de0af00](https://github.com/havenhq/revideo/commit/de0af00a7d2e019e2a933791c62b7901755be7b0))
* prevent consumePromises from halting ([#657](https://github.com/havenhq/revideo/issues/657)) ([363a189](https://github.com/havenhq/revideo/commit/363a189b0c7f5926c9d5ae00b58b48e8ed4d9b48))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* previous scene being rendered twice ([#97](https://github.com/havenhq/revideo/issues/97)) ([90205bd](https://github.com/havenhq/revideo/commit/90205bdc1a086abe5f73b04cb4616c6af5ec4377))
* restrict size of cache canvas ([#544](https://github.com/havenhq/revideo/issues/544)) ([49ec554](https://github.com/havenhq/revideo/commit/49ec55490718e503d9a39437ae13c189dc4fe9ea))
* select decoder based on file type ([#168](https://github.com/havenhq/revideo/issues/168)) ([a275273](https://github.com/havenhq/revideo/commit/a2752730c245bb2beea820c75d68e4256cd046ea))
* support color to null tweening ([#387](https://github.com/havenhq/revideo/issues/387)) ([02e9f22](https://github.com/havenhq/revideo/commit/02e9f22027a1c3a85ffcc259aeca913318fb6f54))
* support legacy imports again ([#868](https://github.com/havenhq/revideo/issues/868)) ([77c4e2e](https://github.com/havenhq/revideo/commit/77c4e2eeb8b0f73bdef1f72e3d81f34c79748929))
* support multiple async players ([#450](https://github.com/havenhq/revideo/issues/450)) ([d7ec469](https://github.com/havenhq/revideo/commit/d7ec469e747eefd909f4dd59dd713f5d86308222)), closes [#434](https://github.com/havenhq/revideo/issues/434)
* typo on codeblock remove comments ([#368](https://github.com/havenhq/revideo/issues/368)) ([2025adc](https://github.com/havenhq/revideo/commit/2025adc6e7aa11d81b6f5f6989e8eae18cf86cb7))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Code Refactoring

* introduce improved names ([#425](https://github.com/havenhq/revideo/issues/425)) ([4a2188d](https://github.com/havenhq/revideo/commit/4a2188d339587fa658b2134befc3fe63c835c5d7))
* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* **2d:** add antialiased signal to Shape ([#282](https://github.com/havenhq/revideo/issues/282)) ([7c6905d](https://github.com/havenhq/revideo/commit/7c6905d72c6c2f49e10f0a80704c0afe3504d01b))
* **2d:** add arcLength helper methods to Curve ([#627](https://github.com/havenhq/revideo/issues/627)) ([3c7546e](https://github.com/havenhq/revideo/commit/3c7546e7a509deb6fff8f669c3df0a69b492bd2e))
* **2d:** add Bézier nodes ([#603](https://github.com/havenhq/revideo/issues/603)) ([9841cfd](https://github.com/havenhq/revideo/commit/9841cfdc3947ca4e6d6e42ed21eae88e855f855d))
* **2d:** add cardinal points ([#636](https://github.com/havenhq/revideo/issues/636)) ([2136a25](https://github.com/havenhq/revideo/commit/2136a2558a9ed968ee505e4e5cce33d989dfdc13)), closes [#391](https://github.com/havenhq/revideo/issues/391)
* **2d:** add closed property for circle ([#378](https://github.com/havenhq/revideo/issues/378)) ([62a9605](https://github.com/havenhq/revideo/commit/62a9605d4c54e7bf2d2d44d47bf769f5b27378a5))
* **2d:** add completion property for curves ([#635](https://github.com/havenhq/revideo/issues/635)) ([6577d6d](https://github.com/havenhq/revideo/commit/6577d6ddfaf779ba02f3862d2a357166138b99ca))
* **2d:** add default computed values for signals ([#259](https://github.com/havenhq/revideo/issues/259)) ([18f61a6](https://github.com/havenhq/revideo/commit/18f61a668420dec8afba52d52a6557e7a7919ba2))
* **2d:** add Icon Component ([#306](https://github.com/havenhq/revideo/issues/306)) ([3479631](https://github.com/havenhq/revideo/commit/3479631ef34e39f90a8d8de441317672be1840d9)), closes [#305](https://github.com/havenhq/revideo/issues/305)
* **2d:** add LaTeX component ([#228](https://github.com/havenhq/revideo/issues/228)) ([4c26d2a](https://github.com/havenhq/revideo/commit/4c26d2aaf0c697486639aa917cd5c585d3d0ea74))
* **2d:** add line counter for CodeBlock ([#802](https://github.com/havenhq/revideo/issues/802)) ([c3f9676](https://github.com/havenhq/revideo/commit/c3f9676b6984731a09a44ab0b1fcfc226975fa08))
* **2d:** add methods for rearranging children ([#81](https://github.com/havenhq/revideo/issues/81)) ([63f6c1a](https://github.com/havenhq/revideo/commit/63f6c1aa51ac4ecd093151c8cd30910f2e72bcac))
* **2d:** add moveBelow, moveAbove and moveTo methods to Node ([#365](https://github.com/havenhq/revideo/issues/365)) ([16752a3](https://github.com/havenhq/revideo/commit/16752a3b8ae7461b33d6208a9675729f374e8324))
* **2d:** add option for preformatted text ([#147](https://github.com/havenhq/revideo/issues/147)) ([989be53](https://github.com/havenhq/revideo/commit/989be532d86642e1125bb7fa62a801b09c1b8f26))
* **2d:** add Path component ([#700](https://github.com/havenhq/revideo/issues/700)) ([2128b6b](https://github.com/havenhq/revideo/commit/2128b6bf871cabe19e1abc749f18945c78c01f84))
* **2d:** add playbackRate signal to Video component ([#831](https://github.com/havenhq/revideo/issues/831)) ([5902b82](https://github.com/havenhq/revideo/commit/5902b824b36400876be0ee970e2c6211299faf21)), closes [#711](https://github.com/havenhq/revideo/issues/711)
* **2d:** add Polygon component ([#463](https://github.com/havenhq/revideo/issues/463)) ([15adb3e](https://github.com/havenhq/revideo/commit/15adb3e312a4998b44c0b9c5fe5b5236f51c71c9)), closes [#455](https://github.com/havenhq/revideo/issues/455)
* **2d:** add querying helpers ([#852](https://github.com/havenhq/revideo/issues/852)) ([614de6b](https://github.com/havenhq/revideo/commit/614de6bd8542322d1db4b123b875f6fad85cc4eb))
* **2d:** add Ray node ([#628](https://github.com/havenhq/revideo/issues/628)) ([649447c](https://github.com/havenhq/revideo/commit/649447cd5f2089afc64cc7bd4b0276e69d1e9a30))
* **2d:** add save and restore methods to nodes ([#406](https://github.com/havenhq/revideo/issues/406)) ([870e194](https://github.com/havenhq/revideo/commit/870e1947d97382bc6d82857c077140bbef7cf7e8))
* **2d:** add skew property ([#803](https://github.com/havenhq/revideo/issues/803)) ([eff7c7b](https://github.com/havenhq/revideo/commit/eff7c7be0c013139140b398350242457736d48c7))
* **2d:** add smooth corners and sharpness to rect ([#310](https://github.com/havenhq/revideo/issues/310)) ([f7fbefd](https://github.com/havenhq/revideo/commit/f7fbefd27f7f6972cfb5a45a68e5d0aed9593ae4))
* **2d:** add spline node ([#514](https://github.com/havenhq/revideo/issues/514)) ([3ce2111](https://github.com/havenhq/revideo/commit/3ce2111309e698450dc4c6e2ad47024995863e73))
* **2d:** add start and end signals to Grid node ([#761](https://github.com/havenhq/revideo/issues/761)) ([e37ea80](https://github.com/havenhq/revideo/commit/e37ea806b94e93c6324d8e1b502468925b731e8e))
* **2d:** add SVG component ([#763](https://github.com/havenhq/revideo/issues/763)) ([8eadc11](https://github.com/havenhq/revideo/commit/8eadc11937d4201545894f2f5b204d477a3f9094))
* **2d:** add textAlign property ([#451](https://github.com/havenhq/revideo/issues/451)) ([3d15825](https://github.com/havenhq/revideo/commit/3d15825f3cc5a35ba081a31510741b824f3bc6ab)), closes [#303](https://github.com/havenhq/revideo/issues/303)
* **2d:** add video component property getter ([#240](https://github.com/havenhq/revideo/issues/240)) ([59de5ab](https://github.com/havenhq/revideo/commit/59de5ab2c089589773a2f9ad7588eda7d72693a7))
* **2d:** add z-index property to nodes ([#398](https://github.com/havenhq/revideo/issues/398)) ([4280af3](https://github.com/havenhq/revideo/commit/4280af3b4b7bd5970fe5e743949a0fcca2c314f3))
* **2d:** always clip images and videos ([#773](https://github.com/havenhq/revideo/issues/773)) ([3938c59](https://github.com/havenhq/revideo/commit/3938c59394bfc42e5562504687d783ff306d7d32))
* **2d:** clamp opacity value between 0 and 1 ([#835](https://github.com/havenhq/revideo/issues/835)) ([c54b2f8](https://github.com/havenhq/revideo/commit/c54b2f837a8e8b872df3610f4cc6caa94a728500)), closes [#830](https://github.com/havenhq/revideo/issues/830)
* **2d:** code bounding box helpers ([#948](https://github.com/havenhq/revideo/issues/948)) ([0ffd56f](https://github.com/havenhq/revideo/commit/0ffd56f5f8076913e687e5b908311aa7832d8b7b))
* **2d:** code range helpers ([#947](https://github.com/havenhq/revideo/issues/947)) ([044c9ac](https://github.com/havenhq/revideo/commit/044c9acd6ee7e4e337fb4d51286126f583a8da6f))
* **2d:** code selection and modification ([#163](https://github.com/havenhq/revideo/issues/163)) ([e8e884a](https://github.com/havenhq/revideo/commit/e8e884a1a5574425dbf15272718911c12cfa2327))
* **2d:** construct lines using signals ([#133](https://github.com/havenhq/revideo/issues/133)) ([2968a24](https://github.com/havenhq/revideo/commit/2968a2426564469fb4f4343fe71a6d30e95361f2))
* **2d:** immediate restore ([#736](https://github.com/havenhq/revideo/issues/736)) ([634d51d](https://github.com/havenhq/revideo/commit/634d51d2afe8a536673c364874f8f3d1a450b846))
* **2d:** improve property declarations ([27e7d26](https://github.com/havenhq/revideo/commit/27e7d267ee91bf1e8ca79686b6ec31347f9f4d41))
* **2d:** improve Rect corner radius ([#120](https://github.com/havenhq/revideo/issues/120)) ([b471fe0](https://github.com/havenhq/revideo/commit/b471fe0e37c0a426d3af8299c9c3c22539e7df05))
* **2d:** improve Video node ([#601](https://github.com/havenhq/revideo/issues/601)) ([3801d83](https://github.com/havenhq/revideo/commit/3801d83415bbdeeee5d6d53d0c18e5d9e78fba56))
* **2d:** make `View2D` extend `Rect` ([#379](https://github.com/havenhq/revideo/issues/379)) ([93db5fc](https://github.com/havenhq/revideo/commit/93db5fc41617c0902e85fda90fbfc930c2b4634b))
* **2d:** make Circle extend Curve ([#771](https://github.com/havenhq/revideo/issues/771)) ([4c8cf19](https://github.com/havenhq/revideo/commit/4c8cf1954093958eac507921dc18f67dd64b2052))
* **2d:** make Polygon extend Curve ([#961](https://github.com/havenhq/revideo/issues/961)) ([739c9fc](https://github.com/havenhq/revideo/commit/739c9fccbc101f8b2eed680a11c00f317fdc4dd3))
* **2d:** make Rect extend Curve ([#759](https://github.com/havenhq/revideo/issues/759)) ([9810212](https://github.com/havenhq/revideo/commit/9810212648824b9a2fa2ecd6b597e3319d20b325))
* **2d:** nested Txt nodes ([#861](https://github.com/havenhq/revideo/issues/861)) ([f2786d0](https://github.com/havenhq/revideo/commit/f2786d0cd0d06065ca1e9eb9f6b4c11a74b6c283)), closes [#540](https://github.com/havenhq/revideo/issues/540)
* **2d:** simplify layout prop ([c24cb12](https://github.com/havenhq/revideo/commit/c24cb12a22b7c85fdfb051917fa9ee1e0911717c))
* **2d:** support HMR for images ([#641](https://github.com/havenhq/revideo/issues/641)) ([cf17520](https://github.com/havenhq/revideo/commit/cf17520aa8ddf19dcfc419c63cf7255892d45b71))
* **2d:** support letter spacing in Code ([#955](https://github.com/havenhq/revideo/issues/955)) ([2a87c37](https://github.com/havenhq/revideo/commit/2a87c37c832de86c4b524b33fd68806627daec8b))
* **2d:** support tweening in applyState ([#859](https://github.com/havenhq/revideo/issues/859)) ([b7ed2e2](https://github.com/havenhq/revideo/commit/b7ed2e24773227e5b576ff056eb23de9b9ff1676))
* **2d:** support tweening Line points ([#853](https://github.com/havenhq/revideo/issues/853)) ([4bf37d7](https://github.com/havenhq/revideo/commit/4bf37d74d2e4bb9d9cc034aff121a32da9a6d146))
* **2d:** unify desired sizes ([#118](https://github.com/havenhq/revideo/issues/118)) ([401a799](https://github.com/havenhq/revideo/commit/401a79946b034a96b9abff2f3fb5efd6cc9080f3))
* **2d:** unify layout properties ([#355](https://github.com/havenhq/revideo/issues/355)) ([3cae97e](https://github.com/havenhq/revideo/commit/3cae97ea704d0533020fa87326dacadcc037d517)), closes [#352](https://github.com/havenhq/revideo/issues/352)
* **2d:** warn about missing image source ([#817](https://github.com/havenhq/revideo/issues/817)) ([6dcdb5f](https://github.com/havenhq/revideo/commit/6dcdb5f3b83d4860b1557e4745972e0af68f92f3))
* add advanced caching ([#69](https://github.com/havenhq/revideo/issues/69)) ([2a644c9](https://github.com/havenhq/revideo/commit/2a644c9315acfcc5280a5eacc9904df140a61e4f))
* add base class for shapes ([#67](https://github.com/havenhq/revideo/issues/67)) ([d38c172](https://github.com/havenhq/revideo/commit/d38c1724e129c553739cbfc27c4e5cd8f737f067))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add cloning ([#80](https://github.com/havenhq/revideo/issues/80)) ([47d7a0f](https://github.com/havenhq/revideo/commit/47d7a0fa5da9a03d8ed91557db651f6f960e28b1))
* add CodeBlock component based on code-fns to 2D ([#78](https://github.com/havenhq/revideo/issues/78)) ([ad346f1](https://github.com/havenhq/revideo/commit/ad346f118d63b1e321ec315e1c70b925670124a1))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add default renderer ([#63](https://github.com/havenhq/revideo/issues/63)) ([9255490](https://github.com/havenhq/revideo/commit/92554900965fe088538f5e703dbab2fd84f904d7)), closes [#56](https://github.com/havenhq/revideo/issues/56) [#58](https://github.com/havenhq/revideo/issues/58)
* add DEG2RAD and RAD2DEG constants ([#630](https://github.com/havenhq/revideo/issues/630)) ([01801e8](https://github.com/havenhq/revideo/commit/01801e8766058e75a6a020400650fb00f8f430cc))
* add Grid node ([e1f83da](https://github.com/havenhq/revideo/commit/e1f83da1f43d20d392df4acb11e3df9cc457585d))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add middle cardinal point ([#758](https://github.com/havenhq/revideo/issues/758)) ([b036eaf](https://github.com/havenhq/revideo/commit/b036eafc00381831c08267a78cf9d74973f4025a))
* add missing flexbox properties ([#405](https://github.com/havenhq/revideo/issues/405)) ([4e78b4b](https://github.com/havenhq/revideo/commit/4e78b4b2fe4df42ce0a8da6fd41ad38b0104e7f5))
* add missing layout props ([#72](https://github.com/havenhq/revideo/issues/72)) ([f808a56](https://github.com/havenhq/revideo/commit/f808a562b192fd03dba4b0d353284db344d6a80b))
* add node spawners ([#149](https://github.com/havenhq/revideo/issues/149)) ([da18a4e](https://github.com/havenhq/revideo/commit/da18a4e24104022a84ecd6cec1666b520186058f))
* add polyline ([#84](https://github.com/havenhq/revideo/issues/84)) ([4ceaf84](https://github.com/havenhq/revideo/commit/4ceaf842915ac43d81f292c58a4dc73a8d1bb8e9))
* add random number generator ([#116](https://github.com/havenhq/revideo/issues/116)) ([d505312](https://github.com/havenhq/revideo/commit/d5053123eef308c7a2a61d92b6e76c637f4ed0b8)), closes [#14](https://github.com/havenhq/revideo/issues/14)
* add reparent helper ([80b95a9](https://github.com/havenhq/revideo/commit/80b95a9ce89d4a2eeea7e467257486e961602d69))
* add Text and Image components ([#70](https://github.com/havenhq/revideo/issues/70)) ([85c7dcd](https://github.com/havenhq/revideo/commit/85c7dcdb4f8ca2f0bfb03950c85a8d6f6652fcdf))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/havenhq/revideo/issues/9)) ([9e0d67b](https://github.com/havenhq/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* added a theme property to the CodeBlock component ([#279](https://github.com/havenhq/revideo/issues/279)) ([fe34fa8](https://github.com/havenhq/revideo/commit/fe34fa8ebfe66cd356fb1c3d85adedef11e03b45))
* better children and spawners ([#858](https://github.com/havenhq/revideo/issues/858)) ([9b5c23d](https://github.com/havenhq/revideo/commit/9b5c23d2076180cf710656c817369a07b253e3ec))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* convert built-in types to webgl ([#929](https://github.com/havenhq/revideo/issues/929)) ([a0f0b7d](https://github.com/havenhq/revideo/commit/a0f0b7d8996547e1a316097422ec02bddeeccec6))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* **core:** tree shaking ([#523](https://github.com/havenhq/revideo/issues/523)) ([65fec78](https://github.com/havenhq/revideo/commit/65fec7825fda33812b13f57bfeb1d82193a5d190))
* **docs:** fiddle editor ([#542](https://github.com/havenhq/revideo/issues/542)) ([3c68fef](https://github.com/havenhq/revideo/commit/3c68fefdf7bf375ee9345aba7dbf9e5ff35e3c3d))
* encode video with wasm ([#162](https://github.com/havenhq/revideo/issues/162)) ([c756fd8](https://github.com/havenhq/revideo/commit/c756fd8293d49b8abc8887c94bfb8f0d04e65842))
* export everything from entry points ([#710](https://github.com/havenhq/revideo/issues/710)) ([3c885d9](https://github.com/havenhq/revideo/commit/3c885d9083b52fbbaccf1e2560ae50817949bc52))
* extract frames using webcodecs ([#156](https://github.com/havenhq/revideo/issues/156)) ([7bb63d9](https://github.com/havenhq/revideo/commit/7bb63d94086f91d734e0a895489fad1d5c4b2478))
* filter reordering ([#119](https://github.com/havenhq/revideo/issues/119)) ([2398d0f](https://github.com/havenhq/revideo/commit/2398d0f9d57f36b47c9c66a988ca5607e9a3a30e))
* implement absolute scale setter ([842079a](https://github.com/havenhq/revideo/commit/842079a6547af4032719c85837df3db7c1c6d30a))
* improve async signals ([#156](https://github.com/havenhq/revideo/issues/156)) ([db27b9d](https://github.com/havenhq/revideo/commit/db27b9d5fb69a88f42afd98c86c4a1cdceb88ea1))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* improve image error handling ([#847](https://github.com/havenhq/revideo/issues/847)) ([db09d53](https://github.com/havenhq/revideo/commit/db09d5305a3c0507b035e3cd347eaa65b23d7d2e))
* introduce basic caching ([#68](https://github.com/havenhq/revideo/issues/68)) ([6420d36](https://github.com/havenhq/revideo/commit/6420d362d0e4ae058f55b6ff6bb2a3a32dec559b))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make transparent video optional ([#91](https://github.com/havenhq/revideo/issues/91)) ([6a052d5](https://github.com/havenhq/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* merge properties and signals ([#124](https://github.com/havenhq/revideo/issues/124)) ([da3ba83](https://github.com/havenhq/revideo/commit/da3ba83d82ee74f5a5c3631b07597f08cdf9e8e4))
* minor improvements ([403c7c2](https://github.com/havenhq/revideo/commit/403c7c27ad969880a14c498ec6cefb9e7e7b7544))
* minor improvements ([#77](https://github.com/havenhq/revideo/issues/77)) ([7c6e584](https://github.com/havenhq/revideo/commit/7c6e584aca353c9af55f0acb61b32b5f99727dba))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* new animator ([#91](https://github.com/havenhq/revideo/issues/91)) ([d85f2f8](https://github.com/havenhq/revideo/commit/d85f2f8a54c0f8bbfbc451884385f30e5b3ec206))
* new Code node ([#946](https://github.com/havenhq/revideo/issues/946)) ([26e55a3](https://github.com/havenhq/revideo/commit/26e55a37c416fb1313c8aadf40eed2824b45d330))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/havenhq/revideo/issues/33)) ([a6e1bcd](https://github.com/havenhq/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* serve assets through cli ([#124](https://github.com/havenhq/revideo/issues/124)) ([fdccde1](https://github.com/havenhq/revideo/commit/fdccde12f058811382e7e2084ebe4b9e05af1b80))
* signal error handling ([#89](https://github.com/havenhq/revideo/issues/89)) ([472ac65](https://github.com/havenhq/revideo/commit/472ac65938b804a6b698c8522ec0c3b6bdbcf1b1))
* simplify size access ([#65](https://github.com/havenhq/revideo/issues/65)) ([3315e64](https://github.com/havenhq/revideo/commit/3315e64641e9778bc48ea3fb707e3c0eeb581dfe))
* simplify size access further ([#66](https://github.com/havenhq/revideo/issues/66)) ([9091a5e](https://github.com/havenhq/revideo/commit/9091a5e05d8fadf72c50832c7c4467ac4424b72c))
* support hls video ([#160](https://github.com/havenhq/revideo/issues/160)) ([deff17d](https://github.com/havenhq/revideo/commit/deff17dd0899059727f88213207bfa942041243b))
* switch to signals ([#64](https://github.com/havenhq/revideo/issues/64)) ([d22d237](https://github.com/havenhq/revideo/commit/d22d23728597e6fa82ea5c5a99a6c0a56819bded))
* transparent video ([#75](https://github.com/havenhq/revideo/issues/75)) ([5f7b909](https://github.com/havenhq/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))
* turn Layout into node ([#75](https://github.com/havenhq/revideo/issues/75)) ([cdf8dc0](https://github.com/havenhq/revideo/commit/cdf8dc0a35522482dee2dd78a69606b79f52246e))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** scene graph icons ([#914](https://github.com/havenhq/revideo/issues/914)) ([e92ddef](https://github.com/havenhq/revideo/commit/e92ddef34860f5e710ff0f1a310758ec0ca95bcb))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* unify references and signals ([#137](https://github.com/havenhq/revideo/issues/137)) ([063aede](https://github.com/havenhq/revideo/commit/063aede0842f948d2c6704c6edd426e954bb4668))
* upgrade code-fns for new theme options and lazy loading ([#401](https://github.com/havenhq/revideo/issues/401)) ([8965ab1](https://github.com/havenhq/revideo/commit/8965ab1bef8b6ae919c8001d0527f5793293b285)), closes [#396](https://github.com/havenhq/revideo/issues/396) [#322](https://github.com/havenhq/revideo/issues/322)
* use ES modules in fiddles ([#712](https://github.com/havenhq/revideo/issues/712)) ([dbe2ad5](https://github.com/havenhq/revideo/commit/dbe2ad5644219c5a98d38c6557abfb66d793c821))
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))
* world space cache ([#498](https://github.com/havenhq/revideo/issues/498)) ([633e9e1](https://github.com/havenhq/revideo/commit/633e9e140dfbbe397df6ddc1f96ed30782ddce94)), closes [#342](https://github.com/havenhq/revideo/issues/342)


### Reverts

* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))
* feat: upgrade code-fns for new theme options and lazy loading ([#435](https://github.com/havenhq/revideo/issues/435)) ([3f5e439](https://github.com/havenhq/revideo/commit/3f5e43968f7add7c6322c9c8358d3b6fc178c2fe))


### BREAKING CHANGES

* multiple name changes

To avoid collisions, names of certain classes have changed:
- `Text => Txt`
- `Image => Img`
- `Rect (type) => BBox`

Cache related methods of `Node` have changed:
- `getCacheRect => getCacheBBox`
- `cacheRect => cacheBBox`
- `fullCacheRect => fullCacheBBox`

The `CodeBlock` property has changed:
- `CodeBlock.selectionOpacity => CodeBlock.unselectedOpacity`
* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
* remove legacy package





## 0.4.5 (2024-06-26)


### Bug Fixes

* **2d:** account for offset in cardinal points ([#883](https://github.com/havenhq/revideo/issues/883)) ([24da258](https://github.com/havenhq/revideo/commit/24da258f5937087b363eeb9146a9d22747b02e70)), closes [#882](https://github.com/havenhq/revideo/issues/882)
* **2d:** account for spawners in scene graph ([#935](https://github.com/havenhq/revideo/issues/935)) ([ca325f5](https://github.com/havenhq/revideo/commit/ca325f5ad0ae987e76106f5e65fef3ed7b3ca08d))
* **2d:** add missing Curve properties to Circle ([#805](https://github.com/havenhq/revideo/issues/805)) ([38c7900](https://github.com/havenhq/revideo/commit/38c79000403d7c3c99dde9e4c825a448d5f55054))
* **2d:** add missing Fragment export ([#553](https://github.com/havenhq/revideo/issues/553)) ([229afb4](https://github.com/havenhq/revideo/commit/229afb4fe7d95f09b480ab4a813f8dff549f381f))
* **2d:** add missing jsx dev runtime ([#547](https://github.com/havenhq/revideo/issues/547)) ([d61cb7d](https://github.com/havenhq/revideo/commit/d61cb7dd24ab66ae17d5bd6f5ccb34c4fd1e7569)), closes [#545](https://github.com/havenhq/revideo/issues/545)
* **2d:** add missing middle property ([#891](https://github.com/havenhq/revideo/issues/891)) ([61e2e96](https://github.com/havenhq/revideo/commit/61e2e96e3b8f37a68ebdddb432baba04858fd4f3))
* **2d:** add missing shape export ([#111](https://github.com/havenhq/revideo/issues/111)) ([02a1fa7](https://github.com/havenhq/revideo/commit/02a1fa7ea62155e498809f2e57ff29a18c82ac12))
* **2d:** better error handling ([#524](https://github.com/havenhq/revideo/issues/524)) ([b7475ba](https://github.com/havenhq/revideo/commit/b7475ba5ff35d37ee198577d1205d6ecd6fd2092))
* **2d:** calculate arrow orientations for curves correctly ([#597](https://github.com/havenhq/revideo/issues/597)) ([1626811](https://github.com/havenhq/revideo/commit/1626811ec4cd1bd2a3d43e393ced40a7da462c3a))
* **2d:** calculate Txt cache bbox from contents ([#836](https://github.com/havenhq/revideo/issues/836)) ([33e1a12](https://github.com/havenhq/revideo/commit/33e1a1296f21d26e9ed45ae92132825dca17054d)), closes [#465](https://github.com/havenhq/revideo/issues/465)
* **2d:** clone size correctly ([#562](https://github.com/havenhq/revideo/issues/562)) ([cdd3df1](https://github.com/havenhq/revideo/commit/cdd3df1bff25b04b905e289264831d8d328caaab)), closes [#559](https://github.com/havenhq/revideo/issues/559)
* **2d:** correct layout defaults ([#442](https://github.com/havenhq/revideo/issues/442)) ([c116c35](https://github.com/havenhq/revideo/commit/c116c355179ba3b2487634fb82b9a5bc2ea266bf))
* **2d:** correctly append Txt nodes to view ([#644](https://github.com/havenhq/revideo/issues/644)) ([24bb51a](https://github.com/havenhq/revideo/commit/24bb51aa04778c33ce327926b27332efaa554e5f))
* **2d:** correctly support external image urls ([#678](https://github.com/havenhq/revideo/issues/678)) ([a08556b](https://github.com/havenhq/revideo/commit/a08556b6e2822a55db593f610ea4dd6cb8494adb)), closes [#677](https://github.com/havenhq/revideo/issues/677)
* **2d:** fix cache bbox for lines ([#467](https://github.com/havenhq/revideo/issues/467)) ([9fd1444](https://github.com/havenhq/revideo/commit/9fd144417bb0b6301da6c522a988775f5ff142ac)), closes [#466](https://github.com/havenhq/revideo/issues/466)
* **2d:** fix circle segment ([#557](https://github.com/havenhq/revideo/issues/557)) ([adebff4](https://github.com/havenhq/revideo/commit/adebff492b76a512d79151b00adf1b383d25c5b5))
* **2d:** fix CodeBlock types ([#563](https://github.com/havenhq/revideo/issues/563)) ([25160fa](https://github.com/havenhq/revideo/commit/25160fa4d92af88429110356e42f6e3b4f88a90f)), closes [#560](https://github.com/havenhq/revideo/issues/560)
* **2d:** fix curve arrow alignment when animating start signal ([#615](https://github.com/havenhq/revideo/issues/615)) ([2fefc40](https://github.com/havenhq/revideo/commit/2fefc4026050159ba204c7629832ad83e8bfa51b))
* **2d:** fix cyclic dependency in cardinal points ([#645](https://github.com/havenhq/revideo/issues/645)) ([def23f9](https://github.com/havenhq/revideo/commit/def23f925ee7200c8740ecd51c7f6117d67b6ef8))
* **2d:** fix font ligatures in CodeBlock ([#231](https://github.com/havenhq/revideo/issues/231)) ([11ee3fe](https://github.com/havenhq/revideo/commit/11ee3fef5ad878313cf19833df6881333ced4dac))
* **2d:** fix Gradient and Pattern signals ([#376](https://github.com/havenhq/revideo/issues/376)) ([6e0dc8a](https://github.com/havenhq/revideo/commit/6e0dc8af8d19f93fd6a42addca2b3a2958b4dd33))
* **2d:** fix height when tweening text ([#905](https://github.com/havenhq/revideo/issues/905)) ([1c6a796](https://github.com/havenhq/revideo/commit/1c6a7965be137c1ab69741cdd1e9aaa6df4208c4))
* **2d:** fix import order ([#94](https://github.com/havenhq/revideo/issues/94)) ([bcc0bcf](https://github.com/havenhq/revideo/commit/bcc0bcffae47855bd8f7ab06454aaebe93c4aa24)), closes [#76](https://github.com/havenhq/revideo/issues/76)
* **2d:** fix initial value of endOffset ([#433](https://github.com/havenhq/revideo/issues/433)) ([9fe82b3](https://github.com/havenhq/revideo/commit/9fe82b3d21ba0150a2378e541a4652ca707c2d15))
* **2d:** fix layout calculation for nodes not explicitly added to view ([#331](https://github.com/havenhq/revideo/issues/331)) ([528e2d5](https://github.com/havenhq/revideo/commit/528e2d5a0abec99819e022d2848b256ece9f869a))
* **2d:** fix letterSpacing ([#448](https://github.com/havenhq/revideo/issues/448)) ([bb5ffc4](https://github.com/havenhq/revideo/commit/bb5ffc48efa82b9db818e8e52aa35e9c2ad8ce89)), closes [#447](https://github.com/havenhq/revideo/issues/447)
* **2d:** fix line arc length ([#503](https://github.com/havenhq/revideo/issues/503)) ([4f1cd59](https://github.com/havenhq/revideo/commit/4f1cd59e6bcba0b16b36be88b28a60ae46d4d9ab)), closes [#497](https://github.com/havenhq/revideo/issues/497)
* **2d:** fix Line cache ([#232](https://github.com/havenhq/revideo/issues/232)) ([a953b64](https://github.com/havenhq/revideo/commit/a953b64540c020657845efc84d4179142a7a0974)), closes [#205](https://github.com/havenhq/revideo/issues/205)
* **2d:** fix line jitter under certain conditions ([#863](https://github.com/havenhq/revideo/issues/863)) ([fb110a2](https://github.com/havenhq/revideo/commit/fb110a2f3583fc040bf2c39560934162bd146d9b))
* **2d:** fix Line overview crashing ([#142](https://github.com/havenhq/revideo/issues/142)) ([6bd5fd9](https://github.com/havenhq/revideo/commit/6bd5fd941e583e44f5d920ecd20215efb1eed58a))
* **2d:** fix nested cache canvases ([#554](https://github.com/havenhq/revideo/issues/554)) ([e601441](https://github.com/havenhq/revideo/commit/e6014413b215af6fb1a7953f8db83893d4025f0b)), closes [#551](https://github.com/havenhq/revideo/issues/551)
* **2d:** fix package.json entry ([#720](https://github.com/havenhq/revideo/issues/720)) ([12e9bf6](https://github.com/havenhq/revideo/commit/12e9bf6f40ab7afc02e2f55260544f3864920ded))
* **2d:** fix signal initialization ([#382](https://github.com/havenhq/revideo/issues/382)) ([ea36e79](https://github.com/havenhq/revideo/commit/ea36e791a20bfd1b491ffa9917be686c51bc3899))
* **2d:** fix tweening cardinal points ([#829](https://github.com/havenhq/revideo/issues/829)) ([cc16737](https://github.com/havenhq/revideo/commit/cc16737cd59081582fbb488a880e8d3c11c14918))
* **2d:** fix Txt decorators ([#526](https://github.com/havenhq/revideo/issues/526)) ([25b30ed](https://github.com/havenhq/revideo/commit/25b30ed3861f46d72147335480912ce5f564be79))
* **2d:** fix types ([#659](https://github.com/havenhq/revideo/issues/659)) ([a32af29](https://github.com/havenhq/revideo/commit/a32af29ef3bd2e5dbf08697ebfee53230fceadc1))
* **2d:** format whitespaces according to HTML ([#372](https://github.com/havenhq/revideo/issues/372)) ([83fb565](https://github.com/havenhq/revideo/commit/83fb565742d98f060c0400c8cbaf9961b69f34d0)), closes [#370](https://github.com/havenhq/revideo/issues/370)
* **2d:** handle division by zero in lines ([#407](https://github.com/havenhq/revideo/issues/407)) ([a17871a](https://github.com/havenhq/revideo/commit/a17871a2ce63dd5bb32bc719037327c4e9dde217))
* **2d:** handle floating point errors in acos ([#381](https://github.com/havenhq/revideo/issues/381)) ([5bca8fd](https://github.com/havenhq/revideo/commit/5bca8fd0bbdcf28f2793c124b7d6b0afd560c4b8))
* **2d:** handle lines with no points ([#233](https://github.com/havenhq/revideo/issues/233)) ([8108474](https://github.com/havenhq/revideo/commit/81084743dfad7b6419760796fda825047909d4d4)), closes [#212](https://github.com/havenhq/revideo/issues/212)
* **2d:** ignore children with disabled layout ([#669](https://github.com/havenhq/revideo/issues/669)) ([b98c462](https://github.com/havenhq/revideo/commit/b98c4625c3634495e86ca23d19355035e457db06)), closes [#580](https://github.com/havenhq/revideo/issues/580)
* **2d:** improve Curve hitbox ([#778](https://github.com/havenhq/revideo/issues/778)) ([8af723c](https://github.com/havenhq/revideo/commit/8af723c0322de39d2defe0363bba03f4f9542f08))
* **2d:** improve Rect radius ([#221](https://github.com/havenhq/revideo/issues/221)) ([3437e42](https://github.com/havenhq/revideo/commit/3437e42713a3f4a8d44d246ee01e2eb23b61e06a)), closes [#207](https://github.com/havenhq/revideo/issues/207)
* **2d:** make Text respect textWrap=pre ([#287](https://github.com/havenhq/revideo/issues/287)) ([cb07f4b](https://github.com/havenhq/revideo/commit/cb07f4bdf07edc8a086b934ca5ab769682b9a010))
* **2d:** minor fixes ([#915](https://github.com/havenhq/revideo/issues/915)) ([63cfc9e](https://github.com/havenhq/revideo/commit/63cfc9e033f2c2ac6d6ed2a0d8f615fcf642ab59))
* **2d:** point arrow heads in correct direction ([#792](https://github.com/havenhq/revideo/issues/792)) ([52ed52e](https://github.com/havenhq/revideo/commit/52ed52e963cc69a066a0353680acaca35b9c937a)), closes [#783](https://github.com/havenhq/revideo/issues/783)
* **2d:** prevent src warnings in Icon and Latex ([#899](https://github.com/havenhq/revideo/issues/899)) ([5eebab7](https://github.com/havenhq/revideo/commit/5eebab71d8061e233872e049e77b847f9fd077a1))
* **2d:** remove circular dependencies ([#780](https://github.com/havenhq/revideo/issues/780)) ([cdf3af5](https://github.com/havenhq/revideo/commit/cdf3af500a58151ee3549c6e728751aab3e6f75c))
* **2d:** smoothly play videos when presenting ([#600](https://github.com/havenhq/revideo/issues/600)) ([294fe6a](https://github.com/havenhq/revideo/commit/294fe6ac056ab074c77214fcf9035f53fac9258c)), closes [#578](https://github.com/havenhq/revideo/issues/578)
* **2d:** some signal setters not returning owners ([#143](https://github.com/havenhq/revideo/issues/143)) ([09ab7f9](https://github.com/havenhq/revideo/commit/09ab7f96afcaae608399a653c0b4878ba9b467d4))
* **2d:** stop code highlighting from jumping ([#230](https://github.com/havenhq/revideo/issues/230)) ([67ef1c4](https://github.com/havenhq/revideo/commit/67ef1c497056dd1f8f9e20d1d7fc1af03ec3849e))
* **2d:** stop mutating children ([#903](https://github.com/havenhq/revideo/issues/903)) ([f9552a8](https://github.com/havenhq/revideo/commit/f9552a8658ccde6c7b2466ad40b12cf28c6ec805))
* **2d:** strip query string from video URL for warning ([#164](https://github.com/havenhq/revideo/issues/164)) ([ea61226](https://github.com/havenhq/revideo/commit/ea61226fc9838649636c007bbc98bffb3fc0e364))
* **2d:** switch iframes to ShadowDOM ([#90](https://github.com/havenhq/revideo/issues/90)) ([86176be](https://github.com/havenhq/revideo/commit/86176be055c08aba59272afcda00ed586f6c7ad6))
* **2d:** textDirection property for RTL/LTR text ([#404](https://github.com/havenhq/revideo/issues/404)) ([f240b1b](https://github.com/havenhq/revideo/commit/f240b1bd140a884f6901b7cfcb97ce3e9ce4b48d))
* **2d:** textWrap not working in Firefox ([#541](https://github.com/havenhq/revideo/issues/541)) ([f10e057](https://github.com/havenhq/revideo/commit/f10e057fd13ed9dcc70ebc0ca63963708ec159c8)), closes [#517](https://github.com/havenhq/revideo/issues/517)
* **2d:** wait for reused async resources ([#599](https://github.com/havenhq/revideo/issues/599)) ([280e065](https://github.com/havenhq/revideo/commit/280e065fe69e9a744b7b12eb4609e7d87f76bb63)), closes [#593](https://github.com/havenhq/revideo/issues/593)
* account for italic fonts in cache ([#968](https://github.com/havenhq/revideo/issues/968)) ([abb0906](https://github.com/havenhq/revideo/commit/abb090695c4257d9877d0cb11954093c49149ddc)), closes [#934](https://github.com/havenhq/revideo/issues/934)
* await font load before drawing ([#31](https://github.com/havenhq/revideo/issues/31)) ([cbfb5cb](https://github.com/havenhq/revideo/commit/cbfb5cb136d85a657c99187da166b64aae8be3a1))
* await font load without throwing async node error ([#69](https://github.com/havenhq/revideo/issues/69)) ([fddebe6](https://github.com/havenhq/revideo/commit/fddebe60a610af718c880b9e198eebe8555ea9a5))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/havenhq/revideo/issues/62)) ([04cdc5b](https://github.com/havenhq/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* **ffmpeg:** looping of video tag ([#122](https://github.com/havenhq/revideo/issues/122)) ([109c675](https://github.com/havenhq/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* fix compound property setter ([#218](https://github.com/havenhq/revideo/issues/218)) ([6cd1b95](https://github.com/havenhq/revideo/commit/6cd1b952df950554eb637c9f8e82947c415d00c5)), closes [#208](https://github.com/havenhq/revideo/issues/208) [#210](https://github.com/havenhq/revideo/issues/210)
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* frame-sampling ([#165](https://github.com/havenhq/revideo/issues/165)) ([d82d3e6](https://github.com/havenhq/revideo/commit/d82d3e615cf6fa67696f4968220059a43bf846bf))
* offset bug ([#157](https://github.com/havenhq/revideo/issues/157)) ([1ddaa4f](https://github.com/havenhq/revideo/commit/1ddaa4fbd500d3d3031a201261de651e6dbd5752))
* plug memory leaks ([#385](https://github.com/havenhq/revideo/issues/385)) ([de0af00](https://github.com/havenhq/revideo/commit/de0af00a7d2e019e2a933791c62b7901755be7b0))
* prevent consumePromises from halting ([#657](https://github.com/havenhq/revideo/issues/657)) ([363a189](https://github.com/havenhq/revideo/commit/363a189b0c7f5926c9d5ae00b58b48e8ed4d9b48))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* previous scene being rendered twice ([#97](https://github.com/havenhq/revideo/issues/97)) ([90205bd](https://github.com/havenhq/revideo/commit/90205bdc1a086abe5f73b04cb4616c6af5ec4377))
* restrict size of cache canvas ([#544](https://github.com/havenhq/revideo/issues/544)) ([49ec554](https://github.com/havenhq/revideo/commit/49ec55490718e503d9a39437ae13c189dc4fe9ea))
* select decoder based on file type ([#168](https://github.com/havenhq/revideo/issues/168)) ([a275273](https://github.com/havenhq/revideo/commit/a2752730c245bb2beea820c75d68e4256cd046ea))
* support color to null tweening ([#387](https://github.com/havenhq/revideo/issues/387)) ([02e9f22](https://github.com/havenhq/revideo/commit/02e9f22027a1c3a85ffcc259aeca913318fb6f54))
* support legacy imports again ([#868](https://github.com/havenhq/revideo/issues/868)) ([77c4e2e](https://github.com/havenhq/revideo/commit/77c4e2eeb8b0f73bdef1f72e3d81f34c79748929))
* support multiple async players ([#450](https://github.com/havenhq/revideo/issues/450)) ([d7ec469](https://github.com/havenhq/revideo/commit/d7ec469e747eefd909f4dd59dd713f5d86308222)), closes [#434](https://github.com/havenhq/revideo/issues/434)
* typo on codeblock remove comments ([#368](https://github.com/havenhq/revideo/issues/368)) ([2025adc](https://github.com/havenhq/revideo/commit/2025adc6e7aa11d81b6f5f6989e8eae18cf86cb7))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Code Refactoring

* introduce improved names ([#425](https://github.com/havenhq/revideo/issues/425)) ([4a2188d](https://github.com/havenhq/revideo/commit/4a2188d339587fa658b2134befc3fe63c835c5d7))
* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* **2d:** add antialiased signal to Shape ([#282](https://github.com/havenhq/revideo/issues/282)) ([7c6905d](https://github.com/havenhq/revideo/commit/7c6905d72c6c2f49e10f0a80704c0afe3504d01b))
* **2d:** add arcLength helper methods to Curve ([#627](https://github.com/havenhq/revideo/issues/627)) ([3c7546e](https://github.com/havenhq/revideo/commit/3c7546e7a509deb6fff8f669c3df0a69b492bd2e))
* **2d:** add Bézier nodes ([#603](https://github.com/havenhq/revideo/issues/603)) ([9841cfd](https://github.com/havenhq/revideo/commit/9841cfdc3947ca4e6d6e42ed21eae88e855f855d))
* **2d:** add cardinal points ([#636](https://github.com/havenhq/revideo/issues/636)) ([2136a25](https://github.com/havenhq/revideo/commit/2136a2558a9ed968ee505e4e5cce33d989dfdc13)), closes [#391](https://github.com/havenhq/revideo/issues/391)
* **2d:** add closed property for circle ([#378](https://github.com/havenhq/revideo/issues/378)) ([62a9605](https://github.com/havenhq/revideo/commit/62a9605d4c54e7bf2d2d44d47bf769f5b27378a5))
* **2d:** add completion property for curves ([#635](https://github.com/havenhq/revideo/issues/635)) ([6577d6d](https://github.com/havenhq/revideo/commit/6577d6ddfaf779ba02f3862d2a357166138b99ca))
* **2d:** add default computed values for signals ([#259](https://github.com/havenhq/revideo/issues/259)) ([18f61a6](https://github.com/havenhq/revideo/commit/18f61a668420dec8afba52d52a6557e7a7919ba2))
* **2d:** add Icon Component ([#306](https://github.com/havenhq/revideo/issues/306)) ([3479631](https://github.com/havenhq/revideo/commit/3479631ef34e39f90a8d8de441317672be1840d9)), closes [#305](https://github.com/havenhq/revideo/issues/305)
* **2d:** add LaTeX component ([#228](https://github.com/havenhq/revideo/issues/228)) ([4c26d2a](https://github.com/havenhq/revideo/commit/4c26d2aaf0c697486639aa917cd5c585d3d0ea74))
* **2d:** add line counter for CodeBlock ([#802](https://github.com/havenhq/revideo/issues/802)) ([c3f9676](https://github.com/havenhq/revideo/commit/c3f9676b6984731a09a44ab0b1fcfc226975fa08))
* **2d:** add methods for rearranging children ([#81](https://github.com/havenhq/revideo/issues/81)) ([63f6c1a](https://github.com/havenhq/revideo/commit/63f6c1aa51ac4ecd093151c8cd30910f2e72bcac))
* **2d:** add moveBelow, moveAbove and moveTo methods to Node ([#365](https://github.com/havenhq/revideo/issues/365)) ([16752a3](https://github.com/havenhq/revideo/commit/16752a3b8ae7461b33d6208a9675729f374e8324))
* **2d:** add option for preformatted text ([#147](https://github.com/havenhq/revideo/issues/147)) ([989be53](https://github.com/havenhq/revideo/commit/989be532d86642e1125bb7fa62a801b09c1b8f26))
* **2d:** add Path component ([#700](https://github.com/havenhq/revideo/issues/700)) ([2128b6b](https://github.com/havenhq/revideo/commit/2128b6bf871cabe19e1abc749f18945c78c01f84))
* **2d:** add playbackRate signal to Video component ([#831](https://github.com/havenhq/revideo/issues/831)) ([5902b82](https://github.com/havenhq/revideo/commit/5902b824b36400876be0ee970e2c6211299faf21)), closes [#711](https://github.com/havenhq/revideo/issues/711)
* **2d:** add Polygon component ([#463](https://github.com/havenhq/revideo/issues/463)) ([15adb3e](https://github.com/havenhq/revideo/commit/15adb3e312a4998b44c0b9c5fe5b5236f51c71c9)), closes [#455](https://github.com/havenhq/revideo/issues/455)
* **2d:** add querying helpers ([#852](https://github.com/havenhq/revideo/issues/852)) ([614de6b](https://github.com/havenhq/revideo/commit/614de6bd8542322d1db4b123b875f6fad85cc4eb))
* **2d:** add Ray node ([#628](https://github.com/havenhq/revideo/issues/628)) ([649447c](https://github.com/havenhq/revideo/commit/649447cd5f2089afc64cc7bd4b0276e69d1e9a30))
* **2d:** add save and restore methods to nodes ([#406](https://github.com/havenhq/revideo/issues/406)) ([870e194](https://github.com/havenhq/revideo/commit/870e1947d97382bc6d82857c077140bbef7cf7e8))
* **2d:** add skew property ([#803](https://github.com/havenhq/revideo/issues/803)) ([eff7c7b](https://github.com/havenhq/revideo/commit/eff7c7be0c013139140b398350242457736d48c7))
* **2d:** add smooth corners and sharpness to rect ([#310](https://github.com/havenhq/revideo/issues/310)) ([f7fbefd](https://github.com/havenhq/revideo/commit/f7fbefd27f7f6972cfb5a45a68e5d0aed9593ae4))
* **2d:** add spline node ([#514](https://github.com/havenhq/revideo/issues/514)) ([3ce2111](https://github.com/havenhq/revideo/commit/3ce2111309e698450dc4c6e2ad47024995863e73))
* **2d:** add start and end signals to Grid node ([#761](https://github.com/havenhq/revideo/issues/761)) ([e37ea80](https://github.com/havenhq/revideo/commit/e37ea806b94e93c6324d8e1b502468925b731e8e))
* **2d:** add SVG component ([#763](https://github.com/havenhq/revideo/issues/763)) ([8eadc11](https://github.com/havenhq/revideo/commit/8eadc11937d4201545894f2f5b204d477a3f9094))
* **2d:** add textAlign property ([#451](https://github.com/havenhq/revideo/issues/451)) ([3d15825](https://github.com/havenhq/revideo/commit/3d15825f3cc5a35ba081a31510741b824f3bc6ab)), closes [#303](https://github.com/havenhq/revideo/issues/303)
* **2d:** add video component property getter ([#240](https://github.com/havenhq/revideo/issues/240)) ([59de5ab](https://github.com/havenhq/revideo/commit/59de5ab2c089589773a2f9ad7588eda7d72693a7))
* **2d:** add z-index property to nodes ([#398](https://github.com/havenhq/revideo/issues/398)) ([4280af3](https://github.com/havenhq/revideo/commit/4280af3b4b7bd5970fe5e743949a0fcca2c314f3))
* **2d:** always clip images and videos ([#773](https://github.com/havenhq/revideo/issues/773)) ([3938c59](https://github.com/havenhq/revideo/commit/3938c59394bfc42e5562504687d783ff306d7d32))
* **2d:** clamp opacity value between 0 and 1 ([#835](https://github.com/havenhq/revideo/issues/835)) ([c54b2f8](https://github.com/havenhq/revideo/commit/c54b2f837a8e8b872df3610f4cc6caa94a728500)), closes [#830](https://github.com/havenhq/revideo/issues/830)
* **2d:** code bounding box helpers ([#948](https://github.com/havenhq/revideo/issues/948)) ([0ffd56f](https://github.com/havenhq/revideo/commit/0ffd56f5f8076913e687e5b908311aa7832d8b7b))
* **2d:** code range helpers ([#947](https://github.com/havenhq/revideo/issues/947)) ([044c9ac](https://github.com/havenhq/revideo/commit/044c9acd6ee7e4e337fb4d51286126f583a8da6f))
* **2d:** code selection and modification ([#163](https://github.com/havenhq/revideo/issues/163)) ([e8e884a](https://github.com/havenhq/revideo/commit/e8e884a1a5574425dbf15272718911c12cfa2327))
* **2d:** construct lines using signals ([#133](https://github.com/havenhq/revideo/issues/133)) ([2968a24](https://github.com/havenhq/revideo/commit/2968a2426564469fb4f4343fe71a6d30e95361f2))
* **2d:** immediate restore ([#736](https://github.com/havenhq/revideo/issues/736)) ([634d51d](https://github.com/havenhq/revideo/commit/634d51d2afe8a536673c364874f8f3d1a450b846))
* **2d:** improve property declarations ([27e7d26](https://github.com/havenhq/revideo/commit/27e7d267ee91bf1e8ca79686b6ec31347f9f4d41))
* **2d:** improve Rect corner radius ([#120](https://github.com/havenhq/revideo/issues/120)) ([b471fe0](https://github.com/havenhq/revideo/commit/b471fe0e37c0a426d3af8299c9c3c22539e7df05))
* **2d:** improve Video node ([#601](https://github.com/havenhq/revideo/issues/601)) ([3801d83](https://github.com/havenhq/revideo/commit/3801d83415bbdeeee5d6d53d0c18e5d9e78fba56))
* **2d:** make `View2D` extend `Rect` ([#379](https://github.com/havenhq/revideo/issues/379)) ([93db5fc](https://github.com/havenhq/revideo/commit/93db5fc41617c0902e85fda90fbfc930c2b4634b))
* **2d:** make Circle extend Curve ([#771](https://github.com/havenhq/revideo/issues/771)) ([4c8cf19](https://github.com/havenhq/revideo/commit/4c8cf1954093958eac507921dc18f67dd64b2052))
* **2d:** make Polygon extend Curve ([#961](https://github.com/havenhq/revideo/issues/961)) ([739c9fc](https://github.com/havenhq/revideo/commit/739c9fccbc101f8b2eed680a11c00f317fdc4dd3))
* **2d:** make Rect extend Curve ([#759](https://github.com/havenhq/revideo/issues/759)) ([9810212](https://github.com/havenhq/revideo/commit/9810212648824b9a2fa2ecd6b597e3319d20b325))
* **2d:** nested Txt nodes ([#861](https://github.com/havenhq/revideo/issues/861)) ([f2786d0](https://github.com/havenhq/revideo/commit/f2786d0cd0d06065ca1e9eb9f6b4c11a74b6c283)), closes [#540](https://github.com/havenhq/revideo/issues/540)
* **2d:** simplify layout prop ([c24cb12](https://github.com/havenhq/revideo/commit/c24cb12a22b7c85fdfb051917fa9ee1e0911717c))
* **2d:** support HMR for images ([#641](https://github.com/havenhq/revideo/issues/641)) ([cf17520](https://github.com/havenhq/revideo/commit/cf17520aa8ddf19dcfc419c63cf7255892d45b71))
* **2d:** support letter spacing in Code ([#955](https://github.com/havenhq/revideo/issues/955)) ([2a87c37](https://github.com/havenhq/revideo/commit/2a87c37c832de86c4b524b33fd68806627daec8b))
* **2d:** support tweening in applyState ([#859](https://github.com/havenhq/revideo/issues/859)) ([b7ed2e2](https://github.com/havenhq/revideo/commit/b7ed2e24773227e5b576ff056eb23de9b9ff1676))
* **2d:** support tweening Line points ([#853](https://github.com/havenhq/revideo/issues/853)) ([4bf37d7](https://github.com/havenhq/revideo/commit/4bf37d74d2e4bb9d9cc034aff121a32da9a6d146))
* **2d:** unify desired sizes ([#118](https://github.com/havenhq/revideo/issues/118)) ([401a799](https://github.com/havenhq/revideo/commit/401a79946b034a96b9abff2f3fb5efd6cc9080f3))
* **2d:** unify layout properties ([#355](https://github.com/havenhq/revideo/issues/355)) ([3cae97e](https://github.com/havenhq/revideo/commit/3cae97ea704d0533020fa87326dacadcc037d517)), closes [#352](https://github.com/havenhq/revideo/issues/352)
* **2d:** warn about missing image source ([#817](https://github.com/havenhq/revideo/issues/817)) ([6dcdb5f](https://github.com/havenhq/revideo/commit/6dcdb5f3b83d4860b1557e4745972e0af68f92f3))
* add advanced caching ([#69](https://github.com/havenhq/revideo/issues/69)) ([2a644c9](https://github.com/havenhq/revideo/commit/2a644c9315acfcc5280a5eacc9904df140a61e4f))
* add base class for shapes ([#67](https://github.com/havenhq/revideo/issues/67)) ([d38c172](https://github.com/havenhq/revideo/commit/d38c1724e129c553739cbfc27c4e5cd8f737f067))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add cloning ([#80](https://github.com/havenhq/revideo/issues/80)) ([47d7a0f](https://github.com/havenhq/revideo/commit/47d7a0fa5da9a03d8ed91557db651f6f960e28b1))
* add CodeBlock component based on code-fns to 2D ([#78](https://github.com/havenhq/revideo/issues/78)) ([ad346f1](https://github.com/havenhq/revideo/commit/ad346f118d63b1e321ec315e1c70b925670124a1))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add default renderer ([#63](https://github.com/havenhq/revideo/issues/63)) ([9255490](https://github.com/havenhq/revideo/commit/92554900965fe088538f5e703dbab2fd84f904d7)), closes [#56](https://github.com/havenhq/revideo/issues/56) [#58](https://github.com/havenhq/revideo/issues/58)
* add DEG2RAD and RAD2DEG constants ([#630](https://github.com/havenhq/revideo/issues/630)) ([01801e8](https://github.com/havenhq/revideo/commit/01801e8766058e75a6a020400650fb00f8f430cc))
* add Grid node ([e1f83da](https://github.com/havenhq/revideo/commit/e1f83da1f43d20d392df4acb11e3df9cc457585d))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add middle cardinal point ([#758](https://github.com/havenhq/revideo/issues/758)) ([b036eaf](https://github.com/havenhq/revideo/commit/b036eafc00381831c08267a78cf9d74973f4025a))
* add missing flexbox properties ([#405](https://github.com/havenhq/revideo/issues/405)) ([4e78b4b](https://github.com/havenhq/revideo/commit/4e78b4b2fe4df42ce0a8da6fd41ad38b0104e7f5))
* add missing layout props ([#72](https://github.com/havenhq/revideo/issues/72)) ([f808a56](https://github.com/havenhq/revideo/commit/f808a562b192fd03dba4b0d353284db344d6a80b))
* add node spawners ([#149](https://github.com/havenhq/revideo/issues/149)) ([da18a4e](https://github.com/havenhq/revideo/commit/da18a4e24104022a84ecd6cec1666b520186058f))
* add polyline ([#84](https://github.com/havenhq/revideo/issues/84)) ([4ceaf84](https://github.com/havenhq/revideo/commit/4ceaf842915ac43d81f292c58a4dc73a8d1bb8e9))
* add random number generator ([#116](https://github.com/havenhq/revideo/issues/116)) ([d505312](https://github.com/havenhq/revideo/commit/d5053123eef308c7a2a61d92b6e76c637f4ed0b8)), closes [#14](https://github.com/havenhq/revideo/issues/14)
* add reparent helper ([80b95a9](https://github.com/havenhq/revideo/commit/80b95a9ce89d4a2eeea7e467257486e961602d69))
* add Text and Image components ([#70](https://github.com/havenhq/revideo/issues/70)) ([85c7dcd](https://github.com/havenhq/revideo/commit/85c7dcdb4f8ca2f0bfb03950c85a8d6f6652fcdf))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/havenhq/revideo/issues/9)) ([9e0d67b](https://github.com/havenhq/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* added a theme property to the CodeBlock component ([#279](https://github.com/havenhq/revideo/issues/279)) ([fe34fa8](https://github.com/havenhq/revideo/commit/fe34fa8ebfe66cd356fb1c3d85adedef11e03b45))
* better children and spawners ([#858](https://github.com/havenhq/revideo/issues/858)) ([9b5c23d](https://github.com/havenhq/revideo/commit/9b5c23d2076180cf710656c817369a07b253e3ec))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* convert built-in types to webgl ([#929](https://github.com/havenhq/revideo/issues/929)) ([a0f0b7d](https://github.com/havenhq/revideo/commit/a0f0b7d8996547e1a316097422ec02bddeeccec6))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* **core:** tree shaking ([#523](https://github.com/havenhq/revideo/issues/523)) ([65fec78](https://github.com/havenhq/revideo/commit/65fec7825fda33812b13f57bfeb1d82193a5d190))
* **docs:** fiddle editor ([#542](https://github.com/havenhq/revideo/issues/542)) ([3c68fef](https://github.com/havenhq/revideo/commit/3c68fefdf7bf375ee9345aba7dbf9e5ff35e3c3d))
* encode video with wasm ([#162](https://github.com/havenhq/revideo/issues/162)) ([c756fd8](https://github.com/havenhq/revideo/commit/c756fd8293d49b8abc8887c94bfb8f0d04e65842))
* export everything from entry points ([#710](https://github.com/havenhq/revideo/issues/710)) ([3c885d9](https://github.com/havenhq/revideo/commit/3c885d9083b52fbbaccf1e2560ae50817949bc52))
* extract frames using webcodecs ([#156](https://github.com/havenhq/revideo/issues/156)) ([7bb63d9](https://github.com/havenhq/revideo/commit/7bb63d94086f91d734e0a895489fad1d5c4b2478))
* filter reordering ([#119](https://github.com/havenhq/revideo/issues/119)) ([2398d0f](https://github.com/havenhq/revideo/commit/2398d0f9d57f36b47c9c66a988ca5607e9a3a30e))
* implement absolute scale setter ([842079a](https://github.com/havenhq/revideo/commit/842079a6547af4032719c85837df3db7c1c6d30a))
* improve async signals ([#156](https://github.com/havenhq/revideo/issues/156)) ([db27b9d](https://github.com/havenhq/revideo/commit/db27b9d5fb69a88f42afd98c86c4a1cdceb88ea1))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* improve image error handling ([#847](https://github.com/havenhq/revideo/issues/847)) ([db09d53](https://github.com/havenhq/revideo/commit/db09d5305a3c0507b035e3cd347eaa65b23d7d2e))
* introduce basic caching ([#68](https://github.com/havenhq/revideo/issues/68)) ([6420d36](https://github.com/havenhq/revideo/commit/6420d362d0e4ae058f55b6ff6bb2a3a32dec559b))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make transparent video optional ([#91](https://github.com/havenhq/revideo/issues/91)) ([6a052d5](https://github.com/havenhq/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* merge properties and signals ([#124](https://github.com/havenhq/revideo/issues/124)) ([da3ba83](https://github.com/havenhq/revideo/commit/da3ba83d82ee74f5a5c3631b07597f08cdf9e8e4))
* minor improvements ([403c7c2](https://github.com/havenhq/revideo/commit/403c7c27ad969880a14c498ec6cefb9e7e7b7544))
* minor improvements ([#77](https://github.com/havenhq/revideo/issues/77)) ([7c6e584](https://github.com/havenhq/revideo/commit/7c6e584aca353c9af55f0acb61b32b5f99727dba))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* new animator ([#91](https://github.com/havenhq/revideo/issues/91)) ([d85f2f8](https://github.com/havenhq/revideo/commit/d85f2f8a54c0f8bbfbc451884385f30e5b3ec206))
* new Code node ([#946](https://github.com/havenhq/revideo/issues/946)) ([26e55a3](https://github.com/havenhq/revideo/commit/26e55a37c416fb1313c8aadf40eed2824b45d330))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/havenhq/revideo/issues/33)) ([a6e1bcd](https://github.com/havenhq/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* serve assets through cli ([#124](https://github.com/havenhq/revideo/issues/124)) ([fdccde1](https://github.com/havenhq/revideo/commit/fdccde12f058811382e7e2084ebe4b9e05af1b80))
* signal error handling ([#89](https://github.com/havenhq/revideo/issues/89)) ([472ac65](https://github.com/havenhq/revideo/commit/472ac65938b804a6b698c8522ec0c3b6bdbcf1b1))
* simplify size access ([#65](https://github.com/havenhq/revideo/issues/65)) ([3315e64](https://github.com/havenhq/revideo/commit/3315e64641e9778bc48ea3fb707e3c0eeb581dfe))
* simplify size access further ([#66](https://github.com/havenhq/revideo/issues/66)) ([9091a5e](https://github.com/havenhq/revideo/commit/9091a5e05d8fadf72c50832c7c4467ac4424b72c))
* support hls video ([#160](https://github.com/havenhq/revideo/issues/160)) ([deff17d](https://github.com/havenhq/revideo/commit/deff17dd0899059727f88213207bfa942041243b))
* switch to signals ([#64](https://github.com/havenhq/revideo/issues/64)) ([d22d237](https://github.com/havenhq/revideo/commit/d22d23728597e6fa82ea5c5a99a6c0a56819bded))
* transparent video ([#75](https://github.com/havenhq/revideo/issues/75)) ([5f7b909](https://github.com/havenhq/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))
* turn Layout into node ([#75](https://github.com/havenhq/revideo/issues/75)) ([cdf8dc0](https://github.com/havenhq/revideo/commit/cdf8dc0a35522482dee2dd78a69606b79f52246e))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** scene graph icons ([#914](https://github.com/havenhq/revideo/issues/914)) ([e92ddef](https://github.com/havenhq/revideo/commit/e92ddef34860f5e710ff0f1a310758ec0ca95bcb))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* unify references and signals ([#137](https://github.com/havenhq/revideo/issues/137)) ([063aede](https://github.com/havenhq/revideo/commit/063aede0842f948d2c6704c6edd426e954bb4668))
* upgrade code-fns for new theme options and lazy loading ([#401](https://github.com/havenhq/revideo/issues/401)) ([8965ab1](https://github.com/havenhq/revideo/commit/8965ab1bef8b6ae919c8001d0527f5793293b285)), closes [#396](https://github.com/havenhq/revideo/issues/396) [#322](https://github.com/havenhq/revideo/issues/322)
* use ES modules in fiddles ([#712](https://github.com/havenhq/revideo/issues/712)) ([dbe2ad5](https://github.com/havenhq/revideo/commit/dbe2ad5644219c5a98d38c6557abfb66d793c821))
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))
* world space cache ([#498](https://github.com/havenhq/revideo/issues/498)) ([633e9e1](https://github.com/havenhq/revideo/commit/633e9e140dfbbe397df6ddc1f96ed30782ddce94)), closes [#342](https://github.com/havenhq/revideo/issues/342)


### Reverts

* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))
* feat: upgrade code-fns for new theme options and lazy loading ([#435](https://github.com/havenhq/revideo/issues/435)) ([3f5e439](https://github.com/havenhq/revideo/commit/3f5e43968f7add7c6322c9c8358d3b6fc178c2fe))


### BREAKING CHANGES

* multiple name changes

To avoid collisions, names of certain classes have changed:
- `Text => Txt`
- `Image => Img`
- `Rect (type) => BBox`

Cache related methods of `Node` have changed:
- `getCacheRect => getCacheBBox`
- `cacheRect => cacheBBox`
- `fullCacheRect => fullCacheBBox`

The `CodeBlock` property has changed:
- `CodeBlock.selectionOpacity => CodeBlock.unselectedOpacity`
* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
* remove legacy package





## 0.4.4 (2024-06-25)


### Bug Fixes

* **2d:** account for offset in cardinal points ([#883](https://github.com/havenhq/revideo/issues/883)) ([24da258](https://github.com/havenhq/revideo/commit/24da258f5937087b363eeb9146a9d22747b02e70)), closes [#882](https://github.com/havenhq/revideo/issues/882)
* **2d:** account for spawners in scene graph ([#935](https://github.com/havenhq/revideo/issues/935)) ([ca325f5](https://github.com/havenhq/revideo/commit/ca325f5ad0ae987e76106f5e65fef3ed7b3ca08d))
* **2d:** add missing Curve properties to Circle ([#805](https://github.com/havenhq/revideo/issues/805)) ([38c7900](https://github.com/havenhq/revideo/commit/38c79000403d7c3c99dde9e4c825a448d5f55054))
* **2d:** add missing Fragment export ([#553](https://github.com/havenhq/revideo/issues/553)) ([229afb4](https://github.com/havenhq/revideo/commit/229afb4fe7d95f09b480ab4a813f8dff549f381f))
* **2d:** add missing jsx dev runtime ([#547](https://github.com/havenhq/revideo/issues/547)) ([d61cb7d](https://github.com/havenhq/revideo/commit/d61cb7dd24ab66ae17d5bd6f5ccb34c4fd1e7569)), closes [#545](https://github.com/havenhq/revideo/issues/545)
* **2d:** add missing middle property ([#891](https://github.com/havenhq/revideo/issues/891)) ([61e2e96](https://github.com/havenhq/revideo/commit/61e2e96e3b8f37a68ebdddb432baba04858fd4f3))
* **2d:** add missing shape export ([#111](https://github.com/havenhq/revideo/issues/111)) ([02a1fa7](https://github.com/havenhq/revideo/commit/02a1fa7ea62155e498809f2e57ff29a18c82ac12))
* **2d:** better error handling ([#524](https://github.com/havenhq/revideo/issues/524)) ([b7475ba](https://github.com/havenhq/revideo/commit/b7475ba5ff35d37ee198577d1205d6ecd6fd2092))
* **2d:** calculate arrow orientations for curves correctly ([#597](https://github.com/havenhq/revideo/issues/597)) ([1626811](https://github.com/havenhq/revideo/commit/1626811ec4cd1bd2a3d43e393ced40a7da462c3a))
* **2d:** calculate Txt cache bbox from contents ([#836](https://github.com/havenhq/revideo/issues/836)) ([33e1a12](https://github.com/havenhq/revideo/commit/33e1a1296f21d26e9ed45ae92132825dca17054d)), closes [#465](https://github.com/havenhq/revideo/issues/465)
* **2d:** clone size correctly ([#562](https://github.com/havenhq/revideo/issues/562)) ([cdd3df1](https://github.com/havenhq/revideo/commit/cdd3df1bff25b04b905e289264831d8d328caaab)), closes [#559](https://github.com/havenhq/revideo/issues/559)
* **2d:** correct layout defaults ([#442](https://github.com/havenhq/revideo/issues/442)) ([c116c35](https://github.com/havenhq/revideo/commit/c116c355179ba3b2487634fb82b9a5bc2ea266bf))
* **2d:** correctly append Txt nodes to view ([#644](https://github.com/havenhq/revideo/issues/644)) ([24bb51a](https://github.com/havenhq/revideo/commit/24bb51aa04778c33ce327926b27332efaa554e5f))
* **2d:** correctly support external image urls ([#678](https://github.com/havenhq/revideo/issues/678)) ([a08556b](https://github.com/havenhq/revideo/commit/a08556b6e2822a55db593f610ea4dd6cb8494adb)), closes [#677](https://github.com/havenhq/revideo/issues/677)
* **2d:** fix cache bbox for lines ([#467](https://github.com/havenhq/revideo/issues/467)) ([9fd1444](https://github.com/havenhq/revideo/commit/9fd144417bb0b6301da6c522a988775f5ff142ac)), closes [#466](https://github.com/havenhq/revideo/issues/466)
* **2d:** fix circle segment ([#557](https://github.com/havenhq/revideo/issues/557)) ([adebff4](https://github.com/havenhq/revideo/commit/adebff492b76a512d79151b00adf1b383d25c5b5))
* **2d:** fix CodeBlock types ([#563](https://github.com/havenhq/revideo/issues/563)) ([25160fa](https://github.com/havenhq/revideo/commit/25160fa4d92af88429110356e42f6e3b4f88a90f)), closes [#560](https://github.com/havenhq/revideo/issues/560)
* **2d:** fix curve arrow alignment when animating start signal ([#615](https://github.com/havenhq/revideo/issues/615)) ([2fefc40](https://github.com/havenhq/revideo/commit/2fefc4026050159ba204c7629832ad83e8bfa51b))
* **2d:** fix cyclic dependency in cardinal points ([#645](https://github.com/havenhq/revideo/issues/645)) ([def23f9](https://github.com/havenhq/revideo/commit/def23f925ee7200c8740ecd51c7f6117d67b6ef8))
* **2d:** fix font ligatures in CodeBlock ([#231](https://github.com/havenhq/revideo/issues/231)) ([11ee3fe](https://github.com/havenhq/revideo/commit/11ee3fef5ad878313cf19833df6881333ced4dac))
* **2d:** fix Gradient and Pattern signals ([#376](https://github.com/havenhq/revideo/issues/376)) ([6e0dc8a](https://github.com/havenhq/revideo/commit/6e0dc8af8d19f93fd6a42addca2b3a2958b4dd33))
* **2d:** fix height when tweening text ([#905](https://github.com/havenhq/revideo/issues/905)) ([1c6a796](https://github.com/havenhq/revideo/commit/1c6a7965be137c1ab69741cdd1e9aaa6df4208c4))
* **2d:** fix import order ([#94](https://github.com/havenhq/revideo/issues/94)) ([bcc0bcf](https://github.com/havenhq/revideo/commit/bcc0bcffae47855bd8f7ab06454aaebe93c4aa24)), closes [#76](https://github.com/havenhq/revideo/issues/76)
* **2d:** fix initial value of endOffset ([#433](https://github.com/havenhq/revideo/issues/433)) ([9fe82b3](https://github.com/havenhq/revideo/commit/9fe82b3d21ba0150a2378e541a4652ca707c2d15))
* **2d:** fix layout calculation for nodes not explicitly added to view ([#331](https://github.com/havenhq/revideo/issues/331)) ([528e2d5](https://github.com/havenhq/revideo/commit/528e2d5a0abec99819e022d2848b256ece9f869a))
* **2d:** fix letterSpacing ([#448](https://github.com/havenhq/revideo/issues/448)) ([bb5ffc4](https://github.com/havenhq/revideo/commit/bb5ffc48efa82b9db818e8e52aa35e9c2ad8ce89)), closes [#447](https://github.com/havenhq/revideo/issues/447)
* **2d:** fix line arc length ([#503](https://github.com/havenhq/revideo/issues/503)) ([4f1cd59](https://github.com/havenhq/revideo/commit/4f1cd59e6bcba0b16b36be88b28a60ae46d4d9ab)), closes [#497](https://github.com/havenhq/revideo/issues/497)
* **2d:** fix Line cache ([#232](https://github.com/havenhq/revideo/issues/232)) ([a953b64](https://github.com/havenhq/revideo/commit/a953b64540c020657845efc84d4179142a7a0974)), closes [#205](https://github.com/havenhq/revideo/issues/205)
* **2d:** fix line jitter under certain conditions ([#863](https://github.com/havenhq/revideo/issues/863)) ([fb110a2](https://github.com/havenhq/revideo/commit/fb110a2f3583fc040bf2c39560934162bd146d9b))
* **2d:** fix Line overview crashing ([#142](https://github.com/havenhq/revideo/issues/142)) ([6bd5fd9](https://github.com/havenhq/revideo/commit/6bd5fd941e583e44f5d920ecd20215efb1eed58a))
* **2d:** fix nested cache canvases ([#554](https://github.com/havenhq/revideo/issues/554)) ([e601441](https://github.com/havenhq/revideo/commit/e6014413b215af6fb1a7953f8db83893d4025f0b)), closes [#551](https://github.com/havenhq/revideo/issues/551)
* **2d:** fix package.json entry ([#720](https://github.com/havenhq/revideo/issues/720)) ([12e9bf6](https://github.com/havenhq/revideo/commit/12e9bf6f40ab7afc02e2f55260544f3864920ded))
* **2d:** fix signal initialization ([#382](https://github.com/havenhq/revideo/issues/382)) ([ea36e79](https://github.com/havenhq/revideo/commit/ea36e791a20bfd1b491ffa9917be686c51bc3899))
* **2d:** fix tweening cardinal points ([#829](https://github.com/havenhq/revideo/issues/829)) ([cc16737](https://github.com/havenhq/revideo/commit/cc16737cd59081582fbb488a880e8d3c11c14918))
* **2d:** fix Txt decorators ([#526](https://github.com/havenhq/revideo/issues/526)) ([25b30ed](https://github.com/havenhq/revideo/commit/25b30ed3861f46d72147335480912ce5f564be79))
* **2d:** fix types ([#659](https://github.com/havenhq/revideo/issues/659)) ([a32af29](https://github.com/havenhq/revideo/commit/a32af29ef3bd2e5dbf08697ebfee53230fceadc1))
* **2d:** format whitespaces according to HTML ([#372](https://github.com/havenhq/revideo/issues/372)) ([83fb565](https://github.com/havenhq/revideo/commit/83fb565742d98f060c0400c8cbaf9961b69f34d0)), closes [#370](https://github.com/havenhq/revideo/issues/370)
* **2d:** handle division by zero in lines ([#407](https://github.com/havenhq/revideo/issues/407)) ([a17871a](https://github.com/havenhq/revideo/commit/a17871a2ce63dd5bb32bc719037327c4e9dde217))
* **2d:** handle floating point errors in acos ([#381](https://github.com/havenhq/revideo/issues/381)) ([5bca8fd](https://github.com/havenhq/revideo/commit/5bca8fd0bbdcf28f2793c124b7d6b0afd560c4b8))
* **2d:** handle lines with no points ([#233](https://github.com/havenhq/revideo/issues/233)) ([8108474](https://github.com/havenhq/revideo/commit/81084743dfad7b6419760796fda825047909d4d4)), closes [#212](https://github.com/havenhq/revideo/issues/212)
* **2d:** ignore children with disabled layout ([#669](https://github.com/havenhq/revideo/issues/669)) ([b98c462](https://github.com/havenhq/revideo/commit/b98c4625c3634495e86ca23d19355035e457db06)), closes [#580](https://github.com/havenhq/revideo/issues/580)
* **2d:** improve Curve hitbox ([#778](https://github.com/havenhq/revideo/issues/778)) ([8af723c](https://github.com/havenhq/revideo/commit/8af723c0322de39d2defe0363bba03f4f9542f08))
* **2d:** improve Rect radius ([#221](https://github.com/havenhq/revideo/issues/221)) ([3437e42](https://github.com/havenhq/revideo/commit/3437e42713a3f4a8d44d246ee01e2eb23b61e06a)), closes [#207](https://github.com/havenhq/revideo/issues/207)
* **2d:** make Text respect textWrap=pre ([#287](https://github.com/havenhq/revideo/issues/287)) ([cb07f4b](https://github.com/havenhq/revideo/commit/cb07f4bdf07edc8a086b934ca5ab769682b9a010))
* **2d:** minor fixes ([#915](https://github.com/havenhq/revideo/issues/915)) ([63cfc9e](https://github.com/havenhq/revideo/commit/63cfc9e033f2c2ac6d6ed2a0d8f615fcf642ab59))
* **2d:** point arrow heads in correct direction ([#792](https://github.com/havenhq/revideo/issues/792)) ([52ed52e](https://github.com/havenhq/revideo/commit/52ed52e963cc69a066a0353680acaca35b9c937a)), closes [#783](https://github.com/havenhq/revideo/issues/783)
* **2d:** prevent src warnings in Icon and Latex ([#899](https://github.com/havenhq/revideo/issues/899)) ([5eebab7](https://github.com/havenhq/revideo/commit/5eebab71d8061e233872e049e77b847f9fd077a1))
* **2d:** remove circular dependencies ([#780](https://github.com/havenhq/revideo/issues/780)) ([cdf3af5](https://github.com/havenhq/revideo/commit/cdf3af500a58151ee3549c6e728751aab3e6f75c))
* **2d:** smoothly play videos when presenting ([#600](https://github.com/havenhq/revideo/issues/600)) ([294fe6a](https://github.com/havenhq/revideo/commit/294fe6ac056ab074c77214fcf9035f53fac9258c)), closes [#578](https://github.com/havenhq/revideo/issues/578)
* **2d:** some signal setters not returning owners ([#143](https://github.com/havenhq/revideo/issues/143)) ([09ab7f9](https://github.com/havenhq/revideo/commit/09ab7f96afcaae608399a653c0b4878ba9b467d4))
* **2d:** stop code highlighting from jumping ([#230](https://github.com/havenhq/revideo/issues/230)) ([67ef1c4](https://github.com/havenhq/revideo/commit/67ef1c497056dd1f8f9e20d1d7fc1af03ec3849e))
* **2d:** stop mutating children ([#903](https://github.com/havenhq/revideo/issues/903)) ([f9552a8](https://github.com/havenhq/revideo/commit/f9552a8658ccde6c7b2466ad40b12cf28c6ec805))
* **2d:** strip query string from video URL for warning ([#164](https://github.com/havenhq/revideo/issues/164)) ([ea61226](https://github.com/havenhq/revideo/commit/ea61226fc9838649636c007bbc98bffb3fc0e364))
* **2d:** switch iframes to ShadowDOM ([#90](https://github.com/havenhq/revideo/issues/90)) ([86176be](https://github.com/havenhq/revideo/commit/86176be055c08aba59272afcda00ed586f6c7ad6))
* **2d:** textDirection property for RTL/LTR text ([#404](https://github.com/havenhq/revideo/issues/404)) ([f240b1b](https://github.com/havenhq/revideo/commit/f240b1bd140a884f6901b7cfcb97ce3e9ce4b48d))
* **2d:** textWrap not working in Firefox ([#541](https://github.com/havenhq/revideo/issues/541)) ([f10e057](https://github.com/havenhq/revideo/commit/f10e057fd13ed9dcc70ebc0ca63963708ec159c8)), closes [#517](https://github.com/havenhq/revideo/issues/517)
* **2d:** wait for reused async resources ([#599](https://github.com/havenhq/revideo/issues/599)) ([280e065](https://github.com/havenhq/revideo/commit/280e065fe69e9a744b7b12eb4609e7d87f76bb63)), closes [#593](https://github.com/havenhq/revideo/issues/593)
* account for italic fonts in cache ([#968](https://github.com/havenhq/revideo/issues/968)) ([abb0906](https://github.com/havenhq/revideo/commit/abb090695c4257d9877d0cb11954093c49149ddc)), closes [#934](https://github.com/havenhq/revideo/issues/934)
* await font load before drawing ([#31](https://github.com/havenhq/revideo/issues/31)) ([cbfb5cb](https://github.com/havenhq/revideo/commit/cbfb5cb136d85a657c99187da166b64aae8be3a1))
* await font load without throwing async node error ([#69](https://github.com/havenhq/revideo/issues/69)) ([fddebe6](https://github.com/havenhq/revideo/commit/fddebe60a610af718c880b9e198eebe8555ea9a5))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/havenhq/revideo/issues/62)) ([04cdc5b](https://github.com/havenhq/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* **ffmpeg:** looping of video tag ([#122](https://github.com/havenhq/revideo/issues/122)) ([109c675](https://github.com/havenhq/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* fix compound property setter ([#218](https://github.com/havenhq/revideo/issues/218)) ([6cd1b95](https://github.com/havenhq/revideo/commit/6cd1b952df950554eb637c9f8e82947c415d00c5)), closes [#208](https://github.com/havenhq/revideo/issues/208) [#210](https://github.com/havenhq/revideo/issues/210)
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* frame-sampling ([#165](https://github.com/havenhq/revideo/issues/165)) ([d82d3e6](https://github.com/havenhq/revideo/commit/d82d3e615cf6fa67696f4968220059a43bf846bf))
* offset bug ([#157](https://github.com/havenhq/revideo/issues/157)) ([1ddaa4f](https://github.com/havenhq/revideo/commit/1ddaa4fbd500d3d3031a201261de651e6dbd5752))
* plug memory leaks ([#385](https://github.com/havenhq/revideo/issues/385)) ([de0af00](https://github.com/havenhq/revideo/commit/de0af00a7d2e019e2a933791c62b7901755be7b0))
* prevent consumePromises from halting ([#657](https://github.com/havenhq/revideo/issues/657)) ([363a189](https://github.com/havenhq/revideo/commit/363a189b0c7f5926c9d5ae00b58b48e8ed4d9b48))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* previous scene being rendered twice ([#97](https://github.com/havenhq/revideo/issues/97)) ([90205bd](https://github.com/havenhq/revideo/commit/90205bdc1a086abe5f73b04cb4616c6af5ec4377))
* restrict size of cache canvas ([#544](https://github.com/havenhq/revideo/issues/544)) ([49ec554](https://github.com/havenhq/revideo/commit/49ec55490718e503d9a39437ae13c189dc4fe9ea))
* support color to null tweening ([#387](https://github.com/havenhq/revideo/issues/387)) ([02e9f22](https://github.com/havenhq/revideo/commit/02e9f22027a1c3a85ffcc259aeca913318fb6f54))
* support legacy imports again ([#868](https://github.com/havenhq/revideo/issues/868)) ([77c4e2e](https://github.com/havenhq/revideo/commit/77c4e2eeb8b0f73bdef1f72e3d81f34c79748929))
* support multiple async players ([#450](https://github.com/havenhq/revideo/issues/450)) ([d7ec469](https://github.com/havenhq/revideo/commit/d7ec469e747eefd909f4dd59dd713f5d86308222)), closes [#434](https://github.com/havenhq/revideo/issues/434)
* typo on codeblock remove comments ([#368](https://github.com/havenhq/revideo/issues/368)) ([2025adc](https://github.com/havenhq/revideo/commit/2025adc6e7aa11d81b6f5f6989e8eae18cf86cb7))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Code Refactoring

* introduce improved names ([#425](https://github.com/havenhq/revideo/issues/425)) ([4a2188d](https://github.com/havenhq/revideo/commit/4a2188d339587fa658b2134befc3fe63c835c5d7))
* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* **2d:** add antialiased signal to Shape ([#282](https://github.com/havenhq/revideo/issues/282)) ([7c6905d](https://github.com/havenhq/revideo/commit/7c6905d72c6c2f49e10f0a80704c0afe3504d01b))
* **2d:** add arcLength helper methods to Curve ([#627](https://github.com/havenhq/revideo/issues/627)) ([3c7546e](https://github.com/havenhq/revideo/commit/3c7546e7a509deb6fff8f669c3df0a69b492bd2e))
* **2d:** add Bézier nodes ([#603](https://github.com/havenhq/revideo/issues/603)) ([9841cfd](https://github.com/havenhq/revideo/commit/9841cfdc3947ca4e6d6e42ed21eae88e855f855d))
* **2d:** add cardinal points ([#636](https://github.com/havenhq/revideo/issues/636)) ([2136a25](https://github.com/havenhq/revideo/commit/2136a2558a9ed968ee505e4e5cce33d989dfdc13)), closes [#391](https://github.com/havenhq/revideo/issues/391)
* **2d:** add closed property for circle ([#378](https://github.com/havenhq/revideo/issues/378)) ([62a9605](https://github.com/havenhq/revideo/commit/62a9605d4c54e7bf2d2d44d47bf769f5b27378a5))
* **2d:** add completion property for curves ([#635](https://github.com/havenhq/revideo/issues/635)) ([6577d6d](https://github.com/havenhq/revideo/commit/6577d6ddfaf779ba02f3862d2a357166138b99ca))
* **2d:** add default computed values for signals ([#259](https://github.com/havenhq/revideo/issues/259)) ([18f61a6](https://github.com/havenhq/revideo/commit/18f61a668420dec8afba52d52a6557e7a7919ba2))
* **2d:** add Icon Component ([#306](https://github.com/havenhq/revideo/issues/306)) ([3479631](https://github.com/havenhq/revideo/commit/3479631ef34e39f90a8d8de441317672be1840d9)), closes [#305](https://github.com/havenhq/revideo/issues/305)
* **2d:** add LaTeX component ([#228](https://github.com/havenhq/revideo/issues/228)) ([4c26d2a](https://github.com/havenhq/revideo/commit/4c26d2aaf0c697486639aa917cd5c585d3d0ea74))
* **2d:** add line counter for CodeBlock ([#802](https://github.com/havenhq/revideo/issues/802)) ([c3f9676](https://github.com/havenhq/revideo/commit/c3f9676b6984731a09a44ab0b1fcfc226975fa08))
* **2d:** add methods for rearranging children ([#81](https://github.com/havenhq/revideo/issues/81)) ([63f6c1a](https://github.com/havenhq/revideo/commit/63f6c1aa51ac4ecd093151c8cd30910f2e72bcac))
* **2d:** add moveBelow, moveAbove and moveTo methods to Node ([#365](https://github.com/havenhq/revideo/issues/365)) ([16752a3](https://github.com/havenhq/revideo/commit/16752a3b8ae7461b33d6208a9675729f374e8324))
* **2d:** add option for preformatted text ([#147](https://github.com/havenhq/revideo/issues/147)) ([989be53](https://github.com/havenhq/revideo/commit/989be532d86642e1125bb7fa62a801b09c1b8f26))
* **2d:** add Path component ([#700](https://github.com/havenhq/revideo/issues/700)) ([2128b6b](https://github.com/havenhq/revideo/commit/2128b6bf871cabe19e1abc749f18945c78c01f84))
* **2d:** add playbackRate signal to Video component ([#831](https://github.com/havenhq/revideo/issues/831)) ([5902b82](https://github.com/havenhq/revideo/commit/5902b824b36400876be0ee970e2c6211299faf21)), closes [#711](https://github.com/havenhq/revideo/issues/711)
* **2d:** add Polygon component ([#463](https://github.com/havenhq/revideo/issues/463)) ([15adb3e](https://github.com/havenhq/revideo/commit/15adb3e312a4998b44c0b9c5fe5b5236f51c71c9)), closes [#455](https://github.com/havenhq/revideo/issues/455)
* **2d:** add querying helpers ([#852](https://github.com/havenhq/revideo/issues/852)) ([614de6b](https://github.com/havenhq/revideo/commit/614de6bd8542322d1db4b123b875f6fad85cc4eb))
* **2d:** add Ray node ([#628](https://github.com/havenhq/revideo/issues/628)) ([649447c](https://github.com/havenhq/revideo/commit/649447cd5f2089afc64cc7bd4b0276e69d1e9a30))
* **2d:** add save and restore methods to nodes ([#406](https://github.com/havenhq/revideo/issues/406)) ([870e194](https://github.com/havenhq/revideo/commit/870e1947d97382bc6d82857c077140bbef7cf7e8))
* **2d:** add skew property ([#803](https://github.com/havenhq/revideo/issues/803)) ([eff7c7b](https://github.com/havenhq/revideo/commit/eff7c7be0c013139140b398350242457736d48c7))
* **2d:** add smooth corners and sharpness to rect ([#310](https://github.com/havenhq/revideo/issues/310)) ([f7fbefd](https://github.com/havenhq/revideo/commit/f7fbefd27f7f6972cfb5a45a68e5d0aed9593ae4))
* **2d:** add spline node ([#514](https://github.com/havenhq/revideo/issues/514)) ([3ce2111](https://github.com/havenhq/revideo/commit/3ce2111309e698450dc4c6e2ad47024995863e73))
* **2d:** add start and end signals to Grid node ([#761](https://github.com/havenhq/revideo/issues/761)) ([e37ea80](https://github.com/havenhq/revideo/commit/e37ea806b94e93c6324d8e1b502468925b731e8e))
* **2d:** add SVG component ([#763](https://github.com/havenhq/revideo/issues/763)) ([8eadc11](https://github.com/havenhq/revideo/commit/8eadc11937d4201545894f2f5b204d477a3f9094))
* **2d:** add textAlign property ([#451](https://github.com/havenhq/revideo/issues/451)) ([3d15825](https://github.com/havenhq/revideo/commit/3d15825f3cc5a35ba081a31510741b824f3bc6ab)), closes [#303](https://github.com/havenhq/revideo/issues/303)
* **2d:** add video component property getter ([#240](https://github.com/havenhq/revideo/issues/240)) ([59de5ab](https://github.com/havenhq/revideo/commit/59de5ab2c089589773a2f9ad7588eda7d72693a7))
* **2d:** add z-index property to nodes ([#398](https://github.com/havenhq/revideo/issues/398)) ([4280af3](https://github.com/havenhq/revideo/commit/4280af3b4b7bd5970fe5e743949a0fcca2c314f3))
* **2d:** always clip images and videos ([#773](https://github.com/havenhq/revideo/issues/773)) ([3938c59](https://github.com/havenhq/revideo/commit/3938c59394bfc42e5562504687d783ff306d7d32))
* **2d:** clamp opacity value between 0 and 1 ([#835](https://github.com/havenhq/revideo/issues/835)) ([c54b2f8](https://github.com/havenhq/revideo/commit/c54b2f837a8e8b872df3610f4cc6caa94a728500)), closes [#830](https://github.com/havenhq/revideo/issues/830)
* **2d:** code bounding box helpers ([#948](https://github.com/havenhq/revideo/issues/948)) ([0ffd56f](https://github.com/havenhq/revideo/commit/0ffd56f5f8076913e687e5b908311aa7832d8b7b))
* **2d:** code range helpers ([#947](https://github.com/havenhq/revideo/issues/947)) ([044c9ac](https://github.com/havenhq/revideo/commit/044c9acd6ee7e4e337fb4d51286126f583a8da6f))
* **2d:** code selection and modification ([#163](https://github.com/havenhq/revideo/issues/163)) ([e8e884a](https://github.com/havenhq/revideo/commit/e8e884a1a5574425dbf15272718911c12cfa2327))
* **2d:** construct lines using signals ([#133](https://github.com/havenhq/revideo/issues/133)) ([2968a24](https://github.com/havenhq/revideo/commit/2968a2426564469fb4f4343fe71a6d30e95361f2))
* **2d:** immediate restore ([#736](https://github.com/havenhq/revideo/issues/736)) ([634d51d](https://github.com/havenhq/revideo/commit/634d51d2afe8a536673c364874f8f3d1a450b846))
* **2d:** improve property declarations ([27e7d26](https://github.com/havenhq/revideo/commit/27e7d267ee91bf1e8ca79686b6ec31347f9f4d41))
* **2d:** improve Rect corner radius ([#120](https://github.com/havenhq/revideo/issues/120)) ([b471fe0](https://github.com/havenhq/revideo/commit/b471fe0e37c0a426d3af8299c9c3c22539e7df05))
* **2d:** improve Video node ([#601](https://github.com/havenhq/revideo/issues/601)) ([3801d83](https://github.com/havenhq/revideo/commit/3801d83415bbdeeee5d6d53d0c18e5d9e78fba56))
* **2d:** make `View2D` extend `Rect` ([#379](https://github.com/havenhq/revideo/issues/379)) ([93db5fc](https://github.com/havenhq/revideo/commit/93db5fc41617c0902e85fda90fbfc930c2b4634b))
* **2d:** make Circle extend Curve ([#771](https://github.com/havenhq/revideo/issues/771)) ([4c8cf19](https://github.com/havenhq/revideo/commit/4c8cf1954093958eac507921dc18f67dd64b2052))
* **2d:** make Polygon extend Curve ([#961](https://github.com/havenhq/revideo/issues/961)) ([739c9fc](https://github.com/havenhq/revideo/commit/739c9fccbc101f8b2eed680a11c00f317fdc4dd3))
* **2d:** make Rect extend Curve ([#759](https://github.com/havenhq/revideo/issues/759)) ([9810212](https://github.com/havenhq/revideo/commit/9810212648824b9a2fa2ecd6b597e3319d20b325))
* **2d:** nested Txt nodes ([#861](https://github.com/havenhq/revideo/issues/861)) ([f2786d0](https://github.com/havenhq/revideo/commit/f2786d0cd0d06065ca1e9eb9f6b4c11a74b6c283)), closes [#540](https://github.com/havenhq/revideo/issues/540)
* **2d:** simplify layout prop ([c24cb12](https://github.com/havenhq/revideo/commit/c24cb12a22b7c85fdfb051917fa9ee1e0911717c))
* **2d:** support HMR for images ([#641](https://github.com/havenhq/revideo/issues/641)) ([cf17520](https://github.com/havenhq/revideo/commit/cf17520aa8ddf19dcfc419c63cf7255892d45b71))
* **2d:** support letter spacing in Code ([#955](https://github.com/havenhq/revideo/issues/955)) ([2a87c37](https://github.com/havenhq/revideo/commit/2a87c37c832de86c4b524b33fd68806627daec8b))
* **2d:** support tweening in applyState ([#859](https://github.com/havenhq/revideo/issues/859)) ([b7ed2e2](https://github.com/havenhq/revideo/commit/b7ed2e24773227e5b576ff056eb23de9b9ff1676))
* **2d:** support tweening Line points ([#853](https://github.com/havenhq/revideo/issues/853)) ([4bf37d7](https://github.com/havenhq/revideo/commit/4bf37d74d2e4bb9d9cc034aff121a32da9a6d146))
* **2d:** unify desired sizes ([#118](https://github.com/havenhq/revideo/issues/118)) ([401a799](https://github.com/havenhq/revideo/commit/401a79946b034a96b9abff2f3fb5efd6cc9080f3))
* **2d:** unify layout properties ([#355](https://github.com/havenhq/revideo/issues/355)) ([3cae97e](https://github.com/havenhq/revideo/commit/3cae97ea704d0533020fa87326dacadcc037d517)), closes [#352](https://github.com/havenhq/revideo/issues/352)
* **2d:** warn about missing image source ([#817](https://github.com/havenhq/revideo/issues/817)) ([6dcdb5f](https://github.com/havenhq/revideo/commit/6dcdb5f3b83d4860b1557e4745972e0af68f92f3))
* add advanced caching ([#69](https://github.com/havenhq/revideo/issues/69)) ([2a644c9](https://github.com/havenhq/revideo/commit/2a644c9315acfcc5280a5eacc9904df140a61e4f))
* add base class for shapes ([#67](https://github.com/havenhq/revideo/issues/67)) ([d38c172](https://github.com/havenhq/revideo/commit/d38c1724e129c553739cbfc27c4e5cd8f737f067))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add cloning ([#80](https://github.com/havenhq/revideo/issues/80)) ([47d7a0f](https://github.com/havenhq/revideo/commit/47d7a0fa5da9a03d8ed91557db651f6f960e28b1))
* add CodeBlock component based on code-fns to 2D ([#78](https://github.com/havenhq/revideo/issues/78)) ([ad346f1](https://github.com/havenhq/revideo/commit/ad346f118d63b1e321ec315e1c70b925670124a1))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add default renderer ([#63](https://github.com/havenhq/revideo/issues/63)) ([9255490](https://github.com/havenhq/revideo/commit/92554900965fe088538f5e703dbab2fd84f904d7)), closes [#56](https://github.com/havenhq/revideo/issues/56) [#58](https://github.com/havenhq/revideo/issues/58)
* add DEG2RAD and RAD2DEG constants ([#630](https://github.com/havenhq/revideo/issues/630)) ([01801e8](https://github.com/havenhq/revideo/commit/01801e8766058e75a6a020400650fb00f8f430cc))
* add Grid node ([e1f83da](https://github.com/havenhq/revideo/commit/e1f83da1f43d20d392df4acb11e3df9cc457585d))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add middle cardinal point ([#758](https://github.com/havenhq/revideo/issues/758)) ([b036eaf](https://github.com/havenhq/revideo/commit/b036eafc00381831c08267a78cf9d74973f4025a))
* add missing flexbox properties ([#405](https://github.com/havenhq/revideo/issues/405)) ([4e78b4b](https://github.com/havenhq/revideo/commit/4e78b4b2fe4df42ce0a8da6fd41ad38b0104e7f5))
* add missing layout props ([#72](https://github.com/havenhq/revideo/issues/72)) ([f808a56](https://github.com/havenhq/revideo/commit/f808a562b192fd03dba4b0d353284db344d6a80b))
* add node spawners ([#149](https://github.com/havenhq/revideo/issues/149)) ([da18a4e](https://github.com/havenhq/revideo/commit/da18a4e24104022a84ecd6cec1666b520186058f))
* add polyline ([#84](https://github.com/havenhq/revideo/issues/84)) ([4ceaf84](https://github.com/havenhq/revideo/commit/4ceaf842915ac43d81f292c58a4dc73a8d1bb8e9))
* add random number generator ([#116](https://github.com/havenhq/revideo/issues/116)) ([d505312](https://github.com/havenhq/revideo/commit/d5053123eef308c7a2a61d92b6e76c637f4ed0b8)), closes [#14](https://github.com/havenhq/revideo/issues/14)
* add reparent helper ([80b95a9](https://github.com/havenhq/revideo/commit/80b95a9ce89d4a2eeea7e467257486e961602d69))
* add Text and Image components ([#70](https://github.com/havenhq/revideo/issues/70)) ([85c7dcd](https://github.com/havenhq/revideo/commit/85c7dcdb4f8ca2f0bfb03950c85a8d6f6652fcdf))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/havenhq/revideo/issues/9)) ([9e0d67b](https://github.com/havenhq/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* added a theme property to the CodeBlock component ([#279](https://github.com/havenhq/revideo/issues/279)) ([fe34fa8](https://github.com/havenhq/revideo/commit/fe34fa8ebfe66cd356fb1c3d85adedef11e03b45))
* better children and spawners ([#858](https://github.com/havenhq/revideo/issues/858)) ([9b5c23d](https://github.com/havenhq/revideo/commit/9b5c23d2076180cf710656c817369a07b253e3ec))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* convert built-in types to webgl ([#929](https://github.com/havenhq/revideo/issues/929)) ([a0f0b7d](https://github.com/havenhq/revideo/commit/a0f0b7d8996547e1a316097422ec02bddeeccec6))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* **core:** tree shaking ([#523](https://github.com/havenhq/revideo/issues/523)) ([65fec78](https://github.com/havenhq/revideo/commit/65fec7825fda33812b13f57bfeb1d82193a5d190))
* **docs:** fiddle editor ([#542](https://github.com/havenhq/revideo/issues/542)) ([3c68fef](https://github.com/havenhq/revideo/commit/3c68fefdf7bf375ee9345aba7dbf9e5ff35e3c3d))
* encode video with wasm ([#162](https://github.com/havenhq/revideo/issues/162)) ([c756fd8](https://github.com/havenhq/revideo/commit/c756fd8293d49b8abc8887c94bfb8f0d04e65842))
* export everything from entry points ([#710](https://github.com/havenhq/revideo/issues/710)) ([3c885d9](https://github.com/havenhq/revideo/commit/3c885d9083b52fbbaccf1e2560ae50817949bc52))
* extract frames using webcodecs ([#156](https://github.com/havenhq/revideo/issues/156)) ([7bb63d9](https://github.com/havenhq/revideo/commit/7bb63d94086f91d734e0a895489fad1d5c4b2478))
* filter reordering ([#119](https://github.com/havenhq/revideo/issues/119)) ([2398d0f](https://github.com/havenhq/revideo/commit/2398d0f9d57f36b47c9c66a988ca5607e9a3a30e))
* implement absolute scale setter ([842079a](https://github.com/havenhq/revideo/commit/842079a6547af4032719c85837df3db7c1c6d30a))
* improve async signals ([#156](https://github.com/havenhq/revideo/issues/156)) ([db27b9d](https://github.com/havenhq/revideo/commit/db27b9d5fb69a88f42afd98c86c4a1cdceb88ea1))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* improve image error handling ([#847](https://github.com/havenhq/revideo/issues/847)) ([db09d53](https://github.com/havenhq/revideo/commit/db09d5305a3c0507b035e3cd347eaa65b23d7d2e))
* introduce basic caching ([#68](https://github.com/havenhq/revideo/issues/68)) ([6420d36](https://github.com/havenhq/revideo/commit/6420d362d0e4ae058f55b6ff6bb2a3a32dec559b))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make transparent video optional ([#91](https://github.com/havenhq/revideo/issues/91)) ([6a052d5](https://github.com/havenhq/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* merge properties and signals ([#124](https://github.com/havenhq/revideo/issues/124)) ([da3ba83](https://github.com/havenhq/revideo/commit/da3ba83d82ee74f5a5c3631b07597f08cdf9e8e4))
* minor improvements ([403c7c2](https://github.com/havenhq/revideo/commit/403c7c27ad969880a14c498ec6cefb9e7e7b7544))
* minor improvements ([#77](https://github.com/havenhq/revideo/issues/77)) ([7c6e584](https://github.com/havenhq/revideo/commit/7c6e584aca353c9af55f0acb61b32b5f99727dba))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* new animator ([#91](https://github.com/havenhq/revideo/issues/91)) ([d85f2f8](https://github.com/havenhq/revideo/commit/d85f2f8a54c0f8bbfbc451884385f30e5b3ec206))
* new Code node ([#946](https://github.com/havenhq/revideo/issues/946)) ([26e55a3](https://github.com/havenhq/revideo/commit/26e55a37c416fb1313c8aadf40eed2824b45d330))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/havenhq/revideo/issues/33)) ([a6e1bcd](https://github.com/havenhq/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* serve assets through cli ([#124](https://github.com/havenhq/revideo/issues/124)) ([fdccde1](https://github.com/havenhq/revideo/commit/fdccde12f058811382e7e2084ebe4b9e05af1b80))
* signal error handling ([#89](https://github.com/havenhq/revideo/issues/89)) ([472ac65](https://github.com/havenhq/revideo/commit/472ac65938b804a6b698c8522ec0c3b6bdbcf1b1))
* simplify size access ([#65](https://github.com/havenhq/revideo/issues/65)) ([3315e64](https://github.com/havenhq/revideo/commit/3315e64641e9778bc48ea3fb707e3c0eeb581dfe))
* simplify size access further ([#66](https://github.com/havenhq/revideo/issues/66)) ([9091a5e](https://github.com/havenhq/revideo/commit/9091a5e05d8fadf72c50832c7c4467ac4424b72c))
* support hls video ([#160](https://github.com/havenhq/revideo/issues/160)) ([deff17d](https://github.com/havenhq/revideo/commit/deff17dd0899059727f88213207bfa942041243b))
* switch to signals ([#64](https://github.com/havenhq/revideo/issues/64)) ([d22d237](https://github.com/havenhq/revideo/commit/d22d23728597e6fa82ea5c5a99a6c0a56819bded))
* transparent video ([#75](https://github.com/havenhq/revideo/issues/75)) ([5f7b909](https://github.com/havenhq/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))
* turn Layout into node ([#75](https://github.com/havenhq/revideo/issues/75)) ([cdf8dc0](https://github.com/havenhq/revideo/commit/cdf8dc0a35522482dee2dd78a69606b79f52246e))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** scene graph icons ([#914](https://github.com/havenhq/revideo/issues/914)) ([e92ddef](https://github.com/havenhq/revideo/commit/e92ddef34860f5e710ff0f1a310758ec0ca95bcb))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* unify references and signals ([#137](https://github.com/havenhq/revideo/issues/137)) ([063aede](https://github.com/havenhq/revideo/commit/063aede0842f948d2c6704c6edd426e954bb4668))
* upgrade code-fns for new theme options and lazy loading ([#401](https://github.com/havenhq/revideo/issues/401)) ([8965ab1](https://github.com/havenhq/revideo/commit/8965ab1bef8b6ae919c8001d0527f5793293b285)), closes [#396](https://github.com/havenhq/revideo/issues/396) [#322](https://github.com/havenhq/revideo/issues/322)
* use ES modules in fiddles ([#712](https://github.com/havenhq/revideo/issues/712)) ([dbe2ad5](https://github.com/havenhq/revideo/commit/dbe2ad5644219c5a98d38c6557abfb66d793c821))
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))
* world space cache ([#498](https://github.com/havenhq/revideo/issues/498)) ([633e9e1](https://github.com/havenhq/revideo/commit/633e9e140dfbbe397df6ddc1f96ed30782ddce94)), closes [#342](https://github.com/havenhq/revideo/issues/342)


### Reverts

* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))
* feat: upgrade code-fns for new theme options and lazy loading ([#435](https://github.com/havenhq/revideo/issues/435)) ([3f5e439](https://github.com/havenhq/revideo/commit/3f5e43968f7add7c6322c9c8358d3b6fc178c2fe))


### BREAKING CHANGES

* multiple name changes

To avoid collisions, names of certain classes have changed:
- `Text => Txt`
- `Image => Img`
- `Rect (type) => BBox`

Cache related methods of `Node` have changed:
- `getCacheRect => getCacheBBox`
- `cacheRect => cacheBBox`
- `fullCacheRect => fullCacheBBox`

The `CodeBlock` property has changed:
- `CodeBlock.selectionOpacity => CodeBlock.unselectedOpacity`
* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
* remove legacy package





## 0.4.3 (2024-06-24)


### Bug Fixes

* **2d:** account for offset in cardinal points ([#883](https://github.com/havenhq/revideo/issues/883)) ([24da258](https://github.com/havenhq/revideo/commit/24da258f5937087b363eeb9146a9d22747b02e70)), closes [#882](https://github.com/havenhq/revideo/issues/882)
* **2d:** account for spawners in scene graph ([#935](https://github.com/havenhq/revideo/issues/935)) ([ca325f5](https://github.com/havenhq/revideo/commit/ca325f5ad0ae987e76106f5e65fef3ed7b3ca08d))
* **2d:** add missing Curve properties to Circle ([#805](https://github.com/havenhq/revideo/issues/805)) ([38c7900](https://github.com/havenhq/revideo/commit/38c79000403d7c3c99dde9e4c825a448d5f55054))
* **2d:** add missing Fragment export ([#553](https://github.com/havenhq/revideo/issues/553)) ([229afb4](https://github.com/havenhq/revideo/commit/229afb4fe7d95f09b480ab4a813f8dff549f381f))
* **2d:** add missing jsx dev runtime ([#547](https://github.com/havenhq/revideo/issues/547)) ([d61cb7d](https://github.com/havenhq/revideo/commit/d61cb7dd24ab66ae17d5bd6f5ccb34c4fd1e7569)), closes [#545](https://github.com/havenhq/revideo/issues/545)
* **2d:** add missing middle property ([#891](https://github.com/havenhq/revideo/issues/891)) ([61e2e96](https://github.com/havenhq/revideo/commit/61e2e96e3b8f37a68ebdddb432baba04858fd4f3))
* **2d:** add missing shape export ([#111](https://github.com/havenhq/revideo/issues/111)) ([02a1fa7](https://github.com/havenhq/revideo/commit/02a1fa7ea62155e498809f2e57ff29a18c82ac12))
* **2d:** better error handling ([#524](https://github.com/havenhq/revideo/issues/524)) ([b7475ba](https://github.com/havenhq/revideo/commit/b7475ba5ff35d37ee198577d1205d6ecd6fd2092))
* **2d:** calculate arrow orientations for curves correctly ([#597](https://github.com/havenhq/revideo/issues/597)) ([1626811](https://github.com/havenhq/revideo/commit/1626811ec4cd1bd2a3d43e393ced40a7da462c3a))
* **2d:** calculate Txt cache bbox from contents ([#836](https://github.com/havenhq/revideo/issues/836)) ([33e1a12](https://github.com/havenhq/revideo/commit/33e1a1296f21d26e9ed45ae92132825dca17054d)), closes [#465](https://github.com/havenhq/revideo/issues/465)
* **2d:** clone size correctly ([#562](https://github.com/havenhq/revideo/issues/562)) ([cdd3df1](https://github.com/havenhq/revideo/commit/cdd3df1bff25b04b905e289264831d8d328caaab)), closes [#559](https://github.com/havenhq/revideo/issues/559)
* **2d:** correct layout defaults ([#442](https://github.com/havenhq/revideo/issues/442)) ([c116c35](https://github.com/havenhq/revideo/commit/c116c355179ba3b2487634fb82b9a5bc2ea266bf))
* **2d:** correctly append Txt nodes to view ([#644](https://github.com/havenhq/revideo/issues/644)) ([24bb51a](https://github.com/havenhq/revideo/commit/24bb51aa04778c33ce327926b27332efaa554e5f))
* **2d:** correctly support external image urls ([#678](https://github.com/havenhq/revideo/issues/678)) ([a08556b](https://github.com/havenhq/revideo/commit/a08556b6e2822a55db593f610ea4dd6cb8494adb)), closes [#677](https://github.com/havenhq/revideo/issues/677)
* **2d:** fix cache bbox for lines ([#467](https://github.com/havenhq/revideo/issues/467)) ([9fd1444](https://github.com/havenhq/revideo/commit/9fd144417bb0b6301da6c522a988775f5ff142ac)), closes [#466](https://github.com/havenhq/revideo/issues/466)
* **2d:** fix circle segment ([#557](https://github.com/havenhq/revideo/issues/557)) ([adebff4](https://github.com/havenhq/revideo/commit/adebff492b76a512d79151b00adf1b383d25c5b5))
* **2d:** fix CodeBlock types ([#563](https://github.com/havenhq/revideo/issues/563)) ([25160fa](https://github.com/havenhq/revideo/commit/25160fa4d92af88429110356e42f6e3b4f88a90f)), closes [#560](https://github.com/havenhq/revideo/issues/560)
* **2d:** fix curve arrow alignment when animating start signal ([#615](https://github.com/havenhq/revideo/issues/615)) ([2fefc40](https://github.com/havenhq/revideo/commit/2fefc4026050159ba204c7629832ad83e8bfa51b))
* **2d:** fix cyclic dependency in cardinal points ([#645](https://github.com/havenhq/revideo/issues/645)) ([def23f9](https://github.com/havenhq/revideo/commit/def23f925ee7200c8740ecd51c7f6117d67b6ef8))
* **2d:** fix font ligatures in CodeBlock ([#231](https://github.com/havenhq/revideo/issues/231)) ([11ee3fe](https://github.com/havenhq/revideo/commit/11ee3fef5ad878313cf19833df6881333ced4dac))
* **2d:** fix Gradient and Pattern signals ([#376](https://github.com/havenhq/revideo/issues/376)) ([6e0dc8a](https://github.com/havenhq/revideo/commit/6e0dc8af8d19f93fd6a42addca2b3a2958b4dd33))
* **2d:** fix height when tweening text ([#905](https://github.com/havenhq/revideo/issues/905)) ([1c6a796](https://github.com/havenhq/revideo/commit/1c6a7965be137c1ab69741cdd1e9aaa6df4208c4))
* **2d:** fix import order ([#94](https://github.com/havenhq/revideo/issues/94)) ([bcc0bcf](https://github.com/havenhq/revideo/commit/bcc0bcffae47855bd8f7ab06454aaebe93c4aa24)), closes [#76](https://github.com/havenhq/revideo/issues/76)
* **2d:** fix initial value of endOffset ([#433](https://github.com/havenhq/revideo/issues/433)) ([9fe82b3](https://github.com/havenhq/revideo/commit/9fe82b3d21ba0150a2378e541a4652ca707c2d15))
* **2d:** fix layout calculation for nodes not explicitly added to view ([#331](https://github.com/havenhq/revideo/issues/331)) ([528e2d5](https://github.com/havenhq/revideo/commit/528e2d5a0abec99819e022d2848b256ece9f869a))
* **2d:** fix letterSpacing ([#448](https://github.com/havenhq/revideo/issues/448)) ([bb5ffc4](https://github.com/havenhq/revideo/commit/bb5ffc48efa82b9db818e8e52aa35e9c2ad8ce89)), closes [#447](https://github.com/havenhq/revideo/issues/447)
* **2d:** fix line arc length ([#503](https://github.com/havenhq/revideo/issues/503)) ([4f1cd59](https://github.com/havenhq/revideo/commit/4f1cd59e6bcba0b16b36be88b28a60ae46d4d9ab)), closes [#497](https://github.com/havenhq/revideo/issues/497)
* **2d:** fix Line cache ([#232](https://github.com/havenhq/revideo/issues/232)) ([a953b64](https://github.com/havenhq/revideo/commit/a953b64540c020657845efc84d4179142a7a0974)), closes [#205](https://github.com/havenhq/revideo/issues/205)
* **2d:** fix line jitter under certain conditions ([#863](https://github.com/havenhq/revideo/issues/863)) ([fb110a2](https://github.com/havenhq/revideo/commit/fb110a2f3583fc040bf2c39560934162bd146d9b))
* **2d:** fix Line overview crashing ([#142](https://github.com/havenhq/revideo/issues/142)) ([6bd5fd9](https://github.com/havenhq/revideo/commit/6bd5fd941e583e44f5d920ecd20215efb1eed58a))
* **2d:** fix nested cache canvases ([#554](https://github.com/havenhq/revideo/issues/554)) ([e601441](https://github.com/havenhq/revideo/commit/e6014413b215af6fb1a7953f8db83893d4025f0b)), closes [#551](https://github.com/havenhq/revideo/issues/551)
* **2d:** fix package.json entry ([#720](https://github.com/havenhq/revideo/issues/720)) ([12e9bf6](https://github.com/havenhq/revideo/commit/12e9bf6f40ab7afc02e2f55260544f3864920ded))
* **2d:** fix signal initialization ([#382](https://github.com/havenhq/revideo/issues/382)) ([ea36e79](https://github.com/havenhq/revideo/commit/ea36e791a20bfd1b491ffa9917be686c51bc3899))
* **2d:** fix tweening cardinal points ([#829](https://github.com/havenhq/revideo/issues/829)) ([cc16737](https://github.com/havenhq/revideo/commit/cc16737cd59081582fbb488a880e8d3c11c14918))
* **2d:** fix Txt decorators ([#526](https://github.com/havenhq/revideo/issues/526)) ([25b30ed](https://github.com/havenhq/revideo/commit/25b30ed3861f46d72147335480912ce5f564be79))
* **2d:** fix types ([#659](https://github.com/havenhq/revideo/issues/659)) ([a32af29](https://github.com/havenhq/revideo/commit/a32af29ef3bd2e5dbf08697ebfee53230fceadc1))
* **2d:** format whitespaces according to HTML ([#372](https://github.com/havenhq/revideo/issues/372)) ([83fb565](https://github.com/havenhq/revideo/commit/83fb565742d98f060c0400c8cbaf9961b69f34d0)), closes [#370](https://github.com/havenhq/revideo/issues/370)
* **2d:** handle division by zero in lines ([#407](https://github.com/havenhq/revideo/issues/407)) ([a17871a](https://github.com/havenhq/revideo/commit/a17871a2ce63dd5bb32bc719037327c4e9dde217))
* **2d:** handle floating point errors in acos ([#381](https://github.com/havenhq/revideo/issues/381)) ([5bca8fd](https://github.com/havenhq/revideo/commit/5bca8fd0bbdcf28f2793c124b7d6b0afd560c4b8))
* **2d:** handle lines with no points ([#233](https://github.com/havenhq/revideo/issues/233)) ([8108474](https://github.com/havenhq/revideo/commit/81084743dfad7b6419760796fda825047909d4d4)), closes [#212](https://github.com/havenhq/revideo/issues/212)
* **2d:** ignore children with disabled layout ([#669](https://github.com/havenhq/revideo/issues/669)) ([b98c462](https://github.com/havenhq/revideo/commit/b98c4625c3634495e86ca23d19355035e457db06)), closes [#580](https://github.com/havenhq/revideo/issues/580)
* **2d:** improve Curve hitbox ([#778](https://github.com/havenhq/revideo/issues/778)) ([8af723c](https://github.com/havenhq/revideo/commit/8af723c0322de39d2defe0363bba03f4f9542f08))
* **2d:** improve Rect radius ([#221](https://github.com/havenhq/revideo/issues/221)) ([3437e42](https://github.com/havenhq/revideo/commit/3437e42713a3f4a8d44d246ee01e2eb23b61e06a)), closes [#207](https://github.com/havenhq/revideo/issues/207)
* **2d:** make Text respect textWrap=pre ([#287](https://github.com/havenhq/revideo/issues/287)) ([cb07f4b](https://github.com/havenhq/revideo/commit/cb07f4bdf07edc8a086b934ca5ab769682b9a010))
* **2d:** minor fixes ([#915](https://github.com/havenhq/revideo/issues/915)) ([63cfc9e](https://github.com/havenhq/revideo/commit/63cfc9e033f2c2ac6d6ed2a0d8f615fcf642ab59))
* **2d:** point arrow heads in correct direction ([#792](https://github.com/havenhq/revideo/issues/792)) ([52ed52e](https://github.com/havenhq/revideo/commit/52ed52e963cc69a066a0353680acaca35b9c937a)), closes [#783](https://github.com/havenhq/revideo/issues/783)
* **2d:** prevent src warnings in Icon and Latex ([#899](https://github.com/havenhq/revideo/issues/899)) ([5eebab7](https://github.com/havenhq/revideo/commit/5eebab71d8061e233872e049e77b847f9fd077a1))
* **2d:** remove circular dependencies ([#780](https://github.com/havenhq/revideo/issues/780)) ([cdf3af5](https://github.com/havenhq/revideo/commit/cdf3af500a58151ee3549c6e728751aab3e6f75c))
* **2d:** smoothly play videos when presenting ([#600](https://github.com/havenhq/revideo/issues/600)) ([294fe6a](https://github.com/havenhq/revideo/commit/294fe6ac056ab074c77214fcf9035f53fac9258c)), closes [#578](https://github.com/havenhq/revideo/issues/578)
* **2d:** some signal setters not returning owners ([#143](https://github.com/havenhq/revideo/issues/143)) ([09ab7f9](https://github.com/havenhq/revideo/commit/09ab7f96afcaae608399a653c0b4878ba9b467d4))
* **2d:** stop code highlighting from jumping ([#230](https://github.com/havenhq/revideo/issues/230)) ([67ef1c4](https://github.com/havenhq/revideo/commit/67ef1c497056dd1f8f9e20d1d7fc1af03ec3849e))
* **2d:** stop mutating children ([#903](https://github.com/havenhq/revideo/issues/903)) ([f9552a8](https://github.com/havenhq/revideo/commit/f9552a8658ccde6c7b2466ad40b12cf28c6ec805))
* **2d:** switch iframes to ShadowDOM ([#90](https://github.com/havenhq/revideo/issues/90)) ([86176be](https://github.com/havenhq/revideo/commit/86176be055c08aba59272afcda00ed586f6c7ad6))
* **2d:** textDirection property for RTL/LTR text ([#404](https://github.com/havenhq/revideo/issues/404)) ([f240b1b](https://github.com/havenhq/revideo/commit/f240b1bd140a884f6901b7cfcb97ce3e9ce4b48d))
* **2d:** textWrap not working in Firefox ([#541](https://github.com/havenhq/revideo/issues/541)) ([f10e057](https://github.com/havenhq/revideo/commit/f10e057fd13ed9dcc70ebc0ca63963708ec159c8)), closes [#517](https://github.com/havenhq/revideo/issues/517)
* **2d:** wait for reused async resources ([#599](https://github.com/havenhq/revideo/issues/599)) ([280e065](https://github.com/havenhq/revideo/commit/280e065fe69e9a744b7b12eb4609e7d87f76bb63)), closes [#593](https://github.com/havenhq/revideo/issues/593)
* account for italic fonts in cache ([#968](https://github.com/havenhq/revideo/issues/968)) ([abb0906](https://github.com/havenhq/revideo/commit/abb090695c4257d9877d0cb11954093c49149ddc)), closes [#934](https://github.com/havenhq/revideo/issues/934)
* await font load before drawing ([#31](https://github.com/havenhq/revideo/issues/31)) ([cbfb5cb](https://github.com/havenhq/revideo/commit/cbfb5cb136d85a657c99187da166b64aae8be3a1))
* await font load without throwing async node error ([#69](https://github.com/havenhq/revideo/issues/69)) ([fddebe6](https://github.com/havenhq/revideo/commit/fddebe60a610af718c880b9e198eebe8555ea9a5))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/havenhq/revideo/issues/62)) ([04cdc5b](https://github.com/havenhq/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* **ffmpeg:** looping of video tag ([#122](https://github.com/havenhq/revideo/issues/122)) ([109c675](https://github.com/havenhq/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* fix compound property setter ([#218](https://github.com/havenhq/revideo/issues/218)) ([6cd1b95](https://github.com/havenhq/revideo/commit/6cd1b952df950554eb637c9f8e82947c415d00c5)), closes [#208](https://github.com/havenhq/revideo/issues/208) [#210](https://github.com/havenhq/revideo/issues/210)
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* offset bug ([#157](https://github.com/havenhq/revideo/issues/157)) ([1ddaa4f](https://github.com/havenhq/revideo/commit/1ddaa4fbd500d3d3031a201261de651e6dbd5752))
* plug memory leaks ([#385](https://github.com/havenhq/revideo/issues/385)) ([de0af00](https://github.com/havenhq/revideo/commit/de0af00a7d2e019e2a933791c62b7901755be7b0))
* prevent consumePromises from halting ([#657](https://github.com/havenhq/revideo/issues/657)) ([363a189](https://github.com/havenhq/revideo/commit/363a189b0c7f5926c9d5ae00b58b48e8ed4d9b48))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* previous scene being rendered twice ([#97](https://github.com/havenhq/revideo/issues/97)) ([90205bd](https://github.com/havenhq/revideo/commit/90205bdc1a086abe5f73b04cb4616c6af5ec4377))
* restrict size of cache canvas ([#544](https://github.com/havenhq/revideo/issues/544)) ([49ec554](https://github.com/havenhq/revideo/commit/49ec55490718e503d9a39437ae13c189dc4fe9ea))
* support color to null tweening ([#387](https://github.com/havenhq/revideo/issues/387)) ([02e9f22](https://github.com/havenhq/revideo/commit/02e9f22027a1c3a85ffcc259aeca913318fb6f54))
* support legacy imports again ([#868](https://github.com/havenhq/revideo/issues/868)) ([77c4e2e](https://github.com/havenhq/revideo/commit/77c4e2eeb8b0f73bdef1f72e3d81f34c79748929))
* support multiple async players ([#450](https://github.com/havenhq/revideo/issues/450)) ([d7ec469](https://github.com/havenhq/revideo/commit/d7ec469e747eefd909f4dd59dd713f5d86308222)), closes [#434](https://github.com/havenhq/revideo/issues/434)
* typo on codeblock remove comments ([#368](https://github.com/havenhq/revideo/issues/368)) ([2025adc](https://github.com/havenhq/revideo/commit/2025adc6e7aa11d81b6f5f6989e8eae18cf86cb7))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Code Refactoring

* introduce improved names ([#425](https://github.com/havenhq/revideo/issues/425)) ([4a2188d](https://github.com/havenhq/revideo/commit/4a2188d339587fa658b2134befc3fe63c835c5d7))
* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* **2d:** add antialiased signal to Shape ([#282](https://github.com/havenhq/revideo/issues/282)) ([7c6905d](https://github.com/havenhq/revideo/commit/7c6905d72c6c2f49e10f0a80704c0afe3504d01b))
* **2d:** add arcLength helper methods to Curve ([#627](https://github.com/havenhq/revideo/issues/627)) ([3c7546e](https://github.com/havenhq/revideo/commit/3c7546e7a509deb6fff8f669c3df0a69b492bd2e))
* **2d:** add Bézier nodes ([#603](https://github.com/havenhq/revideo/issues/603)) ([9841cfd](https://github.com/havenhq/revideo/commit/9841cfdc3947ca4e6d6e42ed21eae88e855f855d))
* **2d:** add cardinal points ([#636](https://github.com/havenhq/revideo/issues/636)) ([2136a25](https://github.com/havenhq/revideo/commit/2136a2558a9ed968ee505e4e5cce33d989dfdc13)), closes [#391](https://github.com/havenhq/revideo/issues/391)
* **2d:** add closed property for circle ([#378](https://github.com/havenhq/revideo/issues/378)) ([62a9605](https://github.com/havenhq/revideo/commit/62a9605d4c54e7bf2d2d44d47bf769f5b27378a5))
* **2d:** add completion property for curves ([#635](https://github.com/havenhq/revideo/issues/635)) ([6577d6d](https://github.com/havenhq/revideo/commit/6577d6ddfaf779ba02f3862d2a357166138b99ca))
* **2d:** add default computed values for signals ([#259](https://github.com/havenhq/revideo/issues/259)) ([18f61a6](https://github.com/havenhq/revideo/commit/18f61a668420dec8afba52d52a6557e7a7919ba2))
* **2d:** add Icon Component ([#306](https://github.com/havenhq/revideo/issues/306)) ([3479631](https://github.com/havenhq/revideo/commit/3479631ef34e39f90a8d8de441317672be1840d9)), closes [#305](https://github.com/havenhq/revideo/issues/305)
* **2d:** add LaTeX component ([#228](https://github.com/havenhq/revideo/issues/228)) ([4c26d2a](https://github.com/havenhq/revideo/commit/4c26d2aaf0c697486639aa917cd5c585d3d0ea74))
* **2d:** add line counter for CodeBlock ([#802](https://github.com/havenhq/revideo/issues/802)) ([c3f9676](https://github.com/havenhq/revideo/commit/c3f9676b6984731a09a44ab0b1fcfc226975fa08))
* **2d:** add methods for rearranging children ([#81](https://github.com/havenhq/revideo/issues/81)) ([63f6c1a](https://github.com/havenhq/revideo/commit/63f6c1aa51ac4ecd093151c8cd30910f2e72bcac))
* **2d:** add moveBelow, moveAbove and moveTo methods to Node ([#365](https://github.com/havenhq/revideo/issues/365)) ([16752a3](https://github.com/havenhq/revideo/commit/16752a3b8ae7461b33d6208a9675729f374e8324))
* **2d:** add option for preformatted text ([#147](https://github.com/havenhq/revideo/issues/147)) ([989be53](https://github.com/havenhq/revideo/commit/989be532d86642e1125bb7fa62a801b09c1b8f26))
* **2d:** add Path component ([#700](https://github.com/havenhq/revideo/issues/700)) ([2128b6b](https://github.com/havenhq/revideo/commit/2128b6bf871cabe19e1abc749f18945c78c01f84))
* **2d:** add playbackRate signal to Video component ([#831](https://github.com/havenhq/revideo/issues/831)) ([5902b82](https://github.com/havenhq/revideo/commit/5902b824b36400876be0ee970e2c6211299faf21)), closes [#711](https://github.com/havenhq/revideo/issues/711)
* **2d:** add Polygon component ([#463](https://github.com/havenhq/revideo/issues/463)) ([15adb3e](https://github.com/havenhq/revideo/commit/15adb3e312a4998b44c0b9c5fe5b5236f51c71c9)), closes [#455](https://github.com/havenhq/revideo/issues/455)
* **2d:** add querying helpers ([#852](https://github.com/havenhq/revideo/issues/852)) ([614de6b](https://github.com/havenhq/revideo/commit/614de6bd8542322d1db4b123b875f6fad85cc4eb))
* **2d:** add Ray node ([#628](https://github.com/havenhq/revideo/issues/628)) ([649447c](https://github.com/havenhq/revideo/commit/649447cd5f2089afc64cc7bd4b0276e69d1e9a30))
* **2d:** add save and restore methods to nodes ([#406](https://github.com/havenhq/revideo/issues/406)) ([870e194](https://github.com/havenhq/revideo/commit/870e1947d97382bc6d82857c077140bbef7cf7e8))
* **2d:** add skew property ([#803](https://github.com/havenhq/revideo/issues/803)) ([eff7c7b](https://github.com/havenhq/revideo/commit/eff7c7be0c013139140b398350242457736d48c7))
* **2d:** add smooth corners and sharpness to rect ([#310](https://github.com/havenhq/revideo/issues/310)) ([f7fbefd](https://github.com/havenhq/revideo/commit/f7fbefd27f7f6972cfb5a45a68e5d0aed9593ae4))
* **2d:** add spline node ([#514](https://github.com/havenhq/revideo/issues/514)) ([3ce2111](https://github.com/havenhq/revideo/commit/3ce2111309e698450dc4c6e2ad47024995863e73))
* **2d:** add start and end signals to Grid node ([#761](https://github.com/havenhq/revideo/issues/761)) ([e37ea80](https://github.com/havenhq/revideo/commit/e37ea806b94e93c6324d8e1b502468925b731e8e))
* **2d:** add SVG component ([#763](https://github.com/havenhq/revideo/issues/763)) ([8eadc11](https://github.com/havenhq/revideo/commit/8eadc11937d4201545894f2f5b204d477a3f9094))
* **2d:** add textAlign property ([#451](https://github.com/havenhq/revideo/issues/451)) ([3d15825](https://github.com/havenhq/revideo/commit/3d15825f3cc5a35ba081a31510741b824f3bc6ab)), closes [#303](https://github.com/havenhq/revideo/issues/303)
* **2d:** add video component property getter ([#240](https://github.com/havenhq/revideo/issues/240)) ([59de5ab](https://github.com/havenhq/revideo/commit/59de5ab2c089589773a2f9ad7588eda7d72693a7))
* **2d:** add z-index property to nodes ([#398](https://github.com/havenhq/revideo/issues/398)) ([4280af3](https://github.com/havenhq/revideo/commit/4280af3b4b7bd5970fe5e743949a0fcca2c314f3))
* **2d:** always clip images and videos ([#773](https://github.com/havenhq/revideo/issues/773)) ([3938c59](https://github.com/havenhq/revideo/commit/3938c59394bfc42e5562504687d783ff306d7d32))
* **2d:** clamp opacity value between 0 and 1 ([#835](https://github.com/havenhq/revideo/issues/835)) ([c54b2f8](https://github.com/havenhq/revideo/commit/c54b2f837a8e8b872df3610f4cc6caa94a728500)), closes [#830](https://github.com/havenhq/revideo/issues/830)
* **2d:** code bounding box helpers ([#948](https://github.com/havenhq/revideo/issues/948)) ([0ffd56f](https://github.com/havenhq/revideo/commit/0ffd56f5f8076913e687e5b908311aa7832d8b7b))
* **2d:** code range helpers ([#947](https://github.com/havenhq/revideo/issues/947)) ([044c9ac](https://github.com/havenhq/revideo/commit/044c9acd6ee7e4e337fb4d51286126f583a8da6f))
* **2d:** code selection and modification ([#163](https://github.com/havenhq/revideo/issues/163)) ([e8e884a](https://github.com/havenhq/revideo/commit/e8e884a1a5574425dbf15272718911c12cfa2327))
* **2d:** construct lines using signals ([#133](https://github.com/havenhq/revideo/issues/133)) ([2968a24](https://github.com/havenhq/revideo/commit/2968a2426564469fb4f4343fe71a6d30e95361f2))
* **2d:** immediate restore ([#736](https://github.com/havenhq/revideo/issues/736)) ([634d51d](https://github.com/havenhq/revideo/commit/634d51d2afe8a536673c364874f8f3d1a450b846))
* **2d:** improve property declarations ([27e7d26](https://github.com/havenhq/revideo/commit/27e7d267ee91bf1e8ca79686b6ec31347f9f4d41))
* **2d:** improve Rect corner radius ([#120](https://github.com/havenhq/revideo/issues/120)) ([b471fe0](https://github.com/havenhq/revideo/commit/b471fe0e37c0a426d3af8299c9c3c22539e7df05))
* **2d:** improve Video node ([#601](https://github.com/havenhq/revideo/issues/601)) ([3801d83](https://github.com/havenhq/revideo/commit/3801d83415bbdeeee5d6d53d0c18e5d9e78fba56))
* **2d:** make `View2D` extend `Rect` ([#379](https://github.com/havenhq/revideo/issues/379)) ([93db5fc](https://github.com/havenhq/revideo/commit/93db5fc41617c0902e85fda90fbfc930c2b4634b))
* **2d:** make Circle extend Curve ([#771](https://github.com/havenhq/revideo/issues/771)) ([4c8cf19](https://github.com/havenhq/revideo/commit/4c8cf1954093958eac507921dc18f67dd64b2052))
* **2d:** make Polygon extend Curve ([#961](https://github.com/havenhq/revideo/issues/961)) ([739c9fc](https://github.com/havenhq/revideo/commit/739c9fccbc101f8b2eed680a11c00f317fdc4dd3))
* **2d:** make Rect extend Curve ([#759](https://github.com/havenhq/revideo/issues/759)) ([9810212](https://github.com/havenhq/revideo/commit/9810212648824b9a2fa2ecd6b597e3319d20b325))
* **2d:** nested Txt nodes ([#861](https://github.com/havenhq/revideo/issues/861)) ([f2786d0](https://github.com/havenhq/revideo/commit/f2786d0cd0d06065ca1e9eb9f6b4c11a74b6c283)), closes [#540](https://github.com/havenhq/revideo/issues/540)
* **2d:** simplify layout prop ([c24cb12](https://github.com/havenhq/revideo/commit/c24cb12a22b7c85fdfb051917fa9ee1e0911717c))
* **2d:** support HMR for images ([#641](https://github.com/havenhq/revideo/issues/641)) ([cf17520](https://github.com/havenhq/revideo/commit/cf17520aa8ddf19dcfc419c63cf7255892d45b71))
* **2d:** support letter spacing in Code ([#955](https://github.com/havenhq/revideo/issues/955)) ([2a87c37](https://github.com/havenhq/revideo/commit/2a87c37c832de86c4b524b33fd68806627daec8b))
* **2d:** support tweening in applyState ([#859](https://github.com/havenhq/revideo/issues/859)) ([b7ed2e2](https://github.com/havenhq/revideo/commit/b7ed2e24773227e5b576ff056eb23de9b9ff1676))
* **2d:** support tweening Line points ([#853](https://github.com/havenhq/revideo/issues/853)) ([4bf37d7](https://github.com/havenhq/revideo/commit/4bf37d74d2e4bb9d9cc034aff121a32da9a6d146))
* **2d:** unify desired sizes ([#118](https://github.com/havenhq/revideo/issues/118)) ([401a799](https://github.com/havenhq/revideo/commit/401a79946b034a96b9abff2f3fb5efd6cc9080f3))
* **2d:** unify layout properties ([#355](https://github.com/havenhq/revideo/issues/355)) ([3cae97e](https://github.com/havenhq/revideo/commit/3cae97ea704d0533020fa87326dacadcc037d517)), closes [#352](https://github.com/havenhq/revideo/issues/352)
* **2d:** warn about missing image source ([#817](https://github.com/havenhq/revideo/issues/817)) ([6dcdb5f](https://github.com/havenhq/revideo/commit/6dcdb5f3b83d4860b1557e4745972e0af68f92f3))
* add advanced caching ([#69](https://github.com/havenhq/revideo/issues/69)) ([2a644c9](https://github.com/havenhq/revideo/commit/2a644c9315acfcc5280a5eacc9904df140a61e4f))
* add base class for shapes ([#67](https://github.com/havenhq/revideo/issues/67)) ([d38c172](https://github.com/havenhq/revideo/commit/d38c1724e129c553739cbfc27c4e5cd8f737f067))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add cloning ([#80](https://github.com/havenhq/revideo/issues/80)) ([47d7a0f](https://github.com/havenhq/revideo/commit/47d7a0fa5da9a03d8ed91557db651f6f960e28b1))
* add CodeBlock component based on code-fns to 2D ([#78](https://github.com/havenhq/revideo/issues/78)) ([ad346f1](https://github.com/havenhq/revideo/commit/ad346f118d63b1e321ec315e1c70b925670124a1))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add default renderer ([#63](https://github.com/havenhq/revideo/issues/63)) ([9255490](https://github.com/havenhq/revideo/commit/92554900965fe088538f5e703dbab2fd84f904d7)), closes [#56](https://github.com/havenhq/revideo/issues/56) [#58](https://github.com/havenhq/revideo/issues/58)
* add DEG2RAD and RAD2DEG constants ([#630](https://github.com/havenhq/revideo/issues/630)) ([01801e8](https://github.com/havenhq/revideo/commit/01801e8766058e75a6a020400650fb00f8f430cc))
* add Grid node ([e1f83da](https://github.com/havenhq/revideo/commit/e1f83da1f43d20d392df4acb11e3df9cc457585d))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add middle cardinal point ([#758](https://github.com/havenhq/revideo/issues/758)) ([b036eaf](https://github.com/havenhq/revideo/commit/b036eafc00381831c08267a78cf9d74973f4025a))
* add missing flexbox properties ([#405](https://github.com/havenhq/revideo/issues/405)) ([4e78b4b](https://github.com/havenhq/revideo/commit/4e78b4b2fe4df42ce0a8da6fd41ad38b0104e7f5))
* add missing layout props ([#72](https://github.com/havenhq/revideo/issues/72)) ([f808a56](https://github.com/havenhq/revideo/commit/f808a562b192fd03dba4b0d353284db344d6a80b))
* add node spawners ([#149](https://github.com/havenhq/revideo/issues/149)) ([da18a4e](https://github.com/havenhq/revideo/commit/da18a4e24104022a84ecd6cec1666b520186058f))
* add polyline ([#84](https://github.com/havenhq/revideo/issues/84)) ([4ceaf84](https://github.com/havenhq/revideo/commit/4ceaf842915ac43d81f292c58a4dc73a8d1bb8e9))
* add random number generator ([#116](https://github.com/havenhq/revideo/issues/116)) ([d505312](https://github.com/havenhq/revideo/commit/d5053123eef308c7a2a61d92b6e76c637f4ed0b8)), closes [#14](https://github.com/havenhq/revideo/issues/14)
* add reparent helper ([80b95a9](https://github.com/havenhq/revideo/commit/80b95a9ce89d4a2eeea7e467257486e961602d69))
* add Text and Image components ([#70](https://github.com/havenhq/revideo/issues/70)) ([85c7dcd](https://github.com/havenhq/revideo/commit/85c7dcdb4f8ca2f0bfb03950c85a8d6f6652fcdf))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/havenhq/revideo/issues/9)) ([9e0d67b](https://github.com/havenhq/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* added a theme property to the CodeBlock component ([#279](https://github.com/havenhq/revideo/issues/279)) ([fe34fa8](https://github.com/havenhq/revideo/commit/fe34fa8ebfe66cd356fb1c3d85adedef11e03b45))
* better children and spawners ([#858](https://github.com/havenhq/revideo/issues/858)) ([9b5c23d](https://github.com/havenhq/revideo/commit/9b5c23d2076180cf710656c817369a07b253e3ec))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* convert built-in types to webgl ([#929](https://github.com/havenhq/revideo/issues/929)) ([a0f0b7d](https://github.com/havenhq/revideo/commit/a0f0b7d8996547e1a316097422ec02bddeeccec6))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* **core:** tree shaking ([#523](https://github.com/havenhq/revideo/issues/523)) ([65fec78](https://github.com/havenhq/revideo/commit/65fec7825fda33812b13f57bfeb1d82193a5d190))
* **docs:** fiddle editor ([#542](https://github.com/havenhq/revideo/issues/542)) ([3c68fef](https://github.com/havenhq/revideo/commit/3c68fefdf7bf375ee9345aba7dbf9e5ff35e3c3d))
* export everything from entry points ([#710](https://github.com/havenhq/revideo/issues/710)) ([3c885d9](https://github.com/havenhq/revideo/commit/3c885d9083b52fbbaccf1e2560ae50817949bc52))
* extract frames using webcodecs ([#156](https://github.com/havenhq/revideo/issues/156)) ([7bb63d9](https://github.com/havenhq/revideo/commit/7bb63d94086f91d734e0a895489fad1d5c4b2478))
* filter reordering ([#119](https://github.com/havenhq/revideo/issues/119)) ([2398d0f](https://github.com/havenhq/revideo/commit/2398d0f9d57f36b47c9c66a988ca5607e9a3a30e))
* implement absolute scale setter ([842079a](https://github.com/havenhq/revideo/commit/842079a6547af4032719c85837df3db7c1c6d30a))
* improve async signals ([#156](https://github.com/havenhq/revideo/issues/156)) ([db27b9d](https://github.com/havenhq/revideo/commit/db27b9d5fb69a88f42afd98c86c4a1cdceb88ea1))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* improve image error handling ([#847](https://github.com/havenhq/revideo/issues/847)) ([db09d53](https://github.com/havenhq/revideo/commit/db09d5305a3c0507b035e3cd347eaa65b23d7d2e))
* introduce basic caching ([#68](https://github.com/havenhq/revideo/issues/68)) ([6420d36](https://github.com/havenhq/revideo/commit/6420d362d0e4ae058f55b6ff6bb2a3a32dec559b))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make transparent video optional ([#91](https://github.com/havenhq/revideo/issues/91)) ([6a052d5](https://github.com/havenhq/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* merge properties and signals ([#124](https://github.com/havenhq/revideo/issues/124)) ([da3ba83](https://github.com/havenhq/revideo/commit/da3ba83d82ee74f5a5c3631b07597f08cdf9e8e4))
* minor improvements ([403c7c2](https://github.com/havenhq/revideo/commit/403c7c27ad969880a14c498ec6cefb9e7e7b7544))
* minor improvements ([#77](https://github.com/havenhq/revideo/issues/77)) ([7c6e584](https://github.com/havenhq/revideo/commit/7c6e584aca353c9af55f0acb61b32b5f99727dba))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* new animator ([#91](https://github.com/havenhq/revideo/issues/91)) ([d85f2f8](https://github.com/havenhq/revideo/commit/d85f2f8a54c0f8bbfbc451884385f30e5b3ec206))
* new Code node ([#946](https://github.com/havenhq/revideo/issues/946)) ([26e55a3](https://github.com/havenhq/revideo/commit/26e55a37c416fb1313c8aadf40eed2824b45d330))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/havenhq/revideo/issues/33)) ([a6e1bcd](https://github.com/havenhq/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* serve assets through cli ([#124](https://github.com/havenhq/revideo/issues/124)) ([fdccde1](https://github.com/havenhq/revideo/commit/fdccde12f058811382e7e2084ebe4b9e05af1b80))
* signal error handling ([#89](https://github.com/havenhq/revideo/issues/89)) ([472ac65](https://github.com/havenhq/revideo/commit/472ac65938b804a6b698c8522ec0c3b6bdbcf1b1))
* simplify size access ([#65](https://github.com/havenhq/revideo/issues/65)) ([3315e64](https://github.com/havenhq/revideo/commit/3315e64641e9778bc48ea3fb707e3c0eeb581dfe))
* simplify size access further ([#66](https://github.com/havenhq/revideo/issues/66)) ([9091a5e](https://github.com/havenhq/revideo/commit/9091a5e05d8fadf72c50832c7c4467ac4424b72c))
* support hls video ([#160](https://github.com/havenhq/revideo/issues/160)) ([deff17d](https://github.com/havenhq/revideo/commit/deff17dd0899059727f88213207bfa942041243b))
* switch to signals ([#64](https://github.com/havenhq/revideo/issues/64)) ([d22d237](https://github.com/havenhq/revideo/commit/d22d23728597e6fa82ea5c5a99a6c0a56819bded))
* transparent video ([#75](https://github.com/havenhq/revideo/issues/75)) ([5f7b909](https://github.com/havenhq/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))
* turn Layout into node ([#75](https://github.com/havenhq/revideo/issues/75)) ([cdf8dc0](https://github.com/havenhq/revideo/commit/cdf8dc0a35522482dee2dd78a69606b79f52246e))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** scene graph icons ([#914](https://github.com/havenhq/revideo/issues/914)) ([e92ddef](https://github.com/havenhq/revideo/commit/e92ddef34860f5e710ff0f1a310758ec0ca95bcb))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* unify references and signals ([#137](https://github.com/havenhq/revideo/issues/137)) ([063aede](https://github.com/havenhq/revideo/commit/063aede0842f948d2c6704c6edd426e954bb4668))
* upgrade code-fns for new theme options and lazy loading ([#401](https://github.com/havenhq/revideo/issues/401)) ([8965ab1](https://github.com/havenhq/revideo/commit/8965ab1bef8b6ae919c8001d0527f5793293b285)), closes [#396](https://github.com/havenhq/revideo/issues/396) [#322](https://github.com/havenhq/revideo/issues/322)
* use ES modules in fiddles ([#712](https://github.com/havenhq/revideo/issues/712)) ([dbe2ad5](https://github.com/havenhq/revideo/commit/dbe2ad5644219c5a98d38c6557abfb66d793c821))
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))
* world space cache ([#498](https://github.com/havenhq/revideo/issues/498)) ([633e9e1](https://github.com/havenhq/revideo/commit/633e9e140dfbbe397df6ddc1f96ed30782ddce94)), closes [#342](https://github.com/havenhq/revideo/issues/342)


### Reverts

* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))
* feat: upgrade code-fns for new theme options and lazy loading ([#435](https://github.com/havenhq/revideo/issues/435)) ([3f5e439](https://github.com/havenhq/revideo/commit/3f5e43968f7add7c6322c9c8358d3b6fc178c2fe))


### BREAKING CHANGES

* multiple name changes

To avoid collisions, names of certain classes have changed:
- `Text => Txt`
- `Image => Img`
- `Rect (type) => BBox`

Cache related methods of `Node` have changed:
- `getCacheRect => getCacheBBox`
- `cacheRect => cacheBBox`
- `fullCacheRect => fullCacheBBox`

The `CodeBlock` property has changed:
- `CodeBlock.selectionOpacity => CodeBlock.unselectedOpacity`
* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
* remove legacy package





## 0.4.2 (2024-06-16)


### Bug Fixes

* **2d:** account for offset in cardinal points ([#883](https://github.com/havenhq/revideo/issues/883)) ([24da258](https://github.com/havenhq/revideo/commit/24da258f5937087b363eeb9146a9d22747b02e70)), closes [#882](https://github.com/havenhq/revideo/issues/882)
* **2d:** account for spawners in scene graph ([#935](https://github.com/havenhq/revideo/issues/935)) ([ca325f5](https://github.com/havenhq/revideo/commit/ca325f5ad0ae987e76106f5e65fef3ed7b3ca08d))
* **2d:** add missing Curve properties to Circle ([#805](https://github.com/havenhq/revideo/issues/805)) ([38c7900](https://github.com/havenhq/revideo/commit/38c79000403d7c3c99dde9e4c825a448d5f55054))
* **2d:** add missing Fragment export ([#553](https://github.com/havenhq/revideo/issues/553)) ([229afb4](https://github.com/havenhq/revideo/commit/229afb4fe7d95f09b480ab4a813f8dff549f381f))
* **2d:** add missing jsx dev runtime ([#547](https://github.com/havenhq/revideo/issues/547)) ([d61cb7d](https://github.com/havenhq/revideo/commit/d61cb7dd24ab66ae17d5bd6f5ccb34c4fd1e7569)), closes [#545](https://github.com/havenhq/revideo/issues/545)
* **2d:** add missing middle property ([#891](https://github.com/havenhq/revideo/issues/891)) ([61e2e96](https://github.com/havenhq/revideo/commit/61e2e96e3b8f37a68ebdddb432baba04858fd4f3))
* **2d:** add missing shape export ([#111](https://github.com/havenhq/revideo/issues/111)) ([02a1fa7](https://github.com/havenhq/revideo/commit/02a1fa7ea62155e498809f2e57ff29a18c82ac12))
* **2d:** better error handling ([#524](https://github.com/havenhq/revideo/issues/524)) ([b7475ba](https://github.com/havenhq/revideo/commit/b7475ba5ff35d37ee198577d1205d6ecd6fd2092))
* **2d:** calculate arrow orientations for curves correctly ([#597](https://github.com/havenhq/revideo/issues/597)) ([1626811](https://github.com/havenhq/revideo/commit/1626811ec4cd1bd2a3d43e393ced40a7da462c3a))
* **2d:** calculate Txt cache bbox from contents ([#836](https://github.com/havenhq/revideo/issues/836)) ([33e1a12](https://github.com/havenhq/revideo/commit/33e1a1296f21d26e9ed45ae92132825dca17054d)), closes [#465](https://github.com/havenhq/revideo/issues/465)
* **2d:** clone size correctly ([#562](https://github.com/havenhq/revideo/issues/562)) ([cdd3df1](https://github.com/havenhq/revideo/commit/cdd3df1bff25b04b905e289264831d8d328caaab)), closes [#559](https://github.com/havenhq/revideo/issues/559)
* **2d:** correct layout defaults ([#442](https://github.com/havenhq/revideo/issues/442)) ([c116c35](https://github.com/havenhq/revideo/commit/c116c355179ba3b2487634fb82b9a5bc2ea266bf))
* **2d:** correctly append Txt nodes to view ([#644](https://github.com/havenhq/revideo/issues/644)) ([24bb51a](https://github.com/havenhq/revideo/commit/24bb51aa04778c33ce327926b27332efaa554e5f))
* **2d:** correctly support external image urls ([#678](https://github.com/havenhq/revideo/issues/678)) ([a08556b](https://github.com/havenhq/revideo/commit/a08556b6e2822a55db593f610ea4dd6cb8494adb)), closes [#677](https://github.com/havenhq/revideo/issues/677)
* **2d:** fix cache bbox for lines ([#467](https://github.com/havenhq/revideo/issues/467)) ([9fd1444](https://github.com/havenhq/revideo/commit/9fd144417bb0b6301da6c522a988775f5ff142ac)), closes [#466](https://github.com/havenhq/revideo/issues/466)
* **2d:** fix circle segment ([#557](https://github.com/havenhq/revideo/issues/557)) ([adebff4](https://github.com/havenhq/revideo/commit/adebff492b76a512d79151b00adf1b383d25c5b5))
* **2d:** fix CodeBlock types ([#563](https://github.com/havenhq/revideo/issues/563)) ([25160fa](https://github.com/havenhq/revideo/commit/25160fa4d92af88429110356e42f6e3b4f88a90f)), closes [#560](https://github.com/havenhq/revideo/issues/560)
* **2d:** fix curve arrow alignment when animating start signal ([#615](https://github.com/havenhq/revideo/issues/615)) ([2fefc40](https://github.com/havenhq/revideo/commit/2fefc4026050159ba204c7629832ad83e8bfa51b))
* **2d:** fix cyclic dependency in cardinal points ([#645](https://github.com/havenhq/revideo/issues/645)) ([def23f9](https://github.com/havenhq/revideo/commit/def23f925ee7200c8740ecd51c7f6117d67b6ef8))
* **2d:** fix font ligatures in CodeBlock ([#231](https://github.com/havenhq/revideo/issues/231)) ([11ee3fe](https://github.com/havenhq/revideo/commit/11ee3fef5ad878313cf19833df6881333ced4dac))
* **2d:** fix Gradient and Pattern signals ([#376](https://github.com/havenhq/revideo/issues/376)) ([6e0dc8a](https://github.com/havenhq/revideo/commit/6e0dc8af8d19f93fd6a42addca2b3a2958b4dd33))
* **2d:** fix height when tweening text ([#905](https://github.com/havenhq/revideo/issues/905)) ([1c6a796](https://github.com/havenhq/revideo/commit/1c6a7965be137c1ab69741cdd1e9aaa6df4208c4))
* **2d:** fix import order ([#94](https://github.com/havenhq/revideo/issues/94)) ([bcc0bcf](https://github.com/havenhq/revideo/commit/bcc0bcffae47855bd8f7ab06454aaebe93c4aa24)), closes [#76](https://github.com/havenhq/revideo/issues/76)
* **2d:** fix initial value of endOffset ([#433](https://github.com/havenhq/revideo/issues/433)) ([9fe82b3](https://github.com/havenhq/revideo/commit/9fe82b3d21ba0150a2378e541a4652ca707c2d15))
* **2d:** fix layout calculation for nodes not explicitly added to view ([#331](https://github.com/havenhq/revideo/issues/331)) ([528e2d5](https://github.com/havenhq/revideo/commit/528e2d5a0abec99819e022d2848b256ece9f869a))
* **2d:** fix letterSpacing ([#448](https://github.com/havenhq/revideo/issues/448)) ([bb5ffc4](https://github.com/havenhq/revideo/commit/bb5ffc48efa82b9db818e8e52aa35e9c2ad8ce89)), closes [#447](https://github.com/havenhq/revideo/issues/447)
* **2d:** fix line arc length ([#503](https://github.com/havenhq/revideo/issues/503)) ([4f1cd59](https://github.com/havenhq/revideo/commit/4f1cd59e6bcba0b16b36be88b28a60ae46d4d9ab)), closes [#497](https://github.com/havenhq/revideo/issues/497)
* **2d:** fix Line cache ([#232](https://github.com/havenhq/revideo/issues/232)) ([a953b64](https://github.com/havenhq/revideo/commit/a953b64540c020657845efc84d4179142a7a0974)), closes [#205](https://github.com/havenhq/revideo/issues/205)
* **2d:** fix line jitter under certain conditions ([#863](https://github.com/havenhq/revideo/issues/863)) ([fb110a2](https://github.com/havenhq/revideo/commit/fb110a2f3583fc040bf2c39560934162bd146d9b))
* **2d:** fix Line overview crashing ([#142](https://github.com/havenhq/revideo/issues/142)) ([6bd5fd9](https://github.com/havenhq/revideo/commit/6bd5fd941e583e44f5d920ecd20215efb1eed58a))
* **2d:** fix nested cache canvases ([#554](https://github.com/havenhq/revideo/issues/554)) ([e601441](https://github.com/havenhq/revideo/commit/e6014413b215af6fb1a7953f8db83893d4025f0b)), closes [#551](https://github.com/havenhq/revideo/issues/551)
* **2d:** fix package.json entry ([#720](https://github.com/havenhq/revideo/issues/720)) ([12e9bf6](https://github.com/havenhq/revideo/commit/12e9bf6f40ab7afc02e2f55260544f3864920ded))
* **2d:** fix signal initialization ([#382](https://github.com/havenhq/revideo/issues/382)) ([ea36e79](https://github.com/havenhq/revideo/commit/ea36e791a20bfd1b491ffa9917be686c51bc3899))
* **2d:** fix tweening cardinal points ([#829](https://github.com/havenhq/revideo/issues/829)) ([cc16737](https://github.com/havenhq/revideo/commit/cc16737cd59081582fbb488a880e8d3c11c14918))
* **2d:** fix Txt decorators ([#526](https://github.com/havenhq/revideo/issues/526)) ([25b30ed](https://github.com/havenhq/revideo/commit/25b30ed3861f46d72147335480912ce5f564be79))
* **2d:** fix types ([#659](https://github.com/havenhq/revideo/issues/659)) ([a32af29](https://github.com/havenhq/revideo/commit/a32af29ef3bd2e5dbf08697ebfee53230fceadc1))
* **2d:** format whitespaces according to HTML ([#372](https://github.com/havenhq/revideo/issues/372)) ([83fb565](https://github.com/havenhq/revideo/commit/83fb565742d98f060c0400c8cbaf9961b69f34d0)), closes [#370](https://github.com/havenhq/revideo/issues/370)
* **2d:** handle division by zero in lines ([#407](https://github.com/havenhq/revideo/issues/407)) ([a17871a](https://github.com/havenhq/revideo/commit/a17871a2ce63dd5bb32bc719037327c4e9dde217))
* **2d:** handle floating point errors in acos ([#381](https://github.com/havenhq/revideo/issues/381)) ([5bca8fd](https://github.com/havenhq/revideo/commit/5bca8fd0bbdcf28f2793c124b7d6b0afd560c4b8))
* **2d:** handle lines with no points ([#233](https://github.com/havenhq/revideo/issues/233)) ([8108474](https://github.com/havenhq/revideo/commit/81084743dfad7b6419760796fda825047909d4d4)), closes [#212](https://github.com/havenhq/revideo/issues/212)
* **2d:** ignore children with disabled layout ([#669](https://github.com/havenhq/revideo/issues/669)) ([b98c462](https://github.com/havenhq/revideo/commit/b98c4625c3634495e86ca23d19355035e457db06)), closes [#580](https://github.com/havenhq/revideo/issues/580)
* **2d:** improve Curve hitbox ([#778](https://github.com/havenhq/revideo/issues/778)) ([8af723c](https://github.com/havenhq/revideo/commit/8af723c0322de39d2defe0363bba03f4f9542f08))
* **2d:** improve Rect radius ([#221](https://github.com/havenhq/revideo/issues/221)) ([3437e42](https://github.com/havenhq/revideo/commit/3437e42713a3f4a8d44d246ee01e2eb23b61e06a)), closes [#207](https://github.com/havenhq/revideo/issues/207)
* **2d:** make Text respect textWrap=pre ([#287](https://github.com/havenhq/revideo/issues/287)) ([cb07f4b](https://github.com/havenhq/revideo/commit/cb07f4bdf07edc8a086b934ca5ab769682b9a010))
* **2d:** minor fixes ([#915](https://github.com/havenhq/revideo/issues/915)) ([63cfc9e](https://github.com/havenhq/revideo/commit/63cfc9e033f2c2ac6d6ed2a0d8f615fcf642ab59))
* **2d:** point arrow heads in correct direction ([#792](https://github.com/havenhq/revideo/issues/792)) ([52ed52e](https://github.com/havenhq/revideo/commit/52ed52e963cc69a066a0353680acaca35b9c937a)), closes [#783](https://github.com/havenhq/revideo/issues/783)
* **2d:** prevent src warnings in Icon and Latex ([#899](https://github.com/havenhq/revideo/issues/899)) ([5eebab7](https://github.com/havenhq/revideo/commit/5eebab71d8061e233872e049e77b847f9fd077a1))
* **2d:** remove circular dependencies ([#780](https://github.com/havenhq/revideo/issues/780)) ([cdf3af5](https://github.com/havenhq/revideo/commit/cdf3af500a58151ee3549c6e728751aab3e6f75c))
* **2d:** smoothly play videos when presenting ([#600](https://github.com/havenhq/revideo/issues/600)) ([294fe6a](https://github.com/havenhq/revideo/commit/294fe6ac056ab074c77214fcf9035f53fac9258c)), closes [#578](https://github.com/havenhq/revideo/issues/578)
* **2d:** some signal setters not returning owners ([#143](https://github.com/havenhq/revideo/issues/143)) ([09ab7f9](https://github.com/havenhq/revideo/commit/09ab7f96afcaae608399a653c0b4878ba9b467d4))
* **2d:** stop code highlighting from jumping ([#230](https://github.com/havenhq/revideo/issues/230)) ([67ef1c4](https://github.com/havenhq/revideo/commit/67ef1c497056dd1f8f9e20d1d7fc1af03ec3849e))
* **2d:** stop mutating children ([#903](https://github.com/havenhq/revideo/issues/903)) ([f9552a8](https://github.com/havenhq/revideo/commit/f9552a8658ccde6c7b2466ad40b12cf28c6ec805))
* **2d:** switch iframes to ShadowDOM ([#90](https://github.com/havenhq/revideo/issues/90)) ([86176be](https://github.com/havenhq/revideo/commit/86176be055c08aba59272afcda00ed586f6c7ad6))
* **2d:** textDirection property for RTL/LTR text ([#404](https://github.com/havenhq/revideo/issues/404)) ([f240b1b](https://github.com/havenhq/revideo/commit/f240b1bd140a884f6901b7cfcb97ce3e9ce4b48d))
* **2d:** textWrap not working in Firefox ([#541](https://github.com/havenhq/revideo/issues/541)) ([f10e057](https://github.com/havenhq/revideo/commit/f10e057fd13ed9dcc70ebc0ca63963708ec159c8)), closes [#517](https://github.com/havenhq/revideo/issues/517)
* **2d:** wait for reused async resources ([#599](https://github.com/havenhq/revideo/issues/599)) ([280e065](https://github.com/havenhq/revideo/commit/280e065fe69e9a744b7b12eb4609e7d87f76bb63)), closes [#593](https://github.com/havenhq/revideo/issues/593)
* account for italic fonts in cache ([#968](https://github.com/havenhq/revideo/issues/968)) ([abb0906](https://github.com/havenhq/revideo/commit/abb090695c4257d9877d0cb11954093c49149ddc)), closes [#934](https://github.com/havenhq/revideo/issues/934)
* await font load before drawing ([#31](https://github.com/havenhq/revideo/issues/31)) ([cbfb5cb](https://github.com/havenhq/revideo/commit/cbfb5cb136d85a657c99187da166b64aae8be3a1))
* await font load without throwing async node error ([#69](https://github.com/havenhq/revideo/issues/69)) ([fddebe6](https://github.com/havenhq/revideo/commit/fddebe60a610af718c880b9e198eebe8555ea9a5))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/havenhq/revideo/issues/62)) ([04cdc5b](https://github.com/havenhq/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* **ffmpeg:** looping of video tag ([#122](https://github.com/havenhq/revideo/issues/122)) ([109c675](https://github.com/havenhq/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* fix compound property setter ([#218](https://github.com/havenhq/revideo/issues/218)) ([6cd1b95](https://github.com/havenhq/revideo/commit/6cd1b952df950554eb637c9f8e82947c415d00c5)), closes [#208](https://github.com/havenhq/revideo/issues/208) [#210](https://github.com/havenhq/revideo/issues/210)
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* plug memory leaks ([#385](https://github.com/havenhq/revideo/issues/385)) ([de0af00](https://github.com/havenhq/revideo/commit/de0af00a7d2e019e2a933791c62b7901755be7b0))
* prevent consumePromises from halting ([#657](https://github.com/havenhq/revideo/issues/657)) ([363a189](https://github.com/havenhq/revideo/commit/363a189b0c7f5926c9d5ae00b58b48e8ed4d9b48))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* previous scene being rendered twice ([#97](https://github.com/havenhq/revideo/issues/97)) ([90205bd](https://github.com/havenhq/revideo/commit/90205bdc1a086abe5f73b04cb4616c6af5ec4377))
* restrict size of cache canvas ([#544](https://github.com/havenhq/revideo/issues/544)) ([49ec554](https://github.com/havenhq/revideo/commit/49ec55490718e503d9a39437ae13c189dc4fe9ea))
* support color to null tweening ([#387](https://github.com/havenhq/revideo/issues/387)) ([02e9f22](https://github.com/havenhq/revideo/commit/02e9f22027a1c3a85ffcc259aeca913318fb6f54))
* support legacy imports again ([#868](https://github.com/havenhq/revideo/issues/868)) ([77c4e2e](https://github.com/havenhq/revideo/commit/77c4e2eeb8b0f73bdef1f72e3d81f34c79748929))
* support multiple async players ([#450](https://github.com/havenhq/revideo/issues/450)) ([d7ec469](https://github.com/havenhq/revideo/commit/d7ec469e747eefd909f4dd59dd713f5d86308222)), closes [#434](https://github.com/havenhq/revideo/issues/434)
* typo on codeblock remove comments ([#368](https://github.com/havenhq/revideo/issues/368)) ([2025adc](https://github.com/havenhq/revideo/commit/2025adc6e7aa11d81b6f5f6989e8eae18cf86cb7))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Code Refactoring

* introduce improved names ([#425](https://github.com/havenhq/revideo/issues/425)) ([4a2188d](https://github.com/havenhq/revideo/commit/4a2188d339587fa658b2134befc3fe63c835c5d7))
* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* **2d:** add antialiased signal to Shape ([#282](https://github.com/havenhq/revideo/issues/282)) ([7c6905d](https://github.com/havenhq/revideo/commit/7c6905d72c6c2f49e10f0a80704c0afe3504d01b))
* **2d:** add arcLength helper methods to Curve ([#627](https://github.com/havenhq/revideo/issues/627)) ([3c7546e](https://github.com/havenhq/revideo/commit/3c7546e7a509deb6fff8f669c3df0a69b492bd2e))
* **2d:** add Bézier nodes ([#603](https://github.com/havenhq/revideo/issues/603)) ([9841cfd](https://github.com/havenhq/revideo/commit/9841cfdc3947ca4e6d6e42ed21eae88e855f855d))
* **2d:** add cardinal points ([#636](https://github.com/havenhq/revideo/issues/636)) ([2136a25](https://github.com/havenhq/revideo/commit/2136a2558a9ed968ee505e4e5cce33d989dfdc13)), closes [#391](https://github.com/havenhq/revideo/issues/391)
* **2d:** add closed property for circle ([#378](https://github.com/havenhq/revideo/issues/378)) ([62a9605](https://github.com/havenhq/revideo/commit/62a9605d4c54e7bf2d2d44d47bf769f5b27378a5))
* **2d:** add completion property for curves ([#635](https://github.com/havenhq/revideo/issues/635)) ([6577d6d](https://github.com/havenhq/revideo/commit/6577d6ddfaf779ba02f3862d2a357166138b99ca))
* **2d:** add default computed values for signals ([#259](https://github.com/havenhq/revideo/issues/259)) ([18f61a6](https://github.com/havenhq/revideo/commit/18f61a668420dec8afba52d52a6557e7a7919ba2))
* **2d:** add Icon Component ([#306](https://github.com/havenhq/revideo/issues/306)) ([3479631](https://github.com/havenhq/revideo/commit/3479631ef34e39f90a8d8de441317672be1840d9)), closes [#305](https://github.com/havenhq/revideo/issues/305)
* **2d:** add LaTeX component ([#228](https://github.com/havenhq/revideo/issues/228)) ([4c26d2a](https://github.com/havenhq/revideo/commit/4c26d2aaf0c697486639aa917cd5c585d3d0ea74))
* **2d:** add line counter for CodeBlock ([#802](https://github.com/havenhq/revideo/issues/802)) ([c3f9676](https://github.com/havenhq/revideo/commit/c3f9676b6984731a09a44ab0b1fcfc226975fa08))
* **2d:** add methods for rearranging children ([#81](https://github.com/havenhq/revideo/issues/81)) ([63f6c1a](https://github.com/havenhq/revideo/commit/63f6c1aa51ac4ecd093151c8cd30910f2e72bcac))
* **2d:** add moveBelow, moveAbove and moveTo methods to Node ([#365](https://github.com/havenhq/revideo/issues/365)) ([16752a3](https://github.com/havenhq/revideo/commit/16752a3b8ae7461b33d6208a9675729f374e8324))
* **2d:** add option for preformatted text ([#147](https://github.com/havenhq/revideo/issues/147)) ([989be53](https://github.com/havenhq/revideo/commit/989be532d86642e1125bb7fa62a801b09c1b8f26))
* **2d:** add Path component ([#700](https://github.com/havenhq/revideo/issues/700)) ([2128b6b](https://github.com/havenhq/revideo/commit/2128b6bf871cabe19e1abc749f18945c78c01f84))
* **2d:** add playbackRate signal to Video component ([#831](https://github.com/havenhq/revideo/issues/831)) ([5902b82](https://github.com/havenhq/revideo/commit/5902b824b36400876be0ee970e2c6211299faf21)), closes [#711](https://github.com/havenhq/revideo/issues/711)
* **2d:** add Polygon component ([#463](https://github.com/havenhq/revideo/issues/463)) ([15adb3e](https://github.com/havenhq/revideo/commit/15adb3e312a4998b44c0b9c5fe5b5236f51c71c9)), closes [#455](https://github.com/havenhq/revideo/issues/455)
* **2d:** add querying helpers ([#852](https://github.com/havenhq/revideo/issues/852)) ([614de6b](https://github.com/havenhq/revideo/commit/614de6bd8542322d1db4b123b875f6fad85cc4eb))
* **2d:** add Ray node ([#628](https://github.com/havenhq/revideo/issues/628)) ([649447c](https://github.com/havenhq/revideo/commit/649447cd5f2089afc64cc7bd4b0276e69d1e9a30))
* **2d:** add save and restore methods to nodes ([#406](https://github.com/havenhq/revideo/issues/406)) ([870e194](https://github.com/havenhq/revideo/commit/870e1947d97382bc6d82857c077140bbef7cf7e8))
* **2d:** add skew property ([#803](https://github.com/havenhq/revideo/issues/803)) ([eff7c7b](https://github.com/havenhq/revideo/commit/eff7c7be0c013139140b398350242457736d48c7))
* **2d:** add smooth corners and sharpness to rect ([#310](https://github.com/havenhq/revideo/issues/310)) ([f7fbefd](https://github.com/havenhq/revideo/commit/f7fbefd27f7f6972cfb5a45a68e5d0aed9593ae4))
* **2d:** add spline node ([#514](https://github.com/havenhq/revideo/issues/514)) ([3ce2111](https://github.com/havenhq/revideo/commit/3ce2111309e698450dc4c6e2ad47024995863e73))
* **2d:** add start and end signals to Grid node ([#761](https://github.com/havenhq/revideo/issues/761)) ([e37ea80](https://github.com/havenhq/revideo/commit/e37ea806b94e93c6324d8e1b502468925b731e8e))
* **2d:** add SVG component ([#763](https://github.com/havenhq/revideo/issues/763)) ([8eadc11](https://github.com/havenhq/revideo/commit/8eadc11937d4201545894f2f5b204d477a3f9094))
* **2d:** add textAlign property ([#451](https://github.com/havenhq/revideo/issues/451)) ([3d15825](https://github.com/havenhq/revideo/commit/3d15825f3cc5a35ba081a31510741b824f3bc6ab)), closes [#303](https://github.com/havenhq/revideo/issues/303)
* **2d:** add video component property getter ([#240](https://github.com/havenhq/revideo/issues/240)) ([59de5ab](https://github.com/havenhq/revideo/commit/59de5ab2c089589773a2f9ad7588eda7d72693a7))
* **2d:** add z-index property to nodes ([#398](https://github.com/havenhq/revideo/issues/398)) ([4280af3](https://github.com/havenhq/revideo/commit/4280af3b4b7bd5970fe5e743949a0fcca2c314f3))
* **2d:** always clip images and videos ([#773](https://github.com/havenhq/revideo/issues/773)) ([3938c59](https://github.com/havenhq/revideo/commit/3938c59394bfc42e5562504687d783ff306d7d32))
* **2d:** clamp opacity value between 0 and 1 ([#835](https://github.com/havenhq/revideo/issues/835)) ([c54b2f8](https://github.com/havenhq/revideo/commit/c54b2f837a8e8b872df3610f4cc6caa94a728500)), closes [#830](https://github.com/havenhq/revideo/issues/830)
* **2d:** code bounding box helpers ([#948](https://github.com/havenhq/revideo/issues/948)) ([0ffd56f](https://github.com/havenhq/revideo/commit/0ffd56f5f8076913e687e5b908311aa7832d8b7b))
* **2d:** code range helpers ([#947](https://github.com/havenhq/revideo/issues/947)) ([044c9ac](https://github.com/havenhq/revideo/commit/044c9acd6ee7e4e337fb4d51286126f583a8da6f))
* **2d:** code selection and modification ([#163](https://github.com/havenhq/revideo/issues/163)) ([e8e884a](https://github.com/havenhq/revideo/commit/e8e884a1a5574425dbf15272718911c12cfa2327))
* **2d:** construct lines using signals ([#133](https://github.com/havenhq/revideo/issues/133)) ([2968a24](https://github.com/havenhq/revideo/commit/2968a2426564469fb4f4343fe71a6d30e95361f2))
* **2d:** immediate restore ([#736](https://github.com/havenhq/revideo/issues/736)) ([634d51d](https://github.com/havenhq/revideo/commit/634d51d2afe8a536673c364874f8f3d1a450b846))
* **2d:** improve property declarations ([27e7d26](https://github.com/havenhq/revideo/commit/27e7d267ee91bf1e8ca79686b6ec31347f9f4d41))
* **2d:** improve Rect corner radius ([#120](https://github.com/havenhq/revideo/issues/120)) ([b471fe0](https://github.com/havenhq/revideo/commit/b471fe0e37c0a426d3af8299c9c3c22539e7df05))
* **2d:** improve Video node ([#601](https://github.com/havenhq/revideo/issues/601)) ([3801d83](https://github.com/havenhq/revideo/commit/3801d83415bbdeeee5d6d53d0c18e5d9e78fba56))
* **2d:** make `View2D` extend `Rect` ([#379](https://github.com/havenhq/revideo/issues/379)) ([93db5fc](https://github.com/havenhq/revideo/commit/93db5fc41617c0902e85fda90fbfc930c2b4634b))
* **2d:** make Circle extend Curve ([#771](https://github.com/havenhq/revideo/issues/771)) ([4c8cf19](https://github.com/havenhq/revideo/commit/4c8cf1954093958eac507921dc18f67dd64b2052))
* **2d:** make Polygon extend Curve ([#961](https://github.com/havenhq/revideo/issues/961)) ([739c9fc](https://github.com/havenhq/revideo/commit/739c9fccbc101f8b2eed680a11c00f317fdc4dd3))
* **2d:** make Rect extend Curve ([#759](https://github.com/havenhq/revideo/issues/759)) ([9810212](https://github.com/havenhq/revideo/commit/9810212648824b9a2fa2ecd6b597e3319d20b325))
* **2d:** nested Txt nodes ([#861](https://github.com/havenhq/revideo/issues/861)) ([f2786d0](https://github.com/havenhq/revideo/commit/f2786d0cd0d06065ca1e9eb9f6b4c11a74b6c283)), closes [#540](https://github.com/havenhq/revideo/issues/540)
* **2d:** simplify layout prop ([c24cb12](https://github.com/havenhq/revideo/commit/c24cb12a22b7c85fdfb051917fa9ee1e0911717c))
* **2d:** support HMR for images ([#641](https://github.com/havenhq/revideo/issues/641)) ([cf17520](https://github.com/havenhq/revideo/commit/cf17520aa8ddf19dcfc419c63cf7255892d45b71))
* **2d:** support letter spacing in Code ([#955](https://github.com/havenhq/revideo/issues/955)) ([2a87c37](https://github.com/havenhq/revideo/commit/2a87c37c832de86c4b524b33fd68806627daec8b))
* **2d:** support tweening in applyState ([#859](https://github.com/havenhq/revideo/issues/859)) ([b7ed2e2](https://github.com/havenhq/revideo/commit/b7ed2e24773227e5b576ff056eb23de9b9ff1676))
* **2d:** support tweening Line points ([#853](https://github.com/havenhq/revideo/issues/853)) ([4bf37d7](https://github.com/havenhq/revideo/commit/4bf37d74d2e4bb9d9cc034aff121a32da9a6d146))
* **2d:** unify desired sizes ([#118](https://github.com/havenhq/revideo/issues/118)) ([401a799](https://github.com/havenhq/revideo/commit/401a79946b034a96b9abff2f3fb5efd6cc9080f3))
* **2d:** unify layout properties ([#355](https://github.com/havenhq/revideo/issues/355)) ([3cae97e](https://github.com/havenhq/revideo/commit/3cae97ea704d0533020fa87326dacadcc037d517)), closes [#352](https://github.com/havenhq/revideo/issues/352)
* **2d:** warn about missing image source ([#817](https://github.com/havenhq/revideo/issues/817)) ([6dcdb5f](https://github.com/havenhq/revideo/commit/6dcdb5f3b83d4860b1557e4745972e0af68f92f3))
* add advanced caching ([#69](https://github.com/havenhq/revideo/issues/69)) ([2a644c9](https://github.com/havenhq/revideo/commit/2a644c9315acfcc5280a5eacc9904df140a61e4f))
* add base class for shapes ([#67](https://github.com/havenhq/revideo/issues/67)) ([d38c172](https://github.com/havenhq/revideo/commit/d38c1724e129c553739cbfc27c4e5cd8f737f067))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add cloning ([#80](https://github.com/havenhq/revideo/issues/80)) ([47d7a0f](https://github.com/havenhq/revideo/commit/47d7a0fa5da9a03d8ed91557db651f6f960e28b1))
* add CodeBlock component based on code-fns to 2D ([#78](https://github.com/havenhq/revideo/issues/78)) ([ad346f1](https://github.com/havenhq/revideo/commit/ad346f118d63b1e321ec315e1c70b925670124a1))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add default renderer ([#63](https://github.com/havenhq/revideo/issues/63)) ([9255490](https://github.com/havenhq/revideo/commit/92554900965fe088538f5e703dbab2fd84f904d7)), closes [#56](https://github.com/havenhq/revideo/issues/56) [#58](https://github.com/havenhq/revideo/issues/58)
* add DEG2RAD and RAD2DEG constants ([#630](https://github.com/havenhq/revideo/issues/630)) ([01801e8](https://github.com/havenhq/revideo/commit/01801e8766058e75a6a020400650fb00f8f430cc))
* add Grid node ([e1f83da](https://github.com/havenhq/revideo/commit/e1f83da1f43d20d392df4acb11e3df9cc457585d))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add middle cardinal point ([#758](https://github.com/havenhq/revideo/issues/758)) ([b036eaf](https://github.com/havenhq/revideo/commit/b036eafc00381831c08267a78cf9d74973f4025a))
* add missing flexbox properties ([#405](https://github.com/havenhq/revideo/issues/405)) ([4e78b4b](https://github.com/havenhq/revideo/commit/4e78b4b2fe4df42ce0a8da6fd41ad38b0104e7f5))
* add missing layout props ([#72](https://github.com/havenhq/revideo/issues/72)) ([f808a56](https://github.com/havenhq/revideo/commit/f808a562b192fd03dba4b0d353284db344d6a80b))
* add node spawners ([#149](https://github.com/havenhq/revideo/issues/149)) ([da18a4e](https://github.com/havenhq/revideo/commit/da18a4e24104022a84ecd6cec1666b520186058f))
* add polyline ([#84](https://github.com/havenhq/revideo/issues/84)) ([4ceaf84](https://github.com/havenhq/revideo/commit/4ceaf842915ac43d81f292c58a4dc73a8d1bb8e9))
* add random number generator ([#116](https://github.com/havenhq/revideo/issues/116)) ([d505312](https://github.com/havenhq/revideo/commit/d5053123eef308c7a2a61d92b6e76c637f4ed0b8)), closes [#14](https://github.com/havenhq/revideo/issues/14)
* add reparent helper ([80b95a9](https://github.com/havenhq/revideo/commit/80b95a9ce89d4a2eeea7e467257486e961602d69))
* add Text and Image components ([#70](https://github.com/havenhq/revideo/issues/70)) ([85c7dcd](https://github.com/havenhq/revideo/commit/85c7dcdb4f8ca2f0bfb03950c85a8d6f6652fcdf))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/havenhq/revideo/issues/9)) ([9e0d67b](https://github.com/havenhq/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* added a theme property to the CodeBlock component ([#279](https://github.com/havenhq/revideo/issues/279)) ([fe34fa8](https://github.com/havenhq/revideo/commit/fe34fa8ebfe66cd356fb1c3d85adedef11e03b45))
* better children and spawners ([#858](https://github.com/havenhq/revideo/issues/858)) ([9b5c23d](https://github.com/havenhq/revideo/commit/9b5c23d2076180cf710656c817369a07b253e3ec))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* convert built-in types to webgl ([#929](https://github.com/havenhq/revideo/issues/929)) ([a0f0b7d](https://github.com/havenhq/revideo/commit/a0f0b7d8996547e1a316097422ec02bddeeccec6))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* **core:** tree shaking ([#523](https://github.com/havenhq/revideo/issues/523)) ([65fec78](https://github.com/havenhq/revideo/commit/65fec7825fda33812b13f57bfeb1d82193a5d190))
* **docs:** fiddle editor ([#542](https://github.com/havenhq/revideo/issues/542)) ([3c68fef](https://github.com/havenhq/revideo/commit/3c68fefdf7bf375ee9345aba7dbf9e5ff35e3c3d))
* export everything from entry points ([#710](https://github.com/havenhq/revideo/issues/710)) ([3c885d9](https://github.com/havenhq/revideo/commit/3c885d9083b52fbbaccf1e2560ae50817949bc52))
* filter reordering ([#119](https://github.com/havenhq/revideo/issues/119)) ([2398d0f](https://github.com/havenhq/revideo/commit/2398d0f9d57f36b47c9c66a988ca5607e9a3a30e))
* implement absolute scale setter ([842079a](https://github.com/havenhq/revideo/commit/842079a6547af4032719c85837df3db7c1c6d30a))
* improve async signals ([#156](https://github.com/havenhq/revideo/issues/156)) ([db27b9d](https://github.com/havenhq/revideo/commit/db27b9d5fb69a88f42afd98c86c4a1cdceb88ea1))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* improve image error handling ([#847](https://github.com/havenhq/revideo/issues/847)) ([db09d53](https://github.com/havenhq/revideo/commit/db09d5305a3c0507b035e3cd347eaa65b23d7d2e))
* introduce basic caching ([#68](https://github.com/havenhq/revideo/issues/68)) ([6420d36](https://github.com/havenhq/revideo/commit/6420d362d0e4ae058f55b6ff6bb2a3a32dec559b))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make transparent video optional ([#91](https://github.com/havenhq/revideo/issues/91)) ([6a052d5](https://github.com/havenhq/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* merge properties and signals ([#124](https://github.com/havenhq/revideo/issues/124)) ([da3ba83](https://github.com/havenhq/revideo/commit/da3ba83d82ee74f5a5c3631b07597f08cdf9e8e4))
* minor improvements ([403c7c2](https://github.com/havenhq/revideo/commit/403c7c27ad969880a14c498ec6cefb9e7e7b7544))
* minor improvements ([#77](https://github.com/havenhq/revideo/issues/77)) ([7c6e584](https://github.com/havenhq/revideo/commit/7c6e584aca353c9af55f0acb61b32b5f99727dba))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* new animator ([#91](https://github.com/havenhq/revideo/issues/91)) ([d85f2f8](https://github.com/havenhq/revideo/commit/d85f2f8a54c0f8bbfbc451884385f30e5b3ec206))
* new Code node ([#946](https://github.com/havenhq/revideo/issues/946)) ([26e55a3](https://github.com/havenhq/revideo/commit/26e55a37c416fb1313c8aadf40eed2824b45d330))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/havenhq/revideo/issues/33)) ([a6e1bcd](https://github.com/havenhq/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* serve assets through cli ([#124](https://github.com/havenhq/revideo/issues/124)) ([fdccde1](https://github.com/havenhq/revideo/commit/fdccde12f058811382e7e2084ebe4b9e05af1b80))
* signal error handling ([#89](https://github.com/havenhq/revideo/issues/89)) ([472ac65](https://github.com/havenhq/revideo/commit/472ac65938b804a6b698c8522ec0c3b6bdbcf1b1))
* simplify size access ([#65](https://github.com/havenhq/revideo/issues/65)) ([3315e64](https://github.com/havenhq/revideo/commit/3315e64641e9778bc48ea3fb707e3c0eeb581dfe))
* simplify size access further ([#66](https://github.com/havenhq/revideo/issues/66)) ([9091a5e](https://github.com/havenhq/revideo/commit/9091a5e05d8fadf72c50832c7c4467ac4424b72c))
* switch to signals ([#64](https://github.com/havenhq/revideo/issues/64)) ([d22d237](https://github.com/havenhq/revideo/commit/d22d23728597e6fa82ea5c5a99a6c0a56819bded))
* transparent video ([#75](https://github.com/havenhq/revideo/issues/75)) ([5f7b909](https://github.com/havenhq/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))
* turn Layout into node ([#75](https://github.com/havenhq/revideo/issues/75)) ([cdf8dc0](https://github.com/havenhq/revideo/commit/cdf8dc0a35522482dee2dd78a69606b79f52246e))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** scene graph icons ([#914](https://github.com/havenhq/revideo/issues/914)) ([e92ddef](https://github.com/havenhq/revideo/commit/e92ddef34860f5e710ff0f1a310758ec0ca95bcb))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* unify references and signals ([#137](https://github.com/havenhq/revideo/issues/137)) ([063aede](https://github.com/havenhq/revideo/commit/063aede0842f948d2c6704c6edd426e954bb4668))
* upgrade code-fns for new theme options and lazy loading ([#401](https://github.com/havenhq/revideo/issues/401)) ([8965ab1](https://github.com/havenhq/revideo/commit/8965ab1bef8b6ae919c8001d0527f5793293b285)), closes [#396](https://github.com/havenhq/revideo/issues/396) [#322](https://github.com/havenhq/revideo/issues/322)
* use ES modules in fiddles ([#712](https://github.com/havenhq/revideo/issues/712)) ([dbe2ad5](https://github.com/havenhq/revideo/commit/dbe2ad5644219c5a98d38c6557abfb66d793c821))
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))
* world space cache ([#498](https://github.com/havenhq/revideo/issues/498)) ([633e9e1](https://github.com/havenhq/revideo/commit/633e9e140dfbbe397df6ddc1f96ed30782ddce94)), closes [#342](https://github.com/havenhq/revideo/issues/342)


### Reverts

* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))
* feat: upgrade code-fns for new theme options and lazy loading ([#435](https://github.com/havenhq/revideo/issues/435)) ([3f5e439](https://github.com/havenhq/revideo/commit/3f5e43968f7add7c6322c9c8358d3b6fc178c2fe))


### BREAKING CHANGES

* multiple name changes

To avoid collisions, names of certain classes have changed:
- `Text => Txt`
- `Image => Img`
- `Rect (type) => BBox`

Cache related methods of `Node` have changed:
- `getCacheRect => getCacheBBox`
- `cacheRect => cacheBBox`
- `fullCacheRect => fullCacheBBox`

The `CodeBlock` property has changed:
- `CodeBlock.selectionOpacity => CodeBlock.unselectedOpacity`
* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
* remove legacy package





## 0.4.1 (2024-06-12)


### Bug Fixes

* **2d:** account for offset in cardinal points ([#883](https://github.com/havenhq/revideo/issues/883)) ([24da258](https://github.com/havenhq/revideo/commit/24da258f5937087b363eeb9146a9d22747b02e70)), closes [#882](https://github.com/havenhq/revideo/issues/882)
* **2d:** account for spawners in scene graph ([#935](https://github.com/havenhq/revideo/issues/935)) ([ca325f5](https://github.com/havenhq/revideo/commit/ca325f5ad0ae987e76106f5e65fef3ed7b3ca08d))
* **2d:** add missing Curve properties to Circle ([#805](https://github.com/havenhq/revideo/issues/805)) ([38c7900](https://github.com/havenhq/revideo/commit/38c79000403d7c3c99dde9e4c825a448d5f55054))
* **2d:** add missing Fragment export ([#553](https://github.com/havenhq/revideo/issues/553)) ([229afb4](https://github.com/havenhq/revideo/commit/229afb4fe7d95f09b480ab4a813f8dff549f381f))
* **2d:** add missing jsx dev runtime ([#547](https://github.com/havenhq/revideo/issues/547)) ([d61cb7d](https://github.com/havenhq/revideo/commit/d61cb7dd24ab66ae17d5bd6f5ccb34c4fd1e7569)), closes [#545](https://github.com/havenhq/revideo/issues/545)
* **2d:** add missing middle property ([#891](https://github.com/havenhq/revideo/issues/891)) ([61e2e96](https://github.com/havenhq/revideo/commit/61e2e96e3b8f37a68ebdddb432baba04858fd4f3))
* **2d:** add missing shape export ([#111](https://github.com/havenhq/revideo/issues/111)) ([02a1fa7](https://github.com/havenhq/revideo/commit/02a1fa7ea62155e498809f2e57ff29a18c82ac12))
* **2d:** better error handling ([#524](https://github.com/havenhq/revideo/issues/524)) ([b7475ba](https://github.com/havenhq/revideo/commit/b7475ba5ff35d37ee198577d1205d6ecd6fd2092))
* **2d:** calculate arrow orientations for curves correctly ([#597](https://github.com/havenhq/revideo/issues/597)) ([1626811](https://github.com/havenhq/revideo/commit/1626811ec4cd1bd2a3d43e393ced40a7da462c3a))
* **2d:** calculate Txt cache bbox from contents ([#836](https://github.com/havenhq/revideo/issues/836)) ([33e1a12](https://github.com/havenhq/revideo/commit/33e1a1296f21d26e9ed45ae92132825dca17054d)), closes [#465](https://github.com/havenhq/revideo/issues/465)
* **2d:** clone size correctly ([#562](https://github.com/havenhq/revideo/issues/562)) ([cdd3df1](https://github.com/havenhq/revideo/commit/cdd3df1bff25b04b905e289264831d8d328caaab)), closes [#559](https://github.com/havenhq/revideo/issues/559)
* **2d:** correct layout defaults ([#442](https://github.com/havenhq/revideo/issues/442)) ([c116c35](https://github.com/havenhq/revideo/commit/c116c355179ba3b2487634fb82b9a5bc2ea266bf))
* **2d:** correctly append Txt nodes to view ([#644](https://github.com/havenhq/revideo/issues/644)) ([24bb51a](https://github.com/havenhq/revideo/commit/24bb51aa04778c33ce327926b27332efaa554e5f))
* **2d:** correctly support external image urls ([#678](https://github.com/havenhq/revideo/issues/678)) ([a08556b](https://github.com/havenhq/revideo/commit/a08556b6e2822a55db593f610ea4dd6cb8494adb)), closes [#677](https://github.com/havenhq/revideo/issues/677)
* **2d:** fix cache bbox for lines ([#467](https://github.com/havenhq/revideo/issues/467)) ([9fd1444](https://github.com/havenhq/revideo/commit/9fd144417bb0b6301da6c522a988775f5ff142ac)), closes [#466](https://github.com/havenhq/revideo/issues/466)
* **2d:** fix circle segment ([#557](https://github.com/havenhq/revideo/issues/557)) ([adebff4](https://github.com/havenhq/revideo/commit/adebff492b76a512d79151b00adf1b383d25c5b5))
* **2d:** fix CodeBlock types ([#563](https://github.com/havenhq/revideo/issues/563)) ([25160fa](https://github.com/havenhq/revideo/commit/25160fa4d92af88429110356e42f6e3b4f88a90f)), closes [#560](https://github.com/havenhq/revideo/issues/560)
* **2d:** fix curve arrow alignment when animating start signal ([#615](https://github.com/havenhq/revideo/issues/615)) ([2fefc40](https://github.com/havenhq/revideo/commit/2fefc4026050159ba204c7629832ad83e8bfa51b))
* **2d:** fix cyclic dependency in cardinal points ([#645](https://github.com/havenhq/revideo/issues/645)) ([def23f9](https://github.com/havenhq/revideo/commit/def23f925ee7200c8740ecd51c7f6117d67b6ef8))
* **2d:** fix font ligatures in CodeBlock ([#231](https://github.com/havenhq/revideo/issues/231)) ([11ee3fe](https://github.com/havenhq/revideo/commit/11ee3fef5ad878313cf19833df6881333ced4dac))
* **2d:** fix Gradient and Pattern signals ([#376](https://github.com/havenhq/revideo/issues/376)) ([6e0dc8a](https://github.com/havenhq/revideo/commit/6e0dc8af8d19f93fd6a42addca2b3a2958b4dd33))
* **2d:** fix height when tweening text ([#905](https://github.com/havenhq/revideo/issues/905)) ([1c6a796](https://github.com/havenhq/revideo/commit/1c6a7965be137c1ab69741cdd1e9aaa6df4208c4))
* **2d:** fix import order ([#94](https://github.com/havenhq/revideo/issues/94)) ([bcc0bcf](https://github.com/havenhq/revideo/commit/bcc0bcffae47855bd8f7ab06454aaebe93c4aa24)), closes [#76](https://github.com/havenhq/revideo/issues/76)
* **2d:** fix initial value of endOffset ([#433](https://github.com/havenhq/revideo/issues/433)) ([9fe82b3](https://github.com/havenhq/revideo/commit/9fe82b3d21ba0150a2378e541a4652ca707c2d15))
* **2d:** fix layout calculation for nodes not explicitly added to view ([#331](https://github.com/havenhq/revideo/issues/331)) ([528e2d5](https://github.com/havenhq/revideo/commit/528e2d5a0abec99819e022d2848b256ece9f869a))
* **2d:** fix letterSpacing ([#448](https://github.com/havenhq/revideo/issues/448)) ([bb5ffc4](https://github.com/havenhq/revideo/commit/bb5ffc48efa82b9db818e8e52aa35e9c2ad8ce89)), closes [#447](https://github.com/havenhq/revideo/issues/447)
* **2d:** fix line arc length ([#503](https://github.com/havenhq/revideo/issues/503)) ([4f1cd59](https://github.com/havenhq/revideo/commit/4f1cd59e6bcba0b16b36be88b28a60ae46d4d9ab)), closes [#497](https://github.com/havenhq/revideo/issues/497)
* **2d:** fix Line cache ([#232](https://github.com/havenhq/revideo/issues/232)) ([a953b64](https://github.com/havenhq/revideo/commit/a953b64540c020657845efc84d4179142a7a0974)), closes [#205](https://github.com/havenhq/revideo/issues/205)
* **2d:** fix line jitter under certain conditions ([#863](https://github.com/havenhq/revideo/issues/863)) ([fb110a2](https://github.com/havenhq/revideo/commit/fb110a2f3583fc040bf2c39560934162bd146d9b))
* **2d:** fix Line overview crashing ([#142](https://github.com/havenhq/revideo/issues/142)) ([6bd5fd9](https://github.com/havenhq/revideo/commit/6bd5fd941e583e44f5d920ecd20215efb1eed58a))
* **2d:** fix nested cache canvases ([#554](https://github.com/havenhq/revideo/issues/554)) ([e601441](https://github.com/havenhq/revideo/commit/e6014413b215af6fb1a7953f8db83893d4025f0b)), closes [#551](https://github.com/havenhq/revideo/issues/551)
* **2d:** fix package.json entry ([#720](https://github.com/havenhq/revideo/issues/720)) ([12e9bf6](https://github.com/havenhq/revideo/commit/12e9bf6f40ab7afc02e2f55260544f3864920ded))
* **2d:** fix signal initialization ([#382](https://github.com/havenhq/revideo/issues/382)) ([ea36e79](https://github.com/havenhq/revideo/commit/ea36e791a20bfd1b491ffa9917be686c51bc3899))
* **2d:** fix tweening cardinal points ([#829](https://github.com/havenhq/revideo/issues/829)) ([cc16737](https://github.com/havenhq/revideo/commit/cc16737cd59081582fbb488a880e8d3c11c14918))
* **2d:** fix Txt decorators ([#526](https://github.com/havenhq/revideo/issues/526)) ([25b30ed](https://github.com/havenhq/revideo/commit/25b30ed3861f46d72147335480912ce5f564be79))
* **2d:** fix types ([#659](https://github.com/havenhq/revideo/issues/659)) ([a32af29](https://github.com/havenhq/revideo/commit/a32af29ef3bd2e5dbf08697ebfee53230fceadc1))
* **2d:** format whitespaces according to HTML ([#372](https://github.com/havenhq/revideo/issues/372)) ([83fb565](https://github.com/havenhq/revideo/commit/83fb565742d98f060c0400c8cbaf9961b69f34d0)), closes [#370](https://github.com/havenhq/revideo/issues/370)
* **2d:** handle division by zero in lines ([#407](https://github.com/havenhq/revideo/issues/407)) ([a17871a](https://github.com/havenhq/revideo/commit/a17871a2ce63dd5bb32bc719037327c4e9dde217))
* **2d:** handle floating point errors in acos ([#381](https://github.com/havenhq/revideo/issues/381)) ([5bca8fd](https://github.com/havenhq/revideo/commit/5bca8fd0bbdcf28f2793c124b7d6b0afd560c4b8))
* **2d:** handle lines with no points ([#233](https://github.com/havenhq/revideo/issues/233)) ([8108474](https://github.com/havenhq/revideo/commit/81084743dfad7b6419760796fda825047909d4d4)), closes [#212](https://github.com/havenhq/revideo/issues/212)
* **2d:** ignore children with disabled layout ([#669](https://github.com/havenhq/revideo/issues/669)) ([b98c462](https://github.com/havenhq/revideo/commit/b98c4625c3634495e86ca23d19355035e457db06)), closes [#580](https://github.com/havenhq/revideo/issues/580)
* **2d:** improve Curve hitbox ([#778](https://github.com/havenhq/revideo/issues/778)) ([8af723c](https://github.com/havenhq/revideo/commit/8af723c0322de39d2defe0363bba03f4f9542f08))
* **2d:** improve Rect radius ([#221](https://github.com/havenhq/revideo/issues/221)) ([3437e42](https://github.com/havenhq/revideo/commit/3437e42713a3f4a8d44d246ee01e2eb23b61e06a)), closes [#207](https://github.com/havenhq/revideo/issues/207)
* **2d:** make Text respect textWrap=pre ([#287](https://github.com/havenhq/revideo/issues/287)) ([cb07f4b](https://github.com/havenhq/revideo/commit/cb07f4bdf07edc8a086b934ca5ab769682b9a010))
* **2d:** minor fixes ([#915](https://github.com/havenhq/revideo/issues/915)) ([63cfc9e](https://github.com/havenhq/revideo/commit/63cfc9e033f2c2ac6d6ed2a0d8f615fcf642ab59))
* **2d:** point arrow heads in correct direction ([#792](https://github.com/havenhq/revideo/issues/792)) ([52ed52e](https://github.com/havenhq/revideo/commit/52ed52e963cc69a066a0353680acaca35b9c937a)), closes [#783](https://github.com/havenhq/revideo/issues/783)
* **2d:** prevent src warnings in Icon and Latex ([#899](https://github.com/havenhq/revideo/issues/899)) ([5eebab7](https://github.com/havenhq/revideo/commit/5eebab71d8061e233872e049e77b847f9fd077a1))
* **2d:** remove circular dependencies ([#780](https://github.com/havenhq/revideo/issues/780)) ([cdf3af5](https://github.com/havenhq/revideo/commit/cdf3af500a58151ee3549c6e728751aab3e6f75c))
* **2d:** smoothly play videos when presenting ([#600](https://github.com/havenhq/revideo/issues/600)) ([294fe6a](https://github.com/havenhq/revideo/commit/294fe6ac056ab074c77214fcf9035f53fac9258c)), closes [#578](https://github.com/havenhq/revideo/issues/578)
* **2d:** some signal setters not returning owners ([#143](https://github.com/havenhq/revideo/issues/143)) ([09ab7f9](https://github.com/havenhq/revideo/commit/09ab7f96afcaae608399a653c0b4878ba9b467d4))
* **2d:** stop code highlighting from jumping ([#230](https://github.com/havenhq/revideo/issues/230)) ([67ef1c4](https://github.com/havenhq/revideo/commit/67ef1c497056dd1f8f9e20d1d7fc1af03ec3849e))
* **2d:** stop mutating children ([#903](https://github.com/havenhq/revideo/issues/903)) ([f9552a8](https://github.com/havenhq/revideo/commit/f9552a8658ccde6c7b2466ad40b12cf28c6ec805))
* **2d:** switch iframes to ShadowDOM ([#90](https://github.com/havenhq/revideo/issues/90)) ([86176be](https://github.com/havenhq/revideo/commit/86176be055c08aba59272afcda00ed586f6c7ad6))
* **2d:** textDirection property for RTL/LTR text ([#404](https://github.com/havenhq/revideo/issues/404)) ([f240b1b](https://github.com/havenhq/revideo/commit/f240b1bd140a884f6901b7cfcb97ce3e9ce4b48d))
* **2d:** textWrap not working in Firefox ([#541](https://github.com/havenhq/revideo/issues/541)) ([f10e057](https://github.com/havenhq/revideo/commit/f10e057fd13ed9dcc70ebc0ca63963708ec159c8)), closes [#517](https://github.com/havenhq/revideo/issues/517)
* **2d:** wait for reused async resources ([#599](https://github.com/havenhq/revideo/issues/599)) ([280e065](https://github.com/havenhq/revideo/commit/280e065fe69e9a744b7b12eb4609e7d87f76bb63)), closes [#593](https://github.com/havenhq/revideo/issues/593)
* account for italic fonts in cache ([#968](https://github.com/havenhq/revideo/issues/968)) ([abb0906](https://github.com/havenhq/revideo/commit/abb090695c4257d9877d0cb11954093c49149ddc)), closes [#934](https://github.com/havenhq/revideo/issues/934)
* await font load before drawing ([#31](https://github.com/havenhq/revideo/issues/31)) ([cbfb5cb](https://github.com/havenhq/revideo/commit/cbfb5cb136d85a657c99187da166b64aae8be3a1))
* await font load without throwing async node error ([#69](https://github.com/havenhq/revideo/issues/69)) ([fddebe6](https://github.com/havenhq/revideo/commit/fddebe60a610af718c880b9e198eebe8555ea9a5))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/havenhq/revideo/issues/62)) ([04cdc5b](https://github.com/havenhq/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* **ffmpeg:** looping of video tag ([#122](https://github.com/havenhq/revideo/issues/122)) ([109c675](https://github.com/havenhq/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* fix compound property setter ([#218](https://github.com/havenhq/revideo/issues/218)) ([6cd1b95](https://github.com/havenhq/revideo/commit/6cd1b952df950554eb637c9f8e82947c415d00c5)), closes [#208](https://github.com/havenhq/revideo/issues/208) [#210](https://github.com/havenhq/revideo/issues/210)
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* plug memory leaks ([#385](https://github.com/havenhq/revideo/issues/385)) ([de0af00](https://github.com/havenhq/revideo/commit/de0af00a7d2e019e2a933791c62b7901755be7b0))
* prevent consumePromises from halting ([#657](https://github.com/havenhq/revideo/issues/657)) ([363a189](https://github.com/havenhq/revideo/commit/363a189b0c7f5926c9d5ae00b58b48e8ed4d9b48))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* previous scene being rendered twice ([#97](https://github.com/havenhq/revideo/issues/97)) ([90205bd](https://github.com/havenhq/revideo/commit/90205bdc1a086abe5f73b04cb4616c6af5ec4377))
* restrict size of cache canvas ([#544](https://github.com/havenhq/revideo/issues/544)) ([49ec554](https://github.com/havenhq/revideo/commit/49ec55490718e503d9a39437ae13c189dc4fe9ea))
* support color to null tweening ([#387](https://github.com/havenhq/revideo/issues/387)) ([02e9f22](https://github.com/havenhq/revideo/commit/02e9f22027a1c3a85ffcc259aeca913318fb6f54))
* support legacy imports again ([#868](https://github.com/havenhq/revideo/issues/868)) ([77c4e2e](https://github.com/havenhq/revideo/commit/77c4e2eeb8b0f73bdef1f72e3d81f34c79748929))
* support multiple async players ([#450](https://github.com/havenhq/revideo/issues/450)) ([d7ec469](https://github.com/havenhq/revideo/commit/d7ec469e747eefd909f4dd59dd713f5d86308222)), closes [#434](https://github.com/havenhq/revideo/issues/434)
* typo on codeblock remove comments ([#368](https://github.com/havenhq/revideo/issues/368)) ([2025adc](https://github.com/havenhq/revideo/commit/2025adc6e7aa11d81b6f5f6989e8eae18cf86cb7))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Code Refactoring

* introduce improved names ([#425](https://github.com/havenhq/revideo/issues/425)) ([4a2188d](https://github.com/havenhq/revideo/commit/4a2188d339587fa658b2134befc3fe63c835c5d7))
* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* **2d:** add antialiased signal to Shape ([#282](https://github.com/havenhq/revideo/issues/282)) ([7c6905d](https://github.com/havenhq/revideo/commit/7c6905d72c6c2f49e10f0a80704c0afe3504d01b))
* **2d:** add arcLength helper methods to Curve ([#627](https://github.com/havenhq/revideo/issues/627)) ([3c7546e](https://github.com/havenhq/revideo/commit/3c7546e7a509deb6fff8f669c3df0a69b492bd2e))
* **2d:** add Bézier nodes ([#603](https://github.com/havenhq/revideo/issues/603)) ([9841cfd](https://github.com/havenhq/revideo/commit/9841cfdc3947ca4e6d6e42ed21eae88e855f855d))
* **2d:** add cardinal points ([#636](https://github.com/havenhq/revideo/issues/636)) ([2136a25](https://github.com/havenhq/revideo/commit/2136a2558a9ed968ee505e4e5cce33d989dfdc13)), closes [#391](https://github.com/havenhq/revideo/issues/391)
* **2d:** add closed property for circle ([#378](https://github.com/havenhq/revideo/issues/378)) ([62a9605](https://github.com/havenhq/revideo/commit/62a9605d4c54e7bf2d2d44d47bf769f5b27378a5))
* **2d:** add completion property for curves ([#635](https://github.com/havenhq/revideo/issues/635)) ([6577d6d](https://github.com/havenhq/revideo/commit/6577d6ddfaf779ba02f3862d2a357166138b99ca))
* **2d:** add default computed values for signals ([#259](https://github.com/havenhq/revideo/issues/259)) ([18f61a6](https://github.com/havenhq/revideo/commit/18f61a668420dec8afba52d52a6557e7a7919ba2))
* **2d:** add Icon Component ([#306](https://github.com/havenhq/revideo/issues/306)) ([3479631](https://github.com/havenhq/revideo/commit/3479631ef34e39f90a8d8de441317672be1840d9)), closes [#305](https://github.com/havenhq/revideo/issues/305)
* **2d:** add LaTeX component ([#228](https://github.com/havenhq/revideo/issues/228)) ([4c26d2a](https://github.com/havenhq/revideo/commit/4c26d2aaf0c697486639aa917cd5c585d3d0ea74))
* **2d:** add line counter for CodeBlock ([#802](https://github.com/havenhq/revideo/issues/802)) ([c3f9676](https://github.com/havenhq/revideo/commit/c3f9676b6984731a09a44ab0b1fcfc226975fa08))
* **2d:** add methods for rearranging children ([#81](https://github.com/havenhq/revideo/issues/81)) ([63f6c1a](https://github.com/havenhq/revideo/commit/63f6c1aa51ac4ecd093151c8cd30910f2e72bcac))
* **2d:** add moveBelow, moveAbove and moveTo methods to Node ([#365](https://github.com/havenhq/revideo/issues/365)) ([16752a3](https://github.com/havenhq/revideo/commit/16752a3b8ae7461b33d6208a9675729f374e8324))
* **2d:** add option for preformatted text ([#147](https://github.com/havenhq/revideo/issues/147)) ([989be53](https://github.com/havenhq/revideo/commit/989be532d86642e1125bb7fa62a801b09c1b8f26))
* **2d:** add Path component ([#700](https://github.com/havenhq/revideo/issues/700)) ([2128b6b](https://github.com/havenhq/revideo/commit/2128b6bf871cabe19e1abc749f18945c78c01f84))
* **2d:** add playbackRate signal to Video component ([#831](https://github.com/havenhq/revideo/issues/831)) ([5902b82](https://github.com/havenhq/revideo/commit/5902b824b36400876be0ee970e2c6211299faf21)), closes [#711](https://github.com/havenhq/revideo/issues/711)
* **2d:** add Polygon component ([#463](https://github.com/havenhq/revideo/issues/463)) ([15adb3e](https://github.com/havenhq/revideo/commit/15adb3e312a4998b44c0b9c5fe5b5236f51c71c9)), closes [#455](https://github.com/havenhq/revideo/issues/455)
* **2d:** add querying helpers ([#852](https://github.com/havenhq/revideo/issues/852)) ([614de6b](https://github.com/havenhq/revideo/commit/614de6bd8542322d1db4b123b875f6fad85cc4eb))
* **2d:** add Ray node ([#628](https://github.com/havenhq/revideo/issues/628)) ([649447c](https://github.com/havenhq/revideo/commit/649447cd5f2089afc64cc7bd4b0276e69d1e9a30))
* **2d:** add save and restore methods to nodes ([#406](https://github.com/havenhq/revideo/issues/406)) ([870e194](https://github.com/havenhq/revideo/commit/870e1947d97382bc6d82857c077140bbef7cf7e8))
* **2d:** add skew property ([#803](https://github.com/havenhq/revideo/issues/803)) ([eff7c7b](https://github.com/havenhq/revideo/commit/eff7c7be0c013139140b398350242457736d48c7))
* **2d:** add smooth corners and sharpness to rect ([#310](https://github.com/havenhq/revideo/issues/310)) ([f7fbefd](https://github.com/havenhq/revideo/commit/f7fbefd27f7f6972cfb5a45a68e5d0aed9593ae4))
* **2d:** add spline node ([#514](https://github.com/havenhq/revideo/issues/514)) ([3ce2111](https://github.com/havenhq/revideo/commit/3ce2111309e698450dc4c6e2ad47024995863e73))
* **2d:** add start and end signals to Grid node ([#761](https://github.com/havenhq/revideo/issues/761)) ([e37ea80](https://github.com/havenhq/revideo/commit/e37ea806b94e93c6324d8e1b502468925b731e8e))
* **2d:** add SVG component ([#763](https://github.com/havenhq/revideo/issues/763)) ([8eadc11](https://github.com/havenhq/revideo/commit/8eadc11937d4201545894f2f5b204d477a3f9094))
* **2d:** add textAlign property ([#451](https://github.com/havenhq/revideo/issues/451)) ([3d15825](https://github.com/havenhq/revideo/commit/3d15825f3cc5a35ba081a31510741b824f3bc6ab)), closes [#303](https://github.com/havenhq/revideo/issues/303)
* **2d:** add video component property getter ([#240](https://github.com/havenhq/revideo/issues/240)) ([59de5ab](https://github.com/havenhq/revideo/commit/59de5ab2c089589773a2f9ad7588eda7d72693a7))
* **2d:** add z-index property to nodes ([#398](https://github.com/havenhq/revideo/issues/398)) ([4280af3](https://github.com/havenhq/revideo/commit/4280af3b4b7bd5970fe5e743949a0fcca2c314f3))
* **2d:** always clip images and videos ([#773](https://github.com/havenhq/revideo/issues/773)) ([3938c59](https://github.com/havenhq/revideo/commit/3938c59394bfc42e5562504687d783ff306d7d32))
* **2d:** clamp opacity value between 0 and 1 ([#835](https://github.com/havenhq/revideo/issues/835)) ([c54b2f8](https://github.com/havenhq/revideo/commit/c54b2f837a8e8b872df3610f4cc6caa94a728500)), closes [#830](https://github.com/havenhq/revideo/issues/830)
* **2d:** code bounding box helpers ([#948](https://github.com/havenhq/revideo/issues/948)) ([0ffd56f](https://github.com/havenhq/revideo/commit/0ffd56f5f8076913e687e5b908311aa7832d8b7b))
* **2d:** code range helpers ([#947](https://github.com/havenhq/revideo/issues/947)) ([044c9ac](https://github.com/havenhq/revideo/commit/044c9acd6ee7e4e337fb4d51286126f583a8da6f))
* **2d:** code selection and modification ([#163](https://github.com/havenhq/revideo/issues/163)) ([e8e884a](https://github.com/havenhq/revideo/commit/e8e884a1a5574425dbf15272718911c12cfa2327))
* **2d:** construct lines using signals ([#133](https://github.com/havenhq/revideo/issues/133)) ([2968a24](https://github.com/havenhq/revideo/commit/2968a2426564469fb4f4343fe71a6d30e95361f2))
* **2d:** immediate restore ([#736](https://github.com/havenhq/revideo/issues/736)) ([634d51d](https://github.com/havenhq/revideo/commit/634d51d2afe8a536673c364874f8f3d1a450b846))
* **2d:** improve property declarations ([27e7d26](https://github.com/havenhq/revideo/commit/27e7d267ee91bf1e8ca79686b6ec31347f9f4d41))
* **2d:** improve Rect corner radius ([#120](https://github.com/havenhq/revideo/issues/120)) ([b471fe0](https://github.com/havenhq/revideo/commit/b471fe0e37c0a426d3af8299c9c3c22539e7df05))
* **2d:** improve Video node ([#601](https://github.com/havenhq/revideo/issues/601)) ([3801d83](https://github.com/havenhq/revideo/commit/3801d83415bbdeeee5d6d53d0c18e5d9e78fba56))
* **2d:** make `View2D` extend `Rect` ([#379](https://github.com/havenhq/revideo/issues/379)) ([93db5fc](https://github.com/havenhq/revideo/commit/93db5fc41617c0902e85fda90fbfc930c2b4634b))
* **2d:** make Circle extend Curve ([#771](https://github.com/havenhq/revideo/issues/771)) ([4c8cf19](https://github.com/havenhq/revideo/commit/4c8cf1954093958eac507921dc18f67dd64b2052))
* **2d:** make Polygon extend Curve ([#961](https://github.com/havenhq/revideo/issues/961)) ([739c9fc](https://github.com/havenhq/revideo/commit/739c9fccbc101f8b2eed680a11c00f317fdc4dd3))
* **2d:** make Rect extend Curve ([#759](https://github.com/havenhq/revideo/issues/759)) ([9810212](https://github.com/havenhq/revideo/commit/9810212648824b9a2fa2ecd6b597e3319d20b325))
* **2d:** nested Txt nodes ([#861](https://github.com/havenhq/revideo/issues/861)) ([f2786d0](https://github.com/havenhq/revideo/commit/f2786d0cd0d06065ca1e9eb9f6b4c11a74b6c283)), closes [#540](https://github.com/havenhq/revideo/issues/540)
* **2d:** simplify layout prop ([c24cb12](https://github.com/havenhq/revideo/commit/c24cb12a22b7c85fdfb051917fa9ee1e0911717c))
* **2d:** support HMR for images ([#641](https://github.com/havenhq/revideo/issues/641)) ([cf17520](https://github.com/havenhq/revideo/commit/cf17520aa8ddf19dcfc419c63cf7255892d45b71))
* **2d:** support letter spacing in Code ([#955](https://github.com/havenhq/revideo/issues/955)) ([2a87c37](https://github.com/havenhq/revideo/commit/2a87c37c832de86c4b524b33fd68806627daec8b))
* **2d:** support tweening in applyState ([#859](https://github.com/havenhq/revideo/issues/859)) ([b7ed2e2](https://github.com/havenhq/revideo/commit/b7ed2e24773227e5b576ff056eb23de9b9ff1676))
* **2d:** support tweening Line points ([#853](https://github.com/havenhq/revideo/issues/853)) ([4bf37d7](https://github.com/havenhq/revideo/commit/4bf37d74d2e4bb9d9cc034aff121a32da9a6d146))
* **2d:** unify desired sizes ([#118](https://github.com/havenhq/revideo/issues/118)) ([401a799](https://github.com/havenhq/revideo/commit/401a79946b034a96b9abff2f3fb5efd6cc9080f3))
* **2d:** unify layout properties ([#355](https://github.com/havenhq/revideo/issues/355)) ([3cae97e](https://github.com/havenhq/revideo/commit/3cae97ea704d0533020fa87326dacadcc037d517)), closes [#352](https://github.com/havenhq/revideo/issues/352)
* **2d:** warn about missing image source ([#817](https://github.com/havenhq/revideo/issues/817)) ([6dcdb5f](https://github.com/havenhq/revideo/commit/6dcdb5f3b83d4860b1557e4745972e0af68f92f3))
* add advanced caching ([#69](https://github.com/havenhq/revideo/issues/69)) ([2a644c9](https://github.com/havenhq/revideo/commit/2a644c9315acfcc5280a5eacc9904df140a61e4f))
* add base class for shapes ([#67](https://github.com/havenhq/revideo/issues/67)) ([d38c172](https://github.com/havenhq/revideo/commit/d38c1724e129c553739cbfc27c4e5cd8f737f067))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add cloning ([#80](https://github.com/havenhq/revideo/issues/80)) ([47d7a0f](https://github.com/havenhq/revideo/commit/47d7a0fa5da9a03d8ed91557db651f6f960e28b1))
* add CodeBlock component based on code-fns to 2D ([#78](https://github.com/havenhq/revideo/issues/78)) ([ad346f1](https://github.com/havenhq/revideo/commit/ad346f118d63b1e321ec315e1c70b925670124a1))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add default renderer ([#63](https://github.com/havenhq/revideo/issues/63)) ([9255490](https://github.com/havenhq/revideo/commit/92554900965fe088538f5e703dbab2fd84f904d7)), closes [#56](https://github.com/havenhq/revideo/issues/56) [#58](https://github.com/havenhq/revideo/issues/58)
* add DEG2RAD and RAD2DEG constants ([#630](https://github.com/havenhq/revideo/issues/630)) ([01801e8](https://github.com/havenhq/revideo/commit/01801e8766058e75a6a020400650fb00f8f430cc))
* add Grid node ([e1f83da](https://github.com/havenhq/revideo/commit/e1f83da1f43d20d392df4acb11e3df9cc457585d))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add middle cardinal point ([#758](https://github.com/havenhq/revideo/issues/758)) ([b036eaf](https://github.com/havenhq/revideo/commit/b036eafc00381831c08267a78cf9d74973f4025a))
* add missing flexbox properties ([#405](https://github.com/havenhq/revideo/issues/405)) ([4e78b4b](https://github.com/havenhq/revideo/commit/4e78b4b2fe4df42ce0a8da6fd41ad38b0104e7f5))
* add missing layout props ([#72](https://github.com/havenhq/revideo/issues/72)) ([f808a56](https://github.com/havenhq/revideo/commit/f808a562b192fd03dba4b0d353284db344d6a80b))
* add node spawners ([#149](https://github.com/havenhq/revideo/issues/149)) ([da18a4e](https://github.com/havenhq/revideo/commit/da18a4e24104022a84ecd6cec1666b520186058f))
* add polyline ([#84](https://github.com/havenhq/revideo/issues/84)) ([4ceaf84](https://github.com/havenhq/revideo/commit/4ceaf842915ac43d81f292c58a4dc73a8d1bb8e9))
* add random number generator ([#116](https://github.com/havenhq/revideo/issues/116)) ([d505312](https://github.com/havenhq/revideo/commit/d5053123eef308c7a2a61d92b6e76c637f4ed0b8)), closes [#14](https://github.com/havenhq/revideo/issues/14)
* add reparent helper ([80b95a9](https://github.com/havenhq/revideo/commit/80b95a9ce89d4a2eeea7e467257486e961602d69))
* add Text and Image components ([#70](https://github.com/havenhq/revideo/issues/70)) ([85c7dcd](https://github.com/havenhq/revideo/commit/85c7dcdb4f8ca2f0bfb03950c85a8d6f6652fcdf))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/havenhq/revideo/issues/9)) ([9e0d67b](https://github.com/havenhq/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* added a theme property to the CodeBlock component ([#279](https://github.com/havenhq/revideo/issues/279)) ([fe34fa8](https://github.com/havenhq/revideo/commit/fe34fa8ebfe66cd356fb1c3d85adedef11e03b45))
* better children and spawners ([#858](https://github.com/havenhq/revideo/issues/858)) ([9b5c23d](https://github.com/havenhq/revideo/commit/9b5c23d2076180cf710656c817369a07b253e3ec))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* convert built-in types to webgl ([#929](https://github.com/havenhq/revideo/issues/929)) ([a0f0b7d](https://github.com/havenhq/revideo/commit/a0f0b7d8996547e1a316097422ec02bddeeccec6))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* **core:** tree shaking ([#523](https://github.com/havenhq/revideo/issues/523)) ([65fec78](https://github.com/havenhq/revideo/commit/65fec7825fda33812b13f57bfeb1d82193a5d190))
* **docs:** fiddle editor ([#542](https://github.com/havenhq/revideo/issues/542)) ([3c68fef](https://github.com/havenhq/revideo/commit/3c68fefdf7bf375ee9345aba7dbf9e5ff35e3c3d))
* export everything from entry points ([#710](https://github.com/havenhq/revideo/issues/710)) ([3c885d9](https://github.com/havenhq/revideo/commit/3c885d9083b52fbbaccf1e2560ae50817949bc52))
* filter reordering ([#119](https://github.com/havenhq/revideo/issues/119)) ([2398d0f](https://github.com/havenhq/revideo/commit/2398d0f9d57f36b47c9c66a988ca5607e9a3a30e))
* implement absolute scale setter ([842079a](https://github.com/havenhq/revideo/commit/842079a6547af4032719c85837df3db7c1c6d30a))
* improve async signals ([#156](https://github.com/havenhq/revideo/issues/156)) ([db27b9d](https://github.com/havenhq/revideo/commit/db27b9d5fb69a88f42afd98c86c4a1cdceb88ea1))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* improve image error handling ([#847](https://github.com/havenhq/revideo/issues/847)) ([db09d53](https://github.com/havenhq/revideo/commit/db09d5305a3c0507b035e3cd347eaa65b23d7d2e))
* introduce basic caching ([#68](https://github.com/havenhq/revideo/issues/68)) ([6420d36](https://github.com/havenhq/revideo/commit/6420d362d0e4ae058f55b6ff6bb2a3a32dec559b))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make transparent video optional ([#91](https://github.com/havenhq/revideo/issues/91)) ([6a052d5](https://github.com/havenhq/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* merge properties and signals ([#124](https://github.com/havenhq/revideo/issues/124)) ([da3ba83](https://github.com/havenhq/revideo/commit/da3ba83d82ee74f5a5c3631b07597f08cdf9e8e4))
* minor improvements ([403c7c2](https://github.com/havenhq/revideo/commit/403c7c27ad969880a14c498ec6cefb9e7e7b7544))
* minor improvements ([#77](https://github.com/havenhq/revideo/issues/77)) ([7c6e584](https://github.com/havenhq/revideo/commit/7c6e584aca353c9af55f0acb61b32b5f99727dba))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* new animator ([#91](https://github.com/havenhq/revideo/issues/91)) ([d85f2f8](https://github.com/havenhq/revideo/commit/d85f2f8a54c0f8bbfbc451884385f30e5b3ec206))
* new Code node ([#946](https://github.com/havenhq/revideo/issues/946)) ([26e55a3](https://github.com/havenhq/revideo/commit/26e55a37c416fb1313c8aadf40eed2824b45d330))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/havenhq/revideo/issues/33)) ([a6e1bcd](https://github.com/havenhq/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* serve assets through cli ([#124](https://github.com/havenhq/revideo/issues/124)) ([fdccde1](https://github.com/havenhq/revideo/commit/fdccde12f058811382e7e2084ebe4b9e05af1b80))
* signal error handling ([#89](https://github.com/havenhq/revideo/issues/89)) ([472ac65](https://github.com/havenhq/revideo/commit/472ac65938b804a6b698c8522ec0c3b6bdbcf1b1))
* simplify size access ([#65](https://github.com/havenhq/revideo/issues/65)) ([3315e64](https://github.com/havenhq/revideo/commit/3315e64641e9778bc48ea3fb707e3c0eeb581dfe))
* simplify size access further ([#66](https://github.com/havenhq/revideo/issues/66)) ([9091a5e](https://github.com/havenhq/revideo/commit/9091a5e05d8fadf72c50832c7c4467ac4424b72c))
* switch to signals ([#64](https://github.com/havenhq/revideo/issues/64)) ([d22d237](https://github.com/havenhq/revideo/commit/d22d23728597e6fa82ea5c5a99a6c0a56819bded))
* transparent video ([#75](https://github.com/havenhq/revideo/issues/75)) ([5f7b909](https://github.com/havenhq/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))
* turn Layout into node ([#75](https://github.com/havenhq/revideo/issues/75)) ([cdf8dc0](https://github.com/havenhq/revideo/commit/cdf8dc0a35522482dee2dd78a69606b79f52246e))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** scene graph icons ([#914](https://github.com/havenhq/revideo/issues/914)) ([e92ddef](https://github.com/havenhq/revideo/commit/e92ddef34860f5e710ff0f1a310758ec0ca95bcb))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* unify references and signals ([#137](https://github.com/havenhq/revideo/issues/137)) ([063aede](https://github.com/havenhq/revideo/commit/063aede0842f948d2c6704c6edd426e954bb4668))
* upgrade code-fns for new theme options and lazy loading ([#401](https://github.com/havenhq/revideo/issues/401)) ([8965ab1](https://github.com/havenhq/revideo/commit/8965ab1bef8b6ae919c8001d0527f5793293b285)), closes [#396](https://github.com/havenhq/revideo/issues/396) [#322](https://github.com/havenhq/revideo/issues/322)
* use ES modules in fiddles ([#712](https://github.com/havenhq/revideo/issues/712)) ([dbe2ad5](https://github.com/havenhq/revideo/commit/dbe2ad5644219c5a98d38c6557abfb66d793c821))
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))
* world space cache ([#498](https://github.com/havenhq/revideo/issues/498)) ([633e9e1](https://github.com/havenhq/revideo/commit/633e9e140dfbbe397df6ddc1f96ed30782ddce94)), closes [#342](https://github.com/havenhq/revideo/issues/342)


### Reverts

* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))
* feat: upgrade code-fns for new theme options and lazy loading ([#435](https://github.com/havenhq/revideo/issues/435)) ([3f5e439](https://github.com/havenhq/revideo/commit/3f5e43968f7add7c6322c9c8358d3b6fc178c2fe))


### BREAKING CHANGES

* multiple name changes

To avoid collisions, names of certain classes have changed:
- `Text => Txt`
- `Image => Img`
- `Rect (type) => BBox`

Cache related methods of `Node` have changed:
- `getCacheRect => getCacheBBox`
- `cacheRect => cacheBBox`
- `fullCacheRect => fullCacheBBox`

The `CodeBlock` property has changed:
- `CodeBlock.selectionOpacity => CodeBlock.unselectedOpacity`
* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
* remove legacy package





# 0.4.0 (2024-06-11)


### Bug Fixes

* **2d:** account for offset in cardinal points ([#883](https://github.com/havenhq/revideo/issues/883)) ([24da258](https://github.com/havenhq/revideo/commit/24da258f5937087b363eeb9146a9d22747b02e70)), closes [#882](https://github.com/havenhq/revideo/issues/882)
* **2d:** account for spawners in scene graph ([#935](https://github.com/havenhq/revideo/issues/935)) ([ca325f5](https://github.com/havenhq/revideo/commit/ca325f5ad0ae987e76106f5e65fef3ed7b3ca08d))
* **2d:** add missing Curve properties to Circle ([#805](https://github.com/havenhq/revideo/issues/805)) ([38c7900](https://github.com/havenhq/revideo/commit/38c79000403d7c3c99dde9e4c825a448d5f55054))
* **2d:** add missing Fragment export ([#553](https://github.com/havenhq/revideo/issues/553)) ([229afb4](https://github.com/havenhq/revideo/commit/229afb4fe7d95f09b480ab4a813f8dff549f381f))
* **2d:** add missing jsx dev runtime ([#547](https://github.com/havenhq/revideo/issues/547)) ([d61cb7d](https://github.com/havenhq/revideo/commit/d61cb7dd24ab66ae17d5bd6f5ccb34c4fd1e7569)), closes [#545](https://github.com/havenhq/revideo/issues/545)
* **2d:** add missing middle property ([#891](https://github.com/havenhq/revideo/issues/891)) ([61e2e96](https://github.com/havenhq/revideo/commit/61e2e96e3b8f37a68ebdddb432baba04858fd4f3))
* **2d:** add missing shape export ([#111](https://github.com/havenhq/revideo/issues/111)) ([02a1fa7](https://github.com/havenhq/revideo/commit/02a1fa7ea62155e498809f2e57ff29a18c82ac12))
* **2d:** better error handling ([#524](https://github.com/havenhq/revideo/issues/524)) ([b7475ba](https://github.com/havenhq/revideo/commit/b7475ba5ff35d37ee198577d1205d6ecd6fd2092))
* **2d:** calculate arrow orientations for curves correctly ([#597](https://github.com/havenhq/revideo/issues/597)) ([1626811](https://github.com/havenhq/revideo/commit/1626811ec4cd1bd2a3d43e393ced40a7da462c3a))
* **2d:** calculate Txt cache bbox from contents ([#836](https://github.com/havenhq/revideo/issues/836)) ([33e1a12](https://github.com/havenhq/revideo/commit/33e1a1296f21d26e9ed45ae92132825dca17054d)), closes [#465](https://github.com/havenhq/revideo/issues/465)
* **2d:** clone size correctly ([#562](https://github.com/havenhq/revideo/issues/562)) ([cdd3df1](https://github.com/havenhq/revideo/commit/cdd3df1bff25b04b905e289264831d8d328caaab)), closes [#559](https://github.com/havenhq/revideo/issues/559)
* **2d:** correct layout defaults ([#442](https://github.com/havenhq/revideo/issues/442)) ([c116c35](https://github.com/havenhq/revideo/commit/c116c355179ba3b2487634fb82b9a5bc2ea266bf))
* **2d:** correctly append Txt nodes to view ([#644](https://github.com/havenhq/revideo/issues/644)) ([24bb51a](https://github.com/havenhq/revideo/commit/24bb51aa04778c33ce327926b27332efaa554e5f))
* **2d:** correctly support external image urls ([#678](https://github.com/havenhq/revideo/issues/678)) ([a08556b](https://github.com/havenhq/revideo/commit/a08556b6e2822a55db593f610ea4dd6cb8494adb)), closes [#677](https://github.com/havenhq/revideo/issues/677)
* **2d:** fix cache bbox for lines ([#467](https://github.com/havenhq/revideo/issues/467)) ([9fd1444](https://github.com/havenhq/revideo/commit/9fd144417bb0b6301da6c522a988775f5ff142ac)), closes [#466](https://github.com/havenhq/revideo/issues/466)
* **2d:** fix circle segment ([#557](https://github.com/havenhq/revideo/issues/557)) ([adebff4](https://github.com/havenhq/revideo/commit/adebff492b76a512d79151b00adf1b383d25c5b5))
* **2d:** fix CodeBlock types ([#563](https://github.com/havenhq/revideo/issues/563)) ([25160fa](https://github.com/havenhq/revideo/commit/25160fa4d92af88429110356e42f6e3b4f88a90f)), closes [#560](https://github.com/havenhq/revideo/issues/560)
* **2d:** fix curve arrow alignment when animating start signal ([#615](https://github.com/havenhq/revideo/issues/615)) ([2fefc40](https://github.com/havenhq/revideo/commit/2fefc4026050159ba204c7629832ad83e8bfa51b))
* **2d:** fix cyclic dependency in cardinal points ([#645](https://github.com/havenhq/revideo/issues/645)) ([def23f9](https://github.com/havenhq/revideo/commit/def23f925ee7200c8740ecd51c7f6117d67b6ef8))
* **2d:** fix font ligatures in CodeBlock ([#231](https://github.com/havenhq/revideo/issues/231)) ([11ee3fe](https://github.com/havenhq/revideo/commit/11ee3fef5ad878313cf19833df6881333ced4dac))
* **2d:** fix Gradient and Pattern signals ([#376](https://github.com/havenhq/revideo/issues/376)) ([6e0dc8a](https://github.com/havenhq/revideo/commit/6e0dc8af8d19f93fd6a42addca2b3a2958b4dd33))
* **2d:** fix height when tweening text ([#905](https://github.com/havenhq/revideo/issues/905)) ([1c6a796](https://github.com/havenhq/revideo/commit/1c6a7965be137c1ab69741cdd1e9aaa6df4208c4))
* **2d:** fix import order ([#94](https://github.com/havenhq/revideo/issues/94)) ([bcc0bcf](https://github.com/havenhq/revideo/commit/bcc0bcffae47855bd8f7ab06454aaebe93c4aa24)), closes [#76](https://github.com/havenhq/revideo/issues/76)
* **2d:** fix initial value of endOffset ([#433](https://github.com/havenhq/revideo/issues/433)) ([9fe82b3](https://github.com/havenhq/revideo/commit/9fe82b3d21ba0150a2378e541a4652ca707c2d15))
* **2d:** fix layout calculation for nodes not explicitly added to view ([#331](https://github.com/havenhq/revideo/issues/331)) ([528e2d5](https://github.com/havenhq/revideo/commit/528e2d5a0abec99819e022d2848b256ece9f869a))
* **2d:** fix letterSpacing ([#448](https://github.com/havenhq/revideo/issues/448)) ([bb5ffc4](https://github.com/havenhq/revideo/commit/bb5ffc48efa82b9db818e8e52aa35e9c2ad8ce89)), closes [#447](https://github.com/havenhq/revideo/issues/447)
* **2d:** fix line arc length ([#503](https://github.com/havenhq/revideo/issues/503)) ([4f1cd59](https://github.com/havenhq/revideo/commit/4f1cd59e6bcba0b16b36be88b28a60ae46d4d9ab)), closes [#497](https://github.com/havenhq/revideo/issues/497)
* **2d:** fix Line cache ([#232](https://github.com/havenhq/revideo/issues/232)) ([a953b64](https://github.com/havenhq/revideo/commit/a953b64540c020657845efc84d4179142a7a0974)), closes [#205](https://github.com/havenhq/revideo/issues/205)
* **2d:** fix line jitter under certain conditions ([#863](https://github.com/havenhq/revideo/issues/863)) ([fb110a2](https://github.com/havenhq/revideo/commit/fb110a2f3583fc040bf2c39560934162bd146d9b))
* **2d:** fix Line overview crashing ([#142](https://github.com/havenhq/revideo/issues/142)) ([6bd5fd9](https://github.com/havenhq/revideo/commit/6bd5fd941e583e44f5d920ecd20215efb1eed58a))
* **2d:** fix nested cache canvases ([#554](https://github.com/havenhq/revideo/issues/554)) ([e601441](https://github.com/havenhq/revideo/commit/e6014413b215af6fb1a7953f8db83893d4025f0b)), closes [#551](https://github.com/havenhq/revideo/issues/551)
* **2d:** fix package.json entry ([#720](https://github.com/havenhq/revideo/issues/720)) ([12e9bf6](https://github.com/havenhq/revideo/commit/12e9bf6f40ab7afc02e2f55260544f3864920ded))
* **2d:** fix signal initialization ([#382](https://github.com/havenhq/revideo/issues/382)) ([ea36e79](https://github.com/havenhq/revideo/commit/ea36e791a20bfd1b491ffa9917be686c51bc3899))
* **2d:** fix tweening cardinal points ([#829](https://github.com/havenhq/revideo/issues/829)) ([cc16737](https://github.com/havenhq/revideo/commit/cc16737cd59081582fbb488a880e8d3c11c14918))
* **2d:** fix Txt decorators ([#526](https://github.com/havenhq/revideo/issues/526)) ([25b30ed](https://github.com/havenhq/revideo/commit/25b30ed3861f46d72147335480912ce5f564be79))
* **2d:** fix types ([#659](https://github.com/havenhq/revideo/issues/659)) ([a32af29](https://github.com/havenhq/revideo/commit/a32af29ef3bd2e5dbf08697ebfee53230fceadc1))
* **2d:** format whitespaces according to HTML ([#372](https://github.com/havenhq/revideo/issues/372)) ([83fb565](https://github.com/havenhq/revideo/commit/83fb565742d98f060c0400c8cbaf9961b69f34d0)), closes [#370](https://github.com/havenhq/revideo/issues/370)
* **2d:** handle division by zero in lines ([#407](https://github.com/havenhq/revideo/issues/407)) ([a17871a](https://github.com/havenhq/revideo/commit/a17871a2ce63dd5bb32bc719037327c4e9dde217))
* **2d:** handle floating point errors in acos ([#381](https://github.com/havenhq/revideo/issues/381)) ([5bca8fd](https://github.com/havenhq/revideo/commit/5bca8fd0bbdcf28f2793c124b7d6b0afd560c4b8))
* **2d:** handle lines with no points ([#233](https://github.com/havenhq/revideo/issues/233)) ([8108474](https://github.com/havenhq/revideo/commit/81084743dfad7b6419760796fda825047909d4d4)), closes [#212](https://github.com/havenhq/revideo/issues/212)
* **2d:** ignore children with disabled layout ([#669](https://github.com/havenhq/revideo/issues/669)) ([b98c462](https://github.com/havenhq/revideo/commit/b98c4625c3634495e86ca23d19355035e457db06)), closes [#580](https://github.com/havenhq/revideo/issues/580)
* **2d:** improve Curve hitbox ([#778](https://github.com/havenhq/revideo/issues/778)) ([8af723c](https://github.com/havenhq/revideo/commit/8af723c0322de39d2defe0363bba03f4f9542f08))
* **2d:** improve Rect radius ([#221](https://github.com/havenhq/revideo/issues/221)) ([3437e42](https://github.com/havenhq/revideo/commit/3437e42713a3f4a8d44d246ee01e2eb23b61e06a)), closes [#207](https://github.com/havenhq/revideo/issues/207)
* **2d:** make Text respect textWrap=pre ([#287](https://github.com/havenhq/revideo/issues/287)) ([cb07f4b](https://github.com/havenhq/revideo/commit/cb07f4bdf07edc8a086b934ca5ab769682b9a010))
* **2d:** minor fixes ([#915](https://github.com/havenhq/revideo/issues/915)) ([63cfc9e](https://github.com/havenhq/revideo/commit/63cfc9e033f2c2ac6d6ed2a0d8f615fcf642ab59))
* **2d:** point arrow heads in correct direction ([#792](https://github.com/havenhq/revideo/issues/792)) ([52ed52e](https://github.com/havenhq/revideo/commit/52ed52e963cc69a066a0353680acaca35b9c937a)), closes [#783](https://github.com/havenhq/revideo/issues/783)
* **2d:** prevent src warnings in Icon and Latex ([#899](https://github.com/havenhq/revideo/issues/899)) ([5eebab7](https://github.com/havenhq/revideo/commit/5eebab71d8061e233872e049e77b847f9fd077a1))
* **2d:** remove circular dependencies ([#780](https://github.com/havenhq/revideo/issues/780)) ([cdf3af5](https://github.com/havenhq/revideo/commit/cdf3af500a58151ee3549c6e728751aab3e6f75c))
* **2d:** smoothly play videos when presenting ([#600](https://github.com/havenhq/revideo/issues/600)) ([294fe6a](https://github.com/havenhq/revideo/commit/294fe6ac056ab074c77214fcf9035f53fac9258c)), closes [#578](https://github.com/havenhq/revideo/issues/578)
* **2d:** some signal setters not returning owners ([#143](https://github.com/havenhq/revideo/issues/143)) ([09ab7f9](https://github.com/havenhq/revideo/commit/09ab7f96afcaae608399a653c0b4878ba9b467d4))
* **2d:** stop code highlighting from jumping ([#230](https://github.com/havenhq/revideo/issues/230)) ([67ef1c4](https://github.com/havenhq/revideo/commit/67ef1c497056dd1f8f9e20d1d7fc1af03ec3849e))
* **2d:** stop mutating children ([#903](https://github.com/havenhq/revideo/issues/903)) ([f9552a8](https://github.com/havenhq/revideo/commit/f9552a8658ccde6c7b2466ad40b12cf28c6ec805))
* **2d:** switch iframes to ShadowDOM ([#90](https://github.com/havenhq/revideo/issues/90)) ([86176be](https://github.com/havenhq/revideo/commit/86176be055c08aba59272afcda00ed586f6c7ad6))
* **2d:** textDirection property for RTL/LTR text ([#404](https://github.com/havenhq/revideo/issues/404)) ([f240b1b](https://github.com/havenhq/revideo/commit/f240b1bd140a884f6901b7cfcb97ce3e9ce4b48d))
* **2d:** textWrap not working in Firefox ([#541](https://github.com/havenhq/revideo/issues/541)) ([f10e057](https://github.com/havenhq/revideo/commit/f10e057fd13ed9dcc70ebc0ca63963708ec159c8)), closes [#517](https://github.com/havenhq/revideo/issues/517)
* **2d:** wait for reused async resources ([#599](https://github.com/havenhq/revideo/issues/599)) ([280e065](https://github.com/havenhq/revideo/commit/280e065fe69e9a744b7b12eb4609e7d87f76bb63)), closes [#593](https://github.com/havenhq/revideo/issues/593)
* account for italic fonts in cache ([#968](https://github.com/havenhq/revideo/issues/968)) ([abb0906](https://github.com/havenhq/revideo/commit/abb090695c4257d9877d0cb11954093c49149ddc)), closes [#934](https://github.com/havenhq/revideo/issues/934)
* await font load before drawing ([#31](https://github.com/havenhq/revideo/issues/31)) ([cbfb5cb](https://github.com/havenhq/revideo/commit/cbfb5cb136d85a657c99187da166b64aae8be3a1))
* await font load without throwing async node error ([#69](https://github.com/havenhq/revideo/issues/69)) ([fddebe6](https://github.com/havenhq/revideo/commit/fddebe60a610af718c880b9e198eebe8555ea9a5))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/havenhq/revideo/issues/62)) ([04cdc5b](https://github.com/havenhq/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* **ffmpeg:** looping of video tag ([#122](https://github.com/havenhq/revideo/issues/122)) ([109c675](https://github.com/havenhq/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* fix compound property setter ([#218](https://github.com/havenhq/revideo/issues/218)) ([6cd1b95](https://github.com/havenhq/revideo/commit/6cd1b952df950554eb637c9f8e82947c415d00c5)), closes [#208](https://github.com/havenhq/revideo/issues/208) [#210](https://github.com/havenhq/revideo/issues/210)
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* plug memory leaks ([#385](https://github.com/havenhq/revideo/issues/385)) ([de0af00](https://github.com/havenhq/revideo/commit/de0af00a7d2e019e2a933791c62b7901755be7b0))
* prevent consumePromises from halting ([#657](https://github.com/havenhq/revideo/issues/657)) ([363a189](https://github.com/havenhq/revideo/commit/363a189b0c7f5926c9d5ae00b58b48e8ed4d9b48))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* previous scene being rendered twice ([#97](https://github.com/havenhq/revideo/issues/97)) ([90205bd](https://github.com/havenhq/revideo/commit/90205bdc1a086abe5f73b04cb4616c6af5ec4377))
* restrict size of cache canvas ([#544](https://github.com/havenhq/revideo/issues/544)) ([49ec554](https://github.com/havenhq/revideo/commit/49ec55490718e503d9a39437ae13c189dc4fe9ea))
* support color to null tweening ([#387](https://github.com/havenhq/revideo/issues/387)) ([02e9f22](https://github.com/havenhq/revideo/commit/02e9f22027a1c3a85ffcc259aeca913318fb6f54))
* support legacy imports again ([#868](https://github.com/havenhq/revideo/issues/868)) ([77c4e2e](https://github.com/havenhq/revideo/commit/77c4e2eeb8b0f73bdef1f72e3d81f34c79748929))
* support multiple async players ([#450](https://github.com/havenhq/revideo/issues/450)) ([d7ec469](https://github.com/havenhq/revideo/commit/d7ec469e747eefd909f4dd59dd713f5d86308222)), closes [#434](https://github.com/havenhq/revideo/issues/434)
* typo on codeblock remove comments ([#368](https://github.com/havenhq/revideo/issues/368)) ([2025adc](https://github.com/havenhq/revideo/commit/2025adc6e7aa11d81b6f5f6989e8eae18cf86cb7))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Code Refactoring

* introduce improved names ([#425](https://github.com/havenhq/revideo/issues/425)) ([4a2188d](https://github.com/havenhq/revideo/commit/4a2188d339587fa658b2134befc3fe63c835c5d7))
* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* **2d:** add antialiased signal to Shape ([#282](https://github.com/havenhq/revideo/issues/282)) ([7c6905d](https://github.com/havenhq/revideo/commit/7c6905d72c6c2f49e10f0a80704c0afe3504d01b))
* **2d:** add arcLength helper methods to Curve ([#627](https://github.com/havenhq/revideo/issues/627)) ([3c7546e](https://github.com/havenhq/revideo/commit/3c7546e7a509deb6fff8f669c3df0a69b492bd2e))
* **2d:** add Bézier nodes ([#603](https://github.com/havenhq/revideo/issues/603)) ([9841cfd](https://github.com/havenhq/revideo/commit/9841cfdc3947ca4e6d6e42ed21eae88e855f855d))
* **2d:** add cardinal points ([#636](https://github.com/havenhq/revideo/issues/636)) ([2136a25](https://github.com/havenhq/revideo/commit/2136a2558a9ed968ee505e4e5cce33d989dfdc13)), closes [#391](https://github.com/havenhq/revideo/issues/391)
* **2d:** add closed property for circle ([#378](https://github.com/havenhq/revideo/issues/378)) ([62a9605](https://github.com/havenhq/revideo/commit/62a9605d4c54e7bf2d2d44d47bf769f5b27378a5))
* **2d:** add completion property for curves ([#635](https://github.com/havenhq/revideo/issues/635)) ([6577d6d](https://github.com/havenhq/revideo/commit/6577d6ddfaf779ba02f3862d2a357166138b99ca))
* **2d:** add default computed values for signals ([#259](https://github.com/havenhq/revideo/issues/259)) ([18f61a6](https://github.com/havenhq/revideo/commit/18f61a668420dec8afba52d52a6557e7a7919ba2))
* **2d:** add Icon Component ([#306](https://github.com/havenhq/revideo/issues/306)) ([3479631](https://github.com/havenhq/revideo/commit/3479631ef34e39f90a8d8de441317672be1840d9)), closes [#305](https://github.com/havenhq/revideo/issues/305)
* **2d:** add LaTeX component ([#228](https://github.com/havenhq/revideo/issues/228)) ([4c26d2a](https://github.com/havenhq/revideo/commit/4c26d2aaf0c697486639aa917cd5c585d3d0ea74))
* **2d:** add line counter for CodeBlock ([#802](https://github.com/havenhq/revideo/issues/802)) ([c3f9676](https://github.com/havenhq/revideo/commit/c3f9676b6984731a09a44ab0b1fcfc226975fa08))
* **2d:** add methods for rearranging children ([#81](https://github.com/havenhq/revideo/issues/81)) ([63f6c1a](https://github.com/havenhq/revideo/commit/63f6c1aa51ac4ecd093151c8cd30910f2e72bcac))
* **2d:** add moveBelow, moveAbove and moveTo methods to Node ([#365](https://github.com/havenhq/revideo/issues/365)) ([16752a3](https://github.com/havenhq/revideo/commit/16752a3b8ae7461b33d6208a9675729f374e8324))
* **2d:** add option for preformatted text ([#147](https://github.com/havenhq/revideo/issues/147)) ([989be53](https://github.com/havenhq/revideo/commit/989be532d86642e1125bb7fa62a801b09c1b8f26))
* **2d:** add Path component ([#700](https://github.com/havenhq/revideo/issues/700)) ([2128b6b](https://github.com/havenhq/revideo/commit/2128b6bf871cabe19e1abc749f18945c78c01f84))
* **2d:** add playbackRate signal to Video component ([#831](https://github.com/havenhq/revideo/issues/831)) ([5902b82](https://github.com/havenhq/revideo/commit/5902b824b36400876be0ee970e2c6211299faf21)), closes [#711](https://github.com/havenhq/revideo/issues/711)
* **2d:** add Polygon component ([#463](https://github.com/havenhq/revideo/issues/463)) ([15adb3e](https://github.com/havenhq/revideo/commit/15adb3e312a4998b44c0b9c5fe5b5236f51c71c9)), closes [#455](https://github.com/havenhq/revideo/issues/455)
* **2d:** add querying helpers ([#852](https://github.com/havenhq/revideo/issues/852)) ([614de6b](https://github.com/havenhq/revideo/commit/614de6bd8542322d1db4b123b875f6fad85cc4eb))
* **2d:** add Ray node ([#628](https://github.com/havenhq/revideo/issues/628)) ([649447c](https://github.com/havenhq/revideo/commit/649447cd5f2089afc64cc7bd4b0276e69d1e9a30))
* **2d:** add save and restore methods to nodes ([#406](https://github.com/havenhq/revideo/issues/406)) ([870e194](https://github.com/havenhq/revideo/commit/870e1947d97382bc6d82857c077140bbef7cf7e8))
* **2d:** add skew property ([#803](https://github.com/havenhq/revideo/issues/803)) ([eff7c7b](https://github.com/havenhq/revideo/commit/eff7c7be0c013139140b398350242457736d48c7))
* **2d:** add smooth corners and sharpness to rect ([#310](https://github.com/havenhq/revideo/issues/310)) ([f7fbefd](https://github.com/havenhq/revideo/commit/f7fbefd27f7f6972cfb5a45a68e5d0aed9593ae4))
* **2d:** add spline node ([#514](https://github.com/havenhq/revideo/issues/514)) ([3ce2111](https://github.com/havenhq/revideo/commit/3ce2111309e698450dc4c6e2ad47024995863e73))
* **2d:** add start and end signals to Grid node ([#761](https://github.com/havenhq/revideo/issues/761)) ([e37ea80](https://github.com/havenhq/revideo/commit/e37ea806b94e93c6324d8e1b502468925b731e8e))
* **2d:** add SVG component ([#763](https://github.com/havenhq/revideo/issues/763)) ([8eadc11](https://github.com/havenhq/revideo/commit/8eadc11937d4201545894f2f5b204d477a3f9094))
* **2d:** add textAlign property ([#451](https://github.com/havenhq/revideo/issues/451)) ([3d15825](https://github.com/havenhq/revideo/commit/3d15825f3cc5a35ba081a31510741b824f3bc6ab)), closes [#303](https://github.com/havenhq/revideo/issues/303)
* **2d:** add video component property getter ([#240](https://github.com/havenhq/revideo/issues/240)) ([59de5ab](https://github.com/havenhq/revideo/commit/59de5ab2c089589773a2f9ad7588eda7d72693a7))
* **2d:** add z-index property to nodes ([#398](https://github.com/havenhq/revideo/issues/398)) ([4280af3](https://github.com/havenhq/revideo/commit/4280af3b4b7bd5970fe5e743949a0fcca2c314f3))
* **2d:** always clip images and videos ([#773](https://github.com/havenhq/revideo/issues/773)) ([3938c59](https://github.com/havenhq/revideo/commit/3938c59394bfc42e5562504687d783ff306d7d32))
* **2d:** clamp opacity value between 0 and 1 ([#835](https://github.com/havenhq/revideo/issues/835)) ([c54b2f8](https://github.com/havenhq/revideo/commit/c54b2f837a8e8b872df3610f4cc6caa94a728500)), closes [#830](https://github.com/havenhq/revideo/issues/830)
* **2d:** code bounding box helpers ([#948](https://github.com/havenhq/revideo/issues/948)) ([0ffd56f](https://github.com/havenhq/revideo/commit/0ffd56f5f8076913e687e5b908311aa7832d8b7b))
* **2d:** code range helpers ([#947](https://github.com/havenhq/revideo/issues/947)) ([044c9ac](https://github.com/havenhq/revideo/commit/044c9acd6ee7e4e337fb4d51286126f583a8da6f))
* **2d:** code selection and modification ([#163](https://github.com/havenhq/revideo/issues/163)) ([e8e884a](https://github.com/havenhq/revideo/commit/e8e884a1a5574425dbf15272718911c12cfa2327))
* **2d:** construct lines using signals ([#133](https://github.com/havenhq/revideo/issues/133)) ([2968a24](https://github.com/havenhq/revideo/commit/2968a2426564469fb4f4343fe71a6d30e95361f2))
* **2d:** immediate restore ([#736](https://github.com/havenhq/revideo/issues/736)) ([634d51d](https://github.com/havenhq/revideo/commit/634d51d2afe8a536673c364874f8f3d1a450b846))
* **2d:** improve property declarations ([27e7d26](https://github.com/havenhq/revideo/commit/27e7d267ee91bf1e8ca79686b6ec31347f9f4d41))
* **2d:** improve Rect corner radius ([#120](https://github.com/havenhq/revideo/issues/120)) ([b471fe0](https://github.com/havenhq/revideo/commit/b471fe0e37c0a426d3af8299c9c3c22539e7df05))
* **2d:** improve Video node ([#601](https://github.com/havenhq/revideo/issues/601)) ([3801d83](https://github.com/havenhq/revideo/commit/3801d83415bbdeeee5d6d53d0c18e5d9e78fba56))
* **2d:** make `View2D` extend `Rect` ([#379](https://github.com/havenhq/revideo/issues/379)) ([93db5fc](https://github.com/havenhq/revideo/commit/93db5fc41617c0902e85fda90fbfc930c2b4634b))
* **2d:** make Circle extend Curve ([#771](https://github.com/havenhq/revideo/issues/771)) ([4c8cf19](https://github.com/havenhq/revideo/commit/4c8cf1954093958eac507921dc18f67dd64b2052))
* **2d:** make Polygon extend Curve ([#961](https://github.com/havenhq/revideo/issues/961)) ([739c9fc](https://github.com/havenhq/revideo/commit/739c9fccbc101f8b2eed680a11c00f317fdc4dd3))
* **2d:** make Rect extend Curve ([#759](https://github.com/havenhq/revideo/issues/759)) ([9810212](https://github.com/havenhq/revideo/commit/9810212648824b9a2fa2ecd6b597e3319d20b325))
* **2d:** nested Txt nodes ([#861](https://github.com/havenhq/revideo/issues/861)) ([f2786d0](https://github.com/havenhq/revideo/commit/f2786d0cd0d06065ca1e9eb9f6b4c11a74b6c283)), closes [#540](https://github.com/havenhq/revideo/issues/540)
* **2d:** simplify layout prop ([c24cb12](https://github.com/havenhq/revideo/commit/c24cb12a22b7c85fdfb051917fa9ee1e0911717c))
* **2d:** support HMR for images ([#641](https://github.com/havenhq/revideo/issues/641)) ([cf17520](https://github.com/havenhq/revideo/commit/cf17520aa8ddf19dcfc419c63cf7255892d45b71))
* **2d:** support letter spacing in Code ([#955](https://github.com/havenhq/revideo/issues/955)) ([2a87c37](https://github.com/havenhq/revideo/commit/2a87c37c832de86c4b524b33fd68806627daec8b))
* **2d:** support tweening in applyState ([#859](https://github.com/havenhq/revideo/issues/859)) ([b7ed2e2](https://github.com/havenhq/revideo/commit/b7ed2e24773227e5b576ff056eb23de9b9ff1676))
* **2d:** support tweening Line points ([#853](https://github.com/havenhq/revideo/issues/853)) ([4bf37d7](https://github.com/havenhq/revideo/commit/4bf37d74d2e4bb9d9cc034aff121a32da9a6d146))
* **2d:** unify desired sizes ([#118](https://github.com/havenhq/revideo/issues/118)) ([401a799](https://github.com/havenhq/revideo/commit/401a79946b034a96b9abff2f3fb5efd6cc9080f3))
* **2d:** unify layout properties ([#355](https://github.com/havenhq/revideo/issues/355)) ([3cae97e](https://github.com/havenhq/revideo/commit/3cae97ea704d0533020fa87326dacadcc037d517)), closes [#352](https://github.com/havenhq/revideo/issues/352)
* **2d:** warn about missing image source ([#817](https://github.com/havenhq/revideo/issues/817)) ([6dcdb5f](https://github.com/havenhq/revideo/commit/6dcdb5f3b83d4860b1557e4745972e0af68f92f3))
* add advanced caching ([#69](https://github.com/havenhq/revideo/issues/69)) ([2a644c9](https://github.com/havenhq/revideo/commit/2a644c9315acfcc5280a5eacc9904df140a61e4f))
* add base class for shapes ([#67](https://github.com/havenhq/revideo/issues/67)) ([d38c172](https://github.com/havenhq/revideo/commit/d38c1724e129c553739cbfc27c4e5cd8f737f067))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add cloning ([#80](https://github.com/havenhq/revideo/issues/80)) ([47d7a0f](https://github.com/havenhq/revideo/commit/47d7a0fa5da9a03d8ed91557db651f6f960e28b1))
* add CodeBlock component based on code-fns to 2D ([#78](https://github.com/havenhq/revideo/issues/78)) ([ad346f1](https://github.com/havenhq/revideo/commit/ad346f118d63b1e321ec315e1c70b925670124a1))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add default renderer ([#63](https://github.com/havenhq/revideo/issues/63)) ([9255490](https://github.com/havenhq/revideo/commit/92554900965fe088538f5e703dbab2fd84f904d7)), closes [#56](https://github.com/havenhq/revideo/issues/56) [#58](https://github.com/havenhq/revideo/issues/58)
* add DEG2RAD and RAD2DEG constants ([#630](https://github.com/havenhq/revideo/issues/630)) ([01801e8](https://github.com/havenhq/revideo/commit/01801e8766058e75a6a020400650fb00f8f430cc))
* add Grid node ([e1f83da](https://github.com/havenhq/revideo/commit/e1f83da1f43d20d392df4acb11e3df9cc457585d))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add middle cardinal point ([#758](https://github.com/havenhq/revideo/issues/758)) ([b036eaf](https://github.com/havenhq/revideo/commit/b036eafc00381831c08267a78cf9d74973f4025a))
* add missing flexbox properties ([#405](https://github.com/havenhq/revideo/issues/405)) ([4e78b4b](https://github.com/havenhq/revideo/commit/4e78b4b2fe4df42ce0a8da6fd41ad38b0104e7f5))
* add missing layout props ([#72](https://github.com/havenhq/revideo/issues/72)) ([f808a56](https://github.com/havenhq/revideo/commit/f808a562b192fd03dba4b0d353284db344d6a80b))
* add node spawners ([#149](https://github.com/havenhq/revideo/issues/149)) ([da18a4e](https://github.com/havenhq/revideo/commit/da18a4e24104022a84ecd6cec1666b520186058f))
* add polyline ([#84](https://github.com/havenhq/revideo/issues/84)) ([4ceaf84](https://github.com/havenhq/revideo/commit/4ceaf842915ac43d81f292c58a4dc73a8d1bb8e9))
* add random number generator ([#116](https://github.com/havenhq/revideo/issues/116)) ([d505312](https://github.com/havenhq/revideo/commit/d5053123eef308c7a2a61d92b6e76c637f4ed0b8)), closes [#14](https://github.com/havenhq/revideo/issues/14)
* add reparent helper ([80b95a9](https://github.com/havenhq/revideo/commit/80b95a9ce89d4a2eeea7e467257486e961602d69))
* add Text and Image components ([#70](https://github.com/havenhq/revideo/issues/70)) ([85c7dcd](https://github.com/havenhq/revideo/commit/85c7dcdb4f8ca2f0bfb03950c85a8d6f6652fcdf))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/havenhq/revideo/issues/9)) ([9e0d67b](https://github.com/havenhq/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* added a theme property to the CodeBlock component ([#279](https://github.com/havenhq/revideo/issues/279)) ([fe34fa8](https://github.com/havenhq/revideo/commit/fe34fa8ebfe66cd356fb1c3d85adedef11e03b45))
* better children and spawners ([#858](https://github.com/havenhq/revideo/issues/858)) ([9b5c23d](https://github.com/havenhq/revideo/commit/9b5c23d2076180cf710656c817369a07b253e3ec))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* convert built-in types to webgl ([#929](https://github.com/havenhq/revideo/issues/929)) ([a0f0b7d](https://github.com/havenhq/revideo/commit/a0f0b7d8996547e1a316097422ec02bddeeccec6))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* **core:** tree shaking ([#523](https://github.com/havenhq/revideo/issues/523)) ([65fec78](https://github.com/havenhq/revideo/commit/65fec7825fda33812b13f57bfeb1d82193a5d190))
* **docs:** fiddle editor ([#542](https://github.com/havenhq/revideo/issues/542)) ([3c68fef](https://github.com/havenhq/revideo/commit/3c68fefdf7bf375ee9345aba7dbf9e5ff35e3c3d))
* export everything from entry points ([#710](https://github.com/havenhq/revideo/issues/710)) ([3c885d9](https://github.com/havenhq/revideo/commit/3c885d9083b52fbbaccf1e2560ae50817949bc52))
* filter reordering ([#119](https://github.com/havenhq/revideo/issues/119)) ([2398d0f](https://github.com/havenhq/revideo/commit/2398d0f9d57f36b47c9c66a988ca5607e9a3a30e))
* implement absolute scale setter ([842079a](https://github.com/havenhq/revideo/commit/842079a6547af4032719c85837df3db7c1c6d30a))
* improve async signals ([#156](https://github.com/havenhq/revideo/issues/156)) ([db27b9d](https://github.com/havenhq/revideo/commit/db27b9d5fb69a88f42afd98c86c4a1cdceb88ea1))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* improve image error handling ([#847](https://github.com/havenhq/revideo/issues/847)) ([db09d53](https://github.com/havenhq/revideo/commit/db09d5305a3c0507b035e3cd347eaa65b23d7d2e))
* introduce basic caching ([#68](https://github.com/havenhq/revideo/issues/68)) ([6420d36](https://github.com/havenhq/revideo/commit/6420d362d0e4ae058f55b6ff6bb2a3a32dec559b))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make transparent video optional ([#91](https://github.com/havenhq/revideo/issues/91)) ([6a052d5](https://github.com/havenhq/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* merge properties and signals ([#124](https://github.com/havenhq/revideo/issues/124)) ([da3ba83](https://github.com/havenhq/revideo/commit/da3ba83d82ee74f5a5c3631b07597f08cdf9e8e4))
* minor improvements ([403c7c2](https://github.com/havenhq/revideo/commit/403c7c27ad969880a14c498ec6cefb9e7e7b7544))
* minor improvements ([#77](https://github.com/havenhq/revideo/issues/77)) ([7c6e584](https://github.com/havenhq/revideo/commit/7c6e584aca353c9af55f0acb61b32b5f99727dba))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* new animator ([#91](https://github.com/havenhq/revideo/issues/91)) ([d85f2f8](https://github.com/havenhq/revideo/commit/d85f2f8a54c0f8bbfbc451884385f30e5b3ec206))
* new Code node ([#946](https://github.com/havenhq/revideo/issues/946)) ([26e55a3](https://github.com/havenhq/revideo/commit/26e55a37c416fb1313c8aadf40eed2824b45d330))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/havenhq/revideo/issues/33)) ([a6e1bcd](https://github.com/havenhq/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* serve assets through cli ([#124](https://github.com/havenhq/revideo/issues/124)) ([fdccde1](https://github.com/havenhq/revideo/commit/fdccde12f058811382e7e2084ebe4b9e05af1b80))
* signal error handling ([#89](https://github.com/havenhq/revideo/issues/89)) ([472ac65](https://github.com/havenhq/revideo/commit/472ac65938b804a6b698c8522ec0c3b6bdbcf1b1))
* simplify size access ([#65](https://github.com/havenhq/revideo/issues/65)) ([3315e64](https://github.com/havenhq/revideo/commit/3315e64641e9778bc48ea3fb707e3c0eeb581dfe))
* simplify size access further ([#66](https://github.com/havenhq/revideo/issues/66)) ([9091a5e](https://github.com/havenhq/revideo/commit/9091a5e05d8fadf72c50832c7c4467ac4424b72c))
* switch to signals ([#64](https://github.com/havenhq/revideo/issues/64)) ([d22d237](https://github.com/havenhq/revideo/commit/d22d23728597e6fa82ea5c5a99a6c0a56819bded))
* transparent video ([#75](https://github.com/havenhq/revideo/issues/75)) ([5f7b909](https://github.com/havenhq/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))
* turn Layout into node ([#75](https://github.com/havenhq/revideo/issues/75)) ([cdf8dc0](https://github.com/havenhq/revideo/commit/cdf8dc0a35522482dee2dd78a69606b79f52246e))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** scene graph icons ([#914](https://github.com/havenhq/revideo/issues/914)) ([e92ddef](https://github.com/havenhq/revideo/commit/e92ddef34860f5e710ff0f1a310758ec0ca95bcb))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* unify references and signals ([#137](https://github.com/havenhq/revideo/issues/137)) ([063aede](https://github.com/havenhq/revideo/commit/063aede0842f948d2c6704c6edd426e954bb4668))
* upgrade code-fns for new theme options and lazy loading ([#401](https://github.com/havenhq/revideo/issues/401)) ([8965ab1](https://github.com/havenhq/revideo/commit/8965ab1bef8b6ae919c8001d0527f5793293b285)), closes [#396](https://github.com/havenhq/revideo/issues/396) [#322](https://github.com/havenhq/revideo/issues/322)
* use ES modules in fiddles ([#712](https://github.com/havenhq/revideo/issues/712)) ([dbe2ad5](https://github.com/havenhq/revideo/commit/dbe2ad5644219c5a98d38c6557abfb66d793c821))
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))
* world space cache ([#498](https://github.com/havenhq/revideo/issues/498)) ([633e9e1](https://github.com/havenhq/revideo/commit/633e9e140dfbbe397df6ddc1f96ed30782ddce94)), closes [#342](https://github.com/havenhq/revideo/issues/342)


### Reverts

* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))
* feat: upgrade code-fns for new theme options and lazy loading ([#435](https://github.com/havenhq/revideo/issues/435)) ([3f5e439](https://github.com/havenhq/revideo/commit/3f5e43968f7add7c6322c9c8358d3b6fc178c2fe))


### BREAKING CHANGES

* multiple name changes

To avoid collisions, names of certain classes have changed:
- `Text => Txt`
- `Image => Img`
- `Rect (type) => BBox`

Cache related methods of `Node` have changed:
- `getCacheRect => getCacheBBox`
- `cacheRect => cacheBBox`
- `fullCacheRect => fullCacheBBox`

The `CodeBlock` property has changed:
- `CodeBlock.selectionOpacity => CodeBlock.unselectedOpacity`
* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
* remove legacy package





## 0.3.6 (2024-06-08)


### Bug Fixes

* **2d:** account for offset in cardinal points ([#883](https://github.com/havenhq/revideo/issues/883)) ([24da258](https://github.com/havenhq/revideo/commit/24da258f5937087b363eeb9146a9d22747b02e70)), closes [#882](https://github.com/havenhq/revideo/issues/882)
* **2d:** account for spawners in scene graph ([#935](https://github.com/havenhq/revideo/issues/935)) ([ca325f5](https://github.com/havenhq/revideo/commit/ca325f5ad0ae987e76106f5e65fef3ed7b3ca08d))
* **2d:** add missing Curve properties to Circle ([#805](https://github.com/havenhq/revideo/issues/805)) ([38c7900](https://github.com/havenhq/revideo/commit/38c79000403d7c3c99dde9e4c825a448d5f55054))
* **2d:** add missing Fragment export ([#553](https://github.com/havenhq/revideo/issues/553)) ([229afb4](https://github.com/havenhq/revideo/commit/229afb4fe7d95f09b480ab4a813f8dff549f381f))
* **2d:** add missing jsx dev runtime ([#547](https://github.com/havenhq/revideo/issues/547)) ([d61cb7d](https://github.com/havenhq/revideo/commit/d61cb7dd24ab66ae17d5bd6f5ccb34c4fd1e7569)), closes [#545](https://github.com/havenhq/revideo/issues/545)
* **2d:** add missing middle property ([#891](https://github.com/havenhq/revideo/issues/891)) ([61e2e96](https://github.com/havenhq/revideo/commit/61e2e96e3b8f37a68ebdddb432baba04858fd4f3))
* **2d:** add missing shape export ([#111](https://github.com/havenhq/revideo/issues/111)) ([02a1fa7](https://github.com/havenhq/revideo/commit/02a1fa7ea62155e498809f2e57ff29a18c82ac12))
* **2d:** better error handling ([#524](https://github.com/havenhq/revideo/issues/524)) ([b7475ba](https://github.com/havenhq/revideo/commit/b7475ba5ff35d37ee198577d1205d6ecd6fd2092))
* **2d:** calculate arrow orientations for curves correctly ([#597](https://github.com/havenhq/revideo/issues/597)) ([1626811](https://github.com/havenhq/revideo/commit/1626811ec4cd1bd2a3d43e393ced40a7da462c3a))
* **2d:** calculate Txt cache bbox from contents ([#836](https://github.com/havenhq/revideo/issues/836)) ([33e1a12](https://github.com/havenhq/revideo/commit/33e1a1296f21d26e9ed45ae92132825dca17054d)), closes [#465](https://github.com/havenhq/revideo/issues/465)
* **2d:** clone size correctly ([#562](https://github.com/havenhq/revideo/issues/562)) ([cdd3df1](https://github.com/havenhq/revideo/commit/cdd3df1bff25b04b905e289264831d8d328caaab)), closes [#559](https://github.com/havenhq/revideo/issues/559)
* **2d:** correct layout defaults ([#442](https://github.com/havenhq/revideo/issues/442)) ([c116c35](https://github.com/havenhq/revideo/commit/c116c355179ba3b2487634fb82b9a5bc2ea266bf))
* **2d:** correctly append Txt nodes to view ([#644](https://github.com/havenhq/revideo/issues/644)) ([24bb51a](https://github.com/havenhq/revideo/commit/24bb51aa04778c33ce327926b27332efaa554e5f))
* **2d:** correctly support external image urls ([#678](https://github.com/havenhq/revideo/issues/678)) ([a08556b](https://github.com/havenhq/revideo/commit/a08556b6e2822a55db593f610ea4dd6cb8494adb)), closes [#677](https://github.com/havenhq/revideo/issues/677)
* **2d:** fix cache bbox for lines ([#467](https://github.com/havenhq/revideo/issues/467)) ([9fd1444](https://github.com/havenhq/revideo/commit/9fd144417bb0b6301da6c522a988775f5ff142ac)), closes [#466](https://github.com/havenhq/revideo/issues/466)
* **2d:** fix circle segment ([#557](https://github.com/havenhq/revideo/issues/557)) ([adebff4](https://github.com/havenhq/revideo/commit/adebff492b76a512d79151b00adf1b383d25c5b5))
* **2d:** fix CodeBlock types ([#563](https://github.com/havenhq/revideo/issues/563)) ([25160fa](https://github.com/havenhq/revideo/commit/25160fa4d92af88429110356e42f6e3b4f88a90f)), closes [#560](https://github.com/havenhq/revideo/issues/560)
* **2d:** fix curve arrow alignment when animating start signal ([#615](https://github.com/havenhq/revideo/issues/615)) ([2fefc40](https://github.com/havenhq/revideo/commit/2fefc4026050159ba204c7629832ad83e8bfa51b))
* **2d:** fix cyclic dependency in cardinal points ([#645](https://github.com/havenhq/revideo/issues/645)) ([def23f9](https://github.com/havenhq/revideo/commit/def23f925ee7200c8740ecd51c7f6117d67b6ef8))
* **2d:** fix font ligatures in CodeBlock ([#231](https://github.com/havenhq/revideo/issues/231)) ([11ee3fe](https://github.com/havenhq/revideo/commit/11ee3fef5ad878313cf19833df6881333ced4dac))
* **2d:** fix Gradient and Pattern signals ([#376](https://github.com/havenhq/revideo/issues/376)) ([6e0dc8a](https://github.com/havenhq/revideo/commit/6e0dc8af8d19f93fd6a42addca2b3a2958b4dd33))
* **2d:** fix height when tweening text ([#905](https://github.com/havenhq/revideo/issues/905)) ([1c6a796](https://github.com/havenhq/revideo/commit/1c6a7965be137c1ab69741cdd1e9aaa6df4208c4))
* **2d:** fix import order ([#94](https://github.com/havenhq/revideo/issues/94)) ([bcc0bcf](https://github.com/havenhq/revideo/commit/bcc0bcffae47855bd8f7ab06454aaebe93c4aa24)), closes [#76](https://github.com/havenhq/revideo/issues/76)
* **2d:** fix initial value of endOffset ([#433](https://github.com/havenhq/revideo/issues/433)) ([9fe82b3](https://github.com/havenhq/revideo/commit/9fe82b3d21ba0150a2378e541a4652ca707c2d15))
* **2d:** fix layout calculation for nodes not explicitly added to view ([#331](https://github.com/havenhq/revideo/issues/331)) ([528e2d5](https://github.com/havenhq/revideo/commit/528e2d5a0abec99819e022d2848b256ece9f869a))
* **2d:** fix letterSpacing ([#448](https://github.com/havenhq/revideo/issues/448)) ([bb5ffc4](https://github.com/havenhq/revideo/commit/bb5ffc48efa82b9db818e8e52aa35e9c2ad8ce89)), closes [#447](https://github.com/havenhq/revideo/issues/447)
* **2d:** fix line arc length ([#503](https://github.com/havenhq/revideo/issues/503)) ([4f1cd59](https://github.com/havenhq/revideo/commit/4f1cd59e6bcba0b16b36be88b28a60ae46d4d9ab)), closes [#497](https://github.com/havenhq/revideo/issues/497)
* **2d:** fix Line cache ([#232](https://github.com/havenhq/revideo/issues/232)) ([a953b64](https://github.com/havenhq/revideo/commit/a953b64540c020657845efc84d4179142a7a0974)), closes [#205](https://github.com/havenhq/revideo/issues/205)
* **2d:** fix line jitter under certain conditions ([#863](https://github.com/havenhq/revideo/issues/863)) ([fb110a2](https://github.com/havenhq/revideo/commit/fb110a2f3583fc040bf2c39560934162bd146d9b))
* **2d:** fix Line overview crashing ([#142](https://github.com/havenhq/revideo/issues/142)) ([6bd5fd9](https://github.com/havenhq/revideo/commit/6bd5fd941e583e44f5d920ecd20215efb1eed58a))
* **2d:** fix nested cache canvases ([#554](https://github.com/havenhq/revideo/issues/554)) ([e601441](https://github.com/havenhq/revideo/commit/e6014413b215af6fb1a7953f8db83893d4025f0b)), closes [#551](https://github.com/havenhq/revideo/issues/551)
* **2d:** fix package.json entry ([#720](https://github.com/havenhq/revideo/issues/720)) ([12e9bf6](https://github.com/havenhq/revideo/commit/12e9bf6f40ab7afc02e2f55260544f3864920ded))
* **2d:** fix signal initialization ([#382](https://github.com/havenhq/revideo/issues/382)) ([ea36e79](https://github.com/havenhq/revideo/commit/ea36e791a20bfd1b491ffa9917be686c51bc3899))
* **2d:** fix tweening cardinal points ([#829](https://github.com/havenhq/revideo/issues/829)) ([cc16737](https://github.com/havenhq/revideo/commit/cc16737cd59081582fbb488a880e8d3c11c14918))
* **2d:** fix Txt decorators ([#526](https://github.com/havenhq/revideo/issues/526)) ([25b30ed](https://github.com/havenhq/revideo/commit/25b30ed3861f46d72147335480912ce5f564be79))
* **2d:** fix types ([#659](https://github.com/havenhq/revideo/issues/659)) ([a32af29](https://github.com/havenhq/revideo/commit/a32af29ef3bd2e5dbf08697ebfee53230fceadc1))
* **2d:** format whitespaces according to HTML ([#372](https://github.com/havenhq/revideo/issues/372)) ([83fb565](https://github.com/havenhq/revideo/commit/83fb565742d98f060c0400c8cbaf9961b69f34d0)), closes [#370](https://github.com/havenhq/revideo/issues/370)
* **2d:** handle division by zero in lines ([#407](https://github.com/havenhq/revideo/issues/407)) ([a17871a](https://github.com/havenhq/revideo/commit/a17871a2ce63dd5bb32bc719037327c4e9dde217))
* **2d:** handle floating point errors in acos ([#381](https://github.com/havenhq/revideo/issues/381)) ([5bca8fd](https://github.com/havenhq/revideo/commit/5bca8fd0bbdcf28f2793c124b7d6b0afd560c4b8))
* **2d:** handle lines with no points ([#233](https://github.com/havenhq/revideo/issues/233)) ([8108474](https://github.com/havenhq/revideo/commit/81084743dfad7b6419760796fda825047909d4d4)), closes [#212](https://github.com/havenhq/revideo/issues/212)
* **2d:** ignore children with disabled layout ([#669](https://github.com/havenhq/revideo/issues/669)) ([b98c462](https://github.com/havenhq/revideo/commit/b98c4625c3634495e86ca23d19355035e457db06)), closes [#580](https://github.com/havenhq/revideo/issues/580)
* **2d:** improve Curve hitbox ([#778](https://github.com/havenhq/revideo/issues/778)) ([8af723c](https://github.com/havenhq/revideo/commit/8af723c0322de39d2defe0363bba03f4f9542f08))
* **2d:** improve Rect radius ([#221](https://github.com/havenhq/revideo/issues/221)) ([3437e42](https://github.com/havenhq/revideo/commit/3437e42713a3f4a8d44d246ee01e2eb23b61e06a)), closes [#207](https://github.com/havenhq/revideo/issues/207)
* **2d:** make Text respect textWrap=pre ([#287](https://github.com/havenhq/revideo/issues/287)) ([cb07f4b](https://github.com/havenhq/revideo/commit/cb07f4bdf07edc8a086b934ca5ab769682b9a010))
* **2d:** minor fixes ([#915](https://github.com/havenhq/revideo/issues/915)) ([63cfc9e](https://github.com/havenhq/revideo/commit/63cfc9e033f2c2ac6d6ed2a0d8f615fcf642ab59))
* **2d:** point arrow heads in correct direction ([#792](https://github.com/havenhq/revideo/issues/792)) ([52ed52e](https://github.com/havenhq/revideo/commit/52ed52e963cc69a066a0353680acaca35b9c937a)), closes [#783](https://github.com/havenhq/revideo/issues/783)
* **2d:** prevent src warnings in Icon and Latex ([#899](https://github.com/havenhq/revideo/issues/899)) ([5eebab7](https://github.com/havenhq/revideo/commit/5eebab71d8061e233872e049e77b847f9fd077a1))
* **2d:** remove circular dependencies ([#780](https://github.com/havenhq/revideo/issues/780)) ([cdf3af5](https://github.com/havenhq/revideo/commit/cdf3af500a58151ee3549c6e728751aab3e6f75c))
* **2d:** smoothly play videos when presenting ([#600](https://github.com/havenhq/revideo/issues/600)) ([294fe6a](https://github.com/havenhq/revideo/commit/294fe6ac056ab074c77214fcf9035f53fac9258c)), closes [#578](https://github.com/havenhq/revideo/issues/578)
* **2d:** some signal setters not returning owners ([#143](https://github.com/havenhq/revideo/issues/143)) ([09ab7f9](https://github.com/havenhq/revideo/commit/09ab7f96afcaae608399a653c0b4878ba9b467d4))
* **2d:** stop code highlighting from jumping ([#230](https://github.com/havenhq/revideo/issues/230)) ([67ef1c4](https://github.com/havenhq/revideo/commit/67ef1c497056dd1f8f9e20d1d7fc1af03ec3849e))
* **2d:** stop mutating children ([#903](https://github.com/havenhq/revideo/issues/903)) ([f9552a8](https://github.com/havenhq/revideo/commit/f9552a8658ccde6c7b2466ad40b12cf28c6ec805))
* **2d:** switch iframes to ShadowDOM ([#90](https://github.com/havenhq/revideo/issues/90)) ([86176be](https://github.com/havenhq/revideo/commit/86176be055c08aba59272afcda00ed586f6c7ad6))
* **2d:** textDirection property for RTL/LTR text ([#404](https://github.com/havenhq/revideo/issues/404)) ([f240b1b](https://github.com/havenhq/revideo/commit/f240b1bd140a884f6901b7cfcb97ce3e9ce4b48d))
* **2d:** textWrap not working in Firefox ([#541](https://github.com/havenhq/revideo/issues/541)) ([f10e057](https://github.com/havenhq/revideo/commit/f10e057fd13ed9dcc70ebc0ca63963708ec159c8)), closes [#517](https://github.com/havenhq/revideo/issues/517)
* **2d:** wait for reused async resources ([#599](https://github.com/havenhq/revideo/issues/599)) ([280e065](https://github.com/havenhq/revideo/commit/280e065fe69e9a744b7b12eb4609e7d87f76bb63)), closes [#593](https://github.com/havenhq/revideo/issues/593)
* account for italic fonts in cache ([#968](https://github.com/havenhq/revideo/issues/968)) ([abb0906](https://github.com/havenhq/revideo/commit/abb090695c4257d9877d0cb11954093c49149ddc)), closes [#934](https://github.com/havenhq/revideo/issues/934)
* await font load before drawing ([#31](https://github.com/havenhq/revideo/issues/31)) ([cbfb5cb](https://github.com/havenhq/revideo/commit/cbfb5cb136d85a657c99187da166b64aae8be3a1))
* await font load without throwing async node error ([#69](https://github.com/havenhq/revideo/issues/69)) ([fddebe6](https://github.com/havenhq/revideo/commit/fddebe60a610af718c880b9e198eebe8555ea9a5))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/havenhq/revideo/issues/62)) ([04cdc5b](https://github.com/havenhq/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* **ffmpeg:** looping of video tag ([#122](https://github.com/havenhq/revideo/issues/122)) ([109c675](https://github.com/havenhq/revideo/commit/109c675799987b11e4ad59c9c67059183a6c4005))
* fix compound property setter ([#218](https://github.com/havenhq/revideo/issues/218)) ([6cd1b95](https://github.com/havenhq/revideo/commit/6cd1b952df950554eb637c9f8e82947c415d00c5)), closes [#208](https://github.com/havenhq/revideo/issues/208) [#210](https://github.com/havenhq/revideo/issues/210)
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* plug memory leaks ([#385](https://github.com/havenhq/revideo/issues/385)) ([de0af00](https://github.com/havenhq/revideo/commit/de0af00a7d2e019e2a933791c62b7901755be7b0))
* prevent consumePromises from halting ([#657](https://github.com/havenhq/revideo/issues/657)) ([363a189](https://github.com/havenhq/revideo/commit/363a189b0c7f5926c9d5ae00b58b48e8ed4d9b48))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* previous scene being rendered twice ([#97](https://github.com/havenhq/revideo/issues/97)) ([90205bd](https://github.com/havenhq/revideo/commit/90205bdc1a086abe5f73b04cb4616c6af5ec4377))
* restrict size of cache canvas ([#544](https://github.com/havenhq/revideo/issues/544)) ([49ec554](https://github.com/havenhq/revideo/commit/49ec55490718e503d9a39437ae13c189dc4fe9ea))
* support color to null tweening ([#387](https://github.com/havenhq/revideo/issues/387)) ([02e9f22](https://github.com/havenhq/revideo/commit/02e9f22027a1c3a85ffcc259aeca913318fb6f54))
* support legacy imports again ([#868](https://github.com/havenhq/revideo/issues/868)) ([77c4e2e](https://github.com/havenhq/revideo/commit/77c4e2eeb8b0f73bdef1f72e3d81f34c79748929))
* support multiple async players ([#450](https://github.com/havenhq/revideo/issues/450)) ([d7ec469](https://github.com/havenhq/revideo/commit/d7ec469e747eefd909f4dd59dd713f5d86308222)), closes [#434](https://github.com/havenhq/revideo/issues/434)
* typo on codeblock remove comments ([#368](https://github.com/havenhq/revideo/issues/368)) ([2025adc](https://github.com/havenhq/revideo/commit/2025adc6e7aa11d81b6f5f6989e8eae18cf86cb7))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Code Refactoring

* introduce improved names ([#425](https://github.com/havenhq/revideo/issues/425)) ([4a2188d](https://github.com/havenhq/revideo/commit/4a2188d339587fa658b2134befc3fe63c835c5d7))
* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* **2d:** add antialiased signal to Shape ([#282](https://github.com/havenhq/revideo/issues/282)) ([7c6905d](https://github.com/havenhq/revideo/commit/7c6905d72c6c2f49e10f0a80704c0afe3504d01b))
* **2d:** add arcLength helper methods to Curve ([#627](https://github.com/havenhq/revideo/issues/627)) ([3c7546e](https://github.com/havenhq/revideo/commit/3c7546e7a509deb6fff8f669c3df0a69b492bd2e))
* **2d:** add Bézier nodes ([#603](https://github.com/havenhq/revideo/issues/603)) ([9841cfd](https://github.com/havenhq/revideo/commit/9841cfdc3947ca4e6d6e42ed21eae88e855f855d))
* **2d:** add cardinal points ([#636](https://github.com/havenhq/revideo/issues/636)) ([2136a25](https://github.com/havenhq/revideo/commit/2136a2558a9ed968ee505e4e5cce33d989dfdc13)), closes [#391](https://github.com/havenhq/revideo/issues/391)
* **2d:** add closed property for circle ([#378](https://github.com/havenhq/revideo/issues/378)) ([62a9605](https://github.com/havenhq/revideo/commit/62a9605d4c54e7bf2d2d44d47bf769f5b27378a5))
* **2d:** add completion property for curves ([#635](https://github.com/havenhq/revideo/issues/635)) ([6577d6d](https://github.com/havenhq/revideo/commit/6577d6ddfaf779ba02f3862d2a357166138b99ca))
* **2d:** add default computed values for signals ([#259](https://github.com/havenhq/revideo/issues/259)) ([18f61a6](https://github.com/havenhq/revideo/commit/18f61a668420dec8afba52d52a6557e7a7919ba2))
* **2d:** add Icon Component ([#306](https://github.com/havenhq/revideo/issues/306)) ([3479631](https://github.com/havenhq/revideo/commit/3479631ef34e39f90a8d8de441317672be1840d9)), closes [#305](https://github.com/havenhq/revideo/issues/305)
* **2d:** add LaTeX component ([#228](https://github.com/havenhq/revideo/issues/228)) ([4c26d2a](https://github.com/havenhq/revideo/commit/4c26d2aaf0c697486639aa917cd5c585d3d0ea74))
* **2d:** add line counter for CodeBlock ([#802](https://github.com/havenhq/revideo/issues/802)) ([c3f9676](https://github.com/havenhq/revideo/commit/c3f9676b6984731a09a44ab0b1fcfc226975fa08))
* **2d:** add methods for rearranging children ([#81](https://github.com/havenhq/revideo/issues/81)) ([63f6c1a](https://github.com/havenhq/revideo/commit/63f6c1aa51ac4ecd093151c8cd30910f2e72bcac))
* **2d:** add moveBelow, moveAbove and moveTo methods to Node ([#365](https://github.com/havenhq/revideo/issues/365)) ([16752a3](https://github.com/havenhq/revideo/commit/16752a3b8ae7461b33d6208a9675729f374e8324))
* **2d:** add option for preformatted text ([#147](https://github.com/havenhq/revideo/issues/147)) ([989be53](https://github.com/havenhq/revideo/commit/989be532d86642e1125bb7fa62a801b09c1b8f26))
* **2d:** add Path component ([#700](https://github.com/havenhq/revideo/issues/700)) ([2128b6b](https://github.com/havenhq/revideo/commit/2128b6bf871cabe19e1abc749f18945c78c01f84))
* **2d:** add playbackRate signal to Video component ([#831](https://github.com/havenhq/revideo/issues/831)) ([5902b82](https://github.com/havenhq/revideo/commit/5902b824b36400876be0ee970e2c6211299faf21)), closes [#711](https://github.com/havenhq/revideo/issues/711)
* **2d:** add Polygon component ([#463](https://github.com/havenhq/revideo/issues/463)) ([15adb3e](https://github.com/havenhq/revideo/commit/15adb3e312a4998b44c0b9c5fe5b5236f51c71c9)), closes [#455](https://github.com/havenhq/revideo/issues/455)
* **2d:** add querying helpers ([#852](https://github.com/havenhq/revideo/issues/852)) ([614de6b](https://github.com/havenhq/revideo/commit/614de6bd8542322d1db4b123b875f6fad85cc4eb))
* **2d:** add Ray node ([#628](https://github.com/havenhq/revideo/issues/628)) ([649447c](https://github.com/havenhq/revideo/commit/649447cd5f2089afc64cc7bd4b0276e69d1e9a30))
* **2d:** add save and restore methods to nodes ([#406](https://github.com/havenhq/revideo/issues/406)) ([870e194](https://github.com/havenhq/revideo/commit/870e1947d97382bc6d82857c077140bbef7cf7e8))
* **2d:** add skew property ([#803](https://github.com/havenhq/revideo/issues/803)) ([eff7c7b](https://github.com/havenhq/revideo/commit/eff7c7be0c013139140b398350242457736d48c7))
* **2d:** add smooth corners and sharpness to rect ([#310](https://github.com/havenhq/revideo/issues/310)) ([f7fbefd](https://github.com/havenhq/revideo/commit/f7fbefd27f7f6972cfb5a45a68e5d0aed9593ae4))
* **2d:** add spline node ([#514](https://github.com/havenhq/revideo/issues/514)) ([3ce2111](https://github.com/havenhq/revideo/commit/3ce2111309e698450dc4c6e2ad47024995863e73))
* **2d:** add start and end signals to Grid node ([#761](https://github.com/havenhq/revideo/issues/761)) ([e37ea80](https://github.com/havenhq/revideo/commit/e37ea806b94e93c6324d8e1b502468925b731e8e))
* **2d:** add SVG component ([#763](https://github.com/havenhq/revideo/issues/763)) ([8eadc11](https://github.com/havenhq/revideo/commit/8eadc11937d4201545894f2f5b204d477a3f9094))
* **2d:** add textAlign property ([#451](https://github.com/havenhq/revideo/issues/451)) ([3d15825](https://github.com/havenhq/revideo/commit/3d15825f3cc5a35ba081a31510741b824f3bc6ab)), closes [#303](https://github.com/havenhq/revideo/issues/303)
* **2d:** add video component property getter ([#240](https://github.com/havenhq/revideo/issues/240)) ([59de5ab](https://github.com/havenhq/revideo/commit/59de5ab2c089589773a2f9ad7588eda7d72693a7))
* **2d:** add z-index property to nodes ([#398](https://github.com/havenhq/revideo/issues/398)) ([4280af3](https://github.com/havenhq/revideo/commit/4280af3b4b7bd5970fe5e743949a0fcca2c314f3))
* **2d:** always clip images and videos ([#773](https://github.com/havenhq/revideo/issues/773)) ([3938c59](https://github.com/havenhq/revideo/commit/3938c59394bfc42e5562504687d783ff306d7d32))
* **2d:** clamp opacity value between 0 and 1 ([#835](https://github.com/havenhq/revideo/issues/835)) ([c54b2f8](https://github.com/havenhq/revideo/commit/c54b2f837a8e8b872df3610f4cc6caa94a728500)), closes [#830](https://github.com/havenhq/revideo/issues/830)
* **2d:** code bounding box helpers ([#948](https://github.com/havenhq/revideo/issues/948)) ([0ffd56f](https://github.com/havenhq/revideo/commit/0ffd56f5f8076913e687e5b908311aa7832d8b7b))
* **2d:** code range helpers ([#947](https://github.com/havenhq/revideo/issues/947)) ([044c9ac](https://github.com/havenhq/revideo/commit/044c9acd6ee7e4e337fb4d51286126f583a8da6f))
* **2d:** code selection and modification ([#163](https://github.com/havenhq/revideo/issues/163)) ([e8e884a](https://github.com/havenhq/revideo/commit/e8e884a1a5574425dbf15272718911c12cfa2327))
* **2d:** construct lines using signals ([#133](https://github.com/havenhq/revideo/issues/133)) ([2968a24](https://github.com/havenhq/revideo/commit/2968a2426564469fb4f4343fe71a6d30e95361f2))
* **2d:** immediate restore ([#736](https://github.com/havenhq/revideo/issues/736)) ([634d51d](https://github.com/havenhq/revideo/commit/634d51d2afe8a536673c364874f8f3d1a450b846))
* **2d:** improve property declarations ([27e7d26](https://github.com/havenhq/revideo/commit/27e7d267ee91bf1e8ca79686b6ec31347f9f4d41))
* **2d:** improve Rect corner radius ([#120](https://github.com/havenhq/revideo/issues/120)) ([b471fe0](https://github.com/havenhq/revideo/commit/b471fe0e37c0a426d3af8299c9c3c22539e7df05))
* **2d:** improve Video node ([#601](https://github.com/havenhq/revideo/issues/601)) ([3801d83](https://github.com/havenhq/revideo/commit/3801d83415bbdeeee5d6d53d0c18e5d9e78fba56))
* **2d:** make `View2D` extend `Rect` ([#379](https://github.com/havenhq/revideo/issues/379)) ([93db5fc](https://github.com/havenhq/revideo/commit/93db5fc41617c0902e85fda90fbfc930c2b4634b))
* **2d:** make Circle extend Curve ([#771](https://github.com/havenhq/revideo/issues/771)) ([4c8cf19](https://github.com/havenhq/revideo/commit/4c8cf1954093958eac507921dc18f67dd64b2052))
* **2d:** make Polygon extend Curve ([#961](https://github.com/havenhq/revideo/issues/961)) ([739c9fc](https://github.com/havenhq/revideo/commit/739c9fccbc101f8b2eed680a11c00f317fdc4dd3))
* **2d:** make Rect extend Curve ([#759](https://github.com/havenhq/revideo/issues/759)) ([9810212](https://github.com/havenhq/revideo/commit/9810212648824b9a2fa2ecd6b597e3319d20b325))
* **2d:** nested Txt nodes ([#861](https://github.com/havenhq/revideo/issues/861)) ([f2786d0](https://github.com/havenhq/revideo/commit/f2786d0cd0d06065ca1e9eb9f6b4c11a74b6c283)), closes [#540](https://github.com/havenhq/revideo/issues/540)
* **2d:** simplify layout prop ([c24cb12](https://github.com/havenhq/revideo/commit/c24cb12a22b7c85fdfb051917fa9ee1e0911717c))
* **2d:** support HMR for images ([#641](https://github.com/havenhq/revideo/issues/641)) ([cf17520](https://github.com/havenhq/revideo/commit/cf17520aa8ddf19dcfc419c63cf7255892d45b71))
* **2d:** support letter spacing in Code ([#955](https://github.com/havenhq/revideo/issues/955)) ([2a87c37](https://github.com/havenhq/revideo/commit/2a87c37c832de86c4b524b33fd68806627daec8b))
* **2d:** support tweening in applyState ([#859](https://github.com/havenhq/revideo/issues/859)) ([b7ed2e2](https://github.com/havenhq/revideo/commit/b7ed2e24773227e5b576ff056eb23de9b9ff1676))
* **2d:** support tweening Line points ([#853](https://github.com/havenhq/revideo/issues/853)) ([4bf37d7](https://github.com/havenhq/revideo/commit/4bf37d74d2e4bb9d9cc034aff121a32da9a6d146))
* **2d:** unify desired sizes ([#118](https://github.com/havenhq/revideo/issues/118)) ([401a799](https://github.com/havenhq/revideo/commit/401a79946b034a96b9abff2f3fb5efd6cc9080f3))
* **2d:** unify layout properties ([#355](https://github.com/havenhq/revideo/issues/355)) ([3cae97e](https://github.com/havenhq/revideo/commit/3cae97ea704d0533020fa87326dacadcc037d517)), closes [#352](https://github.com/havenhq/revideo/issues/352)
* **2d:** warn about missing image source ([#817](https://github.com/havenhq/revideo/issues/817)) ([6dcdb5f](https://github.com/havenhq/revideo/commit/6dcdb5f3b83d4860b1557e4745972e0af68f92f3))
* add advanced caching ([#69](https://github.com/havenhq/revideo/issues/69)) ([2a644c9](https://github.com/havenhq/revideo/commit/2a644c9315acfcc5280a5eacc9904df140a61e4f))
* add base class for shapes ([#67](https://github.com/havenhq/revideo/issues/67)) ([d38c172](https://github.com/havenhq/revideo/commit/d38c1724e129c553739cbfc27c4e5cd8f737f067))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add cloning ([#80](https://github.com/havenhq/revideo/issues/80)) ([47d7a0f](https://github.com/havenhq/revideo/commit/47d7a0fa5da9a03d8ed91557db651f6f960e28b1))
* add CodeBlock component based on code-fns to 2D ([#78](https://github.com/havenhq/revideo/issues/78)) ([ad346f1](https://github.com/havenhq/revideo/commit/ad346f118d63b1e321ec315e1c70b925670124a1))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add default renderer ([#63](https://github.com/havenhq/revideo/issues/63)) ([9255490](https://github.com/havenhq/revideo/commit/92554900965fe088538f5e703dbab2fd84f904d7)), closes [#56](https://github.com/havenhq/revideo/issues/56) [#58](https://github.com/havenhq/revideo/issues/58)
* add DEG2RAD and RAD2DEG constants ([#630](https://github.com/havenhq/revideo/issues/630)) ([01801e8](https://github.com/havenhq/revideo/commit/01801e8766058e75a6a020400650fb00f8f430cc))
* add Grid node ([e1f83da](https://github.com/havenhq/revideo/commit/e1f83da1f43d20d392df4acb11e3df9cc457585d))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add middle cardinal point ([#758](https://github.com/havenhq/revideo/issues/758)) ([b036eaf](https://github.com/havenhq/revideo/commit/b036eafc00381831c08267a78cf9d74973f4025a))
* add missing flexbox properties ([#405](https://github.com/havenhq/revideo/issues/405)) ([4e78b4b](https://github.com/havenhq/revideo/commit/4e78b4b2fe4df42ce0a8da6fd41ad38b0104e7f5))
* add missing layout props ([#72](https://github.com/havenhq/revideo/issues/72)) ([f808a56](https://github.com/havenhq/revideo/commit/f808a562b192fd03dba4b0d353284db344d6a80b))
* add node spawners ([#149](https://github.com/havenhq/revideo/issues/149)) ([da18a4e](https://github.com/havenhq/revideo/commit/da18a4e24104022a84ecd6cec1666b520186058f))
* add polyline ([#84](https://github.com/havenhq/revideo/issues/84)) ([4ceaf84](https://github.com/havenhq/revideo/commit/4ceaf842915ac43d81f292c58a4dc73a8d1bb8e9))
* add random number generator ([#116](https://github.com/havenhq/revideo/issues/116)) ([d505312](https://github.com/havenhq/revideo/commit/d5053123eef308c7a2a61d92b6e76c637f4ed0b8)), closes [#14](https://github.com/havenhq/revideo/issues/14)
* add reparent helper ([80b95a9](https://github.com/havenhq/revideo/commit/80b95a9ce89d4a2eeea7e467257486e961602d69))
* add Text and Image components ([#70](https://github.com/havenhq/revideo/issues/70)) ([85c7dcd](https://github.com/havenhq/revideo/commit/85c7dcdb4f8ca2f0bfb03950c85a8d6f6652fcdf))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/havenhq/revideo/issues/9)) ([9e0d67b](https://github.com/havenhq/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* added a theme property to the CodeBlock component ([#279](https://github.com/havenhq/revideo/issues/279)) ([fe34fa8](https://github.com/havenhq/revideo/commit/fe34fa8ebfe66cd356fb1c3d85adedef11e03b45))
* better children and spawners ([#858](https://github.com/havenhq/revideo/issues/858)) ([9b5c23d](https://github.com/havenhq/revideo/commit/9b5c23d2076180cf710656c817369a07b253e3ec))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* convert built-in types to webgl ([#929](https://github.com/havenhq/revideo/issues/929)) ([a0f0b7d](https://github.com/havenhq/revideo/commit/a0f0b7d8996547e1a316097422ec02bddeeccec6))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* **core:** tree shaking ([#523](https://github.com/havenhq/revideo/issues/523)) ([65fec78](https://github.com/havenhq/revideo/commit/65fec7825fda33812b13f57bfeb1d82193a5d190))
* **docs:** fiddle editor ([#542](https://github.com/havenhq/revideo/issues/542)) ([3c68fef](https://github.com/havenhq/revideo/commit/3c68fefdf7bf375ee9345aba7dbf9e5ff35e3c3d))
* export everything from entry points ([#710](https://github.com/havenhq/revideo/issues/710)) ([3c885d9](https://github.com/havenhq/revideo/commit/3c885d9083b52fbbaccf1e2560ae50817949bc52))
* filter reordering ([#119](https://github.com/havenhq/revideo/issues/119)) ([2398d0f](https://github.com/havenhq/revideo/commit/2398d0f9d57f36b47c9c66a988ca5607e9a3a30e))
* implement absolute scale setter ([842079a](https://github.com/havenhq/revideo/commit/842079a6547af4032719c85837df3db7c1c6d30a))
* improve async signals ([#156](https://github.com/havenhq/revideo/issues/156)) ([db27b9d](https://github.com/havenhq/revideo/commit/db27b9d5fb69a88f42afd98c86c4a1cdceb88ea1))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* improve image error handling ([#847](https://github.com/havenhq/revideo/issues/847)) ([db09d53](https://github.com/havenhq/revideo/commit/db09d5305a3c0507b035e3cd347eaa65b23d7d2e))
* introduce basic caching ([#68](https://github.com/havenhq/revideo/issues/68)) ([6420d36](https://github.com/havenhq/revideo/commit/6420d362d0e4ae058f55b6ff6bb2a3a32dec559b))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make transparent video optional ([#91](https://github.com/havenhq/revideo/issues/91)) ([6a052d5](https://github.com/havenhq/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* merge properties and signals ([#124](https://github.com/havenhq/revideo/issues/124)) ([da3ba83](https://github.com/havenhq/revideo/commit/da3ba83d82ee74f5a5c3631b07597f08cdf9e8e4))
* minor improvements ([403c7c2](https://github.com/havenhq/revideo/commit/403c7c27ad969880a14c498ec6cefb9e7e7b7544))
* minor improvements ([#77](https://github.com/havenhq/revideo/issues/77)) ([7c6e584](https://github.com/havenhq/revideo/commit/7c6e584aca353c9af55f0acb61b32b5f99727dba))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* new animator ([#91](https://github.com/havenhq/revideo/issues/91)) ([d85f2f8](https://github.com/havenhq/revideo/commit/d85f2f8a54c0f8bbfbc451884385f30e5b3ec206))
* new Code node ([#946](https://github.com/havenhq/revideo/issues/946)) ([26e55a3](https://github.com/havenhq/revideo/commit/26e55a37c416fb1313c8aadf40eed2824b45d330))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/havenhq/revideo/issues/33)) ([a6e1bcd](https://github.com/havenhq/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* signal error handling ([#89](https://github.com/havenhq/revideo/issues/89)) ([472ac65](https://github.com/havenhq/revideo/commit/472ac65938b804a6b698c8522ec0c3b6bdbcf1b1))
* simplify size access ([#65](https://github.com/havenhq/revideo/issues/65)) ([3315e64](https://github.com/havenhq/revideo/commit/3315e64641e9778bc48ea3fb707e3c0eeb581dfe))
* simplify size access further ([#66](https://github.com/havenhq/revideo/issues/66)) ([9091a5e](https://github.com/havenhq/revideo/commit/9091a5e05d8fadf72c50832c7c4467ac4424b72c))
* switch to signals ([#64](https://github.com/havenhq/revideo/issues/64)) ([d22d237](https://github.com/havenhq/revideo/commit/d22d23728597e6fa82ea5c5a99a6c0a56819bded))
* transparent video ([#75](https://github.com/havenhq/revideo/issues/75)) ([5f7b909](https://github.com/havenhq/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))
* turn Layout into node ([#75](https://github.com/havenhq/revideo/issues/75)) ([cdf8dc0](https://github.com/havenhq/revideo/commit/cdf8dc0a35522482dee2dd78a69606b79f52246e))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** scene graph icons ([#914](https://github.com/havenhq/revideo/issues/914)) ([e92ddef](https://github.com/havenhq/revideo/commit/e92ddef34860f5e710ff0f1a310758ec0ca95bcb))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* unify references and signals ([#137](https://github.com/havenhq/revideo/issues/137)) ([063aede](https://github.com/havenhq/revideo/commit/063aede0842f948d2c6704c6edd426e954bb4668))
* upgrade code-fns for new theme options and lazy loading ([#401](https://github.com/havenhq/revideo/issues/401)) ([8965ab1](https://github.com/havenhq/revideo/commit/8965ab1bef8b6ae919c8001d0527f5793293b285)), closes [#396](https://github.com/havenhq/revideo/issues/396) [#322](https://github.com/havenhq/revideo/issues/322)
* use ES modules in fiddles ([#712](https://github.com/havenhq/revideo/issues/712)) ([dbe2ad5](https://github.com/havenhq/revideo/commit/dbe2ad5644219c5a98d38c6557abfb66d793c821))
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))
* world space cache ([#498](https://github.com/havenhq/revideo/issues/498)) ([633e9e1](https://github.com/havenhq/revideo/commit/633e9e140dfbbe397df6ddc1f96ed30782ddce94)), closes [#342](https://github.com/havenhq/revideo/issues/342)


### Reverts

* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))
* feat: upgrade code-fns for new theme options and lazy loading ([#435](https://github.com/havenhq/revideo/issues/435)) ([3f5e439](https://github.com/havenhq/revideo/commit/3f5e43968f7add7c6322c9c8358d3b6fc178c2fe))


### BREAKING CHANGES

* multiple name changes

To avoid collisions, names of certain classes have changed:
- `Text => Txt`
- `Image => Img`
- `Rect (type) => BBox`

Cache related methods of `Node` have changed:
- `getCacheRect => getCacheBBox`
- `cacheRect => cacheBBox`
- `fullCacheRect => fullCacheBBox`

The `CodeBlock` property has changed:
- `CodeBlock.selectionOpacity => CodeBlock.unselectedOpacity`
* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
* remove legacy package





## 0.3.5 (2024-06-04)


### Bug Fixes

* **2d:** account for offset in cardinal points ([#883](https://github.com/havenhq/revideo/issues/883)) ([24da258](https://github.com/havenhq/revideo/commit/24da258f5937087b363eeb9146a9d22747b02e70)), closes [#882](https://github.com/havenhq/revideo/issues/882)
* **2d:** account for spawners in scene graph ([#935](https://github.com/havenhq/revideo/issues/935)) ([ca325f5](https://github.com/havenhq/revideo/commit/ca325f5ad0ae987e76106f5e65fef3ed7b3ca08d))
* **2d:** add missing Curve properties to Circle ([#805](https://github.com/havenhq/revideo/issues/805)) ([38c7900](https://github.com/havenhq/revideo/commit/38c79000403d7c3c99dde9e4c825a448d5f55054))
* **2d:** add missing Fragment export ([#553](https://github.com/havenhq/revideo/issues/553)) ([229afb4](https://github.com/havenhq/revideo/commit/229afb4fe7d95f09b480ab4a813f8dff549f381f))
* **2d:** add missing jsx dev runtime ([#547](https://github.com/havenhq/revideo/issues/547)) ([d61cb7d](https://github.com/havenhq/revideo/commit/d61cb7dd24ab66ae17d5bd6f5ccb34c4fd1e7569)), closes [#545](https://github.com/havenhq/revideo/issues/545)
* **2d:** add missing middle property ([#891](https://github.com/havenhq/revideo/issues/891)) ([61e2e96](https://github.com/havenhq/revideo/commit/61e2e96e3b8f37a68ebdddb432baba04858fd4f3))
* **2d:** add missing shape export ([#111](https://github.com/havenhq/revideo/issues/111)) ([02a1fa7](https://github.com/havenhq/revideo/commit/02a1fa7ea62155e498809f2e57ff29a18c82ac12))
* **2d:** better error handling ([#524](https://github.com/havenhq/revideo/issues/524)) ([b7475ba](https://github.com/havenhq/revideo/commit/b7475ba5ff35d37ee198577d1205d6ecd6fd2092))
* **2d:** calculate arrow orientations for curves correctly ([#597](https://github.com/havenhq/revideo/issues/597)) ([1626811](https://github.com/havenhq/revideo/commit/1626811ec4cd1bd2a3d43e393ced40a7da462c3a))
* **2d:** calculate Txt cache bbox from contents ([#836](https://github.com/havenhq/revideo/issues/836)) ([33e1a12](https://github.com/havenhq/revideo/commit/33e1a1296f21d26e9ed45ae92132825dca17054d)), closes [#465](https://github.com/havenhq/revideo/issues/465)
* **2d:** clone size correctly ([#562](https://github.com/havenhq/revideo/issues/562)) ([cdd3df1](https://github.com/havenhq/revideo/commit/cdd3df1bff25b04b905e289264831d8d328caaab)), closes [#559](https://github.com/havenhq/revideo/issues/559)
* **2d:** correct layout defaults ([#442](https://github.com/havenhq/revideo/issues/442)) ([c116c35](https://github.com/havenhq/revideo/commit/c116c355179ba3b2487634fb82b9a5bc2ea266bf))
* **2d:** correctly append Txt nodes to view ([#644](https://github.com/havenhq/revideo/issues/644)) ([24bb51a](https://github.com/havenhq/revideo/commit/24bb51aa04778c33ce327926b27332efaa554e5f))
* **2d:** correctly support external image urls ([#678](https://github.com/havenhq/revideo/issues/678)) ([a08556b](https://github.com/havenhq/revideo/commit/a08556b6e2822a55db593f610ea4dd6cb8494adb)), closes [#677](https://github.com/havenhq/revideo/issues/677)
* **2d:** fix cache bbox for lines ([#467](https://github.com/havenhq/revideo/issues/467)) ([9fd1444](https://github.com/havenhq/revideo/commit/9fd144417bb0b6301da6c522a988775f5ff142ac)), closes [#466](https://github.com/havenhq/revideo/issues/466)
* **2d:** fix circle segment ([#557](https://github.com/havenhq/revideo/issues/557)) ([adebff4](https://github.com/havenhq/revideo/commit/adebff492b76a512d79151b00adf1b383d25c5b5))
* **2d:** fix CodeBlock types ([#563](https://github.com/havenhq/revideo/issues/563)) ([25160fa](https://github.com/havenhq/revideo/commit/25160fa4d92af88429110356e42f6e3b4f88a90f)), closes [#560](https://github.com/havenhq/revideo/issues/560)
* **2d:** fix curve arrow alignment when animating start signal ([#615](https://github.com/havenhq/revideo/issues/615)) ([2fefc40](https://github.com/havenhq/revideo/commit/2fefc4026050159ba204c7629832ad83e8bfa51b))
* **2d:** fix cyclic dependency in cardinal points ([#645](https://github.com/havenhq/revideo/issues/645)) ([def23f9](https://github.com/havenhq/revideo/commit/def23f925ee7200c8740ecd51c7f6117d67b6ef8))
* **2d:** fix font ligatures in CodeBlock ([#231](https://github.com/havenhq/revideo/issues/231)) ([11ee3fe](https://github.com/havenhq/revideo/commit/11ee3fef5ad878313cf19833df6881333ced4dac))
* **2d:** fix Gradient and Pattern signals ([#376](https://github.com/havenhq/revideo/issues/376)) ([6e0dc8a](https://github.com/havenhq/revideo/commit/6e0dc8af8d19f93fd6a42addca2b3a2958b4dd33))
* **2d:** fix height when tweening text ([#905](https://github.com/havenhq/revideo/issues/905)) ([1c6a796](https://github.com/havenhq/revideo/commit/1c6a7965be137c1ab69741cdd1e9aaa6df4208c4))
* **2d:** fix import order ([#94](https://github.com/havenhq/revideo/issues/94)) ([bcc0bcf](https://github.com/havenhq/revideo/commit/bcc0bcffae47855bd8f7ab06454aaebe93c4aa24)), closes [#76](https://github.com/havenhq/revideo/issues/76)
* **2d:** fix initial value of endOffset ([#433](https://github.com/havenhq/revideo/issues/433)) ([9fe82b3](https://github.com/havenhq/revideo/commit/9fe82b3d21ba0150a2378e541a4652ca707c2d15))
* **2d:** fix layout calculation for nodes not explicitly added to view ([#331](https://github.com/havenhq/revideo/issues/331)) ([528e2d5](https://github.com/havenhq/revideo/commit/528e2d5a0abec99819e022d2848b256ece9f869a))
* **2d:** fix letterSpacing ([#448](https://github.com/havenhq/revideo/issues/448)) ([bb5ffc4](https://github.com/havenhq/revideo/commit/bb5ffc48efa82b9db818e8e52aa35e9c2ad8ce89)), closes [#447](https://github.com/havenhq/revideo/issues/447)
* **2d:** fix line arc length ([#503](https://github.com/havenhq/revideo/issues/503)) ([4f1cd59](https://github.com/havenhq/revideo/commit/4f1cd59e6bcba0b16b36be88b28a60ae46d4d9ab)), closes [#497](https://github.com/havenhq/revideo/issues/497)
* **2d:** fix Line cache ([#232](https://github.com/havenhq/revideo/issues/232)) ([a953b64](https://github.com/havenhq/revideo/commit/a953b64540c020657845efc84d4179142a7a0974)), closes [#205](https://github.com/havenhq/revideo/issues/205)
* **2d:** fix line jitter under certain conditions ([#863](https://github.com/havenhq/revideo/issues/863)) ([fb110a2](https://github.com/havenhq/revideo/commit/fb110a2f3583fc040bf2c39560934162bd146d9b))
* **2d:** fix Line overview crashing ([#142](https://github.com/havenhq/revideo/issues/142)) ([6bd5fd9](https://github.com/havenhq/revideo/commit/6bd5fd941e583e44f5d920ecd20215efb1eed58a))
* **2d:** fix nested cache canvases ([#554](https://github.com/havenhq/revideo/issues/554)) ([e601441](https://github.com/havenhq/revideo/commit/e6014413b215af6fb1a7953f8db83893d4025f0b)), closes [#551](https://github.com/havenhq/revideo/issues/551)
* **2d:** fix package.json entry ([#720](https://github.com/havenhq/revideo/issues/720)) ([12e9bf6](https://github.com/havenhq/revideo/commit/12e9bf6f40ab7afc02e2f55260544f3864920ded))
* **2d:** fix signal initialization ([#382](https://github.com/havenhq/revideo/issues/382)) ([ea36e79](https://github.com/havenhq/revideo/commit/ea36e791a20bfd1b491ffa9917be686c51bc3899))
* **2d:** fix tweening cardinal points ([#829](https://github.com/havenhq/revideo/issues/829)) ([cc16737](https://github.com/havenhq/revideo/commit/cc16737cd59081582fbb488a880e8d3c11c14918))
* **2d:** fix Txt decorators ([#526](https://github.com/havenhq/revideo/issues/526)) ([25b30ed](https://github.com/havenhq/revideo/commit/25b30ed3861f46d72147335480912ce5f564be79))
* **2d:** fix types ([#659](https://github.com/havenhq/revideo/issues/659)) ([a32af29](https://github.com/havenhq/revideo/commit/a32af29ef3bd2e5dbf08697ebfee53230fceadc1))
* **2d:** format whitespaces according to HTML ([#372](https://github.com/havenhq/revideo/issues/372)) ([83fb565](https://github.com/havenhq/revideo/commit/83fb565742d98f060c0400c8cbaf9961b69f34d0)), closes [#370](https://github.com/havenhq/revideo/issues/370)
* **2d:** handle division by zero in lines ([#407](https://github.com/havenhq/revideo/issues/407)) ([a17871a](https://github.com/havenhq/revideo/commit/a17871a2ce63dd5bb32bc719037327c4e9dde217))
* **2d:** handle floating point errors in acos ([#381](https://github.com/havenhq/revideo/issues/381)) ([5bca8fd](https://github.com/havenhq/revideo/commit/5bca8fd0bbdcf28f2793c124b7d6b0afd560c4b8))
* **2d:** handle lines with no points ([#233](https://github.com/havenhq/revideo/issues/233)) ([8108474](https://github.com/havenhq/revideo/commit/81084743dfad7b6419760796fda825047909d4d4)), closes [#212](https://github.com/havenhq/revideo/issues/212)
* **2d:** ignore children with disabled layout ([#669](https://github.com/havenhq/revideo/issues/669)) ([b98c462](https://github.com/havenhq/revideo/commit/b98c4625c3634495e86ca23d19355035e457db06)), closes [#580](https://github.com/havenhq/revideo/issues/580)
* **2d:** improve Curve hitbox ([#778](https://github.com/havenhq/revideo/issues/778)) ([8af723c](https://github.com/havenhq/revideo/commit/8af723c0322de39d2defe0363bba03f4f9542f08))
* **2d:** improve Rect radius ([#221](https://github.com/havenhq/revideo/issues/221)) ([3437e42](https://github.com/havenhq/revideo/commit/3437e42713a3f4a8d44d246ee01e2eb23b61e06a)), closes [#207](https://github.com/havenhq/revideo/issues/207)
* **2d:** make Text respect textWrap=pre ([#287](https://github.com/havenhq/revideo/issues/287)) ([cb07f4b](https://github.com/havenhq/revideo/commit/cb07f4bdf07edc8a086b934ca5ab769682b9a010))
* **2d:** minor fixes ([#915](https://github.com/havenhq/revideo/issues/915)) ([63cfc9e](https://github.com/havenhq/revideo/commit/63cfc9e033f2c2ac6d6ed2a0d8f615fcf642ab59))
* **2d:** point arrow heads in correct direction ([#792](https://github.com/havenhq/revideo/issues/792)) ([52ed52e](https://github.com/havenhq/revideo/commit/52ed52e963cc69a066a0353680acaca35b9c937a)), closes [#783](https://github.com/havenhq/revideo/issues/783)
* **2d:** prevent src warnings in Icon and Latex ([#899](https://github.com/havenhq/revideo/issues/899)) ([5eebab7](https://github.com/havenhq/revideo/commit/5eebab71d8061e233872e049e77b847f9fd077a1))
* **2d:** remove circular dependencies ([#780](https://github.com/havenhq/revideo/issues/780)) ([cdf3af5](https://github.com/havenhq/revideo/commit/cdf3af500a58151ee3549c6e728751aab3e6f75c))
* **2d:** smoothly play videos when presenting ([#600](https://github.com/havenhq/revideo/issues/600)) ([294fe6a](https://github.com/havenhq/revideo/commit/294fe6ac056ab074c77214fcf9035f53fac9258c)), closes [#578](https://github.com/havenhq/revideo/issues/578)
* **2d:** some signal setters not returning owners ([#143](https://github.com/havenhq/revideo/issues/143)) ([09ab7f9](https://github.com/havenhq/revideo/commit/09ab7f96afcaae608399a653c0b4878ba9b467d4))
* **2d:** stop code highlighting from jumping ([#230](https://github.com/havenhq/revideo/issues/230)) ([67ef1c4](https://github.com/havenhq/revideo/commit/67ef1c497056dd1f8f9e20d1d7fc1af03ec3849e))
* **2d:** stop mutating children ([#903](https://github.com/havenhq/revideo/issues/903)) ([f9552a8](https://github.com/havenhq/revideo/commit/f9552a8658ccde6c7b2466ad40b12cf28c6ec805))
* **2d:** switch iframes to ShadowDOM ([#90](https://github.com/havenhq/revideo/issues/90)) ([86176be](https://github.com/havenhq/revideo/commit/86176be055c08aba59272afcda00ed586f6c7ad6))
* **2d:** textDirection property for RTL/LTR text ([#404](https://github.com/havenhq/revideo/issues/404)) ([f240b1b](https://github.com/havenhq/revideo/commit/f240b1bd140a884f6901b7cfcb97ce3e9ce4b48d))
* **2d:** textWrap not working in Firefox ([#541](https://github.com/havenhq/revideo/issues/541)) ([f10e057](https://github.com/havenhq/revideo/commit/f10e057fd13ed9dcc70ebc0ca63963708ec159c8)), closes [#517](https://github.com/havenhq/revideo/issues/517)
* **2d:** wait for reused async resources ([#599](https://github.com/havenhq/revideo/issues/599)) ([280e065](https://github.com/havenhq/revideo/commit/280e065fe69e9a744b7b12eb4609e7d87f76bb63)), closes [#593](https://github.com/havenhq/revideo/issues/593)
* account for italic fonts in cache ([#968](https://github.com/havenhq/revideo/issues/968)) ([abb0906](https://github.com/havenhq/revideo/commit/abb090695c4257d9877d0cb11954093c49149ddc)), closes [#934](https://github.com/havenhq/revideo/issues/934)
* await font load before drawing ([#31](https://github.com/havenhq/revideo/issues/31)) ([cbfb5cb](https://github.com/havenhq/revideo/commit/cbfb5cb136d85a657c99187da166b64aae8be3a1))
* await font load without throwing async node error ([#69](https://github.com/havenhq/revideo/issues/69)) ([fddebe6](https://github.com/havenhq/revideo/commit/fddebe60a610af718c880b9e198eebe8555ea9a5))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/havenhq/revideo/issues/62)) ([04cdc5b](https://github.com/havenhq/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* fix compound property setter ([#218](https://github.com/havenhq/revideo/issues/218)) ([6cd1b95](https://github.com/havenhq/revideo/commit/6cd1b952df950554eb637c9f8e82947c415d00c5)), closes [#208](https://github.com/havenhq/revideo/issues/208) [#210](https://github.com/havenhq/revideo/issues/210)
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* plug memory leaks ([#385](https://github.com/havenhq/revideo/issues/385)) ([de0af00](https://github.com/havenhq/revideo/commit/de0af00a7d2e019e2a933791c62b7901755be7b0))
* prevent consumePromises from halting ([#657](https://github.com/havenhq/revideo/issues/657)) ([363a189](https://github.com/havenhq/revideo/commit/363a189b0c7f5926c9d5ae00b58b48e8ed4d9b48))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* previous scene being rendered twice ([#97](https://github.com/havenhq/revideo/issues/97)) ([90205bd](https://github.com/havenhq/revideo/commit/90205bdc1a086abe5f73b04cb4616c6af5ec4377))
* restrict size of cache canvas ([#544](https://github.com/havenhq/revideo/issues/544)) ([49ec554](https://github.com/havenhq/revideo/commit/49ec55490718e503d9a39437ae13c189dc4fe9ea))
* support color to null tweening ([#387](https://github.com/havenhq/revideo/issues/387)) ([02e9f22](https://github.com/havenhq/revideo/commit/02e9f22027a1c3a85ffcc259aeca913318fb6f54))
* support legacy imports again ([#868](https://github.com/havenhq/revideo/issues/868)) ([77c4e2e](https://github.com/havenhq/revideo/commit/77c4e2eeb8b0f73bdef1f72e3d81f34c79748929))
* support multiple async players ([#450](https://github.com/havenhq/revideo/issues/450)) ([d7ec469](https://github.com/havenhq/revideo/commit/d7ec469e747eefd909f4dd59dd713f5d86308222)), closes [#434](https://github.com/havenhq/revideo/issues/434)
* typo on codeblock remove comments ([#368](https://github.com/havenhq/revideo/issues/368)) ([2025adc](https://github.com/havenhq/revideo/commit/2025adc6e7aa11d81b6f5f6989e8eae18cf86cb7))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Code Refactoring

* introduce improved names ([#425](https://github.com/havenhq/revideo/issues/425)) ([4a2188d](https://github.com/havenhq/revideo/commit/4a2188d339587fa658b2134befc3fe63c835c5d7))
* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* **2d:** add antialiased signal to Shape ([#282](https://github.com/havenhq/revideo/issues/282)) ([7c6905d](https://github.com/havenhq/revideo/commit/7c6905d72c6c2f49e10f0a80704c0afe3504d01b))
* **2d:** add arcLength helper methods to Curve ([#627](https://github.com/havenhq/revideo/issues/627)) ([3c7546e](https://github.com/havenhq/revideo/commit/3c7546e7a509deb6fff8f669c3df0a69b492bd2e))
* **2d:** add Bézier nodes ([#603](https://github.com/havenhq/revideo/issues/603)) ([9841cfd](https://github.com/havenhq/revideo/commit/9841cfdc3947ca4e6d6e42ed21eae88e855f855d))
* **2d:** add cardinal points ([#636](https://github.com/havenhq/revideo/issues/636)) ([2136a25](https://github.com/havenhq/revideo/commit/2136a2558a9ed968ee505e4e5cce33d989dfdc13)), closes [#391](https://github.com/havenhq/revideo/issues/391)
* **2d:** add closed property for circle ([#378](https://github.com/havenhq/revideo/issues/378)) ([62a9605](https://github.com/havenhq/revideo/commit/62a9605d4c54e7bf2d2d44d47bf769f5b27378a5))
* **2d:** add completion property for curves ([#635](https://github.com/havenhq/revideo/issues/635)) ([6577d6d](https://github.com/havenhq/revideo/commit/6577d6ddfaf779ba02f3862d2a357166138b99ca))
* **2d:** add default computed values for signals ([#259](https://github.com/havenhq/revideo/issues/259)) ([18f61a6](https://github.com/havenhq/revideo/commit/18f61a668420dec8afba52d52a6557e7a7919ba2))
* **2d:** add Icon Component ([#306](https://github.com/havenhq/revideo/issues/306)) ([3479631](https://github.com/havenhq/revideo/commit/3479631ef34e39f90a8d8de441317672be1840d9)), closes [#305](https://github.com/havenhq/revideo/issues/305)
* **2d:** add LaTeX component ([#228](https://github.com/havenhq/revideo/issues/228)) ([4c26d2a](https://github.com/havenhq/revideo/commit/4c26d2aaf0c697486639aa917cd5c585d3d0ea74))
* **2d:** add line counter for CodeBlock ([#802](https://github.com/havenhq/revideo/issues/802)) ([c3f9676](https://github.com/havenhq/revideo/commit/c3f9676b6984731a09a44ab0b1fcfc226975fa08))
* **2d:** add methods for rearranging children ([#81](https://github.com/havenhq/revideo/issues/81)) ([63f6c1a](https://github.com/havenhq/revideo/commit/63f6c1aa51ac4ecd093151c8cd30910f2e72bcac))
* **2d:** add moveBelow, moveAbove and moveTo methods to Node ([#365](https://github.com/havenhq/revideo/issues/365)) ([16752a3](https://github.com/havenhq/revideo/commit/16752a3b8ae7461b33d6208a9675729f374e8324))
* **2d:** add option for preformatted text ([#147](https://github.com/havenhq/revideo/issues/147)) ([989be53](https://github.com/havenhq/revideo/commit/989be532d86642e1125bb7fa62a801b09c1b8f26))
* **2d:** add Path component ([#700](https://github.com/havenhq/revideo/issues/700)) ([2128b6b](https://github.com/havenhq/revideo/commit/2128b6bf871cabe19e1abc749f18945c78c01f84))
* **2d:** add playbackRate signal to Video component ([#831](https://github.com/havenhq/revideo/issues/831)) ([5902b82](https://github.com/havenhq/revideo/commit/5902b824b36400876be0ee970e2c6211299faf21)), closes [#711](https://github.com/havenhq/revideo/issues/711)
* **2d:** add Polygon component ([#463](https://github.com/havenhq/revideo/issues/463)) ([15adb3e](https://github.com/havenhq/revideo/commit/15adb3e312a4998b44c0b9c5fe5b5236f51c71c9)), closes [#455](https://github.com/havenhq/revideo/issues/455)
* **2d:** add querying helpers ([#852](https://github.com/havenhq/revideo/issues/852)) ([614de6b](https://github.com/havenhq/revideo/commit/614de6bd8542322d1db4b123b875f6fad85cc4eb))
* **2d:** add Ray node ([#628](https://github.com/havenhq/revideo/issues/628)) ([649447c](https://github.com/havenhq/revideo/commit/649447cd5f2089afc64cc7bd4b0276e69d1e9a30))
* **2d:** add save and restore methods to nodes ([#406](https://github.com/havenhq/revideo/issues/406)) ([870e194](https://github.com/havenhq/revideo/commit/870e1947d97382bc6d82857c077140bbef7cf7e8))
* **2d:** add skew property ([#803](https://github.com/havenhq/revideo/issues/803)) ([eff7c7b](https://github.com/havenhq/revideo/commit/eff7c7be0c013139140b398350242457736d48c7))
* **2d:** add smooth corners and sharpness to rect ([#310](https://github.com/havenhq/revideo/issues/310)) ([f7fbefd](https://github.com/havenhq/revideo/commit/f7fbefd27f7f6972cfb5a45a68e5d0aed9593ae4))
* **2d:** add spline node ([#514](https://github.com/havenhq/revideo/issues/514)) ([3ce2111](https://github.com/havenhq/revideo/commit/3ce2111309e698450dc4c6e2ad47024995863e73))
* **2d:** add start and end signals to Grid node ([#761](https://github.com/havenhq/revideo/issues/761)) ([e37ea80](https://github.com/havenhq/revideo/commit/e37ea806b94e93c6324d8e1b502468925b731e8e))
* **2d:** add SVG component ([#763](https://github.com/havenhq/revideo/issues/763)) ([8eadc11](https://github.com/havenhq/revideo/commit/8eadc11937d4201545894f2f5b204d477a3f9094))
* **2d:** add textAlign property ([#451](https://github.com/havenhq/revideo/issues/451)) ([3d15825](https://github.com/havenhq/revideo/commit/3d15825f3cc5a35ba081a31510741b824f3bc6ab)), closes [#303](https://github.com/havenhq/revideo/issues/303)
* **2d:** add video component property getter ([#240](https://github.com/havenhq/revideo/issues/240)) ([59de5ab](https://github.com/havenhq/revideo/commit/59de5ab2c089589773a2f9ad7588eda7d72693a7))
* **2d:** add z-index property to nodes ([#398](https://github.com/havenhq/revideo/issues/398)) ([4280af3](https://github.com/havenhq/revideo/commit/4280af3b4b7bd5970fe5e743949a0fcca2c314f3))
* **2d:** always clip images and videos ([#773](https://github.com/havenhq/revideo/issues/773)) ([3938c59](https://github.com/havenhq/revideo/commit/3938c59394bfc42e5562504687d783ff306d7d32))
* **2d:** clamp opacity value between 0 and 1 ([#835](https://github.com/havenhq/revideo/issues/835)) ([c54b2f8](https://github.com/havenhq/revideo/commit/c54b2f837a8e8b872df3610f4cc6caa94a728500)), closes [#830](https://github.com/havenhq/revideo/issues/830)
* **2d:** code bounding box helpers ([#948](https://github.com/havenhq/revideo/issues/948)) ([0ffd56f](https://github.com/havenhq/revideo/commit/0ffd56f5f8076913e687e5b908311aa7832d8b7b))
* **2d:** code range helpers ([#947](https://github.com/havenhq/revideo/issues/947)) ([044c9ac](https://github.com/havenhq/revideo/commit/044c9acd6ee7e4e337fb4d51286126f583a8da6f))
* **2d:** code selection and modification ([#163](https://github.com/havenhq/revideo/issues/163)) ([e8e884a](https://github.com/havenhq/revideo/commit/e8e884a1a5574425dbf15272718911c12cfa2327))
* **2d:** construct lines using signals ([#133](https://github.com/havenhq/revideo/issues/133)) ([2968a24](https://github.com/havenhq/revideo/commit/2968a2426564469fb4f4343fe71a6d30e95361f2))
* **2d:** immediate restore ([#736](https://github.com/havenhq/revideo/issues/736)) ([634d51d](https://github.com/havenhq/revideo/commit/634d51d2afe8a536673c364874f8f3d1a450b846))
* **2d:** improve property declarations ([27e7d26](https://github.com/havenhq/revideo/commit/27e7d267ee91bf1e8ca79686b6ec31347f9f4d41))
* **2d:** improve Rect corner radius ([#120](https://github.com/havenhq/revideo/issues/120)) ([b471fe0](https://github.com/havenhq/revideo/commit/b471fe0e37c0a426d3af8299c9c3c22539e7df05))
* **2d:** improve Video node ([#601](https://github.com/havenhq/revideo/issues/601)) ([3801d83](https://github.com/havenhq/revideo/commit/3801d83415bbdeeee5d6d53d0c18e5d9e78fba56))
* **2d:** make `View2D` extend `Rect` ([#379](https://github.com/havenhq/revideo/issues/379)) ([93db5fc](https://github.com/havenhq/revideo/commit/93db5fc41617c0902e85fda90fbfc930c2b4634b))
* **2d:** make Circle extend Curve ([#771](https://github.com/havenhq/revideo/issues/771)) ([4c8cf19](https://github.com/havenhq/revideo/commit/4c8cf1954093958eac507921dc18f67dd64b2052))
* **2d:** make Polygon extend Curve ([#961](https://github.com/havenhq/revideo/issues/961)) ([739c9fc](https://github.com/havenhq/revideo/commit/739c9fccbc101f8b2eed680a11c00f317fdc4dd3))
* **2d:** make Rect extend Curve ([#759](https://github.com/havenhq/revideo/issues/759)) ([9810212](https://github.com/havenhq/revideo/commit/9810212648824b9a2fa2ecd6b597e3319d20b325))
* **2d:** nested Txt nodes ([#861](https://github.com/havenhq/revideo/issues/861)) ([f2786d0](https://github.com/havenhq/revideo/commit/f2786d0cd0d06065ca1e9eb9f6b4c11a74b6c283)), closes [#540](https://github.com/havenhq/revideo/issues/540)
* **2d:** simplify layout prop ([c24cb12](https://github.com/havenhq/revideo/commit/c24cb12a22b7c85fdfb051917fa9ee1e0911717c))
* **2d:** support HMR for images ([#641](https://github.com/havenhq/revideo/issues/641)) ([cf17520](https://github.com/havenhq/revideo/commit/cf17520aa8ddf19dcfc419c63cf7255892d45b71))
* **2d:** support letter spacing in Code ([#955](https://github.com/havenhq/revideo/issues/955)) ([2a87c37](https://github.com/havenhq/revideo/commit/2a87c37c832de86c4b524b33fd68806627daec8b))
* **2d:** support tweening in applyState ([#859](https://github.com/havenhq/revideo/issues/859)) ([b7ed2e2](https://github.com/havenhq/revideo/commit/b7ed2e24773227e5b576ff056eb23de9b9ff1676))
* **2d:** support tweening Line points ([#853](https://github.com/havenhq/revideo/issues/853)) ([4bf37d7](https://github.com/havenhq/revideo/commit/4bf37d74d2e4bb9d9cc034aff121a32da9a6d146))
* **2d:** unify desired sizes ([#118](https://github.com/havenhq/revideo/issues/118)) ([401a799](https://github.com/havenhq/revideo/commit/401a79946b034a96b9abff2f3fb5efd6cc9080f3))
* **2d:** unify layout properties ([#355](https://github.com/havenhq/revideo/issues/355)) ([3cae97e](https://github.com/havenhq/revideo/commit/3cae97ea704d0533020fa87326dacadcc037d517)), closes [#352](https://github.com/havenhq/revideo/issues/352)
* **2d:** warn about missing image source ([#817](https://github.com/havenhq/revideo/issues/817)) ([6dcdb5f](https://github.com/havenhq/revideo/commit/6dcdb5f3b83d4860b1557e4745972e0af68f92f3))
* add advanced caching ([#69](https://github.com/havenhq/revideo/issues/69)) ([2a644c9](https://github.com/havenhq/revideo/commit/2a644c9315acfcc5280a5eacc9904df140a61e4f))
* add base class for shapes ([#67](https://github.com/havenhq/revideo/issues/67)) ([d38c172](https://github.com/havenhq/revideo/commit/d38c1724e129c553739cbfc27c4e5cd8f737f067))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add cloning ([#80](https://github.com/havenhq/revideo/issues/80)) ([47d7a0f](https://github.com/havenhq/revideo/commit/47d7a0fa5da9a03d8ed91557db651f6f960e28b1))
* add CodeBlock component based on code-fns to 2D ([#78](https://github.com/havenhq/revideo/issues/78)) ([ad346f1](https://github.com/havenhq/revideo/commit/ad346f118d63b1e321ec315e1c70b925670124a1))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add default renderer ([#63](https://github.com/havenhq/revideo/issues/63)) ([9255490](https://github.com/havenhq/revideo/commit/92554900965fe088538f5e703dbab2fd84f904d7)), closes [#56](https://github.com/havenhq/revideo/issues/56) [#58](https://github.com/havenhq/revideo/issues/58)
* add DEG2RAD and RAD2DEG constants ([#630](https://github.com/havenhq/revideo/issues/630)) ([01801e8](https://github.com/havenhq/revideo/commit/01801e8766058e75a6a020400650fb00f8f430cc))
* add Grid node ([e1f83da](https://github.com/havenhq/revideo/commit/e1f83da1f43d20d392df4acb11e3df9cc457585d))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add middle cardinal point ([#758](https://github.com/havenhq/revideo/issues/758)) ([b036eaf](https://github.com/havenhq/revideo/commit/b036eafc00381831c08267a78cf9d74973f4025a))
* add missing flexbox properties ([#405](https://github.com/havenhq/revideo/issues/405)) ([4e78b4b](https://github.com/havenhq/revideo/commit/4e78b4b2fe4df42ce0a8da6fd41ad38b0104e7f5))
* add missing layout props ([#72](https://github.com/havenhq/revideo/issues/72)) ([f808a56](https://github.com/havenhq/revideo/commit/f808a562b192fd03dba4b0d353284db344d6a80b))
* add node spawners ([#149](https://github.com/havenhq/revideo/issues/149)) ([da18a4e](https://github.com/havenhq/revideo/commit/da18a4e24104022a84ecd6cec1666b520186058f))
* add polyline ([#84](https://github.com/havenhq/revideo/issues/84)) ([4ceaf84](https://github.com/havenhq/revideo/commit/4ceaf842915ac43d81f292c58a4dc73a8d1bb8e9))
* add random number generator ([#116](https://github.com/havenhq/revideo/issues/116)) ([d505312](https://github.com/havenhq/revideo/commit/d5053123eef308c7a2a61d92b6e76c637f4ed0b8)), closes [#14](https://github.com/havenhq/revideo/issues/14)
* add reparent helper ([80b95a9](https://github.com/havenhq/revideo/commit/80b95a9ce89d4a2eeea7e467257486e961602d69))
* add Text and Image components ([#70](https://github.com/havenhq/revideo/issues/70)) ([85c7dcd](https://github.com/havenhq/revideo/commit/85c7dcdb4f8ca2f0bfb03950c85a8d6f6652fcdf))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/havenhq/revideo/issues/9)) ([9e0d67b](https://github.com/havenhq/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* added a theme property to the CodeBlock component ([#279](https://github.com/havenhq/revideo/issues/279)) ([fe34fa8](https://github.com/havenhq/revideo/commit/fe34fa8ebfe66cd356fb1c3d85adedef11e03b45))
* better children and spawners ([#858](https://github.com/havenhq/revideo/issues/858)) ([9b5c23d](https://github.com/havenhq/revideo/commit/9b5c23d2076180cf710656c817369a07b253e3ec))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* convert built-in types to webgl ([#929](https://github.com/havenhq/revideo/issues/929)) ([a0f0b7d](https://github.com/havenhq/revideo/commit/a0f0b7d8996547e1a316097422ec02bddeeccec6))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* **core:** tree shaking ([#523](https://github.com/havenhq/revideo/issues/523)) ([65fec78](https://github.com/havenhq/revideo/commit/65fec7825fda33812b13f57bfeb1d82193a5d190))
* **docs:** fiddle editor ([#542](https://github.com/havenhq/revideo/issues/542)) ([3c68fef](https://github.com/havenhq/revideo/commit/3c68fefdf7bf375ee9345aba7dbf9e5ff35e3c3d))
* export everything from entry points ([#710](https://github.com/havenhq/revideo/issues/710)) ([3c885d9](https://github.com/havenhq/revideo/commit/3c885d9083b52fbbaccf1e2560ae50817949bc52))
* filter reordering ([#119](https://github.com/havenhq/revideo/issues/119)) ([2398d0f](https://github.com/havenhq/revideo/commit/2398d0f9d57f36b47c9c66a988ca5607e9a3a30e))
* implement absolute scale setter ([842079a](https://github.com/havenhq/revideo/commit/842079a6547af4032719c85837df3db7c1c6d30a))
* improve async signals ([#156](https://github.com/havenhq/revideo/issues/156)) ([db27b9d](https://github.com/havenhq/revideo/commit/db27b9d5fb69a88f42afd98c86c4a1cdceb88ea1))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* improve image error handling ([#847](https://github.com/havenhq/revideo/issues/847)) ([db09d53](https://github.com/havenhq/revideo/commit/db09d5305a3c0507b035e3cd347eaa65b23d7d2e))
* introduce basic caching ([#68](https://github.com/havenhq/revideo/issues/68)) ([6420d36](https://github.com/havenhq/revideo/commit/6420d362d0e4ae058f55b6ff6bb2a3a32dec559b))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make transparent video optional ([#91](https://github.com/havenhq/revideo/issues/91)) ([6a052d5](https://github.com/havenhq/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* merge properties and signals ([#124](https://github.com/havenhq/revideo/issues/124)) ([da3ba83](https://github.com/havenhq/revideo/commit/da3ba83d82ee74f5a5c3631b07597f08cdf9e8e4))
* minor improvements ([403c7c2](https://github.com/havenhq/revideo/commit/403c7c27ad969880a14c498ec6cefb9e7e7b7544))
* minor improvements ([#77](https://github.com/havenhq/revideo/issues/77)) ([7c6e584](https://github.com/havenhq/revideo/commit/7c6e584aca353c9af55f0acb61b32b5f99727dba))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* new animator ([#91](https://github.com/havenhq/revideo/issues/91)) ([d85f2f8](https://github.com/havenhq/revideo/commit/d85f2f8a54c0f8bbfbc451884385f30e5b3ec206))
* new Code node ([#946](https://github.com/havenhq/revideo/issues/946)) ([26e55a3](https://github.com/havenhq/revideo/commit/26e55a37c416fb1313c8aadf40eed2824b45d330))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/havenhq/revideo/issues/33)) ([a6e1bcd](https://github.com/havenhq/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* signal error handling ([#89](https://github.com/havenhq/revideo/issues/89)) ([472ac65](https://github.com/havenhq/revideo/commit/472ac65938b804a6b698c8522ec0c3b6bdbcf1b1))
* simplify size access ([#65](https://github.com/havenhq/revideo/issues/65)) ([3315e64](https://github.com/havenhq/revideo/commit/3315e64641e9778bc48ea3fb707e3c0eeb581dfe))
* simplify size access further ([#66](https://github.com/havenhq/revideo/issues/66)) ([9091a5e](https://github.com/havenhq/revideo/commit/9091a5e05d8fadf72c50832c7c4467ac4424b72c))
* switch to signals ([#64](https://github.com/havenhq/revideo/issues/64)) ([d22d237](https://github.com/havenhq/revideo/commit/d22d23728597e6fa82ea5c5a99a6c0a56819bded))
* transparent video ([#75](https://github.com/havenhq/revideo/issues/75)) ([5f7b909](https://github.com/havenhq/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))
* turn Layout into node ([#75](https://github.com/havenhq/revideo/issues/75)) ([cdf8dc0](https://github.com/havenhq/revideo/commit/cdf8dc0a35522482dee2dd78a69606b79f52246e))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** scene graph icons ([#914](https://github.com/havenhq/revideo/issues/914)) ([e92ddef](https://github.com/havenhq/revideo/commit/e92ddef34860f5e710ff0f1a310758ec0ca95bcb))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* unify references and signals ([#137](https://github.com/havenhq/revideo/issues/137)) ([063aede](https://github.com/havenhq/revideo/commit/063aede0842f948d2c6704c6edd426e954bb4668))
* upgrade code-fns for new theme options and lazy loading ([#401](https://github.com/havenhq/revideo/issues/401)) ([8965ab1](https://github.com/havenhq/revideo/commit/8965ab1bef8b6ae919c8001d0527f5793293b285)), closes [#396](https://github.com/havenhq/revideo/issues/396) [#322](https://github.com/havenhq/revideo/issues/322)
* use ES modules in fiddles ([#712](https://github.com/havenhq/revideo/issues/712)) ([dbe2ad5](https://github.com/havenhq/revideo/commit/dbe2ad5644219c5a98d38c6557abfb66d793c821))
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))
* world space cache ([#498](https://github.com/havenhq/revideo/issues/498)) ([633e9e1](https://github.com/havenhq/revideo/commit/633e9e140dfbbe397df6ddc1f96ed30782ddce94)), closes [#342](https://github.com/havenhq/revideo/issues/342)


### Reverts

* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))
* feat: upgrade code-fns for new theme options and lazy loading ([#435](https://github.com/havenhq/revideo/issues/435)) ([3f5e439](https://github.com/havenhq/revideo/commit/3f5e43968f7add7c6322c9c8358d3b6fc178c2fe))


### BREAKING CHANGES

* multiple name changes

To avoid collisions, names of certain classes have changed:
- `Text => Txt`
- `Image => Img`
- `Rect (type) => BBox`

Cache related methods of `Node` have changed:
- `getCacheRect => getCacheBBox`
- `cacheRect => cacheBBox`
- `fullCacheRect => fullCacheBBox`

The `CodeBlock` property has changed:
- `CodeBlock.selectionOpacity => CodeBlock.unselectedOpacity`
* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
* remove legacy package





## 0.3.4 (2024-05-20)


### Bug Fixes

* **2d:** account for offset in cardinal points ([#883](https://github.com/havenhq/revideo/issues/883)) ([24da258](https://github.com/havenhq/revideo/commit/24da258f5937087b363eeb9146a9d22747b02e70)), closes [#882](https://github.com/havenhq/revideo/issues/882)
* **2d:** account for spawners in scene graph ([#935](https://github.com/havenhq/revideo/issues/935)) ([ca325f5](https://github.com/havenhq/revideo/commit/ca325f5ad0ae987e76106f5e65fef3ed7b3ca08d))
* **2d:** add missing Curve properties to Circle ([#805](https://github.com/havenhq/revideo/issues/805)) ([38c7900](https://github.com/havenhq/revideo/commit/38c79000403d7c3c99dde9e4c825a448d5f55054))
* **2d:** add missing Fragment export ([#553](https://github.com/havenhq/revideo/issues/553)) ([229afb4](https://github.com/havenhq/revideo/commit/229afb4fe7d95f09b480ab4a813f8dff549f381f))
* **2d:** add missing jsx dev runtime ([#547](https://github.com/havenhq/revideo/issues/547)) ([d61cb7d](https://github.com/havenhq/revideo/commit/d61cb7dd24ab66ae17d5bd6f5ccb34c4fd1e7569)), closes [#545](https://github.com/havenhq/revideo/issues/545)
* **2d:** add missing middle property ([#891](https://github.com/havenhq/revideo/issues/891)) ([61e2e96](https://github.com/havenhq/revideo/commit/61e2e96e3b8f37a68ebdddb432baba04858fd4f3))
* **2d:** add missing shape export ([#111](https://github.com/havenhq/revideo/issues/111)) ([02a1fa7](https://github.com/havenhq/revideo/commit/02a1fa7ea62155e498809f2e57ff29a18c82ac12))
* **2d:** better error handling ([#524](https://github.com/havenhq/revideo/issues/524)) ([b7475ba](https://github.com/havenhq/revideo/commit/b7475ba5ff35d37ee198577d1205d6ecd6fd2092))
* **2d:** calculate arrow orientations for curves correctly ([#597](https://github.com/havenhq/revideo/issues/597)) ([1626811](https://github.com/havenhq/revideo/commit/1626811ec4cd1bd2a3d43e393ced40a7da462c3a))
* **2d:** calculate Txt cache bbox from contents ([#836](https://github.com/havenhq/revideo/issues/836)) ([33e1a12](https://github.com/havenhq/revideo/commit/33e1a1296f21d26e9ed45ae92132825dca17054d)), closes [#465](https://github.com/havenhq/revideo/issues/465)
* **2d:** clone size correctly ([#562](https://github.com/havenhq/revideo/issues/562)) ([cdd3df1](https://github.com/havenhq/revideo/commit/cdd3df1bff25b04b905e289264831d8d328caaab)), closes [#559](https://github.com/havenhq/revideo/issues/559)
* **2d:** correct layout defaults ([#442](https://github.com/havenhq/revideo/issues/442)) ([c116c35](https://github.com/havenhq/revideo/commit/c116c355179ba3b2487634fb82b9a5bc2ea266bf))
* **2d:** correctly append Txt nodes to view ([#644](https://github.com/havenhq/revideo/issues/644)) ([24bb51a](https://github.com/havenhq/revideo/commit/24bb51aa04778c33ce327926b27332efaa554e5f))
* **2d:** correctly support external image urls ([#678](https://github.com/havenhq/revideo/issues/678)) ([a08556b](https://github.com/havenhq/revideo/commit/a08556b6e2822a55db593f610ea4dd6cb8494adb)), closes [#677](https://github.com/havenhq/revideo/issues/677)
* **2d:** fix cache bbox for lines ([#467](https://github.com/havenhq/revideo/issues/467)) ([9fd1444](https://github.com/havenhq/revideo/commit/9fd144417bb0b6301da6c522a988775f5ff142ac)), closes [#466](https://github.com/havenhq/revideo/issues/466)
* **2d:** fix circle segment ([#557](https://github.com/havenhq/revideo/issues/557)) ([adebff4](https://github.com/havenhq/revideo/commit/adebff492b76a512d79151b00adf1b383d25c5b5))
* **2d:** fix CodeBlock types ([#563](https://github.com/havenhq/revideo/issues/563)) ([25160fa](https://github.com/havenhq/revideo/commit/25160fa4d92af88429110356e42f6e3b4f88a90f)), closes [#560](https://github.com/havenhq/revideo/issues/560)
* **2d:** fix curve arrow alignment when animating start signal ([#615](https://github.com/havenhq/revideo/issues/615)) ([2fefc40](https://github.com/havenhq/revideo/commit/2fefc4026050159ba204c7629832ad83e8bfa51b))
* **2d:** fix cyclic dependency in cardinal points ([#645](https://github.com/havenhq/revideo/issues/645)) ([def23f9](https://github.com/havenhq/revideo/commit/def23f925ee7200c8740ecd51c7f6117d67b6ef8))
* **2d:** fix font ligatures in CodeBlock ([#231](https://github.com/havenhq/revideo/issues/231)) ([11ee3fe](https://github.com/havenhq/revideo/commit/11ee3fef5ad878313cf19833df6881333ced4dac))
* **2d:** fix Gradient and Pattern signals ([#376](https://github.com/havenhq/revideo/issues/376)) ([6e0dc8a](https://github.com/havenhq/revideo/commit/6e0dc8af8d19f93fd6a42addca2b3a2958b4dd33))
* **2d:** fix height when tweening text ([#905](https://github.com/havenhq/revideo/issues/905)) ([1c6a796](https://github.com/havenhq/revideo/commit/1c6a7965be137c1ab69741cdd1e9aaa6df4208c4))
* **2d:** fix import order ([#94](https://github.com/havenhq/revideo/issues/94)) ([bcc0bcf](https://github.com/havenhq/revideo/commit/bcc0bcffae47855bd8f7ab06454aaebe93c4aa24)), closes [#76](https://github.com/havenhq/revideo/issues/76)
* **2d:** fix initial value of endOffset ([#433](https://github.com/havenhq/revideo/issues/433)) ([9fe82b3](https://github.com/havenhq/revideo/commit/9fe82b3d21ba0150a2378e541a4652ca707c2d15))
* **2d:** fix layout calculation for nodes not explicitly added to view ([#331](https://github.com/havenhq/revideo/issues/331)) ([528e2d5](https://github.com/havenhq/revideo/commit/528e2d5a0abec99819e022d2848b256ece9f869a))
* **2d:** fix letterSpacing ([#448](https://github.com/havenhq/revideo/issues/448)) ([bb5ffc4](https://github.com/havenhq/revideo/commit/bb5ffc48efa82b9db818e8e52aa35e9c2ad8ce89)), closes [#447](https://github.com/havenhq/revideo/issues/447)
* **2d:** fix line arc length ([#503](https://github.com/havenhq/revideo/issues/503)) ([4f1cd59](https://github.com/havenhq/revideo/commit/4f1cd59e6bcba0b16b36be88b28a60ae46d4d9ab)), closes [#497](https://github.com/havenhq/revideo/issues/497)
* **2d:** fix Line cache ([#232](https://github.com/havenhq/revideo/issues/232)) ([a953b64](https://github.com/havenhq/revideo/commit/a953b64540c020657845efc84d4179142a7a0974)), closes [#205](https://github.com/havenhq/revideo/issues/205)
* **2d:** fix line jitter under certain conditions ([#863](https://github.com/havenhq/revideo/issues/863)) ([fb110a2](https://github.com/havenhq/revideo/commit/fb110a2f3583fc040bf2c39560934162bd146d9b))
* **2d:** fix Line overview crashing ([#142](https://github.com/havenhq/revideo/issues/142)) ([6bd5fd9](https://github.com/havenhq/revideo/commit/6bd5fd941e583e44f5d920ecd20215efb1eed58a))
* **2d:** fix nested cache canvases ([#554](https://github.com/havenhq/revideo/issues/554)) ([e601441](https://github.com/havenhq/revideo/commit/e6014413b215af6fb1a7953f8db83893d4025f0b)), closes [#551](https://github.com/havenhq/revideo/issues/551)
* **2d:** fix package.json entry ([#720](https://github.com/havenhq/revideo/issues/720)) ([12e9bf6](https://github.com/havenhq/revideo/commit/12e9bf6f40ab7afc02e2f55260544f3864920ded))
* **2d:** fix signal initialization ([#382](https://github.com/havenhq/revideo/issues/382)) ([ea36e79](https://github.com/havenhq/revideo/commit/ea36e791a20bfd1b491ffa9917be686c51bc3899))
* **2d:** fix tweening cardinal points ([#829](https://github.com/havenhq/revideo/issues/829)) ([cc16737](https://github.com/havenhq/revideo/commit/cc16737cd59081582fbb488a880e8d3c11c14918))
* **2d:** fix Txt decorators ([#526](https://github.com/havenhq/revideo/issues/526)) ([25b30ed](https://github.com/havenhq/revideo/commit/25b30ed3861f46d72147335480912ce5f564be79))
* **2d:** fix types ([#659](https://github.com/havenhq/revideo/issues/659)) ([a32af29](https://github.com/havenhq/revideo/commit/a32af29ef3bd2e5dbf08697ebfee53230fceadc1))
* **2d:** format whitespaces according to HTML ([#372](https://github.com/havenhq/revideo/issues/372)) ([83fb565](https://github.com/havenhq/revideo/commit/83fb565742d98f060c0400c8cbaf9961b69f34d0)), closes [#370](https://github.com/havenhq/revideo/issues/370)
* **2d:** handle division by zero in lines ([#407](https://github.com/havenhq/revideo/issues/407)) ([a17871a](https://github.com/havenhq/revideo/commit/a17871a2ce63dd5bb32bc719037327c4e9dde217))
* **2d:** handle floating point errors in acos ([#381](https://github.com/havenhq/revideo/issues/381)) ([5bca8fd](https://github.com/havenhq/revideo/commit/5bca8fd0bbdcf28f2793c124b7d6b0afd560c4b8))
* **2d:** handle lines with no points ([#233](https://github.com/havenhq/revideo/issues/233)) ([8108474](https://github.com/havenhq/revideo/commit/81084743dfad7b6419760796fda825047909d4d4)), closes [#212](https://github.com/havenhq/revideo/issues/212)
* **2d:** ignore children with disabled layout ([#669](https://github.com/havenhq/revideo/issues/669)) ([b98c462](https://github.com/havenhq/revideo/commit/b98c4625c3634495e86ca23d19355035e457db06)), closes [#580](https://github.com/havenhq/revideo/issues/580)
* **2d:** improve Curve hitbox ([#778](https://github.com/havenhq/revideo/issues/778)) ([8af723c](https://github.com/havenhq/revideo/commit/8af723c0322de39d2defe0363bba03f4f9542f08))
* **2d:** improve Rect radius ([#221](https://github.com/havenhq/revideo/issues/221)) ([3437e42](https://github.com/havenhq/revideo/commit/3437e42713a3f4a8d44d246ee01e2eb23b61e06a)), closes [#207](https://github.com/havenhq/revideo/issues/207)
* **2d:** make Text respect textWrap=pre ([#287](https://github.com/havenhq/revideo/issues/287)) ([cb07f4b](https://github.com/havenhq/revideo/commit/cb07f4bdf07edc8a086b934ca5ab769682b9a010))
* **2d:** minor fixes ([#915](https://github.com/havenhq/revideo/issues/915)) ([63cfc9e](https://github.com/havenhq/revideo/commit/63cfc9e033f2c2ac6d6ed2a0d8f615fcf642ab59))
* **2d:** point arrow heads in correct direction ([#792](https://github.com/havenhq/revideo/issues/792)) ([52ed52e](https://github.com/havenhq/revideo/commit/52ed52e963cc69a066a0353680acaca35b9c937a)), closes [#783](https://github.com/havenhq/revideo/issues/783)
* **2d:** prevent src warnings in Icon and Latex ([#899](https://github.com/havenhq/revideo/issues/899)) ([5eebab7](https://github.com/havenhq/revideo/commit/5eebab71d8061e233872e049e77b847f9fd077a1))
* **2d:** remove circular dependencies ([#780](https://github.com/havenhq/revideo/issues/780)) ([cdf3af5](https://github.com/havenhq/revideo/commit/cdf3af500a58151ee3549c6e728751aab3e6f75c))
* **2d:** smoothly play videos when presenting ([#600](https://github.com/havenhq/revideo/issues/600)) ([294fe6a](https://github.com/havenhq/revideo/commit/294fe6ac056ab074c77214fcf9035f53fac9258c)), closes [#578](https://github.com/havenhq/revideo/issues/578)
* **2d:** some signal setters not returning owners ([#143](https://github.com/havenhq/revideo/issues/143)) ([09ab7f9](https://github.com/havenhq/revideo/commit/09ab7f96afcaae608399a653c0b4878ba9b467d4))
* **2d:** stop code highlighting from jumping ([#230](https://github.com/havenhq/revideo/issues/230)) ([67ef1c4](https://github.com/havenhq/revideo/commit/67ef1c497056dd1f8f9e20d1d7fc1af03ec3849e))
* **2d:** stop mutating children ([#903](https://github.com/havenhq/revideo/issues/903)) ([f9552a8](https://github.com/havenhq/revideo/commit/f9552a8658ccde6c7b2466ad40b12cf28c6ec805))
* **2d:** switch iframes to ShadowDOM ([#90](https://github.com/havenhq/revideo/issues/90)) ([86176be](https://github.com/havenhq/revideo/commit/86176be055c08aba59272afcda00ed586f6c7ad6))
* **2d:** textDirection property for RTL/LTR text ([#404](https://github.com/havenhq/revideo/issues/404)) ([f240b1b](https://github.com/havenhq/revideo/commit/f240b1bd140a884f6901b7cfcb97ce3e9ce4b48d))
* **2d:** textWrap not working in Firefox ([#541](https://github.com/havenhq/revideo/issues/541)) ([f10e057](https://github.com/havenhq/revideo/commit/f10e057fd13ed9dcc70ebc0ca63963708ec159c8)), closes [#517](https://github.com/havenhq/revideo/issues/517)
* **2d:** wait for reused async resources ([#599](https://github.com/havenhq/revideo/issues/599)) ([280e065](https://github.com/havenhq/revideo/commit/280e065fe69e9a744b7b12eb4609e7d87f76bb63)), closes [#593](https://github.com/havenhq/revideo/issues/593)
* account for italic fonts in cache ([#968](https://github.com/havenhq/revideo/issues/968)) ([abb0906](https://github.com/havenhq/revideo/commit/abb090695c4257d9877d0cb11954093c49149ddc)), closes [#934](https://github.com/havenhq/revideo/issues/934)
* await font load before drawing ([#31](https://github.com/havenhq/revideo/issues/31)) ([cbfb5cb](https://github.com/havenhq/revideo/commit/cbfb5cb136d85a657c99187da166b64aae8be3a1))
* await font load without throwing async node error ([#69](https://github.com/havenhq/revideo/issues/69)) ([fddebe6](https://github.com/havenhq/revideo/commit/fddebe60a610af718c880b9e198eebe8555ea9a5))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/havenhq/revideo/issues/62)) ([04cdc5b](https://github.com/havenhq/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* fix compound property setter ([#218](https://github.com/havenhq/revideo/issues/218)) ([6cd1b95](https://github.com/havenhq/revideo/commit/6cd1b952df950554eb637c9f8e82947c415d00c5)), closes [#208](https://github.com/havenhq/revideo/issues/208) [#210](https://github.com/havenhq/revideo/issues/210)
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* plug memory leaks ([#385](https://github.com/havenhq/revideo/issues/385)) ([de0af00](https://github.com/havenhq/revideo/commit/de0af00a7d2e019e2a933791c62b7901755be7b0))
* prevent consumePromises from halting ([#657](https://github.com/havenhq/revideo/issues/657)) ([363a189](https://github.com/havenhq/revideo/commit/363a189b0c7f5926c9d5ae00b58b48e8ed4d9b48))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* previous scene being rendered twice ([#97](https://github.com/havenhq/revideo/issues/97)) ([90205bd](https://github.com/havenhq/revideo/commit/90205bdc1a086abe5f73b04cb4616c6af5ec4377))
* restrict size of cache canvas ([#544](https://github.com/havenhq/revideo/issues/544)) ([49ec554](https://github.com/havenhq/revideo/commit/49ec55490718e503d9a39437ae13c189dc4fe9ea))
* support color to null tweening ([#387](https://github.com/havenhq/revideo/issues/387)) ([02e9f22](https://github.com/havenhq/revideo/commit/02e9f22027a1c3a85ffcc259aeca913318fb6f54))
* support legacy imports again ([#868](https://github.com/havenhq/revideo/issues/868)) ([77c4e2e](https://github.com/havenhq/revideo/commit/77c4e2eeb8b0f73bdef1f72e3d81f34c79748929))
* support multiple async players ([#450](https://github.com/havenhq/revideo/issues/450)) ([d7ec469](https://github.com/havenhq/revideo/commit/d7ec469e747eefd909f4dd59dd713f5d86308222)), closes [#434](https://github.com/havenhq/revideo/issues/434)
* typo on codeblock remove comments ([#368](https://github.com/havenhq/revideo/issues/368)) ([2025adc](https://github.com/havenhq/revideo/commit/2025adc6e7aa11d81b6f5f6989e8eae18cf86cb7))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Code Refactoring

* introduce improved names ([#425](https://github.com/havenhq/revideo/issues/425)) ([4a2188d](https://github.com/havenhq/revideo/commit/4a2188d339587fa658b2134befc3fe63c835c5d7))
* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* **2d:** add antialiased signal to Shape ([#282](https://github.com/havenhq/revideo/issues/282)) ([7c6905d](https://github.com/havenhq/revideo/commit/7c6905d72c6c2f49e10f0a80704c0afe3504d01b))
* **2d:** add arcLength helper methods to Curve ([#627](https://github.com/havenhq/revideo/issues/627)) ([3c7546e](https://github.com/havenhq/revideo/commit/3c7546e7a509deb6fff8f669c3df0a69b492bd2e))
* **2d:** add Bézier nodes ([#603](https://github.com/havenhq/revideo/issues/603)) ([9841cfd](https://github.com/havenhq/revideo/commit/9841cfdc3947ca4e6d6e42ed21eae88e855f855d))
* **2d:** add cardinal points ([#636](https://github.com/havenhq/revideo/issues/636)) ([2136a25](https://github.com/havenhq/revideo/commit/2136a2558a9ed968ee505e4e5cce33d989dfdc13)), closes [#391](https://github.com/havenhq/revideo/issues/391)
* **2d:** add closed property for circle ([#378](https://github.com/havenhq/revideo/issues/378)) ([62a9605](https://github.com/havenhq/revideo/commit/62a9605d4c54e7bf2d2d44d47bf769f5b27378a5))
* **2d:** add completion property for curves ([#635](https://github.com/havenhq/revideo/issues/635)) ([6577d6d](https://github.com/havenhq/revideo/commit/6577d6ddfaf779ba02f3862d2a357166138b99ca))
* **2d:** add default computed values for signals ([#259](https://github.com/havenhq/revideo/issues/259)) ([18f61a6](https://github.com/havenhq/revideo/commit/18f61a668420dec8afba52d52a6557e7a7919ba2))
* **2d:** add Icon Component ([#306](https://github.com/havenhq/revideo/issues/306)) ([3479631](https://github.com/havenhq/revideo/commit/3479631ef34e39f90a8d8de441317672be1840d9)), closes [#305](https://github.com/havenhq/revideo/issues/305)
* **2d:** add LaTeX component ([#228](https://github.com/havenhq/revideo/issues/228)) ([4c26d2a](https://github.com/havenhq/revideo/commit/4c26d2aaf0c697486639aa917cd5c585d3d0ea74))
* **2d:** add line counter for CodeBlock ([#802](https://github.com/havenhq/revideo/issues/802)) ([c3f9676](https://github.com/havenhq/revideo/commit/c3f9676b6984731a09a44ab0b1fcfc226975fa08))
* **2d:** add methods for rearranging children ([#81](https://github.com/havenhq/revideo/issues/81)) ([63f6c1a](https://github.com/havenhq/revideo/commit/63f6c1aa51ac4ecd093151c8cd30910f2e72bcac))
* **2d:** add moveBelow, moveAbove and moveTo methods to Node ([#365](https://github.com/havenhq/revideo/issues/365)) ([16752a3](https://github.com/havenhq/revideo/commit/16752a3b8ae7461b33d6208a9675729f374e8324))
* **2d:** add option for preformatted text ([#147](https://github.com/havenhq/revideo/issues/147)) ([989be53](https://github.com/havenhq/revideo/commit/989be532d86642e1125bb7fa62a801b09c1b8f26))
* **2d:** add Path component ([#700](https://github.com/havenhq/revideo/issues/700)) ([2128b6b](https://github.com/havenhq/revideo/commit/2128b6bf871cabe19e1abc749f18945c78c01f84))
* **2d:** add playbackRate signal to Video component ([#831](https://github.com/havenhq/revideo/issues/831)) ([5902b82](https://github.com/havenhq/revideo/commit/5902b824b36400876be0ee970e2c6211299faf21)), closes [#711](https://github.com/havenhq/revideo/issues/711)
* **2d:** add Polygon component ([#463](https://github.com/havenhq/revideo/issues/463)) ([15adb3e](https://github.com/havenhq/revideo/commit/15adb3e312a4998b44c0b9c5fe5b5236f51c71c9)), closes [#455](https://github.com/havenhq/revideo/issues/455)
* **2d:** add querying helpers ([#852](https://github.com/havenhq/revideo/issues/852)) ([614de6b](https://github.com/havenhq/revideo/commit/614de6bd8542322d1db4b123b875f6fad85cc4eb))
* **2d:** add Ray node ([#628](https://github.com/havenhq/revideo/issues/628)) ([649447c](https://github.com/havenhq/revideo/commit/649447cd5f2089afc64cc7bd4b0276e69d1e9a30))
* **2d:** add save and restore methods to nodes ([#406](https://github.com/havenhq/revideo/issues/406)) ([870e194](https://github.com/havenhq/revideo/commit/870e1947d97382bc6d82857c077140bbef7cf7e8))
* **2d:** add skew property ([#803](https://github.com/havenhq/revideo/issues/803)) ([eff7c7b](https://github.com/havenhq/revideo/commit/eff7c7be0c013139140b398350242457736d48c7))
* **2d:** add smooth corners and sharpness to rect ([#310](https://github.com/havenhq/revideo/issues/310)) ([f7fbefd](https://github.com/havenhq/revideo/commit/f7fbefd27f7f6972cfb5a45a68e5d0aed9593ae4))
* **2d:** add spline node ([#514](https://github.com/havenhq/revideo/issues/514)) ([3ce2111](https://github.com/havenhq/revideo/commit/3ce2111309e698450dc4c6e2ad47024995863e73))
* **2d:** add start and end signals to Grid node ([#761](https://github.com/havenhq/revideo/issues/761)) ([e37ea80](https://github.com/havenhq/revideo/commit/e37ea806b94e93c6324d8e1b502468925b731e8e))
* **2d:** add SVG component ([#763](https://github.com/havenhq/revideo/issues/763)) ([8eadc11](https://github.com/havenhq/revideo/commit/8eadc11937d4201545894f2f5b204d477a3f9094))
* **2d:** add textAlign property ([#451](https://github.com/havenhq/revideo/issues/451)) ([3d15825](https://github.com/havenhq/revideo/commit/3d15825f3cc5a35ba081a31510741b824f3bc6ab)), closes [#303](https://github.com/havenhq/revideo/issues/303)
* **2d:** add video component property getter ([#240](https://github.com/havenhq/revideo/issues/240)) ([59de5ab](https://github.com/havenhq/revideo/commit/59de5ab2c089589773a2f9ad7588eda7d72693a7))
* **2d:** add z-index property to nodes ([#398](https://github.com/havenhq/revideo/issues/398)) ([4280af3](https://github.com/havenhq/revideo/commit/4280af3b4b7bd5970fe5e743949a0fcca2c314f3))
* **2d:** always clip images and videos ([#773](https://github.com/havenhq/revideo/issues/773)) ([3938c59](https://github.com/havenhq/revideo/commit/3938c59394bfc42e5562504687d783ff306d7d32))
* **2d:** clamp opacity value between 0 and 1 ([#835](https://github.com/havenhq/revideo/issues/835)) ([c54b2f8](https://github.com/havenhq/revideo/commit/c54b2f837a8e8b872df3610f4cc6caa94a728500)), closes [#830](https://github.com/havenhq/revideo/issues/830)
* **2d:** code bounding box helpers ([#948](https://github.com/havenhq/revideo/issues/948)) ([0ffd56f](https://github.com/havenhq/revideo/commit/0ffd56f5f8076913e687e5b908311aa7832d8b7b))
* **2d:** code range helpers ([#947](https://github.com/havenhq/revideo/issues/947)) ([044c9ac](https://github.com/havenhq/revideo/commit/044c9acd6ee7e4e337fb4d51286126f583a8da6f))
* **2d:** code selection and modification ([#163](https://github.com/havenhq/revideo/issues/163)) ([e8e884a](https://github.com/havenhq/revideo/commit/e8e884a1a5574425dbf15272718911c12cfa2327))
* **2d:** construct lines using signals ([#133](https://github.com/havenhq/revideo/issues/133)) ([2968a24](https://github.com/havenhq/revideo/commit/2968a2426564469fb4f4343fe71a6d30e95361f2))
* **2d:** immediate restore ([#736](https://github.com/havenhq/revideo/issues/736)) ([634d51d](https://github.com/havenhq/revideo/commit/634d51d2afe8a536673c364874f8f3d1a450b846))
* **2d:** improve property declarations ([27e7d26](https://github.com/havenhq/revideo/commit/27e7d267ee91bf1e8ca79686b6ec31347f9f4d41))
* **2d:** improve Rect corner radius ([#120](https://github.com/havenhq/revideo/issues/120)) ([b471fe0](https://github.com/havenhq/revideo/commit/b471fe0e37c0a426d3af8299c9c3c22539e7df05))
* **2d:** improve Video node ([#601](https://github.com/havenhq/revideo/issues/601)) ([3801d83](https://github.com/havenhq/revideo/commit/3801d83415bbdeeee5d6d53d0c18e5d9e78fba56))
* **2d:** make `View2D` extend `Rect` ([#379](https://github.com/havenhq/revideo/issues/379)) ([93db5fc](https://github.com/havenhq/revideo/commit/93db5fc41617c0902e85fda90fbfc930c2b4634b))
* **2d:** make Circle extend Curve ([#771](https://github.com/havenhq/revideo/issues/771)) ([4c8cf19](https://github.com/havenhq/revideo/commit/4c8cf1954093958eac507921dc18f67dd64b2052))
* **2d:** make Polygon extend Curve ([#961](https://github.com/havenhq/revideo/issues/961)) ([739c9fc](https://github.com/havenhq/revideo/commit/739c9fccbc101f8b2eed680a11c00f317fdc4dd3))
* **2d:** make Rect extend Curve ([#759](https://github.com/havenhq/revideo/issues/759)) ([9810212](https://github.com/havenhq/revideo/commit/9810212648824b9a2fa2ecd6b597e3319d20b325))
* **2d:** nested Txt nodes ([#861](https://github.com/havenhq/revideo/issues/861)) ([f2786d0](https://github.com/havenhq/revideo/commit/f2786d0cd0d06065ca1e9eb9f6b4c11a74b6c283)), closes [#540](https://github.com/havenhq/revideo/issues/540)
* **2d:** simplify layout prop ([c24cb12](https://github.com/havenhq/revideo/commit/c24cb12a22b7c85fdfb051917fa9ee1e0911717c))
* **2d:** support HMR for images ([#641](https://github.com/havenhq/revideo/issues/641)) ([cf17520](https://github.com/havenhq/revideo/commit/cf17520aa8ddf19dcfc419c63cf7255892d45b71))
* **2d:** support letter spacing in Code ([#955](https://github.com/havenhq/revideo/issues/955)) ([2a87c37](https://github.com/havenhq/revideo/commit/2a87c37c832de86c4b524b33fd68806627daec8b))
* **2d:** support tweening in applyState ([#859](https://github.com/havenhq/revideo/issues/859)) ([b7ed2e2](https://github.com/havenhq/revideo/commit/b7ed2e24773227e5b576ff056eb23de9b9ff1676))
* **2d:** support tweening Line points ([#853](https://github.com/havenhq/revideo/issues/853)) ([4bf37d7](https://github.com/havenhq/revideo/commit/4bf37d74d2e4bb9d9cc034aff121a32da9a6d146))
* **2d:** unify desired sizes ([#118](https://github.com/havenhq/revideo/issues/118)) ([401a799](https://github.com/havenhq/revideo/commit/401a79946b034a96b9abff2f3fb5efd6cc9080f3))
* **2d:** unify layout properties ([#355](https://github.com/havenhq/revideo/issues/355)) ([3cae97e](https://github.com/havenhq/revideo/commit/3cae97ea704d0533020fa87326dacadcc037d517)), closes [#352](https://github.com/havenhq/revideo/issues/352)
* **2d:** warn about missing image source ([#817](https://github.com/havenhq/revideo/issues/817)) ([6dcdb5f](https://github.com/havenhq/revideo/commit/6dcdb5f3b83d4860b1557e4745972e0af68f92f3))
* add advanced caching ([#69](https://github.com/havenhq/revideo/issues/69)) ([2a644c9](https://github.com/havenhq/revideo/commit/2a644c9315acfcc5280a5eacc9904df140a61e4f))
* add base class for shapes ([#67](https://github.com/havenhq/revideo/issues/67)) ([d38c172](https://github.com/havenhq/revideo/commit/d38c1724e129c553739cbfc27c4e5cd8f737f067))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add cloning ([#80](https://github.com/havenhq/revideo/issues/80)) ([47d7a0f](https://github.com/havenhq/revideo/commit/47d7a0fa5da9a03d8ed91557db651f6f960e28b1))
* add CodeBlock component based on code-fns to 2D ([#78](https://github.com/havenhq/revideo/issues/78)) ([ad346f1](https://github.com/havenhq/revideo/commit/ad346f118d63b1e321ec315e1c70b925670124a1))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add default renderer ([#63](https://github.com/havenhq/revideo/issues/63)) ([9255490](https://github.com/havenhq/revideo/commit/92554900965fe088538f5e703dbab2fd84f904d7)), closes [#56](https://github.com/havenhq/revideo/issues/56) [#58](https://github.com/havenhq/revideo/issues/58)
* add DEG2RAD and RAD2DEG constants ([#630](https://github.com/havenhq/revideo/issues/630)) ([01801e8](https://github.com/havenhq/revideo/commit/01801e8766058e75a6a020400650fb00f8f430cc))
* add Grid node ([e1f83da](https://github.com/havenhq/revideo/commit/e1f83da1f43d20d392df4acb11e3df9cc457585d))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add middle cardinal point ([#758](https://github.com/havenhq/revideo/issues/758)) ([b036eaf](https://github.com/havenhq/revideo/commit/b036eafc00381831c08267a78cf9d74973f4025a))
* add missing flexbox properties ([#405](https://github.com/havenhq/revideo/issues/405)) ([4e78b4b](https://github.com/havenhq/revideo/commit/4e78b4b2fe4df42ce0a8da6fd41ad38b0104e7f5))
* add missing layout props ([#72](https://github.com/havenhq/revideo/issues/72)) ([f808a56](https://github.com/havenhq/revideo/commit/f808a562b192fd03dba4b0d353284db344d6a80b))
* add node spawners ([#149](https://github.com/havenhq/revideo/issues/149)) ([da18a4e](https://github.com/havenhq/revideo/commit/da18a4e24104022a84ecd6cec1666b520186058f))
* add polyline ([#84](https://github.com/havenhq/revideo/issues/84)) ([4ceaf84](https://github.com/havenhq/revideo/commit/4ceaf842915ac43d81f292c58a4dc73a8d1bb8e9))
* add random number generator ([#116](https://github.com/havenhq/revideo/issues/116)) ([d505312](https://github.com/havenhq/revideo/commit/d5053123eef308c7a2a61d92b6e76c637f4ed0b8)), closes [#14](https://github.com/havenhq/revideo/issues/14)
* add reparent helper ([80b95a9](https://github.com/havenhq/revideo/commit/80b95a9ce89d4a2eeea7e467257486e961602d69))
* add Text and Image components ([#70](https://github.com/havenhq/revideo/issues/70)) ([85c7dcd](https://github.com/havenhq/revideo/commit/85c7dcdb4f8ca2f0bfb03950c85a8d6f6652fcdf))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/havenhq/revideo/issues/9)) ([9e0d67b](https://github.com/havenhq/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* added a theme property to the CodeBlock component ([#279](https://github.com/havenhq/revideo/issues/279)) ([fe34fa8](https://github.com/havenhq/revideo/commit/fe34fa8ebfe66cd356fb1c3d85adedef11e03b45))
* better children and spawners ([#858](https://github.com/havenhq/revideo/issues/858)) ([9b5c23d](https://github.com/havenhq/revideo/commit/9b5c23d2076180cf710656c817369a07b253e3ec))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* convert built-in types to webgl ([#929](https://github.com/havenhq/revideo/issues/929)) ([a0f0b7d](https://github.com/havenhq/revideo/commit/a0f0b7d8996547e1a316097422ec02bddeeccec6))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* **core:** tree shaking ([#523](https://github.com/havenhq/revideo/issues/523)) ([65fec78](https://github.com/havenhq/revideo/commit/65fec7825fda33812b13f57bfeb1d82193a5d190))
* **docs:** fiddle editor ([#542](https://github.com/havenhq/revideo/issues/542)) ([3c68fef](https://github.com/havenhq/revideo/commit/3c68fefdf7bf375ee9345aba7dbf9e5ff35e3c3d))
* export everything from entry points ([#710](https://github.com/havenhq/revideo/issues/710)) ([3c885d9](https://github.com/havenhq/revideo/commit/3c885d9083b52fbbaccf1e2560ae50817949bc52))
* filter reordering ([#119](https://github.com/havenhq/revideo/issues/119)) ([2398d0f](https://github.com/havenhq/revideo/commit/2398d0f9d57f36b47c9c66a988ca5607e9a3a30e))
* implement absolute scale setter ([842079a](https://github.com/havenhq/revideo/commit/842079a6547af4032719c85837df3db7c1c6d30a))
* improve async signals ([#156](https://github.com/havenhq/revideo/issues/156)) ([db27b9d](https://github.com/havenhq/revideo/commit/db27b9d5fb69a88f42afd98c86c4a1cdceb88ea1))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* improve image error handling ([#847](https://github.com/havenhq/revideo/issues/847)) ([db09d53](https://github.com/havenhq/revideo/commit/db09d5305a3c0507b035e3cd347eaa65b23d7d2e))
* introduce basic caching ([#68](https://github.com/havenhq/revideo/issues/68)) ([6420d36](https://github.com/havenhq/revideo/commit/6420d362d0e4ae058f55b6ff6bb2a3a32dec559b))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make transparent video optional ([#91](https://github.com/havenhq/revideo/issues/91)) ([6a052d5](https://github.com/havenhq/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* merge properties and signals ([#124](https://github.com/havenhq/revideo/issues/124)) ([da3ba83](https://github.com/havenhq/revideo/commit/da3ba83d82ee74f5a5c3631b07597f08cdf9e8e4))
* minor improvements ([403c7c2](https://github.com/havenhq/revideo/commit/403c7c27ad969880a14c498ec6cefb9e7e7b7544))
* minor improvements ([#77](https://github.com/havenhq/revideo/issues/77)) ([7c6e584](https://github.com/havenhq/revideo/commit/7c6e584aca353c9af55f0acb61b32b5f99727dba))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* new animator ([#91](https://github.com/havenhq/revideo/issues/91)) ([d85f2f8](https://github.com/havenhq/revideo/commit/d85f2f8a54c0f8bbfbc451884385f30e5b3ec206))
* new Code node ([#946](https://github.com/havenhq/revideo/issues/946)) ([26e55a3](https://github.com/havenhq/revideo/commit/26e55a37c416fb1313c8aadf40eed2824b45d330))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/havenhq/revideo/issues/33)) ([a6e1bcd](https://github.com/havenhq/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* signal error handling ([#89](https://github.com/havenhq/revideo/issues/89)) ([472ac65](https://github.com/havenhq/revideo/commit/472ac65938b804a6b698c8522ec0c3b6bdbcf1b1))
* simplify size access ([#65](https://github.com/havenhq/revideo/issues/65)) ([3315e64](https://github.com/havenhq/revideo/commit/3315e64641e9778bc48ea3fb707e3c0eeb581dfe))
* simplify size access further ([#66](https://github.com/havenhq/revideo/issues/66)) ([9091a5e](https://github.com/havenhq/revideo/commit/9091a5e05d8fadf72c50832c7c4467ac4424b72c))
* switch to signals ([#64](https://github.com/havenhq/revideo/issues/64)) ([d22d237](https://github.com/havenhq/revideo/commit/d22d23728597e6fa82ea5c5a99a6c0a56819bded))
* transparent video ([#75](https://github.com/havenhq/revideo/issues/75)) ([5f7b909](https://github.com/havenhq/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))
* turn Layout into node ([#75](https://github.com/havenhq/revideo/issues/75)) ([cdf8dc0](https://github.com/havenhq/revideo/commit/cdf8dc0a35522482dee2dd78a69606b79f52246e))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** scene graph icons ([#914](https://github.com/havenhq/revideo/issues/914)) ([e92ddef](https://github.com/havenhq/revideo/commit/e92ddef34860f5e710ff0f1a310758ec0ca95bcb))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* unify references and signals ([#137](https://github.com/havenhq/revideo/issues/137)) ([063aede](https://github.com/havenhq/revideo/commit/063aede0842f948d2c6704c6edd426e954bb4668))
* upgrade code-fns for new theme options and lazy loading ([#401](https://github.com/havenhq/revideo/issues/401)) ([8965ab1](https://github.com/havenhq/revideo/commit/8965ab1bef8b6ae919c8001d0527f5793293b285)), closes [#396](https://github.com/havenhq/revideo/issues/396) [#322](https://github.com/havenhq/revideo/issues/322)
* use ES modules in fiddles ([#712](https://github.com/havenhq/revideo/issues/712)) ([dbe2ad5](https://github.com/havenhq/revideo/commit/dbe2ad5644219c5a98d38c6557abfb66d793c821))
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))
* world space cache ([#498](https://github.com/havenhq/revideo/issues/498)) ([633e9e1](https://github.com/havenhq/revideo/commit/633e9e140dfbbe397df6ddc1f96ed30782ddce94)), closes [#342](https://github.com/havenhq/revideo/issues/342)


### Reverts

* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))
* feat: upgrade code-fns for new theme options and lazy loading ([#435](https://github.com/havenhq/revideo/issues/435)) ([3f5e439](https://github.com/havenhq/revideo/commit/3f5e43968f7add7c6322c9c8358d3b6fc178c2fe))


### BREAKING CHANGES

* multiple name changes

To avoid collisions, names of certain classes have changed:
- `Text => Txt`
- `Image => Img`
- `Rect (type) => BBox`

Cache related methods of `Node` have changed:
- `getCacheRect => getCacheBBox`
- `cacheRect => cacheBBox`
- `fullCacheRect => fullCacheBBox`

The `CodeBlock` property has changed:
- `CodeBlock.selectionOpacity => CodeBlock.unselectedOpacity`
* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
* remove legacy package





## 0.3.3 (2024-05-17)


### Bug Fixes

* **2d:** account for offset in cardinal points ([#883](https://github.com/havenhq/revideo/issues/883)) ([24da258](https://github.com/havenhq/revideo/commit/24da258f5937087b363eeb9146a9d22747b02e70)), closes [#882](https://github.com/havenhq/revideo/issues/882)
* **2d:** account for spawners in scene graph ([#935](https://github.com/havenhq/revideo/issues/935)) ([ca325f5](https://github.com/havenhq/revideo/commit/ca325f5ad0ae987e76106f5e65fef3ed7b3ca08d))
* **2d:** add missing Curve properties to Circle ([#805](https://github.com/havenhq/revideo/issues/805)) ([38c7900](https://github.com/havenhq/revideo/commit/38c79000403d7c3c99dde9e4c825a448d5f55054))
* **2d:** add missing Fragment export ([#553](https://github.com/havenhq/revideo/issues/553)) ([229afb4](https://github.com/havenhq/revideo/commit/229afb4fe7d95f09b480ab4a813f8dff549f381f))
* **2d:** add missing jsx dev runtime ([#547](https://github.com/havenhq/revideo/issues/547)) ([d61cb7d](https://github.com/havenhq/revideo/commit/d61cb7dd24ab66ae17d5bd6f5ccb34c4fd1e7569)), closes [#545](https://github.com/havenhq/revideo/issues/545)
* **2d:** add missing middle property ([#891](https://github.com/havenhq/revideo/issues/891)) ([61e2e96](https://github.com/havenhq/revideo/commit/61e2e96e3b8f37a68ebdddb432baba04858fd4f3))
* **2d:** add missing shape export ([#111](https://github.com/havenhq/revideo/issues/111)) ([02a1fa7](https://github.com/havenhq/revideo/commit/02a1fa7ea62155e498809f2e57ff29a18c82ac12))
* **2d:** better error handling ([#524](https://github.com/havenhq/revideo/issues/524)) ([b7475ba](https://github.com/havenhq/revideo/commit/b7475ba5ff35d37ee198577d1205d6ecd6fd2092))
* **2d:** calculate arrow orientations for curves correctly ([#597](https://github.com/havenhq/revideo/issues/597)) ([1626811](https://github.com/havenhq/revideo/commit/1626811ec4cd1bd2a3d43e393ced40a7da462c3a))
* **2d:** calculate Txt cache bbox from contents ([#836](https://github.com/havenhq/revideo/issues/836)) ([33e1a12](https://github.com/havenhq/revideo/commit/33e1a1296f21d26e9ed45ae92132825dca17054d)), closes [#465](https://github.com/havenhq/revideo/issues/465)
* **2d:** clone size correctly ([#562](https://github.com/havenhq/revideo/issues/562)) ([cdd3df1](https://github.com/havenhq/revideo/commit/cdd3df1bff25b04b905e289264831d8d328caaab)), closes [#559](https://github.com/havenhq/revideo/issues/559)
* **2d:** correct layout defaults ([#442](https://github.com/havenhq/revideo/issues/442)) ([c116c35](https://github.com/havenhq/revideo/commit/c116c355179ba3b2487634fb82b9a5bc2ea266bf))
* **2d:** correctly append Txt nodes to view ([#644](https://github.com/havenhq/revideo/issues/644)) ([24bb51a](https://github.com/havenhq/revideo/commit/24bb51aa04778c33ce327926b27332efaa554e5f))
* **2d:** correctly support external image urls ([#678](https://github.com/havenhq/revideo/issues/678)) ([a08556b](https://github.com/havenhq/revideo/commit/a08556b6e2822a55db593f610ea4dd6cb8494adb)), closes [#677](https://github.com/havenhq/revideo/issues/677)
* **2d:** fix cache bbox for lines ([#467](https://github.com/havenhq/revideo/issues/467)) ([9fd1444](https://github.com/havenhq/revideo/commit/9fd144417bb0b6301da6c522a988775f5ff142ac)), closes [#466](https://github.com/havenhq/revideo/issues/466)
* **2d:** fix circle segment ([#557](https://github.com/havenhq/revideo/issues/557)) ([adebff4](https://github.com/havenhq/revideo/commit/adebff492b76a512d79151b00adf1b383d25c5b5))
* **2d:** fix CodeBlock types ([#563](https://github.com/havenhq/revideo/issues/563)) ([25160fa](https://github.com/havenhq/revideo/commit/25160fa4d92af88429110356e42f6e3b4f88a90f)), closes [#560](https://github.com/havenhq/revideo/issues/560)
* **2d:** fix curve arrow alignment when animating start signal ([#615](https://github.com/havenhq/revideo/issues/615)) ([2fefc40](https://github.com/havenhq/revideo/commit/2fefc4026050159ba204c7629832ad83e8bfa51b))
* **2d:** fix cyclic dependency in cardinal points ([#645](https://github.com/havenhq/revideo/issues/645)) ([def23f9](https://github.com/havenhq/revideo/commit/def23f925ee7200c8740ecd51c7f6117d67b6ef8))
* **2d:** fix font ligatures in CodeBlock ([#231](https://github.com/havenhq/revideo/issues/231)) ([11ee3fe](https://github.com/havenhq/revideo/commit/11ee3fef5ad878313cf19833df6881333ced4dac))
* **2d:** fix Gradient and Pattern signals ([#376](https://github.com/havenhq/revideo/issues/376)) ([6e0dc8a](https://github.com/havenhq/revideo/commit/6e0dc8af8d19f93fd6a42addca2b3a2958b4dd33))
* **2d:** fix height when tweening text ([#905](https://github.com/havenhq/revideo/issues/905)) ([1c6a796](https://github.com/havenhq/revideo/commit/1c6a7965be137c1ab69741cdd1e9aaa6df4208c4))
* **2d:** fix import order ([#94](https://github.com/havenhq/revideo/issues/94)) ([bcc0bcf](https://github.com/havenhq/revideo/commit/bcc0bcffae47855bd8f7ab06454aaebe93c4aa24)), closes [#76](https://github.com/havenhq/revideo/issues/76)
* **2d:** fix initial value of endOffset ([#433](https://github.com/havenhq/revideo/issues/433)) ([9fe82b3](https://github.com/havenhq/revideo/commit/9fe82b3d21ba0150a2378e541a4652ca707c2d15))
* **2d:** fix layout calculation for nodes not explicitly added to view ([#331](https://github.com/havenhq/revideo/issues/331)) ([528e2d5](https://github.com/havenhq/revideo/commit/528e2d5a0abec99819e022d2848b256ece9f869a))
* **2d:** fix letterSpacing ([#448](https://github.com/havenhq/revideo/issues/448)) ([bb5ffc4](https://github.com/havenhq/revideo/commit/bb5ffc48efa82b9db818e8e52aa35e9c2ad8ce89)), closes [#447](https://github.com/havenhq/revideo/issues/447)
* **2d:** fix line arc length ([#503](https://github.com/havenhq/revideo/issues/503)) ([4f1cd59](https://github.com/havenhq/revideo/commit/4f1cd59e6bcba0b16b36be88b28a60ae46d4d9ab)), closes [#497](https://github.com/havenhq/revideo/issues/497)
* **2d:** fix Line cache ([#232](https://github.com/havenhq/revideo/issues/232)) ([a953b64](https://github.com/havenhq/revideo/commit/a953b64540c020657845efc84d4179142a7a0974)), closes [#205](https://github.com/havenhq/revideo/issues/205)
* **2d:** fix line jitter under certain conditions ([#863](https://github.com/havenhq/revideo/issues/863)) ([fb110a2](https://github.com/havenhq/revideo/commit/fb110a2f3583fc040bf2c39560934162bd146d9b))
* **2d:** fix Line overview crashing ([#142](https://github.com/havenhq/revideo/issues/142)) ([6bd5fd9](https://github.com/havenhq/revideo/commit/6bd5fd941e583e44f5d920ecd20215efb1eed58a))
* **2d:** fix nested cache canvases ([#554](https://github.com/havenhq/revideo/issues/554)) ([e601441](https://github.com/havenhq/revideo/commit/e6014413b215af6fb1a7953f8db83893d4025f0b)), closes [#551](https://github.com/havenhq/revideo/issues/551)
* **2d:** fix package.json entry ([#720](https://github.com/havenhq/revideo/issues/720)) ([12e9bf6](https://github.com/havenhq/revideo/commit/12e9bf6f40ab7afc02e2f55260544f3864920ded))
* **2d:** fix signal initialization ([#382](https://github.com/havenhq/revideo/issues/382)) ([ea36e79](https://github.com/havenhq/revideo/commit/ea36e791a20bfd1b491ffa9917be686c51bc3899))
* **2d:** fix tweening cardinal points ([#829](https://github.com/havenhq/revideo/issues/829)) ([cc16737](https://github.com/havenhq/revideo/commit/cc16737cd59081582fbb488a880e8d3c11c14918))
* **2d:** fix Txt decorators ([#526](https://github.com/havenhq/revideo/issues/526)) ([25b30ed](https://github.com/havenhq/revideo/commit/25b30ed3861f46d72147335480912ce5f564be79))
* **2d:** fix types ([#659](https://github.com/havenhq/revideo/issues/659)) ([a32af29](https://github.com/havenhq/revideo/commit/a32af29ef3bd2e5dbf08697ebfee53230fceadc1))
* **2d:** format whitespaces according to HTML ([#372](https://github.com/havenhq/revideo/issues/372)) ([83fb565](https://github.com/havenhq/revideo/commit/83fb565742d98f060c0400c8cbaf9961b69f34d0)), closes [#370](https://github.com/havenhq/revideo/issues/370)
* **2d:** handle division by zero in lines ([#407](https://github.com/havenhq/revideo/issues/407)) ([a17871a](https://github.com/havenhq/revideo/commit/a17871a2ce63dd5bb32bc719037327c4e9dde217))
* **2d:** handle floating point errors in acos ([#381](https://github.com/havenhq/revideo/issues/381)) ([5bca8fd](https://github.com/havenhq/revideo/commit/5bca8fd0bbdcf28f2793c124b7d6b0afd560c4b8))
* **2d:** handle lines with no points ([#233](https://github.com/havenhq/revideo/issues/233)) ([8108474](https://github.com/havenhq/revideo/commit/81084743dfad7b6419760796fda825047909d4d4)), closes [#212](https://github.com/havenhq/revideo/issues/212)
* **2d:** ignore children with disabled layout ([#669](https://github.com/havenhq/revideo/issues/669)) ([b98c462](https://github.com/havenhq/revideo/commit/b98c4625c3634495e86ca23d19355035e457db06)), closes [#580](https://github.com/havenhq/revideo/issues/580)
* **2d:** improve Curve hitbox ([#778](https://github.com/havenhq/revideo/issues/778)) ([8af723c](https://github.com/havenhq/revideo/commit/8af723c0322de39d2defe0363bba03f4f9542f08))
* **2d:** improve Rect radius ([#221](https://github.com/havenhq/revideo/issues/221)) ([3437e42](https://github.com/havenhq/revideo/commit/3437e42713a3f4a8d44d246ee01e2eb23b61e06a)), closes [#207](https://github.com/havenhq/revideo/issues/207)
* **2d:** make Text respect textWrap=pre ([#287](https://github.com/havenhq/revideo/issues/287)) ([cb07f4b](https://github.com/havenhq/revideo/commit/cb07f4bdf07edc8a086b934ca5ab769682b9a010))
* **2d:** minor fixes ([#915](https://github.com/havenhq/revideo/issues/915)) ([63cfc9e](https://github.com/havenhq/revideo/commit/63cfc9e033f2c2ac6d6ed2a0d8f615fcf642ab59))
* **2d:** point arrow heads in correct direction ([#792](https://github.com/havenhq/revideo/issues/792)) ([52ed52e](https://github.com/havenhq/revideo/commit/52ed52e963cc69a066a0353680acaca35b9c937a)), closes [#783](https://github.com/havenhq/revideo/issues/783)
* **2d:** prevent src warnings in Icon and Latex ([#899](https://github.com/havenhq/revideo/issues/899)) ([5eebab7](https://github.com/havenhq/revideo/commit/5eebab71d8061e233872e049e77b847f9fd077a1))
* **2d:** remove circular dependencies ([#780](https://github.com/havenhq/revideo/issues/780)) ([cdf3af5](https://github.com/havenhq/revideo/commit/cdf3af500a58151ee3549c6e728751aab3e6f75c))
* **2d:** smoothly play videos when presenting ([#600](https://github.com/havenhq/revideo/issues/600)) ([294fe6a](https://github.com/havenhq/revideo/commit/294fe6ac056ab074c77214fcf9035f53fac9258c)), closes [#578](https://github.com/havenhq/revideo/issues/578)
* **2d:** some signal setters not returning owners ([#143](https://github.com/havenhq/revideo/issues/143)) ([09ab7f9](https://github.com/havenhq/revideo/commit/09ab7f96afcaae608399a653c0b4878ba9b467d4))
* **2d:** stop code highlighting from jumping ([#230](https://github.com/havenhq/revideo/issues/230)) ([67ef1c4](https://github.com/havenhq/revideo/commit/67ef1c497056dd1f8f9e20d1d7fc1af03ec3849e))
* **2d:** stop mutating children ([#903](https://github.com/havenhq/revideo/issues/903)) ([f9552a8](https://github.com/havenhq/revideo/commit/f9552a8658ccde6c7b2466ad40b12cf28c6ec805))
* **2d:** switch iframes to ShadowDOM ([#90](https://github.com/havenhq/revideo/issues/90)) ([86176be](https://github.com/havenhq/revideo/commit/86176be055c08aba59272afcda00ed586f6c7ad6))
* **2d:** textDirection property for RTL/LTR text ([#404](https://github.com/havenhq/revideo/issues/404)) ([f240b1b](https://github.com/havenhq/revideo/commit/f240b1bd140a884f6901b7cfcb97ce3e9ce4b48d))
* **2d:** textWrap not working in Firefox ([#541](https://github.com/havenhq/revideo/issues/541)) ([f10e057](https://github.com/havenhq/revideo/commit/f10e057fd13ed9dcc70ebc0ca63963708ec159c8)), closes [#517](https://github.com/havenhq/revideo/issues/517)
* **2d:** wait for reused async resources ([#599](https://github.com/havenhq/revideo/issues/599)) ([280e065](https://github.com/havenhq/revideo/commit/280e065fe69e9a744b7b12eb4609e7d87f76bb63)), closes [#593](https://github.com/havenhq/revideo/issues/593)
* account for italic fonts in cache ([#968](https://github.com/havenhq/revideo/issues/968)) ([abb0906](https://github.com/havenhq/revideo/commit/abb090695c4257d9877d0cb11954093c49149ddc)), closes [#934](https://github.com/havenhq/revideo/issues/934)
* await font load before drawing ([#31](https://github.com/havenhq/revideo/issues/31)) ([cbfb5cb](https://github.com/havenhq/revideo/commit/cbfb5cb136d85a657c99187da166b64aae8be3a1))
* await font load without throwing async node error ([#69](https://github.com/havenhq/revideo/issues/69)) ([fddebe6](https://github.com/havenhq/revideo/commit/fddebe60a610af718c880b9e198eebe8555ea9a5))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/havenhq/revideo/issues/62)) ([04cdc5b](https://github.com/havenhq/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* fix compound property setter ([#218](https://github.com/havenhq/revideo/issues/218)) ([6cd1b95](https://github.com/havenhq/revideo/commit/6cd1b952df950554eb637c9f8e82947c415d00c5)), closes [#208](https://github.com/havenhq/revideo/issues/208) [#210](https://github.com/havenhq/revideo/issues/210)
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* plug memory leaks ([#385](https://github.com/havenhq/revideo/issues/385)) ([de0af00](https://github.com/havenhq/revideo/commit/de0af00a7d2e019e2a933791c62b7901755be7b0))
* prevent consumePromises from halting ([#657](https://github.com/havenhq/revideo/issues/657)) ([363a189](https://github.com/havenhq/revideo/commit/363a189b0c7f5926c9d5ae00b58b48e8ed4d9b48))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* previous scene being rendered twice ([#97](https://github.com/havenhq/revideo/issues/97)) ([90205bd](https://github.com/havenhq/revideo/commit/90205bdc1a086abe5f73b04cb4616c6af5ec4377))
* restrict size of cache canvas ([#544](https://github.com/havenhq/revideo/issues/544)) ([49ec554](https://github.com/havenhq/revideo/commit/49ec55490718e503d9a39437ae13c189dc4fe9ea))
* support color to null tweening ([#387](https://github.com/havenhq/revideo/issues/387)) ([02e9f22](https://github.com/havenhq/revideo/commit/02e9f22027a1c3a85ffcc259aeca913318fb6f54))
* support legacy imports again ([#868](https://github.com/havenhq/revideo/issues/868)) ([77c4e2e](https://github.com/havenhq/revideo/commit/77c4e2eeb8b0f73bdef1f72e3d81f34c79748929))
* support multiple async players ([#450](https://github.com/havenhq/revideo/issues/450)) ([d7ec469](https://github.com/havenhq/revideo/commit/d7ec469e747eefd909f4dd59dd713f5d86308222)), closes [#434](https://github.com/havenhq/revideo/issues/434)
* typo on codeblock remove comments ([#368](https://github.com/havenhq/revideo/issues/368)) ([2025adc](https://github.com/havenhq/revideo/commit/2025adc6e7aa11d81b6f5f6989e8eae18cf86cb7))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Code Refactoring

* introduce improved names ([#425](https://github.com/havenhq/revideo/issues/425)) ([4a2188d](https://github.com/havenhq/revideo/commit/4a2188d339587fa658b2134befc3fe63c835c5d7))
* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* **2d:** add antialiased signal to Shape ([#282](https://github.com/havenhq/revideo/issues/282)) ([7c6905d](https://github.com/havenhq/revideo/commit/7c6905d72c6c2f49e10f0a80704c0afe3504d01b))
* **2d:** add arcLength helper methods to Curve ([#627](https://github.com/havenhq/revideo/issues/627)) ([3c7546e](https://github.com/havenhq/revideo/commit/3c7546e7a509deb6fff8f669c3df0a69b492bd2e))
* **2d:** add Bézier nodes ([#603](https://github.com/havenhq/revideo/issues/603)) ([9841cfd](https://github.com/havenhq/revideo/commit/9841cfdc3947ca4e6d6e42ed21eae88e855f855d))
* **2d:** add cardinal points ([#636](https://github.com/havenhq/revideo/issues/636)) ([2136a25](https://github.com/havenhq/revideo/commit/2136a2558a9ed968ee505e4e5cce33d989dfdc13)), closes [#391](https://github.com/havenhq/revideo/issues/391)
* **2d:** add closed property for circle ([#378](https://github.com/havenhq/revideo/issues/378)) ([62a9605](https://github.com/havenhq/revideo/commit/62a9605d4c54e7bf2d2d44d47bf769f5b27378a5))
* **2d:** add completion property for curves ([#635](https://github.com/havenhq/revideo/issues/635)) ([6577d6d](https://github.com/havenhq/revideo/commit/6577d6ddfaf779ba02f3862d2a357166138b99ca))
* **2d:** add default computed values for signals ([#259](https://github.com/havenhq/revideo/issues/259)) ([18f61a6](https://github.com/havenhq/revideo/commit/18f61a668420dec8afba52d52a6557e7a7919ba2))
* **2d:** add Icon Component ([#306](https://github.com/havenhq/revideo/issues/306)) ([3479631](https://github.com/havenhq/revideo/commit/3479631ef34e39f90a8d8de441317672be1840d9)), closes [#305](https://github.com/havenhq/revideo/issues/305)
* **2d:** add LaTeX component ([#228](https://github.com/havenhq/revideo/issues/228)) ([4c26d2a](https://github.com/havenhq/revideo/commit/4c26d2aaf0c697486639aa917cd5c585d3d0ea74))
* **2d:** add line counter for CodeBlock ([#802](https://github.com/havenhq/revideo/issues/802)) ([c3f9676](https://github.com/havenhq/revideo/commit/c3f9676b6984731a09a44ab0b1fcfc226975fa08))
* **2d:** add methods for rearranging children ([#81](https://github.com/havenhq/revideo/issues/81)) ([63f6c1a](https://github.com/havenhq/revideo/commit/63f6c1aa51ac4ecd093151c8cd30910f2e72bcac))
* **2d:** add moveBelow, moveAbove and moveTo methods to Node ([#365](https://github.com/havenhq/revideo/issues/365)) ([16752a3](https://github.com/havenhq/revideo/commit/16752a3b8ae7461b33d6208a9675729f374e8324))
* **2d:** add option for preformatted text ([#147](https://github.com/havenhq/revideo/issues/147)) ([989be53](https://github.com/havenhq/revideo/commit/989be532d86642e1125bb7fa62a801b09c1b8f26))
* **2d:** add Path component ([#700](https://github.com/havenhq/revideo/issues/700)) ([2128b6b](https://github.com/havenhq/revideo/commit/2128b6bf871cabe19e1abc749f18945c78c01f84))
* **2d:** add playbackRate signal to Video component ([#831](https://github.com/havenhq/revideo/issues/831)) ([5902b82](https://github.com/havenhq/revideo/commit/5902b824b36400876be0ee970e2c6211299faf21)), closes [#711](https://github.com/havenhq/revideo/issues/711)
* **2d:** add Polygon component ([#463](https://github.com/havenhq/revideo/issues/463)) ([15adb3e](https://github.com/havenhq/revideo/commit/15adb3e312a4998b44c0b9c5fe5b5236f51c71c9)), closes [#455](https://github.com/havenhq/revideo/issues/455)
* **2d:** add querying helpers ([#852](https://github.com/havenhq/revideo/issues/852)) ([614de6b](https://github.com/havenhq/revideo/commit/614de6bd8542322d1db4b123b875f6fad85cc4eb))
* **2d:** add Ray node ([#628](https://github.com/havenhq/revideo/issues/628)) ([649447c](https://github.com/havenhq/revideo/commit/649447cd5f2089afc64cc7bd4b0276e69d1e9a30))
* **2d:** add save and restore methods to nodes ([#406](https://github.com/havenhq/revideo/issues/406)) ([870e194](https://github.com/havenhq/revideo/commit/870e1947d97382bc6d82857c077140bbef7cf7e8))
* **2d:** add skew property ([#803](https://github.com/havenhq/revideo/issues/803)) ([eff7c7b](https://github.com/havenhq/revideo/commit/eff7c7be0c013139140b398350242457736d48c7))
* **2d:** add smooth corners and sharpness to rect ([#310](https://github.com/havenhq/revideo/issues/310)) ([f7fbefd](https://github.com/havenhq/revideo/commit/f7fbefd27f7f6972cfb5a45a68e5d0aed9593ae4))
* **2d:** add spline node ([#514](https://github.com/havenhq/revideo/issues/514)) ([3ce2111](https://github.com/havenhq/revideo/commit/3ce2111309e698450dc4c6e2ad47024995863e73))
* **2d:** add start and end signals to Grid node ([#761](https://github.com/havenhq/revideo/issues/761)) ([e37ea80](https://github.com/havenhq/revideo/commit/e37ea806b94e93c6324d8e1b502468925b731e8e))
* **2d:** add SVG component ([#763](https://github.com/havenhq/revideo/issues/763)) ([8eadc11](https://github.com/havenhq/revideo/commit/8eadc11937d4201545894f2f5b204d477a3f9094))
* **2d:** add textAlign property ([#451](https://github.com/havenhq/revideo/issues/451)) ([3d15825](https://github.com/havenhq/revideo/commit/3d15825f3cc5a35ba081a31510741b824f3bc6ab)), closes [#303](https://github.com/havenhq/revideo/issues/303)
* **2d:** add video component property getter ([#240](https://github.com/havenhq/revideo/issues/240)) ([59de5ab](https://github.com/havenhq/revideo/commit/59de5ab2c089589773a2f9ad7588eda7d72693a7))
* **2d:** add z-index property to nodes ([#398](https://github.com/havenhq/revideo/issues/398)) ([4280af3](https://github.com/havenhq/revideo/commit/4280af3b4b7bd5970fe5e743949a0fcca2c314f3))
* **2d:** always clip images and videos ([#773](https://github.com/havenhq/revideo/issues/773)) ([3938c59](https://github.com/havenhq/revideo/commit/3938c59394bfc42e5562504687d783ff306d7d32))
* **2d:** clamp opacity value between 0 and 1 ([#835](https://github.com/havenhq/revideo/issues/835)) ([c54b2f8](https://github.com/havenhq/revideo/commit/c54b2f837a8e8b872df3610f4cc6caa94a728500)), closes [#830](https://github.com/havenhq/revideo/issues/830)
* **2d:** code bounding box helpers ([#948](https://github.com/havenhq/revideo/issues/948)) ([0ffd56f](https://github.com/havenhq/revideo/commit/0ffd56f5f8076913e687e5b908311aa7832d8b7b))
* **2d:** code range helpers ([#947](https://github.com/havenhq/revideo/issues/947)) ([044c9ac](https://github.com/havenhq/revideo/commit/044c9acd6ee7e4e337fb4d51286126f583a8da6f))
* **2d:** code selection and modification ([#163](https://github.com/havenhq/revideo/issues/163)) ([e8e884a](https://github.com/havenhq/revideo/commit/e8e884a1a5574425dbf15272718911c12cfa2327))
* **2d:** construct lines using signals ([#133](https://github.com/havenhq/revideo/issues/133)) ([2968a24](https://github.com/havenhq/revideo/commit/2968a2426564469fb4f4343fe71a6d30e95361f2))
* **2d:** immediate restore ([#736](https://github.com/havenhq/revideo/issues/736)) ([634d51d](https://github.com/havenhq/revideo/commit/634d51d2afe8a536673c364874f8f3d1a450b846))
* **2d:** improve property declarations ([27e7d26](https://github.com/havenhq/revideo/commit/27e7d267ee91bf1e8ca79686b6ec31347f9f4d41))
* **2d:** improve Rect corner radius ([#120](https://github.com/havenhq/revideo/issues/120)) ([b471fe0](https://github.com/havenhq/revideo/commit/b471fe0e37c0a426d3af8299c9c3c22539e7df05))
* **2d:** improve Video node ([#601](https://github.com/havenhq/revideo/issues/601)) ([3801d83](https://github.com/havenhq/revideo/commit/3801d83415bbdeeee5d6d53d0c18e5d9e78fba56))
* **2d:** make `View2D` extend `Rect` ([#379](https://github.com/havenhq/revideo/issues/379)) ([93db5fc](https://github.com/havenhq/revideo/commit/93db5fc41617c0902e85fda90fbfc930c2b4634b))
* **2d:** make Circle extend Curve ([#771](https://github.com/havenhq/revideo/issues/771)) ([4c8cf19](https://github.com/havenhq/revideo/commit/4c8cf1954093958eac507921dc18f67dd64b2052))
* **2d:** make Polygon extend Curve ([#961](https://github.com/havenhq/revideo/issues/961)) ([739c9fc](https://github.com/havenhq/revideo/commit/739c9fccbc101f8b2eed680a11c00f317fdc4dd3))
* **2d:** make Rect extend Curve ([#759](https://github.com/havenhq/revideo/issues/759)) ([9810212](https://github.com/havenhq/revideo/commit/9810212648824b9a2fa2ecd6b597e3319d20b325))
* **2d:** nested Txt nodes ([#861](https://github.com/havenhq/revideo/issues/861)) ([f2786d0](https://github.com/havenhq/revideo/commit/f2786d0cd0d06065ca1e9eb9f6b4c11a74b6c283)), closes [#540](https://github.com/havenhq/revideo/issues/540)
* **2d:** simplify layout prop ([c24cb12](https://github.com/havenhq/revideo/commit/c24cb12a22b7c85fdfb051917fa9ee1e0911717c))
* **2d:** support HMR for images ([#641](https://github.com/havenhq/revideo/issues/641)) ([cf17520](https://github.com/havenhq/revideo/commit/cf17520aa8ddf19dcfc419c63cf7255892d45b71))
* **2d:** support letter spacing in Code ([#955](https://github.com/havenhq/revideo/issues/955)) ([2a87c37](https://github.com/havenhq/revideo/commit/2a87c37c832de86c4b524b33fd68806627daec8b))
* **2d:** support tweening in applyState ([#859](https://github.com/havenhq/revideo/issues/859)) ([b7ed2e2](https://github.com/havenhq/revideo/commit/b7ed2e24773227e5b576ff056eb23de9b9ff1676))
* **2d:** support tweening Line points ([#853](https://github.com/havenhq/revideo/issues/853)) ([4bf37d7](https://github.com/havenhq/revideo/commit/4bf37d74d2e4bb9d9cc034aff121a32da9a6d146))
* **2d:** unify desired sizes ([#118](https://github.com/havenhq/revideo/issues/118)) ([401a799](https://github.com/havenhq/revideo/commit/401a79946b034a96b9abff2f3fb5efd6cc9080f3))
* **2d:** unify layout properties ([#355](https://github.com/havenhq/revideo/issues/355)) ([3cae97e](https://github.com/havenhq/revideo/commit/3cae97ea704d0533020fa87326dacadcc037d517)), closes [#352](https://github.com/havenhq/revideo/issues/352)
* **2d:** warn about missing image source ([#817](https://github.com/havenhq/revideo/issues/817)) ([6dcdb5f](https://github.com/havenhq/revideo/commit/6dcdb5f3b83d4860b1557e4745972e0af68f92f3))
* add advanced caching ([#69](https://github.com/havenhq/revideo/issues/69)) ([2a644c9](https://github.com/havenhq/revideo/commit/2a644c9315acfcc5280a5eacc9904df140a61e4f))
* add base class for shapes ([#67](https://github.com/havenhq/revideo/issues/67)) ([d38c172](https://github.com/havenhq/revideo/commit/d38c1724e129c553739cbfc27c4e5cd8f737f067))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add cloning ([#80](https://github.com/havenhq/revideo/issues/80)) ([47d7a0f](https://github.com/havenhq/revideo/commit/47d7a0fa5da9a03d8ed91557db651f6f960e28b1))
* add CodeBlock component based on code-fns to 2D ([#78](https://github.com/havenhq/revideo/issues/78)) ([ad346f1](https://github.com/havenhq/revideo/commit/ad346f118d63b1e321ec315e1c70b925670124a1))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add default renderer ([#63](https://github.com/havenhq/revideo/issues/63)) ([9255490](https://github.com/havenhq/revideo/commit/92554900965fe088538f5e703dbab2fd84f904d7)), closes [#56](https://github.com/havenhq/revideo/issues/56) [#58](https://github.com/havenhq/revideo/issues/58)
* add DEG2RAD and RAD2DEG constants ([#630](https://github.com/havenhq/revideo/issues/630)) ([01801e8](https://github.com/havenhq/revideo/commit/01801e8766058e75a6a020400650fb00f8f430cc))
* add Grid node ([e1f83da](https://github.com/havenhq/revideo/commit/e1f83da1f43d20d392df4acb11e3df9cc457585d))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add middle cardinal point ([#758](https://github.com/havenhq/revideo/issues/758)) ([b036eaf](https://github.com/havenhq/revideo/commit/b036eafc00381831c08267a78cf9d74973f4025a))
* add missing flexbox properties ([#405](https://github.com/havenhq/revideo/issues/405)) ([4e78b4b](https://github.com/havenhq/revideo/commit/4e78b4b2fe4df42ce0a8da6fd41ad38b0104e7f5))
* add missing layout props ([#72](https://github.com/havenhq/revideo/issues/72)) ([f808a56](https://github.com/havenhq/revideo/commit/f808a562b192fd03dba4b0d353284db344d6a80b))
* add node spawners ([#149](https://github.com/havenhq/revideo/issues/149)) ([da18a4e](https://github.com/havenhq/revideo/commit/da18a4e24104022a84ecd6cec1666b520186058f))
* add polyline ([#84](https://github.com/havenhq/revideo/issues/84)) ([4ceaf84](https://github.com/havenhq/revideo/commit/4ceaf842915ac43d81f292c58a4dc73a8d1bb8e9))
* add random number generator ([#116](https://github.com/havenhq/revideo/issues/116)) ([d505312](https://github.com/havenhq/revideo/commit/d5053123eef308c7a2a61d92b6e76c637f4ed0b8)), closes [#14](https://github.com/havenhq/revideo/issues/14)
* add reparent helper ([80b95a9](https://github.com/havenhq/revideo/commit/80b95a9ce89d4a2eeea7e467257486e961602d69))
* add Text and Image components ([#70](https://github.com/havenhq/revideo/issues/70)) ([85c7dcd](https://github.com/havenhq/revideo/commit/85c7dcdb4f8ca2f0bfb03950c85a8d6f6652fcdf))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/havenhq/revideo/issues/9)) ([9e0d67b](https://github.com/havenhq/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* added a theme property to the CodeBlock component ([#279](https://github.com/havenhq/revideo/issues/279)) ([fe34fa8](https://github.com/havenhq/revideo/commit/fe34fa8ebfe66cd356fb1c3d85adedef11e03b45))
* better children and spawners ([#858](https://github.com/havenhq/revideo/issues/858)) ([9b5c23d](https://github.com/havenhq/revideo/commit/9b5c23d2076180cf710656c817369a07b253e3ec))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* convert built-in types to webgl ([#929](https://github.com/havenhq/revideo/issues/929)) ([a0f0b7d](https://github.com/havenhq/revideo/commit/a0f0b7d8996547e1a316097422ec02bddeeccec6))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* **core:** tree shaking ([#523](https://github.com/havenhq/revideo/issues/523)) ([65fec78](https://github.com/havenhq/revideo/commit/65fec7825fda33812b13f57bfeb1d82193a5d190))
* **docs:** fiddle editor ([#542](https://github.com/havenhq/revideo/issues/542)) ([3c68fef](https://github.com/havenhq/revideo/commit/3c68fefdf7bf375ee9345aba7dbf9e5ff35e3c3d))
* export everything from entry points ([#710](https://github.com/havenhq/revideo/issues/710)) ([3c885d9](https://github.com/havenhq/revideo/commit/3c885d9083b52fbbaccf1e2560ae50817949bc52))
* filter reordering ([#119](https://github.com/havenhq/revideo/issues/119)) ([2398d0f](https://github.com/havenhq/revideo/commit/2398d0f9d57f36b47c9c66a988ca5607e9a3a30e))
* implement absolute scale setter ([842079a](https://github.com/havenhq/revideo/commit/842079a6547af4032719c85837df3db7c1c6d30a))
* improve async signals ([#156](https://github.com/havenhq/revideo/issues/156)) ([db27b9d](https://github.com/havenhq/revideo/commit/db27b9d5fb69a88f42afd98c86c4a1cdceb88ea1))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* improve image error handling ([#847](https://github.com/havenhq/revideo/issues/847)) ([db09d53](https://github.com/havenhq/revideo/commit/db09d5305a3c0507b035e3cd347eaa65b23d7d2e))
* introduce basic caching ([#68](https://github.com/havenhq/revideo/issues/68)) ([6420d36](https://github.com/havenhq/revideo/commit/6420d362d0e4ae058f55b6ff6bb2a3a32dec559b))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make transparent video optional ([#91](https://github.com/havenhq/revideo/issues/91)) ([6a052d5](https://github.com/havenhq/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* merge properties and signals ([#124](https://github.com/havenhq/revideo/issues/124)) ([da3ba83](https://github.com/havenhq/revideo/commit/da3ba83d82ee74f5a5c3631b07597f08cdf9e8e4))
* minor improvements ([403c7c2](https://github.com/havenhq/revideo/commit/403c7c27ad969880a14c498ec6cefb9e7e7b7544))
* minor improvements ([#77](https://github.com/havenhq/revideo/issues/77)) ([7c6e584](https://github.com/havenhq/revideo/commit/7c6e584aca353c9af55f0acb61b32b5f99727dba))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* new animator ([#91](https://github.com/havenhq/revideo/issues/91)) ([d85f2f8](https://github.com/havenhq/revideo/commit/d85f2f8a54c0f8bbfbc451884385f30e5b3ec206))
* new Code node ([#946](https://github.com/havenhq/revideo/issues/946)) ([26e55a3](https://github.com/havenhq/revideo/commit/26e55a37c416fb1313c8aadf40eed2824b45d330))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/havenhq/revideo/issues/33)) ([a6e1bcd](https://github.com/havenhq/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* signal error handling ([#89](https://github.com/havenhq/revideo/issues/89)) ([472ac65](https://github.com/havenhq/revideo/commit/472ac65938b804a6b698c8522ec0c3b6bdbcf1b1))
* simplify size access ([#65](https://github.com/havenhq/revideo/issues/65)) ([3315e64](https://github.com/havenhq/revideo/commit/3315e64641e9778bc48ea3fb707e3c0eeb581dfe))
* simplify size access further ([#66](https://github.com/havenhq/revideo/issues/66)) ([9091a5e](https://github.com/havenhq/revideo/commit/9091a5e05d8fadf72c50832c7c4467ac4424b72c))
* switch to signals ([#64](https://github.com/havenhq/revideo/issues/64)) ([d22d237](https://github.com/havenhq/revideo/commit/d22d23728597e6fa82ea5c5a99a6c0a56819bded))
* transparent video ([#75](https://github.com/havenhq/revideo/issues/75)) ([5f7b909](https://github.com/havenhq/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))
* turn Layout into node ([#75](https://github.com/havenhq/revideo/issues/75)) ([cdf8dc0](https://github.com/havenhq/revideo/commit/cdf8dc0a35522482dee2dd78a69606b79f52246e))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** scene graph icons ([#914](https://github.com/havenhq/revideo/issues/914)) ([e92ddef](https://github.com/havenhq/revideo/commit/e92ddef34860f5e710ff0f1a310758ec0ca95bcb))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* unify references and signals ([#137](https://github.com/havenhq/revideo/issues/137)) ([063aede](https://github.com/havenhq/revideo/commit/063aede0842f948d2c6704c6edd426e954bb4668))
* upgrade code-fns for new theme options and lazy loading ([#401](https://github.com/havenhq/revideo/issues/401)) ([8965ab1](https://github.com/havenhq/revideo/commit/8965ab1bef8b6ae919c8001d0527f5793293b285)), closes [#396](https://github.com/havenhq/revideo/issues/396) [#322](https://github.com/havenhq/revideo/issues/322)
* use ES modules in fiddles ([#712](https://github.com/havenhq/revideo/issues/712)) ([dbe2ad5](https://github.com/havenhq/revideo/commit/dbe2ad5644219c5a98d38c6557abfb66d793c821))
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))
* world space cache ([#498](https://github.com/havenhq/revideo/issues/498)) ([633e9e1](https://github.com/havenhq/revideo/commit/633e9e140dfbbe397df6ddc1f96ed30782ddce94)), closes [#342](https://github.com/havenhq/revideo/issues/342)


### Reverts

* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))
* feat: upgrade code-fns for new theme options and lazy loading ([#435](https://github.com/havenhq/revideo/issues/435)) ([3f5e439](https://github.com/havenhq/revideo/commit/3f5e43968f7add7c6322c9c8358d3b6fc178c2fe))


### BREAKING CHANGES

* multiple name changes

To avoid collisions, names of certain classes have changed:
- `Text => Txt`
- `Image => Img`
- `Rect (type) => BBox`

Cache related methods of `Node` have changed:
- `getCacheRect => getCacheBBox`
- `cacheRect => cacheBBox`
- `fullCacheRect => fullCacheBBox`

The `CodeBlock` property has changed:
- `CodeBlock.selectionOpacity => CodeBlock.unselectedOpacity`
* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
* remove legacy package





## 0.3.2 (2024-05-09)


### Bug Fixes

* **2d:** account for offset in cardinal points ([#883](https://github.com/havenhq/revideo/issues/883)) ([24da258](https://github.com/havenhq/revideo/commit/24da258f5937087b363eeb9146a9d22747b02e70)), closes [#882](https://github.com/havenhq/revideo/issues/882)
* **2d:** account for spawners in scene graph ([#935](https://github.com/havenhq/revideo/issues/935)) ([ca325f5](https://github.com/havenhq/revideo/commit/ca325f5ad0ae987e76106f5e65fef3ed7b3ca08d))
* **2d:** add missing Curve properties to Circle ([#805](https://github.com/havenhq/revideo/issues/805)) ([38c7900](https://github.com/havenhq/revideo/commit/38c79000403d7c3c99dde9e4c825a448d5f55054))
* **2d:** add missing Fragment export ([#553](https://github.com/havenhq/revideo/issues/553)) ([229afb4](https://github.com/havenhq/revideo/commit/229afb4fe7d95f09b480ab4a813f8dff549f381f))
* **2d:** add missing jsx dev runtime ([#547](https://github.com/havenhq/revideo/issues/547)) ([d61cb7d](https://github.com/havenhq/revideo/commit/d61cb7dd24ab66ae17d5bd6f5ccb34c4fd1e7569)), closes [#545](https://github.com/havenhq/revideo/issues/545)
* **2d:** add missing middle property ([#891](https://github.com/havenhq/revideo/issues/891)) ([61e2e96](https://github.com/havenhq/revideo/commit/61e2e96e3b8f37a68ebdddb432baba04858fd4f3))
* **2d:** add missing shape export ([#111](https://github.com/havenhq/revideo/issues/111)) ([02a1fa7](https://github.com/havenhq/revideo/commit/02a1fa7ea62155e498809f2e57ff29a18c82ac12))
* **2d:** better error handling ([#524](https://github.com/havenhq/revideo/issues/524)) ([b7475ba](https://github.com/havenhq/revideo/commit/b7475ba5ff35d37ee198577d1205d6ecd6fd2092))
* **2d:** calculate arrow orientations for curves correctly ([#597](https://github.com/havenhq/revideo/issues/597)) ([1626811](https://github.com/havenhq/revideo/commit/1626811ec4cd1bd2a3d43e393ced40a7da462c3a))
* **2d:** calculate Txt cache bbox from contents ([#836](https://github.com/havenhq/revideo/issues/836)) ([33e1a12](https://github.com/havenhq/revideo/commit/33e1a1296f21d26e9ed45ae92132825dca17054d)), closes [#465](https://github.com/havenhq/revideo/issues/465)
* **2d:** clone size correctly ([#562](https://github.com/havenhq/revideo/issues/562)) ([cdd3df1](https://github.com/havenhq/revideo/commit/cdd3df1bff25b04b905e289264831d8d328caaab)), closes [#559](https://github.com/havenhq/revideo/issues/559)
* **2d:** correct layout defaults ([#442](https://github.com/havenhq/revideo/issues/442)) ([c116c35](https://github.com/havenhq/revideo/commit/c116c355179ba3b2487634fb82b9a5bc2ea266bf))
* **2d:** correctly append Txt nodes to view ([#644](https://github.com/havenhq/revideo/issues/644)) ([24bb51a](https://github.com/havenhq/revideo/commit/24bb51aa04778c33ce327926b27332efaa554e5f))
* **2d:** correctly support external image urls ([#678](https://github.com/havenhq/revideo/issues/678)) ([a08556b](https://github.com/havenhq/revideo/commit/a08556b6e2822a55db593f610ea4dd6cb8494adb)), closes [#677](https://github.com/havenhq/revideo/issues/677)
* **2d:** fix cache bbox for lines ([#467](https://github.com/havenhq/revideo/issues/467)) ([9fd1444](https://github.com/havenhq/revideo/commit/9fd144417bb0b6301da6c522a988775f5ff142ac)), closes [#466](https://github.com/havenhq/revideo/issues/466)
* **2d:** fix circle segment ([#557](https://github.com/havenhq/revideo/issues/557)) ([adebff4](https://github.com/havenhq/revideo/commit/adebff492b76a512d79151b00adf1b383d25c5b5))
* **2d:** fix CodeBlock types ([#563](https://github.com/havenhq/revideo/issues/563)) ([25160fa](https://github.com/havenhq/revideo/commit/25160fa4d92af88429110356e42f6e3b4f88a90f)), closes [#560](https://github.com/havenhq/revideo/issues/560)
* **2d:** fix curve arrow alignment when animating start signal ([#615](https://github.com/havenhq/revideo/issues/615)) ([2fefc40](https://github.com/havenhq/revideo/commit/2fefc4026050159ba204c7629832ad83e8bfa51b))
* **2d:** fix cyclic dependency in cardinal points ([#645](https://github.com/havenhq/revideo/issues/645)) ([def23f9](https://github.com/havenhq/revideo/commit/def23f925ee7200c8740ecd51c7f6117d67b6ef8))
* **2d:** fix font ligatures in CodeBlock ([#231](https://github.com/havenhq/revideo/issues/231)) ([11ee3fe](https://github.com/havenhq/revideo/commit/11ee3fef5ad878313cf19833df6881333ced4dac))
* **2d:** fix Gradient and Pattern signals ([#376](https://github.com/havenhq/revideo/issues/376)) ([6e0dc8a](https://github.com/havenhq/revideo/commit/6e0dc8af8d19f93fd6a42addca2b3a2958b4dd33))
* **2d:** fix height when tweening text ([#905](https://github.com/havenhq/revideo/issues/905)) ([1c6a796](https://github.com/havenhq/revideo/commit/1c6a7965be137c1ab69741cdd1e9aaa6df4208c4))
* **2d:** fix import order ([#94](https://github.com/havenhq/revideo/issues/94)) ([bcc0bcf](https://github.com/havenhq/revideo/commit/bcc0bcffae47855bd8f7ab06454aaebe93c4aa24)), closes [#76](https://github.com/havenhq/revideo/issues/76)
* **2d:** fix initial value of endOffset ([#433](https://github.com/havenhq/revideo/issues/433)) ([9fe82b3](https://github.com/havenhq/revideo/commit/9fe82b3d21ba0150a2378e541a4652ca707c2d15))
* **2d:** fix layout calculation for nodes not explicitly added to view ([#331](https://github.com/havenhq/revideo/issues/331)) ([528e2d5](https://github.com/havenhq/revideo/commit/528e2d5a0abec99819e022d2848b256ece9f869a))
* **2d:** fix letterSpacing ([#448](https://github.com/havenhq/revideo/issues/448)) ([bb5ffc4](https://github.com/havenhq/revideo/commit/bb5ffc48efa82b9db818e8e52aa35e9c2ad8ce89)), closes [#447](https://github.com/havenhq/revideo/issues/447)
* **2d:** fix line arc length ([#503](https://github.com/havenhq/revideo/issues/503)) ([4f1cd59](https://github.com/havenhq/revideo/commit/4f1cd59e6bcba0b16b36be88b28a60ae46d4d9ab)), closes [#497](https://github.com/havenhq/revideo/issues/497)
* **2d:** fix Line cache ([#232](https://github.com/havenhq/revideo/issues/232)) ([a953b64](https://github.com/havenhq/revideo/commit/a953b64540c020657845efc84d4179142a7a0974)), closes [#205](https://github.com/havenhq/revideo/issues/205)
* **2d:** fix line jitter under certain conditions ([#863](https://github.com/havenhq/revideo/issues/863)) ([fb110a2](https://github.com/havenhq/revideo/commit/fb110a2f3583fc040bf2c39560934162bd146d9b))
* **2d:** fix Line overview crashing ([#142](https://github.com/havenhq/revideo/issues/142)) ([6bd5fd9](https://github.com/havenhq/revideo/commit/6bd5fd941e583e44f5d920ecd20215efb1eed58a))
* **2d:** fix nested cache canvases ([#554](https://github.com/havenhq/revideo/issues/554)) ([e601441](https://github.com/havenhq/revideo/commit/e6014413b215af6fb1a7953f8db83893d4025f0b)), closes [#551](https://github.com/havenhq/revideo/issues/551)
* **2d:** fix package.json entry ([#720](https://github.com/havenhq/revideo/issues/720)) ([12e9bf6](https://github.com/havenhq/revideo/commit/12e9bf6f40ab7afc02e2f55260544f3864920ded))
* **2d:** fix signal initialization ([#382](https://github.com/havenhq/revideo/issues/382)) ([ea36e79](https://github.com/havenhq/revideo/commit/ea36e791a20bfd1b491ffa9917be686c51bc3899))
* **2d:** fix tweening cardinal points ([#829](https://github.com/havenhq/revideo/issues/829)) ([cc16737](https://github.com/havenhq/revideo/commit/cc16737cd59081582fbb488a880e8d3c11c14918))
* **2d:** fix Txt decorators ([#526](https://github.com/havenhq/revideo/issues/526)) ([25b30ed](https://github.com/havenhq/revideo/commit/25b30ed3861f46d72147335480912ce5f564be79))
* **2d:** fix types ([#659](https://github.com/havenhq/revideo/issues/659)) ([a32af29](https://github.com/havenhq/revideo/commit/a32af29ef3bd2e5dbf08697ebfee53230fceadc1))
* **2d:** format whitespaces according to HTML ([#372](https://github.com/havenhq/revideo/issues/372)) ([83fb565](https://github.com/havenhq/revideo/commit/83fb565742d98f060c0400c8cbaf9961b69f34d0)), closes [#370](https://github.com/havenhq/revideo/issues/370)
* **2d:** handle division by zero in lines ([#407](https://github.com/havenhq/revideo/issues/407)) ([a17871a](https://github.com/havenhq/revideo/commit/a17871a2ce63dd5bb32bc719037327c4e9dde217))
* **2d:** handle floating point errors in acos ([#381](https://github.com/havenhq/revideo/issues/381)) ([5bca8fd](https://github.com/havenhq/revideo/commit/5bca8fd0bbdcf28f2793c124b7d6b0afd560c4b8))
* **2d:** handle lines with no points ([#233](https://github.com/havenhq/revideo/issues/233)) ([8108474](https://github.com/havenhq/revideo/commit/81084743dfad7b6419760796fda825047909d4d4)), closes [#212](https://github.com/havenhq/revideo/issues/212)
* **2d:** ignore children with disabled layout ([#669](https://github.com/havenhq/revideo/issues/669)) ([b98c462](https://github.com/havenhq/revideo/commit/b98c4625c3634495e86ca23d19355035e457db06)), closes [#580](https://github.com/havenhq/revideo/issues/580)
* **2d:** improve Curve hitbox ([#778](https://github.com/havenhq/revideo/issues/778)) ([8af723c](https://github.com/havenhq/revideo/commit/8af723c0322de39d2defe0363bba03f4f9542f08))
* **2d:** improve Rect radius ([#221](https://github.com/havenhq/revideo/issues/221)) ([3437e42](https://github.com/havenhq/revideo/commit/3437e42713a3f4a8d44d246ee01e2eb23b61e06a)), closes [#207](https://github.com/havenhq/revideo/issues/207)
* **2d:** make Text respect textWrap=pre ([#287](https://github.com/havenhq/revideo/issues/287)) ([cb07f4b](https://github.com/havenhq/revideo/commit/cb07f4bdf07edc8a086b934ca5ab769682b9a010))
* **2d:** minor fixes ([#915](https://github.com/havenhq/revideo/issues/915)) ([63cfc9e](https://github.com/havenhq/revideo/commit/63cfc9e033f2c2ac6d6ed2a0d8f615fcf642ab59))
* **2d:** point arrow heads in correct direction ([#792](https://github.com/havenhq/revideo/issues/792)) ([52ed52e](https://github.com/havenhq/revideo/commit/52ed52e963cc69a066a0353680acaca35b9c937a)), closes [#783](https://github.com/havenhq/revideo/issues/783)
* **2d:** prevent src warnings in Icon and Latex ([#899](https://github.com/havenhq/revideo/issues/899)) ([5eebab7](https://github.com/havenhq/revideo/commit/5eebab71d8061e233872e049e77b847f9fd077a1))
* **2d:** remove circular dependencies ([#780](https://github.com/havenhq/revideo/issues/780)) ([cdf3af5](https://github.com/havenhq/revideo/commit/cdf3af500a58151ee3549c6e728751aab3e6f75c))
* **2d:** smoothly play videos when presenting ([#600](https://github.com/havenhq/revideo/issues/600)) ([294fe6a](https://github.com/havenhq/revideo/commit/294fe6ac056ab074c77214fcf9035f53fac9258c)), closes [#578](https://github.com/havenhq/revideo/issues/578)
* **2d:** some signal setters not returning owners ([#143](https://github.com/havenhq/revideo/issues/143)) ([09ab7f9](https://github.com/havenhq/revideo/commit/09ab7f96afcaae608399a653c0b4878ba9b467d4))
* **2d:** stop code highlighting from jumping ([#230](https://github.com/havenhq/revideo/issues/230)) ([67ef1c4](https://github.com/havenhq/revideo/commit/67ef1c497056dd1f8f9e20d1d7fc1af03ec3849e))
* **2d:** stop mutating children ([#903](https://github.com/havenhq/revideo/issues/903)) ([f9552a8](https://github.com/havenhq/revideo/commit/f9552a8658ccde6c7b2466ad40b12cf28c6ec805))
* **2d:** switch iframes to ShadowDOM ([#90](https://github.com/havenhq/revideo/issues/90)) ([86176be](https://github.com/havenhq/revideo/commit/86176be055c08aba59272afcda00ed586f6c7ad6))
* **2d:** textDirection property for RTL/LTR text ([#404](https://github.com/havenhq/revideo/issues/404)) ([f240b1b](https://github.com/havenhq/revideo/commit/f240b1bd140a884f6901b7cfcb97ce3e9ce4b48d))
* **2d:** textWrap not working in Firefox ([#541](https://github.com/havenhq/revideo/issues/541)) ([f10e057](https://github.com/havenhq/revideo/commit/f10e057fd13ed9dcc70ebc0ca63963708ec159c8)), closes [#517](https://github.com/havenhq/revideo/issues/517)
* **2d:** wait for reused async resources ([#599](https://github.com/havenhq/revideo/issues/599)) ([280e065](https://github.com/havenhq/revideo/commit/280e065fe69e9a744b7b12eb4609e7d87f76bb63)), closes [#593](https://github.com/havenhq/revideo/issues/593)
* account for italic fonts in cache ([#968](https://github.com/havenhq/revideo/issues/968)) ([abb0906](https://github.com/havenhq/revideo/commit/abb090695c4257d9877d0cb11954093c49149ddc)), closes [#934](https://github.com/havenhq/revideo/issues/934)
* await font load before drawing ([#31](https://github.com/havenhq/revideo/issues/31)) ([cbfb5cb](https://github.com/havenhq/revideo/commit/cbfb5cb136d85a657c99187da166b64aae8be3a1))
* await font load without throwing async node error ([#69](https://github.com/havenhq/revideo/issues/69)) ([fddebe6](https://github.com/havenhq/revideo/commit/fddebe60a610af718c880b9e198eebe8555ea9a5))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/havenhq/revideo/issues/62)) ([04cdc5b](https://github.com/havenhq/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* fix compound property setter ([#218](https://github.com/havenhq/revideo/issues/218)) ([6cd1b95](https://github.com/havenhq/revideo/commit/6cd1b952df950554eb637c9f8e82947c415d00c5)), closes [#208](https://github.com/havenhq/revideo/issues/208) [#210](https://github.com/havenhq/revideo/issues/210)
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* plug memory leaks ([#385](https://github.com/havenhq/revideo/issues/385)) ([de0af00](https://github.com/havenhq/revideo/commit/de0af00a7d2e019e2a933791c62b7901755be7b0))
* prevent consumePromises from halting ([#657](https://github.com/havenhq/revideo/issues/657)) ([363a189](https://github.com/havenhq/revideo/commit/363a189b0c7f5926c9d5ae00b58b48e8ed4d9b48))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* previous scene being rendered twice ([#97](https://github.com/havenhq/revideo/issues/97)) ([90205bd](https://github.com/havenhq/revideo/commit/90205bdc1a086abe5f73b04cb4616c6af5ec4377))
* restrict size of cache canvas ([#544](https://github.com/havenhq/revideo/issues/544)) ([49ec554](https://github.com/havenhq/revideo/commit/49ec55490718e503d9a39437ae13c189dc4fe9ea))
* support color to null tweening ([#387](https://github.com/havenhq/revideo/issues/387)) ([02e9f22](https://github.com/havenhq/revideo/commit/02e9f22027a1c3a85ffcc259aeca913318fb6f54))
* support legacy imports again ([#868](https://github.com/havenhq/revideo/issues/868)) ([77c4e2e](https://github.com/havenhq/revideo/commit/77c4e2eeb8b0f73bdef1f72e3d81f34c79748929))
* support multiple async players ([#450](https://github.com/havenhq/revideo/issues/450)) ([d7ec469](https://github.com/havenhq/revideo/commit/d7ec469e747eefd909f4dd59dd713f5d86308222)), closes [#434](https://github.com/havenhq/revideo/issues/434)
* typo on codeblock remove comments ([#368](https://github.com/havenhq/revideo/issues/368)) ([2025adc](https://github.com/havenhq/revideo/commit/2025adc6e7aa11d81b6f5f6989e8eae18cf86cb7))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Code Refactoring

* introduce improved names ([#425](https://github.com/havenhq/revideo/issues/425)) ([4a2188d](https://github.com/havenhq/revideo/commit/4a2188d339587fa658b2134befc3fe63c835c5d7))
* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* **2d:** add antialiased signal to Shape ([#282](https://github.com/havenhq/revideo/issues/282)) ([7c6905d](https://github.com/havenhq/revideo/commit/7c6905d72c6c2f49e10f0a80704c0afe3504d01b))
* **2d:** add arcLength helper methods to Curve ([#627](https://github.com/havenhq/revideo/issues/627)) ([3c7546e](https://github.com/havenhq/revideo/commit/3c7546e7a509deb6fff8f669c3df0a69b492bd2e))
* **2d:** add Bézier nodes ([#603](https://github.com/havenhq/revideo/issues/603)) ([9841cfd](https://github.com/havenhq/revideo/commit/9841cfdc3947ca4e6d6e42ed21eae88e855f855d))
* **2d:** add cardinal points ([#636](https://github.com/havenhq/revideo/issues/636)) ([2136a25](https://github.com/havenhq/revideo/commit/2136a2558a9ed968ee505e4e5cce33d989dfdc13)), closes [#391](https://github.com/havenhq/revideo/issues/391)
* **2d:** add closed property for circle ([#378](https://github.com/havenhq/revideo/issues/378)) ([62a9605](https://github.com/havenhq/revideo/commit/62a9605d4c54e7bf2d2d44d47bf769f5b27378a5))
* **2d:** add completion property for curves ([#635](https://github.com/havenhq/revideo/issues/635)) ([6577d6d](https://github.com/havenhq/revideo/commit/6577d6ddfaf779ba02f3862d2a357166138b99ca))
* **2d:** add default computed values for signals ([#259](https://github.com/havenhq/revideo/issues/259)) ([18f61a6](https://github.com/havenhq/revideo/commit/18f61a668420dec8afba52d52a6557e7a7919ba2))
* **2d:** add Icon Component ([#306](https://github.com/havenhq/revideo/issues/306)) ([3479631](https://github.com/havenhq/revideo/commit/3479631ef34e39f90a8d8de441317672be1840d9)), closes [#305](https://github.com/havenhq/revideo/issues/305)
* **2d:** add LaTeX component ([#228](https://github.com/havenhq/revideo/issues/228)) ([4c26d2a](https://github.com/havenhq/revideo/commit/4c26d2aaf0c697486639aa917cd5c585d3d0ea74))
* **2d:** add line counter for CodeBlock ([#802](https://github.com/havenhq/revideo/issues/802)) ([c3f9676](https://github.com/havenhq/revideo/commit/c3f9676b6984731a09a44ab0b1fcfc226975fa08))
* **2d:** add methods for rearranging children ([#81](https://github.com/havenhq/revideo/issues/81)) ([63f6c1a](https://github.com/havenhq/revideo/commit/63f6c1aa51ac4ecd093151c8cd30910f2e72bcac))
* **2d:** add moveBelow, moveAbove and moveTo methods to Node ([#365](https://github.com/havenhq/revideo/issues/365)) ([16752a3](https://github.com/havenhq/revideo/commit/16752a3b8ae7461b33d6208a9675729f374e8324))
* **2d:** add option for preformatted text ([#147](https://github.com/havenhq/revideo/issues/147)) ([989be53](https://github.com/havenhq/revideo/commit/989be532d86642e1125bb7fa62a801b09c1b8f26))
* **2d:** add Path component ([#700](https://github.com/havenhq/revideo/issues/700)) ([2128b6b](https://github.com/havenhq/revideo/commit/2128b6bf871cabe19e1abc749f18945c78c01f84))
* **2d:** add playbackRate signal to Video component ([#831](https://github.com/havenhq/revideo/issues/831)) ([5902b82](https://github.com/havenhq/revideo/commit/5902b824b36400876be0ee970e2c6211299faf21)), closes [#711](https://github.com/havenhq/revideo/issues/711)
* **2d:** add Polygon component ([#463](https://github.com/havenhq/revideo/issues/463)) ([15adb3e](https://github.com/havenhq/revideo/commit/15adb3e312a4998b44c0b9c5fe5b5236f51c71c9)), closes [#455](https://github.com/havenhq/revideo/issues/455)
* **2d:** add querying helpers ([#852](https://github.com/havenhq/revideo/issues/852)) ([614de6b](https://github.com/havenhq/revideo/commit/614de6bd8542322d1db4b123b875f6fad85cc4eb))
* **2d:** add Ray node ([#628](https://github.com/havenhq/revideo/issues/628)) ([649447c](https://github.com/havenhq/revideo/commit/649447cd5f2089afc64cc7bd4b0276e69d1e9a30))
* **2d:** add save and restore methods to nodes ([#406](https://github.com/havenhq/revideo/issues/406)) ([870e194](https://github.com/havenhq/revideo/commit/870e1947d97382bc6d82857c077140bbef7cf7e8))
* **2d:** add skew property ([#803](https://github.com/havenhq/revideo/issues/803)) ([eff7c7b](https://github.com/havenhq/revideo/commit/eff7c7be0c013139140b398350242457736d48c7))
* **2d:** add smooth corners and sharpness to rect ([#310](https://github.com/havenhq/revideo/issues/310)) ([f7fbefd](https://github.com/havenhq/revideo/commit/f7fbefd27f7f6972cfb5a45a68e5d0aed9593ae4))
* **2d:** add spline node ([#514](https://github.com/havenhq/revideo/issues/514)) ([3ce2111](https://github.com/havenhq/revideo/commit/3ce2111309e698450dc4c6e2ad47024995863e73))
* **2d:** add start and end signals to Grid node ([#761](https://github.com/havenhq/revideo/issues/761)) ([e37ea80](https://github.com/havenhq/revideo/commit/e37ea806b94e93c6324d8e1b502468925b731e8e))
* **2d:** add SVG component ([#763](https://github.com/havenhq/revideo/issues/763)) ([8eadc11](https://github.com/havenhq/revideo/commit/8eadc11937d4201545894f2f5b204d477a3f9094))
* **2d:** add textAlign property ([#451](https://github.com/havenhq/revideo/issues/451)) ([3d15825](https://github.com/havenhq/revideo/commit/3d15825f3cc5a35ba081a31510741b824f3bc6ab)), closes [#303](https://github.com/havenhq/revideo/issues/303)
* **2d:** add video component property getter ([#240](https://github.com/havenhq/revideo/issues/240)) ([59de5ab](https://github.com/havenhq/revideo/commit/59de5ab2c089589773a2f9ad7588eda7d72693a7))
* **2d:** add z-index property to nodes ([#398](https://github.com/havenhq/revideo/issues/398)) ([4280af3](https://github.com/havenhq/revideo/commit/4280af3b4b7bd5970fe5e743949a0fcca2c314f3))
* **2d:** always clip images and videos ([#773](https://github.com/havenhq/revideo/issues/773)) ([3938c59](https://github.com/havenhq/revideo/commit/3938c59394bfc42e5562504687d783ff306d7d32))
* **2d:** clamp opacity value between 0 and 1 ([#835](https://github.com/havenhq/revideo/issues/835)) ([c54b2f8](https://github.com/havenhq/revideo/commit/c54b2f837a8e8b872df3610f4cc6caa94a728500)), closes [#830](https://github.com/havenhq/revideo/issues/830)
* **2d:** code bounding box helpers ([#948](https://github.com/havenhq/revideo/issues/948)) ([0ffd56f](https://github.com/havenhq/revideo/commit/0ffd56f5f8076913e687e5b908311aa7832d8b7b))
* **2d:** code range helpers ([#947](https://github.com/havenhq/revideo/issues/947)) ([044c9ac](https://github.com/havenhq/revideo/commit/044c9acd6ee7e4e337fb4d51286126f583a8da6f))
* **2d:** code selection and modification ([#163](https://github.com/havenhq/revideo/issues/163)) ([e8e884a](https://github.com/havenhq/revideo/commit/e8e884a1a5574425dbf15272718911c12cfa2327))
* **2d:** construct lines using signals ([#133](https://github.com/havenhq/revideo/issues/133)) ([2968a24](https://github.com/havenhq/revideo/commit/2968a2426564469fb4f4343fe71a6d30e95361f2))
* **2d:** immediate restore ([#736](https://github.com/havenhq/revideo/issues/736)) ([634d51d](https://github.com/havenhq/revideo/commit/634d51d2afe8a536673c364874f8f3d1a450b846))
* **2d:** improve property declarations ([27e7d26](https://github.com/havenhq/revideo/commit/27e7d267ee91bf1e8ca79686b6ec31347f9f4d41))
* **2d:** improve Rect corner radius ([#120](https://github.com/havenhq/revideo/issues/120)) ([b471fe0](https://github.com/havenhq/revideo/commit/b471fe0e37c0a426d3af8299c9c3c22539e7df05))
* **2d:** improve Video node ([#601](https://github.com/havenhq/revideo/issues/601)) ([3801d83](https://github.com/havenhq/revideo/commit/3801d83415bbdeeee5d6d53d0c18e5d9e78fba56))
* **2d:** make `View2D` extend `Rect` ([#379](https://github.com/havenhq/revideo/issues/379)) ([93db5fc](https://github.com/havenhq/revideo/commit/93db5fc41617c0902e85fda90fbfc930c2b4634b))
* **2d:** make Circle extend Curve ([#771](https://github.com/havenhq/revideo/issues/771)) ([4c8cf19](https://github.com/havenhq/revideo/commit/4c8cf1954093958eac507921dc18f67dd64b2052))
* **2d:** make Polygon extend Curve ([#961](https://github.com/havenhq/revideo/issues/961)) ([739c9fc](https://github.com/havenhq/revideo/commit/739c9fccbc101f8b2eed680a11c00f317fdc4dd3))
* **2d:** make Rect extend Curve ([#759](https://github.com/havenhq/revideo/issues/759)) ([9810212](https://github.com/havenhq/revideo/commit/9810212648824b9a2fa2ecd6b597e3319d20b325))
* **2d:** nested Txt nodes ([#861](https://github.com/havenhq/revideo/issues/861)) ([f2786d0](https://github.com/havenhq/revideo/commit/f2786d0cd0d06065ca1e9eb9f6b4c11a74b6c283)), closes [#540](https://github.com/havenhq/revideo/issues/540)
* **2d:** simplify layout prop ([c24cb12](https://github.com/havenhq/revideo/commit/c24cb12a22b7c85fdfb051917fa9ee1e0911717c))
* **2d:** support HMR for images ([#641](https://github.com/havenhq/revideo/issues/641)) ([cf17520](https://github.com/havenhq/revideo/commit/cf17520aa8ddf19dcfc419c63cf7255892d45b71))
* **2d:** support letter spacing in Code ([#955](https://github.com/havenhq/revideo/issues/955)) ([2a87c37](https://github.com/havenhq/revideo/commit/2a87c37c832de86c4b524b33fd68806627daec8b))
* **2d:** support tweening in applyState ([#859](https://github.com/havenhq/revideo/issues/859)) ([b7ed2e2](https://github.com/havenhq/revideo/commit/b7ed2e24773227e5b576ff056eb23de9b9ff1676))
* **2d:** support tweening Line points ([#853](https://github.com/havenhq/revideo/issues/853)) ([4bf37d7](https://github.com/havenhq/revideo/commit/4bf37d74d2e4bb9d9cc034aff121a32da9a6d146))
* **2d:** unify desired sizes ([#118](https://github.com/havenhq/revideo/issues/118)) ([401a799](https://github.com/havenhq/revideo/commit/401a79946b034a96b9abff2f3fb5efd6cc9080f3))
* **2d:** unify layout properties ([#355](https://github.com/havenhq/revideo/issues/355)) ([3cae97e](https://github.com/havenhq/revideo/commit/3cae97ea704d0533020fa87326dacadcc037d517)), closes [#352](https://github.com/havenhq/revideo/issues/352)
* **2d:** warn about missing image source ([#817](https://github.com/havenhq/revideo/issues/817)) ([6dcdb5f](https://github.com/havenhq/revideo/commit/6dcdb5f3b83d4860b1557e4745972e0af68f92f3))
* add advanced caching ([#69](https://github.com/havenhq/revideo/issues/69)) ([2a644c9](https://github.com/havenhq/revideo/commit/2a644c9315acfcc5280a5eacc9904df140a61e4f))
* add base class for shapes ([#67](https://github.com/havenhq/revideo/issues/67)) ([d38c172](https://github.com/havenhq/revideo/commit/d38c1724e129c553739cbfc27c4e5cd8f737f067))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add cloning ([#80](https://github.com/havenhq/revideo/issues/80)) ([47d7a0f](https://github.com/havenhq/revideo/commit/47d7a0fa5da9a03d8ed91557db651f6f960e28b1))
* add CodeBlock component based on code-fns to 2D ([#78](https://github.com/havenhq/revideo/issues/78)) ([ad346f1](https://github.com/havenhq/revideo/commit/ad346f118d63b1e321ec315e1c70b925670124a1))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add default renderer ([#63](https://github.com/havenhq/revideo/issues/63)) ([9255490](https://github.com/havenhq/revideo/commit/92554900965fe088538f5e703dbab2fd84f904d7)), closes [#56](https://github.com/havenhq/revideo/issues/56) [#58](https://github.com/havenhq/revideo/issues/58)
* add DEG2RAD and RAD2DEG constants ([#630](https://github.com/havenhq/revideo/issues/630)) ([01801e8](https://github.com/havenhq/revideo/commit/01801e8766058e75a6a020400650fb00f8f430cc))
* add Grid node ([e1f83da](https://github.com/havenhq/revideo/commit/e1f83da1f43d20d392df4acb11e3df9cc457585d))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add middle cardinal point ([#758](https://github.com/havenhq/revideo/issues/758)) ([b036eaf](https://github.com/havenhq/revideo/commit/b036eafc00381831c08267a78cf9d74973f4025a))
* add missing flexbox properties ([#405](https://github.com/havenhq/revideo/issues/405)) ([4e78b4b](https://github.com/havenhq/revideo/commit/4e78b4b2fe4df42ce0a8da6fd41ad38b0104e7f5))
* add missing layout props ([#72](https://github.com/havenhq/revideo/issues/72)) ([f808a56](https://github.com/havenhq/revideo/commit/f808a562b192fd03dba4b0d353284db344d6a80b))
* add node spawners ([#149](https://github.com/havenhq/revideo/issues/149)) ([da18a4e](https://github.com/havenhq/revideo/commit/da18a4e24104022a84ecd6cec1666b520186058f))
* add polyline ([#84](https://github.com/havenhq/revideo/issues/84)) ([4ceaf84](https://github.com/havenhq/revideo/commit/4ceaf842915ac43d81f292c58a4dc73a8d1bb8e9))
* add random number generator ([#116](https://github.com/havenhq/revideo/issues/116)) ([d505312](https://github.com/havenhq/revideo/commit/d5053123eef308c7a2a61d92b6e76c637f4ed0b8)), closes [#14](https://github.com/havenhq/revideo/issues/14)
* add reparent helper ([80b95a9](https://github.com/havenhq/revideo/commit/80b95a9ce89d4a2eeea7e467257486e961602d69))
* add Text and Image components ([#70](https://github.com/havenhq/revideo/issues/70)) ([85c7dcd](https://github.com/havenhq/revideo/commit/85c7dcdb4f8ca2f0bfb03950c85a8d6f6652fcdf))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/havenhq/revideo/issues/9)) ([9e0d67b](https://github.com/havenhq/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* added a theme property to the CodeBlock component ([#279](https://github.com/havenhq/revideo/issues/279)) ([fe34fa8](https://github.com/havenhq/revideo/commit/fe34fa8ebfe66cd356fb1c3d85adedef11e03b45))
* better children and spawners ([#858](https://github.com/havenhq/revideo/issues/858)) ([9b5c23d](https://github.com/havenhq/revideo/commit/9b5c23d2076180cf710656c817369a07b253e3ec))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* convert built-in types to webgl ([#929](https://github.com/havenhq/revideo/issues/929)) ([a0f0b7d](https://github.com/havenhq/revideo/commit/a0f0b7d8996547e1a316097422ec02bddeeccec6))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* **core:** tree shaking ([#523](https://github.com/havenhq/revideo/issues/523)) ([65fec78](https://github.com/havenhq/revideo/commit/65fec7825fda33812b13f57bfeb1d82193a5d190))
* **docs:** fiddle editor ([#542](https://github.com/havenhq/revideo/issues/542)) ([3c68fef](https://github.com/havenhq/revideo/commit/3c68fefdf7bf375ee9345aba7dbf9e5ff35e3c3d))
* export everything from entry points ([#710](https://github.com/havenhq/revideo/issues/710)) ([3c885d9](https://github.com/havenhq/revideo/commit/3c885d9083b52fbbaccf1e2560ae50817949bc52))
* filter reordering ([#119](https://github.com/havenhq/revideo/issues/119)) ([2398d0f](https://github.com/havenhq/revideo/commit/2398d0f9d57f36b47c9c66a988ca5607e9a3a30e))
* implement absolute scale setter ([842079a](https://github.com/havenhq/revideo/commit/842079a6547af4032719c85837df3db7c1c6d30a))
* improve async signals ([#156](https://github.com/havenhq/revideo/issues/156)) ([db27b9d](https://github.com/havenhq/revideo/commit/db27b9d5fb69a88f42afd98c86c4a1cdceb88ea1))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* improve image error handling ([#847](https://github.com/havenhq/revideo/issues/847)) ([db09d53](https://github.com/havenhq/revideo/commit/db09d5305a3c0507b035e3cd347eaa65b23d7d2e))
* introduce basic caching ([#68](https://github.com/havenhq/revideo/issues/68)) ([6420d36](https://github.com/havenhq/revideo/commit/6420d362d0e4ae058f55b6ff6bb2a3a32dec559b))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make transparent video optional ([#91](https://github.com/havenhq/revideo/issues/91)) ([6a052d5](https://github.com/havenhq/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* merge properties and signals ([#124](https://github.com/havenhq/revideo/issues/124)) ([da3ba83](https://github.com/havenhq/revideo/commit/da3ba83d82ee74f5a5c3631b07597f08cdf9e8e4))
* minor improvements ([403c7c2](https://github.com/havenhq/revideo/commit/403c7c27ad969880a14c498ec6cefb9e7e7b7544))
* minor improvements ([#77](https://github.com/havenhq/revideo/issues/77)) ([7c6e584](https://github.com/havenhq/revideo/commit/7c6e584aca353c9af55f0acb61b32b5f99727dba))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* new animator ([#91](https://github.com/havenhq/revideo/issues/91)) ([d85f2f8](https://github.com/havenhq/revideo/commit/d85f2f8a54c0f8bbfbc451884385f30e5b3ec206))
* new Code node ([#946](https://github.com/havenhq/revideo/issues/946)) ([26e55a3](https://github.com/havenhq/revideo/commit/26e55a37c416fb1313c8aadf40eed2824b45d330))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/havenhq/revideo/issues/33)) ([a6e1bcd](https://github.com/havenhq/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* signal error handling ([#89](https://github.com/havenhq/revideo/issues/89)) ([472ac65](https://github.com/havenhq/revideo/commit/472ac65938b804a6b698c8522ec0c3b6bdbcf1b1))
* simplify size access ([#65](https://github.com/havenhq/revideo/issues/65)) ([3315e64](https://github.com/havenhq/revideo/commit/3315e64641e9778bc48ea3fb707e3c0eeb581dfe))
* simplify size access further ([#66](https://github.com/havenhq/revideo/issues/66)) ([9091a5e](https://github.com/havenhq/revideo/commit/9091a5e05d8fadf72c50832c7c4467ac4424b72c))
* switch to signals ([#64](https://github.com/havenhq/revideo/issues/64)) ([d22d237](https://github.com/havenhq/revideo/commit/d22d23728597e6fa82ea5c5a99a6c0a56819bded))
* transparent video ([#75](https://github.com/havenhq/revideo/issues/75)) ([5f7b909](https://github.com/havenhq/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))
* turn Layout into node ([#75](https://github.com/havenhq/revideo/issues/75)) ([cdf8dc0](https://github.com/havenhq/revideo/commit/cdf8dc0a35522482dee2dd78a69606b79f52246e))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** scene graph icons ([#914](https://github.com/havenhq/revideo/issues/914)) ([e92ddef](https://github.com/havenhq/revideo/commit/e92ddef34860f5e710ff0f1a310758ec0ca95bcb))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* unify references and signals ([#137](https://github.com/havenhq/revideo/issues/137)) ([063aede](https://github.com/havenhq/revideo/commit/063aede0842f948d2c6704c6edd426e954bb4668))
* upgrade code-fns for new theme options and lazy loading ([#401](https://github.com/havenhq/revideo/issues/401)) ([8965ab1](https://github.com/havenhq/revideo/commit/8965ab1bef8b6ae919c8001d0527f5793293b285)), closes [#396](https://github.com/havenhq/revideo/issues/396) [#322](https://github.com/havenhq/revideo/issues/322)
* use ES modules in fiddles ([#712](https://github.com/havenhq/revideo/issues/712)) ([dbe2ad5](https://github.com/havenhq/revideo/commit/dbe2ad5644219c5a98d38c6557abfb66d793c821))
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))
* world space cache ([#498](https://github.com/havenhq/revideo/issues/498)) ([633e9e1](https://github.com/havenhq/revideo/commit/633e9e140dfbbe397df6ddc1f96ed30782ddce94)), closes [#342](https://github.com/havenhq/revideo/issues/342)


### Reverts

* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))
* feat: upgrade code-fns for new theme options and lazy loading ([#435](https://github.com/havenhq/revideo/issues/435)) ([3f5e439](https://github.com/havenhq/revideo/commit/3f5e43968f7add7c6322c9c8358d3b6fc178c2fe))


### BREAKING CHANGES

* multiple name changes

To avoid collisions, names of certain classes have changed:
- `Text => Txt`
- `Image => Img`
- `Rect (type) => BBox`

Cache related methods of `Node` have changed:
- `getCacheRect => getCacheBBox`
- `cacheRect => cacheBBox`
- `fullCacheRect => fullCacheBBox`

The `CodeBlock` property has changed:
- `CodeBlock.selectionOpacity => CodeBlock.unselectedOpacity`
* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
* remove legacy package





## 0.3.1 (2024-05-08)


### Bug Fixes

* **2d:** account for offset in cardinal points ([#883](https://github.com/havenhq/revideo/issues/883)) ([24da258](https://github.com/havenhq/revideo/commit/24da258f5937087b363eeb9146a9d22747b02e70)), closes [#882](https://github.com/havenhq/revideo/issues/882)
* **2d:** account for spawners in scene graph ([#935](https://github.com/havenhq/revideo/issues/935)) ([ca325f5](https://github.com/havenhq/revideo/commit/ca325f5ad0ae987e76106f5e65fef3ed7b3ca08d))
* **2d:** add missing Curve properties to Circle ([#805](https://github.com/havenhq/revideo/issues/805)) ([38c7900](https://github.com/havenhq/revideo/commit/38c79000403d7c3c99dde9e4c825a448d5f55054))
* **2d:** add missing Fragment export ([#553](https://github.com/havenhq/revideo/issues/553)) ([229afb4](https://github.com/havenhq/revideo/commit/229afb4fe7d95f09b480ab4a813f8dff549f381f))
* **2d:** add missing jsx dev runtime ([#547](https://github.com/havenhq/revideo/issues/547)) ([d61cb7d](https://github.com/havenhq/revideo/commit/d61cb7dd24ab66ae17d5bd6f5ccb34c4fd1e7569)), closes [#545](https://github.com/havenhq/revideo/issues/545)
* **2d:** add missing middle property ([#891](https://github.com/havenhq/revideo/issues/891)) ([61e2e96](https://github.com/havenhq/revideo/commit/61e2e96e3b8f37a68ebdddb432baba04858fd4f3))
* **2d:** add missing shape export ([#111](https://github.com/havenhq/revideo/issues/111)) ([02a1fa7](https://github.com/havenhq/revideo/commit/02a1fa7ea62155e498809f2e57ff29a18c82ac12))
* **2d:** better error handling ([#524](https://github.com/havenhq/revideo/issues/524)) ([b7475ba](https://github.com/havenhq/revideo/commit/b7475ba5ff35d37ee198577d1205d6ecd6fd2092))
* **2d:** calculate arrow orientations for curves correctly ([#597](https://github.com/havenhq/revideo/issues/597)) ([1626811](https://github.com/havenhq/revideo/commit/1626811ec4cd1bd2a3d43e393ced40a7da462c3a))
* **2d:** calculate Txt cache bbox from contents ([#836](https://github.com/havenhq/revideo/issues/836)) ([33e1a12](https://github.com/havenhq/revideo/commit/33e1a1296f21d26e9ed45ae92132825dca17054d)), closes [#465](https://github.com/havenhq/revideo/issues/465)
* **2d:** clone size correctly ([#562](https://github.com/havenhq/revideo/issues/562)) ([cdd3df1](https://github.com/havenhq/revideo/commit/cdd3df1bff25b04b905e289264831d8d328caaab)), closes [#559](https://github.com/havenhq/revideo/issues/559)
* **2d:** correct layout defaults ([#442](https://github.com/havenhq/revideo/issues/442)) ([c116c35](https://github.com/havenhq/revideo/commit/c116c355179ba3b2487634fb82b9a5bc2ea266bf))
* **2d:** correctly append Txt nodes to view ([#644](https://github.com/havenhq/revideo/issues/644)) ([24bb51a](https://github.com/havenhq/revideo/commit/24bb51aa04778c33ce327926b27332efaa554e5f))
* **2d:** correctly support external image urls ([#678](https://github.com/havenhq/revideo/issues/678)) ([a08556b](https://github.com/havenhq/revideo/commit/a08556b6e2822a55db593f610ea4dd6cb8494adb)), closes [#677](https://github.com/havenhq/revideo/issues/677)
* **2d:** fix cache bbox for lines ([#467](https://github.com/havenhq/revideo/issues/467)) ([9fd1444](https://github.com/havenhq/revideo/commit/9fd144417bb0b6301da6c522a988775f5ff142ac)), closes [#466](https://github.com/havenhq/revideo/issues/466)
* **2d:** fix circle segment ([#557](https://github.com/havenhq/revideo/issues/557)) ([adebff4](https://github.com/havenhq/revideo/commit/adebff492b76a512d79151b00adf1b383d25c5b5))
* **2d:** fix CodeBlock types ([#563](https://github.com/havenhq/revideo/issues/563)) ([25160fa](https://github.com/havenhq/revideo/commit/25160fa4d92af88429110356e42f6e3b4f88a90f)), closes [#560](https://github.com/havenhq/revideo/issues/560)
* **2d:** fix curve arrow alignment when animating start signal ([#615](https://github.com/havenhq/revideo/issues/615)) ([2fefc40](https://github.com/havenhq/revideo/commit/2fefc4026050159ba204c7629832ad83e8bfa51b))
* **2d:** fix cyclic dependency in cardinal points ([#645](https://github.com/havenhq/revideo/issues/645)) ([def23f9](https://github.com/havenhq/revideo/commit/def23f925ee7200c8740ecd51c7f6117d67b6ef8))
* **2d:** fix font ligatures in CodeBlock ([#231](https://github.com/havenhq/revideo/issues/231)) ([11ee3fe](https://github.com/havenhq/revideo/commit/11ee3fef5ad878313cf19833df6881333ced4dac))
* **2d:** fix Gradient and Pattern signals ([#376](https://github.com/havenhq/revideo/issues/376)) ([6e0dc8a](https://github.com/havenhq/revideo/commit/6e0dc8af8d19f93fd6a42addca2b3a2958b4dd33))
* **2d:** fix height when tweening text ([#905](https://github.com/havenhq/revideo/issues/905)) ([1c6a796](https://github.com/havenhq/revideo/commit/1c6a7965be137c1ab69741cdd1e9aaa6df4208c4))
* **2d:** fix import order ([#94](https://github.com/havenhq/revideo/issues/94)) ([bcc0bcf](https://github.com/havenhq/revideo/commit/bcc0bcffae47855bd8f7ab06454aaebe93c4aa24)), closes [#76](https://github.com/havenhq/revideo/issues/76)
* **2d:** fix initial value of endOffset ([#433](https://github.com/havenhq/revideo/issues/433)) ([9fe82b3](https://github.com/havenhq/revideo/commit/9fe82b3d21ba0150a2378e541a4652ca707c2d15))
* **2d:** fix layout calculation for nodes not explicitly added to view ([#331](https://github.com/havenhq/revideo/issues/331)) ([528e2d5](https://github.com/havenhq/revideo/commit/528e2d5a0abec99819e022d2848b256ece9f869a))
* **2d:** fix letterSpacing ([#448](https://github.com/havenhq/revideo/issues/448)) ([bb5ffc4](https://github.com/havenhq/revideo/commit/bb5ffc48efa82b9db818e8e52aa35e9c2ad8ce89)), closes [#447](https://github.com/havenhq/revideo/issues/447)
* **2d:** fix line arc length ([#503](https://github.com/havenhq/revideo/issues/503)) ([4f1cd59](https://github.com/havenhq/revideo/commit/4f1cd59e6bcba0b16b36be88b28a60ae46d4d9ab)), closes [#497](https://github.com/havenhq/revideo/issues/497)
* **2d:** fix Line cache ([#232](https://github.com/havenhq/revideo/issues/232)) ([a953b64](https://github.com/havenhq/revideo/commit/a953b64540c020657845efc84d4179142a7a0974)), closes [#205](https://github.com/havenhq/revideo/issues/205)
* **2d:** fix line jitter under certain conditions ([#863](https://github.com/havenhq/revideo/issues/863)) ([fb110a2](https://github.com/havenhq/revideo/commit/fb110a2f3583fc040bf2c39560934162bd146d9b))
* **2d:** fix Line overview crashing ([#142](https://github.com/havenhq/revideo/issues/142)) ([6bd5fd9](https://github.com/havenhq/revideo/commit/6bd5fd941e583e44f5d920ecd20215efb1eed58a))
* **2d:** fix nested cache canvases ([#554](https://github.com/havenhq/revideo/issues/554)) ([e601441](https://github.com/havenhq/revideo/commit/e6014413b215af6fb1a7953f8db83893d4025f0b)), closes [#551](https://github.com/havenhq/revideo/issues/551)
* **2d:** fix package.json entry ([#720](https://github.com/havenhq/revideo/issues/720)) ([12e9bf6](https://github.com/havenhq/revideo/commit/12e9bf6f40ab7afc02e2f55260544f3864920ded))
* **2d:** fix signal initialization ([#382](https://github.com/havenhq/revideo/issues/382)) ([ea36e79](https://github.com/havenhq/revideo/commit/ea36e791a20bfd1b491ffa9917be686c51bc3899))
* **2d:** fix tweening cardinal points ([#829](https://github.com/havenhq/revideo/issues/829)) ([cc16737](https://github.com/havenhq/revideo/commit/cc16737cd59081582fbb488a880e8d3c11c14918))
* **2d:** fix Txt decorators ([#526](https://github.com/havenhq/revideo/issues/526)) ([25b30ed](https://github.com/havenhq/revideo/commit/25b30ed3861f46d72147335480912ce5f564be79))
* **2d:** fix types ([#659](https://github.com/havenhq/revideo/issues/659)) ([a32af29](https://github.com/havenhq/revideo/commit/a32af29ef3bd2e5dbf08697ebfee53230fceadc1))
* **2d:** format whitespaces according to HTML ([#372](https://github.com/havenhq/revideo/issues/372)) ([83fb565](https://github.com/havenhq/revideo/commit/83fb565742d98f060c0400c8cbaf9961b69f34d0)), closes [#370](https://github.com/havenhq/revideo/issues/370)
* **2d:** handle division by zero in lines ([#407](https://github.com/havenhq/revideo/issues/407)) ([a17871a](https://github.com/havenhq/revideo/commit/a17871a2ce63dd5bb32bc719037327c4e9dde217))
* **2d:** handle floating point errors in acos ([#381](https://github.com/havenhq/revideo/issues/381)) ([5bca8fd](https://github.com/havenhq/revideo/commit/5bca8fd0bbdcf28f2793c124b7d6b0afd560c4b8))
* **2d:** handle lines with no points ([#233](https://github.com/havenhq/revideo/issues/233)) ([8108474](https://github.com/havenhq/revideo/commit/81084743dfad7b6419760796fda825047909d4d4)), closes [#212](https://github.com/havenhq/revideo/issues/212)
* **2d:** ignore children with disabled layout ([#669](https://github.com/havenhq/revideo/issues/669)) ([b98c462](https://github.com/havenhq/revideo/commit/b98c4625c3634495e86ca23d19355035e457db06)), closes [#580](https://github.com/havenhq/revideo/issues/580)
* **2d:** improve Curve hitbox ([#778](https://github.com/havenhq/revideo/issues/778)) ([8af723c](https://github.com/havenhq/revideo/commit/8af723c0322de39d2defe0363bba03f4f9542f08))
* **2d:** improve Rect radius ([#221](https://github.com/havenhq/revideo/issues/221)) ([3437e42](https://github.com/havenhq/revideo/commit/3437e42713a3f4a8d44d246ee01e2eb23b61e06a)), closes [#207](https://github.com/havenhq/revideo/issues/207)
* **2d:** make Text respect textWrap=pre ([#287](https://github.com/havenhq/revideo/issues/287)) ([cb07f4b](https://github.com/havenhq/revideo/commit/cb07f4bdf07edc8a086b934ca5ab769682b9a010))
* **2d:** minor fixes ([#915](https://github.com/havenhq/revideo/issues/915)) ([63cfc9e](https://github.com/havenhq/revideo/commit/63cfc9e033f2c2ac6d6ed2a0d8f615fcf642ab59))
* **2d:** point arrow heads in correct direction ([#792](https://github.com/havenhq/revideo/issues/792)) ([52ed52e](https://github.com/havenhq/revideo/commit/52ed52e963cc69a066a0353680acaca35b9c937a)), closes [#783](https://github.com/havenhq/revideo/issues/783)
* **2d:** prevent src warnings in Icon and Latex ([#899](https://github.com/havenhq/revideo/issues/899)) ([5eebab7](https://github.com/havenhq/revideo/commit/5eebab71d8061e233872e049e77b847f9fd077a1))
* **2d:** remove circular dependencies ([#780](https://github.com/havenhq/revideo/issues/780)) ([cdf3af5](https://github.com/havenhq/revideo/commit/cdf3af500a58151ee3549c6e728751aab3e6f75c))
* **2d:** smoothly play videos when presenting ([#600](https://github.com/havenhq/revideo/issues/600)) ([294fe6a](https://github.com/havenhq/revideo/commit/294fe6ac056ab074c77214fcf9035f53fac9258c)), closes [#578](https://github.com/havenhq/revideo/issues/578)
* **2d:** some signal setters not returning owners ([#143](https://github.com/havenhq/revideo/issues/143)) ([09ab7f9](https://github.com/havenhq/revideo/commit/09ab7f96afcaae608399a653c0b4878ba9b467d4))
* **2d:** stop code highlighting from jumping ([#230](https://github.com/havenhq/revideo/issues/230)) ([67ef1c4](https://github.com/havenhq/revideo/commit/67ef1c497056dd1f8f9e20d1d7fc1af03ec3849e))
* **2d:** stop mutating children ([#903](https://github.com/havenhq/revideo/issues/903)) ([f9552a8](https://github.com/havenhq/revideo/commit/f9552a8658ccde6c7b2466ad40b12cf28c6ec805))
* **2d:** switch iframes to ShadowDOM ([#90](https://github.com/havenhq/revideo/issues/90)) ([86176be](https://github.com/havenhq/revideo/commit/86176be055c08aba59272afcda00ed586f6c7ad6))
* **2d:** textDirection property for RTL/LTR text ([#404](https://github.com/havenhq/revideo/issues/404)) ([f240b1b](https://github.com/havenhq/revideo/commit/f240b1bd140a884f6901b7cfcb97ce3e9ce4b48d))
* **2d:** textWrap not working in Firefox ([#541](https://github.com/havenhq/revideo/issues/541)) ([f10e057](https://github.com/havenhq/revideo/commit/f10e057fd13ed9dcc70ebc0ca63963708ec159c8)), closes [#517](https://github.com/havenhq/revideo/issues/517)
* **2d:** wait for reused async resources ([#599](https://github.com/havenhq/revideo/issues/599)) ([280e065](https://github.com/havenhq/revideo/commit/280e065fe69e9a744b7b12eb4609e7d87f76bb63)), closes [#593](https://github.com/havenhq/revideo/issues/593)
* account for italic fonts in cache ([#968](https://github.com/havenhq/revideo/issues/968)) ([abb0906](https://github.com/havenhq/revideo/commit/abb090695c4257d9877d0cb11954093c49149ddc)), closes [#934](https://github.com/havenhq/revideo/issues/934)
* await font load before drawing ([#31](https://github.com/havenhq/revideo/issues/31)) ([cbfb5cb](https://github.com/havenhq/revideo/commit/cbfb5cb136d85a657c99187da166b64aae8be3a1))
* await font load without throwing async node error ([#69](https://github.com/havenhq/revideo/issues/69)) ([fddebe6](https://github.com/havenhq/revideo/commit/fddebe60a610af718c880b9e198eebe8555ea9a5))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/havenhq/revideo/issues/62)) ([04cdc5b](https://github.com/havenhq/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* fix compound property setter ([#218](https://github.com/havenhq/revideo/issues/218)) ([6cd1b95](https://github.com/havenhq/revideo/commit/6cd1b952df950554eb637c9f8e82947c415d00c5)), closes [#208](https://github.com/havenhq/revideo/issues/208) [#210](https://github.com/havenhq/revideo/issues/210)
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* plug memory leaks ([#385](https://github.com/havenhq/revideo/issues/385)) ([de0af00](https://github.com/havenhq/revideo/commit/de0af00a7d2e019e2a933791c62b7901755be7b0))
* prevent consumePromises from halting ([#657](https://github.com/havenhq/revideo/issues/657)) ([363a189](https://github.com/havenhq/revideo/commit/363a189b0c7f5926c9d5ae00b58b48e8ed4d9b48))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* previous scene being rendered twice ([#97](https://github.com/havenhq/revideo/issues/97)) ([90205bd](https://github.com/havenhq/revideo/commit/90205bdc1a086abe5f73b04cb4616c6af5ec4377))
* restrict size of cache canvas ([#544](https://github.com/havenhq/revideo/issues/544)) ([49ec554](https://github.com/havenhq/revideo/commit/49ec55490718e503d9a39437ae13c189dc4fe9ea))
* support color to null tweening ([#387](https://github.com/havenhq/revideo/issues/387)) ([02e9f22](https://github.com/havenhq/revideo/commit/02e9f22027a1c3a85ffcc259aeca913318fb6f54))
* support legacy imports again ([#868](https://github.com/havenhq/revideo/issues/868)) ([77c4e2e](https://github.com/havenhq/revideo/commit/77c4e2eeb8b0f73bdef1f72e3d81f34c79748929))
* support multiple async players ([#450](https://github.com/havenhq/revideo/issues/450)) ([d7ec469](https://github.com/havenhq/revideo/commit/d7ec469e747eefd909f4dd59dd713f5d86308222)), closes [#434](https://github.com/havenhq/revideo/issues/434)
* typo on codeblock remove comments ([#368](https://github.com/havenhq/revideo/issues/368)) ([2025adc](https://github.com/havenhq/revideo/commit/2025adc6e7aa11d81b6f5f6989e8eae18cf86cb7))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Code Refactoring

* introduce improved names ([#425](https://github.com/havenhq/revideo/issues/425)) ([4a2188d](https://github.com/havenhq/revideo/commit/4a2188d339587fa658b2134befc3fe63c835c5d7))
* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* **2d:** add antialiased signal to Shape ([#282](https://github.com/havenhq/revideo/issues/282)) ([7c6905d](https://github.com/havenhq/revideo/commit/7c6905d72c6c2f49e10f0a80704c0afe3504d01b))
* **2d:** add arcLength helper methods to Curve ([#627](https://github.com/havenhq/revideo/issues/627)) ([3c7546e](https://github.com/havenhq/revideo/commit/3c7546e7a509deb6fff8f669c3df0a69b492bd2e))
* **2d:** add Bézier nodes ([#603](https://github.com/havenhq/revideo/issues/603)) ([9841cfd](https://github.com/havenhq/revideo/commit/9841cfdc3947ca4e6d6e42ed21eae88e855f855d))
* **2d:** add cardinal points ([#636](https://github.com/havenhq/revideo/issues/636)) ([2136a25](https://github.com/havenhq/revideo/commit/2136a2558a9ed968ee505e4e5cce33d989dfdc13)), closes [#391](https://github.com/havenhq/revideo/issues/391)
* **2d:** add closed property for circle ([#378](https://github.com/havenhq/revideo/issues/378)) ([62a9605](https://github.com/havenhq/revideo/commit/62a9605d4c54e7bf2d2d44d47bf769f5b27378a5))
* **2d:** add completion property for curves ([#635](https://github.com/havenhq/revideo/issues/635)) ([6577d6d](https://github.com/havenhq/revideo/commit/6577d6ddfaf779ba02f3862d2a357166138b99ca))
* **2d:** add default computed values for signals ([#259](https://github.com/havenhq/revideo/issues/259)) ([18f61a6](https://github.com/havenhq/revideo/commit/18f61a668420dec8afba52d52a6557e7a7919ba2))
* **2d:** add Icon Component ([#306](https://github.com/havenhq/revideo/issues/306)) ([3479631](https://github.com/havenhq/revideo/commit/3479631ef34e39f90a8d8de441317672be1840d9)), closes [#305](https://github.com/havenhq/revideo/issues/305)
* **2d:** add LaTeX component ([#228](https://github.com/havenhq/revideo/issues/228)) ([4c26d2a](https://github.com/havenhq/revideo/commit/4c26d2aaf0c697486639aa917cd5c585d3d0ea74))
* **2d:** add line counter for CodeBlock ([#802](https://github.com/havenhq/revideo/issues/802)) ([c3f9676](https://github.com/havenhq/revideo/commit/c3f9676b6984731a09a44ab0b1fcfc226975fa08))
* **2d:** add methods for rearranging children ([#81](https://github.com/havenhq/revideo/issues/81)) ([63f6c1a](https://github.com/havenhq/revideo/commit/63f6c1aa51ac4ecd093151c8cd30910f2e72bcac))
* **2d:** add moveBelow, moveAbove and moveTo methods to Node ([#365](https://github.com/havenhq/revideo/issues/365)) ([16752a3](https://github.com/havenhq/revideo/commit/16752a3b8ae7461b33d6208a9675729f374e8324))
* **2d:** add option for preformatted text ([#147](https://github.com/havenhq/revideo/issues/147)) ([989be53](https://github.com/havenhq/revideo/commit/989be532d86642e1125bb7fa62a801b09c1b8f26))
* **2d:** add Path component ([#700](https://github.com/havenhq/revideo/issues/700)) ([2128b6b](https://github.com/havenhq/revideo/commit/2128b6bf871cabe19e1abc749f18945c78c01f84))
* **2d:** add playbackRate signal to Video component ([#831](https://github.com/havenhq/revideo/issues/831)) ([5902b82](https://github.com/havenhq/revideo/commit/5902b824b36400876be0ee970e2c6211299faf21)), closes [#711](https://github.com/havenhq/revideo/issues/711)
* **2d:** add Polygon component ([#463](https://github.com/havenhq/revideo/issues/463)) ([15adb3e](https://github.com/havenhq/revideo/commit/15adb3e312a4998b44c0b9c5fe5b5236f51c71c9)), closes [#455](https://github.com/havenhq/revideo/issues/455)
* **2d:** add querying helpers ([#852](https://github.com/havenhq/revideo/issues/852)) ([614de6b](https://github.com/havenhq/revideo/commit/614de6bd8542322d1db4b123b875f6fad85cc4eb))
* **2d:** add Ray node ([#628](https://github.com/havenhq/revideo/issues/628)) ([649447c](https://github.com/havenhq/revideo/commit/649447cd5f2089afc64cc7bd4b0276e69d1e9a30))
* **2d:** add save and restore methods to nodes ([#406](https://github.com/havenhq/revideo/issues/406)) ([870e194](https://github.com/havenhq/revideo/commit/870e1947d97382bc6d82857c077140bbef7cf7e8))
* **2d:** add skew property ([#803](https://github.com/havenhq/revideo/issues/803)) ([eff7c7b](https://github.com/havenhq/revideo/commit/eff7c7be0c013139140b398350242457736d48c7))
* **2d:** add smooth corners and sharpness to rect ([#310](https://github.com/havenhq/revideo/issues/310)) ([f7fbefd](https://github.com/havenhq/revideo/commit/f7fbefd27f7f6972cfb5a45a68e5d0aed9593ae4))
* **2d:** add spline node ([#514](https://github.com/havenhq/revideo/issues/514)) ([3ce2111](https://github.com/havenhq/revideo/commit/3ce2111309e698450dc4c6e2ad47024995863e73))
* **2d:** add start and end signals to Grid node ([#761](https://github.com/havenhq/revideo/issues/761)) ([e37ea80](https://github.com/havenhq/revideo/commit/e37ea806b94e93c6324d8e1b502468925b731e8e))
* **2d:** add SVG component ([#763](https://github.com/havenhq/revideo/issues/763)) ([8eadc11](https://github.com/havenhq/revideo/commit/8eadc11937d4201545894f2f5b204d477a3f9094))
* **2d:** add textAlign property ([#451](https://github.com/havenhq/revideo/issues/451)) ([3d15825](https://github.com/havenhq/revideo/commit/3d15825f3cc5a35ba081a31510741b824f3bc6ab)), closes [#303](https://github.com/havenhq/revideo/issues/303)
* **2d:** add video component property getter ([#240](https://github.com/havenhq/revideo/issues/240)) ([59de5ab](https://github.com/havenhq/revideo/commit/59de5ab2c089589773a2f9ad7588eda7d72693a7))
* **2d:** add z-index property to nodes ([#398](https://github.com/havenhq/revideo/issues/398)) ([4280af3](https://github.com/havenhq/revideo/commit/4280af3b4b7bd5970fe5e743949a0fcca2c314f3))
* **2d:** always clip images and videos ([#773](https://github.com/havenhq/revideo/issues/773)) ([3938c59](https://github.com/havenhq/revideo/commit/3938c59394bfc42e5562504687d783ff306d7d32))
* **2d:** clamp opacity value between 0 and 1 ([#835](https://github.com/havenhq/revideo/issues/835)) ([c54b2f8](https://github.com/havenhq/revideo/commit/c54b2f837a8e8b872df3610f4cc6caa94a728500)), closes [#830](https://github.com/havenhq/revideo/issues/830)
* **2d:** code bounding box helpers ([#948](https://github.com/havenhq/revideo/issues/948)) ([0ffd56f](https://github.com/havenhq/revideo/commit/0ffd56f5f8076913e687e5b908311aa7832d8b7b))
* **2d:** code range helpers ([#947](https://github.com/havenhq/revideo/issues/947)) ([044c9ac](https://github.com/havenhq/revideo/commit/044c9acd6ee7e4e337fb4d51286126f583a8da6f))
* **2d:** code selection and modification ([#163](https://github.com/havenhq/revideo/issues/163)) ([e8e884a](https://github.com/havenhq/revideo/commit/e8e884a1a5574425dbf15272718911c12cfa2327))
* **2d:** construct lines using signals ([#133](https://github.com/havenhq/revideo/issues/133)) ([2968a24](https://github.com/havenhq/revideo/commit/2968a2426564469fb4f4343fe71a6d30e95361f2))
* **2d:** immediate restore ([#736](https://github.com/havenhq/revideo/issues/736)) ([634d51d](https://github.com/havenhq/revideo/commit/634d51d2afe8a536673c364874f8f3d1a450b846))
* **2d:** improve property declarations ([27e7d26](https://github.com/havenhq/revideo/commit/27e7d267ee91bf1e8ca79686b6ec31347f9f4d41))
* **2d:** improve Rect corner radius ([#120](https://github.com/havenhq/revideo/issues/120)) ([b471fe0](https://github.com/havenhq/revideo/commit/b471fe0e37c0a426d3af8299c9c3c22539e7df05))
* **2d:** improve Video node ([#601](https://github.com/havenhq/revideo/issues/601)) ([3801d83](https://github.com/havenhq/revideo/commit/3801d83415bbdeeee5d6d53d0c18e5d9e78fba56))
* **2d:** make `View2D` extend `Rect` ([#379](https://github.com/havenhq/revideo/issues/379)) ([93db5fc](https://github.com/havenhq/revideo/commit/93db5fc41617c0902e85fda90fbfc930c2b4634b))
* **2d:** make Circle extend Curve ([#771](https://github.com/havenhq/revideo/issues/771)) ([4c8cf19](https://github.com/havenhq/revideo/commit/4c8cf1954093958eac507921dc18f67dd64b2052))
* **2d:** make Polygon extend Curve ([#961](https://github.com/havenhq/revideo/issues/961)) ([739c9fc](https://github.com/havenhq/revideo/commit/739c9fccbc101f8b2eed680a11c00f317fdc4dd3))
* **2d:** make Rect extend Curve ([#759](https://github.com/havenhq/revideo/issues/759)) ([9810212](https://github.com/havenhq/revideo/commit/9810212648824b9a2fa2ecd6b597e3319d20b325))
* **2d:** nested Txt nodes ([#861](https://github.com/havenhq/revideo/issues/861)) ([f2786d0](https://github.com/havenhq/revideo/commit/f2786d0cd0d06065ca1e9eb9f6b4c11a74b6c283)), closes [#540](https://github.com/havenhq/revideo/issues/540)
* **2d:** simplify layout prop ([c24cb12](https://github.com/havenhq/revideo/commit/c24cb12a22b7c85fdfb051917fa9ee1e0911717c))
* **2d:** support HMR for images ([#641](https://github.com/havenhq/revideo/issues/641)) ([cf17520](https://github.com/havenhq/revideo/commit/cf17520aa8ddf19dcfc419c63cf7255892d45b71))
* **2d:** support letter spacing in Code ([#955](https://github.com/havenhq/revideo/issues/955)) ([2a87c37](https://github.com/havenhq/revideo/commit/2a87c37c832de86c4b524b33fd68806627daec8b))
* **2d:** support tweening in applyState ([#859](https://github.com/havenhq/revideo/issues/859)) ([b7ed2e2](https://github.com/havenhq/revideo/commit/b7ed2e24773227e5b576ff056eb23de9b9ff1676))
* **2d:** support tweening Line points ([#853](https://github.com/havenhq/revideo/issues/853)) ([4bf37d7](https://github.com/havenhq/revideo/commit/4bf37d74d2e4bb9d9cc034aff121a32da9a6d146))
* **2d:** unify desired sizes ([#118](https://github.com/havenhq/revideo/issues/118)) ([401a799](https://github.com/havenhq/revideo/commit/401a79946b034a96b9abff2f3fb5efd6cc9080f3))
* **2d:** unify layout properties ([#355](https://github.com/havenhq/revideo/issues/355)) ([3cae97e](https://github.com/havenhq/revideo/commit/3cae97ea704d0533020fa87326dacadcc037d517)), closes [#352](https://github.com/havenhq/revideo/issues/352)
* **2d:** warn about missing image source ([#817](https://github.com/havenhq/revideo/issues/817)) ([6dcdb5f](https://github.com/havenhq/revideo/commit/6dcdb5f3b83d4860b1557e4745972e0af68f92f3))
* add advanced caching ([#69](https://github.com/havenhq/revideo/issues/69)) ([2a644c9](https://github.com/havenhq/revideo/commit/2a644c9315acfcc5280a5eacc9904df140a61e4f))
* add base class for shapes ([#67](https://github.com/havenhq/revideo/issues/67)) ([d38c172](https://github.com/havenhq/revideo/commit/d38c1724e129c553739cbfc27c4e5cd8f737f067))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add cloning ([#80](https://github.com/havenhq/revideo/issues/80)) ([47d7a0f](https://github.com/havenhq/revideo/commit/47d7a0fa5da9a03d8ed91557db651f6f960e28b1))
* add CodeBlock component based on code-fns to 2D ([#78](https://github.com/havenhq/revideo/issues/78)) ([ad346f1](https://github.com/havenhq/revideo/commit/ad346f118d63b1e321ec315e1c70b925670124a1))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add default renderer ([#63](https://github.com/havenhq/revideo/issues/63)) ([9255490](https://github.com/havenhq/revideo/commit/92554900965fe088538f5e703dbab2fd84f904d7)), closes [#56](https://github.com/havenhq/revideo/issues/56) [#58](https://github.com/havenhq/revideo/issues/58)
* add DEG2RAD and RAD2DEG constants ([#630](https://github.com/havenhq/revideo/issues/630)) ([01801e8](https://github.com/havenhq/revideo/commit/01801e8766058e75a6a020400650fb00f8f430cc))
* add Grid node ([e1f83da](https://github.com/havenhq/revideo/commit/e1f83da1f43d20d392df4acb11e3df9cc457585d))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add middle cardinal point ([#758](https://github.com/havenhq/revideo/issues/758)) ([b036eaf](https://github.com/havenhq/revideo/commit/b036eafc00381831c08267a78cf9d74973f4025a))
* add missing flexbox properties ([#405](https://github.com/havenhq/revideo/issues/405)) ([4e78b4b](https://github.com/havenhq/revideo/commit/4e78b4b2fe4df42ce0a8da6fd41ad38b0104e7f5))
* add missing layout props ([#72](https://github.com/havenhq/revideo/issues/72)) ([f808a56](https://github.com/havenhq/revideo/commit/f808a562b192fd03dba4b0d353284db344d6a80b))
* add node spawners ([#149](https://github.com/havenhq/revideo/issues/149)) ([da18a4e](https://github.com/havenhq/revideo/commit/da18a4e24104022a84ecd6cec1666b520186058f))
* add polyline ([#84](https://github.com/havenhq/revideo/issues/84)) ([4ceaf84](https://github.com/havenhq/revideo/commit/4ceaf842915ac43d81f292c58a4dc73a8d1bb8e9))
* add random number generator ([#116](https://github.com/havenhq/revideo/issues/116)) ([d505312](https://github.com/havenhq/revideo/commit/d5053123eef308c7a2a61d92b6e76c637f4ed0b8)), closes [#14](https://github.com/havenhq/revideo/issues/14)
* add reparent helper ([80b95a9](https://github.com/havenhq/revideo/commit/80b95a9ce89d4a2eeea7e467257486e961602d69))
* add Text and Image components ([#70](https://github.com/havenhq/revideo/issues/70)) ([85c7dcd](https://github.com/havenhq/revideo/commit/85c7dcdb4f8ca2f0bfb03950c85a8d6f6652fcdf))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/havenhq/revideo/issues/9)) ([9e0d67b](https://github.com/havenhq/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* added a theme property to the CodeBlock component ([#279](https://github.com/havenhq/revideo/issues/279)) ([fe34fa8](https://github.com/havenhq/revideo/commit/fe34fa8ebfe66cd356fb1c3d85adedef11e03b45))
* better children and spawners ([#858](https://github.com/havenhq/revideo/issues/858)) ([9b5c23d](https://github.com/havenhq/revideo/commit/9b5c23d2076180cf710656c817369a07b253e3ec))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* convert built-in types to webgl ([#929](https://github.com/havenhq/revideo/issues/929)) ([a0f0b7d](https://github.com/havenhq/revideo/commit/a0f0b7d8996547e1a316097422ec02bddeeccec6))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* **core:** tree shaking ([#523](https://github.com/havenhq/revideo/issues/523)) ([65fec78](https://github.com/havenhq/revideo/commit/65fec7825fda33812b13f57bfeb1d82193a5d190))
* **docs:** fiddle editor ([#542](https://github.com/havenhq/revideo/issues/542)) ([3c68fef](https://github.com/havenhq/revideo/commit/3c68fefdf7bf375ee9345aba7dbf9e5ff35e3c3d))
* export everything from entry points ([#710](https://github.com/havenhq/revideo/issues/710)) ([3c885d9](https://github.com/havenhq/revideo/commit/3c885d9083b52fbbaccf1e2560ae50817949bc52))
* filter reordering ([#119](https://github.com/havenhq/revideo/issues/119)) ([2398d0f](https://github.com/havenhq/revideo/commit/2398d0f9d57f36b47c9c66a988ca5607e9a3a30e))
* implement absolute scale setter ([842079a](https://github.com/havenhq/revideo/commit/842079a6547af4032719c85837df3db7c1c6d30a))
* improve async signals ([#156](https://github.com/havenhq/revideo/issues/156)) ([db27b9d](https://github.com/havenhq/revideo/commit/db27b9d5fb69a88f42afd98c86c4a1cdceb88ea1))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* improve image error handling ([#847](https://github.com/havenhq/revideo/issues/847)) ([db09d53](https://github.com/havenhq/revideo/commit/db09d5305a3c0507b035e3cd347eaa65b23d7d2e))
* introduce basic caching ([#68](https://github.com/havenhq/revideo/issues/68)) ([6420d36](https://github.com/havenhq/revideo/commit/6420d362d0e4ae058f55b6ff6bb2a3a32dec559b))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make transparent video optional ([#91](https://github.com/havenhq/revideo/issues/91)) ([6a052d5](https://github.com/havenhq/revideo/commit/6a052d52dcaff9a9eabe69d4a133f6092cc0ad3b))
* merge properties and signals ([#124](https://github.com/havenhq/revideo/issues/124)) ([da3ba83](https://github.com/havenhq/revideo/commit/da3ba83d82ee74f5a5c3631b07597f08cdf9e8e4))
* minor improvements ([403c7c2](https://github.com/havenhq/revideo/commit/403c7c27ad969880a14c498ec6cefb9e7e7b7544))
* minor improvements ([#77](https://github.com/havenhq/revideo/issues/77)) ([7c6e584](https://github.com/havenhq/revideo/commit/7c6e584aca353c9af55f0acb61b32b5f99727dba))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* new animator ([#91](https://github.com/havenhq/revideo/issues/91)) ([d85f2f8](https://github.com/havenhq/revideo/commit/d85f2f8a54c0f8bbfbc451884385f30e5b3ec206))
* new Code node ([#946](https://github.com/havenhq/revideo/issues/946)) ([26e55a3](https://github.com/havenhq/revideo/commit/26e55a37c416fb1313c8aadf40eed2824b45d330))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/havenhq/revideo/issues/33)) ([a6e1bcd](https://github.com/havenhq/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* signal error handling ([#89](https://github.com/havenhq/revideo/issues/89)) ([472ac65](https://github.com/havenhq/revideo/commit/472ac65938b804a6b698c8522ec0c3b6bdbcf1b1))
* simplify size access ([#65](https://github.com/havenhq/revideo/issues/65)) ([3315e64](https://github.com/havenhq/revideo/commit/3315e64641e9778bc48ea3fb707e3c0eeb581dfe))
* simplify size access further ([#66](https://github.com/havenhq/revideo/issues/66)) ([9091a5e](https://github.com/havenhq/revideo/commit/9091a5e05d8fadf72c50832c7c4467ac4424b72c))
* switch to signals ([#64](https://github.com/havenhq/revideo/issues/64)) ([d22d237](https://github.com/havenhq/revideo/commit/d22d23728597e6fa82ea5c5a99a6c0a56819bded))
* transparent video ([#75](https://github.com/havenhq/revideo/issues/75)) ([5f7b909](https://github.com/havenhq/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))
* turn Layout into node ([#75](https://github.com/havenhq/revideo/issues/75)) ([cdf8dc0](https://github.com/havenhq/revideo/commit/cdf8dc0a35522482dee2dd78a69606b79f52246e))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** scene graph icons ([#914](https://github.com/havenhq/revideo/issues/914)) ([e92ddef](https://github.com/havenhq/revideo/commit/e92ddef34860f5e710ff0f1a310758ec0ca95bcb))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* unify references and signals ([#137](https://github.com/havenhq/revideo/issues/137)) ([063aede](https://github.com/havenhq/revideo/commit/063aede0842f948d2c6704c6edd426e954bb4668))
* upgrade code-fns for new theme options and lazy loading ([#401](https://github.com/havenhq/revideo/issues/401)) ([8965ab1](https://github.com/havenhq/revideo/commit/8965ab1bef8b6ae919c8001d0527f5793293b285)), closes [#396](https://github.com/havenhq/revideo/issues/396) [#322](https://github.com/havenhq/revideo/issues/322)
* use ES modules in fiddles ([#712](https://github.com/havenhq/revideo/issues/712)) ([dbe2ad5](https://github.com/havenhq/revideo/commit/dbe2ad5644219c5a98d38c6557abfb66d793c821))
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))
* world space cache ([#498](https://github.com/havenhq/revideo/issues/498)) ([633e9e1](https://github.com/havenhq/revideo/commit/633e9e140dfbbe397df6ddc1f96ed30782ddce94)), closes [#342](https://github.com/havenhq/revideo/issues/342)


### Reverts

* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))
* feat: upgrade code-fns for new theme options and lazy loading ([#435](https://github.com/havenhq/revideo/issues/435)) ([3f5e439](https://github.com/havenhq/revideo/commit/3f5e43968f7add7c6322c9c8358d3b6fc178c2fe))


### BREAKING CHANGES

* multiple name changes

To avoid collisions, names of certain classes have changed:
- `Text => Txt`
- `Image => Img`
- `Rect (type) => BBox`

Cache related methods of `Node` have changed:
- `getCacheRect => getCacheBBox`
- `cacheRect => cacheBBox`
- `fullCacheRect => fullCacheBBox`

The `CodeBlock` property has changed:
- `CodeBlock.selectionOpacity => CodeBlock.unselectedOpacity`
* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
* remove legacy package





# 0.3.0 (2024-05-03)


### Bug Fixes

* **2d:** account for offset in cardinal points ([#883](https://github.com/havenhq/revideo/issues/883)) ([24da258](https://github.com/havenhq/revideo/commit/24da258f5937087b363eeb9146a9d22747b02e70)), closes [#882](https://github.com/havenhq/revideo/issues/882)
* **2d:** account for spawners in scene graph ([#935](https://github.com/havenhq/revideo/issues/935)) ([ca325f5](https://github.com/havenhq/revideo/commit/ca325f5ad0ae987e76106f5e65fef3ed7b3ca08d))
* **2d:** add missing Curve properties to Circle ([#805](https://github.com/havenhq/revideo/issues/805)) ([38c7900](https://github.com/havenhq/revideo/commit/38c79000403d7c3c99dde9e4c825a448d5f55054))
* **2d:** add missing Fragment export ([#553](https://github.com/havenhq/revideo/issues/553)) ([229afb4](https://github.com/havenhq/revideo/commit/229afb4fe7d95f09b480ab4a813f8dff549f381f))
* **2d:** add missing jsx dev runtime ([#547](https://github.com/havenhq/revideo/issues/547)) ([d61cb7d](https://github.com/havenhq/revideo/commit/d61cb7dd24ab66ae17d5bd6f5ccb34c4fd1e7569)), closes [#545](https://github.com/havenhq/revideo/issues/545)
* **2d:** add missing middle property ([#891](https://github.com/havenhq/revideo/issues/891)) ([61e2e96](https://github.com/havenhq/revideo/commit/61e2e96e3b8f37a68ebdddb432baba04858fd4f3))
* **2d:** add missing shape export ([#111](https://github.com/havenhq/revideo/issues/111)) ([02a1fa7](https://github.com/havenhq/revideo/commit/02a1fa7ea62155e498809f2e57ff29a18c82ac12))
* **2d:** better error handling ([#524](https://github.com/havenhq/revideo/issues/524)) ([b7475ba](https://github.com/havenhq/revideo/commit/b7475ba5ff35d37ee198577d1205d6ecd6fd2092))
* **2d:** calculate arrow orientations for curves correctly ([#597](https://github.com/havenhq/revideo/issues/597)) ([1626811](https://github.com/havenhq/revideo/commit/1626811ec4cd1bd2a3d43e393ced40a7da462c3a))
* **2d:** calculate Txt cache bbox from contents ([#836](https://github.com/havenhq/revideo/issues/836)) ([33e1a12](https://github.com/havenhq/revideo/commit/33e1a1296f21d26e9ed45ae92132825dca17054d)), closes [#465](https://github.com/havenhq/revideo/issues/465)
* **2d:** clone size correctly ([#562](https://github.com/havenhq/revideo/issues/562)) ([cdd3df1](https://github.com/havenhq/revideo/commit/cdd3df1bff25b04b905e289264831d8d328caaab)), closes [#559](https://github.com/havenhq/revideo/issues/559)
* **2d:** correct layout defaults ([#442](https://github.com/havenhq/revideo/issues/442)) ([c116c35](https://github.com/havenhq/revideo/commit/c116c355179ba3b2487634fb82b9a5bc2ea266bf))
* **2d:** correctly append Txt nodes to view ([#644](https://github.com/havenhq/revideo/issues/644)) ([24bb51a](https://github.com/havenhq/revideo/commit/24bb51aa04778c33ce327926b27332efaa554e5f))
* **2d:** correctly support external image urls ([#678](https://github.com/havenhq/revideo/issues/678)) ([a08556b](https://github.com/havenhq/revideo/commit/a08556b6e2822a55db593f610ea4dd6cb8494adb)), closes [#677](https://github.com/havenhq/revideo/issues/677)
* **2d:** fix cache bbox for lines ([#467](https://github.com/havenhq/revideo/issues/467)) ([9fd1444](https://github.com/havenhq/revideo/commit/9fd144417bb0b6301da6c522a988775f5ff142ac)), closes [#466](https://github.com/havenhq/revideo/issues/466)
* **2d:** fix circle segment ([#557](https://github.com/havenhq/revideo/issues/557)) ([adebff4](https://github.com/havenhq/revideo/commit/adebff492b76a512d79151b00adf1b383d25c5b5))
* **2d:** fix CodeBlock types ([#563](https://github.com/havenhq/revideo/issues/563)) ([25160fa](https://github.com/havenhq/revideo/commit/25160fa4d92af88429110356e42f6e3b4f88a90f)), closes [#560](https://github.com/havenhq/revideo/issues/560)
* **2d:** fix curve arrow alignment when animating start signal ([#615](https://github.com/havenhq/revideo/issues/615)) ([2fefc40](https://github.com/havenhq/revideo/commit/2fefc4026050159ba204c7629832ad83e8bfa51b))
* **2d:** fix cyclic dependency in cardinal points ([#645](https://github.com/havenhq/revideo/issues/645)) ([def23f9](https://github.com/havenhq/revideo/commit/def23f925ee7200c8740ecd51c7f6117d67b6ef8))
* **2d:** fix font ligatures in CodeBlock ([#231](https://github.com/havenhq/revideo/issues/231)) ([11ee3fe](https://github.com/havenhq/revideo/commit/11ee3fef5ad878313cf19833df6881333ced4dac))
* **2d:** fix Gradient and Pattern signals ([#376](https://github.com/havenhq/revideo/issues/376)) ([6e0dc8a](https://github.com/havenhq/revideo/commit/6e0dc8af8d19f93fd6a42addca2b3a2958b4dd33))
* **2d:** fix height when tweening text ([#905](https://github.com/havenhq/revideo/issues/905)) ([1c6a796](https://github.com/havenhq/revideo/commit/1c6a7965be137c1ab69741cdd1e9aaa6df4208c4))
* **2d:** fix import order ([#94](https://github.com/havenhq/revideo/issues/94)) ([bcc0bcf](https://github.com/havenhq/revideo/commit/bcc0bcffae47855bd8f7ab06454aaebe93c4aa24)), closes [#76](https://github.com/havenhq/revideo/issues/76)
* **2d:** fix initial value of endOffset ([#433](https://github.com/havenhq/revideo/issues/433)) ([9fe82b3](https://github.com/havenhq/revideo/commit/9fe82b3d21ba0150a2378e541a4652ca707c2d15))
* **2d:** fix layout calculation for nodes not explicitly added to view ([#331](https://github.com/havenhq/revideo/issues/331)) ([528e2d5](https://github.com/havenhq/revideo/commit/528e2d5a0abec99819e022d2848b256ece9f869a))
* **2d:** fix letterSpacing ([#448](https://github.com/havenhq/revideo/issues/448)) ([bb5ffc4](https://github.com/havenhq/revideo/commit/bb5ffc48efa82b9db818e8e52aa35e9c2ad8ce89)), closes [#447](https://github.com/havenhq/revideo/issues/447)
* **2d:** fix line arc length ([#503](https://github.com/havenhq/revideo/issues/503)) ([4f1cd59](https://github.com/havenhq/revideo/commit/4f1cd59e6bcba0b16b36be88b28a60ae46d4d9ab)), closes [#497](https://github.com/havenhq/revideo/issues/497)
* **2d:** fix Line cache ([#232](https://github.com/havenhq/revideo/issues/232)) ([a953b64](https://github.com/havenhq/revideo/commit/a953b64540c020657845efc84d4179142a7a0974)), closes [#205](https://github.com/havenhq/revideo/issues/205)
* **2d:** fix line jitter under certain conditions ([#863](https://github.com/havenhq/revideo/issues/863)) ([fb110a2](https://github.com/havenhq/revideo/commit/fb110a2f3583fc040bf2c39560934162bd146d9b))
* **2d:** fix Line overview crashing ([#142](https://github.com/havenhq/revideo/issues/142)) ([6bd5fd9](https://github.com/havenhq/revideo/commit/6bd5fd941e583e44f5d920ecd20215efb1eed58a))
* **2d:** fix nested cache canvases ([#554](https://github.com/havenhq/revideo/issues/554)) ([e601441](https://github.com/havenhq/revideo/commit/e6014413b215af6fb1a7953f8db83893d4025f0b)), closes [#551](https://github.com/havenhq/revideo/issues/551)
* **2d:** fix package.json entry ([#720](https://github.com/havenhq/revideo/issues/720)) ([12e9bf6](https://github.com/havenhq/revideo/commit/12e9bf6f40ab7afc02e2f55260544f3864920ded))
* **2d:** fix signal initialization ([#382](https://github.com/havenhq/revideo/issues/382)) ([ea36e79](https://github.com/havenhq/revideo/commit/ea36e791a20bfd1b491ffa9917be686c51bc3899))
* **2d:** fix tweening cardinal points ([#829](https://github.com/havenhq/revideo/issues/829)) ([cc16737](https://github.com/havenhq/revideo/commit/cc16737cd59081582fbb488a880e8d3c11c14918))
* **2d:** fix Txt decorators ([#526](https://github.com/havenhq/revideo/issues/526)) ([25b30ed](https://github.com/havenhq/revideo/commit/25b30ed3861f46d72147335480912ce5f564be79))
* **2d:** fix types ([#659](https://github.com/havenhq/revideo/issues/659)) ([a32af29](https://github.com/havenhq/revideo/commit/a32af29ef3bd2e5dbf08697ebfee53230fceadc1))
* **2d:** format whitespaces according to HTML ([#372](https://github.com/havenhq/revideo/issues/372)) ([83fb565](https://github.com/havenhq/revideo/commit/83fb565742d98f060c0400c8cbaf9961b69f34d0)), closes [#370](https://github.com/havenhq/revideo/issues/370)
* **2d:** handle division by zero in lines ([#407](https://github.com/havenhq/revideo/issues/407)) ([a17871a](https://github.com/havenhq/revideo/commit/a17871a2ce63dd5bb32bc719037327c4e9dde217))
* **2d:** handle floating point errors in acos ([#381](https://github.com/havenhq/revideo/issues/381)) ([5bca8fd](https://github.com/havenhq/revideo/commit/5bca8fd0bbdcf28f2793c124b7d6b0afd560c4b8))
* **2d:** handle lines with no points ([#233](https://github.com/havenhq/revideo/issues/233)) ([8108474](https://github.com/havenhq/revideo/commit/81084743dfad7b6419760796fda825047909d4d4)), closes [#212](https://github.com/havenhq/revideo/issues/212)
* **2d:** ignore children with disabled layout ([#669](https://github.com/havenhq/revideo/issues/669)) ([b98c462](https://github.com/havenhq/revideo/commit/b98c4625c3634495e86ca23d19355035e457db06)), closes [#580](https://github.com/havenhq/revideo/issues/580)
* **2d:** improve Curve hitbox ([#778](https://github.com/havenhq/revideo/issues/778)) ([8af723c](https://github.com/havenhq/revideo/commit/8af723c0322de39d2defe0363bba03f4f9542f08))
* **2d:** improve Rect radius ([#221](https://github.com/havenhq/revideo/issues/221)) ([3437e42](https://github.com/havenhq/revideo/commit/3437e42713a3f4a8d44d246ee01e2eb23b61e06a)), closes [#207](https://github.com/havenhq/revideo/issues/207)
* **2d:** make Text respect textWrap=pre ([#287](https://github.com/havenhq/revideo/issues/287)) ([cb07f4b](https://github.com/havenhq/revideo/commit/cb07f4bdf07edc8a086b934ca5ab769682b9a010))
* **2d:** minor fixes ([#915](https://github.com/havenhq/revideo/issues/915)) ([63cfc9e](https://github.com/havenhq/revideo/commit/63cfc9e033f2c2ac6d6ed2a0d8f615fcf642ab59))
* **2d:** point arrow heads in correct direction ([#792](https://github.com/havenhq/revideo/issues/792)) ([52ed52e](https://github.com/havenhq/revideo/commit/52ed52e963cc69a066a0353680acaca35b9c937a)), closes [#783](https://github.com/havenhq/revideo/issues/783)
* **2d:** prevent src warnings in Icon and Latex ([#899](https://github.com/havenhq/revideo/issues/899)) ([5eebab7](https://github.com/havenhq/revideo/commit/5eebab71d8061e233872e049e77b847f9fd077a1))
* **2d:** remove circular dependencies ([#780](https://github.com/havenhq/revideo/issues/780)) ([cdf3af5](https://github.com/havenhq/revideo/commit/cdf3af500a58151ee3549c6e728751aab3e6f75c))
* **2d:** smoothly play videos when presenting ([#600](https://github.com/havenhq/revideo/issues/600)) ([294fe6a](https://github.com/havenhq/revideo/commit/294fe6ac056ab074c77214fcf9035f53fac9258c)), closes [#578](https://github.com/havenhq/revideo/issues/578)
* **2d:** some signal setters not returning owners ([#143](https://github.com/havenhq/revideo/issues/143)) ([09ab7f9](https://github.com/havenhq/revideo/commit/09ab7f96afcaae608399a653c0b4878ba9b467d4))
* **2d:** stop code highlighting from jumping ([#230](https://github.com/havenhq/revideo/issues/230)) ([67ef1c4](https://github.com/havenhq/revideo/commit/67ef1c497056dd1f8f9e20d1d7fc1af03ec3849e))
* **2d:** stop mutating children ([#903](https://github.com/havenhq/revideo/issues/903)) ([f9552a8](https://github.com/havenhq/revideo/commit/f9552a8658ccde6c7b2466ad40b12cf28c6ec805))
* **2d:** switch iframes to ShadowDOM ([#90](https://github.com/havenhq/revideo/issues/90)) ([86176be](https://github.com/havenhq/revideo/commit/86176be055c08aba59272afcda00ed586f6c7ad6))
* **2d:** textDirection property for RTL/LTR text ([#404](https://github.com/havenhq/revideo/issues/404)) ([f240b1b](https://github.com/havenhq/revideo/commit/f240b1bd140a884f6901b7cfcb97ce3e9ce4b48d))
* **2d:** textWrap not working in Firefox ([#541](https://github.com/havenhq/revideo/issues/541)) ([f10e057](https://github.com/havenhq/revideo/commit/f10e057fd13ed9dcc70ebc0ca63963708ec159c8)), closes [#517](https://github.com/havenhq/revideo/issues/517)
* **2d:** wait for reused async resources ([#599](https://github.com/havenhq/revideo/issues/599)) ([280e065](https://github.com/havenhq/revideo/commit/280e065fe69e9a744b7b12eb4609e7d87f76bb63)), closes [#593](https://github.com/havenhq/revideo/issues/593)
* account for italic fonts in cache ([#968](https://github.com/havenhq/revideo/issues/968)) ([abb0906](https://github.com/havenhq/revideo/commit/abb090695c4257d9877d0cb11954093c49149ddc)), closes [#934](https://github.com/havenhq/revideo/issues/934)
* await font load before drawing ([#31](https://github.com/havenhq/revideo/issues/31)) ([cbfb5cb](https://github.com/havenhq/revideo/commit/cbfb5cb136d85a657c99187da166b64aae8be3a1))
* await font load without throwing async node error ([#69](https://github.com/havenhq/revideo/issues/69)) ([fddebe6](https://github.com/havenhq/revideo/commit/fddebe60a610af718c880b9e198eebe8555ea9a5))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/havenhq/revideo/issues/62)) ([04cdc5b](https://github.com/havenhq/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* fix compound property setter ([#218](https://github.com/havenhq/revideo/issues/218)) ([6cd1b95](https://github.com/havenhq/revideo/commit/6cd1b952df950554eb637c9f8e82947c415d00c5)), closes [#208](https://github.com/havenhq/revideo/issues/208) [#210](https://github.com/havenhq/revideo/issues/210)
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* plug memory leaks ([#385](https://github.com/havenhq/revideo/issues/385)) ([de0af00](https://github.com/havenhq/revideo/commit/de0af00a7d2e019e2a933791c62b7901755be7b0))
* prevent consumePromises from halting ([#657](https://github.com/havenhq/revideo/issues/657)) ([363a189](https://github.com/havenhq/revideo/commit/363a189b0c7f5926c9d5ae00b58b48e8ed4d9b48))
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* previous scene being rendered twice ([#97](https://github.com/havenhq/revideo/issues/97)) ([90205bd](https://github.com/havenhq/revideo/commit/90205bdc1a086abe5f73b04cb4616c6af5ec4377))
* restrict size of cache canvas ([#544](https://github.com/havenhq/revideo/issues/544)) ([49ec554](https://github.com/havenhq/revideo/commit/49ec55490718e503d9a39437ae13c189dc4fe9ea))
* support color to null tweening ([#387](https://github.com/havenhq/revideo/issues/387)) ([02e9f22](https://github.com/havenhq/revideo/commit/02e9f22027a1c3a85ffcc259aeca913318fb6f54))
* support legacy imports again ([#868](https://github.com/havenhq/revideo/issues/868)) ([77c4e2e](https://github.com/havenhq/revideo/commit/77c4e2eeb8b0f73bdef1f72e3d81f34c79748929))
* support multiple async players ([#450](https://github.com/havenhq/revideo/issues/450)) ([d7ec469](https://github.com/havenhq/revideo/commit/d7ec469e747eefd909f4dd59dd713f5d86308222)), closes [#434](https://github.com/havenhq/revideo/issues/434)
* typo on codeblock remove comments ([#368](https://github.com/havenhq/revideo/issues/368)) ([2025adc](https://github.com/havenhq/revideo/commit/2025adc6e7aa11d81b6f5f6989e8eae18cf86cb7))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Code Refactoring

* introduce improved names ([#425](https://github.com/havenhq/revideo/issues/425)) ([4a2188d](https://github.com/havenhq/revideo/commit/4a2188d339587fa658b2134befc3fe63c835c5d7))
* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* **2d:** add antialiased signal to Shape ([#282](https://github.com/havenhq/revideo/issues/282)) ([7c6905d](https://github.com/havenhq/revideo/commit/7c6905d72c6c2f49e10f0a80704c0afe3504d01b))
* **2d:** add arcLength helper methods to Curve ([#627](https://github.com/havenhq/revideo/issues/627)) ([3c7546e](https://github.com/havenhq/revideo/commit/3c7546e7a509deb6fff8f669c3df0a69b492bd2e))
* **2d:** add Bézier nodes ([#603](https://github.com/havenhq/revideo/issues/603)) ([9841cfd](https://github.com/havenhq/revideo/commit/9841cfdc3947ca4e6d6e42ed21eae88e855f855d))
* **2d:** add cardinal points ([#636](https://github.com/havenhq/revideo/issues/636)) ([2136a25](https://github.com/havenhq/revideo/commit/2136a2558a9ed968ee505e4e5cce33d989dfdc13)), closes [#391](https://github.com/havenhq/revideo/issues/391)
* **2d:** add closed property for circle ([#378](https://github.com/havenhq/revideo/issues/378)) ([62a9605](https://github.com/havenhq/revideo/commit/62a9605d4c54e7bf2d2d44d47bf769f5b27378a5))
* **2d:** add completion property for curves ([#635](https://github.com/havenhq/revideo/issues/635)) ([6577d6d](https://github.com/havenhq/revideo/commit/6577d6ddfaf779ba02f3862d2a357166138b99ca))
* **2d:** add default computed values for signals ([#259](https://github.com/havenhq/revideo/issues/259)) ([18f61a6](https://github.com/havenhq/revideo/commit/18f61a668420dec8afba52d52a6557e7a7919ba2))
* **2d:** add Icon Component ([#306](https://github.com/havenhq/revideo/issues/306)) ([3479631](https://github.com/havenhq/revideo/commit/3479631ef34e39f90a8d8de441317672be1840d9)), closes [#305](https://github.com/havenhq/revideo/issues/305)
* **2d:** add LaTeX component ([#228](https://github.com/havenhq/revideo/issues/228)) ([4c26d2a](https://github.com/havenhq/revideo/commit/4c26d2aaf0c697486639aa917cd5c585d3d0ea74))
* **2d:** add line counter for CodeBlock ([#802](https://github.com/havenhq/revideo/issues/802)) ([c3f9676](https://github.com/havenhq/revideo/commit/c3f9676b6984731a09a44ab0b1fcfc226975fa08))
* **2d:** add methods for rearranging children ([#81](https://github.com/havenhq/revideo/issues/81)) ([63f6c1a](https://github.com/havenhq/revideo/commit/63f6c1aa51ac4ecd093151c8cd30910f2e72bcac))
* **2d:** add moveBelow, moveAbove and moveTo methods to Node ([#365](https://github.com/havenhq/revideo/issues/365)) ([16752a3](https://github.com/havenhq/revideo/commit/16752a3b8ae7461b33d6208a9675729f374e8324))
* **2d:** add option for preformatted text ([#147](https://github.com/havenhq/revideo/issues/147)) ([989be53](https://github.com/havenhq/revideo/commit/989be532d86642e1125bb7fa62a801b09c1b8f26))
* **2d:** add Path component ([#700](https://github.com/havenhq/revideo/issues/700)) ([2128b6b](https://github.com/havenhq/revideo/commit/2128b6bf871cabe19e1abc749f18945c78c01f84))
* **2d:** add playbackRate signal to Video component ([#831](https://github.com/havenhq/revideo/issues/831)) ([5902b82](https://github.com/havenhq/revideo/commit/5902b824b36400876be0ee970e2c6211299faf21)), closes [#711](https://github.com/havenhq/revideo/issues/711)
* **2d:** add Polygon component ([#463](https://github.com/havenhq/revideo/issues/463)) ([15adb3e](https://github.com/havenhq/revideo/commit/15adb3e312a4998b44c0b9c5fe5b5236f51c71c9)), closes [#455](https://github.com/havenhq/revideo/issues/455)
* **2d:** add querying helpers ([#852](https://github.com/havenhq/revideo/issues/852)) ([614de6b](https://github.com/havenhq/revideo/commit/614de6bd8542322d1db4b123b875f6fad85cc4eb))
* **2d:** add Ray node ([#628](https://github.com/havenhq/revideo/issues/628)) ([649447c](https://github.com/havenhq/revideo/commit/649447cd5f2089afc64cc7bd4b0276e69d1e9a30))
* **2d:** add save and restore methods to nodes ([#406](https://github.com/havenhq/revideo/issues/406)) ([870e194](https://github.com/havenhq/revideo/commit/870e1947d97382bc6d82857c077140bbef7cf7e8))
* **2d:** add skew property ([#803](https://github.com/havenhq/revideo/issues/803)) ([eff7c7b](https://github.com/havenhq/revideo/commit/eff7c7be0c013139140b398350242457736d48c7))
* **2d:** add smooth corners and sharpness to rect ([#310](https://github.com/havenhq/revideo/issues/310)) ([f7fbefd](https://github.com/havenhq/revideo/commit/f7fbefd27f7f6972cfb5a45a68e5d0aed9593ae4))
* **2d:** add spline node ([#514](https://github.com/havenhq/revideo/issues/514)) ([3ce2111](https://github.com/havenhq/revideo/commit/3ce2111309e698450dc4c6e2ad47024995863e73))
* **2d:** add start and end signals to Grid node ([#761](https://github.com/havenhq/revideo/issues/761)) ([e37ea80](https://github.com/havenhq/revideo/commit/e37ea806b94e93c6324d8e1b502468925b731e8e))
* **2d:** add SVG component ([#763](https://github.com/havenhq/revideo/issues/763)) ([8eadc11](https://github.com/havenhq/revideo/commit/8eadc11937d4201545894f2f5b204d477a3f9094))
* **2d:** add textAlign property ([#451](https://github.com/havenhq/revideo/issues/451)) ([3d15825](https://github.com/havenhq/revideo/commit/3d15825f3cc5a35ba081a31510741b824f3bc6ab)), closes [#303](https://github.com/havenhq/revideo/issues/303)
* **2d:** add video component property getter ([#240](https://github.com/havenhq/revideo/issues/240)) ([59de5ab](https://github.com/havenhq/revideo/commit/59de5ab2c089589773a2f9ad7588eda7d72693a7))
* **2d:** add z-index property to nodes ([#398](https://github.com/havenhq/revideo/issues/398)) ([4280af3](https://github.com/havenhq/revideo/commit/4280af3b4b7bd5970fe5e743949a0fcca2c314f3))
* **2d:** always clip images and videos ([#773](https://github.com/havenhq/revideo/issues/773)) ([3938c59](https://github.com/havenhq/revideo/commit/3938c59394bfc42e5562504687d783ff306d7d32))
* **2d:** clamp opacity value between 0 and 1 ([#835](https://github.com/havenhq/revideo/issues/835)) ([c54b2f8](https://github.com/havenhq/revideo/commit/c54b2f837a8e8b872df3610f4cc6caa94a728500)), closes [#830](https://github.com/havenhq/revideo/issues/830)
* **2d:** code bounding box helpers ([#948](https://github.com/havenhq/revideo/issues/948)) ([0ffd56f](https://github.com/havenhq/revideo/commit/0ffd56f5f8076913e687e5b908311aa7832d8b7b))
* **2d:** code range helpers ([#947](https://github.com/havenhq/revideo/issues/947)) ([044c9ac](https://github.com/havenhq/revideo/commit/044c9acd6ee7e4e337fb4d51286126f583a8da6f))
* **2d:** code selection and modification ([#163](https://github.com/havenhq/revideo/issues/163)) ([e8e884a](https://github.com/havenhq/revideo/commit/e8e884a1a5574425dbf15272718911c12cfa2327))
* **2d:** construct lines using signals ([#133](https://github.com/havenhq/revideo/issues/133)) ([2968a24](https://github.com/havenhq/revideo/commit/2968a2426564469fb4f4343fe71a6d30e95361f2))
* **2d:** immediate restore ([#736](https://github.com/havenhq/revideo/issues/736)) ([634d51d](https://github.com/havenhq/revideo/commit/634d51d2afe8a536673c364874f8f3d1a450b846))
* **2d:** improve property declarations ([27e7d26](https://github.com/havenhq/revideo/commit/27e7d267ee91bf1e8ca79686b6ec31347f9f4d41))
* **2d:** improve Rect corner radius ([#120](https://github.com/havenhq/revideo/issues/120)) ([b471fe0](https://github.com/havenhq/revideo/commit/b471fe0e37c0a426d3af8299c9c3c22539e7df05))
* **2d:** improve Video node ([#601](https://github.com/havenhq/revideo/issues/601)) ([3801d83](https://github.com/havenhq/revideo/commit/3801d83415bbdeeee5d6d53d0c18e5d9e78fba56))
* **2d:** make `View2D` extend `Rect` ([#379](https://github.com/havenhq/revideo/issues/379)) ([93db5fc](https://github.com/havenhq/revideo/commit/93db5fc41617c0902e85fda90fbfc930c2b4634b))
* **2d:** make Circle extend Curve ([#771](https://github.com/havenhq/revideo/issues/771)) ([4c8cf19](https://github.com/havenhq/revideo/commit/4c8cf1954093958eac507921dc18f67dd64b2052))
* **2d:** make Polygon extend Curve ([#961](https://github.com/havenhq/revideo/issues/961)) ([739c9fc](https://github.com/havenhq/revideo/commit/739c9fccbc101f8b2eed680a11c00f317fdc4dd3))
* **2d:** make Rect extend Curve ([#759](https://github.com/havenhq/revideo/issues/759)) ([9810212](https://github.com/havenhq/revideo/commit/9810212648824b9a2fa2ecd6b597e3319d20b325))
* **2d:** nested Txt nodes ([#861](https://github.com/havenhq/revideo/issues/861)) ([f2786d0](https://github.com/havenhq/revideo/commit/f2786d0cd0d06065ca1e9eb9f6b4c11a74b6c283)), closes [#540](https://github.com/havenhq/revideo/issues/540)
* **2d:** simplify layout prop ([c24cb12](https://github.com/havenhq/revideo/commit/c24cb12a22b7c85fdfb051917fa9ee1e0911717c))
* **2d:** support HMR for images ([#641](https://github.com/havenhq/revideo/issues/641)) ([cf17520](https://github.com/havenhq/revideo/commit/cf17520aa8ddf19dcfc419c63cf7255892d45b71))
* **2d:** support letter spacing in Code ([#955](https://github.com/havenhq/revideo/issues/955)) ([2a87c37](https://github.com/havenhq/revideo/commit/2a87c37c832de86c4b524b33fd68806627daec8b))
* **2d:** support tweening in applyState ([#859](https://github.com/havenhq/revideo/issues/859)) ([b7ed2e2](https://github.com/havenhq/revideo/commit/b7ed2e24773227e5b576ff056eb23de9b9ff1676))
* **2d:** support tweening Line points ([#853](https://github.com/havenhq/revideo/issues/853)) ([4bf37d7](https://github.com/havenhq/revideo/commit/4bf37d74d2e4bb9d9cc034aff121a32da9a6d146))
* **2d:** unify desired sizes ([#118](https://github.com/havenhq/revideo/issues/118)) ([401a799](https://github.com/havenhq/revideo/commit/401a79946b034a96b9abff2f3fb5efd6cc9080f3))
* **2d:** unify layout properties ([#355](https://github.com/havenhq/revideo/issues/355)) ([3cae97e](https://github.com/havenhq/revideo/commit/3cae97ea704d0533020fa87326dacadcc037d517)), closes [#352](https://github.com/havenhq/revideo/issues/352)
* **2d:** warn about missing image source ([#817](https://github.com/havenhq/revideo/issues/817)) ([6dcdb5f](https://github.com/havenhq/revideo/commit/6dcdb5f3b83d4860b1557e4745972e0af68f92f3))
* add advanced caching ([#69](https://github.com/havenhq/revideo/issues/69)) ([2a644c9](https://github.com/havenhq/revideo/commit/2a644c9315acfcc5280a5eacc9904df140a61e4f))
* add base class for shapes ([#67](https://github.com/havenhq/revideo/issues/67)) ([d38c172](https://github.com/havenhq/revideo/commit/d38c1724e129c553739cbfc27c4e5cd8f737f067))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add cloning ([#80](https://github.com/havenhq/revideo/issues/80)) ([47d7a0f](https://github.com/havenhq/revideo/commit/47d7a0fa5da9a03d8ed91557db651f6f960e28b1))
* add CodeBlock component based on code-fns to 2D ([#78](https://github.com/havenhq/revideo/issues/78)) ([ad346f1](https://github.com/havenhq/revideo/commit/ad346f118d63b1e321ec315e1c70b925670124a1))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add default renderer ([#63](https://github.com/havenhq/revideo/issues/63)) ([9255490](https://github.com/havenhq/revideo/commit/92554900965fe088538f5e703dbab2fd84f904d7)), closes [#56](https://github.com/havenhq/revideo/issues/56) [#58](https://github.com/havenhq/revideo/issues/58)
* add DEG2RAD and RAD2DEG constants ([#630](https://github.com/havenhq/revideo/issues/630)) ([01801e8](https://github.com/havenhq/revideo/commit/01801e8766058e75a6a020400650fb00f8f430cc))
* add Grid node ([e1f83da](https://github.com/havenhq/revideo/commit/e1f83da1f43d20d392df4acb11e3df9cc457585d))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add middle cardinal point ([#758](https://github.com/havenhq/revideo/issues/758)) ([b036eaf](https://github.com/havenhq/revideo/commit/b036eafc00381831c08267a78cf9d74973f4025a))
* add missing flexbox properties ([#405](https://github.com/havenhq/revideo/issues/405)) ([4e78b4b](https://github.com/havenhq/revideo/commit/4e78b4b2fe4df42ce0a8da6fd41ad38b0104e7f5))
* add missing layout props ([#72](https://github.com/havenhq/revideo/issues/72)) ([f808a56](https://github.com/havenhq/revideo/commit/f808a562b192fd03dba4b0d353284db344d6a80b))
* add node spawners ([#149](https://github.com/havenhq/revideo/issues/149)) ([da18a4e](https://github.com/havenhq/revideo/commit/da18a4e24104022a84ecd6cec1666b520186058f))
* add polyline ([#84](https://github.com/havenhq/revideo/issues/84)) ([4ceaf84](https://github.com/havenhq/revideo/commit/4ceaf842915ac43d81f292c58a4dc73a8d1bb8e9))
* add random number generator ([#116](https://github.com/havenhq/revideo/issues/116)) ([d505312](https://github.com/havenhq/revideo/commit/d5053123eef308c7a2a61d92b6e76c637f4ed0b8)), closes [#14](https://github.com/havenhq/revideo/issues/14)
* add reparent helper ([80b95a9](https://github.com/havenhq/revideo/commit/80b95a9ce89d4a2eeea7e467257486e961602d69))
* add Text and Image components ([#70](https://github.com/havenhq/revideo/issues/70)) ([85c7dcd](https://github.com/havenhq/revideo/commit/85c7dcdb4f8ca2f0bfb03950c85a8d6f6652fcdf))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/havenhq/revideo/issues/9)) ([9e0d67b](https://github.com/havenhq/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* added a theme property to the CodeBlock component ([#279](https://github.com/havenhq/revideo/issues/279)) ([fe34fa8](https://github.com/havenhq/revideo/commit/fe34fa8ebfe66cd356fb1c3d85adedef11e03b45))
* better children and spawners ([#858](https://github.com/havenhq/revideo/issues/858)) ([9b5c23d](https://github.com/havenhq/revideo/commit/9b5c23d2076180cf710656c817369a07b253e3ec))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* convert built-in types to webgl ([#929](https://github.com/havenhq/revideo/issues/929)) ([a0f0b7d](https://github.com/havenhq/revideo/commit/a0f0b7d8996547e1a316097422ec02bddeeccec6))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* **core:** tree shaking ([#523](https://github.com/havenhq/revideo/issues/523)) ([65fec78](https://github.com/havenhq/revideo/commit/65fec7825fda33812b13f57bfeb1d82193a5d190))
* **docs:** fiddle editor ([#542](https://github.com/havenhq/revideo/issues/542)) ([3c68fef](https://github.com/havenhq/revideo/commit/3c68fefdf7bf375ee9345aba7dbf9e5ff35e3c3d))
* export everything from entry points ([#710](https://github.com/havenhq/revideo/issues/710)) ([3c885d9](https://github.com/havenhq/revideo/commit/3c885d9083b52fbbaccf1e2560ae50817949bc52))
* filter reordering ([#119](https://github.com/havenhq/revideo/issues/119)) ([2398d0f](https://github.com/havenhq/revideo/commit/2398d0f9d57f36b47c9c66a988ca5607e9a3a30e))
* implement absolute scale setter ([842079a](https://github.com/havenhq/revideo/commit/842079a6547af4032719c85837df3db7c1c6d30a))
* improve async signals ([#156](https://github.com/havenhq/revideo/issues/156)) ([db27b9d](https://github.com/havenhq/revideo/commit/db27b9d5fb69a88f42afd98c86c4a1cdceb88ea1))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* improve image error handling ([#847](https://github.com/havenhq/revideo/issues/847)) ([db09d53](https://github.com/havenhq/revideo/commit/db09d5305a3c0507b035e3cd347eaa65b23d7d2e))
* introduce basic caching ([#68](https://github.com/havenhq/revideo/issues/68)) ([6420d36](https://github.com/havenhq/revideo/commit/6420d362d0e4ae058f55b6ff6bb2a3a32dec559b))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* merge properties and signals ([#124](https://github.com/havenhq/revideo/issues/124)) ([da3ba83](https://github.com/havenhq/revideo/commit/da3ba83d82ee74f5a5c3631b07597f08cdf9e8e4))
* minor improvements ([403c7c2](https://github.com/havenhq/revideo/commit/403c7c27ad969880a14c498ec6cefb9e7e7b7544))
* minor improvements ([#77](https://github.com/havenhq/revideo/issues/77)) ([7c6e584](https://github.com/havenhq/revideo/commit/7c6e584aca353c9af55f0acb61b32b5f99727dba))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* new animator ([#91](https://github.com/havenhq/revideo/issues/91)) ([d85f2f8](https://github.com/havenhq/revideo/commit/d85f2f8a54c0f8bbfbc451884385f30e5b3ec206))
* new Code node ([#946](https://github.com/havenhq/revideo/issues/946)) ([26e55a3](https://github.com/havenhq/revideo/commit/26e55a37c416fb1313c8aadf40eed2824b45d330))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/havenhq/revideo/issues/33)) ([a6e1bcd](https://github.com/havenhq/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* signal error handling ([#89](https://github.com/havenhq/revideo/issues/89)) ([472ac65](https://github.com/havenhq/revideo/commit/472ac65938b804a6b698c8522ec0c3b6bdbcf1b1))
* simplify size access ([#65](https://github.com/havenhq/revideo/issues/65)) ([3315e64](https://github.com/havenhq/revideo/commit/3315e64641e9778bc48ea3fb707e3c0eeb581dfe))
* simplify size access further ([#66](https://github.com/havenhq/revideo/issues/66)) ([9091a5e](https://github.com/havenhq/revideo/commit/9091a5e05d8fadf72c50832c7c4467ac4424b72c))
* switch to signals ([#64](https://github.com/havenhq/revideo/issues/64)) ([d22d237](https://github.com/havenhq/revideo/commit/d22d23728597e6fa82ea5c5a99a6c0a56819bded))
* transparent video ([#75](https://github.com/havenhq/revideo/issues/75)) ([5f7b909](https://github.com/havenhq/revideo/commit/5f7b9093327cd42de7a1c2933bc54a98cb36daa8))
* turn Layout into node ([#75](https://github.com/havenhq/revideo/issues/75)) ([cdf8dc0](https://github.com/havenhq/revideo/commit/cdf8dc0a35522482dee2dd78a69606b79f52246e))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** scene graph icons ([#914](https://github.com/havenhq/revideo/issues/914)) ([e92ddef](https://github.com/havenhq/revideo/commit/e92ddef34860f5e710ff0f1a310758ec0ca95bcb))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* unify references and signals ([#137](https://github.com/havenhq/revideo/issues/137)) ([063aede](https://github.com/havenhq/revideo/commit/063aede0842f948d2c6704c6edd426e954bb4668))
* upgrade code-fns for new theme options and lazy loading ([#401](https://github.com/havenhq/revideo/issues/401)) ([8965ab1](https://github.com/havenhq/revideo/commit/8965ab1bef8b6ae919c8001d0527f5793293b285)), closes [#396](https://github.com/havenhq/revideo/issues/396) [#322](https://github.com/havenhq/revideo/issues/322)
* use ES modules in fiddles ([#712](https://github.com/havenhq/revideo/issues/712)) ([dbe2ad5](https://github.com/havenhq/revideo/commit/dbe2ad5644219c5a98d38c6557abfb66d793c821))
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))
* world space cache ([#498](https://github.com/havenhq/revideo/issues/498)) ([633e9e1](https://github.com/havenhq/revideo/commit/633e9e140dfbbe397df6ddc1f96ed30782ddce94)), closes [#342](https://github.com/havenhq/revideo/issues/342)


### Reverts

* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))
* feat: upgrade code-fns for new theme options and lazy loading ([#435](https://github.com/havenhq/revideo/issues/435)) ([3f5e439](https://github.com/havenhq/revideo/commit/3f5e43968f7add7c6322c9c8358d3b6fc178c2fe))


### BREAKING CHANGES

* multiple name changes

To avoid collisions, names of certain classes have changed:
- `Text => Txt`
- `Image => Img`
- `Rect (type) => BBox`

Cache related methods of `Node` have changed:
- `getCacheRect => getCacheBBox`
- `cacheRect => cacheBBox`
- `fullCacheRect => fullCacheBBox`

The `CodeBlock` property has changed:
- `CodeBlock.selectionOpacity => CodeBlock.unselectedOpacity`
* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
* remove legacy package





# Change Log

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 0.2.13 (2024-04-24)


### Bug Fixes

* **2d:** account for offset in cardinal points ([#883](https://github.com/havenhq/revideo/issues/883)) ([24da258](https://github.com/havenhq/revideo/commit/24da258f5937087b363eeb9146a9d22747b02e70)), closes [#882](https://github.com/havenhq/revideo/issues/882)
* **2d:** account for spawners in scene graph ([#935](https://github.com/havenhq/revideo/issues/935)) ([ca325f5](https://github.com/havenhq/revideo/commit/ca325f5ad0ae987e76106f5e65fef3ed7b3ca08d))
* **2d:** add missing Curve properties to Circle ([#805](https://github.com/havenhq/revideo/issues/805)) ([38c7900](https://github.com/havenhq/revideo/commit/38c79000403d7c3c99dde9e4c825a448d5f55054))
* **2d:** add missing Fragment export ([#553](https://github.com/havenhq/revideo/issues/553)) ([229afb4](https://github.com/havenhq/revideo/commit/229afb4fe7d95f09b480ab4a813f8dff549f381f))
* **2d:** add missing jsx dev runtime ([#547](https://github.com/havenhq/revideo/issues/547)) ([d61cb7d](https://github.com/havenhq/revideo/commit/d61cb7dd24ab66ae17d5bd6f5ccb34c4fd1e7569)), closes [#545](https://github.com/havenhq/revideo/issues/545)
* **2d:** add missing middle property ([#891](https://github.com/havenhq/revideo/issues/891)) ([61e2e96](https://github.com/havenhq/revideo/commit/61e2e96e3b8f37a68ebdddb432baba04858fd4f3))
* **2d:** add missing shape export ([#111](https://github.com/havenhq/revideo/issues/111)) ([02a1fa7](https://github.com/havenhq/revideo/commit/02a1fa7ea62155e498809f2e57ff29a18c82ac12))
* **2d:** better error handling ([#524](https://github.com/havenhq/revideo/issues/524)) ([b7475ba](https://github.com/havenhq/revideo/commit/b7475ba5ff35d37ee198577d1205d6ecd6fd2092))
* **2d:** calculate arrow orientations for curves correctly ([#597](https://github.com/havenhq/revideo/issues/597)) ([1626811](https://github.com/havenhq/revideo/commit/1626811ec4cd1bd2a3d43e393ced40a7da462c3a))
* **2d:** calculate Txt cache bbox from contents ([#836](https://github.com/havenhq/revideo/issues/836)) ([33e1a12](https://github.com/havenhq/revideo/commit/33e1a1296f21d26e9ed45ae92132825dca17054d)), closes [#465](https://github.com/havenhq/revideo/issues/465)
* **2d:** clone size correctly ([#562](https://github.com/havenhq/revideo/issues/562)) ([cdd3df1](https://github.com/havenhq/revideo/commit/cdd3df1bff25b04b905e289264831d8d328caaab)), closes [#559](https://github.com/havenhq/revideo/issues/559)
* **2d:** correct layout defaults ([#442](https://github.com/havenhq/revideo/issues/442)) ([c116c35](https://github.com/havenhq/revideo/commit/c116c355179ba3b2487634fb82b9a5bc2ea266bf))
* **2d:** correctly append Txt nodes to view ([#644](https://github.com/havenhq/revideo/issues/644)) ([24bb51a](https://github.com/havenhq/revideo/commit/24bb51aa04778c33ce327926b27332efaa554e5f))
* **2d:** correctly support external image urls ([#678](https://github.com/havenhq/revideo/issues/678)) ([a08556b](https://github.com/havenhq/revideo/commit/a08556b6e2822a55db593f610ea4dd6cb8494adb)), closes [#677](https://github.com/havenhq/revideo/issues/677)
* **2d:** fix cache bbox for lines ([#467](https://github.com/havenhq/revideo/issues/467)) ([9fd1444](https://github.com/havenhq/revideo/commit/9fd144417bb0b6301da6c522a988775f5ff142ac)), closes [#466](https://github.com/havenhq/revideo/issues/466)
* **2d:** fix circle segment ([#557](https://github.com/havenhq/revideo/issues/557)) ([adebff4](https://github.com/havenhq/revideo/commit/adebff492b76a512d79151b00adf1b383d25c5b5))
* **2d:** fix CodeBlock types ([#563](https://github.com/havenhq/revideo/issues/563)) ([25160fa](https://github.com/havenhq/revideo/commit/25160fa4d92af88429110356e42f6e3b4f88a90f)), closes [#560](https://github.com/havenhq/revideo/issues/560)
* **2d:** fix curve arrow alignment when animating start signal ([#615](https://github.com/havenhq/revideo/issues/615)) ([2fefc40](https://github.com/havenhq/revideo/commit/2fefc4026050159ba204c7629832ad83e8bfa51b))
* **2d:** fix cyclic dependency in cardinal points ([#645](https://github.com/havenhq/revideo/issues/645)) ([def23f9](https://github.com/havenhq/revideo/commit/def23f925ee7200c8740ecd51c7f6117d67b6ef8))
* **2d:** fix font ligatures in CodeBlock ([#231](https://github.com/havenhq/revideo/issues/231)) ([11ee3fe](https://github.com/havenhq/revideo/commit/11ee3fef5ad878313cf19833df6881333ced4dac))
* **2d:** fix Gradient and Pattern signals ([#376](https://github.com/havenhq/revideo/issues/376)) ([6e0dc8a](https://github.com/havenhq/revideo/commit/6e0dc8af8d19f93fd6a42addca2b3a2958b4dd33))
* **2d:** fix height when tweening text ([#905](https://github.com/havenhq/revideo/issues/905)) ([1c6a796](https://github.com/havenhq/revideo/commit/1c6a7965be137c1ab69741cdd1e9aaa6df4208c4))
* **2d:** fix import order ([#94](https://github.com/havenhq/revideo/issues/94)) ([bcc0bcf](https://github.com/havenhq/revideo/commit/bcc0bcffae47855bd8f7ab06454aaebe93c4aa24)), closes [#76](https://github.com/havenhq/revideo/issues/76)
* **2d:** fix initial value of endOffset ([#433](https://github.com/havenhq/revideo/issues/433)) ([9fe82b3](https://github.com/havenhq/revideo/commit/9fe82b3d21ba0150a2378e541a4652ca707c2d15))
* **2d:** fix layout calculation for nodes not explicitly added to view ([#331](https://github.com/havenhq/revideo/issues/331)) ([528e2d5](https://github.com/havenhq/revideo/commit/528e2d5a0abec99819e022d2848b256ece9f869a))
* **2d:** fix letterSpacing ([#448](https://github.com/havenhq/revideo/issues/448)) ([bb5ffc4](https://github.com/havenhq/revideo/commit/bb5ffc48efa82b9db818e8e52aa35e9c2ad8ce89)), closes [#447](https://github.com/havenhq/revideo/issues/447)
* **2d:** fix line arc length ([#503](https://github.com/havenhq/revideo/issues/503)) ([4f1cd59](https://github.com/havenhq/revideo/commit/4f1cd59e6bcba0b16b36be88b28a60ae46d4d9ab)), closes [#497](https://github.com/havenhq/revideo/issues/497)
* **2d:** fix Line cache ([#232](https://github.com/havenhq/revideo/issues/232)) ([a953b64](https://github.com/havenhq/revideo/commit/a953b64540c020657845efc84d4179142a7a0974)), closes [#205](https://github.com/havenhq/revideo/issues/205)
* **2d:** fix line jitter under certain conditions ([#863](https://github.com/havenhq/revideo/issues/863)) ([fb110a2](https://github.com/havenhq/revideo/commit/fb110a2f3583fc040bf2c39560934162bd146d9b))
* **2d:** fix Line overview crashing ([#142](https://github.com/havenhq/revideo/issues/142)) ([6bd5fd9](https://github.com/havenhq/revideo/commit/6bd5fd941e583e44f5d920ecd20215efb1eed58a))
* **2d:** fix nested cache canvases ([#554](https://github.com/havenhq/revideo/issues/554)) ([e601441](https://github.com/havenhq/revideo/commit/e6014413b215af6fb1a7953f8db83893d4025f0b)), closes [#551](https://github.com/havenhq/revideo/issues/551)
* **2d:** fix package.json entry ([#720](https://github.com/havenhq/revideo/issues/720)) ([12e9bf6](https://github.com/havenhq/revideo/commit/12e9bf6f40ab7afc02e2f55260544f3864920ded))
* **2d:** fix signal initialization ([#382](https://github.com/havenhq/revideo/issues/382)) ([ea36e79](https://github.com/havenhq/revideo/commit/ea36e791a20bfd1b491ffa9917be686c51bc3899))
* **2d:** fix tweening cardinal points ([#829](https://github.com/havenhq/revideo/issues/829)) ([cc16737](https://github.com/havenhq/revideo/commit/cc16737cd59081582fbb488a880e8d3c11c14918))
* **2d:** fix Txt decorators ([#526](https://github.com/havenhq/revideo/issues/526)) ([25b30ed](https://github.com/havenhq/revideo/commit/25b30ed3861f46d72147335480912ce5f564be79))
* **2d:** fix types ([#659](https://github.com/havenhq/revideo/issues/659)) ([a32af29](https://github.com/havenhq/revideo/commit/a32af29ef3bd2e5dbf08697ebfee53230fceadc1))
* **2d:** format whitespaces according to HTML ([#372](https://github.com/havenhq/revideo/issues/372)) ([83fb565](https://github.com/havenhq/revideo/commit/83fb565742d98f060c0400c8cbaf9961b69f34d0)), closes [#370](https://github.com/havenhq/revideo/issues/370)
* **2d:** handle division by zero in lines ([#407](https://github.com/havenhq/revideo/issues/407)) ([a17871a](https://github.com/havenhq/revideo/commit/a17871a2ce63dd5bb32bc719037327c4e9dde217))
* **2d:** handle floating point errors in acos ([#381](https://github.com/havenhq/revideo/issues/381)) ([5bca8fd](https://github.com/havenhq/revideo/commit/5bca8fd0bbdcf28f2793c124b7d6b0afd560c4b8))
* **2d:** handle lines with no points ([#233](https://github.com/havenhq/revideo/issues/233)) ([8108474](https://github.com/havenhq/revideo/commit/81084743dfad7b6419760796fda825047909d4d4)), closes [#212](https://github.com/havenhq/revideo/issues/212)
* **2d:** ignore children with disabled layout ([#669](https://github.com/havenhq/revideo/issues/669)) ([b98c462](https://github.com/havenhq/revideo/commit/b98c4625c3634495e86ca23d19355035e457db06)), closes [#580](https://github.com/havenhq/revideo/issues/580)
* **2d:** improve Curve hitbox ([#778](https://github.com/havenhq/revideo/issues/778)) ([8af723c](https://github.com/havenhq/revideo/commit/8af723c0322de39d2defe0363bba03f4f9542f08))
* **2d:** improve Rect radius ([#221](https://github.com/havenhq/revideo/issues/221)) ([3437e42](https://github.com/havenhq/revideo/commit/3437e42713a3f4a8d44d246ee01e2eb23b61e06a)), closes [#207](https://github.com/havenhq/revideo/issues/207)
* **2d:** make Text respect textWrap=pre ([#287](https://github.com/havenhq/revideo/issues/287)) ([cb07f4b](https://github.com/havenhq/revideo/commit/cb07f4bdf07edc8a086b934ca5ab769682b9a010))
* **2d:** minor fixes ([#915](https://github.com/havenhq/revideo/issues/915)) ([63cfc9e](https://github.com/havenhq/revideo/commit/63cfc9e033f2c2ac6d6ed2a0d8f615fcf642ab59))
* **2d:** point arrow heads in correct direction ([#792](https://github.com/havenhq/revideo/issues/792)) ([52ed52e](https://github.com/havenhq/revideo/commit/52ed52e963cc69a066a0353680acaca35b9c937a)), closes [#783](https://github.com/havenhq/revideo/issues/783)
* **2d:** prevent src warnings in Icon and Latex ([#899](https://github.com/havenhq/revideo/issues/899)) ([5eebab7](https://github.com/havenhq/revideo/commit/5eebab71d8061e233872e049e77b847f9fd077a1))
* **2d:** remove circular dependencies ([#780](https://github.com/havenhq/revideo/issues/780)) ([cdf3af5](https://github.com/havenhq/revideo/commit/cdf3af500a58151ee3549c6e728751aab3e6f75c))
* **2d:** smoothly play videos when presenting ([#600](https://github.com/havenhq/revideo/issues/600)) ([294fe6a](https://github.com/havenhq/revideo/commit/294fe6ac056ab074c77214fcf9035f53fac9258c)), closes [#578](https://github.com/havenhq/revideo/issues/578)
* **2d:** some signal setters not returning owners ([#143](https://github.com/havenhq/revideo/issues/143)) ([09ab7f9](https://github.com/havenhq/revideo/commit/09ab7f96afcaae608399a653c0b4878ba9b467d4))
* **2d:** stop code highlighting from jumping ([#230](https://github.com/havenhq/revideo/issues/230)) ([67ef1c4](https://github.com/havenhq/revideo/commit/67ef1c497056dd1f8f9e20d1d7fc1af03ec3849e))
* **2d:** stop mutating children ([#903](https://github.com/havenhq/revideo/issues/903)) ([f9552a8](https://github.com/havenhq/revideo/commit/f9552a8658ccde6c7b2466ad40b12cf28c6ec805))
* **2d:** switch iframes to ShadowDOM ([#90](https://github.com/havenhq/revideo/issues/90)) ([86176be](https://github.com/havenhq/revideo/commit/86176be055c08aba59272afcda00ed586f6c7ad6))
* **2d:** textDirection property for RTL/LTR text ([#404](https://github.com/havenhq/revideo/issues/404)) ([f240b1b](https://github.com/havenhq/revideo/commit/f240b1bd140a884f6901b7cfcb97ce3e9ce4b48d))
* **2d:** textWrap not working in Firefox ([#541](https://github.com/havenhq/revideo/issues/541)) ([f10e057](https://github.com/havenhq/revideo/commit/f10e057fd13ed9dcc70ebc0ca63963708ec159c8)), closes [#517](https://github.com/havenhq/revideo/issues/517)
* **2d:** wait for reused async resources ([#599](https://github.com/havenhq/revideo/issues/599)) ([280e065](https://github.com/havenhq/revideo/commit/280e065fe69e9a744b7b12eb4609e7d87f76bb63)), closes [#593](https://github.com/havenhq/revideo/issues/593)
* account for italic fonts in cache ([#968](https://github.com/havenhq/revideo/issues/968)) ([abb0906](https://github.com/havenhq/revideo/commit/abb090695c4257d9877d0cb11954093c49149ddc)), closes [#934](https://github.com/havenhq/revideo/issues/934)
* await font load before drawing ([#31](https://github.com/havenhq/revideo/issues/31)) ([cbfb5cb](https://github.com/havenhq/revideo/commit/cbfb5cb136d85a657c99187da166b64aae8be3a1))
* await font load without throwing async node error ([#69](https://github.com/havenhq/revideo/issues/69)) ([fddebe6](https://github.com/havenhq/revideo/commit/fddebe60a610af718c880b9e198eebe8555ea9a5))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* ffmpeg bug when rendering multiple times ([#62](https://github.com/havenhq/revideo/issues/62)) ([04cdc5b](https://github.com/havenhq/revideo/commit/04cdc5b22a65e14669a127d98c175177e2ec6f14))
* fix compound property setter ([#218](https://github.com/havenhq/revideo/issues/218)) ([6cd1b95](https://github.com/havenhq/revideo/commit/6cd1b952df950554eb637c9f8e82947c415d00c5)), closes [#208](https://github.com/havenhq/revideo/issues/208) [#210](https://github.com/havenhq/revideo/issues/210)
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* plug memory leaks ([#385](https://github.com/havenhq/revideo/issues/385)) ([de0af00](https://github.com/havenhq/revideo/commit/de0af00a7d2e019e2a933791c62b7901755be7b0))
* prevent consumePromises from halting ([#657](https://github.com/havenhq/revideo/issues/657)) ([363a189](https://github.com/havenhq/revideo/commit/363a189b0c7f5926c9d5ae00b58b48e8ed4d9b48))
* previous scene being rendered twice ([#97](https://github.com/havenhq/revideo/issues/97)) ([90205bd](https://github.com/havenhq/revideo/commit/90205bdc1a086abe5f73b04cb4616c6af5ec4377))
* restrict size of cache canvas ([#544](https://github.com/havenhq/revideo/issues/544)) ([49ec554](https://github.com/havenhq/revideo/commit/49ec55490718e503d9a39437ae13c189dc4fe9ea))
* support color to null tweening ([#387](https://github.com/havenhq/revideo/issues/387)) ([02e9f22](https://github.com/havenhq/revideo/commit/02e9f22027a1c3a85ffcc259aeca913318fb6f54))
* support legacy imports again ([#868](https://github.com/havenhq/revideo/issues/868)) ([77c4e2e](https://github.com/havenhq/revideo/commit/77c4e2eeb8b0f73bdef1f72e3d81f34c79748929))
* support multiple async players ([#450](https://github.com/havenhq/revideo/issues/450)) ([d7ec469](https://github.com/havenhq/revideo/commit/d7ec469e747eefd909f4dd59dd713f5d86308222)), closes [#434](https://github.com/havenhq/revideo/issues/434)
* typo on codeblock remove comments ([#368](https://github.com/havenhq/revideo/issues/368)) ([2025adc](https://github.com/havenhq/revideo/commit/2025adc6e7aa11d81b6f5f6989e8eae18cf86cb7))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Code Refactoring

* introduce improved names ([#425](https://github.com/havenhq/revideo/issues/425)) ([4a2188d](https://github.com/havenhq/revideo/commit/4a2188d339587fa658b2134befc3fe63c835c5d7))
* remove legacy package ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))


### Features

* **2d:** add antialiased signal to Shape ([#282](https://github.com/havenhq/revideo/issues/282)) ([7c6905d](https://github.com/havenhq/revideo/commit/7c6905d72c6c2f49e10f0a80704c0afe3504d01b))
* **2d:** add arcLength helper methods to Curve ([#627](https://github.com/havenhq/revideo/issues/627)) ([3c7546e](https://github.com/havenhq/revideo/commit/3c7546e7a509deb6fff8f669c3df0a69b492bd2e))
* **2d:** add Bézier nodes ([#603](https://github.com/havenhq/revideo/issues/603)) ([9841cfd](https://github.com/havenhq/revideo/commit/9841cfdc3947ca4e6d6e42ed21eae88e855f855d))
* **2d:** add cardinal points ([#636](https://github.com/havenhq/revideo/issues/636)) ([2136a25](https://github.com/havenhq/revideo/commit/2136a2558a9ed968ee505e4e5cce33d989dfdc13)), closes [#391](https://github.com/havenhq/revideo/issues/391)
* **2d:** add closed property for circle ([#378](https://github.com/havenhq/revideo/issues/378)) ([62a9605](https://github.com/havenhq/revideo/commit/62a9605d4c54e7bf2d2d44d47bf769f5b27378a5))
* **2d:** add completion property for curves ([#635](https://github.com/havenhq/revideo/issues/635)) ([6577d6d](https://github.com/havenhq/revideo/commit/6577d6ddfaf779ba02f3862d2a357166138b99ca))
* **2d:** add default computed values for signals ([#259](https://github.com/havenhq/revideo/issues/259)) ([18f61a6](https://github.com/havenhq/revideo/commit/18f61a668420dec8afba52d52a6557e7a7919ba2))
* **2d:** add Icon Component ([#306](https://github.com/havenhq/revideo/issues/306)) ([3479631](https://github.com/havenhq/revideo/commit/3479631ef34e39f90a8d8de441317672be1840d9)), closes [#305](https://github.com/havenhq/revideo/issues/305)
* **2d:** add LaTeX component ([#228](https://github.com/havenhq/revideo/issues/228)) ([4c26d2a](https://github.com/havenhq/revideo/commit/4c26d2aaf0c697486639aa917cd5c585d3d0ea74))
* **2d:** add line counter for CodeBlock ([#802](https://github.com/havenhq/revideo/issues/802)) ([c3f9676](https://github.com/havenhq/revideo/commit/c3f9676b6984731a09a44ab0b1fcfc226975fa08))
* **2d:** add methods for rearranging children ([#81](https://github.com/havenhq/revideo/issues/81)) ([63f6c1a](https://github.com/havenhq/revideo/commit/63f6c1aa51ac4ecd093151c8cd30910f2e72bcac))
* **2d:** add moveBelow, moveAbove and moveTo methods to Node ([#365](https://github.com/havenhq/revideo/issues/365)) ([16752a3](https://github.com/havenhq/revideo/commit/16752a3b8ae7461b33d6208a9675729f374e8324))
* **2d:** add option for preformatted text ([#147](https://github.com/havenhq/revideo/issues/147)) ([989be53](https://github.com/havenhq/revideo/commit/989be532d86642e1125bb7fa62a801b09c1b8f26))
* **2d:** add Path component ([#700](https://github.com/havenhq/revideo/issues/700)) ([2128b6b](https://github.com/havenhq/revideo/commit/2128b6bf871cabe19e1abc749f18945c78c01f84))
* **2d:** add playbackRate signal to Video component ([#831](https://github.com/havenhq/revideo/issues/831)) ([5902b82](https://github.com/havenhq/revideo/commit/5902b824b36400876be0ee970e2c6211299faf21)), closes [#711](https://github.com/havenhq/revideo/issues/711)
* **2d:** add Polygon component ([#463](https://github.com/havenhq/revideo/issues/463)) ([15adb3e](https://github.com/havenhq/revideo/commit/15adb3e312a4998b44c0b9c5fe5b5236f51c71c9)), closes [#455](https://github.com/havenhq/revideo/issues/455)
* **2d:** add querying helpers ([#852](https://github.com/havenhq/revideo/issues/852)) ([614de6b](https://github.com/havenhq/revideo/commit/614de6bd8542322d1db4b123b875f6fad85cc4eb))
* **2d:** add Ray node ([#628](https://github.com/havenhq/revideo/issues/628)) ([649447c](https://github.com/havenhq/revideo/commit/649447cd5f2089afc64cc7bd4b0276e69d1e9a30))
* **2d:** add save and restore methods to nodes ([#406](https://github.com/havenhq/revideo/issues/406)) ([870e194](https://github.com/havenhq/revideo/commit/870e1947d97382bc6d82857c077140bbef7cf7e8))
* **2d:** add skew property ([#803](https://github.com/havenhq/revideo/issues/803)) ([eff7c7b](https://github.com/havenhq/revideo/commit/eff7c7be0c013139140b398350242457736d48c7))
* **2d:** add smooth corners and sharpness to rect ([#310](https://github.com/havenhq/revideo/issues/310)) ([f7fbefd](https://github.com/havenhq/revideo/commit/f7fbefd27f7f6972cfb5a45a68e5d0aed9593ae4))
* **2d:** add spline node ([#514](https://github.com/havenhq/revideo/issues/514)) ([3ce2111](https://github.com/havenhq/revideo/commit/3ce2111309e698450dc4c6e2ad47024995863e73))
* **2d:** add start and end signals to Grid node ([#761](https://github.com/havenhq/revideo/issues/761)) ([e37ea80](https://github.com/havenhq/revideo/commit/e37ea806b94e93c6324d8e1b502468925b731e8e))
* **2d:** add SVG component ([#763](https://github.com/havenhq/revideo/issues/763)) ([8eadc11](https://github.com/havenhq/revideo/commit/8eadc11937d4201545894f2f5b204d477a3f9094))
* **2d:** add textAlign property ([#451](https://github.com/havenhq/revideo/issues/451)) ([3d15825](https://github.com/havenhq/revideo/commit/3d15825f3cc5a35ba081a31510741b824f3bc6ab)), closes [#303](https://github.com/havenhq/revideo/issues/303)
* **2d:** add video component property getter ([#240](https://github.com/havenhq/revideo/issues/240)) ([59de5ab](https://github.com/havenhq/revideo/commit/59de5ab2c089589773a2f9ad7588eda7d72693a7))
* **2d:** add z-index property to nodes ([#398](https://github.com/havenhq/revideo/issues/398)) ([4280af3](https://github.com/havenhq/revideo/commit/4280af3b4b7bd5970fe5e743949a0fcca2c314f3))
* **2d:** always clip images and videos ([#773](https://github.com/havenhq/revideo/issues/773)) ([3938c59](https://github.com/havenhq/revideo/commit/3938c59394bfc42e5562504687d783ff306d7d32))
* **2d:** clamp opacity value between 0 and 1 ([#835](https://github.com/havenhq/revideo/issues/835)) ([c54b2f8](https://github.com/havenhq/revideo/commit/c54b2f837a8e8b872df3610f4cc6caa94a728500)), closes [#830](https://github.com/havenhq/revideo/issues/830)
* **2d:** code bounding box helpers ([#948](https://github.com/havenhq/revideo/issues/948)) ([0ffd56f](https://github.com/havenhq/revideo/commit/0ffd56f5f8076913e687e5b908311aa7832d8b7b))
* **2d:** code range helpers ([#947](https://github.com/havenhq/revideo/issues/947)) ([044c9ac](https://github.com/havenhq/revideo/commit/044c9acd6ee7e4e337fb4d51286126f583a8da6f))
* **2d:** code selection and modification ([#163](https://github.com/havenhq/revideo/issues/163)) ([e8e884a](https://github.com/havenhq/revideo/commit/e8e884a1a5574425dbf15272718911c12cfa2327))
* **2d:** construct lines using signals ([#133](https://github.com/havenhq/revideo/issues/133)) ([2968a24](https://github.com/havenhq/revideo/commit/2968a2426564469fb4f4343fe71a6d30e95361f2))
* **2d:** immediate restore ([#736](https://github.com/havenhq/revideo/issues/736)) ([634d51d](https://github.com/havenhq/revideo/commit/634d51d2afe8a536673c364874f8f3d1a450b846))
* **2d:** improve property declarations ([27e7d26](https://github.com/havenhq/revideo/commit/27e7d267ee91bf1e8ca79686b6ec31347f9f4d41))
* **2d:** improve Rect corner radius ([#120](https://github.com/havenhq/revideo/issues/120)) ([b471fe0](https://github.com/havenhq/revideo/commit/b471fe0e37c0a426d3af8299c9c3c22539e7df05))
* **2d:** improve Video node ([#601](https://github.com/havenhq/revideo/issues/601)) ([3801d83](https://github.com/havenhq/revideo/commit/3801d83415bbdeeee5d6d53d0c18e5d9e78fba56))
* **2d:** make `View2D` extend `Rect` ([#379](https://github.com/havenhq/revideo/issues/379)) ([93db5fc](https://github.com/havenhq/revideo/commit/93db5fc41617c0902e85fda90fbfc930c2b4634b))
* **2d:** make Circle extend Curve ([#771](https://github.com/havenhq/revideo/issues/771)) ([4c8cf19](https://github.com/havenhq/revideo/commit/4c8cf1954093958eac507921dc18f67dd64b2052))
* **2d:** make Polygon extend Curve ([#961](https://github.com/havenhq/revideo/issues/961)) ([739c9fc](https://github.com/havenhq/revideo/commit/739c9fccbc101f8b2eed680a11c00f317fdc4dd3))
* **2d:** make Rect extend Curve ([#759](https://github.com/havenhq/revideo/issues/759)) ([9810212](https://github.com/havenhq/revideo/commit/9810212648824b9a2fa2ecd6b597e3319d20b325))
* **2d:** nested Txt nodes ([#861](https://github.com/havenhq/revideo/issues/861)) ([f2786d0](https://github.com/havenhq/revideo/commit/f2786d0cd0d06065ca1e9eb9f6b4c11a74b6c283)), closes [#540](https://github.com/havenhq/revideo/issues/540)
* **2d:** simplify layout prop ([c24cb12](https://github.com/havenhq/revideo/commit/c24cb12a22b7c85fdfb051917fa9ee1e0911717c))
* **2d:** support HMR for images ([#641](https://github.com/havenhq/revideo/issues/641)) ([cf17520](https://github.com/havenhq/revideo/commit/cf17520aa8ddf19dcfc419c63cf7255892d45b71))
* **2d:** support letter spacing in Code ([#955](https://github.com/havenhq/revideo/issues/955)) ([2a87c37](https://github.com/havenhq/revideo/commit/2a87c37c832de86c4b524b33fd68806627daec8b))
* **2d:** support tweening in applyState ([#859](https://github.com/havenhq/revideo/issues/859)) ([b7ed2e2](https://github.com/havenhq/revideo/commit/b7ed2e24773227e5b576ff056eb23de9b9ff1676))
* **2d:** support tweening Line points ([#853](https://github.com/havenhq/revideo/issues/853)) ([4bf37d7](https://github.com/havenhq/revideo/commit/4bf37d74d2e4bb9d9cc034aff121a32da9a6d146))
* **2d:** unify desired sizes ([#118](https://github.com/havenhq/revideo/issues/118)) ([401a799](https://github.com/havenhq/revideo/commit/401a79946b034a96b9abff2f3fb5efd6cc9080f3))
* **2d:** unify layout properties ([#355](https://github.com/havenhq/revideo/issues/355)) ([3cae97e](https://github.com/havenhq/revideo/commit/3cae97ea704d0533020fa87326dacadcc037d517)), closes [#352](https://github.com/havenhq/revideo/issues/352)
* **2d:** warn about missing image source ([#817](https://github.com/havenhq/revideo/issues/817)) ([6dcdb5f](https://github.com/havenhq/revideo/commit/6dcdb5f3b83d4860b1557e4745972e0af68f92f3))
* add advanced caching ([#69](https://github.com/havenhq/revideo/issues/69)) ([2a644c9](https://github.com/havenhq/revideo/commit/2a644c9315acfcc5280a5eacc9904df140a61e4f))
* add base class for shapes ([#67](https://github.com/havenhq/revideo/issues/67)) ([d38c172](https://github.com/havenhq/revideo/commit/d38c1724e129c553739cbfc27c4e5cd8f737f067))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add cloning ([#80](https://github.com/havenhq/revideo/issues/80)) ([47d7a0f](https://github.com/havenhq/revideo/commit/47d7a0fa5da9a03d8ed91557db651f6f960e28b1))
* add CodeBlock component based on code-fns to 2D ([#78](https://github.com/havenhq/revideo/issues/78)) ([ad346f1](https://github.com/havenhq/revideo/commit/ad346f118d63b1e321ec315e1c70b925670124a1))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add default renderer ([#63](https://github.com/havenhq/revideo/issues/63)) ([9255490](https://github.com/havenhq/revideo/commit/92554900965fe088538f5e703dbab2fd84f904d7)), closes [#56](https://github.com/havenhq/revideo/issues/56) [#58](https://github.com/havenhq/revideo/issues/58)
* add DEG2RAD and RAD2DEG constants ([#630](https://github.com/havenhq/revideo/issues/630)) ([01801e8](https://github.com/havenhq/revideo/commit/01801e8766058e75a6a020400650fb00f8f430cc))
* add Grid node ([e1f83da](https://github.com/havenhq/revideo/commit/e1f83da1f43d20d392df4acb11e3df9cc457585d))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add middle cardinal point ([#758](https://github.com/havenhq/revideo/issues/758)) ([b036eaf](https://github.com/havenhq/revideo/commit/b036eafc00381831c08267a78cf9d74973f4025a))
* add missing flexbox properties ([#405](https://github.com/havenhq/revideo/issues/405)) ([4e78b4b](https://github.com/havenhq/revideo/commit/4e78b4b2fe4df42ce0a8da6fd41ad38b0104e7f5))
* add missing layout props ([#72](https://github.com/havenhq/revideo/issues/72)) ([f808a56](https://github.com/havenhq/revideo/commit/f808a562b192fd03dba4b0d353284db344d6a80b))
* add node spawners ([#149](https://github.com/havenhq/revideo/issues/149)) ([da18a4e](https://github.com/havenhq/revideo/commit/da18a4e24104022a84ecd6cec1666b520186058f))
* add polyline ([#84](https://github.com/havenhq/revideo/issues/84)) ([4ceaf84](https://github.com/havenhq/revideo/commit/4ceaf842915ac43d81f292c58a4dc73a8d1bb8e9))
* add random number generator ([#116](https://github.com/havenhq/revideo/issues/116)) ([d505312](https://github.com/havenhq/revideo/commit/d5053123eef308c7a2a61d92b6e76c637f4ed0b8)), closes [#14](https://github.com/havenhq/revideo/issues/14)
* add reparent helper ([80b95a9](https://github.com/havenhq/revideo/commit/80b95a9ce89d4a2eeea7e467257486e961602d69))
* add Text and Image components ([#70](https://github.com/havenhq/revideo/issues/70)) ([85c7dcd](https://github.com/havenhq/revideo/commit/85c7dcdb4f8ca2f0bfb03950c85a8d6f6652fcdf))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/havenhq/revideo/issues/9)) ([9e0d67b](https://github.com/havenhq/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* added a theme property to the CodeBlock component ([#279](https://github.com/havenhq/revideo/issues/279)) ([fe34fa8](https://github.com/havenhq/revideo/commit/fe34fa8ebfe66cd356fb1c3d85adedef11e03b45))
* better children and spawners ([#858](https://github.com/havenhq/revideo/issues/858)) ([9b5c23d](https://github.com/havenhq/revideo/commit/9b5c23d2076180cf710656c817369a07b253e3ec))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* convert built-in types to webgl ([#929](https://github.com/havenhq/revideo/issues/929)) ([a0f0b7d](https://github.com/havenhq/revideo/commit/a0f0b7d8996547e1a316097422ec02bddeeccec6))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* **core:** tree shaking ([#523](https://github.com/havenhq/revideo/issues/523)) ([65fec78](https://github.com/havenhq/revideo/commit/65fec7825fda33812b13f57bfeb1d82193a5d190))
* **docs:** fiddle editor ([#542](https://github.com/havenhq/revideo/issues/542)) ([3c68fef](https://github.com/havenhq/revideo/commit/3c68fefdf7bf375ee9345aba7dbf9e5ff35e3c3d))
* export everything from entry points ([#710](https://github.com/havenhq/revideo/issues/710)) ([3c885d9](https://github.com/havenhq/revideo/commit/3c885d9083b52fbbaccf1e2560ae50817949bc52))
* filter reordering ([#119](https://github.com/havenhq/revideo/issues/119)) ([2398d0f](https://github.com/havenhq/revideo/commit/2398d0f9d57f36b47c9c66a988ca5607e9a3a30e))
* implement absolute scale setter ([842079a](https://github.com/havenhq/revideo/commit/842079a6547af4032719c85837df3db7c1c6d30a))
* improve async signals ([#156](https://github.com/havenhq/revideo/issues/156)) ([db27b9d](https://github.com/havenhq/revideo/commit/db27b9d5fb69a88f42afd98c86c4a1cdceb88ea1))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* improve image error handling ([#847](https://github.com/havenhq/revideo/issues/847)) ([db09d53](https://github.com/havenhq/revideo/commit/db09d5305a3c0507b035e3cd347eaa65b23d7d2e))
* introduce basic caching ([#68](https://github.com/havenhq/revideo/issues/68)) ([6420d36](https://github.com/havenhq/revideo/commit/6420d362d0e4ae058f55b6ff6bb2a3a32dec559b))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* merge properties and signals ([#124](https://github.com/havenhq/revideo/issues/124)) ([da3ba83](https://github.com/havenhq/revideo/commit/da3ba83d82ee74f5a5c3631b07597f08cdf9e8e4))
* minor improvements ([403c7c2](https://github.com/havenhq/revideo/commit/403c7c27ad969880a14c498ec6cefb9e7e7b7544))
* minor improvements ([#77](https://github.com/havenhq/revideo/issues/77)) ([7c6e584](https://github.com/havenhq/revideo/commit/7c6e584aca353c9af55f0acb61b32b5f99727dba))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* new animator ([#91](https://github.com/havenhq/revideo/issues/91)) ([d85f2f8](https://github.com/havenhq/revideo/commit/d85f2f8a54c0f8bbfbc451884385f30e5b3ec206))
* new Code node ([#946](https://github.com/havenhq/revideo/issues/946)) ([26e55a3](https://github.com/havenhq/revideo/commit/26e55a37c416fb1313c8aadf40eed2824b45d330))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/havenhq/revideo/issues/33)) ([a6e1bcd](https://github.com/havenhq/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* signal error handling ([#89](https://github.com/havenhq/revideo/issues/89)) ([472ac65](https://github.com/havenhq/revideo/commit/472ac65938b804a6b698c8522ec0c3b6bdbcf1b1))
* simplify size access ([#65](https://github.com/havenhq/revideo/issues/65)) ([3315e64](https://github.com/havenhq/revideo/commit/3315e64641e9778bc48ea3fb707e3c0eeb581dfe))
* simplify size access further ([#66](https://github.com/havenhq/revideo/issues/66)) ([9091a5e](https://github.com/havenhq/revideo/commit/9091a5e05d8fadf72c50832c7c4467ac4424b72c))
* switch to signals ([#64](https://github.com/havenhq/revideo/issues/64)) ([d22d237](https://github.com/havenhq/revideo/commit/d22d23728597e6fa82ea5c5a99a6c0a56819bded))
* turn Layout into node ([#75](https://github.com/havenhq/revideo/issues/75)) ([cdf8dc0](https://github.com/havenhq/revideo/commit/cdf8dc0a35522482dee2dd78a69606b79f52246e))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** scene graph icons ([#914](https://github.com/havenhq/revideo/issues/914)) ([e92ddef](https://github.com/havenhq/revideo/commit/e92ddef34860f5e710ff0f1a310758ec0ca95bcb))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* unify references and signals ([#137](https://github.com/havenhq/revideo/issues/137)) ([063aede](https://github.com/havenhq/revideo/commit/063aede0842f948d2c6704c6edd426e954bb4668))
* upgrade code-fns for new theme options and lazy loading ([#401](https://github.com/havenhq/revideo/issues/401)) ([8965ab1](https://github.com/havenhq/revideo/commit/8965ab1bef8b6ae919c8001d0527f5793293b285)), closes [#396](https://github.com/havenhq/revideo/issues/396) [#322](https://github.com/havenhq/revideo/issues/322)
* use ES modules in fiddles ([#712](https://github.com/havenhq/revideo/issues/712)) ([dbe2ad5](https://github.com/havenhq/revideo/commit/dbe2ad5644219c5a98d38c6557abfb66d793c821))
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))
* world space cache ([#498](https://github.com/havenhq/revideo/issues/498)) ([633e9e1](https://github.com/havenhq/revideo/commit/633e9e140dfbbe397df6ddc1f96ed30782ddce94)), closes [#342](https://github.com/havenhq/revideo/issues/342)


### Reverts

* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))
* feat: upgrade code-fns for new theme options and lazy loading ([#435](https://github.com/havenhq/revideo/issues/435)) ([3f5e439](https://github.com/havenhq/revideo/commit/3f5e43968f7add7c6322c9c8358d3b6fc178c2fe))


### BREAKING CHANGES

* multiple name changes

To avoid collisions, names of certain classes have changed:
- `Text => Txt`
- `Image => Img`
- `Rect (type) => BBox`

Cache related methods of `Node` have changed:
- `getCacheRect => getCacheBBox`
- `cacheRect => cacheBBox`
- `fullCacheRect => fullCacheBBox`

The `CodeBlock` property has changed:
- `CodeBlock.selectionOpacity => CodeBlock.unselectedOpacity`
* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
* remove legacy package





## 0.2.11 (2024-04-22)

### Bug Fixes

- **2d:** account for offset in cardinal points
  ([#883](https://github.com/havenhq/revideo/issues/883))
  ([24da258](https://github.com/havenhq/revideo/commit/24da258f5937087b363eeb9146a9d22747b02e70)),
  closes [#882](https://github.com/havenhq/revideo/issues/882)
- **2d:** account for spawners in scene graph
  ([#935](https://github.com/havenhq/revideo/issues/935))
  ([ca325f5](https://github.com/havenhq/revideo/commit/ca325f5ad0ae987e76106f5e65fef3ed7b3ca08d))
- **2d:** add missing Curve properties to Circle
  ([#805](https://github.com/havenhq/revideo/issues/805))
  ([38c7900](https://github.com/havenhq/revideo/commit/38c79000403d7c3c99dde9e4c825a448d5f55054))
- **2d:** add missing Fragment export
  ([#553](https://github.com/havenhq/revideo/issues/553))
  ([229afb4](https://github.com/havenhq/revideo/commit/229afb4fe7d95f09b480ab4a813f8dff549f381f))
- **2d:** add missing jsx dev runtime
  ([#547](https://github.com/havenhq/revideo/issues/547))
  ([d61cb7d](https://github.com/havenhq/revideo/commit/d61cb7dd24ab66ae17d5bd6f5ccb34c4fd1e7569)),
  closes [#545](https://github.com/havenhq/revideo/issues/545)
- **2d:** add missing middle property
  ([#891](https://github.com/havenhq/revideo/issues/891))
  ([61e2e96](https://github.com/havenhq/revideo/commit/61e2e96e3b8f37a68ebdddb432baba04858fd4f3))
- **2d:** add missing shape export
  ([#111](https://github.com/havenhq/revideo/issues/111))
  ([02a1fa7](https://github.com/havenhq/revideo/commit/02a1fa7ea62155e498809f2e57ff29a18c82ac12))
- **2d:** better error handling
  ([#524](https://github.com/havenhq/revideo/issues/524))
  ([b7475ba](https://github.com/havenhq/revideo/commit/b7475ba5ff35d37ee198577d1205d6ecd6fd2092))
- **2d:** calculate arrow orientations for curves correctly
  ([#597](https://github.com/havenhq/revideo/issues/597))
  ([1626811](https://github.com/havenhq/revideo/commit/1626811ec4cd1bd2a3d43e393ced40a7da462c3a))
- **2d:** calculate Txt cache bbox from contents
  ([#836](https://github.com/havenhq/revideo/issues/836))
  ([33e1a12](https://github.com/havenhq/revideo/commit/33e1a1296f21d26e9ed45ae92132825dca17054d)),
  closes [#465](https://github.com/havenhq/revideo/issues/465)
- **2d:** clone size correctly
  ([#562](https://github.com/havenhq/revideo/issues/562))
  ([cdd3df1](https://github.com/havenhq/revideo/commit/cdd3df1bff25b04b905e289264831d8d328caaab)),
  closes [#559](https://github.com/havenhq/revideo/issues/559)
- **2d:** correct layout defaults
  ([#442](https://github.com/havenhq/revideo/issues/442))
  ([c116c35](https://github.com/havenhq/revideo/commit/c116c355179ba3b2487634fb82b9a5bc2ea266bf))
- **2d:** correctly append Txt nodes to view
  ([#644](https://github.com/havenhq/revideo/issues/644))
  ([24bb51a](https://github.com/havenhq/revideo/commit/24bb51aa04778c33ce327926b27332efaa554e5f))
- **2d:** correctly support external image urls
  ([#678](https://github.com/havenhq/revideo/issues/678))
  ([a08556b](https://github.com/havenhq/revideo/commit/a08556b6e2822a55db593f610ea4dd6cb8494adb)),
  closes [#677](https://github.com/havenhq/revideo/issues/677)
- **2d:** fix cache bbox for lines
  ([#467](https://github.com/havenhq/revideo/issues/467))
  ([9fd1444](https://github.com/havenhq/revideo/commit/9fd144417bb0b6301da6c522a988775f5ff142ac)),
  closes [#466](https://github.com/havenhq/revideo/issues/466)
- **2d:** fix circle segment
  ([#557](https://github.com/havenhq/revideo/issues/557))
  ([adebff4](https://github.com/havenhq/revideo/commit/adebff492b76a512d79151b00adf1b383d25c5b5))
- **2d:** fix CodeBlock types
  ([#563](https://github.com/havenhq/revideo/issues/563))
  ([25160fa](https://github.com/havenhq/revideo/commit/25160fa4d92af88429110356e42f6e3b4f88a90f)),
  closes [#560](https://github.com/havenhq/revideo/issues/560)
- **2d:** fix curve arrow alignment when animating start signal
  ([#615](https://github.com/havenhq/revideo/issues/615))
  ([2fefc40](https://github.com/havenhq/revideo/commit/2fefc4026050159ba204c7629832ad83e8bfa51b))
- **2d:** fix cyclic dependency in cardinal points
  ([#645](https://github.com/havenhq/revideo/issues/645))
  ([def23f9](https://github.com/havenhq/revideo/commit/def23f925ee7200c8740ecd51c7f6117d67b6ef8))
- **2d:** fix font ligatures in CodeBlock
  ([#231](https://github.com/havenhq/revideo/issues/231))
  ([11ee3fe](https://github.com/havenhq/revideo/commit/11ee3fef5ad878313cf19833df6881333ced4dac))
- **2d:** fix Gradient and Pattern signals
  ([#376](https://github.com/havenhq/revideo/issues/376))
  ([6e0dc8a](https://github.com/havenhq/revideo/commit/6e0dc8af8d19f93fd6a42addca2b3a2958b4dd33))
- **2d:** fix height when tweening text
  ([#905](https://github.com/havenhq/revideo/issues/905))
  ([1c6a796](https://github.com/havenhq/revideo/commit/1c6a7965be137c1ab69741cdd1e9aaa6df4208c4))
- **2d:** fix import order ([#94](https://github.com/havenhq/revideo/issues/94))
  ([bcc0bcf](https://github.com/havenhq/revideo/commit/bcc0bcffae47855bd8f7ab06454aaebe93c4aa24)),
  closes [#76](https://github.com/havenhq/revideo/issues/76)
- **2d:** fix initial value of endOffset
  ([#433](https://github.com/havenhq/revideo/issues/433))
  ([9fe82b3](https://github.com/havenhq/revideo/commit/9fe82b3d21ba0150a2378e541a4652ca707c2d15))
- **2d:** fix layout calculation for nodes not explicitly added to view
  ([#331](https://github.com/havenhq/revideo/issues/331))
  ([528e2d5](https://github.com/havenhq/revideo/commit/528e2d5a0abec99819e022d2848b256ece9f869a))
- **2d:** fix letterSpacing
  ([#448](https://github.com/havenhq/revideo/issues/448))
  ([bb5ffc4](https://github.com/havenhq/revideo/commit/bb5ffc48efa82b9db818e8e52aa35e9c2ad8ce89)),
  closes [#447](https://github.com/havenhq/revideo/issues/447)
- **2d:** fix line arc length
  ([#503](https://github.com/havenhq/revideo/issues/503))
  ([4f1cd59](https://github.com/havenhq/revideo/commit/4f1cd59e6bcba0b16b36be88b28a60ae46d4d9ab)),
  closes [#497](https://github.com/havenhq/revideo/issues/497)
- **2d:** fix Line cache ([#232](https://github.com/havenhq/revideo/issues/232))
  ([a953b64](https://github.com/havenhq/revideo/commit/a953b64540c020657845efc84d4179142a7a0974)),
  closes [#205](https://github.com/havenhq/revideo/issues/205)
- **2d:** fix line jitter under certain conditions
  ([#863](https://github.com/havenhq/revideo/issues/863))
  ([fb110a2](https://github.com/havenhq/revideo/commit/fb110a2f3583fc040bf2c39560934162bd146d9b))
- **2d:** fix Line overview crashing
  ([#142](https://github.com/havenhq/revideo/issues/142))
  ([6bd5fd9](https://github.com/havenhq/revideo/commit/6bd5fd941e583e44f5d920ecd20215efb1eed58a))
- **2d:** fix nested cache canvases
  ([#554](https://github.com/havenhq/revideo/issues/554))
  ([e601441](https://github.com/havenhq/revideo/commit/e6014413b215af6fb1a7953f8db83893d4025f0b)),
  closes [#551](https://github.com/havenhq/revideo/issues/551)
- **2d:** fix package.json entry
  ([#720](https://github.com/havenhq/revideo/issues/720))
  ([12e9bf6](https://github.com/havenhq/revideo/commit/12e9bf6f40ab7afc02e2f55260544f3864920ded))
- **2d:** fix signal initialization
  ([#382](https://github.com/havenhq/revideo/issues/382))
  ([ea36e79](https://github.com/havenhq/revideo/commit/ea36e791a20bfd1b491ffa9917be686c51bc3899))
- **2d:** fix tweening cardinal points
  ([#829](https://github.com/havenhq/revideo/issues/829))
  ([cc16737](https://github.com/havenhq/revideo/commit/cc16737cd59081582fbb488a880e8d3c11c14918))
- **2d:** fix Txt decorators
  ([#526](https://github.com/havenhq/revideo/issues/526))
  ([25b30ed](https://github.com/havenhq/revideo/commit/25b30ed3861f46d72147335480912ce5f564be79))
- **2d:** fix types ([#659](https://github.com/havenhq/revideo/issues/659))
  ([a32af29](https://github.com/havenhq/revideo/commit/a32af29ef3bd2e5dbf08697ebfee53230fceadc1))
- **2d:** format whitespaces according to HTML
  ([#372](https://github.com/havenhq/revideo/issues/372))
  ([83fb565](https://github.com/havenhq/revideo/commit/83fb565742d98f060c0400c8cbaf9961b69f34d0)),
  closes [#370](https://github.com/havenhq/revideo/issues/370)
- **2d:** handle division by zero in lines
  ([#407](https://github.com/havenhq/revideo/issues/407))
  ([a17871a](https://github.com/havenhq/revideo/commit/a17871a2ce63dd5bb32bc719037327c4e9dde217))
- **2d:** handle floating point errors in acos
  ([#381](https://github.com/havenhq/revideo/issues/381))
  ([5bca8fd](https://github.com/havenhq/revideo/commit/5bca8fd0bbdcf28f2793c124b7d6b0afd560c4b8))
- **2d:** handle lines with no points
  ([#233](https://github.com/havenhq/revideo/issues/233))
  ([8108474](https://github.com/havenhq/revideo/commit/81084743dfad7b6419760796fda825047909d4d4)),
  closes [#212](https://github.com/havenhq/revideo/issues/212)
- **2d:** ignore children with disabled layout
  ([#669](https://github.com/havenhq/revideo/issues/669))
  ([b98c462](https://github.com/havenhq/revideo/commit/b98c4625c3634495e86ca23d19355035e457db06)),
  closes [#580](https://github.com/havenhq/revideo/issues/580)
- **2d:** improve Curve hitbox
  ([#778](https://github.com/havenhq/revideo/issues/778))
  ([8af723c](https://github.com/havenhq/revideo/commit/8af723c0322de39d2defe0363bba03f4f9542f08))
- **2d:** improve Rect radius
  ([#221](https://github.com/havenhq/revideo/issues/221))
  ([3437e42](https://github.com/havenhq/revideo/commit/3437e42713a3f4a8d44d246ee01e2eb23b61e06a)),
  closes [#207](https://github.com/havenhq/revideo/issues/207)
- **2d:** make Text respect textWrap=pre
  ([#287](https://github.com/havenhq/revideo/issues/287))
  ([cb07f4b](https://github.com/havenhq/revideo/commit/cb07f4bdf07edc8a086b934ca5ab769682b9a010))
- **2d:** minor fixes ([#915](https://github.com/havenhq/revideo/issues/915))
  ([63cfc9e](https://github.com/havenhq/revideo/commit/63cfc9e033f2c2ac6d6ed2a0d8f615fcf642ab59))
- **2d:** point arrow heads in correct direction
  ([#792](https://github.com/havenhq/revideo/issues/792))
  ([52ed52e](https://github.com/havenhq/revideo/commit/52ed52e963cc69a066a0353680acaca35b9c937a)),
  closes [#783](https://github.com/havenhq/revideo/issues/783)
- **2d:** prevent src warnings in Icon and Latex
  ([#899](https://github.com/havenhq/revideo/issues/899))
  ([5eebab7](https://github.com/havenhq/revideo/commit/5eebab71d8061e233872e049e77b847f9fd077a1))
- **2d:** remove circular dependencies
  ([#780](https://github.com/havenhq/revideo/issues/780))
  ([cdf3af5](https://github.com/havenhq/revideo/commit/cdf3af500a58151ee3549c6e728751aab3e6f75c))
- **2d:** smoothly play videos when presenting
  ([#600](https://github.com/havenhq/revideo/issues/600))
  ([294fe6a](https://github.com/havenhq/revideo/commit/294fe6ac056ab074c77214fcf9035f53fac9258c)),
  closes [#578](https://github.com/havenhq/revideo/issues/578)
- **2d:** some signal setters not returning owners
  ([#143](https://github.com/havenhq/revideo/issues/143))
  ([09ab7f9](https://github.com/havenhq/revideo/commit/09ab7f96afcaae608399a653c0b4878ba9b467d4))
- **2d:** stop code highlighting from jumping
  ([#230](https://github.com/havenhq/revideo/issues/230))
  ([67ef1c4](https://github.com/havenhq/revideo/commit/67ef1c497056dd1f8f9e20d1d7fc1af03ec3849e))
- **2d:** stop mutating children
  ([#903](https://github.com/havenhq/revideo/issues/903))
  ([f9552a8](https://github.com/havenhq/revideo/commit/f9552a8658ccde6c7b2466ad40b12cf28c6ec805))
- **2d:** switch iframes to ShadowDOM
  ([#90](https://github.com/havenhq/revideo/issues/90))
  ([86176be](https://github.com/havenhq/revideo/commit/86176be055c08aba59272afcda00ed586f6c7ad6))
- **2d:** textDirection property for RTL/LTR text
  ([#404](https://github.com/havenhq/revideo/issues/404))
  ([f240b1b](https://github.com/havenhq/revideo/commit/f240b1bd140a884f6901b7cfcb97ce3e9ce4b48d))
- **2d:** textWrap not working in Firefox
  ([#541](https://github.com/havenhq/revideo/issues/541))
  ([f10e057](https://github.com/havenhq/revideo/commit/f10e057fd13ed9dcc70ebc0ca63963708ec159c8)),
  closes [#517](https://github.com/havenhq/revideo/issues/517)
- **2d:** wait for reused async resources
  ([#599](https://github.com/havenhq/revideo/issues/599))
  ([280e065](https://github.com/havenhq/revideo/commit/280e065fe69e9a744b7b12eb4609e7d87f76bb63)),
  closes [#593](https://github.com/havenhq/revideo/issues/593)
- account for italic fonts in cache
  ([#968](https://github.com/havenhq/revideo/issues/968))
  ([abb0906](https://github.com/havenhq/revideo/commit/abb090695c4257d9877d0cb11954093c49149ddc)),
  closes [#934](https://github.com/havenhq/revideo/issues/934)
- await font load before drawing
  ([#31](https://github.com/havenhq/revideo/issues/31))
  ([cbfb5cb](https://github.com/havenhq/revideo/commit/cbfb5cb136d85a657c99187da166b64aae8be3a1))
- correct dependencies for create package
  ([#15](https://github.com/havenhq/revideo/issues/15))
  ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
- fix compound property setter
  ([#218](https://github.com/havenhq/revideo/issues/218))
  ([6cd1b95](https://github.com/havenhq/revideo/commit/6cd1b952df950554eb637c9f8e82947c415d00c5)),
  closes [#208](https://github.com/havenhq/revideo/issues/208)
  [#210](https://github.com/havenhq/revideo/issues/210)
- fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93))
  ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
- plug memory leaks ([#385](https://github.com/havenhq/revideo/issues/385))
  ([de0af00](https://github.com/havenhq/revideo/commit/de0af00a7d2e019e2a933791c62b7901755be7b0))
- prevent consumePromises from halting
  ([#657](https://github.com/havenhq/revideo/issues/657))
  ([363a189](https://github.com/havenhq/revideo/commit/363a189b0c7f5926c9d5ae00b58b48e8ed4d9b48))
- previous scene being rendered twice
  ([#97](https://github.com/havenhq/revideo/issues/97))
  ([90205bd](https://github.com/havenhq/revideo/commit/90205bdc1a086abe5f73b04cb4616c6af5ec4377))
- restrict size of cache canvas
  ([#544](https://github.com/havenhq/revideo/issues/544))
  ([49ec554](https://github.com/havenhq/revideo/commit/49ec55490718e503d9a39437ae13c189dc4fe9ea))
- support color to null tweening
  ([#387](https://github.com/havenhq/revideo/issues/387))
  ([02e9f22](https://github.com/havenhq/revideo/commit/02e9f22027a1c3a85ffcc259aeca913318fb6f54))
- support legacy imports again
  ([#868](https://github.com/havenhq/revideo/issues/868))
  ([77c4e2e](https://github.com/havenhq/revideo/commit/77c4e2eeb8b0f73bdef1f72e3d81f34c79748929))
- support multiple async players
  ([#450](https://github.com/havenhq/revideo/issues/450))
  ([d7ec469](https://github.com/havenhq/revideo/commit/d7ec469e747eefd909f4dd59dd713f5d86308222)),
  closes [#434](https://github.com/havenhq/revideo/issues/434)
- typo on codeblock remove comments
  ([#368](https://github.com/havenhq/revideo/issues/368))
  ([2025adc](https://github.com/havenhq/revideo/commit/2025adc6e7aa11d81b6f5f6989e8eae18cf86cb7))
- **ui:** correctly drag time events
  ([#912](https://github.com/havenhq/revideo/issues/912))
  ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
- **ui:** remember state of custom tabs
  ([#900](https://github.com/havenhq/revideo/issues/900))
  ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
- use correct scene sizes
  ([#146](https://github.com/havenhq/revideo/issues/146))
  ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))

### Code Refactoring

- introduce improved names
  ([#425](https://github.com/havenhq/revideo/issues/425))
  ([4a2188d](https://github.com/havenhq/revideo/commit/4a2188d339587fa658b2134befc3fe63c835c5d7))
- remove legacy package
  ([6a84120](https://github.com/havenhq/revideo/commit/6a84120d949a32dff0ad413a9f359510ff109af1))

### Features

- **2d:** add antialiased signal to Shape
  ([#282](https://github.com/havenhq/revideo/issues/282))
  ([7c6905d](https://github.com/havenhq/revideo/commit/7c6905d72c6c2f49e10f0a80704c0afe3504d01b))
- **2d:** add arcLength helper methods to Curve
  ([#627](https://github.com/havenhq/revideo/issues/627))
  ([3c7546e](https://github.com/havenhq/revideo/commit/3c7546e7a509deb6fff8f669c3df0a69b492bd2e))
- **2d:** add Bézier nodes
  ([#603](https://github.com/havenhq/revideo/issues/603))
  ([9841cfd](https://github.com/havenhq/revideo/commit/9841cfdc3947ca4e6d6e42ed21eae88e855f855d))
- **2d:** add cardinal points
  ([#636](https://github.com/havenhq/revideo/issues/636))
  ([2136a25](https://github.com/havenhq/revideo/commit/2136a2558a9ed968ee505e4e5cce33d989dfdc13)),
  closes [#391](https://github.com/havenhq/revideo/issues/391)
- **2d:** add closed property for circle
  ([#378](https://github.com/havenhq/revideo/issues/378))
  ([62a9605](https://github.com/havenhq/revideo/commit/62a9605d4c54e7bf2d2d44d47bf769f5b27378a5))
- **2d:** add completion property for curves
  ([#635](https://github.com/havenhq/revideo/issues/635))
  ([6577d6d](https://github.com/havenhq/revideo/commit/6577d6ddfaf779ba02f3862d2a357166138b99ca))
- **2d:** add default computed values for signals
  ([#259](https://github.com/havenhq/revideo/issues/259))
  ([18f61a6](https://github.com/havenhq/revideo/commit/18f61a668420dec8afba52d52a6557e7a7919ba2))
- **2d:** add Icon Component
  ([#306](https://github.com/havenhq/revideo/issues/306))
  ([3479631](https://github.com/havenhq/revideo/commit/3479631ef34e39f90a8d8de441317672be1840d9)),
  closes [#305](https://github.com/havenhq/revideo/issues/305)
- **2d:** add LaTeX component
  ([#228](https://github.com/havenhq/revideo/issues/228))
  ([4c26d2a](https://github.com/havenhq/revideo/commit/4c26d2aaf0c697486639aa917cd5c585d3d0ea74))
- **2d:** add line counter for CodeBlock
  ([#802](https://github.com/havenhq/revideo/issues/802))
  ([c3f9676](https://github.com/havenhq/revideo/commit/c3f9676b6984731a09a44ab0b1fcfc226975fa08))
- **2d:** add methods for rearranging children
  ([#81](https://github.com/havenhq/revideo/issues/81))
  ([63f6c1a](https://github.com/havenhq/revideo/commit/63f6c1aa51ac4ecd093151c8cd30910f2e72bcac))
- **2d:** add moveBelow, moveAbove and moveTo methods to Node
  ([#365](https://github.com/havenhq/revideo/issues/365))
  ([16752a3](https://github.com/havenhq/revideo/commit/16752a3b8ae7461b33d6208a9675729f374e8324))
- **2d:** add option for preformatted text
  ([#147](https://github.com/havenhq/revideo/issues/147))
  ([989be53](https://github.com/havenhq/revideo/commit/989be532d86642e1125bb7fa62a801b09c1b8f26))
- **2d:** add Path component
  ([#700](https://github.com/havenhq/revideo/issues/700))
  ([2128b6b](https://github.com/havenhq/revideo/commit/2128b6bf871cabe19e1abc749f18945c78c01f84))
- **2d:** add playbackRate signal to Video component
  ([#831](https://github.com/havenhq/revideo/issues/831))
  ([5902b82](https://github.com/havenhq/revideo/commit/5902b824b36400876be0ee970e2c6211299faf21)),
  closes [#711](https://github.com/havenhq/revideo/issues/711)
- **2d:** add Polygon component
  ([#463](https://github.com/havenhq/revideo/issues/463))
  ([15adb3e](https://github.com/havenhq/revideo/commit/15adb3e312a4998b44c0b9c5fe5b5236f51c71c9)),
  closes [#455](https://github.com/havenhq/revideo/issues/455)
- **2d:** add querying helpers
  ([#852](https://github.com/havenhq/revideo/issues/852))
  ([614de6b](https://github.com/havenhq/revideo/commit/614de6bd8542322d1db4b123b875f6fad85cc4eb))
- **2d:** add Ray node ([#628](https://github.com/havenhq/revideo/issues/628))
  ([649447c](https://github.com/havenhq/revideo/commit/649447cd5f2089afc64cc7bd4b0276e69d1e9a30))
- **2d:** add save and restore methods to nodes
  ([#406](https://github.com/havenhq/revideo/issues/406))
  ([870e194](https://github.com/havenhq/revideo/commit/870e1947d97382bc6d82857c077140bbef7cf7e8))
- **2d:** add skew property
  ([#803](https://github.com/havenhq/revideo/issues/803))
  ([eff7c7b](https://github.com/havenhq/revideo/commit/eff7c7be0c013139140b398350242457736d48c7))
- **2d:** add smooth corners and sharpness to rect
  ([#310](https://github.com/havenhq/revideo/issues/310))
  ([f7fbefd](https://github.com/havenhq/revideo/commit/f7fbefd27f7f6972cfb5a45a68e5d0aed9593ae4))
- **2d:** add spline node
  ([#514](https://github.com/havenhq/revideo/issues/514))
  ([3ce2111](https://github.com/havenhq/revideo/commit/3ce2111309e698450dc4c6e2ad47024995863e73))
- **2d:** add start and end signals to Grid node
  ([#761](https://github.com/havenhq/revideo/issues/761))
  ([e37ea80](https://github.com/havenhq/revideo/commit/e37ea806b94e93c6324d8e1b502468925b731e8e))
- **2d:** add SVG component
  ([#763](https://github.com/havenhq/revideo/issues/763))
  ([8eadc11](https://github.com/havenhq/revideo/commit/8eadc11937d4201545894f2f5b204d477a3f9094))
- **2d:** add textAlign property
  ([#451](https://github.com/havenhq/revideo/issues/451))
  ([3d15825](https://github.com/havenhq/revideo/commit/3d15825f3cc5a35ba081a31510741b824f3bc6ab)),
  closes [#303](https://github.com/havenhq/revideo/issues/303)
- **2d:** add video component property getter
  ([#240](https://github.com/havenhq/revideo/issues/240))
  ([59de5ab](https://github.com/havenhq/revideo/commit/59de5ab2c089589773a2f9ad7588eda7d72693a7))
- **2d:** add z-index property to nodes
  ([#398](https://github.com/havenhq/revideo/issues/398))
  ([4280af3](https://github.com/havenhq/revideo/commit/4280af3b4b7bd5970fe5e743949a0fcca2c314f3))
- **2d:** always clip images and videos
  ([#773](https://github.com/havenhq/revideo/issues/773))
  ([3938c59](https://github.com/havenhq/revideo/commit/3938c59394bfc42e5562504687d783ff306d7d32))
- **2d:** clamp opacity value between 0 and 1
  ([#835](https://github.com/havenhq/revideo/issues/835))
  ([c54b2f8](https://github.com/havenhq/revideo/commit/c54b2f837a8e8b872df3610f4cc6caa94a728500)),
  closes [#830](https://github.com/havenhq/revideo/issues/830)
- **2d:** code bounding box helpers
  ([#948](https://github.com/havenhq/revideo/issues/948))
  ([0ffd56f](https://github.com/havenhq/revideo/commit/0ffd56f5f8076913e687e5b908311aa7832d8b7b))
- **2d:** code range helpers
  ([#947](https://github.com/havenhq/revideo/issues/947))
  ([044c9ac](https://github.com/havenhq/revideo/commit/044c9acd6ee7e4e337fb4d51286126f583a8da6f))
- **2d:** code selection and modification
  ([#163](https://github.com/havenhq/revideo/issues/163))
  ([e8e884a](https://github.com/havenhq/revideo/commit/e8e884a1a5574425dbf15272718911c12cfa2327))
- **2d:** construct lines using signals
  ([#133](https://github.com/havenhq/revideo/issues/133))
  ([2968a24](https://github.com/havenhq/revideo/commit/2968a2426564469fb4f4343fe71a6d30e95361f2))
- **2d:** immediate restore
  ([#736](https://github.com/havenhq/revideo/issues/736))
  ([634d51d](https://github.com/havenhq/revideo/commit/634d51d2afe8a536673c364874f8f3d1a450b846))
- **2d:** improve property declarations
  ([27e7d26](https://github.com/havenhq/revideo/commit/27e7d267ee91bf1e8ca79686b6ec31347f9f4d41))
- **2d:** improve Rect corner radius
  ([#120](https://github.com/havenhq/revideo/issues/120))
  ([b471fe0](https://github.com/havenhq/revideo/commit/b471fe0e37c0a426d3af8299c9c3c22539e7df05))
- **2d:** improve Video node
  ([#601](https://github.com/havenhq/revideo/issues/601))
  ([3801d83](https://github.com/havenhq/revideo/commit/3801d83415bbdeeee5d6d53d0c18e5d9e78fba56))
- **2d:** make `View2D` extend `Rect`
  ([#379](https://github.com/havenhq/revideo/issues/379))
  ([93db5fc](https://github.com/havenhq/revideo/commit/93db5fc41617c0902e85fda90fbfc930c2b4634b))
- **2d:** make Circle extend Curve
  ([#771](https://github.com/havenhq/revideo/issues/771))
  ([4c8cf19](https://github.com/havenhq/revideo/commit/4c8cf1954093958eac507921dc18f67dd64b2052))
- **2d:** make Polygon extend Curve
  ([#961](https://github.com/havenhq/revideo/issues/961))
  ([739c9fc](https://github.com/havenhq/revideo/commit/739c9fccbc101f8b2eed680a11c00f317fdc4dd3))
- **2d:** make Rect extend Curve
  ([#759](https://github.com/havenhq/revideo/issues/759))
  ([9810212](https://github.com/havenhq/revideo/commit/9810212648824b9a2fa2ecd6b597e3319d20b325))
- **2d:** nested Txt nodes
  ([#861](https://github.com/havenhq/revideo/issues/861))
  ([f2786d0](https://github.com/havenhq/revideo/commit/f2786d0cd0d06065ca1e9eb9f6b4c11a74b6c283)),
  closes [#540](https://github.com/havenhq/revideo/issues/540)
- **2d:** simplify layout prop
  ([c24cb12](https://github.com/havenhq/revideo/commit/c24cb12a22b7c85fdfb051917fa9ee1e0911717c))
- **2d:** support HMR for images
  ([#641](https://github.com/havenhq/revideo/issues/641))
  ([cf17520](https://github.com/havenhq/revideo/commit/cf17520aa8ddf19dcfc419c63cf7255892d45b71))
- **2d:** support letter spacing in Code
  ([#955](https://github.com/havenhq/revideo/issues/955))
  ([2a87c37](https://github.com/havenhq/revideo/commit/2a87c37c832de86c4b524b33fd68806627daec8b))
- **2d:** support tweening in applyState
  ([#859](https://github.com/havenhq/revideo/issues/859))
  ([b7ed2e2](https://github.com/havenhq/revideo/commit/b7ed2e24773227e5b576ff056eb23de9b9ff1676))
- **2d:** support tweening Line points
  ([#853](https://github.com/havenhq/revideo/issues/853))
  ([4bf37d7](https://github.com/havenhq/revideo/commit/4bf37d74d2e4bb9d9cc034aff121a32da9a6d146))
- **2d:** unify desired sizes
  ([#118](https://github.com/havenhq/revideo/issues/118))
  ([401a799](https://github.com/havenhq/revideo/commit/401a79946b034a96b9abff2f3fb5efd6cc9080f3))
- **2d:** unify layout properties
  ([#355](https://github.com/havenhq/revideo/issues/355))
  ([3cae97e](https://github.com/havenhq/revideo/commit/3cae97ea704d0533020fa87326dacadcc037d517)),
  closes [#352](https://github.com/havenhq/revideo/issues/352)
- **2d:** warn about missing image source
  ([#817](https://github.com/havenhq/revideo/issues/817))
  ([6dcdb5f](https://github.com/havenhq/revideo/commit/6dcdb5f3b83d4860b1557e4745972e0af68f92f3))
- add advanced caching ([#69](https://github.com/havenhq/revideo/issues/69))
  ([2a644c9](https://github.com/havenhq/revideo/commit/2a644c9315acfcc5280a5eacc9904df140a61e4f))
- add base class for shapes
  ([#67](https://github.com/havenhq/revideo/issues/67))
  ([d38c172](https://github.com/havenhq/revideo/commit/d38c1724e129c553739cbfc27c4e5cd8f737f067))
- add basic logger ([#88](https://github.com/havenhq/revideo/issues/88))
  ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)),
  closes [#17](https://github.com/havenhq/revideo/issues/17)
- add basic transform to Node class
  ([#83](https://github.com/havenhq/revideo/issues/83))
  ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
- add cloning ([#80](https://github.com/havenhq/revideo/issues/80))
  ([47d7a0f](https://github.com/havenhq/revideo/commit/47d7a0fa5da9a03d8ed91557db651f6f960e28b1))
- add CodeBlock component based on code-fns to 2D
  ([#78](https://github.com/havenhq/revideo/issues/78))
  ([ad346f1](https://github.com/havenhq/revideo/commit/ad346f118d63b1e321ec315e1c70b925670124a1))
- add coordinates to preview
  ([#737](https://github.com/havenhq/revideo/issues/737))
  ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
- add default renderer ([#63](https://github.com/havenhq/revideo/issues/63))
  ([9255490](https://github.com/havenhq/revideo/commit/92554900965fe088538f5e703dbab2fd84f904d7)),
  closes [#56](https://github.com/havenhq/revideo/issues/56)
  [#58](https://github.com/havenhq/revideo/issues/58)
- add DEG2RAD and RAD2DEG constants
  ([#630](https://github.com/havenhq/revideo/issues/630))
  ([01801e8](https://github.com/havenhq/revideo/commit/01801e8766058e75a6a020400650fb00f8f430cc))
- add Grid node
  ([e1f83da](https://github.com/havenhq/revideo/commit/e1f83da1f43d20d392df4acb11e3df9cc457585d))
- add inspection ([#82](https://github.com/havenhq/revideo/issues/82))
  ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
- add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138))
  ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
- add middle cardinal point
  ([#758](https://github.com/havenhq/revideo/issues/758))
  ([b036eaf](https://github.com/havenhq/revideo/commit/b036eafc00381831c08267a78cf9d74973f4025a))
- add missing flexbox properties
  ([#405](https://github.com/havenhq/revideo/issues/405))
  ([4e78b4b](https://github.com/havenhq/revideo/commit/4e78b4b2fe4df42ce0a8da6fd41ad38b0104e7f5))
- add missing layout props ([#72](https://github.com/havenhq/revideo/issues/72))
  ([f808a56](https://github.com/havenhq/revideo/commit/f808a562b192fd03dba4b0d353284db344d6a80b))
- add node spawners ([#149](https://github.com/havenhq/revideo/issues/149))
  ([da18a4e](https://github.com/havenhq/revideo/commit/da18a4e24104022a84ecd6cec1666b520186058f))
- add polyline ([#84](https://github.com/havenhq/revideo/issues/84))
  ([4ceaf84](https://github.com/havenhq/revideo/commit/4ceaf842915ac43d81f292c58a4dc73a8d1bb8e9))
- add random number generator
  ([#116](https://github.com/havenhq/revideo/issues/116))
  ([d505312](https://github.com/havenhq/revideo/commit/d5053123eef308c7a2a61d92b6e76c637f4ed0b8)),
  closes [#14](https://github.com/havenhq/revideo/issues/14)
- add reparent helper
  ([80b95a9](https://github.com/havenhq/revideo/commit/80b95a9ce89d4a2eeea7e467257486e961602d69))
- add Text and Image components
  ([#70](https://github.com/havenhq/revideo/issues/70))
  ([85c7dcd](https://github.com/havenhq/revideo/commit/85c7dcdb4f8ca2f0bfb03950c85a8d6f6652fcdf))
- add video node ([#86](https://github.com/havenhq/revideo/issues/86))
  ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
- add volume parameter for media and make playbackrate work with audio export
  ([#9](https://github.com/havenhq/revideo/issues/9))
  ([9e0d67b](https://github.com/havenhq/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
- added a theme property to the CodeBlock component
  ([#279](https://github.com/havenhq/revideo/issues/279))
  ([fe34fa8](https://github.com/havenhq/revideo/commit/fe34fa8ebfe66cd356fb1c3d85adedef11e03b45))
- better children and spawners
  ([#858](https://github.com/havenhq/revideo/issues/858))
  ([9b5c23d](https://github.com/havenhq/revideo/commit/9b5c23d2076180cf710656c817369a07b253e3ec))
- better dependencies between packages
  ([#152](https://github.com/havenhq/revideo/issues/152))
  ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
- better dependencies between packages
  ([#153](https://github.com/havenhq/revideo/issues/153))
  ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
- convert built-in types to webgl
  ([#929](https://github.com/havenhq/revideo/issues/929))
  ([a0f0b7d](https://github.com/havenhq/revideo/commit/a0f0b7d8996547e1a316097422ec02bddeeccec6))
- **core:** switch to vitest
  ([#99](https://github.com/havenhq/revideo/issues/99))
  ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)),
  closes [#48](https://github.com/havenhq/revideo/issues/48)
- **core:** tree shaking ([#523](https://github.com/havenhq/revideo/issues/523))
  ([65fec78](https://github.com/havenhq/revideo/commit/65fec7825fda33812b13f57bfeb1d82193a5d190))
- **docs:** fiddle editor
  ([#542](https://github.com/havenhq/revideo/issues/542))
  ([3c68fef](https://github.com/havenhq/revideo/commit/3c68fefdf7bf375ee9345aba7dbf9e5ff35e3c3d))
- export everything from entry points
  ([#710](https://github.com/havenhq/revideo/issues/710))
  ([3c885d9](https://github.com/havenhq/revideo/commit/3c885d9083b52fbbaccf1e2560ae50817949bc52))
- filter reordering ([#119](https://github.com/havenhq/revideo/issues/119))
  ([2398d0f](https://github.com/havenhq/revideo/commit/2398d0f9d57f36b47c9c66a988ca5607e9a3a30e))
- implement absolute scale setter
  ([842079a](https://github.com/havenhq/revideo/commit/842079a6547af4032719c85837df3db7c1c6d30a))
- improve async signals ([#156](https://github.com/havenhq/revideo/issues/156))
  ([db27b9d](https://github.com/havenhq/revideo/commit/db27b9d5fb69a88f42afd98c86c4a1cdceb88ea1))
- improve error logs ([#953](https://github.com/havenhq/revideo/issues/953))
  ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
- improve image error handling
  ([#847](https://github.com/havenhq/revideo/issues/847))
  ([db09d53](https://github.com/havenhq/revideo/commit/db09d5305a3c0507b035e3cd347eaa65b23d7d2e))
- introduce basic caching ([#68](https://github.com/havenhq/revideo/issues/68))
  ([6420d36](https://github.com/havenhq/revideo/commit/6420d362d0e4ae058f55b6ff6bb2a3a32dec559b))
- introduce editor plugins
  ([#879](https://github.com/havenhq/revideo/issues/879))
  ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
- merge properties and signals
  ([#124](https://github.com/havenhq/revideo/issues/124))
  ([da3ba83](https://github.com/havenhq/revideo/commit/da3ba83d82ee74f5a5c3631b07597f08cdf9e8e4))
- minor improvements
  ([403c7c2](https://github.com/havenhq/revideo/commit/403c7c27ad969880a14c498ec6cefb9e7e7b7544))
- minor improvements ([#77](https://github.com/havenhq/revideo/issues/77))
  ([7c6e584](https://github.com/havenhq/revideo/commit/7c6e584aca353c9af55f0acb61b32b5f99727dba))
- navigate to scene and node source
  ([#144](https://github.com/havenhq/revideo/issues/144))
  ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
- new animator ([#91](https://github.com/havenhq/revideo/issues/91))
  ([d85f2f8](https://github.com/havenhq/revideo/commit/d85f2f8a54c0f8bbfbc451884385f30e5b3ec206))
- new Code node ([#946](https://github.com/havenhq/revideo/issues/946))
  ([26e55a3](https://github.com/havenhq/revideo/commit/26e55a37c416fb1313c8aadf40eed2824b45d330))
- new playback architecture
  ([#402](https://github.com/havenhq/revideo/issues/402))
  ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)),
  closes [#166](https://github.com/havenhq/revideo/issues/166)
- publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6))
  ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
- **renderer:** use ffmpeg to step through frames of video elements
  ([#33](https://github.com/havenhq/revideo/issues/33))
  ([a6e1bcd](https://github.com/havenhq/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
- signal error handling ([#89](https://github.com/havenhq/revideo/issues/89))
  ([472ac65](https://github.com/havenhq/revideo/commit/472ac65938b804a6b698c8522ec0c3b6bdbcf1b1))
- simplify size access ([#65](https://github.com/havenhq/revideo/issues/65))
  ([3315e64](https://github.com/havenhq/revideo/commit/3315e64641e9778bc48ea3fb707e3c0eeb581dfe))
- simplify size access further
  ([#66](https://github.com/havenhq/revideo/issues/66))
  ([9091a5e](https://github.com/havenhq/revideo/commit/9091a5e05d8fadf72c50832c7c4467ac4424b72c))
- switch to signals ([#64](https://github.com/havenhq/revideo/issues/64))
  ([d22d237](https://github.com/havenhq/revideo/commit/d22d23728597e6fa82ea5c5a99a6c0a56819bded))
- turn Layout into node ([#75](https://github.com/havenhq/revideo/issues/75))
  ([cdf8dc0](https://github.com/havenhq/revideo/commit/cdf8dc0a35522482dee2dd78a69606b79f52246e))
- **ui:** add custom presentation overlays
  ([#884](https://github.com/havenhq/revideo/issues/884))
  ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)),
  closes [#825](https://github.com/havenhq/revideo/issues/825)
- **ui:** custom inspectors
  ([#913](https://github.com/havenhq/revideo/issues/913))
  ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
- **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909))
  ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
- **ui:** scene graph icons
  ([#914](https://github.com/havenhq/revideo/issues/914))
  ([e92ddef](https://github.com/havenhq/revideo/commit/e92ddef34860f5e710ff0f1a310758ec0ca95bcb))
- unify core types ([#71](https://github.com/havenhq/revideo/issues/71))
  ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
- unify references and signals
  ([#137](https://github.com/havenhq/revideo/issues/137))
  ([063aede](https://github.com/havenhq/revideo/commit/063aede0842f948d2c6704c6edd426e954bb4668))
- upgrade code-fns for new theme options and lazy loading
  ([#401](https://github.com/havenhq/revideo/issues/401))
  ([8965ab1](https://github.com/havenhq/revideo/commit/8965ab1bef8b6ae919c8001d0527f5793293b285)),
  closes [#396](https://github.com/havenhq/revideo/issues/396)
  [#322](https://github.com/havenhq/revideo/issues/322)
- use ES modules in fiddles
  ([#712](https://github.com/havenhq/revideo/issues/712))
  ([dbe2ad5](https://github.com/havenhq/revideo/commit/dbe2ad5644219c5a98d38c6557abfb66d793c821))
- **vite-plugin:** add CORS Proxy
  ([#357](https://github.com/havenhq/revideo/issues/357))
  ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)),
  closes [#338](https://github.com/havenhq/revideo/issues/338)
- webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920))
  ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))
- world space cache ([#498](https://github.com/havenhq/revideo/issues/498))
  ([633e9e1](https://github.com/havenhq/revideo/commit/633e9e140dfbbe397df6ddc1f96ed30782ddce94)),
  closes [#342](https://github.com/havenhq/revideo/issues/342)

### Reverts

- ci(release): 1.0.1 [skip ci]
  ([#175](https://github.com/havenhq/revideo/issues/175))
  ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
- ci(release): 2.0.0 [skip ci]
  ([#176](https://github.com/havenhq/revideo/issues/176))
  ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
- ci(release): 3.12.4 [skip ci]
  ([#908](https://github.com/havenhq/revideo/issues/908))
  ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))
- feat: upgrade code-fns for new theme options and lazy loading
  ([#435](https://github.com/havenhq/revideo/issues/435))
  ([3f5e439](https://github.com/havenhq/revideo/commit/3f5e43968f7add7c6322c9c8358d3b6fc178c2fe))

### BREAKING CHANGES

- multiple name changes

To avoid collisions, names of certain classes have changed:

- `Text => Txt`
- `Image => Img`
- `Rect (type) => BBox`

Cache related methods of `Node` have changed:

- `getCacheRect => getCacheBBox`
- `cacheRect => cacheBBox`
- `fullCacheRect => fullCacheBBox`

The `CodeBlock` property has changed:

- `CodeBlock.selectionOpacity => CodeBlock.unselectedOpacity`

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.

- remove legacy package
