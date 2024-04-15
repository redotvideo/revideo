# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 0.2.9 (2024-04-15)


### Bug Fixes

* **2d:** handle floating point errors in acos ([#381](https://github.com/havenhq/revideo/issues/381)) ([5bca8fd](https://github.com/havenhq/revideo/commit/5bca8fd0bbdcf28f2793c124b7d6b0afd560c4b8))
* **core:** add missing type references ([#41](https://github.com/havenhq/revideo/issues/41)) ([325c244](https://github.com/havenhq/revideo/commit/325c2442814ca19407fe0060a819aded4456f90e))
* **core:** clear DependencyContext promises once resolved ([#617](https://github.com/havenhq/revideo/issues/617)) ([97b68da](https://github.com/havenhq/revideo/commit/97b68dabfdf86c0e0a188212308b8aba0fb35cab))
* **core:** clear semi-transparent backgrounds ([#424](https://github.com/havenhq/revideo/issues/424)) ([1ebff1c](https://github.com/havenhq/revideo/commit/1ebff1c92bebce56d11c61eb9dadca47f5a80ac1)), closes [#423](https://github.com/havenhq/revideo/issues/423)
* **core:** fix looping ([#217](https://github.com/havenhq/revideo/issues/217)) ([a38e1a7](https://github.com/havenhq/revideo/commit/a38e1a7c8fc21384cc17f3f982802071b8cd0cbf)), closes [#178](https://github.com/havenhq/revideo/issues/178)
* **core:** fix playback state ([#471](https://github.com/havenhq/revideo/issues/471)) ([1c259d0](https://github.com/havenhq/revideo/commit/1c259d0d574bb56dbc8bc448300d9b94ee4d0bc4))
* **core:** fix relative time ([#461](https://github.com/havenhq/revideo/issues/461)) ([8d4946e](https://github.com/havenhq/revideo/commit/8d4946ebf56590bc3934087f95955180b4901566))
* **core:** fix snapshots ([#638](https://github.com/havenhq/revideo/issues/638)) ([437cc5e](https://github.com/havenhq/revideo/commit/437cc5efddbb242b10f7902e18fe15162a45d7bd))
* **core:** fix tree shaking ([#555](https://github.com/havenhq/revideo/issues/555)) ([8de199e](https://github.com/havenhq/revideo/commit/8de199eaf833622a96ad746c984fb7f3a77df4b8))
* **core:** fix Vector2.exactlyEquals ([#437](https://github.com/havenhq/revideo/issues/437)) ([028d264](https://github.com/havenhq/revideo/commit/028d26499d8f3fb34500b22e8dcde2d080c2e2b0))
* **core:** handle malicious event names ([#819](https://github.com/havenhq/revideo/issues/819)) ([aba8eba](https://github.com/havenhq/revideo/commit/aba8ebaf347ac3cbf6a9446c1aa60f629c7c18bd))
* **core:** keep falsy values with deepTween ([#45](https://github.com/havenhq/revideo/issues/45)) ([93c934f](https://github.com/havenhq/revideo/commit/93c934f9b59462581267cca5033bf132b831ce54))
* **core:** playback speed is reset after saving with faulty code ([#204](https://github.com/havenhq/revideo/issues/204)). ([#339](https://github.com/havenhq/revideo/issues/339)) ([6771e5e](https://github.com/havenhq/revideo/commit/6771e5e17edcdc4cce074d7da0962cf71ba6c228))
* **core:** project `variables` ([#690](https://github.com/havenhq/revideo/issues/690)) ([149f39c](https://github.com/havenhq/revideo/commit/149f39c3219aa74115be80490bd6c5f236779b0e)), closes [#689](https://github.com/havenhq/revideo/issues/689)
* **core:** render only within the range ([#436](https://github.com/havenhq/revideo/issues/436)) ([36ccebe](https://github.com/havenhq/revideo/commit/36ccebe5321d84eeaa16f8b74a79c1001ee7ac0b))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* correctly await re-renders ([#918](https://github.com/havenhq/revideo/issues/918)) ([873a9a3](https://github.com/havenhq/revideo/commit/873a9a3eed2676de4cc7f31fbd5ea58817a80aff))
* **docs:** fix last updated footer ([#776](https://github.com/havenhq/revideo/issues/776)) ([09c0085](https://github.com/havenhq/revideo/commit/09c008587fcd4b52edbc5e7599ee378482f4230b)), closes [#767](https://github.com/havenhq/revideo/issues/767)
* empty time events crashing ([a1c53de](https://github.com/havenhq/revideo/commit/a1c53deba7c405ddf1a3b4874f22b63e0b085af9))
* fix compound property setter ([#218](https://github.com/havenhq/revideo/issues/218)) ([6cd1b95](https://github.com/havenhq/revideo/commit/6cd1b952df950554eb637c9f8e82947c415d00c5)), closes [#208](https://github.com/havenhq/revideo/issues/208) [#210](https://github.com/havenhq/revideo/issues/210)
* fix dependency bundling ([#897](https://github.com/havenhq/revideo/issues/897)) ([5376012](https://github.com/havenhq/revideo/commit/5376012cd02b8bca5abc2d3cf5a724662244c449))
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* fix tsdoc comments ([#21](https://github.com/havenhq/revideo/issues/21)) ([4b6cb66](https://github.com/havenhq/revideo/commit/4b6cb660ad82befcfd41188c7a8f9c8c0cba93ed)), closes [#18](https://github.com/havenhq/revideo/issues/18)
* improper cloning of custom fields ([#925](https://github.com/havenhq/revideo/issues/925)) ([4981da7](https://github.com/havenhq/revideo/commit/4981da74e7b2b0e106fa14f1af2eac62d2bf82f4))
* limit fps to positive numbers ([#937](https://github.com/havenhq/revideo/issues/937)) ([c7c0c67](https://github.com/havenhq/revideo/commit/c7c0c6730e1a00e6b23077188bfc2d389e98cff2)), closes [#936](https://github.com/havenhq/revideo/issues/936)
* plug memory leaks ([#385](https://github.com/havenhq/revideo/issues/385)) ([de0af00](https://github.com/havenhq/revideo/commit/de0af00a7d2e019e2a933791c62b7901755be7b0))
* prevent Color tree shaking ([#666](https://github.com/havenhq/revideo/issues/666)) ([e5028e3](https://github.com/havenhq/revideo/commit/e5028e3c176d5ba74dd3f28c2f25672390c76936)), closes [#577](https://github.com/havenhq/revideo/issues/577)
* prevent consumePromises from halting ([#657](https://github.com/havenhq/revideo/issues/657)) ([363a189](https://github.com/havenhq/revideo/commit/363a189b0c7f5926c9d5ae00b58b48e8ed4d9b48))
* previous scene being rendered twice ([#97](https://github.com/havenhq/revideo/issues/97)) ([90205bd](https://github.com/havenhq/revideo/commit/90205bdc1a086abe5f73b04cb4616c6af5ec4377))
* restrict size of cache canvas ([#544](https://github.com/havenhq/revideo/issues/544)) ([49ec554](https://github.com/havenhq/revideo/commit/49ec55490718e503d9a39437ae13c189dc4fe9ea))
* support color to null tweening ([#387](https://github.com/havenhq/revideo/issues/387)) ([02e9f22](https://github.com/havenhq/revideo/commit/02e9f22027a1c3a85ffcc259aeca913318fb6f54))
* support hmr when navigating ([370ea16](https://github.com/havenhq/revideo/commit/370ea1676a1c34313c0fb917c0f0691538f72016))
* support legacy imports again ([#868](https://github.com/havenhq/revideo/issues/868)) ([77c4e2e](https://github.com/havenhq/revideo/commit/77c4e2eeb8b0f73bdef1f72e3d81f34c79748929))
* support multiple async players ([#450](https://github.com/havenhq/revideo/issues/450)) ([d7ec469](https://github.com/havenhq/revideo/commit/d7ec469e747eefd909f4dd59dd713f5d86308222)), closes [#434](https://github.com/havenhq/revideo/issues/434)
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Code Refactoring

* introduce improved names ([#425](https://github.com/havenhq/revideo/issues/425)) ([4a2188d](https://github.com/havenhq/revideo/commit/4a2188d339587fa658b2134befc3fe63c835c5d7))


### Features

* **2d:** add default computed values for signals ([#259](https://github.com/havenhq/revideo/issues/259)) ([18f61a6](https://github.com/havenhq/revideo/commit/18f61a668420dec8afba52d52a6557e7a7919ba2))
* **2d:** add fromDegrees method to Vector2 ([#622](https://github.com/havenhq/revideo/issues/622)) ([e78b9d5](https://github.com/havenhq/revideo/commit/e78b9d51674269ab82e0c2fe4c475b5799b94975))
* **2d:** add Path component ([#700](https://github.com/havenhq/revideo/issues/700)) ([2128b6b](https://github.com/havenhq/revideo/commit/2128b6bf871cabe19e1abc749f18945c78c01f84))
* **2d:** add save and restore methods to nodes ([#406](https://github.com/havenhq/revideo/issues/406)) ([870e194](https://github.com/havenhq/revideo/commit/870e1947d97382bc6d82857c077140bbef7cf7e8))
* **2d:** code bounding box helpers ([#948](https://github.com/havenhq/revideo/issues/948)) ([0ffd56f](https://github.com/havenhq/revideo/commit/0ffd56f5f8076913e687e5b908311aa7832d8b7b))
* **2d:** improve property declarations ([27e7d26](https://github.com/havenhq/revideo/commit/27e7d267ee91bf1e8ca79686b6ec31347f9f4d41))
* **2d:** improve Rect corner radius ([#120](https://github.com/havenhq/revideo/issues/120)) ([b471fe0](https://github.com/havenhq/revideo/commit/b471fe0e37c0a426d3af8299c9c3c22539e7df05))
* **2d:** nested Txt nodes ([#861](https://github.com/havenhq/revideo/issues/861)) ([f2786d0](https://github.com/havenhq/revideo/commit/f2786d0cd0d06065ca1e9eb9f6b4c11a74b6c283)), closes [#540](https://github.com/havenhq/revideo/issues/540)
* **2d:** support tweening in applyState ([#859](https://github.com/havenhq/revideo/issues/859)) ([b7ed2e2](https://github.com/havenhq/revideo/commit/b7ed2e24773227e5b576ff056eb23de9b9ff1676))
* add `useDuration` helper ([#226](https://github.com/havenhq/revideo/issues/226)) ([fa97d6c](https://github.com/havenhq/revideo/commit/fa97d6c7f076f287c9b86d2f8852341bd368ef1c)), closes [#171](https://github.com/havenhq/revideo/issues/171)
* add advanced caching ([#69](https://github.com/havenhq/revideo/issues/69)) ([2a644c9](https://github.com/havenhq/revideo/commit/2a644c9315acfcc5280a5eacc9904df140a61e4f))
* add audio volume control through arrow keys ([#856](https://github.com/havenhq/revideo/issues/856)) ([8b86fd4](https://github.com/havenhq/revideo/commit/8b86fd4e70f91a0d5b1150d760427ca355666341))
* add base class for shapes ([#67](https://github.com/havenhq/revideo/issues/67)) ([d38c172](https://github.com/havenhq/revideo/commit/d38c1724e129c553739cbfc27c4e5cd8f737f067))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add cloning ([#80](https://github.com/havenhq/revideo/issues/80)) ([47d7a0f](https://github.com/havenhq/revideo/commit/47d7a0fa5da9a03d8ed91557db651f6f960e28b1))
* add CodeBlock component based on code-fns to 2D ([#78](https://github.com/havenhq/revideo/issues/78)) ([ad346f1](https://github.com/havenhq/revideo/commit/ad346f118d63b1e321ec315e1c70b925670124a1))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add default renderer ([#63](https://github.com/havenhq/revideo/issues/63)) ([9255490](https://github.com/havenhq/revideo/commit/92554900965fe088538f5e703dbab2fd84f904d7)), closes [#56](https://github.com/havenhq/revideo/issues/56) [#58](https://github.com/havenhq/revideo/issues/58)
* add DEG2RAD and RAD2DEG constants ([#630](https://github.com/havenhq/revideo/issues/630)) ([01801e8](https://github.com/havenhq/revideo/commit/01801e8766058e75a6a020400650fb00f8f430cc))
* add deprecation support ([#130](https://github.com/havenhq/revideo/issues/130)) ([da0e104](https://github.com/havenhq/revideo/commit/da0e104451af72eedb3eedd998f60b305fffdb0e))
* add docs to monorepo ([#22](https://github.com/havenhq/revideo/issues/22)) ([129d557](https://github.com/havenhq/revideo/commit/129d557004c63df7a4ed514d0503709f03cf6e6b))
* add E2E testing ([#101](https://github.com/havenhq/revideo/issues/101)) ([6398c54](https://github.com/havenhq/revideo/commit/6398c54e4c4d6667ce9f45b9bbef6ea110ea2215)), closes [#42](https://github.com/havenhq/revideo/issues/42)
* add experimental features ([#876](https://github.com/havenhq/revideo/issues/876)) ([498d387](https://github.com/havenhq/revideo/commit/498d3871d05d4dcc83453654bec7762d2ab32e7e))
* add Grid node ([e1f83da](https://github.com/havenhq/revideo/commit/e1f83da1f43d20d392df4acb11e3df9cc457585d))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add node spawners ([#149](https://github.com/havenhq/revideo/issues/149)) ([da18a4e](https://github.com/havenhq/revideo/commit/da18a4e24104022a84ecd6cec1666b520186058f))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add polyline ([#84](https://github.com/havenhq/revideo/issues/84)) ([4ceaf84](https://github.com/havenhq/revideo/commit/4ceaf842915ac43d81f292c58a4dc73a8d1bb8e9))
* add random number generator ([#116](https://github.com/havenhq/revideo/issues/116)) ([d505312](https://github.com/havenhq/revideo/commit/d5053123eef308c7a2a61d92b6e76c637f4ed0b8)), closes [#14](https://github.com/havenhq/revideo/issues/14)
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add reparent helper ([80b95a9](https://github.com/havenhq/revideo/commit/80b95a9ce89d4a2eeea7e467257486e961602d69))
* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* add Text and Image components ([#70](https://github.com/havenhq/revideo/issues/70)) ([85c7dcd](https://github.com/havenhq/revideo/commit/85c7dcdb4f8ca2f0bfb03950c85a8d6f6652fcdf))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/havenhq/revideo/issues/9)) ([9e0d67b](https://github.com/havenhq/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* added file type and quality options to rendering panel ([#50](https://github.com/havenhq/revideo/issues/50)) ([bee71ef](https://github.com/havenhq/revideo/commit/bee71ef2673c269db47a4433831720b7ad0fb4e8)), closes [#24](https://github.com/havenhq/revideo/issues/24)
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* auto meta fields ([#565](https://github.com/havenhq/revideo/issues/565)) ([645af6d](https://github.com/havenhq/revideo/commit/645af6d2b7e8d9332b6f08419c318ee9434d7f3f))
* better naming conventions ([#62](https://github.com/havenhq/revideo/issues/62)) ([a9d764f](https://github.com/havenhq/revideo/commit/a9d764fbceb639497ef45f44c90f9b6e408213d3))
* convert built-in types to webgl ([#929](https://github.com/havenhq/revideo/issues/929)) ([a0f0b7d](https://github.com/havenhq/revideo/commit/a0f0b7d8996547e1a316097422ec02bddeeccec6))
* **core:** accept PossibleMatrix2D when transforming bbox ([#770](https://github.com/havenhq/revideo/issues/770)) ([ae05282](https://github.com/havenhq/revideo/commit/ae0528266f5794aa0517f32b897c5fe6ff092a58))
* **core:** add `debug` helper function ([#293](https://github.com/havenhq/revideo/issues/293)) ([b870873](https://github.com/havenhq/revideo/commit/b8708732af0fc08d9ff9eeecbbb77d65f1b36eb8))
* **core:** add `gauss` function to `Random` ([#709](https://github.com/havenhq/revideo/issues/709)) ([d7de3d5](https://github.com/havenhq/revideo/commit/d7de3d56d05dc88c7cbd557a73a25d083abb54e4))
* **core:** add `loopFor` function ([#650](https://github.com/havenhq/revideo/issues/650)) ([a42eb52](https://github.com/havenhq/revideo/commit/a42eb520fef7de06038f0df9eaad1fa35122c97a))
* **core:** add `loopUntil` function ([#624](https://github.com/havenhq/revideo/issues/624)) ([b7aa4b5](https://github.com/havenhq/revideo/commit/b7aa4b57c76374e67bd19ce40c44cd650cf67327))
* **core:** add configurable line numbers ([#44](https://github.com/havenhq/revideo/issues/44)) ([831334c](https://github.com/havenhq/revideo/commit/831334ca32a504991e875af37446fef4f055c285)), closes [#12](https://github.com/havenhq/revideo/issues/12)
* **core:** add fadeTransition ([#384](https://github.com/havenhq/revideo/issues/384)) ([a248785](https://github.com/havenhq/revideo/commit/a248785e87d1c6ebc08581f4fda6be428a89824c))
* **core:** add helper method for arc lerps ([#640](https://github.com/havenhq/revideo/issues/640)) ([bc304d2](https://github.com/havenhq/revideo/commit/bc304d242e4819650fa86636180ac5594ba743d3))
* **core:** add intersects method to BBox ([#485](https://github.com/havenhq/revideo/issues/485)) ([604b0e7](https://github.com/havenhq/revideo/commit/604b0e7c22b4e5d196310e650f7c764526a80712))
* **core:** add Matrix2D type ([#340](https://github.com/havenhq/revideo/issues/340)) ([66b41e6](https://github.com/havenhq/revideo/commit/66b41e6beaca5c2ba4b6bd1a7e68ca16d183b0e9))
* **core:** add rotate and polarLerp methods to vector ([#756](https://github.com/havenhq/revideo/issues/756)) ([a18bac3](https://github.com/havenhq/revideo/commit/a18bac3c1755fa3e3240b5469ac7bc1f08b4fd24))
* **core:** add spring interpolation ([#356](https://github.com/havenhq/revideo/issues/356)) ([1463b15](https://github.com/havenhq/revideo/commit/1463b1592e22fad9d8298c11270e2099119e2229))
* **core:** add static properties to Vector2 corresponding to Origins ([#855](https://github.com/havenhq/revideo/issues/855)) ([9bbd249](https://github.com/havenhq/revideo/commit/9bbd249e1f7864a49ff2da49bc18d9309888f902)), closes [#844](https://github.com/havenhq/revideo/issues/844)
* **core:** add step parameter to range function ([#373](https://github.com/havenhq/revideo/issues/373)) ([923209a](https://github.com/havenhq/revideo/commit/923209a4106c8e7f570853dcc47a10e65e0d04d8))
* **core:** additional easing functions ([#274](https://github.com/havenhq/revideo/issues/274)) ([f81ce43](https://github.com/havenhq/revideo/commit/f81ce43019fe253e99f4ab6311c2251b40e2eae3))
* **core:** allow getting real size of scenes ([#889](https://github.com/havenhq/revideo/issues/889)) ([3a6a672](https://github.com/havenhq/revideo/commit/3a6a672bed9098bec81d9c5347459317cbbf4c2a))
* **core:** allow ordering of scenes during transition ([#832](https://github.com/havenhq/revideo/issues/832)) ([7a62b59](https://github.com/havenhq/revideo/commit/7a62b59c377dca8bf1f56bb551b47b9a75a6afba)), closes [#369](https://github.com/havenhq/revideo/issues/369)
* **core:** disallow tweening to/from undefined values ([#257](https://github.com/havenhq/revideo/issues/257)) ([d4bb791](https://github.com/havenhq/revideo/commit/d4bb79145300b52c4b4d101df2afaff5ea11a9e9))
* **core:** error double event name ([#341](https://github.com/havenhq/revideo/issues/341)) ([053b2a6](https://github.com/havenhq/revideo/commit/053b2a6c22c4e726e3962fdaf0a2e8d149889a9b))
* **core:** expand Vector2 type ([#579](https://github.com/havenhq/revideo/issues/579)) ([010bba5](https://github.com/havenhq/revideo/commit/010bba593e1c3ce368ab409dce09dbde8f999958))
* **core:** helper methods for references ([#775](https://github.com/havenhq/revideo/issues/775)) ([3255add](https://github.com/havenhq/revideo/commit/3255add1b05a37017d60c2eaccf4368ab4f7f568))
* **core:** hot module replacement for audio ([#793](https://github.com/havenhq/revideo/issues/793)) ([d40c1a8](https://github.com/havenhq/revideo/commit/d40c1a83c645c8984cca1ebc6fe687b445a0550c))
* **core:** improve `SignalGenerator` chaining ([#651](https://github.com/havenhq/revideo/issues/651)) ([de72f1f](https://github.com/havenhq/revideo/commit/de72f1f70edf7cc48fd670d9b38e0cc27f8bdb57)), closes [#480](https://github.com/havenhq/revideo/issues/480)
* **core:** improve loop function ([#952](https://github.com/havenhq/revideo/issues/952)) ([66c18bb](https://github.com/havenhq/revideo/commit/66c18bb41617a4fbe9e3be5253b3ced02caf0cae))
* **core:** presentation mode ([#486](https://github.com/havenhq/revideo/issues/486)) ([c4f2e48](https://github.com/havenhq/revideo/commit/c4f2e48ae6c65804ae46edd88c29125b7f983d5c))
* **core:** preserve custom fields in meta files ([#534](https://github.com/havenhq/revideo/issues/534)) ([2e3e22e](https://github.com/havenhq/revideo/commit/2e3e22efd62ba671624526fc10ea7dd2a04a5240))
* **core:** seek to beginning of timeline in disable loop mode ([#823](https://github.com/havenhq/revideo/issues/823)) ([3595646](https://github.com/havenhq/revideo/commit/359564645575c6f20870f4bf9642e72404717f14)), closes [#822](https://github.com/havenhq/revideo/issues/822)
* **core:** spawn function ([#951](https://github.com/havenhq/revideo/issues/951)) ([51d8cf0](https://github.com/havenhq/revideo/commit/51d8cf0b64592fe56a0e31b5c3acc155226a9b2e))
* **core:** support Origin in slideTransition ([#801](https://github.com/havenhq/revideo/issues/801)) ([0a3df28](https://github.com/havenhq/revideo/commit/0a3df2829fd7b308604eda3d005e90daf032e284))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* **core:** thread pausing ([#639](https://github.com/havenhq/revideo/issues/639)) ([c0aab58](https://github.com/havenhq/revideo/commit/c0aab588b18c267d3bc04e25b2f80c792496dda2))
* **core:** tree shaking ([#523](https://github.com/havenhq/revideo/issues/523)) ([65fec78](https://github.com/havenhq/revideo/commit/65fec7825fda33812b13f57bfeb1d82193a5d190))
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display array values in inspector ([#670](https://github.com/havenhq/revideo/issues/670)) ([e71d74c](https://github.com/havenhq/revideo/commit/e71d74c9c04995393ad8ee942b8e6e5baa6f982f))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* **docs:** fiddle editor ([#542](https://github.com/havenhq/revideo/issues/542)) ([3c68fef](https://github.com/havenhq/revideo/commit/3c68fefdf7bf375ee9345aba7dbf9e5ff35e3c3d))
* editor improvements ([#121](https://github.com/havenhq/revideo/issues/121)) ([e8b32ce](https://github.com/havenhq/revideo/commit/e8b32ceff1b8216282c4b5713508ce1172645e20))
* export everything from entry points ([#710](https://github.com/havenhq/revideo/issues/710)) ([3c885d9](https://github.com/havenhq/revideo/commit/3c885d9083b52fbbaccf1e2560ae50817949bc52))
* expose revideo project as web service ([#29](https://github.com/havenhq/revideo/issues/29)) ([c2a2a96](https://github.com/havenhq/revideo/commit/c2a2a96db199f772471833cf51bddd2574f08289))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* finalize custom exporters ([#660](https://github.com/havenhq/revideo/issues/660)) ([6a50430](https://github.com/havenhq/revideo/commit/6a50430cdf9928992ca078eba39c484a5253da2b))
* implement absolute scale setter ([842079a](https://github.com/havenhq/revideo/commit/842079a6547af4032719c85837df3db7c1c6d30a))
* improve async signals ([#156](https://github.com/havenhq/revideo/issues/156)) ([db27b9d](https://github.com/havenhq/revideo/commit/db27b9d5fb69a88f42afd98c86c4a1cdceb88ea1))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* improve image error handling ([#847](https://github.com/havenhq/revideo/issues/847)) ([db09d53](https://github.com/havenhq/revideo/commit/db09d5305a3c0507b035e3cd347eaa65b23d7d2e))
* introduce basic caching ([#68](https://github.com/havenhq/revideo/issues/68)) ([6420d36](https://github.com/havenhq/revideo/commit/6420d362d0e4ae058f55b6ff6bb2a3a32dec559b))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* merge properties and signals ([#124](https://github.com/havenhq/revideo/issues/124)) ([da3ba83](https://github.com/havenhq/revideo/commit/da3ba83d82ee74f5a5c3631b07597f08cdf9e8e4))
* meta field descriptions ([#664](https://github.com/havenhq/revideo/issues/664)) ([80c9d07](https://github.com/havenhq/revideo/commit/80c9d07f88f4a3df0f99e5741b31313f891a5d51))
* minor improvements ([403c7c2](https://github.com/havenhq/revideo/commit/403c7c27ad969880a14c498ec6cefb9e7e7b7544))
* minor improvements ([#77](https://github.com/havenhq/revideo/issues/77)) ([7c6e584](https://github.com/havenhq/revideo/commit/7c6e584aca353c9af55f0acb61b32b5f99727dba))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* navigate to slide source ([#490](https://github.com/havenhq/revideo/issues/490)) ([b5ae4bf](https://github.com/havenhq/revideo/commit/b5ae4bf37076b262a20949cca030db3902186c8d))
* new animator ([#91](https://github.com/havenhq/revideo/issues/91)) ([d85f2f8](https://github.com/havenhq/revideo/commit/d85f2f8a54c0f8bbfbc451884385f30e5b3ec206))
* new Code node ([#946](https://github.com/havenhq/revideo/issues/946)) ([26e55a3](https://github.com/havenhq/revideo/commit/26e55a37c416fb1313c8aadf40eed2824b45d330))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* new plugin hooks ([#723](https://github.com/havenhq/revideo/issues/723)) ([9a2b5ab](https://github.com/havenhq/revideo/commit/9a2b5ab8be0d001414fd00da3053d408e00fd1cd))
* open time events in editor ([#87](https://github.com/havenhq/revideo/issues/87)) ([74b781d](https://github.com/havenhq/revideo/commit/74b781d57fca7ef1d10904673276f2a7354c01b8))
* plugin architecture ([#564](https://github.com/havenhq/revideo/issues/564)) ([1c375b8](https://github.com/havenhq/revideo/commit/1c375b81e0af8a76467d42dd46a7031adb9d71d3))
* project variables ([#255](https://github.com/havenhq/revideo/issues/255)) ([4883295](https://github.com/havenhq/revideo/commit/488329525939928af52b4a4d8488f1e1cd4cf6f7))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/havenhq/revideo/issues/33)) ([a6e1bcd](https://github.com/havenhq/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* signal error handling ([#89](https://github.com/havenhq/revideo/issues/89)) ([472ac65](https://github.com/havenhq/revideo/commit/472ac65938b804a6b698c8522ec0c3b6bdbcf1b1))
* simplify size access further ([#66](https://github.com/havenhq/revideo/issues/66)) ([9091a5e](https://github.com/havenhq/revideo/commit/9091a5e05d8fadf72c50832c7c4467ac4424b72c))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to monorepo ([6c8d190](https://github.com/havenhq/revideo/commit/6c8d190c7d3d24bb4eac29eeb4b6d1abf370e160)), closes [#23](https://github.com/havenhq/revideo/issues/23) [#86](https://github.com/havenhq/revideo/issues/86) [#49](https://github.com/havenhq/revideo/issues/49)
* switch to signals ([#64](https://github.com/havenhq/revideo/issues/64)) ([d22d237](https://github.com/havenhq/revideo/commit/d22d23728597e6fa82ea5c5a99a6c0a56819bded))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* turn Layout into node ([#75](https://github.com/havenhq/revideo/issues/75)) ([cdf8dc0](https://github.com/havenhq/revideo/commit/cdf8dc0a35522482dee2dd78a69606b79f52246e))
* **ui:** estimate remaining rendering time ([#795](https://github.com/havenhq/revideo/issues/795)) ([1a46148](https://github.com/havenhq/revideo/commit/1a4614801869ab36827ca857d66eed8de9cffd09)), closes [#784](https://github.com/havenhq/revideo/issues/784)
* **ui:** small improvements ([#833](https://github.com/havenhq/revideo/issues/833)) ([f44400c](https://github.com/havenhq/revideo/commit/f44400c458a1d7f49520494f01efb9936f4df83e))
* **ui:** timeline scrubbing ([#862](https://github.com/havenhq/revideo/issues/862)) ([211b9a4](https://github.com/havenhq/revideo/commit/211b9a4327720afd1ce0ff93868a501c2fd745aa)), closes [#286](https://github.com/havenhq/revideo/issues/286)
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* unify references and signals ([#137](https://github.com/havenhq/revideo/issues/137)) ([063aede](https://github.com/havenhq/revideo/commit/063aede0842f948d2c6704c6edd426e954bb4668))
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)
* use PossibleVector2 in Vector2 methods ([#478](https://github.com/havenhq/revideo/issues/478)) ([8ccb44a](https://github.com/havenhq/revideo/commit/8ccb44a265016e25b2b177a65d44f801c9d861f9))
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))
* world space cache ([#498](https://github.com/havenhq/revideo/issues/498)) ([633e9e1](https://github.com/havenhq/revideo/commit/633e9e140dfbbe397df6ddc1f96ed30782ddce94)), closes [#342](https://github.com/havenhq/revideo/issues/342)


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))


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
* change names of timing and interpolation functions

`TweenFunction` is now called `InterpolationFunction`.
Individual functions are now called `[type]Lerp` instead of `[type]Tween`.
For instance: `colorTween` is now `colorLerp`.

`InterpolationFunction` is now called `TimingFunction`.
This name is better aligned with the CSS spec.
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





## 0.2.8 (2024-04-10)


### Bug Fixes

* **2d:** handle floating point errors in acos ([#381](https://github.com/havenhq/revideo/issues/381)) ([5bca8fd](https://github.com/havenhq/revideo/commit/5bca8fd0bbdcf28f2793c124b7d6b0afd560c4b8))
* **core:** add missing type references ([#41](https://github.com/havenhq/revideo/issues/41)) ([325c244](https://github.com/havenhq/revideo/commit/325c2442814ca19407fe0060a819aded4456f90e))
* **core:** clear DependencyContext promises once resolved ([#617](https://github.com/havenhq/revideo/issues/617)) ([97b68da](https://github.com/havenhq/revideo/commit/97b68dabfdf86c0e0a188212308b8aba0fb35cab))
* **core:** clear semi-transparent backgrounds ([#424](https://github.com/havenhq/revideo/issues/424)) ([1ebff1c](https://github.com/havenhq/revideo/commit/1ebff1c92bebce56d11c61eb9dadca47f5a80ac1)), closes [#423](https://github.com/havenhq/revideo/issues/423)
* **core:** fix looping ([#217](https://github.com/havenhq/revideo/issues/217)) ([a38e1a7](https://github.com/havenhq/revideo/commit/a38e1a7c8fc21384cc17f3f982802071b8cd0cbf)), closes [#178](https://github.com/havenhq/revideo/issues/178)
* **core:** fix playback state ([#471](https://github.com/havenhq/revideo/issues/471)) ([1c259d0](https://github.com/havenhq/revideo/commit/1c259d0d574bb56dbc8bc448300d9b94ee4d0bc4))
* **core:** fix relative time ([#461](https://github.com/havenhq/revideo/issues/461)) ([8d4946e](https://github.com/havenhq/revideo/commit/8d4946ebf56590bc3934087f95955180b4901566))
* **core:** fix snapshots ([#638](https://github.com/havenhq/revideo/issues/638)) ([437cc5e](https://github.com/havenhq/revideo/commit/437cc5efddbb242b10f7902e18fe15162a45d7bd))
* **core:** fix tree shaking ([#555](https://github.com/havenhq/revideo/issues/555)) ([8de199e](https://github.com/havenhq/revideo/commit/8de199eaf833622a96ad746c984fb7f3a77df4b8))
* **core:** fix Vector2.exactlyEquals ([#437](https://github.com/havenhq/revideo/issues/437)) ([028d264](https://github.com/havenhq/revideo/commit/028d26499d8f3fb34500b22e8dcde2d080c2e2b0))
* **core:** handle malicious event names ([#819](https://github.com/havenhq/revideo/issues/819)) ([aba8eba](https://github.com/havenhq/revideo/commit/aba8ebaf347ac3cbf6a9446c1aa60f629c7c18bd))
* **core:** keep falsy values with deepTween ([#45](https://github.com/havenhq/revideo/issues/45)) ([93c934f](https://github.com/havenhq/revideo/commit/93c934f9b59462581267cca5033bf132b831ce54))
* **core:** playback speed is reset after saving with faulty code ([#204](https://github.com/havenhq/revideo/issues/204)). ([#339](https://github.com/havenhq/revideo/issues/339)) ([6771e5e](https://github.com/havenhq/revideo/commit/6771e5e17edcdc4cce074d7da0962cf71ba6c228))
* **core:** project `variables` ([#690](https://github.com/havenhq/revideo/issues/690)) ([149f39c](https://github.com/havenhq/revideo/commit/149f39c3219aa74115be80490bd6c5f236779b0e)), closes [#689](https://github.com/havenhq/revideo/issues/689)
* **core:** render only within the range ([#436](https://github.com/havenhq/revideo/issues/436)) ([36ccebe](https://github.com/havenhq/revideo/commit/36ccebe5321d84eeaa16f8b74a79c1001ee7ac0b))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* correctly await re-renders ([#918](https://github.com/havenhq/revideo/issues/918)) ([873a9a3](https://github.com/havenhq/revideo/commit/873a9a3eed2676de4cc7f31fbd5ea58817a80aff))
* **docs:** fix last updated footer ([#776](https://github.com/havenhq/revideo/issues/776)) ([09c0085](https://github.com/havenhq/revideo/commit/09c008587fcd4b52edbc5e7599ee378482f4230b)), closes [#767](https://github.com/havenhq/revideo/issues/767)
* empty time events crashing ([a1c53de](https://github.com/havenhq/revideo/commit/a1c53deba7c405ddf1a3b4874f22b63e0b085af9))
* fix compound property setter ([#218](https://github.com/havenhq/revideo/issues/218)) ([6cd1b95](https://github.com/havenhq/revideo/commit/6cd1b952df950554eb637c9f8e82947c415d00c5)), closes [#208](https://github.com/havenhq/revideo/issues/208) [#210](https://github.com/havenhq/revideo/issues/210)
* fix dependency bundling ([#897](https://github.com/havenhq/revideo/issues/897)) ([5376012](https://github.com/havenhq/revideo/commit/5376012cd02b8bca5abc2d3cf5a724662244c449))
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* fix tsdoc comments ([#21](https://github.com/havenhq/revideo/issues/21)) ([4b6cb66](https://github.com/havenhq/revideo/commit/4b6cb660ad82befcfd41188c7a8f9c8c0cba93ed)), closes [#18](https://github.com/havenhq/revideo/issues/18)
* improper cloning of custom fields ([#925](https://github.com/havenhq/revideo/issues/925)) ([4981da7](https://github.com/havenhq/revideo/commit/4981da74e7b2b0e106fa14f1af2eac62d2bf82f4))
* limit fps to positive numbers ([#937](https://github.com/havenhq/revideo/issues/937)) ([c7c0c67](https://github.com/havenhq/revideo/commit/c7c0c6730e1a00e6b23077188bfc2d389e98cff2)), closes [#936](https://github.com/havenhq/revideo/issues/936)
* plug memory leaks ([#385](https://github.com/havenhq/revideo/issues/385)) ([de0af00](https://github.com/havenhq/revideo/commit/de0af00a7d2e019e2a933791c62b7901755be7b0))
* prevent Color tree shaking ([#666](https://github.com/havenhq/revideo/issues/666)) ([e5028e3](https://github.com/havenhq/revideo/commit/e5028e3c176d5ba74dd3f28c2f25672390c76936)), closes [#577](https://github.com/havenhq/revideo/issues/577)
* prevent consumePromises from halting ([#657](https://github.com/havenhq/revideo/issues/657)) ([363a189](https://github.com/havenhq/revideo/commit/363a189b0c7f5926c9d5ae00b58b48e8ed4d9b48))
* previous scene being rendered twice ([#97](https://github.com/havenhq/revideo/issues/97)) ([90205bd](https://github.com/havenhq/revideo/commit/90205bdc1a086abe5f73b04cb4616c6af5ec4377))
* restrict size of cache canvas ([#544](https://github.com/havenhq/revideo/issues/544)) ([49ec554](https://github.com/havenhq/revideo/commit/49ec55490718e503d9a39437ae13c189dc4fe9ea))
* support color to null tweening ([#387](https://github.com/havenhq/revideo/issues/387)) ([02e9f22](https://github.com/havenhq/revideo/commit/02e9f22027a1c3a85ffcc259aeca913318fb6f54))
* support hmr when navigating ([370ea16](https://github.com/havenhq/revideo/commit/370ea1676a1c34313c0fb917c0f0691538f72016))
* support legacy imports again ([#868](https://github.com/havenhq/revideo/issues/868)) ([77c4e2e](https://github.com/havenhq/revideo/commit/77c4e2eeb8b0f73bdef1f72e3d81f34c79748929))
* support multiple async players ([#450](https://github.com/havenhq/revideo/issues/450)) ([d7ec469](https://github.com/havenhq/revideo/commit/d7ec469e747eefd909f4dd59dd713f5d86308222)), closes [#434](https://github.com/havenhq/revideo/issues/434)
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Code Refactoring

* introduce improved names ([#425](https://github.com/havenhq/revideo/issues/425)) ([4a2188d](https://github.com/havenhq/revideo/commit/4a2188d339587fa658b2134befc3fe63c835c5d7))


### Features

* **2d:** add default computed values for signals ([#259](https://github.com/havenhq/revideo/issues/259)) ([18f61a6](https://github.com/havenhq/revideo/commit/18f61a668420dec8afba52d52a6557e7a7919ba2))
* **2d:** add fromDegrees method to Vector2 ([#622](https://github.com/havenhq/revideo/issues/622)) ([e78b9d5](https://github.com/havenhq/revideo/commit/e78b9d51674269ab82e0c2fe4c475b5799b94975))
* **2d:** add Path component ([#700](https://github.com/havenhq/revideo/issues/700)) ([2128b6b](https://github.com/havenhq/revideo/commit/2128b6bf871cabe19e1abc749f18945c78c01f84))
* **2d:** add save and restore methods to nodes ([#406](https://github.com/havenhq/revideo/issues/406)) ([870e194](https://github.com/havenhq/revideo/commit/870e1947d97382bc6d82857c077140bbef7cf7e8))
* **2d:** code bounding box helpers ([#948](https://github.com/havenhq/revideo/issues/948)) ([0ffd56f](https://github.com/havenhq/revideo/commit/0ffd56f5f8076913e687e5b908311aa7832d8b7b))
* **2d:** improve property declarations ([27e7d26](https://github.com/havenhq/revideo/commit/27e7d267ee91bf1e8ca79686b6ec31347f9f4d41))
* **2d:** improve Rect corner radius ([#120](https://github.com/havenhq/revideo/issues/120)) ([b471fe0](https://github.com/havenhq/revideo/commit/b471fe0e37c0a426d3af8299c9c3c22539e7df05))
* **2d:** nested Txt nodes ([#861](https://github.com/havenhq/revideo/issues/861)) ([f2786d0](https://github.com/havenhq/revideo/commit/f2786d0cd0d06065ca1e9eb9f6b4c11a74b6c283)), closes [#540](https://github.com/havenhq/revideo/issues/540)
* **2d:** support tweening in applyState ([#859](https://github.com/havenhq/revideo/issues/859)) ([b7ed2e2](https://github.com/havenhq/revideo/commit/b7ed2e24773227e5b576ff056eb23de9b9ff1676))
* add `useDuration` helper ([#226](https://github.com/havenhq/revideo/issues/226)) ([fa97d6c](https://github.com/havenhq/revideo/commit/fa97d6c7f076f287c9b86d2f8852341bd368ef1c)), closes [#171](https://github.com/havenhq/revideo/issues/171)
* add advanced caching ([#69](https://github.com/havenhq/revideo/issues/69)) ([2a644c9](https://github.com/havenhq/revideo/commit/2a644c9315acfcc5280a5eacc9904df140a61e4f))
* add audio volume control through arrow keys ([#856](https://github.com/havenhq/revideo/issues/856)) ([8b86fd4](https://github.com/havenhq/revideo/commit/8b86fd4e70f91a0d5b1150d760427ca355666341))
* add base class for shapes ([#67](https://github.com/havenhq/revideo/issues/67)) ([d38c172](https://github.com/havenhq/revideo/commit/d38c1724e129c553739cbfc27c4e5cd8f737f067))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add cloning ([#80](https://github.com/havenhq/revideo/issues/80)) ([47d7a0f](https://github.com/havenhq/revideo/commit/47d7a0fa5da9a03d8ed91557db651f6f960e28b1))
* add CodeBlock component based on code-fns to 2D ([#78](https://github.com/havenhq/revideo/issues/78)) ([ad346f1](https://github.com/havenhq/revideo/commit/ad346f118d63b1e321ec315e1c70b925670124a1))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add default renderer ([#63](https://github.com/havenhq/revideo/issues/63)) ([9255490](https://github.com/havenhq/revideo/commit/92554900965fe088538f5e703dbab2fd84f904d7)), closes [#56](https://github.com/havenhq/revideo/issues/56) [#58](https://github.com/havenhq/revideo/issues/58)
* add DEG2RAD and RAD2DEG constants ([#630](https://github.com/havenhq/revideo/issues/630)) ([01801e8](https://github.com/havenhq/revideo/commit/01801e8766058e75a6a020400650fb00f8f430cc))
* add deprecation support ([#130](https://github.com/havenhq/revideo/issues/130)) ([da0e104](https://github.com/havenhq/revideo/commit/da0e104451af72eedb3eedd998f60b305fffdb0e))
* add docs to monorepo ([#22](https://github.com/havenhq/revideo/issues/22)) ([129d557](https://github.com/havenhq/revideo/commit/129d557004c63df7a4ed514d0503709f03cf6e6b))
* add E2E testing ([#101](https://github.com/havenhq/revideo/issues/101)) ([6398c54](https://github.com/havenhq/revideo/commit/6398c54e4c4d6667ce9f45b9bbef6ea110ea2215)), closes [#42](https://github.com/havenhq/revideo/issues/42)
* add experimental features ([#876](https://github.com/havenhq/revideo/issues/876)) ([498d387](https://github.com/havenhq/revideo/commit/498d3871d05d4dcc83453654bec7762d2ab32e7e))
* add Grid node ([e1f83da](https://github.com/havenhq/revideo/commit/e1f83da1f43d20d392df4acb11e3df9cc457585d))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add node spawners ([#149](https://github.com/havenhq/revideo/issues/149)) ([da18a4e](https://github.com/havenhq/revideo/commit/da18a4e24104022a84ecd6cec1666b520186058f))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add polyline ([#84](https://github.com/havenhq/revideo/issues/84)) ([4ceaf84](https://github.com/havenhq/revideo/commit/4ceaf842915ac43d81f292c58a4dc73a8d1bb8e9))
* add random number generator ([#116](https://github.com/havenhq/revideo/issues/116)) ([d505312](https://github.com/havenhq/revideo/commit/d5053123eef308c7a2a61d92b6e76c637f4ed0b8)), closes [#14](https://github.com/havenhq/revideo/issues/14)
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add reparent helper ([80b95a9](https://github.com/havenhq/revideo/commit/80b95a9ce89d4a2eeea7e467257486e961602d69))
* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* add Text and Image components ([#70](https://github.com/havenhq/revideo/issues/70)) ([85c7dcd](https://github.com/havenhq/revideo/commit/85c7dcdb4f8ca2f0bfb03950c85a8d6f6652fcdf))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/havenhq/revideo/issues/9)) ([9e0d67b](https://github.com/havenhq/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* added file type and quality options to rendering panel ([#50](https://github.com/havenhq/revideo/issues/50)) ([bee71ef](https://github.com/havenhq/revideo/commit/bee71ef2673c269db47a4433831720b7ad0fb4e8)), closes [#24](https://github.com/havenhq/revideo/issues/24)
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* auto meta fields ([#565](https://github.com/havenhq/revideo/issues/565)) ([645af6d](https://github.com/havenhq/revideo/commit/645af6d2b7e8d9332b6f08419c318ee9434d7f3f))
* better naming conventions ([#62](https://github.com/havenhq/revideo/issues/62)) ([a9d764f](https://github.com/havenhq/revideo/commit/a9d764fbceb639497ef45f44c90f9b6e408213d3))
* convert built-in types to webgl ([#929](https://github.com/havenhq/revideo/issues/929)) ([a0f0b7d](https://github.com/havenhq/revideo/commit/a0f0b7d8996547e1a316097422ec02bddeeccec6))
* **core:** accept PossibleMatrix2D when transforming bbox ([#770](https://github.com/havenhq/revideo/issues/770)) ([ae05282](https://github.com/havenhq/revideo/commit/ae0528266f5794aa0517f32b897c5fe6ff092a58))
* **core:** add `debug` helper function ([#293](https://github.com/havenhq/revideo/issues/293)) ([b870873](https://github.com/havenhq/revideo/commit/b8708732af0fc08d9ff9eeecbbb77d65f1b36eb8))
* **core:** add `gauss` function to `Random` ([#709](https://github.com/havenhq/revideo/issues/709)) ([d7de3d5](https://github.com/havenhq/revideo/commit/d7de3d56d05dc88c7cbd557a73a25d083abb54e4))
* **core:** add `loopFor` function ([#650](https://github.com/havenhq/revideo/issues/650)) ([a42eb52](https://github.com/havenhq/revideo/commit/a42eb520fef7de06038f0df9eaad1fa35122c97a))
* **core:** add `loopUntil` function ([#624](https://github.com/havenhq/revideo/issues/624)) ([b7aa4b5](https://github.com/havenhq/revideo/commit/b7aa4b57c76374e67bd19ce40c44cd650cf67327))
* **core:** add configurable line numbers ([#44](https://github.com/havenhq/revideo/issues/44)) ([831334c](https://github.com/havenhq/revideo/commit/831334ca32a504991e875af37446fef4f055c285)), closes [#12](https://github.com/havenhq/revideo/issues/12)
* **core:** add fadeTransition ([#384](https://github.com/havenhq/revideo/issues/384)) ([a248785](https://github.com/havenhq/revideo/commit/a248785e87d1c6ebc08581f4fda6be428a89824c))
* **core:** add helper method for arc lerps ([#640](https://github.com/havenhq/revideo/issues/640)) ([bc304d2](https://github.com/havenhq/revideo/commit/bc304d242e4819650fa86636180ac5594ba743d3))
* **core:** add intersects method to BBox ([#485](https://github.com/havenhq/revideo/issues/485)) ([604b0e7](https://github.com/havenhq/revideo/commit/604b0e7c22b4e5d196310e650f7c764526a80712))
* **core:** add Matrix2D type ([#340](https://github.com/havenhq/revideo/issues/340)) ([66b41e6](https://github.com/havenhq/revideo/commit/66b41e6beaca5c2ba4b6bd1a7e68ca16d183b0e9))
* **core:** add rotate and polarLerp methods to vector ([#756](https://github.com/havenhq/revideo/issues/756)) ([a18bac3](https://github.com/havenhq/revideo/commit/a18bac3c1755fa3e3240b5469ac7bc1f08b4fd24))
* **core:** add spring interpolation ([#356](https://github.com/havenhq/revideo/issues/356)) ([1463b15](https://github.com/havenhq/revideo/commit/1463b1592e22fad9d8298c11270e2099119e2229))
* **core:** add static properties to Vector2 corresponding to Origins ([#855](https://github.com/havenhq/revideo/issues/855)) ([9bbd249](https://github.com/havenhq/revideo/commit/9bbd249e1f7864a49ff2da49bc18d9309888f902)), closes [#844](https://github.com/havenhq/revideo/issues/844)
* **core:** add step parameter to range function ([#373](https://github.com/havenhq/revideo/issues/373)) ([923209a](https://github.com/havenhq/revideo/commit/923209a4106c8e7f570853dcc47a10e65e0d04d8))
* **core:** additional easing functions ([#274](https://github.com/havenhq/revideo/issues/274)) ([f81ce43](https://github.com/havenhq/revideo/commit/f81ce43019fe253e99f4ab6311c2251b40e2eae3))
* **core:** allow getting real size of scenes ([#889](https://github.com/havenhq/revideo/issues/889)) ([3a6a672](https://github.com/havenhq/revideo/commit/3a6a672bed9098bec81d9c5347459317cbbf4c2a))
* **core:** allow ordering of scenes during transition ([#832](https://github.com/havenhq/revideo/issues/832)) ([7a62b59](https://github.com/havenhq/revideo/commit/7a62b59c377dca8bf1f56bb551b47b9a75a6afba)), closes [#369](https://github.com/havenhq/revideo/issues/369)
* **core:** disallow tweening to/from undefined values ([#257](https://github.com/havenhq/revideo/issues/257)) ([d4bb791](https://github.com/havenhq/revideo/commit/d4bb79145300b52c4b4d101df2afaff5ea11a9e9))
* **core:** error double event name ([#341](https://github.com/havenhq/revideo/issues/341)) ([053b2a6](https://github.com/havenhq/revideo/commit/053b2a6c22c4e726e3962fdaf0a2e8d149889a9b))
* **core:** expand Vector2 type ([#579](https://github.com/havenhq/revideo/issues/579)) ([010bba5](https://github.com/havenhq/revideo/commit/010bba593e1c3ce368ab409dce09dbde8f999958))
* **core:** helper methods for references ([#775](https://github.com/havenhq/revideo/issues/775)) ([3255add](https://github.com/havenhq/revideo/commit/3255add1b05a37017d60c2eaccf4368ab4f7f568))
* **core:** hot module replacement for audio ([#793](https://github.com/havenhq/revideo/issues/793)) ([d40c1a8](https://github.com/havenhq/revideo/commit/d40c1a83c645c8984cca1ebc6fe687b445a0550c))
* **core:** improve `SignalGenerator` chaining ([#651](https://github.com/havenhq/revideo/issues/651)) ([de72f1f](https://github.com/havenhq/revideo/commit/de72f1f70edf7cc48fd670d9b38e0cc27f8bdb57)), closes [#480](https://github.com/havenhq/revideo/issues/480)
* **core:** improve loop function ([#952](https://github.com/havenhq/revideo/issues/952)) ([66c18bb](https://github.com/havenhq/revideo/commit/66c18bb41617a4fbe9e3be5253b3ced02caf0cae))
* **core:** presentation mode ([#486](https://github.com/havenhq/revideo/issues/486)) ([c4f2e48](https://github.com/havenhq/revideo/commit/c4f2e48ae6c65804ae46edd88c29125b7f983d5c))
* **core:** preserve custom fields in meta files ([#534](https://github.com/havenhq/revideo/issues/534)) ([2e3e22e](https://github.com/havenhq/revideo/commit/2e3e22efd62ba671624526fc10ea7dd2a04a5240))
* **core:** seek to beginning of timeline in disable loop mode ([#823](https://github.com/havenhq/revideo/issues/823)) ([3595646](https://github.com/havenhq/revideo/commit/359564645575c6f20870f4bf9642e72404717f14)), closes [#822](https://github.com/havenhq/revideo/issues/822)
* **core:** spawn function ([#951](https://github.com/havenhq/revideo/issues/951)) ([51d8cf0](https://github.com/havenhq/revideo/commit/51d8cf0b64592fe56a0e31b5c3acc155226a9b2e))
* **core:** support Origin in slideTransition ([#801](https://github.com/havenhq/revideo/issues/801)) ([0a3df28](https://github.com/havenhq/revideo/commit/0a3df2829fd7b308604eda3d005e90daf032e284))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* **core:** thread pausing ([#639](https://github.com/havenhq/revideo/issues/639)) ([c0aab58](https://github.com/havenhq/revideo/commit/c0aab588b18c267d3bc04e25b2f80c792496dda2))
* **core:** tree shaking ([#523](https://github.com/havenhq/revideo/issues/523)) ([65fec78](https://github.com/havenhq/revideo/commit/65fec7825fda33812b13f57bfeb1d82193a5d190))
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display array values in inspector ([#670](https://github.com/havenhq/revideo/issues/670)) ([e71d74c](https://github.com/havenhq/revideo/commit/e71d74c9c04995393ad8ee942b8e6e5baa6f982f))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* **docs:** fiddle editor ([#542](https://github.com/havenhq/revideo/issues/542)) ([3c68fef](https://github.com/havenhq/revideo/commit/3c68fefdf7bf375ee9345aba7dbf9e5ff35e3c3d))
* editor improvements ([#121](https://github.com/havenhq/revideo/issues/121)) ([e8b32ce](https://github.com/havenhq/revideo/commit/e8b32ceff1b8216282c4b5713508ce1172645e20))
* export everything from entry points ([#710](https://github.com/havenhq/revideo/issues/710)) ([3c885d9](https://github.com/havenhq/revideo/commit/3c885d9083b52fbbaccf1e2560ae50817949bc52))
* expose revideo project as web service ([#29](https://github.com/havenhq/revideo/issues/29)) ([c2a2a96](https://github.com/havenhq/revideo/commit/c2a2a96db199f772471833cf51bddd2574f08289))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* finalize custom exporters ([#660](https://github.com/havenhq/revideo/issues/660)) ([6a50430](https://github.com/havenhq/revideo/commit/6a50430cdf9928992ca078eba39c484a5253da2b))
* implement absolute scale setter ([842079a](https://github.com/havenhq/revideo/commit/842079a6547af4032719c85837df3db7c1c6d30a))
* improve async signals ([#156](https://github.com/havenhq/revideo/issues/156)) ([db27b9d](https://github.com/havenhq/revideo/commit/db27b9d5fb69a88f42afd98c86c4a1cdceb88ea1))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* improve image error handling ([#847](https://github.com/havenhq/revideo/issues/847)) ([db09d53](https://github.com/havenhq/revideo/commit/db09d5305a3c0507b035e3cd347eaa65b23d7d2e))
* introduce basic caching ([#68](https://github.com/havenhq/revideo/issues/68)) ([6420d36](https://github.com/havenhq/revideo/commit/6420d362d0e4ae058f55b6ff6bb2a3a32dec559b))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* merge properties and signals ([#124](https://github.com/havenhq/revideo/issues/124)) ([da3ba83](https://github.com/havenhq/revideo/commit/da3ba83d82ee74f5a5c3631b07597f08cdf9e8e4))
* meta field descriptions ([#664](https://github.com/havenhq/revideo/issues/664)) ([80c9d07](https://github.com/havenhq/revideo/commit/80c9d07f88f4a3df0f99e5741b31313f891a5d51))
* minor improvements ([403c7c2](https://github.com/havenhq/revideo/commit/403c7c27ad969880a14c498ec6cefb9e7e7b7544))
* minor improvements ([#77](https://github.com/havenhq/revideo/issues/77)) ([7c6e584](https://github.com/havenhq/revideo/commit/7c6e584aca353c9af55f0acb61b32b5f99727dba))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* navigate to slide source ([#490](https://github.com/havenhq/revideo/issues/490)) ([b5ae4bf](https://github.com/havenhq/revideo/commit/b5ae4bf37076b262a20949cca030db3902186c8d))
* new animator ([#91](https://github.com/havenhq/revideo/issues/91)) ([d85f2f8](https://github.com/havenhq/revideo/commit/d85f2f8a54c0f8bbfbc451884385f30e5b3ec206))
* new Code node ([#946](https://github.com/havenhq/revideo/issues/946)) ([26e55a3](https://github.com/havenhq/revideo/commit/26e55a37c416fb1313c8aadf40eed2824b45d330))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* new plugin hooks ([#723](https://github.com/havenhq/revideo/issues/723)) ([9a2b5ab](https://github.com/havenhq/revideo/commit/9a2b5ab8be0d001414fd00da3053d408e00fd1cd))
* open time events in editor ([#87](https://github.com/havenhq/revideo/issues/87)) ([74b781d](https://github.com/havenhq/revideo/commit/74b781d57fca7ef1d10904673276f2a7354c01b8))
* plugin architecture ([#564](https://github.com/havenhq/revideo/issues/564)) ([1c375b8](https://github.com/havenhq/revideo/commit/1c375b81e0af8a76467d42dd46a7031adb9d71d3))
* project variables ([#255](https://github.com/havenhq/revideo/issues/255)) ([4883295](https://github.com/havenhq/revideo/commit/488329525939928af52b4a4d8488f1e1cd4cf6f7))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/havenhq/revideo/issues/33)) ([a6e1bcd](https://github.com/havenhq/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* signal error handling ([#89](https://github.com/havenhq/revideo/issues/89)) ([472ac65](https://github.com/havenhq/revideo/commit/472ac65938b804a6b698c8522ec0c3b6bdbcf1b1))
* simplify size access further ([#66](https://github.com/havenhq/revideo/issues/66)) ([9091a5e](https://github.com/havenhq/revideo/commit/9091a5e05d8fadf72c50832c7c4467ac4424b72c))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to monorepo ([6c8d190](https://github.com/havenhq/revideo/commit/6c8d190c7d3d24bb4eac29eeb4b6d1abf370e160)), closes [#23](https://github.com/havenhq/revideo/issues/23) [#86](https://github.com/havenhq/revideo/issues/86) [#49](https://github.com/havenhq/revideo/issues/49)
* switch to signals ([#64](https://github.com/havenhq/revideo/issues/64)) ([d22d237](https://github.com/havenhq/revideo/commit/d22d23728597e6fa82ea5c5a99a6c0a56819bded))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* turn Layout into node ([#75](https://github.com/havenhq/revideo/issues/75)) ([cdf8dc0](https://github.com/havenhq/revideo/commit/cdf8dc0a35522482dee2dd78a69606b79f52246e))
* **ui:** estimate remaining rendering time ([#795](https://github.com/havenhq/revideo/issues/795)) ([1a46148](https://github.com/havenhq/revideo/commit/1a4614801869ab36827ca857d66eed8de9cffd09)), closes [#784](https://github.com/havenhq/revideo/issues/784)
* **ui:** small improvements ([#833](https://github.com/havenhq/revideo/issues/833)) ([f44400c](https://github.com/havenhq/revideo/commit/f44400c458a1d7f49520494f01efb9936f4df83e))
* **ui:** timeline scrubbing ([#862](https://github.com/havenhq/revideo/issues/862)) ([211b9a4](https://github.com/havenhq/revideo/commit/211b9a4327720afd1ce0ff93868a501c2fd745aa)), closes [#286](https://github.com/havenhq/revideo/issues/286)
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* unify references and signals ([#137](https://github.com/havenhq/revideo/issues/137)) ([063aede](https://github.com/havenhq/revideo/commit/063aede0842f948d2c6704c6edd426e954bb4668))
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)
* use PossibleVector2 in Vector2 methods ([#478](https://github.com/havenhq/revideo/issues/478)) ([8ccb44a](https://github.com/havenhq/revideo/commit/8ccb44a265016e25b2b177a65d44f801c9d861f9))
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))
* world space cache ([#498](https://github.com/havenhq/revideo/issues/498)) ([633e9e1](https://github.com/havenhq/revideo/commit/633e9e140dfbbe397df6ddc1f96ed30782ddce94)), closes [#342](https://github.com/havenhq/revideo/issues/342)


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))


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
* change names of timing and interpolation functions

`TweenFunction` is now called `InterpolationFunction`.
Individual functions are now called `[type]Lerp` instead of `[type]Tween`.
For instance: `colorTween` is now `colorLerp`.

`InterpolationFunction` is now called `TimingFunction`.
This name is better aligned with the CSS spec.
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





## [0.2.7](https://github.com/havenhq/revideo/compare/v0.2.6...v0.2.7) (2024-04-10)

**Note:** Version bump only for package @revideo/core





## 0.2.6 (2024-04-10)


### Bug Fixes

* **2d:** handle floating point errors in acos ([#381](https://github.com/havenhq/revideo/issues/381)) ([5bca8fd](https://github.com/havenhq/revideo/commit/5bca8fd0bbdcf28f2793c124b7d6b0afd560c4b8))
* **core:** add missing type references ([#41](https://github.com/havenhq/revideo/issues/41)) ([325c244](https://github.com/havenhq/revideo/commit/325c2442814ca19407fe0060a819aded4456f90e))
* **core:** clear DependencyContext promises once resolved ([#617](https://github.com/havenhq/revideo/issues/617)) ([97b68da](https://github.com/havenhq/revideo/commit/97b68dabfdf86c0e0a188212308b8aba0fb35cab))
* **core:** clear semi-transparent backgrounds ([#424](https://github.com/havenhq/revideo/issues/424)) ([1ebff1c](https://github.com/havenhq/revideo/commit/1ebff1c92bebce56d11c61eb9dadca47f5a80ac1)), closes [#423](https://github.com/havenhq/revideo/issues/423)
* **core:** fix looping ([#217](https://github.com/havenhq/revideo/issues/217)) ([a38e1a7](https://github.com/havenhq/revideo/commit/a38e1a7c8fc21384cc17f3f982802071b8cd0cbf)), closes [#178](https://github.com/havenhq/revideo/issues/178)
* **core:** fix playback state ([#471](https://github.com/havenhq/revideo/issues/471)) ([1c259d0](https://github.com/havenhq/revideo/commit/1c259d0d574bb56dbc8bc448300d9b94ee4d0bc4))
* **core:** fix relative time ([#461](https://github.com/havenhq/revideo/issues/461)) ([8d4946e](https://github.com/havenhq/revideo/commit/8d4946ebf56590bc3934087f95955180b4901566))
* **core:** fix snapshots ([#638](https://github.com/havenhq/revideo/issues/638)) ([437cc5e](https://github.com/havenhq/revideo/commit/437cc5efddbb242b10f7902e18fe15162a45d7bd))
* **core:** fix tree shaking ([#555](https://github.com/havenhq/revideo/issues/555)) ([8de199e](https://github.com/havenhq/revideo/commit/8de199eaf833622a96ad746c984fb7f3a77df4b8))
* **core:** fix Vector2.exactlyEquals ([#437](https://github.com/havenhq/revideo/issues/437)) ([028d264](https://github.com/havenhq/revideo/commit/028d26499d8f3fb34500b22e8dcde2d080c2e2b0))
* **core:** handle malicious event names ([#819](https://github.com/havenhq/revideo/issues/819)) ([aba8eba](https://github.com/havenhq/revideo/commit/aba8ebaf347ac3cbf6a9446c1aa60f629c7c18bd))
* **core:** keep falsy values with deepTween ([#45](https://github.com/havenhq/revideo/issues/45)) ([93c934f](https://github.com/havenhq/revideo/commit/93c934f9b59462581267cca5033bf132b831ce54))
* **core:** playback speed is reset after saving with faulty code ([#204](https://github.com/havenhq/revideo/issues/204)). ([#339](https://github.com/havenhq/revideo/issues/339)) ([6771e5e](https://github.com/havenhq/revideo/commit/6771e5e17edcdc4cce074d7da0962cf71ba6c228))
* **core:** project `variables` ([#690](https://github.com/havenhq/revideo/issues/690)) ([149f39c](https://github.com/havenhq/revideo/commit/149f39c3219aa74115be80490bd6c5f236779b0e)), closes [#689](https://github.com/havenhq/revideo/issues/689)
* **core:** render only within the range ([#436](https://github.com/havenhq/revideo/issues/436)) ([36ccebe](https://github.com/havenhq/revideo/commit/36ccebe5321d84eeaa16f8b74a79c1001ee7ac0b))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* correctly await re-renders ([#918](https://github.com/havenhq/revideo/issues/918)) ([873a9a3](https://github.com/havenhq/revideo/commit/873a9a3eed2676de4cc7f31fbd5ea58817a80aff))
* **docs:** fix last updated footer ([#776](https://github.com/havenhq/revideo/issues/776)) ([09c0085](https://github.com/havenhq/revideo/commit/09c008587fcd4b52edbc5e7599ee378482f4230b)), closes [#767](https://github.com/havenhq/revideo/issues/767)
* empty time events crashing ([a1c53de](https://github.com/havenhq/revideo/commit/a1c53deba7c405ddf1a3b4874f22b63e0b085af9))
* fix compound property setter ([#218](https://github.com/havenhq/revideo/issues/218)) ([6cd1b95](https://github.com/havenhq/revideo/commit/6cd1b952df950554eb637c9f8e82947c415d00c5)), closes [#208](https://github.com/havenhq/revideo/issues/208) [#210](https://github.com/havenhq/revideo/issues/210)
* fix dependency bundling ([#897](https://github.com/havenhq/revideo/issues/897)) ([5376012](https://github.com/havenhq/revideo/commit/5376012cd02b8bca5abc2d3cf5a724662244c449))
* fix scaffolding ([#93](https://github.com/havenhq/revideo/issues/93)) ([95c55ed](https://github.com/havenhq/revideo/commit/95c55ed338127dad22f42b24c8f6b101b8863be7))
* fix tsdoc comments ([#21](https://github.com/havenhq/revideo/issues/21)) ([4b6cb66](https://github.com/havenhq/revideo/commit/4b6cb660ad82befcfd41188c7a8f9c8c0cba93ed)), closes [#18](https://github.com/havenhq/revideo/issues/18)
* improper cloning of custom fields ([#925](https://github.com/havenhq/revideo/issues/925)) ([4981da7](https://github.com/havenhq/revideo/commit/4981da74e7b2b0e106fa14f1af2eac62d2bf82f4))
* limit fps to positive numbers ([#937](https://github.com/havenhq/revideo/issues/937)) ([c7c0c67](https://github.com/havenhq/revideo/commit/c7c0c6730e1a00e6b23077188bfc2d389e98cff2)), closes [#936](https://github.com/havenhq/revideo/issues/936)
* plug memory leaks ([#385](https://github.com/havenhq/revideo/issues/385)) ([de0af00](https://github.com/havenhq/revideo/commit/de0af00a7d2e019e2a933791c62b7901755be7b0))
* prevent Color tree shaking ([#666](https://github.com/havenhq/revideo/issues/666)) ([e5028e3](https://github.com/havenhq/revideo/commit/e5028e3c176d5ba74dd3f28c2f25672390c76936)), closes [#577](https://github.com/havenhq/revideo/issues/577)
* prevent consumePromises from halting ([#657](https://github.com/havenhq/revideo/issues/657)) ([363a189](https://github.com/havenhq/revideo/commit/363a189b0c7f5926c9d5ae00b58b48e8ed4d9b48))
* previous scene being rendered twice ([#97](https://github.com/havenhq/revideo/issues/97)) ([90205bd](https://github.com/havenhq/revideo/commit/90205bdc1a086abe5f73b04cb4616c6af5ec4377))
* restrict size of cache canvas ([#544](https://github.com/havenhq/revideo/issues/544)) ([49ec554](https://github.com/havenhq/revideo/commit/49ec55490718e503d9a39437ae13c189dc4fe9ea))
* support color to null tweening ([#387](https://github.com/havenhq/revideo/issues/387)) ([02e9f22](https://github.com/havenhq/revideo/commit/02e9f22027a1c3a85ffcc259aeca913318fb6f54))
* support hmr when navigating ([370ea16](https://github.com/havenhq/revideo/commit/370ea1676a1c34313c0fb917c0f0691538f72016))
* support legacy imports again ([#868](https://github.com/havenhq/revideo/issues/868)) ([77c4e2e](https://github.com/havenhq/revideo/commit/77c4e2eeb8b0f73bdef1f72e3d81f34c79748929))
* support multiple async players ([#450](https://github.com/havenhq/revideo/issues/450)) ([d7ec469](https://github.com/havenhq/revideo/commit/d7ec469e747eefd909f4dd59dd713f5d86308222)), closes [#434](https://github.com/havenhq/revideo/issues/434)
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Code Refactoring

* introduce improved names ([#425](https://github.com/havenhq/revideo/issues/425)) ([4a2188d](https://github.com/havenhq/revideo/commit/4a2188d339587fa658b2134befc3fe63c835c5d7))


### Features

* **2d:** add default computed values for signals ([#259](https://github.com/havenhq/revideo/issues/259)) ([18f61a6](https://github.com/havenhq/revideo/commit/18f61a668420dec8afba52d52a6557e7a7919ba2))
* **2d:** add fromDegrees method to Vector2 ([#622](https://github.com/havenhq/revideo/issues/622)) ([e78b9d5](https://github.com/havenhq/revideo/commit/e78b9d51674269ab82e0c2fe4c475b5799b94975))
* **2d:** add Path component ([#700](https://github.com/havenhq/revideo/issues/700)) ([2128b6b](https://github.com/havenhq/revideo/commit/2128b6bf871cabe19e1abc749f18945c78c01f84))
* **2d:** add save and restore methods to nodes ([#406](https://github.com/havenhq/revideo/issues/406)) ([870e194](https://github.com/havenhq/revideo/commit/870e1947d97382bc6d82857c077140bbef7cf7e8))
* **2d:** code bounding box helpers ([#948](https://github.com/havenhq/revideo/issues/948)) ([0ffd56f](https://github.com/havenhq/revideo/commit/0ffd56f5f8076913e687e5b908311aa7832d8b7b))
* **2d:** improve property declarations ([27e7d26](https://github.com/havenhq/revideo/commit/27e7d267ee91bf1e8ca79686b6ec31347f9f4d41))
* **2d:** improve Rect corner radius ([#120](https://github.com/havenhq/revideo/issues/120)) ([b471fe0](https://github.com/havenhq/revideo/commit/b471fe0e37c0a426d3af8299c9c3c22539e7df05))
* **2d:** nested Txt nodes ([#861](https://github.com/havenhq/revideo/issues/861)) ([f2786d0](https://github.com/havenhq/revideo/commit/f2786d0cd0d06065ca1e9eb9f6b4c11a74b6c283)), closes [#540](https://github.com/havenhq/revideo/issues/540)
* **2d:** support tweening in applyState ([#859](https://github.com/havenhq/revideo/issues/859)) ([b7ed2e2](https://github.com/havenhq/revideo/commit/b7ed2e24773227e5b576ff056eb23de9b9ff1676))
* add `useDuration` helper ([#226](https://github.com/havenhq/revideo/issues/226)) ([fa97d6c](https://github.com/havenhq/revideo/commit/fa97d6c7f076f287c9b86d2f8852341bd368ef1c)), closes [#171](https://github.com/havenhq/revideo/issues/171)
* add advanced caching ([#69](https://github.com/havenhq/revideo/issues/69)) ([2a644c9](https://github.com/havenhq/revideo/commit/2a644c9315acfcc5280a5eacc9904df140a61e4f))
* add audio volume control through arrow keys ([#856](https://github.com/havenhq/revideo/issues/856)) ([8b86fd4](https://github.com/havenhq/revideo/commit/8b86fd4e70f91a0d5b1150d760427ca355666341))
* add base class for shapes ([#67](https://github.com/havenhq/revideo/issues/67)) ([d38c172](https://github.com/havenhq/revideo/commit/d38c1724e129c553739cbfc27c4e5cd8f737f067))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add cloning ([#80](https://github.com/havenhq/revideo/issues/80)) ([47d7a0f](https://github.com/havenhq/revideo/commit/47d7a0fa5da9a03d8ed91557db651f6f960e28b1))
* add CodeBlock component based on code-fns to 2D ([#78](https://github.com/havenhq/revideo/issues/78)) ([ad346f1](https://github.com/havenhq/revideo/commit/ad346f118d63b1e321ec315e1c70b925670124a1))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add default renderer ([#63](https://github.com/havenhq/revideo/issues/63)) ([9255490](https://github.com/havenhq/revideo/commit/92554900965fe088538f5e703dbab2fd84f904d7)), closes [#56](https://github.com/havenhq/revideo/issues/56) [#58](https://github.com/havenhq/revideo/issues/58)
* add DEG2RAD and RAD2DEG constants ([#630](https://github.com/havenhq/revideo/issues/630)) ([01801e8](https://github.com/havenhq/revideo/commit/01801e8766058e75a6a020400650fb00f8f430cc))
* add deprecation support ([#130](https://github.com/havenhq/revideo/issues/130)) ([da0e104](https://github.com/havenhq/revideo/commit/da0e104451af72eedb3eedd998f60b305fffdb0e))
* add docs to monorepo ([#22](https://github.com/havenhq/revideo/issues/22)) ([129d557](https://github.com/havenhq/revideo/commit/129d557004c63df7a4ed514d0503709f03cf6e6b))
* add E2E testing ([#101](https://github.com/havenhq/revideo/issues/101)) ([6398c54](https://github.com/havenhq/revideo/commit/6398c54e4c4d6667ce9f45b9bbef6ea110ea2215)), closes [#42](https://github.com/havenhq/revideo/issues/42)
* add experimental features ([#876](https://github.com/havenhq/revideo/issues/876)) ([498d387](https://github.com/havenhq/revideo/commit/498d3871d05d4dcc83453654bec7762d2ab32e7e))
* add Grid node ([e1f83da](https://github.com/havenhq/revideo/commit/e1f83da1f43d20d392df4acb11e3df9cc457585d))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add node spawners ([#149](https://github.com/havenhq/revideo/issues/149)) ([da18a4e](https://github.com/havenhq/revideo/commit/da18a4e24104022a84ecd6cec1666b520186058f))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add polyline ([#84](https://github.com/havenhq/revideo/issues/84)) ([4ceaf84](https://github.com/havenhq/revideo/commit/4ceaf842915ac43d81f292c58a4dc73a8d1bb8e9))
* add random number generator ([#116](https://github.com/havenhq/revideo/issues/116)) ([d505312](https://github.com/havenhq/revideo/commit/d5053123eef308c7a2a61d92b6e76c637f4ed0b8)), closes [#14](https://github.com/havenhq/revideo/issues/14)
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add reparent helper ([80b95a9](https://github.com/havenhq/revideo/commit/80b95a9ce89d4a2eeea7e467257486e961602d69))
* add scaffolding package ([#36](https://github.com/havenhq/revideo/issues/36)) ([266a561](https://github.com/havenhq/revideo/commit/266a561c619b57b403ec9c64185985b48bff29da)), closes [#30](https://github.com/havenhq/revideo/issues/30)
* add Text and Image components ([#70](https://github.com/havenhq/revideo/issues/70)) ([85c7dcd](https://github.com/havenhq/revideo/commit/85c7dcdb4f8ca2f0bfb03950c85a8d6f6652fcdf))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* add volume parameter for media and make playbackrate work with audio export ([#9](https://github.com/havenhq/revideo/issues/9)) ([9e0d67b](https://github.com/havenhq/revideo/commit/9e0d67bade97ab6aefb9198c3b7910e26a857ffa))
* added file type and quality options to rendering panel ([#50](https://github.com/havenhq/revideo/issues/50)) ([bee71ef](https://github.com/havenhq/revideo/commit/bee71ef2673c269db47a4433831720b7ad0fb4e8)), closes [#24](https://github.com/havenhq/revideo/issues/24)
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* auto meta fields ([#565](https://github.com/havenhq/revideo/issues/565)) ([645af6d](https://github.com/havenhq/revideo/commit/645af6d2b7e8d9332b6f08419c318ee9434d7f3f))
* better naming conventions ([#62](https://github.com/havenhq/revideo/issues/62)) ([a9d764f](https://github.com/havenhq/revideo/commit/a9d764fbceb639497ef45f44c90f9b6e408213d3))
* convert built-in types to webgl ([#929](https://github.com/havenhq/revideo/issues/929)) ([a0f0b7d](https://github.com/havenhq/revideo/commit/a0f0b7d8996547e1a316097422ec02bddeeccec6))
* **core:** accept PossibleMatrix2D when transforming bbox ([#770](https://github.com/havenhq/revideo/issues/770)) ([ae05282](https://github.com/havenhq/revideo/commit/ae0528266f5794aa0517f32b897c5fe6ff092a58))
* **core:** add `debug` helper function ([#293](https://github.com/havenhq/revideo/issues/293)) ([b870873](https://github.com/havenhq/revideo/commit/b8708732af0fc08d9ff9eeecbbb77d65f1b36eb8))
* **core:** add `gauss` function to `Random` ([#709](https://github.com/havenhq/revideo/issues/709)) ([d7de3d5](https://github.com/havenhq/revideo/commit/d7de3d56d05dc88c7cbd557a73a25d083abb54e4))
* **core:** add `loopFor` function ([#650](https://github.com/havenhq/revideo/issues/650)) ([a42eb52](https://github.com/havenhq/revideo/commit/a42eb520fef7de06038f0df9eaad1fa35122c97a))
* **core:** add `loopUntil` function ([#624](https://github.com/havenhq/revideo/issues/624)) ([b7aa4b5](https://github.com/havenhq/revideo/commit/b7aa4b57c76374e67bd19ce40c44cd650cf67327))
* **core:** add configurable line numbers ([#44](https://github.com/havenhq/revideo/issues/44)) ([831334c](https://github.com/havenhq/revideo/commit/831334ca32a504991e875af37446fef4f055c285)), closes [#12](https://github.com/havenhq/revideo/issues/12)
* **core:** add fadeTransition ([#384](https://github.com/havenhq/revideo/issues/384)) ([a248785](https://github.com/havenhq/revideo/commit/a248785e87d1c6ebc08581f4fda6be428a89824c))
* **core:** add helper method for arc lerps ([#640](https://github.com/havenhq/revideo/issues/640)) ([bc304d2](https://github.com/havenhq/revideo/commit/bc304d242e4819650fa86636180ac5594ba743d3))
* **core:** add intersects method to BBox ([#485](https://github.com/havenhq/revideo/issues/485)) ([604b0e7](https://github.com/havenhq/revideo/commit/604b0e7c22b4e5d196310e650f7c764526a80712))
* **core:** add Matrix2D type ([#340](https://github.com/havenhq/revideo/issues/340)) ([66b41e6](https://github.com/havenhq/revideo/commit/66b41e6beaca5c2ba4b6bd1a7e68ca16d183b0e9))
* **core:** add rotate and polarLerp methods to vector ([#756](https://github.com/havenhq/revideo/issues/756)) ([a18bac3](https://github.com/havenhq/revideo/commit/a18bac3c1755fa3e3240b5469ac7bc1f08b4fd24))
* **core:** add spring interpolation ([#356](https://github.com/havenhq/revideo/issues/356)) ([1463b15](https://github.com/havenhq/revideo/commit/1463b1592e22fad9d8298c11270e2099119e2229))
* **core:** add static properties to Vector2 corresponding to Origins ([#855](https://github.com/havenhq/revideo/issues/855)) ([9bbd249](https://github.com/havenhq/revideo/commit/9bbd249e1f7864a49ff2da49bc18d9309888f902)), closes [#844](https://github.com/havenhq/revideo/issues/844)
* **core:** add step parameter to range function ([#373](https://github.com/havenhq/revideo/issues/373)) ([923209a](https://github.com/havenhq/revideo/commit/923209a4106c8e7f570853dcc47a10e65e0d04d8))
* **core:** additional easing functions ([#274](https://github.com/havenhq/revideo/issues/274)) ([f81ce43](https://github.com/havenhq/revideo/commit/f81ce43019fe253e99f4ab6311c2251b40e2eae3))
* **core:** allow getting real size of scenes ([#889](https://github.com/havenhq/revideo/issues/889)) ([3a6a672](https://github.com/havenhq/revideo/commit/3a6a672bed9098bec81d9c5347459317cbbf4c2a))
* **core:** allow ordering of scenes during transition ([#832](https://github.com/havenhq/revideo/issues/832)) ([7a62b59](https://github.com/havenhq/revideo/commit/7a62b59c377dca8bf1f56bb551b47b9a75a6afba)), closes [#369](https://github.com/havenhq/revideo/issues/369)
* **core:** disallow tweening to/from undefined values ([#257](https://github.com/havenhq/revideo/issues/257)) ([d4bb791](https://github.com/havenhq/revideo/commit/d4bb79145300b52c4b4d101df2afaff5ea11a9e9))
* **core:** error double event name ([#341](https://github.com/havenhq/revideo/issues/341)) ([053b2a6](https://github.com/havenhq/revideo/commit/053b2a6c22c4e726e3962fdaf0a2e8d149889a9b))
* **core:** expand Vector2 type ([#579](https://github.com/havenhq/revideo/issues/579)) ([010bba5](https://github.com/havenhq/revideo/commit/010bba593e1c3ce368ab409dce09dbde8f999958))
* **core:** helper methods for references ([#775](https://github.com/havenhq/revideo/issues/775)) ([3255add](https://github.com/havenhq/revideo/commit/3255add1b05a37017d60c2eaccf4368ab4f7f568))
* **core:** hot module replacement for audio ([#793](https://github.com/havenhq/revideo/issues/793)) ([d40c1a8](https://github.com/havenhq/revideo/commit/d40c1a83c645c8984cca1ebc6fe687b445a0550c))
* **core:** improve `SignalGenerator` chaining ([#651](https://github.com/havenhq/revideo/issues/651)) ([de72f1f](https://github.com/havenhq/revideo/commit/de72f1f70edf7cc48fd670d9b38e0cc27f8bdb57)), closes [#480](https://github.com/havenhq/revideo/issues/480)
* **core:** improve loop function ([#952](https://github.com/havenhq/revideo/issues/952)) ([66c18bb](https://github.com/havenhq/revideo/commit/66c18bb41617a4fbe9e3be5253b3ced02caf0cae))
* **core:** presentation mode ([#486](https://github.com/havenhq/revideo/issues/486)) ([c4f2e48](https://github.com/havenhq/revideo/commit/c4f2e48ae6c65804ae46edd88c29125b7f983d5c))
* **core:** preserve custom fields in meta files ([#534](https://github.com/havenhq/revideo/issues/534)) ([2e3e22e](https://github.com/havenhq/revideo/commit/2e3e22efd62ba671624526fc10ea7dd2a04a5240))
* **core:** seek to beginning of timeline in disable loop mode ([#823](https://github.com/havenhq/revideo/issues/823)) ([3595646](https://github.com/havenhq/revideo/commit/359564645575c6f20870f4bf9642e72404717f14)), closes [#822](https://github.com/havenhq/revideo/issues/822)
* **core:** spawn function ([#951](https://github.com/havenhq/revideo/issues/951)) ([51d8cf0](https://github.com/havenhq/revideo/commit/51d8cf0b64592fe56a0e31b5c3acc155226a9b2e))
* **core:** support Origin in slideTransition ([#801](https://github.com/havenhq/revideo/issues/801)) ([0a3df28](https://github.com/havenhq/revideo/commit/0a3df2829fd7b308604eda3d005e90daf032e284))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* **core:** thread pausing ([#639](https://github.com/havenhq/revideo/issues/639)) ([c0aab58](https://github.com/havenhq/revideo/commit/c0aab588b18c267d3bc04e25b2f80c792496dda2))
* **core:** tree shaking ([#523](https://github.com/havenhq/revideo/issues/523)) ([65fec78](https://github.com/havenhq/revideo/commit/65fec7825fda33812b13f57bfeb1d82193a5d190))
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display array values in inspector ([#670](https://github.com/havenhq/revideo/issues/670)) ([e71d74c](https://github.com/havenhq/revideo/commit/e71d74c9c04995393ad8ee942b8e6e5baa6f982f))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* **docs:** fiddle editor ([#542](https://github.com/havenhq/revideo/issues/542)) ([3c68fef](https://github.com/havenhq/revideo/commit/3c68fefdf7bf375ee9345aba7dbf9e5ff35e3c3d))
* editor improvements ([#121](https://github.com/havenhq/revideo/issues/121)) ([e8b32ce](https://github.com/havenhq/revideo/commit/e8b32ceff1b8216282c4b5713508ce1172645e20))
* export everything from entry points ([#710](https://github.com/havenhq/revideo/issues/710)) ([3c885d9](https://github.com/havenhq/revideo/commit/3c885d9083b52fbbaccf1e2560ae50817949bc52))
* expose revideo project as web service ([#29](https://github.com/havenhq/revideo/issues/29)) ([c2a2a96](https://github.com/havenhq/revideo/commit/c2a2a96db199f772471833cf51bddd2574f08289))
* extract konva to separate package ([#60](https://github.com/havenhq/revideo/issues/60)) ([4ecad3c](https://github.com/havenhq/revideo/commit/4ecad3ca2732bd5147af670c230f8f959129a707))
* finalize custom exporters ([#660](https://github.com/havenhq/revideo/issues/660)) ([6a50430](https://github.com/havenhq/revideo/commit/6a50430cdf9928992ca078eba39c484a5253da2b))
* implement absolute scale setter ([842079a](https://github.com/havenhq/revideo/commit/842079a6547af4032719c85837df3db7c1c6d30a))
* improve async signals ([#156](https://github.com/havenhq/revideo/issues/156)) ([db27b9d](https://github.com/havenhq/revideo/commit/db27b9d5fb69a88f42afd98c86c4a1cdceb88ea1))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* improve image error handling ([#847](https://github.com/havenhq/revideo/issues/847)) ([db09d53](https://github.com/havenhq/revideo/commit/db09d5305a3c0507b035e3cd347eaa65b23d7d2e))
* introduce basic caching ([#68](https://github.com/havenhq/revideo/issues/68)) ([6420d36](https://github.com/havenhq/revideo/commit/6420d362d0e4ae058f55b6ff6bb2a3a32dec559b))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* make scenes independent of names ([#53](https://github.com/havenhq/revideo/issues/53)) ([417617e](https://github.com/havenhq/revideo/commit/417617eb5f0af771e7413c9ce4c7e9b998e3e490)), closes [#25](https://github.com/havenhq/revideo/issues/25)
* merge properties and signals ([#124](https://github.com/havenhq/revideo/issues/124)) ([da3ba83](https://github.com/havenhq/revideo/commit/da3ba83d82ee74f5a5c3631b07597f08cdf9e8e4))
* meta field descriptions ([#664](https://github.com/havenhq/revideo/issues/664)) ([80c9d07](https://github.com/havenhq/revideo/commit/80c9d07f88f4a3df0f99e5741b31313f891a5d51))
* minor improvements ([403c7c2](https://github.com/havenhq/revideo/commit/403c7c27ad969880a14c498ec6cefb9e7e7b7544))
* minor improvements ([#77](https://github.com/havenhq/revideo/issues/77)) ([7c6e584](https://github.com/havenhq/revideo/commit/7c6e584aca353c9af55f0acb61b32b5f99727dba))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* navigate to slide source ([#490](https://github.com/havenhq/revideo/issues/490)) ([b5ae4bf](https://github.com/havenhq/revideo/commit/b5ae4bf37076b262a20949cca030db3902186c8d))
* new animator ([#91](https://github.com/havenhq/revideo/issues/91)) ([d85f2f8](https://github.com/havenhq/revideo/commit/d85f2f8a54c0f8bbfbc451884385f30e5b3ec206))
* new Code node ([#946](https://github.com/havenhq/revideo/issues/946)) ([26e55a3](https://github.com/havenhq/revideo/commit/26e55a37c416fb1313c8aadf40eed2824b45d330))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* new plugin hooks ([#723](https://github.com/havenhq/revideo/issues/723)) ([9a2b5ab](https://github.com/havenhq/revideo/commit/9a2b5ab8be0d001414fd00da3053d408e00fd1cd))
* open time events in editor ([#87](https://github.com/havenhq/revideo/issues/87)) ([74b781d](https://github.com/havenhq/revideo/commit/74b781d57fca7ef1d10904673276f2a7354c01b8))
* plugin architecture ([#564](https://github.com/havenhq/revideo/issues/564)) ([1c375b8](https://github.com/havenhq/revideo/commit/1c375b81e0af8a76467d42dd46a7031adb9d71d3))
* project variables ([#255](https://github.com/havenhq/revideo/issues/255)) ([4883295](https://github.com/havenhq/revideo/commit/488329525939928af52b4a4d8488f1e1cd4cf6f7))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* **renderer:** use ffmpeg to step through frames of video elements ([#33](https://github.com/havenhq/revideo/issues/33)) ([a6e1bcd](https://github.com/havenhq/revideo/commit/a6e1bcdf0ca8200d646a3bca65122b50120f1013))
* signal error handling ([#89](https://github.com/havenhq/revideo/issues/89)) ([472ac65](https://github.com/havenhq/revideo/commit/472ac65938b804a6b698c8522ec0c3b6bdbcf1b1))
* simplify size access further ([#66](https://github.com/havenhq/revideo/issues/66)) ([9091a5e](https://github.com/havenhq/revideo/commit/9091a5e05d8fadf72c50832c7c4467ac4424b72c))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to monorepo ([6c8d190](https://github.com/havenhq/revideo/commit/6c8d190c7d3d24bb4eac29eeb4b6d1abf370e160)), closes [#23](https://github.com/havenhq/revideo/issues/23) [#86](https://github.com/havenhq/revideo/issues/86) [#49](https://github.com/havenhq/revideo/issues/49)
* switch to signals ([#64](https://github.com/havenhq/revideo/issues/64)) ([d22d237](https://github.com/havenhq/revideo/commit/d22d23728597e6fa82ea5c5a99a6c0a56819bded))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* turn Layout into node ([#75](https://github.com/havenhq/revideo/issues/75)) ([cdf8dc0](https://github.com/havenhq/revideo/commit/cdf8dc0a35522482dee2dd78a69606b79f52246e))
* **ui:** estimate remaining rendering time ([#795](https://github.com/havenhq/revideo/issues/795)) ([1a46148](https://github.com/havenhq/revideo/commit/1a4614801869ab36827ca857d66eed8de9cffd09)), closes [#784](https://github.com/havenhq/revideo/issues/784)
* **ui:** small improvements ([#833](https://github.com/havenhq/revideo/issues/833)) ([f44400c](https://github.com/havenhq/revideo/commit/f44400c458a1d7f49520494f01efb9936f4df83e))
* **ui:** timeline scrubbing ([#862](https://github.com/havenhq/revideo/issues/862)) ([211b9a4](https://github.com/havenhq/revideo/commit/211b9a4327720afd1ce0ff93868a501c2fd745aa)), closes [#286](https://github.com/havenhq/revideo/issues/286)
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* unify references and signals ([#137](https://github.com/havenhq/revideo/issues/137)) ([063aede](https://github.com/havenhq/revideo/commit/063aede0842f948d2c6704c6edd426e954bb4668))
* update vite from v3 to v4 ([#495](https://github.com/havenhq/revideo/issues/495)) ([c409eee](https://github.com/havenhq/revideo/commit/c409eee0e61b67e43afed240c5ae279714681246)), closes [#197](https://github.com/havenhq/revideo/issues/197)
* use PossibleVector2 in Vector2 methods ([#478](https://github.com/havenhq/revideo/issues/478)) ([8ccb44a](https://github.com/havenhq/revideo/commit/8ccb44a265016e25b2b177a65d44f801c9d861f9))
* **vite-plugin:** add CORS Proxy ([#357](https://github.com/havenhq/revideo/issues/357)) ([a3c5822](https://github.com/havenhq/revideo/commit/a3c58228b7d3dab08fc27414d19870d35773b280)), closes [#338](https://github.com/havenhq/revideo/issues/338)
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))
* world space cache ([#498](https://github.com/havenhq/revideo/issues/498)) ([633e9e1](https://github.com/havenhq/revideo/commit/633e9e140dfbbe397df6ddc1f96ed30782ddce94)), closes [#342](https://github.com/havenhq/revideo/issues/342)


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))


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
* change names of timing and interpolation functions

`TweenFunction` is now called `InterpolationFunction`.
Individual functions are now called `[type]Lerp` instead of `[type]Tween`.
For instance: `colorTween` is now `colorLerp`.

`InterpolationFunction` is now called `TimingFunction`.
This name is better aligned with the CSS spec.
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
