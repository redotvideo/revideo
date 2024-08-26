# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 0.5.7 (2024-08-26)


### Bug Fixes

* **2d:** fix audio offset editing ([#674](https://github.com/havenhq/revideo/issues/674)) ([58d6ef7](https://github.com/havenhq/revideo/commit/58d6ef79fa06e377e0c1821efe73585586d124a6))
* **2d:** fix performance issue with audio track ([#427](https://github.com/havenhq/revideo/issues/427)) ([c993770](https://github.com/havenhq/revideo/commit/c993770937ddfdf0ac39b144a1f79f1a300f7899))
* **2d:** fix version link ([#608](https://github.com/havenhq/revideo/issues/608)) ([4fe5b7a](https://github.com/havenhq/revideo/commit/4fe5b7a5150fbdf43ea50ecf3dc8b4690c0e2e34))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* correctly await re-renders ([#918](https://github.com/havenhq/revideo/issues/918)) ([873a9a3](https://github.com/havenhq/revideo/commit/873a9a3eed2676de4cc7f31fbd5ea58817a80aff))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix player state not being saved ([#85](https://github.com/havenhq/revideo/issues/85)) ([74b54b9](https://github.com/havenhq/revideo/commit/74b54b970d1287e80fe2334a034844ad6a80c23b))
* fix tsdoc comments ([#21](https://github.com/havenhq/revideo/issues/21)) ([4b6cb66](https://github.com/havenhq/revideo/commit/4b6cb660ad82befcfd41188c7a8f9c8c0cba93ed)), closes [#18](https://github.com/havenhq/revideo/issues/18)
* limit fps to positive numbers ([#937](https://github.com/havenhq/revideo/issues/937)) ([c7c0c67](https://github.com/havenhq/revideo/commit/c7c0c6730e1a00e6b23077188bfc2d389e98cff2)), closes [#936](https://github.com/havenhq/revideo/issues/936)
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* support hmr when navigating ([370ea16](https://github.com/havenhq/revideo/commit/370ea1676a1c34313c0fb917c0f0691538f72016))
* the resolution fields in Rendering no longer reset each other ([#73](https://github.com/havenhq/revideo/issues/73)) ([ddabec5](https://github.com/havenhq/revideo/commit/ddabec549be3cecec27cf9f5643b036e12a83472))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** correctly reset zoom ([#432](https://github.com/havenhq/revideo/issues/432)) ([a33ee14](https://github.com/havenhq/revideo/commit/a33ee14dfac3e1fe24c89d76631e23fe4cb625a6))
* **ui:** don't seek when editing time events ([#26](https://github.com/havenhq/revideo/issues/26)) ([524c200](https://github.com/havenhq/revideo/commit/524c200ef1bd6a6f52096d04c2aeed24a24cda6f))
* **ui:** downgrade preact ([#1](https://github.com/havenhq/revideo/issues/1)) ([5f7456f](https://github.com/havenhq/revideo/commit/5f7456fe4c5a1cc76ccd8fed5a6f9a8a4e846d27))
* **ui:** fix "go to source" ([#895](https://github.com/havenhq/revideo/issues/895)) ([ec729de](https://github.com/havenhq/revideo/commit/ec729dea0d65bc69aefc0abd601f365af1c4ed68))
* **ui:** fix collapse ([#698](https://github.com/havenhq/revideo/issues/698)) ([6bd8703](https://github.com/havenhq/revideo/commit/6bd8703ec9b16f55b3817f6a1f9130f17b66c69a))
* **ui:** fix inspector tab ([#374](https://github.com/havenhq/revideo/issues/374)) ([c4cb378](https://github.com/havenhq/revideo/commit/c4cb378c2f9d972bb41542bbe3b3aa314fa1f3ad))
* **ui:** fix new version link ([#505](https://github.com/havenhq/revideo/issues/505)) ([7459e7f](https://github.com/havenhq/revideo/commit/7459e7f8355163f3cb6a3ed791fc41a2962a186e))
* **ui:** fix onChange handlers ([#515](https://github.com/havenhq/revideo/issues/515)) ([a23d06c](https://github.com/havenhq/revideo/commit/a23d06cbf6e29f37a9259e50fe71c482640b83fb))
* **ui:** fix out of range warning ([#939](https://github.com/havenhq/revideo/issues/939)) ([c9f466f](https://github.com/havenhq/revideo/commit/c9f466f20ff1a3e2cb77aa5575823947ef9beeee))
* **ui:** fix play-pause button ([#299](https://github.com/havenhq/revideo/issues/299)) ([191f54a](https://github.com/havenhq/revideo/commit/191f54a0a5a9de2fd2dc27bffc6d21d692ce6f72))
* **ui:** fix snapshot ([#643](https://github.com/havenhq/revideo/issues/643)) ([590216a](https://github.com/havenhq/revideo/commit/590216ac094d6b6ef3e9c773499bc52063f617b1))
* **ui:** fix transparent background ([#886](https://github.com/havenhq/revideo/issues/886)) ([83f652f](https://github.com/havenhq/revideo/commit/83f652fdcfa075f5de24186ffdffd1b7db1d8fc9))
* **ui:** fix typo in viewport ID ([#620](https://github.com/havenhq/revideo/issues/620)) ([3a83f20](https://github.com/havenhq/revideo/commit/3a83f20cb1b8ddc7b95a8e36bf6f3d0cd036693b))
* **ui:** fix zoom to fit ([#561](https://github.com/havenhq/revideo/issues/561)) ([1c947b4](https://github.com/havenhq/revideo/commit/1c947b417e218809f33928d6cbb89d463bdc2e66))
* **ui:** ignore shortcuts when typing ([#521](https://github.com/havenhq/revideo/issues/521)) ([4d3e1a1](https://github.com/havenhq/revideo/commit/4d3e1a13caee2ddd03857961a44dd10a7e1cb32a)), closes [#518](https://github.com/havenhq/revideo/issues/518)
* **ui:** misaligned overlay ([#127](https://github.com/havenhq/revideo/issues/127)) ([0379730](https://github.com/havenhq/revideo/commit/03797302a302e28caf9f2428cfce4a122f827775))
* **ui:** prevent context menu in viewport ([#123](https://github.com/havenhq/revideo/issues/123)) ([0fdd85e](https://github.com/havenhq/revideo/commit/0fdd85ecf5b61907ce1e16f5fb9253540528a8b0))
* **ui:** prevent spawning multiple color pickers ([#747](https://github.com/havenhq/revideo/issues/747)) ([48ffd1f](https://github.com/havenhq/revideo/commit/48ffd1f2eec21f9880e172632a2310f5676e3c19)), closes [#744](https://github.com/havenhq/revideo/issues/744)
* **ui:** prevent timeline scroll when zooming ([#162](https://github.com/havenhq/revideo/issues/162)) ([b8278ae](https://github.com/havenhq/revideo/commit/b8278aeb7b92f215bccbd1aa57de17c9233cff01))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* **ui:** remove glossy <select> effect in Safari ([#292](https://github.com/havenhq/revideo/issues/292)) ([9c062b2](https://github.com/havenhq/revideo/commit/9c062b26e48fbdb1905daae25a3fb34df82307d3))
* **ui:** support small ranges ([#739](https://github.com/havenhq/revideo/issues/739)) ([cf32d8b](https://github.com/havenhq/revideo/commit/cf32d8b08b94f5044987eb554cd250fc79fbc99d)), closes [#738](https://github.com/havenhq/revideo/issues/738)
* **ui:** use signals correctly ([#906](https://github.com/havenhq/revideo/issues/906)) ([f67d691](https://github.com/havenhq/revideo/commit/f67d691b5f2f6358120e9582a1839ef3d49c77b8))
* **ui:** version comparison issue ([#520](https://github.com/havenhq/revideo/issues/520)) ([93b5e08](https://github.com/havenhq/revideo/commit/93b5e088b4a4fda0d2177cb2cc6680c34fa72d30)), closes [#519](https://github.com/havenhq/revideo/issues/519)
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* **2d:** expand animations and reduced motion ([#671](https://github.com/havenhq/revideo/issues/671)) ([b8e9d03](https://github.com/havenhq/revideo/commit/b8e9d03488f8ca7085b3e7e1b095a52f39f2bc89))
* **2d:** visual feedback about rendering process ([#681](https://github.com/havenhq/revideo/issues/681)) ([d0495f5](https://github.com/havenhq/revideo/commit/d0495f5c6396c05454a5323e4486ab4829adbc9e))
* add audio volume control through arrow keys ([#856](https://github.com/havenhq/revideo/issues/856)) ([8b86fd4](https://github.com/havenhq/revideo/commit/8b86fd4e70f91a0d5b1150d760427ca355666341))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add E2E testing ([#101](https://github.com/havenhq/revideo/issues/101)) ([6398c54](https://github.com/havenhq/revideo/commit/6398c54e4c4d6667ce9f45b9bbef6ea110ea2215)), closes [#42](https://github.com/havenhq/revideo/issues/42)
* add experimental features ([#876](https://github.com/havenhq/revideo/issues/876)) ([498d387](https://github.com/havenhq/revideo/commit/498d3871d05d4dcc83453654bec7762d2ab32e7e))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* added file type and quality options to rendering panel ([#50](https://github.com/havenhq/revideo/issues/50)) ([bee71ef](https://github.com/havenhq/revideo/commit/bee71ef2673c269db47a4433831720b7ad0fb4e8)), closes [#24](https://github.com/havenhq/revideo/issues/24)
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* auto meta fields ([#565](https://github.com/havenhq/revideo/issues/565)) ([645af6d](https://github.com/havenhq/revideo/commit/645af6d2b7e8d9332b6f08419c318ee9434d7f3f))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display array values in inspector ([#670](https://github.com/havenhq/revideo/issues/670)) ([e71d74c](https://github.com/havenhq/revideo/commit/e71d74c9c04995393ad8ee942b8e6e5baa6f982f))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* editor improvements ([#121](https://github.com/havenhq/revideo/issues/121)) ([e8b32ce](https://github.com/havenhq/revideo/commit/e8b32ceff1b8216282c4b5713508ce1172645e20))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* meta field descriptions ([#664](https://github.com/havenhq/revideo/issues/664)) ([80c9d07](https://github.com/havenhq/revideo/commit/80c9d07f88f4a3df0f99e5741b31313f891a5d51))
* minor console improvements ([#145](https://github.com/havenhq/revideo/issues/145)) ([3e32e73](https://github.com/havenhq/revideo/commit/3e32e73434ad872049af9e3f1f711bc0185410f4))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* navigate to slide source ([#490](https://github.com/havenhq/revideo/issues/490)) ([b5ae4bf](https://github.com/havenhq/revideo/commit/b5ae4bf37076b262a20949cca030db3902186c8d))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* new plugin hooks ([#723](https://github.com/havenhq/revideo/issues/723)) ([9a2b5ab](https://github.com/havenhq/revideo/commit/9a2b5ab8be0d001414fd00da3053d408e00fd1cd))
* open time events in editor ([#87](https://github.com/havenhq/revideo/issues/87)) ([74b781d](https://github.com/havenhq/revideo/commit/74b781d57fca7ef1d10904673276f2a7354c01b8))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* **ui:** add color picker ([#691](https://github.com/havenhq/revideo/issues/691)) ([a33059c](https://github.com/havenhq/revideo/commit/a33059c0f455814919db31bc9e5e932907c797e4))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** add direct range selection & playhead shortcuts ([#907](https://github.com/havenhq/revideo/issues/907)) ([39264fc](https://github.com/havenhq/revideo/commit/39264fc074da739efddf24ef080f6c5f279f8014))
* **ui:** add external link to docs ([#346](https://github.com/havenhq/revideo/issues/346)) ([fc4ee5d](https://github.com/havenhq/revideo/commit/fc4ee5d028312904ed9e11c5341ac00f36e7242b))
* **ui:** add goto start and goto end buttons ([#814](https://github.com/havenhq/revideo/issues/814)) ([449f194](https://github.com/havenhq/revideo/commit/449f1946474af9886135571c14c83b8440bdf28c))
* **ui:** add number input dragging ([#917](https://github.com/havenhq/revideo/issues/917)) ([1b5c232](https://github.com/havenhq/revideo/commit/1b5c23260c3015608f202a103b4c0aebd1860e36)), closes [#799](https://github.com/havenhq/revideo/issues/799)
* **ui:** add quarter resolution ([#421](https://github.com/havenhq/revideo/issues/421)) ([d0160d0](https://github.com/havenhq/revideo/commit/d0160d0d5ef76ffb0d3591566891b5efa4061744))
* **ui:** add shortcuts to button titles ([#532](https://github.com/havenhq/revideo/issues/532)) ([3549dd3](https://github.com/havenhq/revideo/commit/3549dd3fd7ef47376a5a2dd516609499d3985ac3))
* **ui:** add volume slider ([#872](https://github.com/havenhq/revideo/issues/872)) ([5ac3069](https://github.com/havenhq/revideo/commit/5ac3069f027ee123c212217dcf8d26a78a3aa106))
* **ui:** custom checkbox style ([#529](https://github.com/havenhq/revideo/issues/529)) ([af98db1](https://github.com/havenhq/revideo/commit/af98db103d66e8af059dc483d49984b9adb9b95c))
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** estimate remaining rendering time ([#795](https://github.com/havenhq/revideo/issues/795)) ([1a46148](https://github.com/havenhq/revideo/commit/1a4614801869ab36827ca857d66eed8de9cffd09)), closes [#784](https://github.com/havenhq/revideo/issues/784)
* **ui:** improve rendering button ([#662](https://github.com/havenhq/revideo/issues/662)) ([2b4ae70](https://github.com/havenhq/revideo/commit/2b4ae70ea0b0305fbb2596e95bbc70440718bbe2))
* **ui:** include function names in stack traces ([#693](https://github.com/havenhq/revideo/issues/693)) ([835c0fa](https://github.com/havenhq/revideo/commit/835c0fa4b70429db6fe96be96d6d9e44949f7f6c))
* **ui:** list available shortcuts ([#444](https://github.com/havenhq/revideo/issues/444)) ([443fcc9](https://github.com/havenhq/revideo/commit/443fcc9feb1a1ca69aecbc4db2e194ce4f50f72e))
* **ui:** make inspector toggleable ([#921](https://github.com/havenhq/revideo/issues/921)) ([a365951](https://github.com/havenhq/revideo/commit/a365951e69c01cac1ea23d173034ad83f988c8eb))
* **ui:** new sidebar ([#692](https://github.com/havenhq/revideo/issues/692)) ([b555ee1](https://github.com/havenhq/revideo/commit/b555ee1d10f8a6e1b380c043dff2717ffa01a068)), closes [#492](https://github.com/havenhq/revideo/issues/492)
* **ui:** presentation interface ([#487](https://github.com/havenhq/revideo/issues/487)) ([1899f02](https://github.com/havenhq/revideo/commit/1899f020fb1c0b2136de4401e6fc068bcf5e0cc4))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** shift + right arrow moves to last frame ([#354](https://github.com/havenhq/revideo/issues/354)) ([4b81709](https://github.com/havenhq/revideo/commit/4b8170971400c5bf4fe690a58d3f44c3e1d00b94)), closes [#353](https://github.com/havenhq/revideo/issues/353)
* **ui:** small improvements ([#833](https://github.com/havenhq/revideo/issues/833)) ([f44400c](https://github.com/havenhq/revideo/commit/f44400c458a1d7f49520494f01efb9936f4df83e))
* **ui:** timeline dragging ([#794](https://github.com/havenhq/revideo/issues/794)) ([248e454](https://github.com/havenhq/revideo/commit/248e4546367f9d99221f64b811a07d54a9988e48)), closes [#699](https://github.com/havenhq/revideo/issues/699)
* **ui:** timeline overhaul ([#47](https://github.com/havenhq/revideo/issues/47)) ([4232a60](https://github.com/havenhq/revideo/commit/4232a6072540b54451e99e18c1001db0175bb93f)), closes [#20](https://github.com/havenhq/revideo/issues/20)
* **ui:** timeline scrubbing ([#862](https://github.com/havenhq/revideo/issues/862)) ([211b9a4](https://github.com/havenhq/revideo/commit/211b9a4327720afd1ce0ff93868a501c2fd745aa)), closes [#286](https://github.com/havenhq/revideo/issues/286)
* **ui:** vertical line on time event ([#808](https://github.com/havenhq/revideo/issues/808)) ([18015d6](https://github.com/havenhq/revideo/commit/18015d6714ffe2a6255f26895aa9a7c1908a4f7a)), closes [#804](https://github.com/havenhq/revideo/issues/804)
* **ui:** visual changes ([#96](https://github.com/havenhq/revideo/issues/96)) ([3d599f4](https://github.com/havenhq/revideo/commit/3d599f4e1788fbd15e996be8bf95679f1c6787bd))
* **ui:** zoom controls ([#531](https://github.com/havenhq/revideo/issues/531)) ([752350d](https://github.com/havenhq/revideo/commit/752350d0c547e21806f1b70a5c68025012e5ec11))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
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





## 0.5.6 (2024-08-20)


### Bug Fixes

* **2d:** fix audio offset editing ([#674](https://github.com/havenhq/revideo/issues/674)) ([58d6ef7](https://github.com/havenhq/revideo/commit/58d6ef79fa06e377e0c1821efe73585586d124a6))
* **2d:** fix performance issue with audio track ([#427](https://github.com/havenhq/revideo/issues/427)) ([c993770](https://github.com/havenhq/revideo/commit/c993770937ddfdf0ac39b144a1f79f1a300f7899))
* **2d:** fix version link ([#608](https://github.com/havenhq/revideo/issues/608)) ([4fe5b7a](https://github.com/havenhq/revideo/commit/4fe5b7a5150fbdf43ea50ecf3dc8b4690c0e2e34))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* correctly await re-renders ([#918](https://github.com/havenhq/revideo/issues/918)) ([873a9a3](https://github.com/havenhq/revideo/commit/873a9a3eed2676de4cc7f31fbd5ea58817a80aff))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix player state not being saved ([#85](https://github.com/havenhq/revideo/issues/85)) ([74b54b9](https://github.com/havenhq/revideo/commit/74b54b970d1287e80fe2334a034844ad6a80c23b))
* fix tsdoc comments ([#21](https://github.com/havenhq/revideo/issues/21)) ([4b6cb66](https://github.com/havenhq/revideo/commit/4b6cb660ad82befcfd41188c7a8f9c8c0cba93ed)), closes [#18](https://github.com/havenhq/revideo/issues/18)
* limit fps to positive numbers ([#937](https://github.com/havenhq/revideo/issues/937)) ([c7c0c67](https://github.com/havenhq/revideo/commit/c7c0c6730e1a00e6b23077188bfc2d389e98cff2)), closes [#936](https://github.com/havenhq/revideo/issues/936)
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* support hmr when navigating ([370ea16](https://github.com/havenhq/revideo/commit/370ea1676a1c34313c0fb917c0f0691538f72016))
* the resolution fields in Rendering no longer reset each other ([#73](https://github.com/havenhq/revideo/issues/73)) ([ddabec5](https://github.com/havenhq/revideo/commit/ddabec549be3cecec27cf9f5643b036e12a83472))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** correctly reset zoom ([#432](https://github.com/havenhq/revideo/issues/432)) ([a33ee14](https://github.com/havenhq/revideo/commit/a33ee14dfac3e1fe24c89d76631e23fe4cb625a6))
* **ui:** don't seek when editing time events ([#26](https://github.com/havenhq/revideo/issues/26)) ([524c200](https://github.com/havenhq/revideo/commit/524c200ef1bd6a6f52096d04c2aeed24a24cda6f))
* **ui:** downgrade preact ([#1](https://github.com/havenhq/revideo/issues/1)) ([5f7456f](https://github.com/havenhq/revideo/commit/5f7456fe4c5a1cc76ccd8fed5a6f9a8a4e846d27))
* **ui:** fix "go to source" ([#895](https://github.com/havenhq/revideo/issues/895)) ([ec729de](https://github.com/havenhq/revideo/commit/ec729dea0d65bc69aefc0abd601f365af1c4ed68))
* **ui:** fix collapse ([#698](https://github.com/havenhq/revideo/issues/698)) ([6bd8703](https://github.com/havenhq/revideo/commit/6bd8703ec9b16f55b3817f6a1f9130f17b66c69a))
* **ui:** fix inspector tab ([#374](https://github.com/havenhq/revideo/issues/374)) ([c4cb378](https://github.com/havenhq/revideo/commit/c4cb378c2f9d972bb41542bbe3b3aa314fa1f3ad))
* **ui:** fix new version link ([#505](https://github.com/havenhq/revideo/issues/505)) ([7459e7f](https://github.com/havenhq/revideo/commit/7459e7f8355163f3cb6a3ed791fc41a2962a186e))
* **ui:** fix onChange handlers ([#515](https://github.com/havenhq/revideo/issues/515)) ([a23d06c](https://github.com/havenhq/revideo/commit/a23d06cbf6e29f37a9259e50fe71c482640b83fb))
* **ui:** fix out of range warning ([#939](https://github.com/havenhq/revideo/issues/939)) ([c9f466f](https://github.com/havenhq/revideo/commit/c9f466f20ff1a3e2cb77aa5575823947ef9beeee))
* **ui:** fix play-pause button ([#299](https://github.com/havenhq/revideo/issues/299)) ([191f54a](https://github.com/havenhq/revideo/commit/191f54a0a5a9de2fd2dc27bffc6d21d692ce6f72))
* **ui:** fix snapshot ([#643](https://github.com/havenhq/revideo/issues/643)) ([590216a](https://github.com/havenhq/revideo/commit/590216ac094d6b6ef3e9c773499bc52063f617b1))
* **ui:** fix transparent background ([#886](https://github.com/havenhq/revideo/issues/886)) ([83f652f](https://github.com/havenhq/revideo/commit/83f652fdcfa075f5de24186ffdffd1b7db1d8fc9))
* **ui:** fix typo in viewport ID ([#620](https://github.com/havenhq/revideo/issues/620)) ([3a83f20](https://github.com/havenhq/revideo/commit/3a83f20cb1b8ddc7b95a8e36bf6f3d0cd036693b))
* **ui:** fix zoom to fit ([#561](https://github.com/havenhq/revideo/issues/561)) ([1c947b4](https://github.com/havenhq/revideo/commit/1c947b417e218809f33928d6cbb89d463bdc2e66))
* **ui:** ignore shortcuts when typing ([#521](https://github.com/havenhq/revideo/issues/521)) ([4d3e1a1](https://github.com/havenhq/revideo/commit/4d3e1a13caee2ddd03857961a44dd10a7e1cb32a)), closes [#518](https://github.com/havenhq/revideo/issues/518)
* **ui:** misaligned overlay ([#127](https://github.com/havenhq/revideo/issues/127)) ([0379730](https://github.com/havenhq/revideo/commit/03797302a302e28caf9f2428cfce4a122f827775))
* **ui:** prevent context menu in viewport ([#123](https://github.com/havenhq/revideo/issues/123)) ([0fdd85e](https://github.com/havenhq/revideo/commit/0fdd85ecf5b61907ce1e16f5fb9253540528a8b0))
* **ui:** prevent spawning multiple color pickers ([#747](https://github.com/havenhq/revideo/issues/747)) ([48ffd1f](https://github.com/havenhq/revideo/commit/48ffd1f2eec21f9880e172632a2310f5676e3c19)), closes [#744](https://github.com/havenhq/revideo/issues/744)
* **ui:** prevent timeline scroll when zooming ([#162](https://github.com/havenhq/revideo/issues/162)) ([b8278ae](https://github.com/havenhq/revideo/commit/b8278aeb7b92f215bccbd1aa57de17c9233cff01))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* **ui:** remove glossy <select> effect in Safari ([#292](https://github.com/havenhq/revideo/issues/292)) ([9c062b2](https://github.com/havenhq/revideo/commit/9c062b26e48fbdb1905daae25a3fb34df82307d3))
* **ui:** support small ranges ([#739](https://github.com/havenhq/revideo/issues/739)) ([cf32d8b](https://github.com/havenhq/revideo/commit/cf32d8b08b94f5044987eb554cd250fc79fbc99d)), closes [#738](https://github.com/havenhq/revideo/issues/738)
* **ui:** use signals correctly ([#906](https://github.com/havenhq/revideo/issues/906)) ([f67d691](https://github.com/havenhq/revideo/commit/f67d691b5f2f6358120e9582a1839ef3d49c77b8))
* **ui:** version comparison issue ([#520](https://github.com/havenhq/revideo/issues/520)) ([93b5e08](https://github.com/havenhq/revideo/commit/93b5e088b4a4fda0d2177cb2cc6680c34fa72d30)), closes [#519](https://github.com/havenhq/revideo/issues/519)
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* **2d:** expand animations and reduced motion ([#671](https://github.com/havenhq/revideo/issues/671)) ([b8e9d03](https://github.com/havenhq/revideo/commit/b8e9d03488f8ca7085b3e7e1b095a52f39f2bc89))
* **2d:** visual feedback about rendering process ([#681](https://github.com/havenhq/revideo/issues/681)) ([d0495f5](https://github.com/havenhq/revideo/commit/d0495f5c6396c05454a5323e4486ab4829adbc9e))
* add audio volume control through arrow keys ([#856](https://github.com/havenhq/revideo/issues/856)) ([8b86fd4](https://github.com/havenhq/revideo/commit/8b86fd4e70f91a0d5b1150d760427ca355666341))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add E2E testing ([#101](https://github.com/havenhq/revideo/issues/101)) ([6398c54](https://github.com/havenhq/revideo/commit/6398c54e4c4d6667ce9f45b9bbef6ea110ea2215)), closes [#42](https://github.com/havenhq/revideo/issues/42)
* add experimental features ([#876](https://github.com/havenhq/revideo/issues/876)) ([498d387](https://github.com/havenhq/revideo/commit/498d3871d05d4dcc83453654bec7762d2ab32e7e))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* added file type and quality options to rendering panel ([#50](https://github.com/havenhq/revideo/issues/50)) ([bee71ef](https://github.com/havenhq/revideo/commit/bee71ef2673c269db47a4433831720b7ad0fb4e8)), closes [#24](https://github.com/havenhq/revideo/issues/24)
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* auto meta fields ([#565](https://github.com/havenhq/revideo/issues/565)) ([645af6d](https://github.com/havenhq/revideo/commit/645af6d2b7e8d9332b6f08419c318ee9434d7f3f))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display array values in inspector ([#670](https://github.com/havenhq/revideo/issues/670)) ([e71d74c](https://github.com/havenhq/revideo/commit/e71d74c9c04995393ad8ee942b8e6e5baa6f982f))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* editor improvements ([#121](https://github.com/havenhq/revideo/issues/121)) ([e8b32ce](https://github.com/havenhq/revideo/commit/e8b32ceff1b8216282c4b5713508ce1172645e20))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* meta field descriptions ([#664](https://github.com/havenhq/revideo/issues/664)) ([80c9d07](https://github.com/havenhq/revideo/commit/80c9d07f88f4a3df0f99e5741b31313f891a5d51))
* minor console improvements ([#145](https://github.com/havenhq/revideo/issues/145)) ([3e32e73](https://github.com/havenhq/revideo/commit/3e32e73434ad872049af9e3f1f711bc0185410f4))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* navigate to slide source ([#490](https://github.com/havenhq/revideo/issues/490)) ([b5ae4bf](https://github.com/havenhq/revideo/commit/b5ae4bf37076b262a20949cca030db3902186c8d))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* new plugin hooks ([#723](https://github.com/havenhq/revideo/issues/723)) ([9a2b5ab](https://github.com/havenhq/revideo/commit/9a2b5ab8be0d001414fd00da3053d408e00fd1cd))
* open time events in editor ([#87](https://github.com/havenhq/revideo/issues/87)) ([74b781d](https://github.com/havenhq/revideo/commit/74b781d57fca7ef1d10904673276f2a7354c01b8))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* **ui:** add color picker ([#691](https://github.com/havenhq/revideo/issues/691)) ([a33059c](https://github.com/havenhq/revideo/commit/a33059c0f455814919db31bc9e5e932907c797e4))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** add direct range selection & playhead shortcuts ([#907](https://github.com/havenhq/revideo/issues/907)) ([39264fc](https://github.com/havenhq/revideo/commit/39264fc074da739efddf24ef080f6c5f279f8014))
* **ui:** add external link to docs ([#346](https://github.com/havenhq/revideo/issues/346)) ([fc4ee5d](https://github.com/havenhq/revideo/commit/fc4ee5d028312904ed9e11c5341ac00f36e7242b))
* **ui:** add goto start and goto end buttons ([#814](https://github.com/havenhq/revideo/issues/814)) ([449f194](https://github.com/havenhq/revideo/commit/449f1946474af9886135571c14c83b8440bdf28c))
* **ui:** add number input dragging ([#917](https://github.com/havenhq/revideo/issues/917)) ([1b5c232](https://github.com/havenhq/revideo/commit/1b5c23260c3015608f202a103b4c0aebd1860e36)), closes [#799](https://github.com/havenhq/revideo/issues/799)
* **ui:** add quarter resolution ([#421](https://github.com/havenhq/revideo/issues/421)) ([d0160d0](https://github.com/havenhq/revideo/commit/d0160d0d5ef76ffb0d3591566891b5efa4061744))
* **ui:** add shortcuts to button titles ([#532](https://github.com/havenhq/revideo/issues/532)) ([3549dd3](https://github.com/havenhq/revideo/commit/3549dd3fd7ef47376a5a2dd516609499d3985ac3))
* **ui:** add volume slider ([#872](https://github.com/havenhq/revideo/issues/872)) ([5ac3069](https://github.com/havenhq/revideo/commit/5ac3069f027ee123c212217dcf8d26a78a3aa106))
* **ui:** custom checkbox style ([#529](https://github.com/havenhq/revideo/issues/529)) ([af98db1](https://github.com/havenhq/revideo/commit/af98db103d66e8af059dc483d49984b9adb9b95c))
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** estimate remaining rendering time ([#795](https://github.com/havenhq/revideo/issues/795)) ([1a46148](https://github.com/havenhq/revideo/commit/1a4614801869ab36827ca857d66eed8de9cffd09)), closes [#784](https://github.com/havenhq/revideo/issues/784)
* **ui:** improve rendering button ([#662](https://github.com/havenhq/revideo/issues/662)) ([2b4ae70](https://github.com/havenhq/revideo/commit/2b4ae70ea0b0305fbb2596e95bbc70440718bbe2))
* **ui:** include function names in stack traces ([#693](https://github.com/havenhq/revideo/issues/693)) ([835c0fa](https://github.com/havenhq/revideo/commit/835c0fa4b70429db6fe96be96d6d9e44949f7f6c))
* **ui:** list available shortcuts ([#444](https://github.com/havenhq/revideo/issues/444)) ([443fcc9](https://github.com/havenhq/revideo/commit/443fcc9feb1a1ca69aecbc4db2e194ce4f50f72e))
* **ui:** make inspector toggleable ([#921](https://github.com/havenhq/revideo/issues/921)) ([a365951](https://github.com/havenhq/revideo/commit/a365951e69c01cac1ea23d173034ad83f988c8eb))
* **ui:** new sidebar ([#692](https://github.com/havenhq/revideo/issues/692)) ([b555ee1](https://github.com/havenhq/revideo/commit/b555ee1d10f8a6e1b380c043dff2717ffa01a068)), closes [#492](https://github.com/havenhq/revideo/issues/492)
* **ui:** presentation interface ([#487](https://github.com/havenhq/revideo/issues/487)) ([1899f02](https://github.com/havenhq/revideo/commit/1899f020fb1c0b2136de4401e6fc068bcf5e0cc4))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** shift + right arrow moves to last frame ([#354](https://github.com/havenhq/revideo/issues/354)) ([4b81709](https://github.com/havenhq/revideo/commit/4b8170971400c5bf4fe690a58d3f44c3e1d00b94)), closes [#353](https://github.com/havenhq/revideo/issues/353)
* **ui:** small improvements ([#833](https://github.com/havenhq/revideo/issues/833)) ([f44400c](https://github.com/havenhq/revideo/commit/f44400c458a1d7f49520494f01efb9936f4df83e))
* **ui:** timeline dragging ([#794](https://github.com/havenhq/revideo/issues/794)) ([248e454](https://github.com/havenhq/revideo/commit/248e4546367f9d99221f64b811a07d54a9988e48)), closes [#699](https://github.com/havenhq/revideo/issues/699)
* **ui:** timeline overhaul ([#47](https://github.com/havenhq/revideo/issues/47)) ([4232a60](https://github.com/havenhq/revideo/commit/4232a6072540b54451e99e18c1001db0175bb93f)), closes [#20](https://github.com/havenhq/revideo/issues/20)
* **ui:** timeline scrubbing ([#862](https://github.com/havenhq/revideo/issues/862)) ([211b9a4](https://github.com/havenhq/revideo/commit/211b9a4327720afd1ce0ff93868a501c2fd745aa)), closes [#286](https://github.com/havenhq/revideo/issues/286)
* **ui:** vertical line on time event ([#808](https://github.com/havenhq/revideo/issues/808)) ([18015d6](https://github.com/havenhq/revideo/commit/18015d6714ffe2a6255f26895aa9a7c1908a4f7a)), closes [#804](https://github.com/havenhq/revideo/issues/804)
* **ui:** visual changes ([#96](https://github.com/havenhq/revideo/issues/96)) ([3d599f4](https://github.com/havenhq/revideo/commit/3d599f4e1788fbd15e996be8bf95679f1c6787bd))
* **ui:** zoom controls ([#531](https://github.com/havenhq/revideo/issues/531)) ([752350d](https://github.com/havenhq/revideo/commit/752350d0c547e21806f1b70a5c68025012e5ec11))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
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





## 0.5.5 (2024-08-14)


### Bug Fixes

* **2d:** fix audio offset editing ([#674](https://github.com/havenhq/revideo/issues/674)) ([58d6ef7](https://github.com/havenhq/revideo/commit/58d6ef79fa06e377e0c1821efe73585586d124a6))
* **2d:** fix performance issue with audio track ([#427](https://github.com/havenhq/revideo/issues/427)) ([c993770](https://github.com/havenhq/revideo/commit/c993770937ddfdf0ac39b144a1f79f1a300f7899))
* **2d:** fix version link ([#608](https://github.com/havenhq/revideo/issues/608)) ([4fe5b7a](https://github.com/havenhq/revideo/commit/4fe5b7a5150fbdf43ea50ecf3dc8b4690c0e2e34))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* correctly await re-renders ([#918](https://github.com/havenhq/revideo/issues/918)) ([873a9a3](https://github.com/havenhq/revideo/commit/873a9a3eed2676de4cc7f31fbd5ea58817a80aff))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix player state not being saved ([#85](https://github.com/havenhq/revideo/issues/85)) ([74b54b9](https://github.com/havenhq/revideo/commit/74b54b970d1287e80fe2334a034844ad6a80c23b))
* fix tsdoc comments ([#21](https://github.com/havenhq/revideo/issues/21)) ([4b6cb66](https://github.com/havenhq/revideo/commit/4b6cb660ad82befcfd41188c7a8f9c8c0cba93ed)), closes [#18](https://github.com/havenhq/revideo/issues/18)
* limit fps to positive numbers ([#937](https://github.com/havenhq/revideo/issues/937)) ([c7c0c67](https://github.com/havenhq/revideo/commit/c7c0c6730e1a00e6b23077188bfc2d389e98cff2)), closes [#936](https://github.com/havenhq/revideo/issues/936)
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* support hmr when navigating ([370ea16](https://github.com/havenhq/revideo/commit/370ea1676a1c34313c0fb917c0f0691538f72016))
* the resolution fields in Rendering no longer reset each other ([#73](https://github.com/havenhq/revideo/issues/73)) ([ddabec5](https://github.com/havenhq/revideo/commit/ddabec549be3cecec27cf9f5643b036e12a83472))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** correctly reset zoom ([#432](https://github.com/havenhq/revideo/issues/432)) ([a33ee14](https://github.com/havenhq/revideo/commit/a33ee14dfac3e1fe24c89d76631e23fe4cb625a6))
* **ui:** don't seek when editing time events ([#26](https://github.com/havenhq/revideo/issues/26)) ([524c200](https://github.com/havenhq/revideo/commit/524c200ef1bd6a6f52096d04c2aeed24a24cda6f))
* **ui:** downgrade preact ([#1](https://github.com/havenhq/revideo/issues/1)) ([5f7456f](https://github.com/havenhq/revideo/commit/5f7456fe4c5a1cc76ccd8fed5a6f9a8a4e846d27))
* **ui:** fix "go to source" ([#895](https://github.com/havenhq/revideo/issues/895)) ([ec729de](https://github.com/havenhq/revideo/commit/ec729dea0d65bc69aefc0abd601f365af1c4ed68))
* **ui:** fix collapse ([#698](https://github.com/havenhq/revideo/issues/698)) ([6bd8703](https://github.com/havenhq/revideo/commit/6bd8703ec9b16f55b3817f6a1f9130f17b66c69a))
* **ui:** fix inspector tab ([#374](https://github.com/havenhq/revideo/issues/374)) ([c4cb378](https://github.com/havenhq/revideo/commit/c4cb378c2f9d972bb41542bbe3b3aa314fa1f3ad))
* **ui:** fix new version link ([#505](https://github.com/havenhq/revideo/issues/505)) ([7459e7f](https://github.com/havenhq/revideo/commit/7459e7f8355163f3cb6a3ed791fc41a2962a186e))
* **ui:** fix onChange handlers ([#515](https://github.com/havenhq/revideo/issues/515)) ([a23d06c](https://github.com/havenhq/revideo/commit/a23d06cbf6e29f37a9259e50fe71c482640b83fb))
* **ui:** fix out of range warning ([#939](https://github.com/havenhq/revideo/issues/939)) ([c9f466f](https://github.com/havenhq/revideo/commit/c9f466f20ff1a3e2cb77aa5575823947ef9beeee))
* **ui:** fix play-pause button ([#299](https://github.com/havenhq/revideo/issues/299)) ([191f54a](https://github.com/havenhq/revideo/commit/191f54a0a5a9de2fd2dc27bffc6d21d692ce6f72))
* **ui:** fix snapshot ([#643](https://github.com/havenhq/revideo/issues/643)) ([590216a](https://github.com/havenhq/revideo/commit/590216ac094d6b6ef3e9c773499bc52063f617b1))
* **ui:** fix transparent background ([#886](https://github.com/havenhq/revideo/issues/886)) ([83f652f](https://github.com/havenhq/revideo/commit/83f652fdcfa075f5de24186ffdffd1b7db1d8fc9))
* **ui:** fix typo in viewport ID ([#620](https://github.com/havenhq/revideo/issues/620)) ([3a83f20](https://github.com/havenhq/revideo/commit/3a83f20cb1b8ddc7b95a8e36bf6f3d0cd036693b))
* **ui:** fix zoom to fit ([#561](https://github.com/havenhq/revideo/issues/561)) ([1c947b4](https://github.com/havenhq/revideo/commit/1c947b417e218809f33928d6cbb89d463bdc2e66))
* **ui:** ignore shortcuts when typing ([#521](https://github.com/havenhq/revideo/issues/521)) ([4d3e1a1](https://github.com/havenhq/revideo/commit/4d3e1a13caee2ddd03857961a44dd10a7e1cb32a)), closes [#518](https://github.com/havenhq/revideo/issues/518)
* **ui:** misaligned overlay ([#127](https://github.com/havenhq/revideo/issues/127)) ([0379730](https://github.com/havenhq/revideo/commit/03797302a302e28caf9f2428cfce4a122f827775))
* **ui:** prevent context menu in viewport ([#123](https://github.com/havenhq/revideo/issues/123)) ([0fdd85e](https://github.com/havenhq/revideo/commit/0fdd85ecf5b61907ce1e16f5fb9253540528a8b0))
* **ui:** prevent spawning multiple color pickers ([#747](https://github.com/havenhq/revideo/issues/747)) ([48ffd1f](https://github.com/havenhq/revideo/commit/48ffd1f2eec21f9880e172632a2310f5676e3c19)), closes [#744](https://github.com/havenhq/revideo/issues/744)
* **ui:** prevent timeline scroll when zooming ([#162](https://github.com/havenhq/revideo/issues/162)) ([b8278ae](https://github.com/havenhq/revideo/commit/b8278aeb7b92f215bccbd1aa57de17c9233cff01))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* **ui:** remove glossy <select> effect in Safari ([#292](https://github.com/havenhq/revideo/issues/292)) ([9c062b2](https://github.com/havenhq/revideo/commit/9c062b26e48fbdb1905daae25a3fb34df82307d3))
* **ui:** support small ranges ([#739](https://github.com/havenhq/revideo/issues/739)) ([cf32d8b](https://github.com/havenhq/revideo/commit/cf32d8b08b94f5044987eb554cd250fc79fbc99d)), closes [#738](https://github.com/havenhq/revideo/issues/738)
* **ui:** use signals correctly ([#906](https://github.com/havenhq/revideo/issues/906)) ([f67d691](https://github.com/havenhq/revideo/commit/f67d691b5f2f6358120e9582a1839ef3d49c77b8))
* **ui:** version comparison issue ([#520](https://github.com/havenhq/revideo/issues/520)) ([93b5e08](https://github.com/havenhq/revideo/commit/93b5e088b4a4fda0d2177cb2cc6680c34fa72d30)), closes [#519](https://github.com/havenhq/revideo/issues/519)
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* **2d:** expand animations and reduced motion ([#671](https://github.com/havenhq/revideo/issues/671)) ([b8e9d03](https://github.com/havenhq/revideo/commit/b8e9d03488f8ca7085b3e7e1b095a52f39f2bc89))
* **2d:** visual feedback about rendering process ([#681](https://github.com/havenhq/revideo/issues/681)) ([d0495f5](https://github.com/havenhq/revideo/commit/d0495f5c6396c05454a5323e4486ab4829adbc9e))
* add audio volume control through arrow keys ([#856](https://github.com/havenhq/revideo/issues/856)) ([8b86fd4](https://github.com/havenhq/revideo/commit/8b86fd4e70f91a0d5b1150d760427ca355666341))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add E2E testing ([#101](https://github.com/havenhq/revideo/issues/101)) ([6398c54](https://github.com/havenhq/revideo/commit/6398c54e4c4d6667ce9f45b9bbef6ea110ea2215)), closes [#42](https://github.com/havenhq/revideo/issues/42)
* add experimental features ([#876](https://github.com/havenhq/revideo/issues/876)) ([498d387](https://github.com/havenhq/revideo/commit/498d3871d05d4dcc83453654bec7762d2ab32e7e))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* added file type and quality options to rendering panel ([#50](https://github.com/havenhq/revideo/issues/50)) ([bee71ef](https://github.com/havenhq/revideo/commit/bee71ef2673c269db47a4433831720b7ad0fb4e8)), closes [#24](https://github.com/havenhq/revideo/issues/24)
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* auto meta fields ([#565](https://github.com/havenhq/revideo/issues/565)) ([645af6d](https://github.com/havenhq/revideo/commit/645af6d2b7e8d9332b6f08419c318ee9434d7f3f))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display array values in inspector ([#670](https://github.com/havenhq/revideo/issues/670)) ([e71d74c](https://github.com/havenhq/revideo/commit/e71d74c9c04995393ad8ee942b8e6e5baa6f982f))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* editor improvements ([#121](https://github.com/havenhq/revideo/issues/121)) ([e8b32ce](https://github.com/havenhq/revideo/commit/e8b32ceff1b8216282c4b5713508ce1172645e20))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* meta field descriptions ([#664](https://github.com/havenhq/revideo/issues/664)) ([80c9d07](https://github.com/havenhq/revideo/commit/80c9d07f88f4a3df0f99e5741b31313f891a5d51))
* minor console improvements ([#145](https://github.com/havenhq/revideo/issues/145)) ([3e32e73](https://github.com/havenhq/revideo/commit/3e32e73434ad872049af9e3f1f711bc0185410f4))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* navigate to slide source ([#490](https://github.com/havenhq/revideo/issues/490)) ([b5ae4bf](https://github.com/havenhq/revideo/commit/b5ae4bf37076b262a20949cca030db3902186c8d))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* new plugin hooks ([#723](https://github.com/havenhq/revideo/issues/723)) ([9a2b5ab](https://github.com/havenhq/revideo/commit/9a2b5ab8be0d001414fd00da3053d408e00fd1cd))
* open time events in editor ([#87](https://github.com/havenhq/revideo/issues/87)) ([74b781d](https://github.com/havenhq/revideo/commit/74b781d57fca7ef1d10904673276f2a7354c01b8))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* **ui:** add color picker ([#691](https://github.com/havenhq/revideo/issues/691)) ([a33059c](https://github.com/havenhq/revideo/commit/a33059c0f455814919db31bc9e5e932907c797e4))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** add direct range selection & playhead shortcuts ([#907](https://github.com/havenhq/revideo/issues/907)) ([39264fc](https://github.com/havenhq/revideo/commit/39264fc074da739efddf24ef080f6c5f279f8014))
* **ui:** add external link to docs ([#346](https://github.com/havenhq/revideo/issues/346)) ([fc4ee5d](https://github.com/havenhq/revideo/commit/fc4ee5d028312904ed9e11c5341ac00f36e7242b))
* **ui:** add goto start and goto end buttons ([#814](https://github.com/havenhq/revideo/issues/814)) ([449f194](https://github.com/havenhq/revideo/commit/449f1946474af9886135571c14c83b8440bdf28c))
* **ui:** add number input dragging ([#917](https://github.com/havenhq/revideo/issues/917)) ([1b5c232](https://github.com/havenhq/revideo/commit/1b5c23260c3015608f202a103b4c0aebd1860e36)), closes [#799](https://github.com/havenhq/revideo/issues/799)
* **ui:** add quarter resolution ([#421](https://github.com/havenhq/revideo/issues/421)) ([d0160d0](https://github.com/havenhq/revideo/commit/d0160d0d5ef76ffb0d3591566891b5efa4061744))
* **ui:** add shortcuts to button titles ([#532](https://github.com/havenhq/revideo/issues/532)) ([3549dd3](https://github.com/havenhq/revideo/commit/3549dd3fd7ef47376a5a2dd516609499d3985ac3))
* **ui:** add volume slider ([#872](https://github.com/havenhq/revideo/issues/872)) ([5ac3069](https://github.com/havenhq/revideo/commit/5ac3069f027ee123c212217dcf8d26a78a3aa106))
* **ui:** custom checkbox style ([#529](https://github.com/havenhq/revideo/issues/529)) ([af98db1](https://github.com/havenhq/revideo/commit/af98db103d66e8af059dc483d49984b9adb9b95c))
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** estimate remaining rendering time ([#795](https://github.com/havenhq/revideo/issues/795)) ([1a46148](https://github.com/havenhq/revideo/commit/1a4614801869ab36827ca857d66eed8de9cffd09)), closes [#784](https://github.com/havenhq/revideo/issues/784)
* **ui:** improve rendering button ([#662](https://github.com/havenhq/revideo/issues/662)) ([2b4ae70](https://github.com/havenhq/revideo/commit/2b4ae70ea0b0305fbb2596e95bbc70440718bbe2))
* **ui:** include function names in stack traces ([#693](https://github.com/havenhq/revideo/issues/693)) ([835c0fa](https://github.com/havenhq/revideo/commit/835c0fa4b70429db6fe96be96d6d9e44949f7f6c))
* **ui:** list available shortcuts ([#444](https://github.com/havenhq/revideo/issues/444)) ([443fcc9](https://github.com/havenhq/revideo/commit/443fcc9feb1a1ca69aecbc4db2e194ce4f50f72e))
* **ui:** make inspector toggleable ([#921](https://github.com/havenhq/revideo/issues/921)) ([a365951](https://github.com/havenhq/revideo/commit/a365951e69c01cac1ea23d173034ad83f988c8eb))
* **ui:** new sidebar ([#692](https://github.com/havenhq/revideo/issues/692)) ([b555ee1](https://github.com/havenhq/revideo/commit/b555ee1d10f8a6e1b380c043dff2717ffa01a068)), closes [#492](https://github.com/havenhq/revideo/issues/492)
* **ui:** presentation interface ([#487](https://github.com/havenhq/revideo/issues/487)) ([1899f02](https://github.com/havenhq/revideo/commit/1899f020fb1c0b2136de4401e6fc068bcf5e0cc4))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** shift + right arrow moves to last frame ([#354](https://github.com/havenhq/revideo/issues/354)) ([4b81709](https://github.com/havenhq/revideo/commit/4b8170971400c5bf4fe690a58d3f44c3e1d00b94)), closes [#353](https://github.com/havenhq/revideo/issues/353)
* **ui:** small improvements ([#833](https://github.com/havenhq/revideo/issues/833)) ([f44400c](https://github.com/havenhq/revideo/commit/f44400c458a1d7f49520494f01efb9936f4df83e))
* **ui:** timeline dragging ([#794](https://github.com/havenhq/revideo/issues/794)) ([248e454](https://github.com/havenhq/revideo/commit/248e4546367f9d99221f64b811a07d54a9988e48)), closes [#699](https://github.com/havenhq/revideo/issues/699)
* **ui:** timeline overhaul ([#47](https://github.com/havenhq/revideo/issues/47)) ([4232a60](https://github.com/havenhq/revideo/commit/4232a6072540b54451e99e18c1001db0175bb93f)), closes [#20](https://github.com/havenhq/revideo/issues/20)
* **ui:** timeline scrubbing ([#862](https://github.com/havenhq/revideo/issues/862)) ([211b9a4](https://github.com/havenhq/revideo/commit/211b9a4327720afd1ce0ff93868a501c2fd745aa)), closes [#286](https://github.com/havenhq/revideo/issues/286)
* **ui:** vertical line on time event ([#808](https://github.com/havenhq/revideo/issues/808)) ([18015d6](https://github.com/havenhq/revideo/commit/18015d6714ffe2a6255f26895aa9a7c1908a4f7a)), closes [#804](https://github.com/havenhq/revideo/issues/804)
* **ui:** visual changes ([#96](https://github.com/havenhq/revideo/issues/96)) ([3d599f4](https://github.com/havenhq/revideo/commit/3d599f4e1788fbd15e996be8bf95679f1c6787bd))
* **ui:** zoom controls ([#531](https://github.com/havenhq/revideo/issues/531)) ([752350d](https://github.com/havenhq/revideo/commit/752350d0c547e21806f1b70a5c68025012e5ec11))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
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





## 0.5.4 (2024-08-06)


### Bug Fixes

* **2d:** fix audio offset editing ([#674](https://github.com/havenhq/revideo/issues/674)) ([58d6ef7](https://github.com/havenhq/revideo/commit/58d6ef79fa06e377e0c1821efe73585586d124a6))
* **2d:** fix performance issue with audio track ([#427](https://github.com/havenhq/revideo/issues/427)) ([c993770](https://github.com/havenhq/revideo/commit/c993770937ddfdf0ac39b144a1f79f1a300f7899))
* **2d:** fix version link ([#608](https://github.com/havenhq/revideo/issues/608)) ([4fe5b7a](https://github.com/havenhq/revideo/commit/4fe5b7a5150fbdf43ea50ecf3dc8b4690c0e2e34))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* correctly await re-renders ([#918](https://github.com/havenhq/revideo/issues/918)) ([873a9a3](https://github.com/havenhq/revideo/commit/873a9a3eed2676de4cc7f31fbd5ea58817a80aff))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix player state not being saved ([#85](https://github.com/havenhq/revideo/issues/85)) ([74b54b9](https://github.com/havenhq/revideo/commit/74b54b970d1287e80fe2334a034844ad6a80c23b))
* fix tsdoc comments ([#21](https://github.com/havenhq/revideo/issues/21)) ([4b6cb66](https://github.com/havenhq/revideo/commit/4b6cb660ad82befcfd41188c7a8f9c8c0cba93ed)), closes [#18](https://github.com/havenhq/revideo/issues/18)
* limit fps to positive numbers ([#937](https://github.com/havenhq/revideo/issues/937)) ([c7c0c67](https://github.com/havenhq/revideo/commit/c7c0c6730e1a00e6b23077188bfc2d389e98cff2)), closes [#936](https://github.com/havenhq/revideo/issues/936)
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* support hmr when navigating ([370ea16](https://github.com/havenhq/revideo/commit/370ea1676a1c34313c0fb917c0f0691538f72016))
* the resolution fields in Rendering no longer reset each other ([#73](https://github.com/havenhq/revideo/issues/73)) ([ddabec5](https://github.com/havenhq/revideo/commit/ddabec549be3cecec27cf9f5643b036e12a83472))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** correctly reset zoom ([#432](https://github.com/havenhq/revideo/issues/432)) ([a33ee14](https://github.com/havenhq/revideo/commit/a33ee14dfac3e1fe24c89d76631e23fe4cb625a6))
* **ui:** don't seek when editing time events ([#26](https://github.com/havenhq/revideo/issues/26)) ([524c200](https://github.com/havenhq/revideo/commit/524c200ef1bd6a6f52096d04c2aeed24a24cda6f))
* **ui:** downgrade preact ([#1](https://github.com/havenhq/revideo/issues/1)) ([5f7456f](https://github.com/havenhq/revideo/commit/5f7456fe4c5a1cc76ccd8fed5a6f9a8a4e846d27))
* **ui:** fix "go to source" ([#895](https://github.com/havenhq/revideo/issues/895)) ([ec729de](https://github.com/havenhq/revideo/commit/ec729dea0d65bc69aefc0abd601f365af1c4ed68))
* **ui:** fix collapse ([#698](https://github.com/havenhq/revideo/issues/698)) ([6bd8703](https://github.com/havenhq/revideo/commit/6bd8703ec9b16f55b3817f6a1f9130f17b66c69a))
* **ui:** fix inspector tab ([#374](https://github.com/havenhq/revideo/issues/374)) ([c4cb378](https://github.com/havenhq/revideo/commit/c4cb378c2f9d972bb41542bbe3b3aa314fa1f3ad))
* **ui:** fix new version link ([#505](https://github.com/havenhq/revideo/issues/505)) ([7459e7f](https://github.com/havenhq/revideo/commit/7459e7f8355163f3cb6a3ed791fc41a2962a186e))
* **ui:** fix onChange handlers ([#515](https://github.com/havenhq/revideo/issues/515)) ([a23d06c](https://github.com/havenhq/revideo/commit/a23d06cbf6e29f37a9259e50fe71c482640b83fb))
* **ui:** fix out of range warning ([#939](https://github.com/havenhq/revideo/issues/939)) ([c9f466f](https://github.com/havenhq/revideo/commit/c9f466f20ff1a3e2cb77aa5575823947ef9beeee))
* **ui:** fix play-pause button ([#299](https://github.com/havenhq/revideo/issues/299)) ([191f54a](https://github.com/havenhq/revideo/commit/191f54a0a5a9de2fd2dc27bffc6d21d692ce6f72))
* **ui:** fix snapshot ([#643](https://github.com/havenhq/revideo/issues/643)) ([590216a](https://github.com/havenhq/revideo/commit/590216ac094d6b6ef3e9c773499bc52063f617b1))
* **ui:** fix transparent background ([#886](https://github.com/havenhq/revideo/issues/886)) ([83f652f](https://github.com/havenhq/revideo/commit/83f652fdcfa075f5de24186ffdffd1b7db1d8fc9))
* **ui:** fix typo in viewport ID ([#620](https://github.com/havenhq/revideo/issues/620)) ([3a83f20](https://github.com/havenhq/revideo/commit/3a83f20cb1b8ddc7b95a8e36bf6f3d0cd036693b))
* **ui:** fix zoom to fit ([#561](https://github.com/havenhq/revideo/issues/561)) ([1c947b4](https://github.com/havenhq/revideo/commit/1c947b417e218809f33928d6cbb89d463bdc2e66))
* **ui:** ignore shortcuts when typing ([#521](https://github.com/havenhq/revideo/issues/521)) ([4d3e1a1](https://github.com/havenhq/revideo/commit/4d3e1a13caee2ddd03857961a44dd10a7e1cb32a)), closes [#518](https://github.com/havenhq/revideo/issues/518)
* **ui:** misaligned overlay ([#127](https://github.com/havenhq/revideo/issues/127)) ([0379730](https://github.com/havenhq/revideo/commit/03797302a302e28caf9f2428cfce4a122f827775))
* **ui:** prevent context menu in viewport ([#123](https://github.com/havenhq/revideo/issues/123)) ([0fdd85e](https://github.com/havenhq/revideo/commit/0fdd85ecf5b61907ce1e16f5fb9253540528a8b0))
* **ui:** prevent spawning multiple color pickers ([#747](https://github.com/havenhq/revideo/issues/747)) ([48ffd1f](https://github.com/havenhq/revideo/commit/48ffd1f2eec21f9880e172632a2310f5676e3c19)), closes [#744](https://github.com/havenhq/revideo/issues/744)
* **ui:** prevent timeline scroll when zooming ([#162](https://github.com/havenhq/revideo/issues/162)) ([b8278ae](https://github.com/havenhq/revideo/commit/b8278aeb7b92f215bccbd1aa57de17c9233cff01))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* **ui:** remove glossy <select> effect in Safari ([#292](https://github.com/havenhq/revideo/issues/292)) ([9c062b2](https://github.com/havenhq/revideo/commit/9c062b26e48fbdb1905daae25a3fb34df82307d3))
* **ui:** support small ranges ([#739](https://github.com/havenhq/revideo/issues/739)) ([cf32d8b](https://github.com/havenhq/revideo/commit/cf32d8b08b94f5044987eb554cd250fc79fbc99d)), closes [#738](https://github.com/havenhq/revideo/issues/738)
* **ui:** use signals correctly ([#906](https://github.com/havenhq/revideo/issues/906)) ([f67d691](https://github.com/havenhq/revideo/commit/f67d691b5f2f6358120e9582a1839ef3d49c77b8))
* **ui:** version comparison issue ([#520](https://github.com/havenhq/revideo/issues/520)) ([93b5e08](https://github.com/havenhq/revideo/commit/93b5e088b4a4fda0d2177cb2cc6680c34fa72d30)), closes [#519](https://github.com/havenhq/revideo/issues/519)
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* **2d:** expand animations and reduced motion ([#671](https://github.com/havenhq/revideo/issues/671)) ([b8e9d03](https://github.com/havenhq/revideo/commit/b8e9d03488f8ca7085b3e7e1b095a52f39f2bc89))
* **2d:** visual feedback about rendering process ([#681](https://github.com/havenhq/revideo/issues/681)) ([d0495f5](https://github.com/havenhq/revideo/commit/d0495f5c6396c05454a5323e4486ab4829adbc9e))
* add audio volume control through arrow keys ([#856](https://github.com/havenhq/revideo/issues/856)) ([8b86fd4](https://github.com/havenhq/revideo/commit/8b86fd4e70f91a0d5b1150d760427ca355666341))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add E2E testing ([#101](https://github.com/havenhq/revideo/issues/101)) ([6398c54](https://github.com/havenhq/revideo/commit/6398c54e4c4d6667ce9f45b9bbef6ea110ea2215)), closes [#42](https://github.com/havenhq/revideo/issues/42)
* add experimental features ([#876](https://github.com/havenhq/revideo/issues/876)) ([498d387](https://github.com/havenhq/revideo/commit/498d3871d05d4dcc83453654bec7762d2ab32e7e))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* added file type and quality options to rendering panel ([#50](https://github.com/havenhq/revideo/issues/50)) ([bee71ef](https://github.com/havenhq/revideo/commit/bee71ef2673c269db47a4433831720b7ad0fb4e8)), closes [#24](https://github.com/havenhq/revideo/issues/24)
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* auto meta fields ([#565](https://github.com/havenhq/revideo/issues/565)) ([645af6d](https://github.com/havenhq/revideo/commit/645af6d2b7e8d9332b6f08419c318ee9434d7f3f))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display array values in inspector ([#670](https://github.com/havenhq/revideo/issues/670)) ([e71d74c](https://github.com/havenhq/revideo/commit/e71d74c9c04995393ad8ee942b8e6e5baa6f982f))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* editor improvements ([#121](https://github.com/havenhq/revideo/issues/121)) ([e8b32ce](https://github.com/havenhq/revideo/commit/e8b32ceff1b8216282c4b5713508ce1172645e20))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* meta field descriptions ([#664](https://github.com/havenhq/revideo/issues/664)) ([80c9d07](https://github.com/havenhq/revideo/commit/80c9d07f88f4a3df0f99e5741b31313f891a5d51))
* minor console improvements ([#145](https://github.com/havenhq/revideo/issues/145)) ([3e32e73](https://github.com/havenhq/revideo/commit/3e32e73434ad872049af9e3f1f711bc0185410f4))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* navigate to slide source ([#490](https://github.com/havenhq/revideo/issues/490)) ([b5ae4bf](https://github.com/havenhq/revideo/commit/b5ae4bf37076b262a20949cca030db3902186c8d))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* new plugin hooks ([#723](https://github.com/havenhq/revideo/issues/723)) ([9a2b5ab](https://github.com/havenhq/revideo/commit/9a2b5ab8be0d001414fd00da3053d408e00fd1cd))
* open time events in editor ([#87](https://github.com/havenhq/revideo/issues/87)) ([74b781d](https://github.com/havenhq/revideo/commit/74b781d57fca7ef1d10904673276f2a7354c01b8))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* **ui:** add color picker ([#691](https://github.com/havenhq/revideo/issues/691)) ([a33059c](https://github.com/havenhq/revideo/commit/a33059c0f455814919db31bc9e5e932907c797e4))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** add direct range selection & playhead shortcuts ([#907](https://github.com/havenhq/revideo/issues/907)) ([39264fc](https://github.com/havenhq/revideo/commit/39264fc074da739efddf24ef080f6c5f279f8014))
* **ui:** add external link to docs ([#346](https://github.com/havenhq/revideo/issues/346)) ([fc4ee5d](https://github.com/havenhq/revideo/commit/fc4ee5d028312904ed9e11c5341ac00f36e7242b))
* **ui:** add goto start and goto end buttons ([#814](https://github.com/havenhq/revideo/issues/814)) ([449f194](https://github.com/havenhq/revideo/commit/449f1946474af9886135571c14c83b8440bdf28c))
* **ui:** add number input dragging ([#917](https://github.com/havenhq/revideo/issues/917)) ([1b5c232](https://github.com/havenhq/revideo/commit/1b5c23260c3015608f202a103b4c0aebd1860e36)), closes [#799](https://github.com/havenhq/revideo/issues/799)
* **ui:** add quarter resolution ([#421](https://github.com/havenhq/revideo/issues/421)) ([d0160d0](https://github.com/havenhq/revideo/commit/d0160d0d5ef76ffb0d3591566891b5efa4061744))
* **ui:** add shortcuts to button titles ([#532](https://github.com/havenhq/revideo/issues/532)) ([3549dd3](https://github.com/havenhq/revideo/commit/3549dd3fd7ef47376a5a2dd516609499d3985ac3))
* **ui:** add volume slider ([#872](https://github.com/havenhq/revideo/issues/872)) ([5ac3069](https://github.com/havenhq/revideo/commit/5ac3069f027ee123c212217dcf8d26a78a3aa106))
* **ui:** custom checkbox style ([#529](https://github.com/havenhq/revideo/issues/529)) ([af98db1](https://github.com/havenhq/revideo/commit/af98db103d66e8af059dc483d49984b9adb9b95c))
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** estimate remaining rendering time ([#795](https://github.com/havenhq/revideo/issues/795)) ([1a46148](https://github.com/havenhq/revideo/commit/1a4614801869ab36827ca857d66eed8de9cffd09)), closes [#784](https://github.com/havenhq/revideo/issues/784)
* **ui:** improve rendering button ([#662](https://github.com/havenhq/revideo/issues/662)) ([2b4ae70](https://github.com/havenhq/revideo/commit/2b4ae70ea0b0305fbb2596e95bbc70440718bbe2))
* **ui:** include function names in stack traces ([#693](https://github.com/havenhq/revideo/issues/693)) ([835c0fa](https://github.com/havenhq/revideo/commit/835c0fa4b70429db6fe96be96d6d9e44949f7f6c))
* **ui:** list available shortcuts ([#444](https://github.com/havenhq/revideo/issues/444)) ([443fcc9](https://github.com/havenhq/revideo/commit/443fcc9feb1a1ca69aecbc4db2e194ce4f50f72e))
* **ui:** make inspector toggleable ([#921](https://github.com/havenhq/revideo/issues/921)) ([a365951](https://github.com/havenhq/revideo/commit/a365951e69c01cac1ea23d173034ad83f988c8eb))
* **ui:** new sidebar ([#692](https://github.com/havenhq/revideo/issues/692)) ([b555ee1](https://github.com/havenhq/revideo/commit/b555ee1d10f8a6e1b380c043dff2717ffa01a068)), closes [#492](https://github.com/havenhq/revideo/issues/492)
* **ui:** presentation interface ([#487](https://github.com/havenhq/revideo/issues/487)) ([1899f02](https://github.com/havenhq/revideo/commit/1899f020fb1c0b2136de4401e6fc068bcf5e0cc4))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** shift + right arrow moves to last frame ([#354](https://github.com/havenhq/revideo/issues/354)) ([4b81709](https://github.com/havenhq/revideo/commit/4b8170971400c5bf4fe690a58d3f44c3e1d00b94)), closes [#353](https://github.com/havenhq/revideo/issues/353)
* **ui:** small improvements ([#833](https://github.com/havenhq/revideo/issues/833)) ([f44400c](https://github.com/havenhq/revideo/commit/f44400c458a1d7f49520494f01efb9936f4df83e))
* **ui:** timeline dragging ([#794](https://github.com/havenhq/revideo/issues/794)) ([248e454](https://github.com/havenhq/revideo/commit/248e4546367f9d99221f64b811a07d54a9988e48)), closes [#699](https://github.com/havenhq/revideo/issues/699)
* **ui:** timeline overhaul ([#47](https://github.com/havenhq/revideo/issues/47)) ([4232a60](https://github.com/havenhq/revideo/commit/4232a6072540b54451e99e18c1001db0175bb93f)), closes [#20](https://github.com/havenhq/revideo/issues/20)
* **ui:** timeline scrubbing ([#862](https://github.com/havenhq/revideo/issues/862)) ([211b9a4](https://github.com/havenhq/revideo/commit/211b9a4327720afd1ce0ff93868a501c2fd745aa)), closes [#286](https://github.com/havenhq/revideo/issues/286)
* **ui:** vertical line on time event ([#808](https://github.com/havenhq/revideo/issues/808)) ([18015d6](https://github.com/havenhq/revideo/commit/18015d6714ffe2a6255f26895aa9a7c1908a4f7a)), closes [#804](https://github.com/havenhq/revideo/issues/804)
* **ui:** visual changes ([#96](https://github.com/havenhq/revideo/issues/96)) ([3d599f4](https://github.com/havenhq/revideo/commit/3d599f4e1788fbd15e996be8bf95679f1c6787bd))
* **ui:** zoom controls ([#531](https://github.com/havenhq/revideo/issues/531)) ([752350d](https://github.com/havenhq/revideo/commit/752350d0c547e21806f1b70a5c68025012e5ec11))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
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





## 0.5.3 (2024-07-31)


### Bug Fixes

* **2d:** fix audio offset editing ([#674](https://github.com/havenhq/revideo/issues/674)) ([58d6ef7](https://github.com/havenhq/revideo/commit/58d6ef79fa06e377e0c1821efe73585586d124a6))
* **2d:** fix performance issue with audio track ([#427](https://github.com/havenhq/revideo/issues/427)) ([c993770](https://github.com/havenhq/revideo/commit/c993770937ddfdf0ac39b144a1f79f1a300f7899))
* **2d:** fix version link ([#608](https://github.com/havenhq/revideo/issues/608)) ([4fe5b7a](https://github.com/havenhq/revideo/commit/4fe5b7a5150fbdf43ea50ecf3dc8b4690c0e2e34))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* correctly await re-renders ([#918](https://github.com/havenhq/revideo/issues/918)) ([873a9a3](https://github.com/havenhq/revideo/commit/873a9a3eed2676de4cc7f31fbd5ea58817a80aff))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix player state not being saved ([#85](https://github.com/havenhq/revideo/issues/85)) ([74b54b9](https://github.com/havenhq/revideo/commit/74b54b970d1287e80fe2334a034844ad6a80c23b))
* fix tsdoc comments ([#21](https://github.com/havenhq/revideo/issues/21)) ([4b6cb66](https://github.com/havenhq/revideo/commit/4b6cb660ad82befcfd41188c7a8f9c8c0cba93ed)), closes [#18](https://github.com/havenhq/revideo/issues/18)
* limit fps to positive numbers ([#937](https://github.com/havenhq/revideo/issues/937)) ([c7c0c67](https://github.com/havenhq/revideo/commit/c7c0c6730e1a00e6b23077188bfc2d389e98cff2)), closes [#936](https://github.com/havenhq/revideo/issues/936)
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* support hmr when navigating ([370ea16](https://github.com/havenhq/revideo/commit/370ea1676a1c34313c0fb917c0f0691538f72016))
* the resolution fields in Rendering no longer reset each other ([#73](https://github.com/havenhq/revideo/issues/73)) ([ddabec5](https://github.com/havenhq/revideo/commit/ddabec549be3cecec27cf9f5643b036e12a83472))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** correctly reset zoom ([#432](https://github.com/havenhq/revideo/issues/432)) ([a33ee14](https://github.com/havenhq/revideo/commit/a33ee14dfac3e1fe24c89d76631e23fe4cb625a6))
* **ui:** don't seek when editing time events ([#26](https://github.com/havenhq/revideo/issues/26)) ([524c200](https://github.com/havenhq/revideo/commit/524c200ef1bd6a6f52096d04c2aeed24a24cda6f))
* **ui:** downgrade preact ([#1](https://github.com/havenhq/revideo/issues/1)) ([5f7456f](https://github.com/havenhq/revideo/commit/5f7456fe4c5a1cc76ccd8fed5a6f9a8a4e846d27))
* **ui:** fix "go to source" ([#895](https://github.com/havenhq/revideo/issues/895)) ([ec729de](https://github.com/havenhq/revideo/commit/ec729dea0d65bc69aefc0abd601f365af1c4ed68))
* **ui:** fix collapse ([#698](https://github.com/havenhq/revideo/issues/698)) ([6bd8703](https://github.com/havenhq/revideo/commit/6bd8703ec9b16f55b3817f6a1f9130f17b66c69a))
* **ui:** fix inspector tab ([#374](https://github.com/havenhq/revideo/issues/374)) ([c4cb378](https://github.com/havenhq/revideo/commit/c4cb378c2f9d972bb41542bbe3b3aa314fa1f3ad))
* **ui:** fix new version link ([#505](https://github.com/havenhq/revideo/issues/505)) ([7459e7f](https://github.com/havenhq/revideo/commit/7459e7f8355163f3cb6a3ed791fc41a2962a186e))
* **ui:** fix onChange handlers ([#515](https://github.com/havenhq/revideo/issues/515)) ([a23d06c](https://github.com/havenhq/revideo/commit/a23d06cbf6e29f37a9259e50fe71c482640b83fb))
* **ui:** fix out of range warning ([#939](https://github.com/havenhq/revideo/issues/939)) ([c9f466f](https://github.com/havenhq/revideo/commit/c9f466f20ff1a3e2cb77aa5575823947ef9beeee))
* **ui:** fix play-pause button ([#299](https://github.com/havenhq/revideo/issues/299)) ([191f54a](https://github.com/havenhq/revideo/commit/191f54a0a5a9de2fd2dc27bffc6d21d692ce6f72))
* **ui:** fix snapshot ([#643](https://github.com/havenhq/revideo/issues/643)) ([590216a](https://github.com/havenhq/revideo/commit/590216ac094d6b6ef3e9c773499bc52063f617b1))
* **ui:** fix transparent background ([#886](https://github.com/havenhq/revideo/issues/886)) ([83f652f](https://github.com/havenhq/revideo/commit/83f652fdcfa075f5de24186ffdffd1b7db1d8fc9))
* **ui:** fix typo in viewport ID ([#620](https://github.com/havenhq/revideo/issues/620)) ([3a83f20](https://github.com/havenhq/revideo/commit/3a83f20cb1b8ddc7b95a8e36bf6f3d0cd036693b))
* **ui:** fix zoom to fit ([#561](https://github.com/havenhq/revideo/issues/561)) ([1c947b4](https://github.com/havenhq/revideo/commit/1c947b417e218809f33928d6cbb89d463bdc2e66))
* **ui:** ignore shortcuts when typing ([#521](https://github.com/havenhq/revideo/issues/521)) ([4d3e1a1](https://github.com/havenhq/revideo/commit/4d3e1a13caee2ddd03857961a44dd10a7e1cb32a)), closes [#518](https://github.com/havenhq/revideo/issues/518)
* **ui:** misaligned overlay ([#127](https://github.com/havenhq/revideo/issues/127)) ([0379730](https://github.com/havenhq/revideo/commit/03797302a302e28caf9f2428cfce4a122f827775))
* **ui:** prevent context menu in viewport ([#123](https://github.com/havenhq/revideo/issues/123)) ([0fdd85e](https://github.com/havenhq/revideo/commit/0fdd85ecf5b61907ce1e16f5fb9253540528a8b0))
* **ui:** prevent spawning multiple color pickers ([#747](https://github.com/havenhq/revideo/issues/747)) ([48ffd1f](https://github.com/havenhq/revideo/commit/48ffd1f2eec21f9880e172632a2310f5676e3c19)), closes [#744](https://github.com/havenhq/revideo/issues/744)
* **ui:** prevent timeline scroll when zooming ([#162](https://github.com/havenhq/revideo/issues/162)) ([b8278ae](https://github.com/havenhq/revideo/commit/b8278aeb7b92f215bccbd1aa57de17c9233cff01))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* **ui:** remove glossy <select> effect in Safari ([#292](https://github.com/havenhq/revideo/issues/292)) ([9c062b2](https://github.com/havenhq/revideo/commit/9c062b26e48fbdb1905daae25a3fb34df82307d3))
* **ui:** support small ranges ([#739](https://github.com/havenhq/revideo/issues/739)) ([cf32d8b](https://github.com/havenhq/revideo/commit/cf32d8b08b94f5044987eb554cd250fc79fbc99d)), closes [#738](https://github.com/havenhq/revideo/issues/738)
* **ui:** use signals correctly ([#906](https://github.com/havenhq/revideo/issues/906)) ([f67d691](https://github.com/havenhq/revideo/commit/f67d691b5f2f6358120e9582a1839ef3d49c77b8))
* **ui:** version comparison issue ([#520](https://github.com/havenhq/revideo/issues/520)) ([93b5e08](https://github.com/havenhq/revideo/commit/93b5e088b4a4fda0d2177cb2cc6680c34fa72d30)), closes [#519](https://github.com/havenhq/revideo/issues/519)
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* **2d:** expand animations and reduced motion ([#671](https://github.com/havenhq/revideo/issues/671)) ([b8e9d03](https://github.com/havenhq/revideo/commit/b8e9d03488f8ca7085b3e7e1b095a52f39f2bc89))
* **2d:** visual feedback about rendering process ([#681](https://github.com/havenhq/revideo/issues/681)) ([d0495f5](https://github.com/havenhq/revideo/commit/d0495f5c6396c05454a5323e4486ab4829adbc9e))
* add audio volume control through arrow keys ([#856](https://github.com/havenhq/revideo/issues/856)) ([8b86fd4](https://github.com/havenhq/revideo/commit/8b86fd4e70f91a0d5b1150d760427ca355666341))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add E2E testing ([#101](https://github.com/havenhq/revideo/issues/101)) ([6398c54](https://github.com/havenhq/revideo/commit/6398c54e4c4d6667ce9f45b9bbef6ea110ea2215)), closes [#42](https://github.com/havenhq/revideo/issues/42)
* add experimental features ([#876](https://github.com/havenhq/revideo/issues/876)) ([498d387](https://github.com/havenhq/revideo/commit/498d3871d05d4dcc83453654bec7762d2ab32e7e))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* added file type and quality options to rendering panel ([#50](https://github.com/havenhq/revideo/issues/50)) ([bee71ef](https://github.com/havenhq/revideo/commit/bee71ef2673c269db47a4433831720b7ad0fb4e8)), closes [#24](https://github.com/havenhq/revideo/issues/24)
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* auto meta fields ([#565](https://github.com/havenhq/revideo/issues/565)) ([645af6d](https://github.com/havenhq/revideo/commit/645af6d2b7e8d9332b6f08419c318ee9434d7f3f))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display array values in inspector ([#670](https://github.com/havenhq/revideo/issues/670)) ([e71d74c](https://github.com/havenhq/revideo/commit/e71d74c9c04995393ad8ee942b8e6e5baa6f982f))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* editor improvements ([#121](https://github.com/havenhq/revideo/issues/121)) ([e8b32ce](https://github.com/havenhq/revideo/commit/e8b32ceff1b8216282c4b5713508ce1172645e20))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* meta field descriptions ([#664](https://github.com/havenhq/revideo/issues/664)) ([80c9d07](https://github.com/havenhq/revideo/commit/80c9d07f88f4a3df0f99e5741b31313f891a5d51))
* minor console improvements ([#145](https://github.com/havenhq/revideo/issues/145)) ([3e32e73](https://github.com/havenhq/revideo/commit/3e32e73434ad872049af9e3f1f711bc0185410f4))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* navigate to slide source ([#490](https://github.com/havenhq/revideo/issues/490)) ([b5ae4bf](https://github.com/havenhq/revideo/commit/b5ae4bf37076b262a20949cca030db3902186c8d))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* new plugin hooks ([#723](https://github.com/havenhq/revideo/issues/723)) ([9a2b5ab](https://github.com/havenhq/revideo/commit/9a2b5ab8be0d001414fd00da3053d408e00fd1cd))
* open time events in editor ([#87](https://github.com/havenhq/revideo/issues/87)) ([74b781d](https://github.com/havenhq/revideo/commit/74b781d57fca7ef1d10904673276f2a7354c01b8))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* **ui:** add color picker ([#691](https://github.com/havenhq/revideo/issues/691)) ([a33059c](https://github.com/havenhq/revideo/commit/a33059c0f455814919db31bc9e5e932907c797e4))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** add direct range selection & playhead shortcuts ([#907](https://github.com/havenhq/revideo/issues/907)) ([39264fc](https://github.com/havenhq/revideo/commit/39264fc074da739efddf24ef080f6c5f279f8014))
* **ui:** add external link to docs ([#346](https://github.com/havenhq/revideo/issues/346)) ([fc4ee5d](https://github.com/havenhq/revideo/commit/fc4ee5d028312904ed9e11c5341ac00f36e7242b))
* **ui:** add goto start and goto end buttons ([#814](https://github.com/havenhq/revideo/issues/814)) ([449f194](https://github.com/havenhq/revideo/commit/449f1946474af9886135571c14c83b8440bdf28c))
* **ui:** add number input dragging ([#917](https://github.com/havenhq/revideo/issues/917)) ([1b5c232](https://github.com/havenhq/revideo/commit/1b5c23260c3015608f202a103b4c0aebd1860e36)), closes [#799](https://github.com/havenhq/revideo/issues/799)
* **ui:** add quarter resolution ([#421](https://github.com/havenhq/revideo/issues/421)) ([d0160d0](https://github.com/havenhq/revideo/commit/d0160d0d5ef76ffb0d3591566891b5efa4061744))
* **ui:** add shortcuts to button titles ([#532](https://github.com/havenhq/revideo/issues/532)) ([3549dd3](https://github.com/havenhq/revideo/commit/3549dd3fd7ef47376a5a2dd516609499d3985ac3))
* **ui:** add volume slider ([#872](https://github.com/havenhq/revideo/issues/872)) ([5ac3069](https://github.com/havenhq/revideo/commit/5ac3069f027ee123c212217dcf8d26a78a3aa106))
* **ui:** custom checkbox style ([#529](https://github.com/havenhq/revideo/issues/529)) ([af98db1](https://github.com/havenhq/revideo/commit/af98db103d66e8af059dc483d49984b9adb9b95c))
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** estimate remaining rendering time ([#795](https://github.com/havenhq/revideo/issues/795)) ([1a46148](https://github.com/havenhq/revideo/commit/1a4614801869ab36827ca857d66eed8de9cffd09)), closes [#784](https://github.com/havenhq/revideo/issues/784)
* **ui:** improve rendering button ([#662](https://github.com/havenhq/revideo/issues/662)) ([2b4ae70](https://github.com/havenhq/revideo/commit/2b4ae70ea0b0305fbb2596e95bbc70440718bbe2))
* **ui:** include function names in stack traces ([#693](https://github.com/havenhq/revideo/issues/693)) ([835c0fa](https://github.com/havenhq/revideo/commit/835c0fa4b70429db6fe96be96d6d9e44949f7f6c))
* **ui:** list available shortcuts ([#444](https://github.com/havenhq/revideo/issues/444)) ([443fcc9](https://github.com/havenhq/revideo/commit/443fcc9feb1a1ca69aecbc4db2e194ce4f50f72e))
* **ui:** make inspector toggleable ([#921](https://github.com/havenhq/revideo/issues/921)) ([a365951](https://github.com/havenhq/revideo/commit/a365951e69c01cac1ea23d173034ad83f988c8eb))
* **ui:** new sidebar ([#692](https://github.com/havenhq/revideo/issues/692)) ([b555ee1](https://github.com/havenhq/revideo/commit/b555ee1d10f8a6e1b380c043dff2717ffa01a068)), closes [#492](https://github.com/havenhq/revideo/issues/492)
* **ui:** presentation interface ([#487](https://github.com/havenhq/revideo/issues/487)) ([1899f02](https://github.com/havenhq/revideo/commit/1899f020fb1c0b2136de4401e6fc068bcf5e0cc4))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** shift + right arrow moves to last frame ([#354](https://github.com/havenhq/revideo/issues/354)) ([4b81709](https://github.com/havenhq/revideo/commit/4b8170971400c5bf4fe690a58d3f44c3e1d00b94)), closes [#353](https://github.com/havenhq/revideo/issues/353)
* **ui:** small improvements ([#833](https://github.com/havenhq/revideo/issues/833)) ([f44400c](https://github.com/havenhq/revideo/commit/f44400c458a1d7f49520494f01efb9936f4df83e))
* **ui:** timeline dragging ([#794](https://github.com/havenhq/revideo/issues/794)) ([248e454](https://github.com/havenhq/revideo/commit/248e4546367f9d99221f64b811a07d54a9988e48)), closes [#699](https://github.com/havenhq/revideo/issues/699)
* **ui:** timeline overhaul ([#47](https://github.com/havenhq/revideo/issues/47)) ([4232a60](https://github.com/havenhq/revideo/commit/4232a6072540b54451e99e18c1001db0175bb93f)), closes [#20](https://github.com/havenhq/revideo/issues/20)
* **ui:** timeline scrubbing ([#862](https://github.com/havenhq/revideo/issues/862)) ([211b9a4](https://github.com/havenhq/revideo/commit/211b9a4327720afd1ce0ff93868a501c2fd745aa)), closes [#286](https://github.com/havenhq/revideo/issues/286)
* **ui:** vertical line on time event ([#808](https://github.com/havenhq/revideo/issues/808)) ([18015d6](https://github.com/havenhq/revideo/commit/18015d6714ffe2a6255f26895aa9a7c1908a4f7a)), closes [#804](https://github.com/havenhq/revideo/issues/804)
* **ui:** visual changes ([#96](https://github.com/havenhq/revideo/issues/96)) ([3d599f4](https://github.com/havenhq/revideo/commit/3d599f4e1788fbd15e996be8bf95679f1c6787bd))
* **ui:** zoom controls ([#531](https://github.com/havenhq/revideo/issues/531)) ([752350d](https://github.com/havenhq/revideo/commit/752350d0c547e21806f1b70a5c68025012e5ec11))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
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





## 0.5.2 (2024-07-25)


### Bug Fixes

* **2d:** fix audio offset editing ([#674](https://github.com/havenhq/revideo/issues/674)) ([58d6ef7](https://github.com/havenhq/revideo/commit/58d6ef79fa06e377e0c1821efe73585586d124a6))
* **2d:** fix performance issue with audio track ([#427](https://github.com/havenhq/revideo/issues/427)) ([c993770](https://github.com/havenhq/revideo/commit/c993770937ddfdf0ac39b144a1f79f1a300f7899))
* **2d:** fix version link ([#608](https://github.com/havenhq/revideo/issues/608)) ([4fe5b7a](https://github.com/havenhq/revideo/commit/4fe5b7a5150fbdf43ea50ecf3dc8b4690c0e2e34))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* correctly await re-renders ([#918](https://github.com/havenhq/revideo/issues/918)) ([873a9a3](https://github.com/havenhq/revideo/commit/873a9a3eed2676de4cc7f31fbd5ea58817a80aff))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix player state not being saved ([#85](https://github.com/havenhq/revideo/issues/85)) ([74b54b9](https://github.com/havenhq/revideo/commit/74b54b970d1287e80fe2334a034844ad6a80c23b))
* fix tsdoc comments ([#21](https://github.com/havenhq/revideo/issues/21)) ([4b6cb66](https://github.com/havenhq/revideo/commit/4b6cb660ad82befcfd41188c7a8f9c8c0cba93ed)), closes [#18](https://github.com/havenhq/revideo/issues/18)
* limit fps to positive numbers ([#937](https://github.com/havenhq/revideo/issues/937)) ([c7c0c67](https://github.com/havenhq/revideo/commit/c7c0c6730e1a00e6b23077188bfc2d389e98cff2)), closes [#936](https://github.com/havenhq/revideo/issues/936)
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* support hmr when navigating ([370ea16](https://github.com/havenhq/revideo/commit/370ea1676a1c34313c0fb917c0f0691538f72016))
* the resolution fields in Rendering no longer reset each other ([#73](https://github.com/havenhq/revideo/issues/73)) ([ddabec5](https://github.com/havenhq/revideo/commit/ddabec549be3cecec27cf9f5643b036e12a83472))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** correctly reset zoom ([#432](https://github.com/havenhq/revideo/issues/432)) ([a33ee14](https://github.com/havenhq/revideo/commit/a33ee14dfac3e1fe24c89d76631e23fe4cb625a6))
* **ui:** don't seek when editing time events ([#26](https://github.com/havenhq/revideo/issues/26)) ([524c200](https://github.com/havenhq/revideo/commit/524c200ef1bd6a6f52096d04c2aeed24a24cda6f))
* **ui:** downgrade preact ([#1](https://github.com/havenhq/revideo/issues/1)) ([5f7456f](https://github.com/havenhq/revideo/commit/5f7456fe4c5a1cc76ccd8fed5a6f9a8a4e846d27))
* **ui:** fix "go to source" ([#895](https://github.com/havenhq/revideo/issues/895)) ([ec729de](https://github.com/havenhq/revideo/commit/ec729dea0d65bc69aefc0abd601f365af1c4ed68))
* **ui:** fix collapse ([#698](https://github.com/havenhq/revideo/issues/698)) ([6bd8703](https://github.com/havenhq/revideo/commit/6bd8703ec9b16f55b3817f6a1f9130f17b66c69a))
* **ui:** fix inspector tab ([#374](https://github.com/havenhq/revideo/issues/374)) ([c4cb378](https://github.com/havenhq/revideo/commit/c4cb378c2f9d972bb41542bbe3b3aa314fa1f3ad))
* **ui:** fix new version link ([#505](https://github.com/havenhq/revideo/issues/505)) ([7459e7f](https://github.com/havenhq/revideo/commit/7459e7f8355163f3cb6a3ed791fc41a2962a186e))
* **ui:** fix onChange handlers ([#515](https://github.com/havenhq/revideo/issues/515)) ([a23d06c](https://github.com/havenhq/revideo/commit/a23d06cbf6e29f37a9259e50fe71c482640b83fb))
* **ui:** fix out of range warning ([#939](https://github.com/havenhq/revideo/issues/939)) ([c9f466f](https://github.com/havenhq/revideo/commit/c9f466f20ff1a3e2cb77aa5575823947ef9beeee))
* **ui:** fix play-pause button ([#299](https://github.com/havenhq/revideo/issues/299)) ([191f54a](https://github.com/havenhq/revideo/commit/191f54a0a5a9de2fd2dc27bffc6d21d692ce6f72))
* **ui:** fix snapshot ([#643](https://github.com/havenhq/revideo/issues/643)) ([590216a](https://github.com/havenhq/revideo/commit/590216ac094d6b6ef3e9c773499bc52063f617b1))
* **ui:** fix transparent background ([#886](https://github.com/havenhq/revideo/issues/886)) ([83f652f](https://github.com/havenhq/revideo/commit/83f652fdcfa075f5de24186ffdffd1b7db1d8fc9))
* **ui:** fix typo in viewport ID ([#620](https://github.com/havenhq/revideo/issues/620)) ([3a83f20](https://github.com/havenhq/revideo/commit/3a83f20cb1b8ddc7b95a8e36bf6f3d0cd036693b))
* **ui:** fix zoom to fit ([#561](https://github.com/havenhq/revideo/issues/561)) ([1c947b4](https://github.com/havenhq/revideo/commit/1c947b417e218809f33928d6cbb89d463bdc2e66))
* **ui:** ignore shortcuts when typing ([#521](https://github.com/havenhq/revideo/issues/521)) ([4d3e1a1](https://github.com/havenhq/revideo/commit/4d3e1a13caee2ddd03857961a44dd10a7e1cb32a)), closes [#518](https://github.com/havenhq/revideo/issues/518)
* **ui:** misaligned overlay ([#127](https://github.com/havenhq/revideo/issues/127)) ([0379730](https://github.com/havenhq/revideo/commit/03797302a302e28caf9f2428cfce4a122f827775))
* **ui:** prevent context menu in viewport ([#123](https://github.com/havenhq/revideo/issues/123)) ([0fdd85e](https://github.com/havenhq/revideo/commit/0fdd85ecf5b61907ce1e16f5fb9253540528a8b0))
* **ui:** prevent spawning multiple color pickers ([#747](https://github.com/havenhq/revideo/issues/747)) ([48ffd1f](https://github.com/havenhq/revideo/commit/48ffd1f2eec21f9880e172632a2310f5676e3c19)), closes [#744](https://github.com/havenhq/revideo/issues/744)
* **ui:** prevent timeline scroll when zooming ([#162](https://github.com/havenhq/revideo/issues/162)) ([b8278ae](https://github.com/havenhq/revideo/commit/b8278aeb7b92f215bccbd1aa57de17c9233cff01))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* **ui:** remove glossy <select> effect in Safari ([#292](https://github.com/havenhq/revideo/issues/292)) ([9c062b2](https://github.com/havenhq/revideo/commit/9c062b26e48fbdb1905daae25a3fb34df82307d3))
* **ui:** support small ranges ([#739](https://github.com/havenhq/revideo/issues/739)) ([cf32d8b](https://github.com/havenhq/revideo/commit/cf32d8b08b94f5044987eb554cd250fc79fbc99d)), closes [#738](https://github.com/havenhq/revideo/issues/738)
* **ui:** use signals correctly ([#906](https://github.com/havenhq/revideo/issues/906)) ([f67d691](https://github.com/havenhq/revideo/commit/f67d691b5f2f6358120e9582a1839ef3d49c77b8))
* **ui:** version comparison issue ([#520](https://github.com/havenhq/revideo/issues/520)) ([93b5e08](https://github.com/havenhq/revideo/commit/93b5e088b4a4fda0d2177cb2cc6680c34fa72d30)), closes [#519](https://github.com/havenhq/revideo/issues/519)
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* **2d:** expand animations and reduced motion ([#671](https://github.com/havenhq/revideo/issues/671)) ([b8e9d03](https://github.com/havenhq/revideo/commit/b8e9d03488f8ca7085b3e7e1b095a52f39f2bc89))
* **2d:** visual feedback about rendering process ([#681](https://github.com/havenhq/revideo/issues/681)) ([d0495f5](https://github.com/havenhq/revideo/commit/d0495f5c6396c05454a5323e4486ab4829adbc9e))
* add audio volume control through arrow keys ([#856](https://github.com/havenhq/revideo/issues/856)) ([8b86fd4](https://github.com/havenhq/revideo/commit/8b86fd4e70f91a0d5b1150d760427ca355666341))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add E2E testing ([#101](https://github.com/havenhq/revideo/issues/101)) ([6398c54](https://github.com/havenhq/revideo/commit/6398c54e4c4d6667ce9f45b9bbef6ea110ea2215)), closes [#42](https://github.com/havenhq/revideo/issues/42)
* add experimental features ([#876](https://github.com/havenhq/revideo/issues/876)) ([498d387](https://github.com/havenhq/revideo/commit/498d3871d05d4dcc83453654bec7762d2ab32e7e))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* added file type and quality options to rendering panel ([#50](https://github.com/havenhq/revideo/issues/50)) ([bee71ef](https://github.com/havenhq/revideo/commit/bee71ef2673c269db47a4433831720b7ad0fb4e8)), closes [#24](https://github.com/havenhq/revideo/issues/24)
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* auto meta fields ([#565](https://github.com/havenhq/revideo/issues/565)) ([645af6d](https://github.com/havenhq/revideo/commit/645af6d2b7e8d9332b6f08419c318ee9434d7f3f))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display array values in inspector ([#670](https://github.com/havenhq/revideo/issues/670)) ([e71d74c](https://github.com/havenhq/revideo/commit/e71d74c9c04995393ad8ee942b8e6e5baa6f982f))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* editor improvements ([#121](https://github.com/havenhq/revideo/issues/121)) ([e8b32ce](https://github.com/havenhq/revideo/commit/e8b32ceff1b8216282c4b5713508ce1172645e20))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* meta field descriptions ([#664](https://github.com/havenhq/revideo/issues/664)) ([80c9d07](https://github.com/havenhq/revideo/commit/80c9d07f88f4a3df0f99e5741b31313f891a5d51))
* minor console improvements ([#145](https://github.com/havenhq/revideo/issues/145)) ([3e32e73](https://github.com/havenhq/revideo/commit/3e32e73434ad872049af9e3f1f711bc0185410f4))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* navigate to slide source ([#490](https://github.com/havenhq/revideo/issues/490)) ([b5ae4bf](https://github.com/havenhq/revideo/commit/b5ae4bf37076b262a20949cca030db3902186c8d))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* new plugin hooks ([#723](https://github.com/havenhq/revideo/issues/723)) ([9a2b5ab](https://github.com/havenhq/revideo/commit/9a2b5ab8be0d001414fd00da3053d408e00fd1cd))
* open time events in editor ([#87](https://github.com/havenhq/revideo/issues/87)) ([74b781d](https://github.com/havenhq/revideo/commit/74b781d57fca7ef1d10904673276f2a7354c01b8))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* **ui:** add color picker ([#691](https://github.com/havenhq/revideo/issues/691)) ([a33059c](https://github.com/havenhq/revideo/commit/a33059c0f455814919db31bc9e5e932907c797e4))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** add direct range selection & playhead shortcuts ([#907](https://github.com/havenhq/revideo/issues/907)) ([39264fc](https://github.com/havenhq/revideo/commit/39264fc074da739efddf24ef080f6c5f279f8014))
* **ui:** add external link to docs ([#346](https://github.com/havenhq/revideo/issues/346)) ([fc4ee5d](https://github.com/havenhq/revideo/commit/fc4ee5d028312904ed9e11c5341ac00f36e7242b))
* **ui:** add goto start and goto end buttons ([#814](https://github.com/havenhq/revideo/issues/814)) ([449f194](https://github.com/havenhq/revideo/commit/449f1946474af9886135571c14c83b8440bdf28c))
* **ui:** add number input dragging ([#917](https://github.com/havenhq/revideo/issues/917)) ([1b5c232](https://github.com/havenhq/revideo/commit/1b5c23260c3015608f202a103b4c0aebd1860e36)), closes [#799](https://github.com/havenhq/revideo/issues/799)
* **ui:** add quarter resolution ([#421](https://github.com/havenhq/revideo/issues/421)) ([d0160d0](https://github.com/havenhq/revideo/commit/d0160d0d5ef76ffb0d3591566891b5efa4061744))
* **ui:** add shortcuts to button titles ([#532](https://github.com/havenhq/revideo/issues/532)) ([3549dd3](https://github.com/havenhq/revideo/commit/3549dd3fd7ef47376a5a2dd516609499d3985ac3))
* **ui:** add volume slider ([#872](https://github.com/havenhq/revideo/issues/872)) ([5ac3069](https://github.com/havenhq/revideo/commit/5ac3069f027ee123c212217dcf8d26a78a3aa106))
* **ui:** custom checkbox style ([#529](https://github.com/havenhq/revideo/issues/529)) ([af98db1](https://github.com/havenhq/revideo/commit/af98db103d66e8af059dc483d49984b9adb9b95c))
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** estimate remaining rendering time ([#795](https://github.com/havenhq/revideo/issues/795)) ([1a46148](https://github.com/havenhq/revideo/commit/1a4614801869ab36827ca857d66eed8de9cffd09)), closes [#784](https://github.com/havenhq/revideo/issues/784)
* **ui:** improve rendering button ([#662](https://github.com/havenhq/revideo/issues/662)) ([2b4ae70](https://github.com/havenhq/revideo/commit/2b4ae70ea0b0305fbb2596e95bbc70440718bbe2))
* **ui:** include function names in stack traces ([#693](https://github.com/havenhq/revideo/issues/693)) ([835c0fa](https://github.com/havenhq/revideo/commit/835c0fa4b70429db6fe96be96d6d9e44949f7f6c))
* **ui:** list available shortcuts ([#444](https://github.com/havenhq/revideo/issues/444)) ([443fcc9](https://github.com/havenhq/revideo/commit/443fcc9feb1a1ca69aecbc4db2e194ce4f50f72e))
* **ui:** make inspector toggleable ([#921](https://github.com/havenhq/revideo/issues/921)) ([a365951](https://github.com/havenhq/revideo/commit/a365951e69c01cac1ea23d173034ad83f988c8eb))
* **ui:** new sidebar ([#692](https://github.com/havenhq/revideo/issues/692)) ([b555ee1](https://github.com/havenhq/revideo/commit/b555ee1d10f8a6e1b380c043dff2717ffa01a068)), closes [#492](https://github.com/havenhq/revideo/issues/492)
* **ui:** presentation interface ([#487](https://github.com/havenhq/revideo/issues/487)) ([1899f02](https://github.com/havenhq/revideo/commit/1899f020fb1c0b2136de4401e6fc068bcf5e0cc4))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** shift + right arrow moves to last frame ([#354](https://github.com/havenhq/revideo/issues/354)) ([4b81709](https://github.com/havenhq/revideo/commit/4b8170971400c5bf4fe690a58d3f44c3e1d00b94)), closes [#353](https://github.com/havenhq/revideo/issues/353)
* **ui:** small improvements ([#833](https://github.com/havenhq/revideo/issues/833)) ([f44400c](https://github.com/havenhq/revideo/commit/f44400c458a1d7f49520494f01efb9936f4df83e))
* **ui:** timeline dragging ([#794](https://github.com/havenhq/revideo/issues/794)) ([248e454](https://github.com/havenhq/revideo/commit/248e4546367f9d99221f64b811a07d54a9988e48)), closes [#699](https://github.com/havenhq/revideo/issues/699)
* **ui:** timeline overhaul ([#47](https://github.com/havenhq/revideo/issues/47)) ([4232a60](https://github.com/havenhq/revideo/commit/4232a6072540b54451e99e18c1001db0175bb93f)), closes [#20](https://github.com/havenhq/revideo/issues/20)
* **ui:** timeline scrubbing ([#862](https://github.com/havenhq/revideo/issues/862)) ([211b9a4](https://github.com/havenhq/revideo/commit/211b9a4327720afd1ce0ff93868a501c2fd745aa)), closes [#286](https://github.com/havenhq/revideo/issues/286)
* **ui:** vertical line on time event ([#808](https://github.com/havenhq/revideo/issues/808)) ([18015d6](https://github.com/havenhq/revideo/commit/18015d6714ffe2a6255f26895aa9a7c1908a4f7a)), closes [#804](https://github.com/havenhq/revideo/issues/804)
* **ui:** visual changes ([#96](https://github.com/havenhq/revideo/issues/96)) ([3d599f4](https://github.com/havenhq/revideo/commit/3d599f4e1788fbd15e996be8bf95679f1c6787bd))
* **ui:** zoom controls ([#531](https://github.com/havenhq/revideo/issues/531)) ([752350d](https://github.com/havenhq/revideo/commit/752350d0c547e21806f1b70a5c68025012e5ec11))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
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





# 0.5.0 (2024-07-24)


### Bug Fixes

* **2d:** fix audio offset editing ([#674](https://github.com/havenhq/revideo/issues/674)) ([58d6ef7](https://github.com/havenhq/revideo/commit/58d6ef79fa06e377e0c1821efe73585586d124a6))
* **2d:** fix performance issue with audio track ([#427](https://github.com/havenhq/revideo/issues/427)) ([c993770](https://github.com/havenhq/revideo/commit/c993770937ddfdf0ac39b144a1f79f1a300f7899))
* **2d:** fix version link ([#608](https://github.com/havenhq/revideo/issues/608)) ([4fe5b7a](https://github.com/havenhq/revideo/commit/4fe5b7a5150fbdf43ea50ecf3dc8b4690c0e2e34))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* correctly await re-renders ([#918](https://github.com/havenhq/revideo/issues/918)) ([873a9a3](https://github.com/havenhq/revideo/commit/873a9a3eed2676de4cc7f31fbd5ea58817a80aff))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix player state not being saved ([#85](https://github.com/havenhq/revideo/issues/85)) ([74b54b9](https://github.com/havenhq/revideo/commit/74b54b970d1287e80fe2334a034844ad6a80c23b))
* fix tsdoc comments ([#21](https://github.com/havenhq/revideo/issues/21)) ([4b6cb66](https://github.com/havenhq/revideo/commit/4b6cb660ad82befcfd41188c7a8f9c8c0cba93ed)), closes [#18](https://github.com/havenhq/revideo/issues/18)
* limit fps to positive numbers ([#937](https://github.com/havenhq/revideo/issues/937)) ([c7c0c67](https://github.com/havenhq/revideo/commit/c7c0c6730e1a00e6b23077188bfc2d389e98cff2)), closes [#936](https://github.com/havenhq/revideo/issues/936)
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* support hmr when navigating ([370ea16](https://github.com/havenhq/revideo/commit/370ea1676a1c34313c0fb917c0f0691538f72016))
* the resolution fields in Rendering no longer reset each other ([#73](https://github.com/havenhq/revideo/issues/73)) ([ddabec5](https://github.com/havenhq/revideo/commit/ddabec549be3cecec27cf9f5643b036e12a83472))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** correctly reset zoom ([#432](https://github.com/havenhq/revideo/issues/432)) ([a33ee14](https://github.com/havenhq/revideo/commit/a33ee14dfac3e1fe24c89d76631e23fe4cb625a6))
* **ui:** don't seek when editing time events ([#26](https://github.com/havenhq/revideo/issues/26)) ([524c200](https://github.com/havenhq/revideo/commit/524c200ef1bd6a6f52096d04c2aeed24a24cda6f))
* **ui:** downgrade preact ([#1](https://github.com/havenhq/revideo/issues/1)) ([5f7456f](https://github.com/havenhq/revideo/commit/5f7456fe4c5a1cc76ccd8fed5a6f9a8a4e846d27))
* **ui:** fix "go to source" ([#895](https://github.com/havenhq/revideo/issues/895)) ([ec729de](https://github.com/havenhq/revideo/commit/ec729dea0d65bc69aefc0abd601f365af1c4ed68))
* **ui:** fix collapse ([#698](https://github.com/havenhq/revideo/issues/698)) ([6bd8703](https://github.com/havenhq/revideo/commit/6bd8703ec9b16f55b3817f6a1f9130f17b66c69a))
* **ui:** fix inspector tab ([#374](https://github.com/havenhq/revideo/issues/374)) ([c4cb378](https://github.com/havenhq/revideo/commit/c4cb378c2f9d972bb41542bbe3b3aa314fa1f3ad))
* **ui:** fix new version link ([#505](https://github.com/havenhq/revideo/issues/505)) ([7459e7f](https://github.com/havenhq/revideo/commit/7459e7f8355163f3cb6a3ed791fc41a2962a186e))
* **ui:** fix onChange handlers ([#515](https://github.com/havenhq/revideo/issues/515)) ([a23d06c](https://github.com/havenhq/revideo/commit/a23d06cbf6e29f37a9259e50fe71c482640b83fb))
* **ui:** fix out of range warning ([#939](https://github.com/havenhq/revideo/issues/939)) ([c9f466f](https://github.com/havenhq/revideo/commit/c9f466f20ff1a3e2cb77aa5575823947ef9beeee))
* **ui:** fix play-pause button ([#299](https://github.com/havenhq/revideo/issues/299)) ([191f54a](https://github.com/havenhq/revideo/commit/191f54a0a5a9de2fd2dc27bffc6d21d692ce6f72))
* **ui:** fix snapshot ([#643](https://github.com/havenhq/revideo/issues/643)) ([590216a](https://github.com/havenhq/revideo/commit/590216ac094d6b6ef3e9c773499bc52063f617b1))
* **ui:** fix transparent background ([#886](https://github.com/havenhq/revideo/issues/886)) ([83f652f](https://github.com/havenhq/revideo/commit/83f652fdcfa075f5de24186ffdffd1b7db1d8fc9))
* **ui:** fix typo in viewport ID ([#620](https://github.com/havenhq/revideo/issues/620)) ([3a83f20](https://github.com/havenhq/revideo/commit/3a83f20cb1b8ddc7b95a8e36bf6f3d0cd036693b))
* **ui:** fix zoom to fit ([#561](https://github.com/havenhq/revideo/issues/561)) ([1c947b4](https://github.com/havenhq/revideo/commit/1c947b417e218809f33928d6cbb89d463bdc2e66))
* **ui:** ignore shortcuts when typing ([#521](https://github.com/havenhq/revideo/issues/521)) ([4d3e1a1](https://github.com/havenhq/revideo/commit/4d3e1a13caee2ddd03857961a44dd10a7e1cb32a)), closes [#518](https://github.com/havenhq/revideo/issues/518)
* **ui:** misaligned overlay ([#127](https://github.com/havenhq/revideo/issues/127)) ([0379730](https://github.com/havenhq/revideo/commit/03797302a302e28caf9f2428cfce4a122f827775))
* **ui:** prevent context menu in viewport ([#123](https://github.com/havenhq/revideo/issues/123)) ([0fdd85e](https://github.com/havenhq/revideo/commit/0fdd85ecf5b61907ce1e16f5fb9253540528a8b0))
* **ui:** prevent spawning multiple color pickers ([#747](https://github.com/havenhq/revideo/issues/747)) ([48ffd1f](https://github.com/havenhq/revideo/commit/48ffd1f2eec21f9880e172632a2310f5676e3c19)), closes [#744](https://github.com/havenhq/revideo/issues/744)
* **ui:** prevent timeline scroll when zooming ([#162](https://github.com/havenhq/revideo/issues/162)) ([b8278ae](https://github.com/havenhq/revideo/commit/b8278aeb7b92f215bccbd1aa57de17c9233cff01))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* **ui:** remove glossy <select> effect in Safari ([#292](https://github.com/havenhq/revideo/issues/292)) ([9c062b2](https://github.com/havenhq/revideo/commit/9c062b26e48fbdb1905daae25a3fb34df82307d3))
* **ui:** support small ranges ([#739](https://github.com/havenhq/revideo/issues/739)) ([cf32d8b](https://github.com/havenhq/revideo/commit/cf32d8b08b94f5044987eb554cd250fc79fbc99d)), closes [#738](https://github.com/havenhq/revideo/issues/738)
* **ui:** use signals correctly ([#906](https://github.com/havenhq/revideo/issues/906)) ([f67d691](https://github.com/havenhq/revideo/commit/f67d691b5f2f6358120e9582a1839ef3d49c77b8))
* **ui:** version comparison issue ([#520](https://github.com/havenhq/revideo/issues/520)) ([93b5e08](https://github.com/havenhq/revideo/commit/93b5e088b4a4fda0d2177cb2cc6680c34fa72d30)), closes [#519](https://github.com/havenhq/revideo/issues/519)
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* **2d:** expand animations and reduced motion ([#671](https://github.com/havenhq/revideo/issues/671)) ([b8e9d03](https://github.com/havenhq/revideo/commit/b8e9d03488f8ca7085b3e7e1b095a52f39f2bc89))
* **2d:** visual feedback about rendering process ([#681](https://github.com/havenhq/revideo/issues/681)) ([d0495f5](https://github.com/havenhq/revideo/commit/d0495f5c6396c05454a5323e4486ab4829adbc9e))
* add audio volume control through arrow keys ([#856](https://github.com/havenhq/revideo/issues/856)) ([8b86fd4](https://github.com/havenhq/revideo/commit/8b86fd4e70f91a0d5b1150d760427ca355666341))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add E2E testing ([#101](https://github.com/havenhq/revideo/issues/101)) ([6398c54](https://github.com/havenhq/revideo/commit/6398c54e4c4d6667ce9f45b9bbef6ea110ea2215)), closes [#42](https://github.com/havenhq/revideo/issues/42)
* add experimental features ([#876](https://github.com/havenhq/revideo/issues/876)) ([498d387](https://github.com/havenhq/revideo/commit/498d3871d05d4dcc83453654bec7762d2ab32e7e))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* added file type and quality options to rendering panel ([#50](https://github.com/havenhq/revideo/issues/50)) ([bee71ef](https://github.com/havenhq/revideo/commit/bee71ef2673c269db47a4433831720b7ad0fb4e8)), closes [#24](https://github.com/havenhq/revideo/issues/24)
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* auto meta fields ([#565](https://github.com/havenhq/revideo/issues/565)) ([645af6d](https://github.com/havenhq/revideo/commit/645af6d2b7e8d9332b6f08419c318ee9434d7f3f))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display array values in inspector ([#670](https://github.com/havenhq/revideo/issues/670)) ([e71d74c](https://github.com/havenhq/revideo/commit/e71d74c9c04995393ad8ee942b8e6e5baa6f982f))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* editor improvements ([#121](https://github.com/havenhq/revideo/issues/121)) ([e8b32ce](https://github.com/havenhq/revideo/commit/e8b32ceff1b8216282c4b5713508ce1172645e20))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* meta field descriptions ([#664](https://github.com/havenhq/revideo/issues/664)) ([80c9d07](https://github.com/havenhq/revideo/commit/80c9d07f88f4a3df0f99e5741b31313f891a5d51))
* minor console improvements ([#145](https://github.com/havenhq/revideo/issues/145)) ([3e32e73](https://github.com/havenhq/revideo/commit/3e32e73434ad872049af9e3f1f711bc0185410f4))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* navigate to slide source ([#490](https://github.com/havenhq/revideo/issues/490)) ([b5ae4bf](https://github.com/havenhq/revideo/commit/b5ae4bf37076b262a20949cca030db3902186c8d))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* new plugin hooks ([#723](https://github.com/havenhq/revideo/issues/723)) ([9a2b5ab](https://github.com/havenhq/revideo/commit/9a2b5ab8be0d001414fd00da3053d408e00fd1cd))
* open time events in editor ([#87](https://github.com/havenhq/revideo/issues/87)) ([74b781d](https://github.com/havenhq/revideo/commit/74b781d57fca7ef1d10904673276f2a7354c01b8))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* **ui:** add color picker ([#691](https://github.com/havenhq/revideo/issues/691)) ([a33059c](https://github.com/havenhq/revideo/commit/a33059c0f455814919db31bc9e5e932907c797e4))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** add direct range selection & playhead shortcuts ([#907](https://github.com/havenhq/revideo/issues/907)) ([39264fc](https://github.com/havenhq/revideo/commit/39264fc074da739efddf24ef080f6c5f279f8014))
* **ui:** add external link to docs ([#346](https://github.com/havenhq/revideo/issues/346)) ([fc4ee5d](https://github.com/havenhq/revideo/commit/fc4ee5d028312904ed9e11c5341ac00f36e7242b))
* **ui:** add goto start and goto end buttons ([#814](https://github.com/havenhq/revideo/issues/814)) ([449f194](https://github.com/havenhq/revideo/commit/449f1946474af9886135571c14c83b8440bdf28c))
* **ui:** add number input dragging ([#917](https://github.com/havenhq/revideo/issues/917)) ([1b5c232](https://github.com/havenhq/revideo/commit/1b5c23260c3015608f202a103b4c0aebd1860e36)), closes [#799](https://github.com/havenhq/revideo/issues/799)
* **ui:** add quarter resolution ([#421](https://github.com/havenhq/revideo/issues/421)) ([d0160d0](https://github.com/havenhq/revideo/commit/d0160d0d5ef76ffb0d3591566891b5efa4061744))
* **ui:** add shortcuts to button titles ([#532](https://github.com/havenhq/revideo/issues/532)) ([3549dd3](https://github.com/havenhq/revideo/commit/3549dd3fd7ef47376a5a2dd516609499d3985ac3))
* **ui:** add volume slider ([#872](https://github.com/havenhq/revideo/issues/872)) ([5ac3069](https://github.com/havenhq/revideo/commit/5ac3069f027ee123c212217dcf8d26a78a3aa106))
* **ui:** custom checkbox style ([#529](https://github.com/havenhq/revideo/issues/529)) ([af98db1](https://github.com/havenhq/revideo/commit/af98db103d66e8af059dc483d49984b9adb9b95c))
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** estimate remaining rendering time ([#795](https://github.com/havenhq/revideo/issues/795)) ([1a46148](https://github.com/havenhq/revideo/commit/1a4614801869ab36827ca857d66eed8de9cffd09)), closes [#784](https://github.com/havenhq/revideo/issues/784)
* **ui:** improve rendering button ([#662](https://github.com/havenhq/revideo/issues/662)) ([2b4ae70](https://github.com/havenhq/revideo/commit/2b4ae70ea0b0305fbb2596e95bbc70440718bbe2))
* **ui:** include function names in stack traces ([#693](https://github.com/havenhq/revideo/issues/693)) ([835c0fa](https://github.com/havenhq/revideo/commit/835c0fa4b70429db6fe96be96d6d9e44949f7f6c))
* **ui:** list available shortcuts ([#444](https://github.com/havenhq/revideo/issues/444)) ([443fcc9](https://github.com/havenhq/revideo/commit/443fcc9feb1a1ca69aecbc4db2e194ce4f50f72e))
* **ui:** make inspector toggleable ([#921](https://github.com/havenhq/revideo/issues/921)) ([a365951](https://github.com/havenhq/revideo/commit/a365951e69c01cac1ea23d173034ad83f988c8eb))
* **ui:** new sidebar ([#692](https://github.com/havenhq/revideo/issues/692)) ([b555ee1](https://github.com/havenhq/revideo/commit/b555ee1d10f8a6e1b380c043dff2717ffa01a068)), closes [#492](https://github.com/havenhq/revideo/issues/492)
* **ui:** presentation interface ([#487](https://github.com/havenhq/revideo/issues/487)) ([1899f02](https://github.com/havenhq/revideo/commit/1899f020fb1c0b2136de4401e6fc068bcf5e0cc4))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** shift + right arrow moves to last frame ([#354](https://github.com/havenhq/revideo/issues/354)) ([4b81709](https://github.com/havenhq/revideo/commit/4b8170971400c5bf4fe690a58d3f44c3e1d00b94)), closes [#353](https://github.com/havenhq/revideo/issues/353)
* **ui:** small improvements ([#833](https://github.com/havenhq/revideo/issues/833)) ([f44400c](https://github.com/havenhq/revideo/commit/f44400c458a1d7f49520494f01efb9936f4df83e))
* **ui:** timeline dragging ([#794](https://github.com/havenhq/revideo/issues/794)) ([248e454](https://github.com/havenhq/revideo/commit/248e4546367f9d99221f64b811a07d54a9988e48)), closes [#699](https://github.com/havenhq/revideo/issues/699)
* **ui:** timeline overhaul ([#47](https://github.com/havenhq/revideo/issues/47)) ([4232a60](https://github.com/havenhq/revideo/commit/4232a6072540b54451e99e18c1001db0175bb93f)), closes [#20](https://github.com/havenhq/revideo/issues/20)
* **ui:** timeline scrubbing ([#862](https://github.com/havenhq/revideo/issues/862)) ([211b9a4](https://github.com/havenhq/revideo/commit/211b9a4327720afd1ce0ff93868a501c2fd745aa)), closes [#286](https://github.com/havenhq/revideo/issues/286)
* **ui:** vertical line on time event ([#808](https://github.com/havenhq/revideo/issues/808)) ([18015d6](https://github.com/havenhq/revideo/commit/18015d6714ffe2a6255f26895aa9a7c1908a4f7a)), closes [#804](https://github.com/havenhq/revideo/issues/804)
* **ui:** visual changes ([#96](https://github.com/havenhq/revideo/issues/96)) ([3d599f4](https://github.com/havenhq/revideo/commit/3d599f4e1788fbd15e996be8bf95679f1c6787bd))
* **ui:** zoom controls ([#531](https://github.com/havenhq/revideo/issues/531)) ([752350d](https://github.com/havenhq/revideo/commit/752350d0c547e21806f1b70a5c68025012e5ec11))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
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





## 0.4.8 (2024-07-15)


### Bug Fixes

* **2d:** fix audio offset editing ([#674](https://github.com/havenhq/revideo/issues/674)) ([58d6ef7](https://github.com/havenhq/revideo/commit/58d6ef79fa06e377e0c1821efe73585586d124a6))
* **2d:** fix performance issue with audio track ([#427](https://github.com/havenhq/revideo/issues/427)) ([c993770](https://github.com/havenhq/revideo/commit/c993770937ddfdf0ac39b144a1f79f1a300f7899))
* **2d:** fix version link ([#608](https://github.com/havenhq/revideo/issues/608)) ([4fe5b7a](https://github.com/havenhq/revideo/commit/4fe5b7a5150fbdf43ea50ecf3dc8b4690c0e2e34))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* correctly await re-renders ([#918](https://github.com/havenhq/revideo/issues/918)) ([873a9a3](https://github.com/havenhq/revideo/commit/873a9a3eed2676de4cc7f31fbd5ea58817a80aff))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix player state not being saved ([#85](https://github.com/havenhq/revideo/issues/85)) ([74b54b9](https://github.com/havenhq/revideo/commit/74b54b970d1287e80fe2334a034844ad6a80c23b))
* fix tsdoc comments ([#21](https://github.com/havenhq/revideo/issues/21)) ([4b6cb66](https://github.com/havenhq/revideo/commit/4b6cb660ad82befcfd41188c7a8f9c8c0cba93ed)), closes [#18](https://github.com/havenhq/revideo/issues/18)
* limit fps to positive numbers ([#937](https://github.com/havenhq/revideo/issues/937)) ([c7c0c67](https://github.com/havenhq/revideo/commit/c7c0c6730e1a00e6b23077188bfc2d389e98cff2)), closes [#936](https://github.com/havenhq/revideo/issues/936)
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* support hmr when navigating ([370ea16](https://github.com/havenhq/revideo/commit/370ea1676a1c34313c0fb917c0f0691538f72016))
* the resolution fields in Rendering no longer reset each other ([#73](https://github.com/havenhq/revideo/issues/73)) ([ddabec5](https://github.com/havenhq/revideo/commit/ddabec549be3cecec27cf9f5643b036e12a83472))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** correctly reset zoom ([#432](https://github.com/havenhq/revideo/issues/432)) ([a33ee14](https://github.com/havenhq/revideo/commit/a33ee14dfac3e1fe24c89d76631e23fe4cb625a6))
* **ui:** don't seek when editing time events ([#26](https://github.com/havenhq/revideo/issues/26)) ([524c200](https://github.com/havenhq/revideo/commit/524c200ef1bd6a6f52096d04c2aeed24a24cda6f))
* **ui:** downgrade preact ([#1](https://github.com/havenhq/revideo/issues/1)) ([5f7456f](https://github.com/havenhq/revideo/commit/5f7456fe4c5a1cc76ccd8fed5a6f9a8a4e846d27))
* **ui:** fix "go to source" ([#895](https://github.com/havenhq/revideo/issues/895)) ([ec729de](https://github.com/havenhq/revideo/commit/ec729dea0d65bc69aefc0abd601f365af1c4ed68))
* **ui:** fix collapse ([#698](https://github.com/havenhq/revideo/issues/698)) ([6bd8703](https://github.com/havenhq/revideo/commit/6bd8703ec9b16f55b3817f6a1f9130f17b66c69a))
* **ui:** fix inspector tab ([#374](https://github.com/havenhq/revideo/issues/374)) ([c4cb378](https://github.com/havenhq/revideo/commit/c4cb378c2f9d972bb41542bbe3b3aa314fa1f3ad))
* **ui:** fix new version link ([#505](https://github.com/havenhq/revideo/issues/505)) ([7459e7f](https://github.com/havenhq/revideo/commit/7459e7f8355163f3cb6a3ed791fc41a2962a186e))
* **ui:** fix onChange handlers ([#515](https://github.com/havenhq/revideo/issues/515)) ([a23d06c](https://github.com/havenhq/revideo/commit/a23d06cbf6e29f37a9259e50fe71c482640b83fb))
* **ui:** fix out of range warning ([#939](https://github.com/havenhq/revideo/issues/939)) ([c9f466f](https://github.com/havenhq/revideo/commit/c9f466f20ff1a3e2cb77aa5575823947ef9beeee))
* **ui:** fix play-pause button ([#299](https://github.com/havenhq/revideo/issues/299)) ([191f54a](https://github.com/havenhq/revideo/commit/191f54a0a5a9de2fd2dc27bffc6d21d692ce6f72))
* **ui:** fix snapshot ([#643](https://github.com/havenhq/revideo/issues/643)) ([590216a](https://github.com/havenhq/revideo/commit/590216ac094d6b6ef3e9c773499bc52063f617b1))
* **ui:** fix transparent background ([#886](https://github.com/havenhq/revideo/issues/886)) ([83f652f](https://github.com/havenhq/revideo/commit/83f652fdcfa075f5de24186ffdffd1b7db1d8fc9))
* **ui:** fix typo in viewport ID ([#620](https://github.com/havenhq/revideo/issues/620)) ([3a83f20](https://github.com/havenhq/revideo/commit/3a83f20cb1b8ddc7b95a8e36bf6f3d0cd036693b))
* **ui:** fix zoom to fit ([#561](https://github.com/havenhq/revideo/issues/561)) ([1c947b4](https://github.com/havenhq/revideo/commit/1c947b417e218809f33928d6cbb89d463bdc2e66))
* **ui:** ignore shortcuts when typing ([#521](https://github.com/havenhq/revideo/issues/521)) ([4d3e1a1](https://github.com/havenhq/revideo/commit/4d3e1a13caee2ddd03857961a44dd10a7e1cb32a)), closes [#518](https://github.com/havenhq/revideo/issues/518)
* **ui:** misaligned overlay ([#127](https://github.com/havenhq/revideo/issues/127)) ([0379730](https://github.com/havenhq/revideo/commit/03797302a302e28caf9f2428cfce4a122f827775))
* **ui:** prevent context menu in viewport ([#123](https://github.com/havenhq/revideo/issues/123)) ([0fdd85e](https://github.com/havenhq/revideo/commit/0fdd85ecf5b61907ce1e16f5fb9253540528a8b0))
* **ui:** prevent spawning multiple color pickers ([#747](https://github.com/havenhq/revideo/issues/747)) ([48ffd1f](https://github.com/havenhq/revideo/commit/48ffd1f2eec21f9880e172632a2310f5676e3c19)), closes [#744](https://github.com/havenhq/revideo/issues/744)
* **ui:** prevent timeline scroll when zooming ([#162](https://github.com/havenhq/revideo/issues/162)) ([b8278ae](https://github.com/havenhq/revideo/commit/b8278aeb7b92f215bccbd1aa57de17c9233cff01))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* **ui:** remove glossy <select> effect in Safari ([#292](https://github.com/havenhq/revideo/issues/292)) ([9c062b2](https://github.com/havenhq/revideo/commit/9c062b26e48fbdb1905daae25a3fb34df82307d3))
* **ui:** support small ranges ([#739](https://github.com/havenhq/revideo/issues/739)) ([cf32d8b](https://github.com/havenhq/revideo/commit/cf32d8b08b94f5044987eb554cd250fc79fbc99d)), closes [#738](https://github.com/havenhq/revideo/issues/738)
* **ui:** use signals correctly ([#906](https://github.com/havenhq/revideo/issues/906)) ([f67d691](https://github.com/havenhq/revideo/commit/f67d691b5f2f6358120e9582a1839ef3d49c77b8))
* **ui:** version comparison issue ([#520](https://github.com/havenhq/revideo/issues/520)) ([93b5e08](https://github.com/havenhq/revideo/commit/93b5e088b4a4fda0d2177cb2cc6680c34fa72d30)), closes [#519](https://github.com/havenhq/revideo/issues/519)
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* **2d:** expand animations and reduced motion ([#671](https://github.com/havenhq/revideo/issues/671)) ([b8e9d03](https://github.com/havenhq/revideo/commit/b8e9d03488f8ca7085b3e7e1b095a52f39f2bc89))
* **2d:** visual feedback about rendering process ([#681](https://github.com/havenhq/revideo/issues/681)) ([d0495f5](https://github.com/havenhq/revideo/commit/d0495f5c6396c05454a5323e4486ab4829adbc9e))
* add audio volume control through arrow keys ([#856](https://github.com/havenhq/revideo/issues/856)) ([8b86fd4](https://github.com/havenhq/revideo/commit/8b86fd4e70f91a0d5b1150d760427ca355666341))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add E2E testing ([#101](https://github.com/havenhq/revideo/issues/101)) ([6398c54](https://github.com/havenhq/revideo/commit/6398c54e4c4d6667ce9f45b9bbef6ea110ea2215)), closes [#42](https://github.com/havenhq/revideo/issues/42)
* add experimental features ([#876](https://github.com/havenhq/revideo/issues/876)) ([498d387](https://github.com/havenhq/revideo/commit/498d3871d05d4dcc83453654bec7762d2ab32e7e))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* added file type and quality options to rendering panel ([#50](https://github.com/havenhq/revideo/issues/50)) ([bee71ef](https://github.com/havenhq/revideo/commit/bee71ef2673c269db47a4433831720b7ad0fb4e8)), closes [#24](https://github.com/havenhq/revideo/issues/24)
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* auto meta fields ([#565](https://github.com/havenhq/revideo/issues/565)) ([645af6d](https://github.com/havenhq/revideo/commit/645af6d2b7e8d9332b6f08419c318ee9434d7f3f))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display array values in inspector ([#670](https://github.com/havenhq/revideo/issues/670)) ([e71d74c](https://github.com/havenhq/revideo/commit/e71d74c9c04995393ad8ee942b8e6e5baa6f982f))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* editor improvements ([#121](https://github.com/havenhq/revideo/issues/121)) ([e8b32ce](https://github.com/havenhq/revideo/commit/e8b32ceff1b8216282c4b5713508ce1172645e20))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* meta field descriptions ([#664](https://github.com/havenhq/revideo/issues/664)) ([80c9d07](https://github.com/havenhq/revideo/commit/80c9d07f88f4a3df0f99e5741b31313f891a5d51))
* minor console improvements ([#145](https://github.com/havenhq/revideo/issues/145)) ([3e32e73](https://github.com/havenhq/revideo/commit/3e32e73434ad872049af9e3f1f711bc0185410f4))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* navigate to slide source ([#490](https://github.com/havenhq/revideo/issues/490)) ([b5ae4bf](https://github.com/havenhq/revideo/commit/b5ae4bf37076b262a20949cca030db3902186c8d))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* new plugin hooks ([#723](https://github.com/havenhq/revideo/issues/723)) ([9a2b5ab](https://github.com/havenhq/revideo/commit/9a2b5ab8be0d001414fd00da3053d408e00fd1cd))
* open time events in editor ([#87](https://github.com/havenhq/revideo/issues/87)) ([74b781d](https://github.com/havenhq/revideo/commit/74b781d57fca7ef1d10904673276f2a7354c01b8))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* **ui:** add color picker ([#691](https://github.com/havenhq/revideo/issues/691)) ([a33059c](https://github.com/havenhq/revideo/commit/a33059c0f455814919db31bc9e5e932907c797e4))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** add direct range selection & playhead shortcuts ([#907](https://github.com/havenhq/revideo/issues/907)) ([39264fc](https://github.com/havenhq/revideo/commit/39264fc074da739efddf24ef080f6c5f279f8014))
* **ui:** add external link to docs ([#346](https://github.com/havenhq/revideo/issues/346)) ([fc4ee5d](https://github.com/havenhq/revideo/commit/fc4ee5d028312904ed9e11c5341ac00f36e7242b))
* **ui:** add goto start and goto end buttons ([#814](https://github.com/havenhq/revideo/issues/814)) ([449f194](https://github.com/havenhq/revideo/commit/449f1946474af9886135571c14c83b8440bdf28c))
* **ui:** add number input dragging ([#917](https://github.com/havenhq/revideo/issues/917)) ([1b5c232](https://github.com/havenhq/revideo/commit/1b5c23260c3015608f202a103b4c0aebd1860e36)), closes [#799](https://github.com/havenhq/revideo/issues/799)
* **ui:** add quarter resolution ([#421](https://github.com/havenhq/revideo/issues/421)) ([d0160d0](https://github.com/havenhq/revideo/commit/d0160d0d5ef76ffb0d3591566891b5efa4061744))
* **ui:** add shortcuts to button titles ([#532](https://github.com/havenhq/revideo/issues/532)) ([3549dd3](https://github.com/havenhq/revideo/commit/3549dd3fd7ef47376a5a2dd516609499d3985ac3))
* **ui:** add volume slider ([#872](https://github.com/havenhq/revideo/issues/872)) ([5ac3069](https://github.com/havenhq/revideo/commit/5ac3069f027ee123c212217dcf8d26a78a3aa106))
* **ui:** custom checkbox style ([#529](https://github.com/havenhq/revideo/issues/529)) ([af98db1](https://github.com/havenhq/revideo/commit/af98db103d66e8af059dc483d49984b9adb9b95c))
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** estimate remaining rendering time ([#795](https://github.com/havenhq/revideo/issues/795)) ([1a46148](https://github.com/havenhq/revideo/commit/1a4614801869ab36827ca857d66eed8de9cffd09)), closes [#784](https://github.com/havenhq/revideo/issues/784)
* **ui:** improve rendering button ([#662](https://github.com/havenhq/revideo/issues/662)) ([2b4ae70](https://github.com/havenhq/revideo/commit/2b4ae70ea0b0305fbb2596e95bbc70440718bbe2))
* **ui:** include function names in stack traces ([#693](https://github.com/havenhq/revideo/issues/693)) ([835c0fa](https://github.com/havenhq/revideo/commit/835c0fa4b70429db6fe96be96d6d9e44949f7f6c))
* **ui:** list available shortcuts ([#444](https://github.com/havenhq/revideo/issues/444)) ([443fcc9](https://github.com/havenhq/revideo/commit/443fcc9feb1a1ca69aecbc4db2e194ce4f50f72e))
* **ui:** make inspector toggleable ([#921](https://github.com/havenhq/revideo/issues/921)) ([a365951](https://github.com/havenhq/revideo/commit/a365951e69c01cac1ea23d173034ad83f988c8eb))
* **ui:** new sidebar ([#692](https://github.com/havenhq/revideo/issues/692)) ([b555ee1](https://github.com/havenhq/revideo/commit/b555ee1d10f8a6e1b380c043dff2717ffa01a068)), closes [#492](https://github.com/havenhq/revideo/issues/492)
* **ui:** presentation interface ([#487](https://github.com/havenhq/revideo/issues/487)) ([1899f02](https://github.com/havenhq/revideo/commit/1899f020fb1c0b2136de4401e6fc068bcf5e0cc4))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** shift + right arrow moves to last frame ([#354](https://github.com/havenhq/revideo/issues/354)) ([4b81709](https://github.com/havenhq/revideo/commit/4b8170971400c5bf4fe690a58d3f44c3e1d00b94)), closes [#353](https://github.com/havenhq/revideo/issues/353)
* **ui:** small improvements ([#833](https://github.com/havenhq/revideo/issues/833)) ([f44400c](https://github.com/havenhq/revideo/commit/f44400c458a1d7f49520494f01efb9936f4df83e))
* **ui:** timeline dragging ([#794](https://github.com/havenhq/revideo/issues/794)) ([248e454](https://github.com/havenhq/revideo/commit/248e4546367f9d99221f64b811a07d54a9988e48)), closes [#699](https://github.com/havenhq/revideo/issues/699)
* **ui:** timeline overhaul ([#47](https://github.com/havenhq/revideo/issues/47)) ([4232a60](https://github.com/havenhq/revideo/commit/4232a6072540b54451e99e18c1001db0175bb93f)), closes [#20](https://github.com/havenhq/revideo/issues/20)
* **ui:** timeline scrubbing ([#862](https://github.com/havenhq/revideo/issues/862)) ([211b9a4](https://github.com/havenhq/revideo/commit/211b9a4327720afd1ce0ff93868a501c2fd745aa)), closes [#286](https://github.com/havenhq/revideo/issues/286)
* **ui:** vertical line on time event ([#808](https://github.com/havenhq/revideo/issues/808)) ([18015d6](https://github.com/havenhq/revideo/commit/18015d6714ffe2a6255f26895aa9a7c1908a4f7a)), closes [#804](https://github.com/havenhq/revideo/issues/804)
* **ui:** visual changes ([#96](https://github.com/havenhq/revideo/issues/96)) ([3d599f4](https://github.com/havenhq/revideo/commit/3d599f4e1788fbd15e996be8bf95679f1c6787bd))
* **ui:** zoom controls ([#531](https://github.com/havenhq/revideo/issues/531)) ([752350d](https://github.com/havenhq/revideo/commit/752350d0c547e21806f1b70a5c68025012e5ec11))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
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





## 0.4.7 (2024-07-10)


### Bug Fixes

* **2d:** fix audio offset editing ([#674](https://github.com/havenhq/revideo/issues/674)) ([58d6ef7](https://github.com/havenhq/revideo/commit/58d6ef79fa06e377e0c1821efe73585586d124a6))
* **2d:** fix performance issue with audio track ([#427](https://github.com/havenhq/revideo/issues/427)) ([c993770](https://github.com/havenhq/revideo/commit/c993770937ddfdf0ac39b144a1f79f1a300f7899))
* **2d:** fix version link ([#608](https://github.com/havenhq/revideo/issues/608)) ([4fe5b7a](https://github.com/havenhq/revideo/commit/4fe5b7a5150fbdf43ea50ecf3dc8b4690c0e2e34))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* correctly await re-renders ([#918](https://github.com/havenhq/revideo/issues/918)) ([873a9a3](https://github.com/havenhq/revideo/commit/873a9a3eed2676de4cc7f31fbd5ea58817a80aff))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix player state not being saved ([#85](https://github.com/havenhq/revideo/issues/85)) ([74b54b9](https://github.com/havenhq/revideo/commit/74b54b970d1287e80fe2334a034844ad6a80c23b))
* fix tsdoc comments ([#21](https://github.com/havenhq/revideo/issues/21)) ([4b6cb66](https://github.com/havenhq/revideo/commit/4b6cb660ad82befcfd41188c7a8f9c8c0cba93ed)), closes [#18](https://github.com/havenhq/revideo/issues/18)
* limit fps to positive numbers ([#937](https://github.com/havenhq/revideo/issues/937)) ([c7c0c67](https://github.com/havenhq/revideo/commit/c7c0c6730e1a00e6b23077188bfc2d389e98cff2)), closes [#936](https://github.com/havenhq/revideo/issues/936)
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* support hmr when navigating ([370ea16](https://github.com/havenhq/revideo/commit/370ea1676a1c34313c0fb917c0f0691538f72016))
* the resolution fields in Rendering no longer reset each other ([#73](https://github.com/havenhq/revideo/issues/73)) ([ddabec5](https://github.com/havenhq/revideo/commit/ddabec549be3cecec27cf9f5643b036e12a83472))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** correctly reset zoom ([#432](https://github.com/havenhq/revideo/issues/432)) ([a33ee14](https://github.com/havenhq/revideo/commit/a33ee14dfac3e1fe24c89d76631e23fe4cb625a6))
* **ui:** don't seek when editing time events ([#26](https://github.com/havenhq/revideo/issues/26)) ([524c200](https://github.com/havenhq/revideo/commit/524c200ef1bd6a6f52096d04c2aeed24a24cda6f))
* **ui:** downgrade preact ([#1](https://github.com/havenhq/revideo/issues/1)) ([5f7456f](https://github.com/havenhq/revideo/commit/5f7456fe4c5a1cc76ccd8fed5a6f9a8a4e846d27))
* **ui:** fix "go to source" ([#895](https://github.com/havenhq/revideo/issues/895)) ([ec729de](https://github.com/havenhq/revideo/commit/ec729dea0d65bc69aefc0abd601f365af1c4ed68))
* **ui:** fix collapse ([#698](https://github.com/havenhq/revideo/issues/698)) ([6bd8703](https://github.com/havenhq/revideo/commit/6bd8703ec9b16f55b3817f6a1f9130f17b66c69a))
* **ui:** fix inspector tab ([#374](https://github.com/havenhq/revideo/issues/374)) ([c4cb378](https://github.com/havenhq/revideo/commit/c4cb378c2f9d972bb41542bbe3b3aa314fa1f3ad))
* **ui:** fix new version link ([#505](https://github.com/havenhq/revideo/issues/505)) ([7459e7f](https://github.com/havenhq/revideo/commit/7459e7f8355163f3cb6a3ed791fc41a2962a186e))
* **ui:** fix onChange handlers ([#515](https://github.com/havenhq/revideo/issues/515)) ([a23d06c](https://github.com/havenhq/revideo/commit/a23d06cbf6e29f37a9259e50fe71c482640b83fb))
* **ui:** fix out of range warning ([#939](https://github.com/havenhq/revideo/issues/939)) ([c9f466f](https://github.com/havenhq/revideo/commit/c9f466f20ff1a3e2cb77aa5575823947ef9beeee))
* **ui:** fix play-pause button ([#299](https://github.com/havenhq/revideo/issues/299)) ([191f54a](https://github.com/havenhq/revideo/commit/191f54a0a5a9de2fd2dc27bffc6d21d692ce6f72))
* **ui:** fix snapshot ([#643](https://github.com/havenhq/revideo/issues/643)) ([590216a](https://github.com/havenhq/revideo/commit/590216ac094d6b6ef3e9c773499bc52063f617b1))
* **ui:** fix transparent background ([#886](https://github.com/havenhq/revideo/issues/886)) ([83f652f](https://github.com/havenhq/revideo/commit/83f652fdcfa075f5de24186ffdffd1b7db1d8fc9))
* **ui:** fix typo in viewport ID ([#620](https://github.com/havenhq/revideo/issues/620)) ([3a83f20](https://github.com/havenhq/revideo/commit/3a83f20cb1b8ddc7b95a8e36bf6f3d0cd036693b))
* **ui:** fix zoom to fit ([#561](https://github.com/havenhq/revideo/issues/561)) ([1c947b4](https://github.com/havenhq/revideo/commit/1c947b417e218809f33928d6cbb89d463bdc2e66))
* **ui:** ignore shortcuts when typing ([#521](https://github.com/havenhq/revideo/issues/521)) ([4d3e1a1](https://github.com/havenhq/revideo/commit/4d3e1a13caee2ddd03857961a44dd10a7e1cb32a)), closes [#518](https://github.com/havenhq/revideo/issues/518)
* **ui:** misaligned overlay ([#127](https://github.com/havenhq/revideo/issues/127)) ([0379730](https://github.com/havenhq/revideo/commit/03797302a302e28caf9f2428cfce4a122f827775))
* **ui:** prevent context menu in viewport ([#123](https://github.com/havenhq/revideo/issues/123)) ([0fdd85e](https://github.com/havenhq/revideo/commit/0fdd85ecf5b61907ce1e16f5fb9253540528a8b0))
* **ui:** prevent spawning multiple color pickers ([#747](https://github.com/havenhq/revideo/issues/747)) ([48ffd1f](https://github.com/havenhq/revideo/commit/48ffd1f2eec21f9880e172632a2310f5676e3c19)), closes [#744](https://github.com/havenhq/revideo/issues/744)
* **ui:** prevent timeline scroll when zooming ([#162](https://github.com/havenhq/revideo/issues/162)) ([b8278ae](https://github.com/havenhq/revideo/commit/b8278aeb7b92f215bccbd1aa57de17c9233cff01))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* **ui:** remove glossy <select> effect in Safari ([#292](https://github.com/havenhq/revideo/issues/292)) ([9c062b2](https://github.com/havenhq/revideo/commit/9c062b26e48fbdb1905daae25a3fb34df82307d3))
* **ui:** support small ranges ([#739](https://github.com/havenhq/revideo/issues/739)) ([cf32d8b](https://github.com/havenhq/revideo/commit/cf32d8b08b94f5044987eb554cd250fc79fbc99d)), closes [#738](https://github.com/havenhq/revideo/issues/738)
* **ui:** use signals correctly ([#906](https://github.com/havenhq/revideo/issues/906)) ([f67d691](https://github.com/havenhq/revideo/commit/f67d691b5f2f6358120e9582a1839ef3d49c77b8))
* **ui:** version comparison issue ([#520](https://github.com/havenhq/revideo/issues/520)) ([93b5e08](https://github.com/havenhq/revideo/commit/93b5e088b4a4fda0d2177cb2cc6680c34fa72d30)), closes [#519](https://github.com/havenhq/revideo/issues/519)
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* **2d:** expand animations and reduced motion ([#671](https://github.com/havenhq/revideo/issues/671)) ([b8e9d03](https://github.com/havenhq/revideo/commit/b8e9d03488f8ca7085b3e7e1b095a52f39f2bc89))
* **2d:** visual feedback about rendering process ([#681](https://github.com/havenhq/revideo/issues/681)) ([d0495f5](https://github.com/havenhq/revideo/commit/d0495f5c6396c05454a5323e4486ab4829adbc9e))
* add audio volume control through arrow keys ([#856](https://github.com/havenhq/revideo/issues/856)) ([8b86fd4](https://github.com/havenhq/revideo/commit/8b86fd4e70f91a0d5b1150d760427ca355666341))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add E2E testing ([#101](https://github.com/havenhq/revideo/issues/101)) ([6398c54](https://github.com/havenhq/revideo/commit/6398c54e4c4d6667ce9f45b9bbef6ea110ea2215)), closes [#42](https://github.com/havenhq/revideo/issues/42)
* add experimental features ([#876](https://github.com/havenhq/revideo/issues/876)) ([498d387](https://github.com/havenhq/revideo/commit/498d3871d05d4dcc83453654bec7762d2ab32e7e))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* added file type and quality options to rendering panel ([#50](https://github.com/havenhq/revideo/issues/50)) ([bee71ef](https://github.com/havenhq/revideo/commit/bee71ef2673c269db47a4433831720b7ad0fb4e8)), closes [#24](https://github.com/havenhq/revideo/issues/24)
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* auto meta fields ([#565](https://github.com/havenhq/revideo/issues/565)) ([645af6d](https://github.com/havenhq/revideo/commit/645af6d2b7e8d9332b6f08419c318ee9434d7f3f))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display array values in inspector ([#670](https://github.com/havenhq/revideo/issues/670)) ([e71d74c](https://github.com/havenhq/revideo/commit/e71d74c9c04995393ad8ee942b8e6e5baa6f982f))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* editor improvements ([#121](https://github.com/havenhq/revideo/issues/121)) ([e8b32ce](https://github.com/havenhq/revideo/commit/e8b32ceff1b8216282c4b5713508ce1172645e20))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* meta field descriptions ([#664](https://github.com/havenhq/revideo/issues/664)) ([80c9d07](https://github.com/havenhq/revideo/commit/80c9d07f88f4a3df0f99e5741b31313f891a5d51))
* minor console improvements ([#145](https://github.com/havenhq/revideo/issues/145)) ([3e32e73](https://github.com/havenhq/revideo/commit/3e32e73434ad872049af9e3f1f711bc0185410f4))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* navigate to slide source ([#490](https://github.com/havenhq/revideo/issues/490)) ([b5ae4bf](https://github.com/havenhq/revideo/commit/b5ae4bf37076b262a20949cca030db3902186c8d))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* new plugin hooks ([#723](https://github.com/havenhq/revideo/issues/723)) ([9a2b5ab](https://github.com/havenhq/revideo/commit/9a2b5ab8be0d001414fd00da3053d408e00fd1cd))
* open time events in editor ([#87](https://github.com/havenhq/revideo/issues/87)) ([74b781d](https://github.com/havenhq/revideo/commit/74b781d57fca7ef1d10904673276f2a7354c01b8))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* **ui:** add color picker ([#691](https://github.com/havenhq/revideo/issues/691)) ([a33059c](https://github.com/havenhq/revideo/commit/a33059c0f455814919db31bc9e5e932907c797e4))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** add direct range selection & playhead shortcuts ([#907](https://github.com/havenhq/revideo/issues/907)) ([39264fc](https://github.com/havenhq/revideo/commit/39264fc074da739efddf24ef080f6c5f279f8014))
* **ui:** add external link to docs ([#346](https://github.com/havenhq/revideo/issues/346)) ([fc4ee5d](https://github.com/havenhq/revideo/commit/fc4ee5d028312904ed9e11c5341ac00f36e7242b))
* **ui:** add goto start and goto end buttons ([#814](https://github.com/havenhq/revideo/issues/814)) ([449f194](https://github.com/havenhq/revideo/commit/449f1946474af9886135571c14c83b8440bdf28c))
* **ui:** add number input dragging ([#917](https://github.com/havenhq/revideo/issues/917)) ([1b5c232](https://github.com/havenhq/revideo/commit/1b5c23260c3015608f202a103b4c0aebd1860e36)), closes [#799](https://github.com/havenhq/revideo/issues/799)
* **ui:** add quarter resolution ([#421](https://github.com/havenhq/revideo/issues/421)) ([d0160d0](https://github.com/havenhq/revideo/commit/d0160d0d5ef76ffb0d3591566891b5efa4061744))
* **ui:** add shortcuts to button titles ([#532](https://github.com/havenhq/revideo/issues/532)) ([3549dd3](https://github.com/havenhq/revideo/commit/3549dd3fd7ef47376a5a2dd516609499d3985ac3))
* **ui:** add volume slider ([#872](https://github.com/havenhq/revideo/issues/872)) ([5ac3069](https://github.com/havenhq/revideo/commit/5ac3069f027ee123c212217dcf8d26a78a3aa106))
* **ui:** custom checkbox style ([#529](https://github.com/havenhq/revideo/issues/529)) ([af98db1](https://github.com/havenhq/revideo/commit/af98db103d66e8af059dc483d49984b9adb9b95c))
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** estimate remaining rendering time ([#795](https://github.com/havenhq/revideo/issues/795)) ([1a46148](https://github.com/havenhq/revideo/commit/1a4614801869ab36827ca857d66eed8de9cffd09)), closes [#784](https://github.com/havenhq/revideo/issues/784)
* **ui:** improve rendering button ([#662](https://github.com/havenhq/revideo/issues/662)) ([2b4ae70](https://github.com/havenhq/revideo/commit/2b4ae70ea0b0305fbb2596e95bbc70440718bbe2))
* **ui:** include function names in stack traces ([#693](https://github.com/havenhq/revideo/issues/693)) ([835c0fa](https://github.com/havenhq/revideo/commit/835c0fa4b70429db6fe96be96d6d9e44949f7f6c))
* **ui:** list available shortcuts ([#444](https://github.com/havenhq/revideo/issues/444)) ([443fcc9](https://github.com/havenhq/revideo/commit/443fcc9feb1a1ca69aecbc4db2e194ce4f50f72e))
* **ui:** make inspector toggleable ([#921](https://github.com/havenhq/revideo/issues/921)) ([a365951](https://github.com/havenhq/revideo/commit/a365951e69c01cac1ea23d173034ad83f988c8eb))
* **ui:** new sidebar ([#692](https://github.com/havenhq/revideo/issues/692)) ([b555ee1](https://github.com/havenhq/revideo/commit/b555ee1d10f8a6e1b380c043dff2717ffa01a068)), closes [#492](https://github.com/havenhq/revideo/issues/492)
* **ui:** presentation interface ([#487](https://github.com/havenhq/revideo/issues/487)) ([1899f02](https://github.com/havenhq/revideo/commit/1899f020fb1c0b2136de4401e6fc068bcf5e0cc4))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** shift + right arrow moves to last frame ([#354](https://github.com/havenhq/revideo/issues/354)) ([4b81709](https://github.com/havenhq/revideo/commit/4b8170971400c5bf4fe690a58d3f44c3e1d00b94)), closes [#353](https://github.com/havenhq/revideo/issues/353)
* **ui:** small improvements ([#833](https://github.com/havenhq/revideo/issues/833)) ([f44400c](https://github.com/havenhq/revideo/commit/f44400c458a1d7f49520494f01efb9936f4df83e))
* **ui:** timeline dragging ([#794](https://github.com/havenhq/revideo/issues/794)) ([248e454](https://github.com/havenhq/revideo/commit/248e4546367f9d99221f64b811a07d54a9988e48)), closes [#699](https://github.com/havenhq/revideo/issues/699)
* **ui:** timeline overhaul ([#47](https://github.com/havenhq/revideo/issues/47)) ([4232a60](https://github.com/havenhq/revideo/commit/4232a6072540b54451e99e18c1001db0175bb93f)), closes [#20](https://github.com/havenhq/revideo/issues/20)
* **ui:** timeline scrubbing ([#862](https://github.com/havenhq/revideo/issues/862)) ([211b9a4](https://github.com/havenhq/revideo/commit/211b9a4327720afd1ce0ff93868a501c2fd745aa)), closes [#286](https://github.com/havenhq/revideo/issues/286)
* **ui:** vertical line on time event ([#808](https://github.com/havenhq/revideo/issues/808)) ([18015d6](https://github.com/havenhq/revideo/commit/18015d6714ffe2a6255f26895aa9a7c1908a4f7a)), closes [#804](https://github.com/havenhq/revideo/issues/804)
* **ui:** visual changes ([#96](https://github.com/havenhq/revideo/issues/96)) ([3d599f4](https://github.com/havenhq/revideo/commit/3d599f4e1788fbd15e996be8bf95679f1c6787bd))
* **ui:** zoom controls ([#531](https://github.com/havenhq/revideo/issues/531)) ([752350d](https://github.com/havenhq/revideo/commit/752350d0c547e21806f1b70a5c68025012e5ec11))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
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





## 0.4.6 (2024-06-27)


### Bug Fixes

* **2d:** fix audio offset editing ([#674](https://github.com/havenhq/revideo/issues/674)) ([58d6ef7](https://github.com/havenhq/revideo/commit/58d6ef79fa06e377e0c1821efe73585586d124a6))
* **2d:** fix performance issue with audio track ([#427](https://github.com/havenhq/revideo/issues/427)) ([c993770](https://github.com/havenhq/revideo/commit/c993770937ddfdf0ac39b144a1f79f1a300f7899))
* **2d:** fix version link ([#608](https://github.com/havenhq/revideo/issues/608)) ([4fe5b7a](https://github.com/havenhq/revideo/commit/4fe5b7a5150fbdf43ea50ecf3dc8b4690c0e2e34))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* correctly await re-renders ([#918](https://github.com/havenhq/revideo/issues/918)) ([873a9a3](https://github.com/havenhq/revideo/commit/873a9a3eed2676de4cc7f31fbd5ea58817a80aff))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix player state not being saved ([#85](https://github.com/havenhq/revideo/issues/85)) ([74b54b9](https://github.com/havenhq/revideo/commit/74b54b970d1287e80fe2334a034844ad6a80c23b))
* fix tsdoc comments ([#21](https://github.com/havenhq/revideo/issues/21)) ([4b6cb66](https://github.com/havenhq/revideo/commit/4b6cb660ad82befcfd41188c7a8f9c8c0cba93ed)), closes [#18](https://github.com/havenhq/revideo/issues/18)
* limit fps to positive numbers ([#937](https://github.com/havenhq/revideo/issues/937)) ([c7c0c67](https://github.com/havenhq/revideo/commit/c7c0c6730e1a00e6b23077188bfc2d389e98cff2)), closes [#936](https://github.com/havenhq/revideo/issues/936)
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* support hmr when navigating ([370ea16](https://github.com/havenhq/revideo/commit/370ea1676a1c34313c0fb917c0f0691538f72016))
* the resolution fields in Rendering no longer reset each other ([#73](https://github.com/havenhq/revideo/issues/73)) ([ddabec5](https://github.com/havenhq/revideo/commit/ddabec549be3cecec27cf9f5643b036e12a83472))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** correctly reset zoom ([#432](https://github.com/havenhq/revideo/issues/432)) ([a33ee14](https://github.com/havenhq/revideo/commit/a33ee14dfac3e1fe24c89d76631e23fe4cb625a6))
* **ui:** don't seek when editing time events ([#26](https://github.com/havenhq/revideo/issues/26)) ([524c200](https://github.com/havenhq/revideo/commit/524c200ef1bd6a6f52096d04c2aeed24a24cda6f))
* **ui:** downgrade preact ([#1](https://github.com/havenhq/revideo/issues/1)) ([5f7456f](https://github.com/havenhq/revideo/commit/5f7456fe4c5a1cc76ccd8fed5a6f9a8a4e846d27))
* **ui:** fix "go to source" ([#895](https://github.com/havenhq/revideo/issues/895)) ([ec729de](https://github.com/havenhq/revideo/commit/ec729dea0d65bc69aefc0abd601f365af1c4ed68))
* **ui:** fix collapse ([#698](https://github.com/havenhq/revideo/issues/698)) ([6bd8703](https://github.com/havenhq/revideo/commit/6bd8703ec9b16f55b3817f6a1f9130f17b66c69a))
* **ui:** fix inspector tab ([#374](https://github.com/havenhq/revideo/issues/374)) ([c4cb378](https://github.com/havenhq/revideo/commit/c4cb378c2f9d972bb41542bbe3b3aa314fa1f3ad))
* **ui:** fix new version link ([#505](https://github.com/havenhq/revideo/issues/505)) ([7459e7f](https://github.com/havenhq/revideo/commit/7459e7f8355163f3cb6a3ed791fc41a2962a186e))
* **ui:** fix onChange handlers ([#515](https://github.com/havenhq/revideo/issues/515)) ([a23d06c](https://github.com/havenhq/revideo/commit/a23d06cbf6e29f37a9259e50fe71c482640b83fb))
* **ui:** fix out of range warning ([#939](https://github.com/havenhq/revideo/issues/939)) ([c9f466f](https://github.com/havenhq/revideo/commit/c9f466f20ff1a3e2cb77aa5575823947ef9beeee))
* **ui:** fix play-pause button ([#299](https://github.com/havenhq/revideo/issues/299)) ([191f54a](https://github.com/havenhq/revideo/commit/191f54a0a5a9de2fd2dc27bffc6d21d692ce6f72))
* **ui:** fix snapshot ([#643](https://github.com/havenhq/revideo/issues/643)) ([590216a](https://github.com/havenhq/revideo/commit/590216ac094d6b6ef3e9c773499bc52063f617b1))
* **ui:** fix transparent background ([#886](https://github.com/havenhq/revideo/issues/886)) ([83f652f](https://github.com/havenhq/revideo/commit/83f652fdcfa075f5de24186ffdffd1b7db1d8fc9))
* **ui:** fix typo in viewport ID ([#620](https://github.com/havenhq/revideo/issues/620)) ([3a83f20](https://github.com/havenhq/revideo/commit/3a83f20cb1b8ddc7b95a8e36bf6f3d0cd036693b))
* **ui:** fix zoom to fit ([#561](https://github.com/havenhq/revideo/issues/561)) ([1c947b4](https://github.com/havenhq/revideo/commit/1c947b417e218809f33928d6cbb89d463bdc2e66))
* **ui:** ignore shortcuts when typing ([#521](https://github.com/havenhq/revideo/issues/521)) ([4d3e1a1](https://github.com/havenhq/revideo/commit/4d3e1a13caee2ddd03857961a44dd10a7e1cb32a)), closes [#518](https://github.com/havenhq/revideo/issues/518)
* **ui:** misaligned overlay ([#127](https://github.com/havenhq/revideo/issues/127)) ([0379730](https://github.com/havenhq/revideo/commit/03797302a302e28caf9f2428cfce4a122f827775))
* **ui:** prevent context menu in viewport ([#123](https://github.com/havenhq/revideo/issues/123)) ([0fdd85e](https://github.com/havenhq/revideo/commit/0fdd85ecf5b61907ce1e16f5fb9253540528a8b0))
* **ui:** prevent spawning multiple color pickers ([#747](https://github.com/havenhq/revideo/issues/747)) ([48ffd1f](https://github.com/havenhq/revideo/commit/48ffd1f2eec21f9880e172632a2310f5676e3c19)), closes [#744](https://github.com/havenhq/revideo/issues/744)
* **ui:** prevent timeline scroll when zooming ([#162](https://github.com/havenhq/revideo/issues/162)) ([b8278ae](https://github.com/havenhq/revideo/commit/b8278aeb7b92f215bccbd1aa57de17c9233cff01))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* **ui:** remove glossy <select> effect in Safari ([#292](https://github.com/havenhq/revideo/issues/292)) ([9c062b2](https://github.com/havenhq/revideo/commit/9c062b26e48fbdb1905daae25a3fb34df82307d3))
* **ui:** support small ranges ([#739](https://github.com/havenhq/revideo/issues/739)) ([cf32d8b](https://github.com/havenhq/revideo/commit/cf32d8b08b94f5044987eb554cd250fc79fbc99d)), closes [#738](https://github.com/havenhq/revideo/issues/738)
* **ui:** use signals correctly ([#906](https://github.com/havenhq/revideo/issues/906)) ([f67d691](https://github.com/havenhq/revideo/commit/f67d691b5f2f6358120e9582a1839ef3d49c77b8))
* **ui:** version comparison issue ([#520](https://github.com/havenhq/revideo/issues/520)) ([93b5e08](https://github.com/havenhq/revideo/commit/93b5e088b4a4fda0d2177cb2cc6680c34fa72d30)), closes [#519](https://github.com/havenhq/revideo/issues/519)
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* **2d:** expand animations and reduced motion ([#671](https://github.com/havenhq/revideo/issues/671)) ([b8e9d03](https://github.com/havenhq/revideo/commit/b8e9d03488f8ca7085b3e7e1b095a52f39f2bc89))
* **2d:** visual feedback about rendering process ([#681](https://github.com/havenhq/revideo/issues/681)) ([d0495f5](https://github.com/havenhq/revideo/commit/d0495f5c6396c05454a5323e4486ab4829adbc9e))
* add audio volume control through arrow keys ([#856](https://github.com/havenhq/revideo/issues/856)) ([8b86fd4](https://github.com/havenhq/revideo/commit/8b86fd4e70f91a0d5b1150d760427ca355666341))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add E2E testing ([#101](https://github.com/havenhq/revideo/issues/101)) ([6398c54](https://github.com/havenhq/revideo/commit/6398c54e4c4d6667ce9f45b9bbef6ea110ea2215)), closes [#42](https://github.com/havenhq/revideo/issues/42)
* add experimental features ([#876](https://github.com/havenhq/revideo/issues/876)) ([498d387](https://github.com/havenhq/revideo/commit/498d3871d05d4dcc83453654bec7762d2ab32e7e))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* added file type and quality options to rendering panel ([#50](https://github.com/havenhq/revideo/issues/50)) ([bee71ef](https://github.com/havenhq/revideo/commit/bee71ef2673c269db47a4433831720b7ad0fb4e8)), closes [#24](https://github.com/havenhq/revideo/issues/24)
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* auto meta fields ([#565](https://github.com/havenhq/revideo/issues/565)) ([645af6d](https://github.com/havenhq/revideo/commit/645af6d2b7e8d9332b6f08419c318ee9434d7f3f))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display array values in inspector ([#670](https://github.com/havenhq/revideo/issues/670)) ([e71d74c](https://github.com/havenhq/revideo/commit/e71d74c9c04995393ad8ee942b8e6e5baa6f982f))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* editor improvements ([#121](https://github.com/havenhq/revideo/issues/121)) ([e8b32ce](https://github.com/havenhq/revideo/commit/e8b32ceff1b8216282c4b5713508ce1172645e20))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* meta field descriptions ([#664](https://github.com/havenhq/revideo/issues/664)) ([80c9d07](https://github.com/havenhq/revideo/commit/80c9d07f88f4a3df0f99e5741b31313f891a5d51))
* minor console improvements ([#145](https://github.com/havenhq/revideo/issues/145)) ([3e32e73](https://github.com/havenhq/revideo/commit/3e32e73434ad872049af9e3f1f711bc0185410f4))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* navigate to slide source ([#490](https://github.com/havenhq/revideo/issues/490)) ([b5ae4bf](https://github.com/havenhq/revideo/commit/b5ae4bf37076b262a20949cca030db3902186c8d))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* new plugin hooks ([#723](https://github.com/havenhq/revideo/issues/723)) ([9a2b5ab](https://github.com/havenhq/revideo/commit/9a2b5ab8be0d001414fd00da3053d408e00fd1cd))
* open time events in editor ([#87](https://github.com/havenhq/revideo/issues/87)) ([74b781d](https://github.com/havenhq/revideo/commit/74b781d57fca7ef1d10904673276f2a7354c01b8))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* **ui:** add color picker ([#691](https://github.com/havenhq/revideo/issues/691)) ([a33059c](https://github.com/havenhq/revideo/commit/a33059c0f455814919db31bc9e5e932907c797e4))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** add direct range selection & playhead shortcuts ([#907](https://github.com/havenhq/revideo/issues/907)) ([39264fc](https://github.com/havenhq/revideo/commit/39264fc074da739efddf24ef080f6c5f279f8014))
* **ui:** add external link to docs ([#346](https://github.com/havenhq/revideo/issues/346)) ([fc4ee5d](https://github.com/havenhq/revideo/commit/fc4ee5d028312904ed9e11c5341ac00f36e7242b))
* **ui:** add goto start and goto end buttons ([#814](https://github.com/havenhq/revideo/issues/814)) ([449f194](https://github.com/havenhq/revideo/commit/449f1946474af9886135571c14c83b8440bdf28c))
* **ui:** add number input dragging ([#917](https://github.com/havenhq/revideo/issues/917)) ([1b5c232](https://github.com/havenhq/revideo/commit/1b5c23260c3015608f202a103b4c0aebd1860e36)), closes [#799](https://github.com/havenhq/revideo/issues/799)
* **ui:** add quarter resolution ([#421](https://github.com/havenhq/revideo/issues/421)) ([d0160d0](https://github.com/havenhq/revideo/commit/d0160d0d5ef76ffb0d3591566891b5efa4061744))
* **ui:** add shortcuts to button titles ([#532](https://github.com/havenhq/revideo/issues/532)) ([3549dd3](https://github.com/havenhq/revideo/commit/3549dd3fd7ef47376a5a2dd516609499d3985ac3))
* **ui:** add volume slider ([#872](https://github.com/havenhq/revideo/issues/872)) ([5ac3069](https://github.com/havenhq/revideo/commit/5ac3069f027ee123c212217dcf8d26a78a3aa106))
* **ui:** custom checkbox style ([#529](https://github.com/havenhq/revideo/issues/529)) ([af98db1](https://github.com/havenhq/revideo/commit/af98db103d66e8af059dc483d49984b9adb9b95c))
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** estimate remaining rendering time ([#795](https://github.com/havenhq/revideo/issues/795)) ([1a46148](https://github.com/havenhq/revideo/commit/1a4614801869ab36827ca857d66eed8de9cffd09)), closes [#784](https://github.com/havenhq/revideo/issues/784)
* **ui:** improve rendering button ([#662](https://github.com/havenhq/revideo/issues/662)) ([2b4ae70](https://github.com/havenhq/revideo/commit/2b4ae70ea0b0305fbb2596e95bbc70440718bbe2))
* **ui:** include function names in stack traces ([#693](https://github.com/havenhq/revideo/issues/693)) ([835c0fa](https://github.com/havenhq/revideo/commit/835c0fa4b70429db6fe96be96d6d9e44949f7f6c))
* **ui:** list available shortcuts ([#444](https://github.com/havenhq/revideo/issues/444)) ([443fcc9](https://github.com/havenhq/revideo/commit/443fcc9feb1a1ca69aecbc4db2e194ce4f50f72e))
* **ui:** make inspector toggleable ([#921](https://github.com/havenhq/revideo/issues/921)) ([a365951](https://github.com/havenhq/revideo/commit/a365951e69c01cac1ea23d173034ad83f988c8eb))
* **ui:** new sidebar ([#692](https://github.com/havenhq/revideo/issues/692)) ([b555ee1](https://github.com/havenhq/revideo/commit/b555ee1d10f8a6e1b380c043dff2717ffa01a068)), closes [#492](https://github.com/havenhq/revideo/issues/492)
* **ui:** presentation interface ([#487](https://github.com/havenhq/revideo/issues/487)) ([1899f02](https://github.com/havenhq/revideo/commit/1899f020fb1c0b2136de4401e6fc068bcf5e0cc4))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** shift + right arrow moves to last frame ([#354](https://github.com/havenhq/revideo/issues/354)) ([4b81709](https://github.com/havenhq/revideo/commit/4b8170971400c5bf4fe690a58d3f44c3e1d00b94)), closes [#353](https://github.com/havenhq/revideo/issues/353)
* **ui:** small improvements ([#833](https://github.com/havenhq/revideo/issues/833)) ([f44400c](https://github.com/havenhq/revideo/commit/f44400c458a1d7f49520494f01efb9936f4df83e))
* **ui:** timeline dragging ([#794](https://github.com/havenhq/revideo/issues/794)) ([248e454](https://github.com/havenhq/revideo/commit/248e4546367f9d99221f64b811a07d54a9988e48)), closes [#699](https://github.com/havenhq/revideo/issues/699)
* **ui:** timeline overhaul ([#47](https://github.com/havenhq/revideo/issues/47)) ([4232a60](https://github.com/havenhq/revideo/commit/4232a6072540b54451e99e18c1001db0175bb93f)), closes [#20](https://github.com/havenhq/revideo/issues/20)
* **ui:** timeline scrubbing ([#862](https://github.com/havenhq/revideo/issues/862)) ([211b9a4](https://github.com/havenhq/revideo/commit/211b9a4327720afd1ce0ff93868a501c2fd745aa)), closes [#286](https://github.com/havenhq/revideo/issues/286)
* **ui:** vertical line on time event ([#808](https://github.com/havenhq/revideo/issues/808)) ([18015d6](https://github.com/havenhq/revideo/commit/18015d6714ffe2a6255f26895aa9a7c1908a4f7a)), closes [#804](https://github.com/havenhq/revideo/issues/804)
* **ui:** visual changes ([#96](https://github.com/havenhq/revideo/issues/96)) ([3d599f4](https://github.com/havenhq/revideo/commit/3d599f4e1788fbd15e996be8bf95679f1c6787bd))
* **ui:** zoom controls ([#531](https://github.com/havenhq/revideo/issues/531)) ([752350d](https://github.com/havenhq/revideo/commit/752350d0c547e21806f1b70a5c68025012e5ec11))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
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

* **2d:** fix audio offset editing ([#674](https://github.com/havenhq/revideo/issues/674)) ([58d6ef7](https://github.com/havenhq/revideo/commit/58d6ef79fa06e377e0c1821efe73585586d124a6))
* **2d:** fix performance issue with audio track ([#427](https://github.com/havenhq/revideo/issues/427)) ([c993770](https://github.com/havenhq/revideo/commit/c993770937ddfdf0ac39b144a1f79f1a300f7899))
* **2d:** fix version link ([#608](https://github.com/havenhq/revideo/issues/608)) ([4fe5b7a](https://github.com/havenhq/revideo/commit/4fe5b7a5150fbdf43ea50ecf3dc8b4690c0e2e34))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* correctly await re-renders ([#918](https://github.com/havenhq/revideo/issues/918)) ([873a9a3](https://github.com/havenhq/revideo/commit/873a9a3eed2676de4cc7f31fbd5ea58817a80aff))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix player state not being saved ([#85](https://github.com/havenhq/revideo/issues/85)) ([74b54b9](https://github.com/havenhq/revideo/commit/74b54b970d1287e80fe2334a034844ad6a80c23b))
* fix tsdoc comments ([#21](https://github.com/havenhq/revideo/issues/21)) ([4b6cb66](https://github.com/havenhq/revideo/commit/4b6cb660ad82befcfd41188c7a8f9c8c0cba93ed)), closes [#18](https://github.com/havenhq/revideo/issues/18)
* limit fps to positive numbers ([#937](https://github.com/havenhq/revideo/issues/937)) ([c7c0c67](https://github.com/havenhq/revideo/commit/c7c0c6730e1a00e6b23077188bfc2d389e98cff2)), closes [#936](https://github.com/havenhq/revideo/issues/936)
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* support hmr when navigating ([370ea16](https://github.com/havenhq/revideo/commit/370ea1676a1c34313c0fb917c0f0691538f72016))
* the resolution fields in Rendering no longer reset each other ([#73](https://github.com/havenhq/revideo/issues/73)) ([ddabec5](https://github.com/havenhq/revideo/commit/ddabec549be3cecec27cf9f5643b036e12a83472))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** correctly reset zoom ([#432](https://github.com/havenhq/revideo/issues/432)) ([a33ee14](https://github.com/havenhq/revideo/commit/a33ee14dfac3e1fe24c89d76631e23fe4cb625a6))
* **ui:** don't seek when editing time events ([#26](https://github.com/havenhq/revideo/issues/26)) ([524c200](https://github.com/havenhq/revideo/commit/524c200ef1bd6a6f52096d04c2aeed24a24cda6f))
* **ui:** downgrade preact ([#1](https://github.com/havenhq/revideo/issues/1)) ([5f7456f](https://github.com/havenhq/revideo/commit/5f7456fe4c5a1cc76ccd8fed5a6f9a8a4e846d27))
* **ui:** fix "go to source" ([#895](https://github.com/havenhq/revideo/issues/895)) ([ec729de](https://github.com/havenhq/revideo/commit/ec729dea0d65bc69aefc0abd601f365af1c4ed68))
* **ui:** fix collapse ([#698](https://github.com/havenhq/revideo/issues/698)) ([6bd8703](https://github.com/havenhq/revideo/commit/6bd8703ec9b16f55b3817f6a1f9130f17b66c69a))
* **ui:** fix inspector tab ([#374](https://github.com/havenhq/revideo/issues/374)) ([c4cb378](https://github.com/havenhq/revideo/commit/c4cb378c2f9d972bb41542bbe3b3aa314fa1f3ad))
* **ui:** fix new version link ([#505](https://github.com/havenhq/revideo/issues/505)) ([7459e7f](https://github.com/havenhq/revideo/commit/7459e7f8355163f3cb6a3ed791fc41a2962a186e))
* **ui:** fix onChange handlers ([#515](https://github.com/havenhq/revideo/issues/515)) ([a23d06c](https://github.com/havenhq/revideo/commit/a23d06cbf6e29f37a9259e50fe71c482640b83fb))
* **ui:** fix out of range warning ([#939](https://github.com/havenhq/revideo/issues/939)) ([c9f466f](https://github.com/havenhq/revideo/commit/c9f466f20ff1a3e2cb77aa5575823947ef9beeee))
* **ui:** fix play-pause button ([#299](https://github.com/havenhq/revideo/issues/299)) ([191f54a](https://github.com/havenhq/revideo/commit/191f54a0a5a9de2fd2dc27bffc6d21d692ce6f72))
* **ui:** fix snapshot ([#643](https://github.com/havenhq/revideo/issues/643)) ([590216a](https://github.com/havenhq/revideo/commit/590216ac094d6b6ef3e9c773499bc52063f617b1))
* **ui:** fix transparent background ([#886](https://github.com/havenhq/revideo/issues/886)) ([83f652f](https://github.com/havenhq/revideo/commit/83f652fdcfa075f5de24186ffdffd1b7db1d8fc9))
* **ui:** fix typo in viewport ID ([#620](https://github.com/havenhq/revideo/issues/620)) ([3a83f20](https://github.com/havenhq/revideo/commit/3a83f20cb1b8ddc7b95a8e36bf6f3d0cd036693b))
* **ui:** fix zoom to fit ([#561](https://github.com/havenhq/revideo/issues/561)) ([1c947b4](https://github.com/havenhq/revideo/commit/1c947b417e218809f33928d6cbb89d463bdc2e66))
* **ui:** ignore shortcuts when typing ([#521](https://github.com/havenhq/revideo/issues/521)) ([4d3e1a1](https://github.com/havenhq/revideo/commit/4d3e1a13caee2ddd03857961a44dd10a7e1cb32a)), closes [#518](https://github.com/havenhq/revideo/issues/518)
* **ui:** misaligned overlay ([#127](https://github.com/havenhq/revideo/issues/127)) ([0379730](https://github.com/havenhq/revideo/commit/03797302a302e28caf9f2428cfce4a122f827775))
* **ui:** prevent context menu in viewport ([#123](https://github.com/havenhq/revideo/issues/123)) ([0fdd85e](https://github.com/havenhq/revideo/commit/0fdd85ecf5b61907ce1e16f5fb9253540528a8b0))
* **ui:** prevent spawning multiple color pickers ([#747](https://github.com/havenhq/revideo/issues/747)) ([48ffd1f](https://github.com/havenhq/revideo/commit/48ffd1f2eec21f9880e172632a2310f5676e3c19)), closes [#744](https://github.com/havenhq/revideo/issues/744)
* **ui:** prevent timeline scroll when zooming ([#162](https://github.com/havenhq/revideo/issues/162)) ([b8278ae](https://github.com/havenhq/revideo/commit/b8278aeb7b92f215bccbd1aa57de17c9233cff01))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* **ui:** remove glossy <select> effect in Safari ([#292](https://github.com/havenhq/revideo/issues/292)) ([9c062b2](https://github.com/havenhq/revideo/commit/9c062b26e48fbdb1905daae25a3fb34df82307d3))
* **ui:** support small ranges ([#739](https://github.com/havenhq/revideo/issues/739)) ([cf32d8b](https://github.com/havenhq/revideo/commit/cf32d8b08b94f5044987eb554cd250fc79fbc99d)), closes [#738](https://github.com/havenhq/revideo/issues/738)
* **ui:** use signals correctly ([#906](https://github.com/havenhq/revideo/issues/906)) ([f67d691](https://github.com/havenhq/revideo/commit/f67d691b5f2f6358120e9582a1839ef3d49c77b8))
* **ui:** version comparison issue ([#520](https://github.com/havenhq/revideo/issues/520)) ([93b5e08](https://github.com/havenhq/revideo/commit/93b5e088b4a4fda0d2177cb2cc6680c34fa72d30)), closes [#519](https://github.com/havenhq/revideo/issues/519)
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* **2d:** expand animations and reduced motion ([#671](https://github.com/havenhq/revideo/issues/671)) ([b8e9d03](https://github.com/havenhq/revideo/commit/b8e9d03488f8ca7085b3e7e1b095a52f39f2bc89))
* **2d:** visual feedback about rendering process ([#681](https://github.com/havenhq/revideo/issues/681)) ([d0495f5](https://github.com/havenhq/revideo/commit/d0495f5c6396c05454a5323e4486ab4829adbc9e))
* add audio volume control through arrow keys ([#856](https://github.com/havenhq/revideo/issues/856)) ([8b86fd4](https://github.com/havenhq/revideo/commit/8b86fd4e70f91a0d5b1150d760427ca355666341))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add E2E testing ([#101](https://github.com/havenhq/revideo/issues/101)) ([6398c54](https://github.com/havenhq/revideo/commit/6398c54e4c4d6667ce9f45b9bbef6ea110ea2215)), closes [#42](https://github.com/havenhq/revideo/issues/42)
* add experimental features ([#876](https://github.com/havenhq/revideo/issues/876)) ([498d387](https://github.com/havenhq/revideo/commit/498d3871d05d4dcc83453654bec7762d2ab32e7e))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* added file type and quality options to rendering panel ([#50](https://github.com/havenhq/revideo/issues/50)) ([bee71ef](https://github.com/havenhq/revideo/commit/bee71ef2673c269db47a4433831720b7ad0fb4e8)), closes [#24](https://github.com/havenhq/revideo/issues/24)
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* auto meta fields ([#565](https://github.com/havenhq/revideo/issues/565)) ([645af6d](https://github.com/havenhq/revideo/commit/645af6d2b7e8d9332b6f08419c318ee9434d7f3f))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display array values in inspector ([#670](https://github.com/havenhq/revideo/issues/670)) ([e71d74c](https://github.com/havenhq/revideo/commit/e71d74c9c04995393ad8ee942b8e6e5baa6f982f))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* editor improvements ([#121](https://github.com/havenhq/revideo/issues/121)) ([e8b32ce](https://github.com/havenhq/revideo/commit/e8b32ceff1b8216282c4b5713508ce1172645e20))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* meta field descriptions ([#664](https://github.com/havenhq/revideo/issues/664)) ([80c9d07](https://github.com/havenhq/revideo/commit/80c9d07f88f4a3df0f99e5741b31313f891a5d51))
* minor console improvements ([#145](https://github.com/havenhq/revideo/issues/145)) ([3e32e73](https://github.com/havenhq/revideo/commit/3e32e73434ad872049af9e3f1f711bc0185410f4))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* navigate to slide source ([#490](https://github.com/havenhq/revideo/issues/490)) ([b5ae4bf](https://github.com/havenhq/revideo/commit/b5ae4bf37076b262a20949cca030db3902186c8d))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* new plugin hooks ([#723](https://github.com/havenhq/revideo/issues/723)) ([9a2b5ab](https://github.com/havenhq/revideo/commit/9a2b5ab8be0d001414fd00da3053d408e00fd1cd))
* open time events in editor ([#87](https://github.com/havenhq/revideo/issues/87)) ([74b781d](https://github.com/havenhq/revideo/commit/74b781d57fca7ef1d10904673276f2a7354c01b8))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* **ui:** add color picker ([#691](https://github.com/havenhq/revideo/issues/691)) ([a33059c](https://github.com/havenhq/revideo/commit/a33059c0f455814919db31bc9e5e932907c797e4))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** add direct range selection & playhead shortcuts ([#907](https://github.com/havenhq/revideo/issues/907)) ([39264fc](https://github.com/havenhq/revideo/commit/39264fc074da739efddf24ef080f6c5f279f8014))
* **ui:** add external link to docs ([#346](https://github.com/havenhq/revideo/issues/346)) ([fc4ee5d](https://github.com/havenhq/revideo/commit/fc4ee5d028312904ed9e11c5341ac00f36e7242b))
* **ui:** add goto start and goto end buttons ([#814](https://github.com/havenhq/revideo/issues/814)) ([449f194](https://github.com/havenhq/revideo/commit/449f1946474af9886135571c14c83b8440bdf28c))
* **ui:** add number input dragging ([#917](https://github.com/havenhq/revideo/issues/917)) ([1b5c232](https://github.com/havenhq/revideo/commit/1b5c23260c3015608f202a103b4c0aebd1860e36)), closes [#799](https://github.com/havenhq/revideo/issues/799)
* **ui:** add quarter resolution ([#421](https://github.com/havenhq/revideo/issues/421)) ([d0160d0](https://github.com/havenhq/revideo/commit/d0160d0d5ef76ffb0d3591566891b5efa4061744))
* **ui:** add shortcuts to button titles ([#532](https://github.com/havenhq/revideo/issues/532)) ([3549dd3](https://github.com/havenhq/revideo/commit/3549dd3fd7ef47376a5a2dd516609499d3985ac3))
* **ui:** add volume slider ([#872](https://github.com/havenhq/revideo/issues/872)) ([5ac3069](https://github.com/havenhq/revideo/commit/5ac3069f027ee123c212217dcf8d26a78a3aa106))
* **ui:** custom checkbox style ([#529](https://github.com/havenhq/revideo/issues/529)) ([af98db1](https://github.com/havenhq/revideo/commit/af98db103d66e8af059dc483d49984b9adb9b95c))
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** estimate remaining rendering time ([#795](https://github.com/havenhq/revideo/issues/795)) ([1a46148](https://github.com/havenhq/revideo/commit/1a4614801869ab36827ca857d66eed8de9cffd09)), closes [#784](https://github.com/havenhq/revideo/issues/784)
* **ui:** improve rendering button ([#662](https://github.com/havenhq/revideo/issues/662)) ([2b4ae70](https://github.com/havenhq/revideo/commit/2b4ae70ea0b0305fbb2596e95bbc70440718bbe2))
* **ui:** include function names in stack traces ([#693](https://github.com/havenhq/revideo/issues/693)) ([835c0fa](https://github.com/havenhq/revideo/commit/835c0fa4b70429db6fe96be96d6d9e44949f7f6c))
* **ui:** list available shortcuts ([#444](https://github.com/havenhq/revideo/issues/444)) ([443fcc9](https://github.com/havenhq/revideo/commit/443fcc9feb1a1ca69aecbc4db2e194ce4f50f72e))
* **ui:** make inspector toggleable ([#921](https://github.com/havenhq/revideo/issues/921)) ([a365951](https://github.com/havenhq/revideo/commit/a365951e69c01cac1ea23d173034ad83f988c8eb))
* **ui:** new sidebar ([#692](https://github.com/havenhq/revideo/issues/692)) ([b555ee1](https://github.com/havenhq/revideo/commit/b555ee1d10f8a6e1b380c043dff2717ffa01a068)), closes [#492](https://github.com/havenhq/revideo/issues/492)
* **ui:** presentation interface ([#487](https://github.com/havenhq/revideo/issues/487)) ([1899f02](https://github.com/havenhq/revideo/commit/1899f020fb1c0b2136de4401e6fc068bcf5e0cc4))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** shift + right arrow moves to last frame ([#354](https://github.com/havenhq/revideo/issues/354)) ([4b81709](https://github.com/havenhq/revideo/commit/4b8170971400c5bf4fe690a58d3f44c3e1d00b94)), closes [#353](https://github.com/havenhq/revideo/issues/353)
* **ui:** small improvements ([#833](https://github.com/havenhq/revideo/issues/833)) ([f44400c](https://github.com/havenhq/revideo/commit/f44400c458a1d7f49520494f01efb9936f4df83e))
* **ui:** timeline dragging ([#794](https://github.com/havenhq/revideo/issues/794)) ([248e454](https://github.com/havenhq/revideo/commit/248e4546367f9d99221f64b811a07d54a9988e48)), closes [#699](https://github.com/havenhq/revideo/issues/699)
* **ui:** timeline overhaul ([#47](https://github.com/havenhq/revideo/issues/47)) ([4232a60](https://github.com/havenhq/revideo/commit/4232a6072540b54451e99e18c1001db0175bb93f)), closes [#20](https://github.com/havenhq/revideo/issues/20)
* **ui:** timeline scrubbing ([#862](https://github.com/havenhq/revideo/issues/862)) ([211b9a4](https://github.com/havenhq/revideo/commit/211b9a4327720afd1ce0ff93868a501c2fd745aa)), closes [#286](https://github.com/havenhq/revideo/issues/286)
* **ui:** vertical line on time event ([#808](https://github.com/havenhq/revideo/issues/808)) ([18015d6](https://github.com/havenhq/revideo/commit/18015d6714ffe2a6255f26895aa9a7c1908a4f7a)), closes [#804](https://github.com/havenhq/revideo/issues/804)
* **ui:** visual changes ([#96](https://github.com/havenhq/revideo/issues/96)) ([3d599f4](https://github.com/havenhq/revideo/commit/3d599f4e1788fbd15e996be8bf95679f1c6787bd))
* **ui:** zoom controls ([#531](https://github.com/havenhq/revideo/issues/531)) ([752350d](https://github.com/havenhq/revideo/commit/752350d0c547e21806f1b70a5c68025012e5ec11))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
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

* **2d:** fix audio offset editing ([#674](https://github.com/havenhq/revideo/issues/674)) ([58d6ef7](https://github.com/havenhq/revideo/commit/58d6ef79fa06e377e0c1821efe73585586d124a6))
* **2d:** fix performance issue with audio track ([#427](https://github.com/havenhq/revideo/issues/427)) ([c993770](https://github.com/havenhq/revideo/commit/c993770937ddfdf0ac39b144a1f79f1a300f7899))
* **2d:** fix version link ([#608](https://github.com/havenhq/revideo/issues/608)) ([4fe5b7a](https://github.com/havenhq/revideo/commit/4fe5b7a5150fbdf43ea50ecf3dc8b4690c0e2e34))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* correctly await re-renders ([#918](https://github.com/havenhq/revideo/issues/918)) ([873a9a3](https://github.com/havenhq/revideo/commit/873a9a3eed2676de4cc7f31fbd5ea58817a80aff))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix player state not being saved ([#85](https://github.com/havenhq/revideo/issues/85)) ([74b54b9](https://github.com/havenhq/revideo/commit/74b54b970d1287e80fe2334a034844ad6a80c23b))
* fix tsdoc comments ([#21](https://github.com/havenhq/revideo/issues/21)) ([4b6cb66](https://github.com/havenhq/revideo/commit/4b6cb660ad82befcfd41188c7a8f9c8c0cba93ed)), closes [#18](https://github.com/havenhq/revideo/issues/18)
* limit fps to positive numbers ([#937](https://github.com/havenhq/revideo/issues/937)) ([c7c0c67](https://github.com/havenhq/revideo/commit/c7c0c6730e1a00e6b23077188bfc2d389e98cff2)), closes [#936](https://github.com/havenhq/revideo/issues/936)
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* support hmr when navigating ([370ea16](https://github.com/havenhq/revideo/commit/370ea1676a1c34313c0fb917c0f0691538f72016))
* the resolution fields in Rendering no longer reset each other ([#73](https://github.com/havenhq/revideo/issues/73)) ([ddabec5](https://github.com/havenhq/revideo/commit/ddabec549be3cecec27cf9f5643b036e12a83472))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** correctly reset zoom ([#432](https://github.com/havenhq/revideo/issues/432)) ([a33ee14](https://github.com/havenhq/revideo/commit/a33ee14dfac3e1fe24c89d76631e23fe4cb625a6))
* **ui:** don't seek when editing time events ([#26](https://github.com/havenhq/revideo/issues/26)) ([524c200](https://github.com/havenhq/revideo/commit/524c200ef1bd6a6f52096d04c2aeed24a24cda6f))
* **ui:** downgrade preact ([#1](https://github.com/havenhq/revideo/issues/1)) ([5f7456f](https://github.com/havenhq/revideo/commit/5f7456fe4c5a1cc76ccd8fed5a6f9a8a4e846d27))
* **ui:** fix "go to source" ([#895](https://github.com/havenhq/revideo/issues/895)) ([ec729de](https://github.com/havenhq/revideo/commit/ec729dea0d65bc69aefc0abd601f365af1c4ed68))
* **ui:** fix collapse ([#698](https://github.com/havenhq/revideo/issues/698)) ([6bd8703](https://github.com/havenhq/revideo/commit/6bd8703ec9b16f55b3817f6a1f9130f17b66c69a))
* **ui:** fix inspector tab ([#374](https://github.com/havenhq/revideo/issues/374)) ([c4cb378](https://github.com/havenhq/revideo/commit/c4cb378c2f9d972bb41542bbe3b3aa314fa1f3ad))
* **ui:** fix new version link ([#505](https://github.com/havenhq/revideo/issues/505)) ([7459e7f](https://github.com/havenhq/revideo/commit/7459e7f8355163f3cb6a3ed791fc41a2962a186e))
* **ui:** fix onChange handlers ([#515](https://github.com/havenhq/revideo/issues/515)) ([a23d06c](https://github.com/havenhq/revideo/commit/a23d06cbf6e29f37a9259e50fe71c482640b83fb))
* **ui:** fix out of range warning ([#939](https://github.com/havenhq/revideo/issues/939)) ([c9f466f](https://github.com/havenhq/revideo/commit/c9f466f20ff1a3e2cb77aa5575823947ef9beeee))
* **ui:** fix play-pause button ([#299](https://github.com/havenhq/revideo/issues/299)) ([191f54a](https://github.com/havenhq/revideo/commit/191f54a0a5a9de2fd2dc27bffc6d21d692ce6f72))
* **ui:** fix snapshot ([#643](https://github.com/havenhq/revideo/issues/643)) ([590216a](https://github.com/havenhq/revideo/commit/590216ac094d6b6ef3e9c773499bc52063f617b1))
* **ui:** fix transparent background ([#886](https://github.com/havenhq/revideo/issues/886)) ([83f652f](https://github.com/havenhq/revideo/commit/83f652fdcfa075f5de24186ffdffd1b7db1d8fc9))
* **ui:** fix typo in viewport ID ([#620](https://github.com/havenhq/revideo/issues/620)) ([3a83f20](https://github.com/havenhq/revideo/commit/3a83f20cb1b8ddc7b95a8e36bf6f3d0cd036693b))
* **ui:** fix zoom to fit ([#561](https://github.com/havenhq/revideo/issues/561)) ([1c947b4](https://github.com/havenhq/revideo/commit/1c947b417e218809f33928d6cbb89d463bdc2e66))
* **ui:** ignore shortcuts when typing ([#521](https://github.com/havenhq/revideo/issues/521)) ([4d3e1a1](https://github.com/havenhq/revideo/commit/4d3e1a13caee2ddd03857961a44dd10a7e1cb32a)), closes [#518](https://github.com/havenhq/revideo/issues/518)
* **ui:** misaligned overlay ([#127](https://github.com/havenhq/revideo/issues/127)) ([0379730](https://github.com/havenhq/revideo/commit/03797302a302e28caf9f2428cfce4a122f827775))
* **ui:** prevent context menu in viewport ([#123](https://github.com/havenhq/revideo/issues/123)) ([0fdd85e](https://github.com/havenhq/revideo/commit/0fdd85ecf5b61907ce1e16f5fb9253540528a8b0))
* **ui:** prevent spawning multiple color pickers ([#747](https://github.com/havenhq/revideo/issues/747)) ([48ffd1f](https://github.com/havenhq/revideo/commit/48ffd1f2eec21f9880e172632a2310f5676e3c19)), closes [#744](https://github.com/havenhq/revideo/issues/744)
* **ui:** prevent timeline scroll when zooming ([#162](https://github.com/havenhq/revideo/issues/162)) ([b8278ae](https://github.com/havenhq/revideo/commit/b8278aeb7b92f215bccbd1aa57de17c9233cff01))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* **ui:** remove glossy <select> effect in Safari ([#292](https://github.com/havenhq/revideo/issues/292)) ([9c062b2](https://github.com/havenhq/revideo/commit/9c062b26e48fbdb1905daae25a3fb34df82307d3))
* **ui:** support small ranges ([#739](https://github.com/havenhq/revideo/issues/739)) ([cf32d8b](https://github.com/havenhq/revideo/commit/cf32d8b08b94f5044987eb554cd250fc79fbc99d)), closes [#738](https://github.com/havenhq/revideo/issues/738)
* **ui:** use signals correctly ([#906](https://github.com/havenhq/revideo/issues/906)) ([f67d691](https://github.com/havenhq/revideo/commit/f67d691b5f2f6358120e9582a1839ef3d49c77b8))
* **ui:** version comparison issue ([#520](https://github.com/havenhq/revideo/issues/520)) ([93b5e08](https://github.com/havenhq/revideo/commit/93b5e088b4a4fda0d2177cb2cc6680c34fa72d30)), closes [#519](https://github.com/havenhq/revideo/issues/519)
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* **2d:** expand animations and reduced motion ([#671](https://github.com/havenhq/revideo/issues/671)) ([b8e9d03](https://github.com/havenhq/revideo/commit/b8e9d03488f8ca7085b3e7e1b095a52f39f2bc89))
* **2d:** visual feedback about rendering process ([#681](https://github.com/havenhq/revideo/issues/681)) ([d0495f5](https://github.com/havenhq/revideo/commit/d0495f5c6396c05454a5323e4486ab4829adbc9e))
* add audio volume control through arrow keys ([#856](https://github.com/havenhq/revideo/issues/856)) ([8b86fd4](https://github.com/havenhq/revideo/commit/8b86fd4e70f91a0d5b1150d760427ca355666341))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add E2E testing ([#101](https://github.com/havenhq/revideo/issues/101)) ([6398c54](https://github.com/havenhq/revideo/commit/6398c54e4c4d6667ce9f45b9bbef6ea110ea2215)), closes [#42](https://github.com/havenhq/revideo/issues/42)
* add experimental features ([#876](https://github.com/havenhq/revideo/issues/876)) ([498d387](https://github.com/havenhq/revideo/commit/498d3871d05d4dcc83453654bec7762d2ab32e7e))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* added file type and quality options to rendering panel ([#50](https://github.com/havenhq/revideo/issues/50)) ([bee71ef](https://github.com/havenhq/revideo/commit/bee71ef2673c269db47a4433831720b7ad0fb4e8)), closes [#24](https://github.com/havenhq/revideo/issues/24)
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* auto meta fields ([#565](https://github.com/havenhq/revideo/issues/565)) ([645af6d](https://github.com/havenhq/revideo/commit/645af6d2b7e8d9332b6f08419c318ee9434d7f3f))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display array values in inspector ([#670](https://github.com/havenhq/revideo/issues/670)) ([e71d74c](https://github.com/havenhq/revideo/commit/e71d74c9c04995393ad8ee942b8e6e5baa6f982f))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* editor improvements ([#121](https://github.com/havenhq/revideo/issues/121)) ([e8b32ce](https://github.com/havenhq/revideo/commit/e8b32ceff1b8216282c4b5713508ce1172645e20))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* meta field descriptions ([#664](https://github.com/havenhq/revideo/issues/664)) ([80c9d07](https://github.com/havenhq/revideo/commit/80c9d07f88f4a3df0f99e5741b31313f891a5d51))
* minor console improvements ([#145](https://github.com/havenhq/revideo/issues/145)) ([3e32e73](https://github.com/havenhq/revideo/commit/3e32e73434ad872049af9e3f1f711bc0185410f4))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* navigate to slide source ([#490](https://github.com/havenhq/revideo/issues/490)) ([b5ae4bf](https://github.com/havenhq/revideo/commit/b5ae4bf37076b262a20949cca030db3902186c8d))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* new plugin hooks ([#723](https://github.com/havenhq/revideo/issues/723)) ([9a2b5ab](https://github.com/havenhq/revideo/commit/9a2b5ab8be0d001414fd00da3053d408e00fd1cd))
* open time events in editor ([#87](https://github.com/havenhq/revideo/issues/87)) ([74b781d](https://github.com/havenhq/revideo/commit/74b781d57fca7ef1d10904673276f2a7354c01b8))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* **ui:** add color picker ([#691](https://github.com/havenhq/revideo/issues/691)) ([a33059c](https://github.com/havenhq/revideo/commit/a33059c0f455814919db31bc9e5e932907c797e4))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** add direct range selection & playhead shortcuts ([#907](https://github.com/havenhq/revideo/issues/907)) ([39264fc](https://github.com/havenhq/revideo/commit/39264fc074da739efddf24ef080f6c5f279f8014))
* **ui:** add external link to docs ([#346](https://github.com/havenhq/revideo/issues/346)) ([fc4ee5d](https://github.com/havenhq/revideo/commit/fc4ee5d028312904ed9e11c5341ac00f36e7242b))
* **ui:** add goto start and goto end buttons ([#814](https://github.com/havenhq/revideo/issues/814)) ([449f194](https://github.com/havenhq/revideo/commit/449f1946474af9886135571c14c83b8440bdf28c))
* **ui:** add number input dragging ([#917](https://github.com/havenhq/revideo/issues/917)) ([1b5c232](https://github.com/havenhq/revideo/commit/1b5c23260c3015608f202a103b4c0aebd1860e36)), closes [#799](https://github.com/havenhq/revideo/issues/799)
* **ui:** add quarter resolution ([#421](https://github.com/havenhq/revideo/issues/421)) ([d0160d0](https://github.com/havenhq/revideo/commit/d0160d0d5ef76ffb0d3591566891b5efa4061744))
* **ui:** add shortcuts to button titles ([#532](https://github.com/havenhq/revideo/issues/532)) ([3549dd3](https://github.com/havenhq/revideo/commit/3549dd3fd7ef47376a5a2dd516609499d3985ac3))
* **ui:** add volume slider ([#872](https://github.com/havenhq/revideo/issues/872)) ([5ac3069](https://github.com/havenhq/revideo/commit/5ac3069f027ee123c212217dcf8d26a78a3aa106))
* **ui:** custom checkbox style ([#529](https://github.com/havenhq/revideo/issues/529)) ([af98db1](https://github.com/havenhq/revideo/commit/af98db103d66e8af059dc483d49984b9adb9b95c))
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** estimate remaining rendering time ([#795](https://github.com/havenhq/revideo/issues/795)) ([1a46148](https://github.com/havenhq/revideo/commit/1a4614801869ab36827ca857d66eed8de9cffd09)), closes [#784](https://github.com/havenhq/revideo/issues/784)
* **ui:** improve rendering button ([#662](https://github.com/havenhq/revideo/issues/662)) ([2b4ae70](https://github.com/havenhq/revideo/commit/2b4ae70ea0b0305fbb2596e95bbc70440718bbe2))
* **ui:** include function names in stack traces ([#693](https://github.com/havenhq/revideo/issues/693)) ([835c0fa](https://github.com/havenhq/revideo/commit/835c0fa4b70429db6fe96be96d6d9e44949f7f6c))
* **ui:** list available shortcuts ([#444](https://github.com/havenhq/revideo/issues/444)) ([443fcc9](https://github.com/havenhq/revideo/commit/443fcc9feb1a1ca69aecbc4db2e194ce4f50f72e))
* **ui:** make inspector toggleable ([#921](https://github.com/havenhq/revideo/issues/921)) ([a365951](https://github.com/havenhq/revideo/commit/a365951e69c01cac1ea23d173034ad83f988c8eb))
* **ui:** new sidebar ([#692](https://github.com/havenhq/revideo/issues/692)) ([b555ee1](https://github.com/havenhq/revideo/commit/b555ee1d10f8a6e1b380c043dff2717ffa01a068)), closes [#492](https://github.com/havenhq/revideo/issues/492)
* **ui:** presentation interface ([#487](https://github.com/havenhq/revideo/issues/487)) ([1899f02](https://github.com/havenhq/revideo/commit/1899f020fb1c0b2136de4401e6fc068bcf5e0cc4))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** shift + right arrow moves to last frame ([#354](https://github.com/havenhq/revideo/issues/354)) ([4b81709](https://github.com/havenhq/revideo/commit/4b8170971400c5bf4fe690a58d3f44c3e1d00b94)), closes [#353](https://github.com/havenhq/revideo/issues/353)
* **ui:** small improvements ([#833](https://github.com/havenhq/revideo/issues/833)) ([f44400c](https://github.com/havenhq/revideo/commit/f44400c458a1d7f49520494f01efb9936f4df83e))
* **ui:** timeline dragging ([#794](https://github.com/havenhq/revideo/issues/794)) ([248e454](https://github.com/havenhq/revideo/commit/248e4546367f9d99221f64b811a07d54a9988e48)), closes [#699](https://github.com/havenhq/revideo/issues/699)
* **ui:** timeline overhaul ([#47](https://github.com/havenhq/revideo/issues/47)) ([4232a60](https://github.com/havenhq/revideo/commit/4232a6072540b54451e99e18c1001db0175bb93f)), closes [#20](https://github.com/havenhq/revideo/issues/20)
* **ui:** timeline scrubbing ([#862](https://github.com/havenhq/revideo/issues/862)) ([211b9a4](https://github.com/havenhq/revideo/commit/211b9a4327720afd1ce0ff93868a501c2fd745aa)), closes [#286](https://github.com/havenhq/revideo/issues/286)
* **ui:** vertical line on time event ([#808](https://github.com/havenhq/revideo/issues/808)) ([18015d6](https://github.com/havenhq/revideo/commit/18015d6714ffe2a6255f26895aa9a7c1908a4f7a)), closes [#804](https://github.com/havenhq/revideo/issues/804)
* **ui:** visual changes ([#96](https://github.com/havenhq/revideo/issues/96)) ([3d599f4](https://github.com/havenhq/revideo/commit/3d599f4e1788fbd15e996be8bf95679f1c6787bd))
* **ui:** zoom controls ([#531](https://github.com/havenhq/revideo/issues/531)) ([752350d](https://github.com/havenhq/revideo/commit/752350d0c547e21806f1b70a5c68025012e5ec11))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
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

* **2d:** fix audio offset editing ([#674](https://github.com/havenhq/revideo/issues/674)) ([58d6ef7](https://github.com/havenhq/revideo/commit/58d6ef79fa06e377e0c1821efe73585586d124a6))
* **2d:** fix performance issue with audio track ([#427](https://github.com/havenhq/revideo/issues/427)) ([c993770](https://github.com/havenhq/revideo/commit/c993770937ddfdf0ac39b144a1f79f1a300f7899))
* **2d:** fix version link ([#608](https://github.com/havenhq/revideo/issues/608)) ([4fe5b7a](https://github.com/havenhq/revideo/commit/4fe5b7a5150fbdf43ea50ecf3dc8b4690c0e2e34))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* correctly await re-renders ([#918](https://github.com/havenhq/revideo/issues/918)) ([873a9a3](https://github.com/havenhq/revideo/commit/873a9a3eed2676de4cc7f31fbd5ea58817a80aff))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix player state not being saved ([#85](https://github.com/havenhq/revideo/issues/85)) ([74b54b9](https://github.com/havenhq/revideo/commit/74b54b970d1287e80fe2334a034844ad6a80c23b))
* fix tsdoc comments ([#21](https://github.com/havenhq/revideo/issues/21)) ([4b6cb66](https://github.com/havenhq/revideo/commit/4b6cb660ad82befcfd41188c7a8f9c8c0cba93ed)), closes [#18](https://github.com/havenhq/revideo/issues/18)
* limit fps to positive numbers ([#937](https://github.com/havenhq/revideo/issues/937)) ([c7c0c67](https://github.com/havenhq/revideo/commit/c7c0c6730e1a00e6b23077188bfc2d389e98cff2)), closes [#936](https://github.com/havenhq/revideo/issues/936)
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* support hmr when navigating ([370ea16](https://github.com/havenhq/revideo/commit/370ea1676a1c34313c0fb917c0f0691538f72016))
* the resolution fields in Rendering no longer reset each other ([#73](https://github.com/havenhq/revideo/issues/73)) ([ddabec5](https://github.com/havenhq/revideo/commit/ddabec549be3cecec27cf9f5643b036e12a83472))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** correctly reset zoom ([#432](https://github.com/havenhq/revideo/issues/432)) ([a33ee14](https://github.com/havenhq/revideo/commit/a33ee14dfac3e1fe24c89d76631e23fe4cb625a6))
* **ui:** don't seek when editing time events ([#26](https://github.com/havenhq/revideo/issues/26)) ([524c200](https://github.com/havenhq/revideo/commit/524c200ef1bd6a6f52096d04c2aeed24a24cda6f))
* **ui:** downgrade preact ([#1](https://github.com/havenhq/revideo/issues/1)) ([5f7456f](https://github.com/havenhq/revideo/commit/5f7456fe4c5a1cc76ccd8fed5a6f9a8a4e846d27))
* **ui:** fix "go to source" ([#895](https://github.com/havenhq/revideo/issues/895)) ([ec729de](https://github.com/havenhq/revideo/commit/ec729dea0d65bc69aefc0abd601f365af1c4ed68))
* **ui:** fix collapse ([#698](https://github.com/havenhq/revideo/issues/698)) ([6bd8703](https://github.com/havenhq/revideo/commit/6bd8703ec9b16f55b3817f6a1f9130f17b66c69a))
* **ui:** fix inspector tab ([#374](https://github.com/havenhq/revideo/issues/374)) ([c4cb378](https://github.com/havenhq/revideo/commit/c4cb378c2f9d972bb41542bbe3b3aa314fa1f3ad))
* **ui:** fix new version link ([#505](https://github.com/havenhq/revideo/issues/505)) ([7459e7f](https://github.com/havenhq/revideo/commit/7459e7f8355163f3cb6a3ed791fc41a2962a186e))
* **ui:** fix onChange handlers ([#515](https://github.com/havenhq/revideo/issues/515)) ([a23d06c](https://github.com/havenhq/revideo/commit/a23d06cbf6e29f37a9259e50fe71c482640b83fb))
* **ui:** fix out of range warning ([#939](https://github.com/havenhq/revideo/issues/939)) ([c9f466f](https://github.com/havenhq/revideo/commit/c9f466f20ff1a3e2cb77aa5575823947ef9beeee))
* **ui:** fix play-pause button ([#299](https://github.com/havenhq/revideo/issues/299)) ([191f54a](https://github.com/havenhq/revideo/commit/191f54a0a5a9de2fd2dc27bffc6d21d692ce6f72))
* **ui:** fix snapshot ([#643](https://github.com/havenhq/revideo/issues/643)) ([590216a](https://github.com/havenhq/revideo/commit/590216ac094d6b6ef3e9c773499bc52063f617b1))
* **ui:** fix transparent background ([#886](https://github.com/havenhq/revideo/issues/886)) ([83f652f](https://github.com/havenhq/revideo/commit/83f652fdcfa075f5de24186ffdffd1b7db1d8fc9))
* **ui:** fix typo in viewport ID ([#620](https://github.com/havenhq/revideo/issues/620)) ([3a83f20](https://github.com/havenhq/revideo/commit/3a83f20cb1b8ddc7b95a8e36bf6f3d0cd036693b))
* **ui:** fix zoom to fit ([#561](https://github.com/havenhq/revideo/issues/561)) ([1c947b4](https://github.com/havenhq/revideo/commit/1c947b417e218809f33928d6cbb89d463bdc2e66))
* **ui:** ignore shortcuts when typing ([#521](https://github.com/havenhq/revideo/issues/521)) ([4d3e1a1](https://github.com/havenhq/revideo/commit/4d3e1a13caee2ddd03857961a44dd10a7e1cb32a)), closes [#518](https://github.com/havenhq/revideo/issues/518)
* **ui:** misaligned overlay ([#127](https://github.com/havenhq/revideo/issues/127)) ([0379730](https://github.com/havenhq/revideo/commit/03797302a302e28caf9f2428cfce4a122f827775))
* **ui:** prevent context menu in viewport ([#123](https://github.com/havenhq/revideo/issues/123)) ([0fdd85e](https://github.com/havenhq/revideo/commit/0fdd85ecf5b61907ce1e16f5fb9253540528a8b0))
* **ui:** prevent spawning multiple color pickers ([#747](https://github.com/havenhq/revideo/issues/747)) ([48ffd1f](https://github.com/havenhq/revideo/commit/48ffd1f2eec21f9880e172632a2310f5676e3c19)), closes [#744](https://github.com/havenhq/revideo/issues/744)
* **ui:** prevent timeline scroll when zooming ([#162](https://github.com/havenhq/revideo/issues/162)) ([b8278ae](https://github.com/havenhq/revideo/commit/b8278aeb7b92f215bccbd1aa57de17c9233cff01))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* **ui:** remove glossy <select> effect in Safari ([#292](https://github.com/havenhq/revideo/issues/292)) ([9c062b2](https://github.com/havenhq/revideo/commit/9c062b26e48fbdb1905daae25a3fb34df82307d3))
* **ui:** support small ranges ([#739](https://github.com/havenhq/revideo/issues/739)) ([cf32d8b](https://github.com/havenhq/revideo/commit/cf32d8b08b94f5044987eb554cd250fc79fbc99d)), closes [#738](https://github.com/havenhq/revideo/issues/738)
* **ui:** use signals correctly ([#906](https://github.com/havenhq/revideo/issues/906)) ([f67d691](https://github.com/havenhq/revideo/commit/f67d691b5f2f6358120e9582a1839ef3d49c77b8))
* **ui:** version comparison issue ([#520](https://github.com/havenhq/revideo/issues/520)) ([93b5e08](https://github.com/havenhq/revideo/commit/93b5e088b4a4fda0d2177cb2cc6680c34fa72d30)), closes [#519](https://github.com/havenhq/revideo/issues/519)
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* **2d:** expand animations and reduced motion ([#671](https://github.com/havenhq/revideo/issues/671)) ([b8e9d03](https://github.com/havenhq/revideo/commit/b8e9d03488f8ca7085b3e7e1b095a52f39f2bc89))
* **2d:** visual feedback about rendering process ([#681](https://github.com/havenhq/revideo/issues/681)) ([d0495f5](https://github.com/havenhq/revideo/commit/d0495f5c6396c05454a5323e4486ab4829adbc9e))
* add audio volume control through arrow keys ([#856](https://github.com/havenhq/revideo/issues/856)) ([8b86fd4](https://github.com/havenhq/revideo/commit/8b86fd4e70f91a0d5b1150d760427ca355666341))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add E2E testing ([#101](https://github.com/havenhq/revideo/issues/101)) ([6398c54](https://github.com/havenhq/revideo/commit/6398c54e4c4d6667ce9f45b9bbef6ea110ea2215)), closes [#42](https://github.com/havenhq/revideo/issues/42)
* add experimental features ([#876](https://github.com/havenhq/revideo/issues/876)) ([498d387](https://github.com/havenhq/revideo/commit/498d3871d05d4dcc83453654bec7762d2ab32e7e))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* added file type and quality options to rendering panel ([#50](https://github.com/havenhq/revideo/issues/50)) ([bee71ef](https://github.com/havenhq/revideo/commit/bee71ef2673c269db47a4433831720b7ad0fb4e8)), closes [#24](https://github.com/havenhq/revideo/issues/24)
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* auto meta fields ([#565](https://github.com/havenhq/revideo/issues/565)) ([645af6d](https://github.com/havenhq/revideo/commit/645af6d2b7e8d9332b6f08419c318ee9434d7f3f))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display array values in inspector ([#670](https://github.com/havenhq/revideo/issues/670)) ([e71d74c](https://github.com/havenhq/revideo/commit/e71d74c9c04995393ad8ee942b8e6e5baa6f982f))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* editor improvements ([#121](https://github.com/havenhq/revideo/issues/121)) ([e8b32ce](https://github.com/havenhq/revideo/commit/e8b32ceff1b8216282c4b5713508ce1172645e20))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* meta field descriptions ([#664](https://github.com/havenhq/revideo/issues/664)) ([80c9d07](https://github.com/havenhq/revideo/commit/80c9d07f88f4a3df0f99e5741b31313f891a5d51))
* minor console improvements ([#145](https://github.com/havenhq/revideo/issues/145)) ([3e32e73](https://github.com/havenhq/revideo/commit/3e32e73434ad872049af9e3f1f711bc0185410f4))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* navigate to slide source ([#490](https://github.com/havenhq/revideo/issues/490)) ([b5ae4bf](https://github.com/havenhq/revideo/commit/b5ae4bf37076b262a20949cca030db3902186c8d))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* new plugin hooks ([#723](https://github.com/havenhq/revideo/issues/723)) ([9a2b5ab](https://github.com/havenhq/revideo/commit/9a2b5ab8be0d001414fd00da3053d408e00fd1cd))
* open time events in editor ([#87](https://github.com/havenhq/revideo/issues/87)) ([74b781d](https://github.com/havenhq/revideo/commit/74b781d57fca7ef1d10904673276f2a7354c01b8))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* **ui:** add color picker ([#691](https://github.com/havenhq/revideo/issues/691)) ([a33059c](https://github.com/havenhq/revideo/commit/a33059c0f455814919db31bc9e5e932907c797e4))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** add direct range selection & playhead shortcuts ([#907](https://github.com/havenhq/revideo/issues/907)) ([39264fc](https://github.com/havenhq/revideo/commit/39264fc074da739efddf24ef080f6c5f279f8014))
* **ui:** add external link to docs ([#346](https://github.com/havenhq/revideo/issues/346)) ([fc4ee5d](https://github.com/havenhq/revideo/commit/fc4ee5d028312904ed9e11c5341ac00f36e7242b))
* **ui:** add goto start and goto end buttons ([#814](https://github.com/havenhq/revideo/issues/814)) ([449f194](https://github.com/havenhq/revideo/commit/449f1946474af9886135571c14c83b8440bdf28c))
* **ui:** add number input dragging ([#917](https://github.com/havenhq/revideo/issues/917)) ([1b5c232](https://github.com/havenhq/revideo/commit/1b5c23260c3015608f202a103b4c0aebd1860e36)), closes [#799](https://github.com/havenhq/revideo/issues/799)
* **ui:** add quarter resolution ([#421](https://github.com/havenhq/revideo/issues/421)) ([d0160d0](https://github.com/havenhq/revideo/commit/d0160d0d5ef76ffb0d3591566891b5efa4061744))
* **ui:** add shortcuts to button titles ([#532](https://github.com/havenhq/revideo/issues/532)) ([3549dd3](https://github.com/havenhq/revideo/commit/3549dd3fd7ef47376a5a2dd516609499d3985ac3))
* **ui:** add volume slider ([#872](https://github.com/havenhq/revideo/issues/872)) ([5ac3069](https://github.com/havenhq/revideo/commit/5ac3069f027ee123c212217dcf8d26a78a3aa106))
* **ui:** custom checkbox style ([#529](https://github.com/havenhq/revideo/issues/529)) ([af98db1](https://github.com/havenhq/revideo/commit/af98db103d66e8af059dc483d49984b9adb9b95c))
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** estimate remaining rendering time ([#795](https://github.com/havenhq/revideo/issues/795)) ([1a46148](https://github.com/havenhq/revideo/commit/1a4614801869ab36827ca857d66eed8de9cffd09)), closes [#784](https://github.com/havenhq/revideo/issues/784)
* **ui:** improve rendering button ([#662](https://github.com/havenhq/revideo/issues/662)) ([2b4ae70](https://github.com/havenhq/revideo/commit/2b4ae70ea0b0305fbb2596e95bbc70440718bbe2))
* **ui:** include function names in stack traces ([#693](https://github.com/havenhq/revideo/issues/693)) ([835c0fa](https://github.com/havenhq/revideo/commit/835c0fa4b70429db6fe96be96d6d9e44949f7f6c))
* **ui:** list available shortcuts ([#444](https://github.com/havenhq/revideo/issues/444)) ([443fcc9](https://github.com/havenhq/revideo/commit/443fcc9feb1a1ca69aecbc4db2e194ce4f50f72e))
* **ui:** make inspector toggleable ([#921](https://github.com/havenhq/revideo/issues/921)) ([a365951](https://github.com/havenhq/revideo/commit/a365951e69c01cac1ea23d173034ad83f988c8eb))
* **ui:** new sidebar ([#692](https://github.com/havenhq/revideo/issues/692)) ([b555ee1](https://github.com/havenhq/revideo/commit/b555ee1d10f8a6e1b380c043dff2717ffa01a068)), closes [#492](https://github.com/havenhq/revideo/issues/492)
* **ui:** presentation interface ([#487](https://github.com/havenhq/revideo/issues/487)) ([1899f02](https://github.com/havenhq/revideo/commit/1899f020fb1c0b2136de4401e6fc068bcf5e0cc4))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** shift + right arrow moves to last frame ([#354](https://github.com/havenhq/revideo/issues/354)) ([4b81709](https://github.com/havenhq/revideo/commit/4b8170971400c5bf4fe690a58d3f44c3e1d00b94)), closes [#353](https://github.com/havenhq/revideo/issues/353)
* **ui:** small improvements ([#833](https://github.com/havenhq/revideo/issues/833)) ([f44400c](https://github.com/havenhq/revideo/commit/f44400c458a1d7f49520494f01efb9936f4df83e))
* **ui:** timeline dragging ([#794](https://github.com/havenhq/revideo/issues/794)) ([248e454](https://github.com/havenhq/revideo/commit/248e4546367f9d99221f64b811a07d54a9988e48)), closes [#699](https://github.com/havenhq/revideo/issues/699)
* **ui:** timeline overhaul ([#47](https://github.com/havenhq/revideo/issues/47)) ([4232a60](https://github.com/havenhq/revideo/commit/4232a6072540b54451e99e18c1001db0175bb93f)), closes [#20](https://github.com/havenhq/revideo/issues/20)
* **ui:** timeline scrubbing ([#862](https://github.com/havenhq/revideo/issues/862)) ([211b9a4](https://github.com/havenhq/revideo/commit/211b9a4327720afd1ce0ff93868a501c2fd745aa)), closes [#286](https://github.com/havenhq/revideo/issues/286)
* **ui:** vertical line on time event ([#808](https://github.com/havenhq/revideo/issues/808)) ([18015d6](https://github.com/havenhq/revideo/commit/18015d6714ffe2a6255f26895aa9a7c1908a4f7a)), closes [#804](https://github.com/havenhq/revideo/issues/804)
* **ui:** visual changes ([#96](https://github.com/havenhq/revideo/issues/96)) ([3d599f4](https://github.com/havenhq/revideo/commit/3d599f4e1788fbd15e996be8bf95679f1c6787bd))
* **ui:** zoom controls ([#531](https://github.com/havenhq/revideo/issues/531)) ([752350d](https://github.com/havenhq/revideo/commit/752350d0c547e21806f1b70a5c68025012e5ec11))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
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

* **2d:** fix audio offset editing ([#674](https://github.com/havenhq/revideo/issues/674)) ([58d6ef7](https://github.com/havenhq/revideo/commit/58d6ef79fa06e377e0c1821efe73585586d124a6))
* **2d:** fix performance issue with audio track ([#427](https://github.com/havenhq/revideo/issues/427)) ([c993770](https://github.com/havenhq/revideo/commit/c993770937ddfdf0ac39b144a1f79f1a300f7899))
* **2d:** fix version link ([#608](https://github.com/havenhq/revideo/issues/608)) ([4fe5b7a](https://github.com/havenhq/revideo/commit/4fe5b7a5150fbdf43ea50ecf3dc8b4690c0e2e34))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* correctly await re-renders ([#918](https://github.com/havenhq/revideo/issues/918)) ([873a9a3](https://github.com/havenhq/revideo/commit/873a9a3eed2676de4cc7f31fbd5ea58817a80aff))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix player state not being saved ([#85](https://github.com/havenhq/revideo/issues/85)) ([74b54b9](https://github.com/havenhq/revideo/commit/74b54b970d1287e80fe2334a034844ad6a80c23b))
* fix tsdoc comments ([#21](https://github.com/havenhq/revideo/issues/21)) ([4b6cb66](https://github.com/havenhq/revideo/commit/4b6cb660ad82befcfd41188c7a8f9c8c0cba93ed)), closes [#18](https://github.com/havenhq/revideo/issues/18)
* limit fps to positive numbers ([#937](https://github.com/havenhq/revideo/issues/937)) ([c7c0c67](https://github.com/havenhq/revideo/commit/c7c0c6730e1a00e6b23077188bfc2d389e98cff2)), closes [#936](https://github.com/havenhq/revideo/issues/936)
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* support hmr when navigating ([370ea16](https://github.com/havenhq/revideo/commit/370ea1676a1c34313c0fb917c0f0691538f72016))
* the resolution fields in Rendering no longer reset each other ([#73](https://github.com/havenhq/revideo/issues/73)) ([ddabec5](https://github.com/havenhq/revideo/commit/ddabec549be3cecec27cf9f5643b036e12a83472))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** correctly reset zoom ([#432](https://github.com/havenhq/revideo/issues/432)) ([a33ee14](https://github.com/havenhq/revideo/commit/a33ee14dfac3e1fe24c89d76631e23fe4cb625a6))
* **ui:** don't seek when editing time events ([#26](https://github.com/havenhq/revideo/issues/26)) ([524c200](https://github.com/havenhq/revideo/commit/524c200ef1bd6a6f52096d04c2aeed24a24cda6f))
* **ui:** downgrade preact ([#1](https://github.com/havenhq/revideo/issues/1)) ([5f7456f](https://github.com/havenhq/revideo/commit/5f7456fe4c5a1cc76ccd8fed5a6f9a8a4e846d27))
* **ui:** fix "go to source" ([#895](https://github.com/havenhq/revideo/issues/895)) ([ec729de](https://github.com/havenhq/revideo/commit/ec729dea0d65bc69aefc0abd601f365af1c4ed68))
* **ui:** fix collapse ([#698](https://github.com/havenhq/revideo/issues/698)) ([6bd8703](https://github.com/havenhq/revideo/commit/6bd8703ec9b16f55b3817f6a1f9130f17b66c69a))
* **ui:** fix inspector tab ([#374](https://github.com/havenhq/revideo/issues/374)) ([c4cb378](https://github.com/havenhq/revideo/commit/c4cb378c2f9d972bb41542bbe3b3aa314fa1f3ad))
* **ui:** fix new version link ([#505](https://github.com/havenhq/revideo/issues/505)) ([7459e7f](https://github.com/havenhq/revideo/commit/7459e7f8355163f3cb6a3ed791fc41a2962a186e))
* **ui:** fix onChange handlers ([#515](https://github.com/havenhq/revideo/issues/515)) ([a23d06c](https://github.com/havenhq/revideo/commit/a23d06cbf6e29f37a9259e50fe71c482640b83fb))
* **ui:** fix out of range warning ([#939](https://github.com/havenhq/revideo/issues/939)) ([c9f466f](https://github.com/havenhq/revideo/commit/c9f466f20ff1a3e2cb77aa5575823947ef9beeee))
* **ui:** fix play-pause button ([#299](https://github.com/havenhq/revideo/issues/299)) ([191f54a](https://github.com/havenhq/revideo/commit/191f54a0a5a9de2fd2dc27bffc6d21d692ce6f72))
* **ui:** fix snapshot ([#643](https://github.com/havenhq/revideo/issues/643)) ([590216a](https://github.com/havenhq/revideo/commit/590216ac094d6b6ef3e9c773499bc52063f617b1))
* **ui:** fix transparent background ([#886](https://github.com/havenhq/revideo/issues/886)) ([83f652f](https://github.com/havenhq/revideo/commit/83f652fdcfa075f5de24186ffdffd1b7db1d8fc9))
* **ui:** fix typo in viewport ID ([#620](https://github.com/havenhq/revideo/issues/620)) ([3a83f20](https://github.com/havenhq/revideo/commit/3a83f20cb1b8ddc7b95a8e36bf6f3d0cd036693b))
* **ui:** fix zoom to fit ([#561](https://github.com/havenhq/revideo/issues/561)) ([1c947b4](https://github.com/havenhq/revideo/commit/1c947b417e218809f33928d6cbb89d463bdc2e66))
* **ui:** ignore shortcuts when typing ([#521](https://github.com/havenhq/revideo/issues/521)) ([4d3e1a1](https://github.com/havenhq/revideo/commit/4d3e1a13caee2ddd03857961a44dd10a7e1cb32a)), closes [#518](https://github.com/havenhq/revideo/issues/518)
* **ui:** misaligned overlay ([#127](https://github.com/havenhq/revideo/issues/127)) ([0379730](https://github.com/havenhq/revideo/commit/03797302a302e28caf9f2428cfce4a122f827775))
* **ui:** prevent context menu in viewport ([#123](https://github.com/havenhq/revideo/issues/123)) ([0fdd85e](https://github.com/havenhq/revideo/commit/0fdd85ecf5b61907ce1e16f5fb9253540528a8b0))
* **ui:** prevent spawning multiple color pickers ([#747](https://github.com/havenhq/revideo/issues/747)) ([48ffd1f](https://github.com/havenhq/revideo/commit/48ffd1f2eec21f9880e172632a2310f5676e3c19)), closes [#744](https://github.com/havenhq/revideo/issues/744)
* **ui:** prevent timeline scroll when zooming ([#162](https://github.com/havenhq/revideo/issues/162)) ([b8278ae](https://github.com/havenhq/revideo/commit/b8278aeb7b92f215bccbd1aa57de17c9233cff01))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* **ui:** remove glossy <select> effect in Safari ([#292](https://github.com/havenhq/revideo/issues/292)) ([9c062b2](https://github.com/havenhq/revideo/commit/9c062b26e48fbdb1905daae25a3fb34df82307d3))
* **ui:** support small ranges ([#739](https://github.com/havenhq/revideo/issues/739)) ([cf32d8b](https://github.com/havenhq/revideo/commit/cf32d8b08b94f5044987eb554cd250fc79fbc99d)), closes [#738](https://github.com/havenhq/revideo/issues/738)
* **ui:** use signals correctly ([#906](https://github.com/havenhq/revideo/issues/906)) ([f67d691](https://github.com/havenhq/revideo/commit/f67d691b5f2f6358120e9582a1839ef3d49c77b8))
* **ui:** version comparison issue ([#520](https://github.com/havenhq/revideo/issues/520)) ([93b5e08](https://github.com/havenhq/revideo/commit/93b5e088b4a4fda0d2177cb2cc6680c34fa72d30)), closes [#519](https://github.com/havenhq/revideo/issues/519)
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* **2d:** expand animations and reduced motion ([#671](https://github.com/havenhq/revideo/issues/671)) ([b8e9d03](https://github.com/havenhq/revideo/commit/b8e9d03488f8ca7085b3e7e1b095a52f39f2bc89))
* **2d:** visual feedback about rendering process ([#681](https://github.com/havenhq/revideo/issues/681)) ([d0495f5](https://github.com/havenhq/revideo/commit/d0495f5c6396c05454a5323e4486ab4829adbc9e))
* add audio volume control through arrow keys ([#856](https://github.com/havenhq/revideo/issues/856)) ([8b86fd4](https://github.com/havenhq/revideo/commit/8b86fd4e70f91a0d5b1150d760427ca355666341))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add E2E testing ([#101](https://github.com/havenhq/revideo/issues/101)) ([6398c54](https://github.com/havenhq/revideo/commit/6398c54e4c4d6667ce9f45b9bbef6ea110ea2215)), closes [#42](https://github.com/havenhq/revideo/issues/42)
* add experimental features ([#876](https://github.com/havenhq/revideo/issues/876)) ([498d387](https://github.com/havenhq/revideo/commit/498d3871d05d4dcc83453654bec7762d2ab32e7e))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* added file type and quality options to rendering panel ([#50](https://github.com/havenhq/revideo/issues/50)) ([bee71ef](https://github.com/havenhq/revideo/commit/bee71ef2673c269db47a4433831720b7ad0fb4e8)), closes [#24](https://github.com/havenhq/revideo/issues/24)
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* auto meta fields ([#565](https://github.com/havenhq/revideo/issues/565)) ([645af6d](https://github.com/havenhq/revideo/commit/645af6d2b7e8d9332b6f08419c318ee9434d7f3f))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display array values in inspector ([#670](https://github.com/havenhq/revideo/issues/670)) ([e71d74c](https://github.com/havenhq/revideo/commit/e71d74c9c04995393ad8ee942b8e6e5baa6f982f))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* editor improvements ([#121](https://github.com/havenhq/revideo/issues/121)) ([e8b32ce](https://github.com/havenhq/revideo/commit/e8b32ceff1b8216282c4b5713508ce1172645e20))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* meta field descriptions ([#664](https://github.com/havenhq/revideo/issues/664)) ([80c9d07](https://github.com/havenhq/revideo/commit/80c9d07f88f4a3df0f99e5741b31313f891a5d51))
* minor console improvements ([#145](https://github.com/havenhq/revideo/issues/145)) ([3e32e73](https://github.com/havenhq/revideo/commit/3e32e73434ad872049af9e3f1f711bc0185410f4))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* navigate to slide source ([#490](https://github.com/havenhq/revideo/issues/490)) ([b5ae4bf](https://github.com/havenhq/revideo/commit/b5ae4bf37076b262a20949cca030db3902186c8d))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* new plugin hooks ([#723](https://github.com/havenhq/revideo/issues/723)) ([9a2b5ab](https://github.com/havenhq/revideo/commit/9a2b5ab8be0d001414fd00da3053d408e00fd1cd))
* open time events in editor ([#87](https://github.com/havenhq/revideo/issues/87)) ([74b781d](https://github.com/havenhq/revideo/commit/74b781d57fca7ef1d10904673276f2a7354c01b8))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* **ui:** add color picker ([#691](https://github.com/havenhq/revideo/issues/691)) ([a33059c](https://github.com/havenhq/revideo/commit/a33059c0f455814919db31bc9e5e932907c797e4))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** add direct range selection & playhead shortcuts ([#907](https://github.com/havenhq/revideo/issues/907)) ([39264fc](https://github.com/havenhq/revideo/commit/39264fc074da739efddf24ef080f6c5f279f8014))
* **ui:** add external link to docs ([#346](https://github.com/havenhq/revideo/issues/346)) ([fc4ee5d](https://github.com/havenhq/revideo/commit/fc4ee5d028312904ed9e11c5341ac00f36e7242b))
* **ui:** add goto start and goto end buttons ([#814](https://github.com/havenhq/revideo/issues/814)) ([449f194](https://github.com/havenhq/revideo/commit/449f1946474af9886135571c14c83b8440bdf28c))
* **ui:** add number input dragging ([#917](https://github.com/havenhq/revideo/issues/917)) ([1b5c232](https://github.com/havenhq/revideo/commit/1b5c23260c3015608f202a103b4c0aebd1860e36)), closes [#799](https://github.com/havenhq/revideo/issues/799)
* **ui:** add quarter resolution ([#421](https://github.com/havenhq/revideo/issues/421)) ([d0160d0](https://github.com/havenhq/revideo/commit/d0160d0d5ef76ffb0d3591566891b5efa4061744))
* **ui:** add shortcuts to button titles ([#532](https://github.com/havenhq/revideo/issues/532)) ([3549dd3](https://github.com/havenhq/revideo/commit/3549dd3fd7ef47376a5a2dd516609499d3985ac3))
* **ui:** add volume slider ([#872](https://github.com/havenhq/revideo/issues/872)) ([5ac3069](https://github.com/havenhq/revideo/commit/5ac3069f027ee123c212217dcf8d26a78a3aa106))
* **ui:** custom checkbox style ([#529](https://github.com/havenhq/revideo/issues/529)) ([af98db1](https://github.com/havenhq/revideo/commit/af98db103d66e8af059dc483d49984b9adb9b95c))
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** estimate remaining rendering time ([#795](https://github.com/havenhq/revideo/issues/795)) ([1a46148](https://github.com/havenhq/revideo/commit/1a4614801869ab36827ca857d66eed8de9cffd09)), closes [#784](https://github.com/havenhq/revideo/issues/784)
* **ui:** improve rendering button ([#662](https://github.com/havenhq/revideo/issues/662)) ([2b4ae70](https://github.com/havenhq/revideo/commit/2b4ae70ea0b0305fbb2596e95bbc70440718bbe2))
* **ui:** include function names in stack traces ([#693](https://github.com/havenhq/revideo/issues/693)) ([835c0fa](https://github.com/havenhq/revideo/commit/835c0fa4b70429db6fe96be96d6d9e44949f7f6c))
* **ui:** list available shortcuts ([#444](https://github.com/havenhq/revideo/issues/444)) ([443fcc9](https://github.com/havenhq/revideo/commit/443fcc9feb1a1ca69aecbc4db2e194ce4f50f72e))
* **ui:** make inspector toggleable ([#921](https://github.com/havenhq/revideo/issues/921)) ([a365951](https://github.com/havenhq/revideo/commit/a365951e69c01cac1ea23d173034ad83f988c8eb))
* **ui:** new sidebar ([#692](https://github.com/havenhq/revideo/issues/692)) ([b555ee1](https://github.com/havenhq/revideo/commit/b555ee1d10f8a6e1b380c043dff2717ffa01a068)), closes [#492](https://github.com/havenhq/revideo/issues/492)
* **ui:** presentation interface ([#487](https://github.com/havenhq/revideo/issues/487)) ([1899f02](https://github.com/havenhq/revideo/commit/1899f020fb1c0b2136de4401e6fc068bcf5e0cc4))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** shift + right arrow moves to last frame ([#354](https://github.com/havenhq/revideo/issues/354)) ([4b81709](https://github.com/havenhq/revideo/commit/4b8170971400c5bf4fe690a58d3f44c3e1d00b94)), closes [#353](https://github.com/havenhq/revideo/issues/353)
* **ui:** small improvements ([#833](https://github.com/havenhq/revideo/issues/833)) ([f44400c](https://github.com/havenhq/revideo/commit/f44400c458a1d7f49520494f01efb9936f4df83e))
* **ui:** timeline dragging ([#794](https://github.com/havenhq/revideo/issues/794)) ([248e454](https://github.com/havenhq/revideo/commit/248e4546367f9d99221f64b811a07d54a9988e48)), closes [#699](https://github.com/havenhq/revideo/issues/699)
* **ui:** timeline overhaul ([#47](https://github.com/havenhq/revideo/issues/47)) ([4232a60](https://github.com/havenhq/revideo/commit/4232a6072540b54451e99e18c1001db0175bb93f)), closes [#20](https://github.com/havenhq/revideo/issues/20)
* **ui:** timeline scrubbing ([#862](https://github.com/havenhq/revideo/issues/862)) ([211b9a4](https://github.com/havenhq/revideo/commit/211b9a4327720afd1ce0ff93868a501c2fd745aa)), closes [#286](https://github.com/havenhq/revideo/issues/286)
* **ui:** vertical line on time event ([#808](https://github.com/havenhq/revideo/issues/808)) ([18015d6](https://github.com/havenhq/revideo/commit/18015d6714ffe2a6255f26895aa9a7c1908a4f7a)), closes [#804](https://github.com/havenhq/revideo/issues/804)
* **ui:** visual changes ([#96](https://github.com/havenhq/revideo/issues/96)) ([3d599f4](https://github.com/havenhq/revideo/commit/3d599f4e1788fbd15e996be8bf95679f1c6787bd))
* **ui:** zoom controls ([#531](https://github.com/havenhq/revideo/issues/531)) ([752350d](https://github.com/havenhq/revideo/commit/752350d0c547e21806f1b70a5c68025012e5ec11))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
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

* **2d:** fix audio offset editing ([#674](https://github.com/havenhq/revideo/issues/674)) ([58d6ef7](https://github.com/havenhq/revideo/commit/58d6ef79fa06e377e0c1821efe73585586d124a6))
* **2d:** fix performance issue with audio track ([#427](https://github.com/havenhq/revideo/issues/427)) ([c993770](https://github.com/havenhq/revideo/commit/c993770937ddfdf0ac39b144a1f79f1a300f7899))
* **2d:** fix version link ([#608](https://github.com/havenhq/revideo/issues/608)) ([4fe5b7a](https://github.com/havenhq/revideo/commit/4fe5b7a5150fbdf43ea50ecf3dc8b4690c0e2e34))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* correctly await re-renders ([#918](https://github.com/havenhq/revideo/issues/918)) ([873a9a3](https://github.com/havenhq/revideo/commit/873a9a3eed2676de4cc7f31fbd5ea58817a80aff))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix player state not being saved ([#85](https://github.com/havenhq/revideo/issues/85)) ([74b54b9](https://github.com/havenhq/revideo/commit/74b54b970d1287e80fe2334a034844ad6a80c23b))
* fix tsdoc comments ([#21](https://github.com/havenhq/revideo/issues/21)) ([4b6cb66](https://github.com/havenhq/revideo/commit/4b6cb660ad82befcfd41188c7a8f9c8c0cba93ed)), closes [#18](https://github.com/havenhq/revideo/issues/18)
* limit fps to positive numbers ([#937](https://github.com/havenhq/revideo/issues/937)) ([c7c0c67](https://github.com/havenhq/revideo/commit/c7c0c6730e1a00e6b23077188bfc2d389e98cff2)), closes [#936](https://github.com/havenhq/revideo/issues/936)
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* support hmr when navigating ([370ea16](https://github.com/havenhq/revideo/commit/370ea1676a1c34313c0fb917c0f0691538f72016))
* the resolution fields in Rendering no longer reset each other ([#73](https://github.com/havenhq/revideo/issues/73)) ([ddabec5](https://github.com/havenhq/revideo/commit/ddabec549be3cecec27cf9f5643b036e12a83472))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** correctly reset zoom ([#432](https://github.com/havenhq/revideo/issues/432)) ([a33ee14](https://github.com/havenhq/revideo/commit/a33ee14dfac3e1fe24c89d76631e23fe4cb625a6))
* **ui:** don't seek when editing time events ([#26](https://github.com/havenhq/revideo/issues/26)) ([524c200](https://github.com/havenhq/revideo/commit/524c200ef1bd6a6f52096d04c2aeed24a24cda6f))
* **ui:** downgrade preact ([#1](https://github.com/havenhq/revideo/issues/1)) ([5f7456f](https://github.com/havenhq/revideo/commit/5f7456fe4c5a1cc76ccd8fed5a6f9a8a4e846d27))
* **ui:** fix "go to source" ([#895](https://github.com/havenhq/revideo/issues/895)) ([ec729de](https://github.com/havenhq/revideo/commit/ec729dea0d65bc69aefc0abd601f365af1c4ed68))
* **ui:** fix collapse ([#698](https://github.com/havenhq/revideo/issues/698)) ([6bd8703](https://github.com/havenhq/revideo/commit/6bd8703ec9b16f55b3817f6a1f9130f17b66c69a))
* **ui:** fix inspector tab ([#374](https://github.com/havenhq/revideo/issues/374)) ([c4cb378](https://github.com/havenhq/revideo/commit/c4cb378c2f9d972bb41542bbe3b3aa314fa1f3ad))
* **ui:** fix new version link ([#505](https://github.com/havenhq/revideo/issues/505)) ([7459e7f](https://github.com/havenhq/revideo/commit/7459e7f8355163f3cb6a3ed791fc41a2962a186e))
* **ui:** fix onChange handlers ([#515](https://github.com/havenhq/revideo/issues/515)) ([a23d06c](https://github.com/havenhq/revideo/commit/a23d06cbf6e29f37a9259e50fe71c482640b83fb))
* **ui:** fix out of range warning ([#939](https://github.com/havenhq/revideo/issues/939)) ([c9f466f](https://github.com/havenhq/revideo/commit/c9f466f20ff1a3e2cb77aa5575823947ef9beeee))
* **ui:** fix play-pause button ([#299](https://github.com/havenhq/revideo/issues/299)) ([191f54a](https://github.com/havenhq/revideo/commit/191f54a0a5a9de2fd2dc27bffc6d21d692ce6f72))
* **ui:** fix snapshot ([#643](https://github.com/havenhq/revideo/issues/643)) ([590216a](https://github.com/havenhq/revideo/commit/590216ac094d6b6ef3e9c773499bc52063f617b1))
* **ui:** fix transparent background ([#886](https://github.com/havenhq/revideo/issues/886)) ([83f652f](https://github.com/havenhq/revideo/commit/83f652fdcfa075f5de24186ffdffd1b7db1d8fc9))
* **ui:** fix typo in viewport ID ([#620](https://github.com/havenhq/revideo/issues/620)) ([3a83f20](https://github.com/havenhq/revideo/commit/3a83f20cb1b8ddc7b95a8e36bf6f3d0cd036693b))
* **ui:** fix zoom to fit ([#561](https://github.com/havenhq/revideo/issues/561)) ([1c947b4](https://github.com/havenhq/revideo/commit/1c947b417e218809f33928d6cbb89d463bdc2e66))
* **ui:** ignore shortcuts when typing ([#521](https://github.com/havenhq/revideo/issues/521)) ([4d3e1a1](https://github.com/havenhq/revideo/commit/4d3e1a13caee2ddd03857961a44dd10a7e1cb32a)), closes [#518](https://github.com/havenhq/revideo/issues/518)
* **ui:** misaligned overlay ([#127](https://github.com/havenhq/revideo/issues/127)) ([0379730](https://github.com/havenhq/revideo/commit/03797302a302e28caf9f2428cfce4a122f827775))
* **ui:** prevent context menu in viewport ([#123](https://github.com/havenhq/revideo/issues/123)) ([0fdd85e](https://github.com/havenhq/revideo/commit/0fdd85ecf5b61907ce1e16f5fb9253540528a8b0))
* **ui:** prevent spawning multiple color pickers ([#747](https://github.com/havenhq/revideo/issues/747)) ([48ffd1f](https://github.com/havenhq/revideo/commit/48ffd1f2eec21f9880e172632a2310f5676e3c19)), closes [#744](https://github.com/havenhq/revideo/issues/744)
* **ui:** prevent timeline scroll when zooming ([#162](https://github.com/havenhq/revideo/issues/162)) ([b8278ae](https://github.com/havenhq/revideo/commit/b8278aeb7b92f215bccbd1aa57de17c9233cff01))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* **ui:** remove glossy <select> effect in Safari ([#292](https://github.com/havenhq/revideo/issues/292)) ([9c062b2](https://github.com/havenhq/revideo/commit/9c062b26e48fbdb1905daae25a3fb34df82307d3))
* **ui:** support small ranges ([#739](https://github.com/havenhq/revideo/issues/739)) ([cf32d8b](https://github.com/havenhq/revideo/commit/cf32d8b08b94f5044987eb554cd250fc79fbc99d)), closes [#738](https://github.com/havenhq/revideo/issues/738)
* **ui:** use signals correctly ([#906](https://github.com/havenhq/revideo/issues/906)) ([f67d691](https://github.com/havenhq/revideo/commit/f67d691b5f2f6358120e9582a1839ef3d49c77b8))
* **ui:** version comparison issue ([#520](https://github.com/havenhq/revideo/issues/520)) ([93b5e08](https://github.com/havenhq/revideo/commit/93b5e088b4a4fda0d2177cb2cc6680c34fa72d30)), closes [#519](https://github.com/havenhq/revideo/issues/519)
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* **2d:** expand animations and reduced motion ([#671](https://github.com/havenhq/revideo/issues/671)) ([b8e9d03](https://github.com/havenhq/revideo/commit/b8e9d03488f8ca7085b3e7e1b095a52f39f2bc89))
* **2d:** visual feedback about rendering process ([#681](https://github.com/havenhq/revideo/issues/681)) ([d0495f5](https://github.com/havenhq/revideo/commit/d0495f5c6396c05454a5323e4486ab4829adbc9e))
* add audio volume control through arrow keys ([#856](https://github.com/havenhq/revideo/issues/856)) ([8b86fd4](https://github.com/havenhq/revideo/commit/8b86fd4e70f91a0d5b1150d760427ca355666341))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add E2E testing ([#101](https://github.com/havenhq/revideo/issues/101)) ([6398c54](https://github.com/havenhq/revideo/commit/6398c54e4c4d6667ce9f45b9bbef6ea110ea2215)), closes [#42](https://github.com/havenhq/revideo/issues/42)
* add experimental features ([#876](https://github.com/havenhq/revideo/issues/876)) ([498d387](https://github.com/havenhq/revideo/commit/498d3871d05d4dcc83453654bec7762d2ab32e7e))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* added file type and quality options to rendering panel ([#50](https://github.com/havenhq/revideo/issues/50)) ([bee71ef](https://github.com/havenhq/revideo/commit/bee71ef2673c269db47a4433831720b7ad0fb4e8)), closes [#24](https://github.com/havenhq/revideo/issues/24)
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* auto meta fields ([#565](https://github.com/havenhq/revideo/issues/565)) ([645af6d](https://github.com/havenhq/revideo/commit/645af6d2b7e8d9332b6f08419c318ee9434d7f3f))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display array values in inspector ([#670](https://github.com/havenhq/revideo/issues/670)) ([e71d74c](https://github.com/havenhq/revideo/commit/e71d74c9c04995393ad8ee942b8e6e5baa6f982f))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* editor improvements ([#121](https://github.com/havenhq/revideo/issues/121)) ([e8b32ce](https://github.com/havenhq/revideo/commit/e8b32ceff1b8216282c4b5713508ce1172645e20))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* meta field descriptions ([#664](https://github.com/havenhq/revideo/issues/664)) ([80c9d07](https://github.com/havenhq/revideo/commit/80c9d07f88f4a3df0f99e5741b31313f891a5d51))
* minor console improvements ([#145](https://github.com/havenhq/revideo/issues/145)) ([3e32e73](https://github.com/havenhq/revideo/commit/3e32e73434ad872049af9e3f1f711bc0185410f4))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* navigate to slide source ([#490](https://github.com/havenhq/revideo/issues/490)) ([b5ae4bf](https://github.com/havenhq/revideo/commit/b5ae4bf37076b262a20949cca030db3902186c8d))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* new plugin hooks ([#723](https://github.com/havenhq/revideo/issues/723)) ([9a2b5ab](https://github.com/havenhq/revideo/commit/9a2b5ab8be0d001414fd00da3053d408e00fd1cd))
* open time events in editor ([#87](https://github.com/havenhq/revideo/issues/87)) ([74b781d](https://github.com/havenhq/revideo/commit/74b781d57fca7ef1d10904673276f2a7354c01b8))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* **ui:** add color picker ([#691](https://github.com/havenhq/revideo/issues/691)) ([a33059c](https://github.com/havenhq/revideo/commit/a33059c0f455814919db31bc9e5e932907c797e4))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** add direct range selection & playhead shortcuts ([#907](https://github.com/havenhq/revideo/issues/907)) ([39264fc](https://github.com/havenhq/revideo/commit/39264fc074da739efddf24ef080f6c5f279f8014))
* **ui:** add external link to docs ([#346](https://github.com/havenhq/revideo/issues/346)) ([fc4ee5d](https://github.com/havenhq/revideo/commit/fc4ee5d028312904ed9e11c5341ac00f36e7242b))
* **ui:** add goto start and goto end buttons ([#814](https://github.com/havenhq/revideo/issues/814)) ([449f194](https://github.com/havenhq/revideo/commit/449f1946474af9886135571c14c83b8440bdf28c))
* **ui:** add number input dragging ([#917](https://github.com/havenhq/revideo/issues/917)) ([1b5c232](https://github.com/havenhq/revideo/commit/1b5c23260c3015608f202a103b4c0aebd1860e36)), closes [#799](https://github.com/havenhq/revideo/issues/799)
* **ui:** add quarter resolution ([#421](https://github.com/havenhq/revideo/issues/421)) ([d0160d0](https://github.com/havenhq/revideo/commit/d0160d0d5ef76ffb0d3591566891b5efa4061744))
* **ui:** add shortcuts to button titles ([#532](https://github.com/havenhq/revideo/issues/532)) ([3549dd3](https://github.com/havenhq/revideo/commit/3549dd3fd7ef47376a5a2dd516609499d3985ac3))
* **ui:** add volume slider ([#872](https://github.com/havenhq/revideo/issues/872)) ([5ac3069](https://github.com/havenhq/revideo/commit/5ac3069f027ee123c212217dcf8d26a78a3aa106))
* **ui:** custom checkbox style ([#529](https://github.com/havenhq/revideo/issues/529)) ([af98db1](https://github.com/havenhq/revideo/commit/af98db103d66e8af059dc483d49984b9adb9b95c))
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** estimate remaining rendering time ([#795](https://github.com/havenhq/revideo/issues/795)) ([1a46148](https://github.com/havenhq/revideo/commit/1a4614801869ab36827ca857d66eed8de9cffd09)), closes [#784](https://github.com/havenhq/revideo/issues/784)
* **ui:** improve rendering button ([#662](https://github.com/havenhq/revideo/issues/662)) ([2b4ae70](https://github.com/havenhq/revideo/commit/2b4ae70ea0b0305fbb2596e95bbc70440718bbe2))
* **ui:** include function names in stack traces ([#693](https://github.com/havenhq/revideo/issues/693)) ([835c0fa](https://github.com/havenhq/revideo/commit/835c0fa4b70429db6fe96be96d6d9e44949f7f6c))
* **ui:** list available shortcuts ([#444](https://github.com/havenhq/revideo/issues/444)) ([443fcc9](https://github.com/havenhq/revideo/commit/443fcc9feb1a1ca69aecbc4db2e194ce4f50f72e))
* **ui:** make inspector toggleable ([#921](https://github.com/havenhq/revideo/issues/921)) ([a365951](https://github.com/havenhq/revideo/commit/a365951e69c01cac1ea23d173034ad83f988c8eb))
* **ui:** new sidebar ([#692](https://github.com/havenhq/revideo/issues/692)) ([b555ee1](https://github.com/havenhq/revideo/commit/b555ee1d10f8a6e1b380c043dff2717ffa01a068)), closes [#492](https://github.com/havenhq/revideo/issues/492)
* **ui:** presentation interface ([#487](https://github.com/havenhq/revideo/issues/487)) ([1899f02](https://github.com/havenhq/revideo/commit/1899f020fb1c0b2136de4401e6fc068bcf5e0cc4))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** shift + right arrow moves to last frame ([#354](https://github.com/havenhq/revideo/issues/354)) ([4b81709](https://github.com/havenhq/revideo/commit/4b8170971400c5bf4fe690a58d3f44c3e1d00b94)), closes [#353](https://github.com/havenhq/revideo/issues/353)
* **ui:** small improvements ([#833](https://github.com/havenhq/revideo/issues/833)) ([f44400c](https://github.com/havenhq/revideo/commit/f44400c458a1d7f49520494f01efb9936f4df83e))
* **ui:** timeline dragging ([#794](https://github.com/havenhq/revideo/issues/794)) ([248e454](https://github.com/havenhq/revideo/commit/248e4546367f9d99221f64b811a07d54a9988e48)), closes [#699](https://github.com/havenhq/revideo/issues/699)
* **ui:** timeline overhaul ([#47](https://github.com/havenhq/revideo/issues/47)) ([4232a60](https://github.com/havenhq/revideo/commit/4232a6072540b54451e99e18c1001db0175bb93f)), closes [#20](https://github.com/havenhq/revideo/issues/20)
* **ui:** timeline scrubbing ([#862](https://github.com/havenhq/revideo/issues/862)) ([211b9a4](https://github.com/havenhq/revideo/commit/211b9a4327720afd1ce0ff93868a501c2fd745aa)), closes [#286](https://github.com/havenhq/revideo/issues/286)
* **ui:** vertical line on time event ([#808](https://github.com/havenhq/revideo/issues/808)) ([18015d6](https://github.com/havenhq/revideo/commit/18015d6714ffe2a6255f26895aa9a7c1908a4f7a)), closes [#804](https://github.com/havenhq/revideo/issues/804)
* **ui:** visual changes ([#96](https://github.com/havenhq/revideo/issues/96)) ([3d599f4](https://github.com/havenhq/revideo/commit/3d599f4e1788fbd15e996be8bf95679f1c6787bd))
* **ui:** zoom controls ([#531](https://github.com/havenhq/revideo/issues/531)) ([752350d](https://github.com/havenhq/revideo/commit/752350d0c547e21806f1b70a5c68025012e5ec11))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
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

* **2d:** fix audio offset editing ([#674](https://github.com/havenhq/revideo/issues/674)) ([58d6ef7](https://github.com/havenhq/revideo/commit/58d6ef79fa06e377e0c1821efe73585586d124a6))
* **2d:** fix performance issue with audio track ([#427](https://github.com/havenhq/revideo/issues/427)) ([c993770](https://github.com/havenhq/revideo/commit/c993770937ddfdf0ac39b144a1f79f1a300f7899))
* **2d:** fix version link ([#608](https://github.com/havenhq/revideo/issues/608)) ([4fe5b7a](https://github.com/havenhq/revideo/commit/4fe5b7a5150fbdf43ea50ecf3dc8b4690c0e2e34))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* correctly await re-renders ([#918](https://github.com/havenhq/revideo/issues/918)) ([873a9a3](https://github.com/havenhq/revideo/commit/873a9a3eed2676de4cc7f31fbd5ea58817a80aff))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix player state not being saved ([#85](https://github.com/havenhq/revideo/issues/85)) ([74b54b9](https://github.com/havenhq/revideo/commit/74b54b970d1287e80fe2334a034844ad6a80c23b))
* fix tsdoc comments ([#21](https://github.com/havenhq/revideo/issues/21)) ([4b6cb66](https://github.com/havenhq/revideo/commit/4b6cb660ad82befcfd41188c7a8f9c8c0cba93ed)), closes [#18](https://github.com/havenhq/revideo/issues/18)
* limit fps to positive numbers ([#937](https://github.com/havenhq/revideo/issues/937)) ([c7c0c67](https://github.com/havenhq/revideo/commit/c7c0c6730e1a00e6b23077188bfc2d389e98cff2)), closes [#936](https://github.com/havenhq/revideo/issues/936)
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* support hmr when navigating ([370ea16](https://github.com/havenhq/revideo/commit/370ea1676a1c34313c0fb917c0f0691538f72016))
* the resolution fields in Rendering no longer reset each other ([#73](https://github.com/havenhq/revideo/issues/73)) ([ddabec5](https://github.com/havenhq/revideo/commit/ddabec549be3cecec27cf9f5643b036e12a83472))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** correctly reset zoom ([#432](https://github.com/havenhq/revideo/issues/432)) ([a33ee14](https://github.com/havenhq/revideo/commit/a33ee14dfac3e1fe24c89d76631e23fe4cb625a6))
* **ui:** don't seek when editing time events ([#26](https://github.com/havenhq/revideo/issues/26)) ([524c200](https://github.com/havenhq/revideo/commit/524c200ef1bd6a6f52096d04c2aeed24a24cda6f))
* **ui:** downgrade preact ([#1](https://github.com/havenhq/revideo/issues/1)) ([5f7456f](https://github.com/havenhq/revideo/commit/5f7456fe4c5a1cc76ccd8fed5a6f9a8a4e846d27))
* **ui:** fix "go to source" ([#895](https://github.com/havenhq/revideo/issues/895)) ([ec729de](https://github.com/havenhq/revideo/commit/ec729dea0d65bc69aefc0abd601f365af1c4ed68))
* **ui:** fix collapse ([#698](https://github.com/havenhq/revideo/issues/698)) ([6bd8703](https://github.com/havenhq/revideo/commit/6bd8703ec9b16f55b3817f6a1f9130f17b66c69a))
* **ui:** fix inspector tab ([#374](https://github.com/havenhq/revideo/issues/374)) ([c4cb378](https://github.com/havenhq/revideo/commit/c4cb378c2f9d972bb41542bbe3b3aa314fa1f3ad))
* **ui:** fix new version link ([#505](https://github.com/havenhq/revideo/issues/505)) ([7459e7f](https://github.com/havenhq/revideo/commit/7459e7f8355163f3cb6a3ed791fc41a2962a186e))
* **ui:** fix onChange handlers ([#515](https://github.com/havenhq/revideo/issues/515)) ([a23d06c](https://github.com/havenhq/revideo/commit/a23d06cbf6e29f37a9259e50fe71c482640b83fb))
* **ui:** fix out of range warning ([#939](https://github.com/havenhq/revideo/issues/939)) ([c9f466f](https://github.com/havenhq/revideo/commit/c9f466f20ff1a3e2cb77aa5575823947ef9beeee))
* **ui:** fix play-pause button ([#299](https://github.com/havenhq/revideo/issues/299)) ([191f54a](https://github.com/havenhq/revideo/commit/191f54a0a5a9de2fd2dc27bffc6d21d692ce6f72))
* **ui:** fix snapshot ([#643](https://github.com/havenhq/revideo/issues/643)) ([590216a](https://github.com/havenhq/revideo/commit/590216ac094d6b6ef3e9c773499bc52063f617b1))
* **ui:** fix transparent background ([#886](https://github.com/havenhq/revideo/issues/886)) ([83f652f](https://github.com/havenhq/revideo/commit/83f652fdcfa075f5de24186ffdffd1b7db1d8fc9))
* **ui:** fix typo in viewport ID ([#620](https://github.com/havenhq/revideo/issues/620)) ([3a83f20](https://github.com/havenhq/revideo/commit/3a83f20cb1b8ddc7b95a8e36bf6f3d0cd036693b))
* **ui:** fix zoom to fit ([#561](https://github.com/havenhq/revideo/issues/561)) ([1c947b4](https://github.com/havenhq/revideo/commit/1c947b417e218809f33928d6cbb89d463bdc2e66))
* **ui:** ignore shortcuts when typing ([#521](https://github.com/havenhq/revideo/issues/521)) ([4d3e1a1](https://github.com/havenhq/revideo/commit/4d3e1a13caee2ddd03857961a44dd10a7e1cb32a)), closes [#518](https://github.com/havenhq/revideo/issues/518)
* **ui:** misaligned overlay ([#127](https://github.com/havenhq/revideo/issues/127)) ([0379730](https://github.com/havenhq/revideo/commit/03797302a302e28caf9f2428cfce4a122f827775))
* **ui:** prevent context menu in viewport ([#123](https://github.com/havenhq/revideo/issues/123)) ([0fdd85e](https://github.com/havenhq/revideo/commit/0fdd85ecf5b61907ce1e16f5fb9253540528a8b0))
* **ui:** prevent spawning multiple color pickers ([#747](https://github.com/havenhq/revideo/issues/747)) ([48ffd1f](https://github.com/havenhq/revideo/commit/48ffd1f2eec21f9880e172632a2310f5676e3c19)), closes [#744](https://github.com/havenhq/revideo/issues/744)
* **ui:** prevent timeline scroll when zooming ([#162](https://github.com/havenhq/revideo/issues/162)) ([b8278ae](https://github.com/havenhq/revideo/commit/b8278aeb7b92f215bccbd1aa57de17c9233cff01))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* **ui:** remove glossy <select> effect in Safari ([#292](https://github.com/havenhq/revideo/issues/292)) ([9c062b2](https://github.com/havenhq/revideo/commit/9c062b26e48fbdb1905daae25a3fb34df82307d3))
* **ui:** support small ranges ([#739](https://github.com/havenhq/revideo/issues/739)) ([cf32d8b](https://github.com/havenhq/revideo/commit/cf32d8b08b94f5044987eb554cd250fc79fbc99d)), closes [#738](https://github.com/havenhq/revideo/issues/738)
* **ui:** use signals correctly ([#906](https://github.com/havenhq/revideo/issues/906)) ([f67d691](https://github.com/havenhq/revideo/commit/f67d691b5f2f6358120e9582a1839ef3d49c77b8))
* **ui:** version comparison issue ([#520](https://github.com/havenhq/revideo/issues/520)) ([93b5e08](https://github.com/havenhq/revideo/commit/93b5e088b4a4fda0d2177cb2cc6680c34fa72d30)), closes [#519](https://github.com/havenhq/revideo/issues/519)
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* **2d:** expand animations and reduced motion ([#671](https://github.com/havenhq/revideo/issues/671)) ([b8e9d03](https://github.com/havenhq/revideo/commit/b8e9d03488f8ca7085b3e7e1b095a52f39f2bc89))
* **2d:** visual feedback about rendering process ([#681](https://github.com/havenhq/revideo/issues/681)) ([d0495f5](https://github.com/havenhq/revideo/commit/d0495f5c6396c05454a5323e4486ab4829adbc9e))
* add audio volume control through arrow keys ([#856](https://github.com/havenhq/revideo/issues/856)) ([8b86fd4](https://github.com/havenhq/revideo/commit/8b86fd4e70f91a0d5b1150d760427ca355666341))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add E2E testing ([#101](https://github.com/havenhq/revideo/issues/101)) ([6398c54](https://github.com/havenhq/revideo/commit/6398c54e4c4d6667ce9f45b9bbef6ea110ea2215)), closes [#42](https://github.com/havenhq/revideo/issues/42)
* add experimental features ([#876](https://github.com/havenhq/revideo/issues/876)) ([498d387](https://github.com/havenhq/revideo/commit/498d3871d05d4dcc83453654bec7762d2ab32e7e))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* added file type and quality options to rendering panel ([#50](https://github.com/havenhq/revideo/issues/50)) ([bee71ef](https://github.com/havenhq/revideo/commit/bee71ef2673c269db47a4433831720b7ad0fb4e8)), closes [#24](https://github.com/havenhq/revideo/issues/24)
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* auto meta fields ([#565](https://github.com/havenhq/revideo/issues/565)) ([645af6d](https://github.com/havenhq/revideo/commit/645af6d2b7e8d9332b6f08419c318ee9434d7f3f))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display array values in inspector ([#670](https://github.com/havenhq/revideo/issues/670)) ([e71d74c](https://github.com/havenhq/revideo/commit/e71d74c9c04995393ad8ee942b8e6e5baa6f982f))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* editor improvements ([#121](https://github.com/havenhq/revideo/issues/121)) ([e8b32ce](https://github.com/havenhq/revideo/commit/e8b32ceff1b8216282c4b5713508ce1172645e20))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* meta field descriptions ([#664](https://github.com/havenhq/revideo/issues/664)) ([80c9d07](https://github.com/havenhq/revideo/commit/80c9d07f88f4a3df0f99e5741b31313f891a5d51))
* minor console improvements ([#145](https://github.com/havenhq/revideo/issues/145)) ([3e32e73](https://github.com/havenhq/revideo/commit/3e32e73434ad872049af9e3f1f711bc0185410f4))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* navigate to slide source ([#490](https://github.com/havenhq/revideo/issues/490)) ([b5ae4bf](https://github.com/havenhq/revideo/commit/b5ae4bf37076b262a20949cca030db3902186c8d))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* new plugin hooks ([#723](https://github.com/havenhq/revideo/issues/723)) ([9a2b5ab](https://github.com/havenhq/revideo/commit/9a2b5ab8be0d001414fd00da3053d408e00fd1cd))
* open time events in editor ([#87](https://github.com/havenhq/revideo/issues/87)) ([74b781d](https://github.com/havenhq/revideo/commit/74b781d57fca7ef1d10904673276f2a7354c01b8))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* **ui:** add color picker ([#691](https://github.com/havenhq/revideo/issues/691)) ([a33059c](https://github.com/havenhq/revideo/commit/a33059c0f455814919db31bc9e5e932907c797e4))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** add direct range selection & playhead shortcuts ([#907](https://github.com/havenhq/revideo/issues/907)) ([39264fc](https://github.com/havenhq/revideo/commit/39264fc074da739efddf24ef080f6c5f279f8014))
* **ui:** add external link to docs ([#346](https://github.com/havenhq/revideo/issues/346)) ([fc4ee5d](https://github.com/havenhq/revideo/commit/fc4ee5d028312904ed9e11c5341ac00f36e7242b))
* **ui:** add goto start and goto end buttons ([#814](https://github.com/havenhq/revideo/issues/814)) ([449f194](https://github.com/havenhq/revideo/commit/449f1946474af9886135571c14c83b8440bdf28c))
* **ui:** add number input dragging ([#917](https://github.com/havenhq/revideo/issues/917)) ([1b5c232](https://github.com/havenhq/revideo/commit/1b5c23260c3015608f202a103b4c0aebd1860e36)), closes [#799](https://github.com/havenhq/revideo/issues/799)
* **ui:** add quarter resolution ([#421](https://github.com/havenhq/revideo/issues/421)) ([d0160d0](https://github.com/havenhq/revideo/commit/d0160d0d5ef76ffb0d3591566891b5efa4061744))
* **ui:** add shortcuts to button titles ([#532](https://github.com/havenhq/revideo/issues/532)) ([3549dd3](https://github.com/havenhq/revideo/commit/3549dd3fd7ef47376a5a2dd516609499d3985ac3))
* **ui:** add volume slider ([#872](https://github.com/havenhq/revideo/issues/872)) ([5ac3069](https://github.com/havenhq/revideo/commit/5ac3069f027ee123c212217dcf8d26a78a3aa106))
* **ui:** custom checkbox style ([#529](https://github.com/havenhq/revideo/issues/529)) ([af98db1](https://github.com/havenhq/revideo/commit/af98db103d66e8af059dc483d49984b9adb9b95c))
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** estimate remaining rendering time ([#795](https://github.com/havenhq/revideo/issues/795)) ([1a46148](https://github.com/havenhq/revideo/commit/1a4614801869ab36827ca857d66eed8de9cffd09)), closes [#784](https://github.com/havenhq/revideo/issues/784)
* **ui:** improve rendering button ([#662](https://github.com/havenhq/revideo/issues/662)) ([2b4ae70](https://github.com/havenhq/revideo/commit/2b4ae70ea0b0305fbb2596e95bbc70440718bbe2))
* **ui:** include function names in stack traces ([#693](https://github.com/havenhq/revideo/issues/693)) ([835c0fa](https://github.com/havenhq/revideo/commit/835c0fa4b70429db6fe96be96d6d9e44949f7f6c))
* **ui:** list available shortcuts ([#444](https://github.com/havenhq/revideo/issues/444)) ([443fcc9](https://github.com/havenhq/revideo/commit/443fcc9feb1a1ca69aecbc4db2e194ce4f50f72e))
* **ui:** make inspector toggleable ([#921](https://github.com/havenhq/revideo/issues/921)) ([a365951](https://github.com/havenhq/revideo/commit/a365951e69c01cac1ea23d173034ad83f988c8eb))
* **ui:** new sidebar ([#692](https://github.com/havenhq/revideo/issues/692)) ([b555ee1](https://github.com/havenhq/revideo/commit/b555ee1d10f8a6e1b380c043dff2717ffa01a068)), closes [#492](https://github.com/havenhq/revideo/issues/492)
* **ui:** presentation interface ([#487](https://github.com/havenhq/revideo/issues/487)) ([1899f02](https://github.com/havenhq/revideo/commit/1899f020fb1c0b2136de4401e6fc068bcf5e0cc4))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** shift + right arrow moves to last frame ([#354](https://github.com/havenhq/revideo/issues/354)) ([4b81709](https://github.com/havenhq/revideo/commit/4b8170971400c5bf4fe690a58d3f44c3e1d00b94)), closes [#353](https://github.com/havenhq/revideo/issues/353)
* **ui:** small improvements ([#833](https://github.com/havenhq/revideo/issues/833)) ([f44400c](https://github.com/havenhq/revideo/commit/f44400c458a1d7f49520494f01efb9936f4df83e))
* **ui:** timeline dragging ([#794](https://github.com/havenhq/revideo/issues/794)) ([248e454](https://github.com/havenhq/revideo/commit/248e4546367f9d99221f64b811a07d54a9988e48)), closes [#699](https://github.com/havenhq/revideo/issues/699)
* **ui:** timeline overhaul ([#47](https://github.com/havenhq/revideo/issues/47)) ([4232a60](https://github.com/havenhq/revideo/commit/4232a6072540b54451e99e18c1001db0175bb93f)), closes [#20](https://github.com/havenhq/revideo/issues/20)
* **ui:** timeline scrubbing ([#862](https://github.com/havenhq/revideo/issues/862)) ([211b9a4](https://github.com/havenhq/revideo/commit/211b9a4327720afd1ce0ff93868a501c2fd745aa)), closes [#286](https://github.com/havenhq/revideo/issues/286)
* **ui:** vertical line on time event ([#808](https://github.com/havenhq/revideo/issues/808)) ([18015d6](https://github.com/havenhq/revideo/commit/18015d6714ffe2a6255f26895aa9a7c1908a4f7a)), closes [#804](https://github.com/havenhq/revideo/issues/804)
* **ui:** visual changes ([#96](https://github.com/havenhq/revideo/issues/96)) ([3d599f4](https://github.com/havenhq/revideo/commit/3d599f4e1788fbd15e996be8bf95679f1c6787bd))
* **ui:** zoom controls ([#531](https://github.com/havenhq/revideo/issues/531)) ([752350d](https://github.com/havenhq/revideo/commit/752350d0c547e21806f1b70a5c68025012e5ec11))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
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

* **2d:** fix audio offset editing ([#674](https://github.com/havenhq/revideo/issues/674)) ([58d6ef7](https://github.com/havenhq/revideo/commit/58d6ef79fa06e377e0c1821efe73585586d124a6))
* **2d:** fix performance issue with audio track ([#427](https://github.com/havenhq/revideo/issues/427)) ([c993770](https://github.com/havenhq/revideo/commit/c993770937ddfdf0ac39b144a1f79f1a300f7899))
* **2d:** fix version link ([#608](https://github.com/havenhq/revideo/issues/608)) ([4fe5b7a](https://github.com/havenhq/revideo/commit/4fe5b7a5150fbdf43ea50ecf3dc8b4690c0e2e34))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* correctly await re-renders ([#918](https://github.com/havenhq/revideo/issues/918)) ([873a9a3](https://github.com/havenhq/revideo/commit/873a9a3eed2676de4cc7f31fbd5ea58817a80aff))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix player state not being saved ([#85](https://github.com/havenhq/revideo/issues/85)) ([74b54b9](https://github.com/havenhq/revideo/commit/74b54b970d1287e80fe2334a034844ad6a80c23b))
* fix tsdoc comments ([#21](https://github.com/havenhq/revideo/issues/21)) ([4b6cb66](https://github.com/havenhq/revideo/commit/4b6cb660ad82befcfd41188c7a8f9c8c0cba93ed)), closes [#18](https://github.com/havenhq/revideo/issues/18)
* limit fps to positive numbers ([#937](https://github.com/havenhq/revideo/issues/937)) ([c7c0c67](https://github.com/havenhq/revideo/commit/c7c0c6730e1a00e6b23077188bfc2d389e98cff2)), closes [#936](https://github.com/havenhq/revideo/issues/936)
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* support hmr when navigating ([370ea16](https://github.com/havenhq/revideo/commit/370ea1676a1c34313c0fb917c0f0691538f72016))
* the resolution fields in Rendering no longer reset each other ([#73](https://github.com/havenhq/revideo/issues/73)) ([ddabec5](https://github.com/havenhq/revideo/commit/ddabec549be3cecec27cf9f5643b036e12a83472))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** correctly reset zoom ([#432](https://github.com/havenhq/revideo/issues/432)) ([a33ee14](https://github.com/havenhq/revideo/commit/a33ee14dfac3e1fe24c89d76631e23fe4cb625a6))
* **ui:** don't seek when editing time events ([#26](https://github.com/havenhq/revideo/issues/26)) ([524c200](https://github.com/havenhq/revideo/commit/524c200ef1bd6a6f52096d04c2aeed24a24cda6f))
* **ui:** downgrade preact ([#1](https://github.com/havenhq/revideo/issues/1)) ([5f7456f](https://github.com/havenhq/revideo/commit/5f7456fe4c5a1cc76ccd8fed5a6f9a8a4e846d27))
* **ui:** fix "go to source" ([#895](https://github.com/havenhq/revideo/issues/895)) ([ec729de](https://github.com/havenhq/revideo/commit/ec729dea0d65bc69aefc0abd601f365af1c4ed68))
* **ui:** fix collapse ([#698](https://github.com/havenhq/revideo/issues/698)) ([6bd8703](https://github.com/havenhq/revideo/commit/6bd8703ec9b16f55b3817f6a1f9130f17b66c69a))
* **ui:** fix inspector tab ([#374](https://github.com/havenhq/revideo/issues/374)) ([c4cb378](https://github.com/havenhq/revideo/commit/c4cb378c2f9d972bb41542bbe3b3aa314fa1f3ad))
* **ui:** fix new version link ([#505](https://github.com/havenhq/revideo/issues/505)) ([7459e7f](https://github.com/havenhq/revideo/commit/7459e7f8355163f3cb6a3ed791fc41a2962a186e))
* **ui:** fix onChange handlers ([#515](https://github.com/havenhq/revideo/issues/515)) ([a23d06c](https://github.com/havenhq/revideo/commit/a23d06cbf6e29f37a9259e50fe71c482640b83fb))
* **ui:** fix out of range warning ([#939](https://github.com/havenhq/revideo/issues/939)) ([c9f466f](https://github.com/havenhq/revideo/commit/c9f466f20ff1a3e2cb77aa5575823947ef9beeee))
* **ui:** fix play-pause button ([#299](https://github.com/havenhq/revideo/issues/299)) ([191f54a](https://github.com/havenhq/revideo/commit/191f54a0a5a9de2fd2dc27bffc6d21d692ce6f72))
* **ui:** fix snapshot ([#643](https://github.com/havenhq/revideo/issues/643)) ([590216a](https://github.com/havenhq/revideo/commit/590216ac094d6b6ef3e9c773499bc52063f617b1))
* **ui:** fix transparent background ([#886](https://github.com/havenhq/revideo/issues/886)) ([83f652f](https://github.com/havenhq/revideo/commit/83f652fdcfa075f5de24186ffdffd1b7db1d8fc9))
* **ui:** fix typo in viewport ID ([#620](https://github.com/havenhq/revideo/issues/620)) ([3a83f20](https://github.com/havenhq/revideo/commit/3a83f20cb1b8ddc7b95a8e36bf6f3d0cd036693b))
* **ui:** fix zoom to fit ([#561](https://github.com/havenhq/revideo/issues/561)) ([1c947b4](https://github.com/havenhq/revideo/commit/1c947b417e218809f33928d6cbb89d463bdc2e66))
* **ui:** ignore shortcuts when typing ([#521](https://github.com/havenhq/revideo/issues/521)) ([4d3e1a1](https://github.com/havenhq/revideo/commit/4d3e1a13caee2ddd03857961a44dd10a7e1cb32a)), closes [#518](https://github.com/havenhq/revideo/issues/518)
* **ui:** misaligned overlay ([#127](https://github.com/havenhq/revideo/issues/127)) ([0379730](https://github.com/havenhq/revideo/commit/03797302a302e28caf9f2428cfce4a122f827775))
* **ui:** prevent context menu in viewport ([#123](https://github.com/havenhq/revideo/issues/123)) ([0fdd85e](https://github.com/havenhq/revideo/commit/0fdd85ecf5b61907ce1e16f5fb9253540528a8b0))
* **ui:** prevent spawning multiple color pickers ([#747](https://github.com/havenhq/revideo/issues/747)) ([48ffd1f](https://github.com/havenhq/revideo/commit/48ffd1f2eec21f9880e172632a2310f5676e3c19)), closes [#744](https://github.com/havenhq/revideo/issues/744)
* **ui:** prevent timeline scroll when zooming ([#162](https://github.com/havenhq/revideo/issues/162)) ([b8278ae](https://github.com/havenhq/revideo/commit/b8278aeb7b92f215bccbd1aa57de17c9233cff01))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* **ui:** remove glossy <select> effect in Safari ([#292](https://github.com/havenhq/revideo/issues/292)) ([9c062b2](https://github.com/havenhq/revideo/commit/9c062b26e48fbdb1905daae25a3fb34df82307d3))
* **ui:** support small ranges ([#739](https://github.com/havenhq/revideo/issues/739)) ([cf32d8b](https://github.com/havenhq/revideo/commit/cf32d8b08b94f5044987eb554cd250fc79fbc99d)), closes [#738](https://github.com/havenhq/revideo/issues/738)
* **ui:** use signals correctly ([#906](https://github.com/havenhq/revideo/issues/906)) ([f67d691](https://github.com/havenhq/revideo/commit/f67d691b5f2f6358120e9582a1839ef3d49c77b8))
* **ui:** version comparison issue ([#520](https://github.com/havenhq/revideo/issues/520)) ([93b5e08](https://github.com/havenhq/revideo/commit/93b5e088b4a4fda0d2177cb2cc6680c34fa72d30)), closes [#519](https://github.com/havenhq/revideo/issues/519)
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* **2d:** expand animations and reduced motion ([#671](https://github.com/havenhq/revideo/issues/671)) ([b8e9d03](https://github.com/havenhq/revideo/commit/b8e9d03488f8ca7085b3e7e1b095a52f39f2bc89))
* **2d:** visual feedback about rendering process ([#681](https://github.com/havenhq/revideo/issues/681)) ([d0495f5](https://github.com/havenhq/revideo/commit/d0495f5c6396c05454a5323e4486ab4829adbc9e))
* add audio volume control through arrow keys ([#856](https://github.com/havenhq/revideo/issues/856)) ([8b86fd4](https://github.com/havenhq/revideo/commit/8b86fd4e70f91a0d5b1150d760427ca355666341))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add E2E testing ([#101](https://github.com/havenhq/revideo/issues/101)) ([6398c54](https://github.com/havenhq/revideo/commit/6398c54e4c4d6667ce9f45b9bbef6ea110ea2215)), closes [#42](https://github.com/havenhq/revideo/issues/42)
* add experimental features ([#876](https://github.com/havenhq/revideo/issues/876)) ([498d387](https://github.com/havenhq/revideo/commit/498d3871d05d4dcc83453654bec7762d2ab32e7e))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* added file type and quality options to rendering panel ([#50](https://github.com/havenhq/revideo/issues/50)) ([bee71ef](https://github.com/havenhq/revideo/commit/bee71ef2673c269db47a4433831720b7ad0fb4e8)), closes [#24](https://github.com/havenhq/revideo/issues/24)
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* auto meta fields ([#565](https://github.com/havenhq/revideo/issues/565)) ([645af6d](https://github.com/havenhq/revideo/commit/645af6d2b7e8d9332b6f08419c318ee9434d7f3f))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display array values in inspector ([#670](https://github.com/havenhq/revideo/issues/670)) ([e71d74c](https://github.com/havenhq/revideo/commit/e71d74c9c04995393ad8ee942b8e6e5baa6f982f))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* editor improvements ([#121](https://github.com/havenhq/revideo/issues/121)) ([e8b32ce](https://github.com/havenhq/revideo/commit/e8b32ceff1b8216282c4b5713508ce1172645e20))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* meta field descriptions ([#664](https://github.com/havenhq/revideo/issues/664)) ([80c9d07](https://github.com/havenhq/revideo/commit/80c9d07f88f4a3df0f99e5741b31313f891a5d51))
* minor console improvements ([#145](https://github.com/havenhq/revideo/issues/145)) ([3e32e73](https://github.com/havenhq/revideo/commit/3e32e73434ad872049af9e3f1f711bc0185410f4))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* navigate to slide source ([#490](https://github.com/havenhq/revideo/issues/490)) ([b5ae4bf](https://github.com/havenhq/revideo/commit/b5ae4bf37076b262a20949cca030db3902186c8d))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* new plugin hooks ([#723](https://github.com/havenhq/revideo/issues/723)) ([9a2b5ab](https://github.com/havenhq/revideo/commit/9a2b5ab8be0d001414fd00da3053d408e00fd1cd))
* open time events in editor ([#87](https://github.com/havenhq/revideo/issues/87)) ([74b781d](https://github.com/havenhq/revideo/commit/74b781d57fca7ef1d10904673276f2a7354c01b8))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* **ui:** add color picker ([#691](https://github.com/havenhq/revideo/issues/691)) ([a33059c](https://github.com/havenhq/revideo/commit/a33059c0f455814919db31bc9e5e932907c797e4))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** add direct range selection & playhead shortcuts ([#907](https://github.com/havenhq/revideo/issues/907)) ([39264fc](https://github.com/havenhq/revideo/commit/39264fc074da739efddf24ef080f6c5f279f8014))
* **ui:** add external link to docs ([#346](https://github.com/havenhq/revideo/issues/346)) ([fc4ee5d](https://github.com/havenhq/revideo/commit/fc4ee5d028312904ed9e11c5341ac00f36e7242b))
* **ui:** add goto start and goto end buttons ([#814](https://github.com/havenhq/revideo/issues/814)) ([449f194](https://github.com/havenhq/revideo/commit/449f1946474af9886135571c14c83b8440bdf28c))
* **ui:** add number input dragging ([#917](https://github.com/havenhq/revideo/issues/917)) ([1b5c232](https://github.com/havenhq/revideo/commit/1b5c23260c3015608f202a103b4c0aebd1860e36)), closes [#799](https://github.com/havenhq/revideo/issues/799)
* **ui:** add quarter resolution ([#421](https://github.com/havenhq/revideo/issues/421)) ([d0160d0](https://github.com/havenhq/revideo/commit/d0160d0d5ef76ffb0d3591566891b5efa4061744))
* **ui:** add shortcuts to button titles ([#532](https://github.com/havenhq/revideo/issues/532)) ([3549dd3](https://github.com/havenhq/revideo/commit/3549dd3fd7ef47376a5a2dd516609499d3985ac3))
* **ui:** add volume slider ([#872](https://github.com/havenhq/revideo/issues/872)) ([5ac3069](https://github.com/havenhq/revideo/commit/5ac3069f027ee123c212217dcf8d26a78a3aa106))
* **ui:** custom checkbox style ([#529](https://github.com/havenhq/revideo/issues/529)) ([af98db1](https://github.com/havenhq/revideo/commit/af98db103d66e8af059dc483d49984b9adb9b95c))
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** estimate remaining rendering time ([#795](https://github.com/havenhq/revideo/issues/795)) ([1a46148](https://github.com/havenhq/revideo/commit/1a4614801869ab36827ca857d66eed8de9cffd09)), closes [#784](https://github.com/havenhq/revideo/issues/784)
* **ui:** improve rendering button ([#662](https://github.com/havenhq/revideo/issues/662)) ([2b4ae70](https://github.com/havenhq/revideo/commit/2b4ae70ea0b0305fbb2596e95bbc70440718bbe2))
* **ui:** include function names in stack traces ([#693](https://github.com/havenhq/revideo/issues/693)) ([835c0fa](https://github.com/havenhq/revideo/commit/835c0fa4b70429db6fe96be96d6d9e44949f7f6c))
* **ui:** list available shortcuts ([#444](https://github.com/havenhq/revideo/issues/444)) ([443fcc9](https://github.com/havenhq/revideo/commit/443fcc9feb1a1ca69aecbc4db2e194ce4f50f72e))
* **ui:** make inspector toggleable ([#921](https://github.com/havenhq/revideo/issues/921)) ([a365951](https://github.com/havenhq/revideo/commit/a365951e69c01cac1ea23d173034ad83f988c8eb))
* **ui:** new sidebar ([#692](https://github.com/havenhq/revideo/issues/692)) ([b555ee1](https://github.com/havenhq/revideo/commit/b555ee1d10f8a6e1b380c043dff2717ffa01a068)), closes [#492](https://github.com/havenhq/revideo/issues/492)
* **ui:** presentation interface ([#487](https://github.com/havenhq/revideo/issues/487)) ([1899f02](https://github.com/havenhq/revideo/commit/1899f020fb1c0b2136de4401e6fc068bcf5e0cc4))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** shift + right arrow moves to last frame ([#354](https://github.com/havenhq/revideo/issues/354)) ([4b81709](https://github.com/havenhq/revideo/commit/4b8170971400c5bf4fe690a58d3f44c3e1d00b94)), closes [#353](https://github.com/havenhq/revideo/issues/353)
* **ui:** small improvements ([#833](https://github.com/havenhq/revideo/issues/833)) ([f44400c](https://github.com/havenhq/revideo/commit/f44400c458a1d7f49520494f01efb9936f4df83e))
* **ui:** timeline dragging ([#794](https://github.com/havenhq/revideo/issues/794)) ([248e454](https://github.com/havenhq/revideo/commit/248e4546367f9d99221f64b811a07d54a9988e48)), closes [#699](https://github.com/havenhq/revideo/issues/699)
* **ui:** timeline overhaul ([#47](https://github.com/havenhq/revideo/issues/47)) ([4232a60](https://github.com/havenhq/revideo/commit/4232a6072540b54451e99e18c1001db0175bb93f)), closes [#20](https://github.com/havenhq/revideo/issues/20)
* **ui:** timeline scrubbing ([#862](https://github.com/havenhq/revideo/issues/862)) ([211b9a4](https://github.com/havenhq/revideo/commit/211b9a4327720afd1ce0ff93868a501c2fd745aa)), closes [#286](https://github.com/havenhq/revideo/issues/286)
* **ui:** vertical line on time event ([#808](https://github.com/havenhq/revideo/issues/808)) ([18015d6](https://github.com/havenhq/revideo/commit/18015d6714ffe2a6255f26895aa9a7c1908a4f7a)), closes [#804](https://github.com/havenhq/revideo/issues/804)
* **ui:** visual changes ([#96](https://github.com/havenhq/revideo/issues/96)) ([3d599f4](https://github.com/havenhq/revideo/commit/3d599f4e1788fbd15e996be8bf95679f1c6787bd))
* **ui:** zoom controls ([#531](https://github.com/havenhq/revideo/issues/531)) ([752350d](https://github.com/havenhq/revideo/commit/752350d0c547e21806f1b70a5c68025012e5ec11))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
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

* **2d:** fix audio offset editing ([#674](https://github.com/havenhq/revideo/issues/674)) ([58d6ef7](https://github.com/havenhq/revideo/commit/58d6ef79fa06e377e0c1821efe73585586d124a6))
* **2d:** fix performance issue with audio track ([#427](https://github.com/havenhq/revideo/issues/427)) ([c993770](https://github.com/havenhq/revideo/commit/c993770937ddfdf0ac39b144a1f79f1a300f7899))
* **2d:** fix version link ([#608](https://github.com/havenhq/revideo/issues/608)) ([4fe5b7a](https://github.com/havenhq/revideo/commit/4fe5b7a5150fbdf43ea50ecf3dc8b4690c0e2e34))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* correctly await re-renders ([#918](https://github.com/havenhq/revideo/issues/918)) ([873a9a3](https://github.com/havenhq/revideo/commit/873a9a3eed2676de4cc7f31fbd5ea58817a80aff))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix player state not being saved ([#85](https://github.com/havenhq/revideo/issues/85)) ([74b54b9](https://github.com/havenhq/revideo/commit/74b54b970d1287e80fe2334a034844ad6a80c23b))
* fix tsdoc comments ([#21](https://github.com/havenhq/revideo/issues/21)) ([4b6cb66](https://github.com/havenhq/revideo/commit/4b6cb660ad82befcfd41188c7a8f9c8c0cba93ed)), closes [#18](https://github.com/havenhq/revideo/issues/18)
* limit fps to positive numbers ([#937](https://github.com/havenhq/revideo/issues/937)) ([c7c0c67](https://github.com/havenhq/revideo/commit/c7c0c6730e1a00e6b23077188bfc2d389e98cff2)), closes [#936](https://github.com/havenhq/revideo/issues/936)
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* support hmr when navigating ([370ea16](https://github.com/havenhq/revideo/commit/370ea1676a1c34313c0fb917c0f0691538f72016))
* the resolution fields in Rendering no longer reset each other ([#73](https://github.com/havenhq/revideo/issues/73)) ([ddabec5](https://github.com/havenhq/revideo/commit/ddabec549be3cecec27cf9f5643b036e12a83472))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** correctly reset zoom ([#432](https://github.com/havenhq/revideo/issues/432)) ([a33ee14](https://github.com/havenhq/revideo/commit/a33ee14dfac3e1fe24c89d76631e23fe4cb625a6))
* **ui:** don't seek when editing time events ([#26](https://github.com/havenhq/revideo/issues/26)) ([524c200](https://github.com/havenhq/revideo/commit/524c200ef1bd6a6f52096d04c2aeed24a24cda6f))
* **ui:** downgrade preact ([#1](https://github.com/havenhq/revideo/issues/1)) ([5f7456f](https://github.com/havenhq/revideo/commit/5f7456fe4c5a1cc76ccd8fed5a6f9a8a4e846d27))
* **ui:** fix "go to source" ([#895](https://github.com/havenhq/revideo/issues/895)) ([ec729de](https://github.com/havenhq/revideo/commit/ec729dea0d65bc69aefc0abd601f365af1c4ed68))
* **ui:** fix collapse ([#698](https://github.com/havenhq/revideo/issues/698)) ([6bd8703](https://github.com/havenhq/revideo/commit/6bd8703ec9b16f55b3817f6a1f9130f17b66c69a))
* **ui:** fix inspector tab ([#374](https://github.com/havenhq/revideo/issues/374)) ([c4cb378](https://github.com/havenhq/revideo/commit/c4cb378c2f9d972bb41542bbe3b3aa314fa1f3ad))
* **ui:** fix new version link ([#505](https://github.com/havenhq/revideo/issues/505)) ([7459e7f](https://github.com/havenhq/revideo/commit/7459e7f8355163f3cb6a3ed791fc41a2962a186e))
* **ui:** fix onChange handlers ([#515](https://github.com/havenhq/revideo/issues/515)) ([a23d06c](https://github.com/havenhq/revideo/commit/a23d06cbf6e29f37a9259e50fe71c482640b83fb))
* **ui:** fix out of range warning ([#939](https://github.com/havenhq/revideo/issues/939)) ([c9f466f](https://github.com/havenhq/revideo/commit/c9f466f20ff1a3e2cb77aa5575823947ef9beeee))
* **ui:** fix play-pause button ([#299](https://github.com/havenhq/revideo/issues/299)) ([191f54a](https://github.com/havenhq/revideo/commit/191f54a0a5a9de2fd2dc27bffc6d21d692ce6f72))
* **ui:** fix snapshot ([#643](https://github.com/havenhq/revideo/issues/643)) ([590216a](https://github.com/havenhq/revideo/commit/590216ac094d6b6ef3e9c773499bc52063f617b1))
* **ui:** fix transparent background ([#886](https://github.com/havenhq/revideo/issues/886)) ([83f652f](https://github.com/havenhq/revideo/commit/83f652fdcfa075f5de24186ffdffd1b7db1d8fc9))
* **ui:** fix typo in viewport ID ([#620](https://github.com/havenhq/revideo/issues/620)) ([3a83f20](https://github.com/havenhq/revideo/commit/3a83f20cb1b8ddc7b95a8e36bf6f3d0cd036693b))
* **ui:** fix zoom to fit ([#561](https://github.com/havenhq/revideo/issues/561)) ([1c947b4](https://github.com/havenhq/revideo/commit/1c947b417e218809f33928d6cbb89d463bdc2e66))
* **ui:** ignore shortcuts when typing ([#521](https://github.com/havenhq/revideo/issues/521)) ([4d3e1a1](https://github.com/havenhq/revideo/commit/4d3e1a13caee2ddd03857961a44dd10a7e1cb32a)), closes [#518](https://github.com/havenhq/revideo/issues/518)
* **ui:** misaligned overlay ([#127](https://github.com/havenhq/revideo/issues/127)) ([0379730](https://github.com/havenhq/revideo/commit/03797302a302e28caf9f2428cfce4a122f827775))
* **ui:** prevent context menu in viewport ([#123](https://github.com/havenhq/revideo/issues/123)) ([0fdd85e](https://github.com/havenhq/revideo/commit/0fdd85ecf5b61907ce1e16f5fb9253540528a8b0))
* **ui:** prevent spawning multiple color pickers ([#747](https://github.com/havenhq/revideo/issues/747)) ([48ffd1f](https://github.com/havenhq/revideo/commit/48ffd1f2eec21f9880e172632a2310f5676e3c19)), closes [#744](https://github.com/havenhq/revideo/issues/744)
* **ui:** prevent timeline scroll when zooming ([#162](https://github.com/havenhq/revideo/issues/162)) ([b8278ae](https://github.com/havenhq/revideo/commit/b8278aeb7b92f215bccbd1aa57de17c9233cff01))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* **ui:** remove glossy <select> effect in Safari ([#292](https://github.com/havenhq/revideo/issues/292)) ([9c062b2](https://github.com/havenhq/revideo/commit/9c062b26e48fbdb1905daae25a3fb34df82307d3))
* **ui:** support small ranges ([#739](https://github.com/havenhq/revideo/issues/739)) ([cf32d8b](https://github.com/havenhq/revideo/commit/cf32d8b08b94f5044987eb554cd250fc79fbc99d)), closes [#738](https://github.com/havenhq/revideo/issues/738)
* **ui:** use signals correctly ([#906](https://github.com/havenhq/revideo/issues/906)) ([f67d691](https://github.com/havenhq/revideo/commit/f67d691b5f2f6358120e9582a1839ef3d49c77b8))
* **ui:** version comparison issue ([#520](https://github.com/havenhq/revideo/issues/520)) ([93b5e08](https://github.com/havenhq/revideo/commit/93b5e088b4a4fda0d2177cb2cc6680c34fa72d30)), closes [#519](https://github.com/havenhq/revideo/issues/519)
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* **2d:** expand animations and reduced motion ([#671](https://github.com/havenhq/revideo/issues/671)) ([b8e9d03](https://github.com/havenhq/revideo/commit/b8e9d03488f8ca7085b3e7e1b095a52f39f2bc89))
* **2d:** visual feedback about rendering process ([#681](https://github.com/havenhq/revideo/issues/681)) ([d0495f5](https://github.com/havenhq/revideo/commit/d0495f5c6396c05454a5323e4486ab4829adbc9e))
* add audio volume control through arrow keys ([#856](https://github.com/havenhq/revideo/issues/856)) ([8b86fd4](https://github.com/havenhq/revideo/commit/8b86fd4e70f91a0d5b1150d760427ca355666341))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add E2E testing ([#101](https://github.com/havenhq/revideo/issues/101)) ([6398c54](https://github.com/havenhq/revideo/commit/6398c54e4c4d6667ce9f45b9bbef6ea110ea2215)), closes [#42](https://github.com/havenhq/revideo/issues/42)
* add experimental features ([#876](https://github.com/havenhq/revideo/issues/876)) ([498d387](https://github.com/havenhq/revideo/commit/498d3871d05d4dcc83453654bec7762d2ab32e7e))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* added file type and quality options to rendering panel ([#50](https://github.com/havenhq/revideo/issues/50)) ([bee71ef](https://github.com/havenhq/revideo/commit/bee71ef2673c269db47a4433831720b7ad0fb4e8)), closes [#24](https://github.com/havenhq/revideo/issues/24)
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* auto meta fields ([#565](https://github.com/havenhq/revideo/issues/565)) ([645af6d](https://github.com/havenhq/revideo/commit/645af6d2b7e8d9332b6f08419c318ee9434d7f3f))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display array values in inspector ([#670](https://github.com/havenhq/revideo/issues/670)) ([e71d74c](https://github.com/havenhq/revideo/commit/e71d74c9c04995393ad8ee942b8e6e5baa6f982f))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* editor improvements ([#121](https://github.com/havenhq/revideo/issues/121)) ([e8b32ce](https://github.com/havenhq/revideo/commit/e8b32ceff1b8216282c4b5713508ce1172645e20))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* meta field descriptions ([#664](https://github.com/havenhq/revideo/issues/664)) ([80c9d07](https://github.com/havenhq/revideo/commit/80c9d07f88f4a3df0f99e5741b31313f891a5d51))
* minor console improvements ([#145](https://github.com/havenhq/revideo/issues/145)) ([3e32e73](https://github.com/havenhq/revideo/commit/3e32e73434ad872049af9e3f1f711bc0185410f4))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* navigate to slide source ([#490](https://github.com/havenhq/revideo/issues/490)) ([b5ae4bf](https://github.com/havenhq/revideo/commit/b5ae4bf37076b262a20949cca030db3902186c8d))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* new plugin hooks ([#723](https://github.com/havenhq/revideo/issues/723)) ([9a2b5ab](https://github.com/havenhq/revideo/commit/9a2b5ab8be0d001414fd00da3053d408e00fd1cd))
* open time events in editor ([#87](https://github.com/havenhq/revideo/issues/87)) ([74b781d](https://github.com/havenhq/revideo/commit/74b781d57fca7ef1d10904673276f2a7354c01b8))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* **ui:** add color picker ([#691](https://github.com/havenhq/revideo/issues/691)) ([a33059c](https://github.com/havenhq/revideo/commit/a33059c0f455814919db31bc9e5e932907c797e4))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** add direct range selection & playhead shortcuts ([#907](https://github.com/havenhq/revideo/issues/907)) ([39264fc](https://github.com/havenhq/revideo/commit/39264fc074da739efddf24ef080f6c5f279f8014))
* **ui:** add external link to docs ([#346](https://github.com/havenhq/revideo/issues/346)) ([fc4ee5d](https://github.com/havenhq/revideo/commit/fc4ee5d028312904ed9e11c5341ac00f36e7242b))
* **ui:** add goto start and goto end buttons ([#814](https://github.com/havenhq/revideo/issues/814)) ([449f194](https://github.com/havenhq/revideo/commit/449f1946474af9886135571c14c83b8440bdf28c))
* **ui:** add number input dragging ([#917](https://github.com/havenhq/revideo/issues/917)) ([1b5c232](https://github.com/havenhq/revideo/commit/1b5c23260c3015608f202a103b4c0aebd1860e36)), closes [#799](https://github.com/havenhq/revideo/issues/799)
* **ui:** add quarter resolution ([#421](https://github.com/havenhq/revideo/issues/421)) ([d0160d0](https://github.com/havenhq/revideo/commit/d0160d0d5ef76ffb0d3591566891b5efa4061744))
* **ui:** add shortcuts to button titles ([#532](https://github.com/havenhq/revideo/issues/532)) ([3549dd3](https://github.com/havenhq/revideo/commit/3549dd3fd7ef47376a5a2dd516609499d3985ac3))
* **ui:** add volume slider ([#872](https://github.com/havenhq/revideo/issues/872)) ([5ac3069](https://github.com/havenhq/revideo/commit/5ac3069f027ee123c212217dcf8d26a78a3aa106))
* **ui:** custom checkbox style ([#529](https://github.com/havenhq/revideo/issues/529)) ([af98db1](https://github.com/havenhq/revideo/commit/af98db103d66e8af059dc483d49984b9adb9b95c))
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** estimate remaining rendering time ([#795](https://github.com/havenhq/revideo/issues/795)) ([1a46148](https://github.com/havenhq/revideo/commit/1a4614801869ab36827ca857d66eed8de9cffd09)), closes [#784](https://github.com/havenhq/revideo/issues/784)
* **ui:** improve rendering button ([#662](https://github.com/havenhq/revideo/issues/662)) ([2b4ae70](https://github.com/havenhq/revideo/commit/2b4ae70ea0b0305fbb2596e95bbc70440718bbe2))
* **ui:** include function names in stack traces ([#693](https://github.com/havenhq/revideo/issues/693)) ([835c0fa](https://github.com/havenhq/revideo/commit/835c0fa4b70429db6fe96be96d6d9e44949f7f6c))
* **ui:** list available shortcuts ([#444](https://github.com/havenhq/revideo/issues/444)) ([443fcc9](https://github.com/havenhq/revideo/commit/443fcc9feb1a1ca69aecbc4db2e194ce4f50f72e))
* **ui:** make inspector toggleable ([#921](https://github.com/havenhq/revideo/issues/921)) ([a365951](https://github.com/havenhq/revideo/commit/a365951e69c01cac1ea23d173034ad83f988c8eb))
* **ui:** new sidebar ([#692](https://github.com/havenhq/revideo/issues/692)) ([b555ee1](https://github.com/havenhq/revideo/commit/b555ee1d10f8a6e1b380c043dff2717ffa01a068)), closes [#492](https://github.com/havenhq/revideo/issues/492)
* **ui:** presentation interface ([#487](https://github.com/havenhq/revideo/issues/487)) ([1899f02](https://github.com/havenhq/revideo/commit/1899f020fb1c0b2136de4401e6fc068bcf5e0cc4))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** shift + right arrow moves to last frame ([#354](https://github.com/havenhq/revideo/issues/354)) ([4b81709](https://github.com/havenhq/revideo/commit/4b8170971400c5bf4fe690a58d3f44c3e1d00b94)), closes [#353](https://github.com/havenhq/revideo/issues/353)
* **ui:** small improvements ([#833](https://github.com/havenhq/revideo/issues/833)) ([f44400c](https://github.com/havenhq/revideo/commit/f44400c458a1d7f49520494f01efb9936f4df83e))
* **ui:** timeline dragging ([#794](https://github.com/havenhq/revideo/issues/794)) ([248e454](https://github.com/havenhq/revideo/commit/248e4546367f9d99221f64b811a07d54a9988e48)), closes [#699](https://github.com/havenhq/revideo/issues/699)
* **ui:** timeline overhaul ([#47](https://github.com/havenhq/revideo/issues/47)) ([4232a60](https://github.com/havenhq/revideo/commit/4232a6072540b54451e99e18c1001db0175bb93f)), closes [#20](https://github.com/havenhq/revideo/issues/20)
* **ui:** timeline scrubbing ([#862](https://github.com/havenhq/revideo/issues/862)) ([211b9a4](https://github.com/havenhq/revideo/commit/211b9a4327720afd1ce0ff93868a501c2fd745aa)), closes [#286](https://github.com/havenhq/revideo/issues/286)
* **ui:** vertical line on time event ([#808](https://github.com/havenhq/revideo/issues/808)) ([18015d6](https://github.com/havenhq/revideo/commit/18015d6714ffe2a6255f26895aa9a7c1908a4f7a)), closes [#804](https://github.com/havenhq/revideo/issues/804)
* **ui:** visual changes ([#96](https://github.com/havenhq/revideo/issues/96)) ([3d599f4](https://github.com/havenhq/revideo/commit/3d599f4e1788fbd15e996be8bf95679f1c6787bd))
* **ui:** zoom controls ([#531](https://github.com/havenhq/revideo/issues/531)) ([752350d](https://github.com/havenhq/revideo/commit/752350d0c547e21806f1b70a5c68025012e5ec11))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
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

* **2d:** fix audio offset editing ([#674](https://github.com/havenhq/revideo/issues/674)) ([58d6ef7](https://github.com/havenhq/revideo/commit/58d6ef79fa06e377e0c1821efe73585586d124a6))
* **2d:** fix performance issue with audio track ([#427](https://github.com/havenhq/revideo/issues/427)) ([c993770](https://github.com/havenhq/revideo/commit/c993770937ddfdf0ac39b144a1f79f1a300f7899))
* **2d:** fix version link ([#608](https://github.com/havenhq/revideo/issues/608)) ([4fe5b7a](https://github.com/havenhq/revideo/commit/4fe5b7a5150fbdf43ea50ecf3dc8b4690c0e2e34))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* correctly await re-renders ([#918](https://github.com/havenhq/revideo/issues/918)) ([873a9a3](https://github.com/havenhq/revideo/commit/873a9a3eed2676de4cc7f31fbd5ea58817a80aff))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix player state not being saved ([#85](https://github.com/havenhq/revideo/issues/85)) ([74b54b9](https://github.com/havenhq/revideo/commit/74b54b970d1287e80fe2334a034844ad6a80c23b))
* fix tsdoc comments ([#21](https://github.com/havenhq/revideo/issues/21)) ([4b6cb66](https://github.com/havenhq/revideo/commit/4b6cb660ad82befcfd41188c7a8f9c8c0cba93ed)), closes [#18](https://github.com/havenhq/revideo/issues/18)
* limit fps to positive numbers ([#937](https://github.com/havenhq/revideo/issues/937)) ([c7c0c67](https://github.com/havenhq/revideo/commit/c7c0c6730e1a00e6b23077188bfc2d389e98cff2)), closes [#936](https://github.com/havenhq/revideo/issues/936)
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* support hmr when navigating ([370ea16](https://github.com/havenhq/revideo/commit/370ea1676a1c34313c0fb917c0f0691538f72016))
* the resolution fields in Rendering no longer reset each other ([#73](https://github.com/havenhq/revideo/issues/73)) ([ddabec5](https://github.com/havenhq/revideo/commit/ddabec549be3cecec27cf9f5643b036e12a83472))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** correctly reset zoom ([#432](https://github.com/havenhq/revideo/issues/432)) ([a33ee14](https://github.com/havenhq/revideo/commit/a33ee14dfac3e1fe24c89d76631e23fe4cb625a6))
* **ui:** don't seek when editing time events ([#26](https://github.com/havenhq/revideo/issues/26)) ([524c200](https://github.com/havenhq/revideo/commit/524c200ef1bd6a6f52096d04c2aeed24a24cda6f))
* **ui:** downgrade preact ([#1](https://github.com/havenhq/revideo/issues/1)) ([5f7456f](https://github.com/havenhq/revideo/commit/5f7456fe4c5a1cc76ccd8fed5a6f9a8a4e846d27))
* **ui:** fix "go to source" ([#895](https://github.com/havenhq/revideo/issues/895)) ([ec729de](https://github.com/havenhq/revideo/commit/ec729dea0d65bc69aefc0abd601f365af1c4ed68))
* **ui:** fix collapse ([#698](https://github.com/havenhq/revideo/issues/698)) ([6bd8703](https://github.com/havenhq/revideo/commit/6bd8703ec9b16f55b3817f6a1f9130f17b66c69a))
* **ui:** fix inspector tab ([#374](https://github.com/havenhq/revideo/issues/374)) ([c4cb378](https://github.com/havenhq/revideo/commit/c4cb378c2f9d972bb41542bbe3b3aa314fa1f3ad))
* **ui:** fix new version link ([#505](https://github.com/havenhq/revideo/issues/505)) ([7459e7f](https://github.com/havenhq/revideo/commit/7459e7f8355163f3cb6a3ed791fc41a2962a186e))
* **ui:** fix onChange handlers ([#515](https://github.com/havenhq/revideo/issues/515)) ([a23d06c](https://github.com/havenhq/revideo/commit/a23d06cbf6e29f37a9259e50fe71c482640b83fb))
* **ui:** fix out of range warning ([#939](https://github.com/havenhq/revideo/issues/939)) ([c9f466f](https://github.com/havenhq/revideo/commit/c9f466f20ff1a3e2cb77aa5575823947ef9beeee))
* **ui:** fix play-pause button ([#299](https://github.com/havenhq/revideo/issues/299)) ([191f54a](https://github.com/havenhq/revideo/commit/191f54a0a5a9de2fd2dc27bffc6d21d692ce6f72))
* **ui:** fix snapshot ([#643](https://github.com/havenhq/revideo/issues/643)) ([590216a](https://github.com/havenhq/revideo/commit/590216ac094d6b6ef3e9c773499bc52063f617b1))
* **ui:** fix transparent background ([#886](https://github.com/havenhq/revideo/issues/886)) ([83f652f](https://github.com/havenhq/revideo/commit/83f652fdcfa075f5de24186ffdffd1b7db1d8fc9))
* **ui:** fix typo in viewport ID ([#620](https://github.com/havenhq/revideo/issues/620)) ([3a83f20](https://github.com/havenhq/revideo/commit/3a83f20cb1b8ddc7b95a8e36bf6f3d0cd036693b))
* **ui:** fix zoom to fit ([#561](https://github.com/havenhq/revideo/issues/561)) ([1c947b4](https://github.com/havenhq/revideo/commit/1c947b417e218809f33928d6cbb89d463bdc2e66))
* **ui:** ignore shortcuts when typing ([#521](https://github.com/havenhq/revideo/issues/521)) ([4d3e1a1](https://github.com/havenhq/revideo/commit/4d3e1a13caee2ddd03857961a44dd10a7e1cb32a)), closes [#518](https://github.com/havenhq/revideo/issues/518)
* **ui:** misaligned overlay ([#127](https://github.com/havenhq/revideo/issues/127)) ([0379730](https://github.com/havenhq/revideo/commit/03797302a302e28caf9f2428cfce4a122f827775))
* **ui:** prevent context menu in viewport ([#123](https://github.com/havenhq/revideo/issues/123)) ([0fdd85e](https://github.com/havenhq/revideo/commit/0fdd85ecf5b61907ce1e16f5fb9253540528a8b0))
* **ui:** prevent spawning multiple color pickers ([#747](https://github.com/havenhq/revideo/issues/747)) ([48ffd1f](https://github.com/havenhq/revideo/commit/48ffd1f2eec21f9880e172632a2310f5676e3c19)), closes [#744](https://github.com/havenhq/revideo/issues/744)
* **ui:** prevent timeline scroll when zooming ([#162](https://github.com/havenhq/revideo/issues/162)) ([b8278ae](https://github.com/havenhq/revideo/commit/b8278aeb7b92f215bccbd1aa57de17c9233cff01))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* **ui:** remove glossy <select> effect in Safari ([#292](https://github.com/havenhq/revideo/issues/292)) ([9c062b2](https://github.com/havenhq/revideo/commit/9c062b26e48fbdb1905daae25a3fb34df82307d3))
* **ui:** support small ranges ([#739](https://github.com/havenhq/revideo/issues/739)) ([cf32d8b](https://github.com/havenhq/revideo/commit/cf32d8b08b94f5044987eb554cd250fc79fbc99d)), closes [#738](https://github.com/havenhq/revideo/issues/738)
* **ui:** use signals correctly ([#906](https://github.com/havenhq/revideo/issues/906)) ([f67d691](https://github.com/havenhq/revideo/commit/f67d691b5f2f6358120e9582a1839ef3d49c77b8))
* **ui:** version comparison issue ([#520](https://github.com/havenhq/revideo/issues/520)) ([93b5e08](https://github.com/havenhq/revideo/commit/93b5e088b4a4fda0d2177cb2cc6680c34fa72d30)), closes [#519](https://github.com/havenhq/revideo/issues/519)
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* **2d:** expand animations and reduced motion ([#671](https://github.com/havenhq/revideo/issues/671)) ([b8e9d03](https://github.com/havenhq/revideo/commit/b8e9d03488f8ca7085b3e7e1b095a52f39f2bc89))
* **2d:** visual feedback about rendering process ([#681](https://github.com/havenhq/revideo/issues/681)) ([d0495f5](https://github.com/havenhq/revideo/commit/d0495f5c6396c05454a5323e4486ab4829adbc9e))
* add audio volume control through arrow keys ([#856](https://github.com/havenhq/revideo/issues/856)) ([8b86fd4](https://github.com/havenhq/revideo/commit/8b86fd4e70f91a0d5b1150d760427ca355666341))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add E2E testing ([#101](https://github.com/havenhq/revideo/issues/101)) ([6398c54](https://github.com/havenhq/revideo/commit/6398c54e4c4d6667ce9f45b9bbef6ea110ea2215)), closes [#42](https://github.com/havenhq/revideo/issues/42)
* add experimental features ([#876](https://github.com/havenhq/revideo/issues/876)) ([498d387](https://github.com/havenhq/revideo/commit/498d3871d05d4dcc83453654bec7762d2ab32e7e))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* added file type and quality options to rendering panel ([#50](https://github.com/havenhq/revideo/issues/50)) ([bee71ef](https://github.com/havenhq/revideo/commit/bee71ef2673c269db47a4433831720b7ad0fb4e8)), closes [#24](https://github.com/havenhq/revideo/issues/24)
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* auto meta fields ([#565](https://github.com/havenhq/revideo/issues/565)) ([645af6d](https://github.com/havenhq/revideo/commit/645af6d2b7e8d9332b6f08419c318ee9434d7f3f))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display array values in inspector ([#670](https://github.com/havenhq/revideo/issues/670)) ([e71d74c](https://github.com/havenhq/revideo/commit/e71d74c9c04995393ad8ee942b8e6e5baa6f982f))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* editor improvements ([#121](https://github.com/havenhq/revideo/issues/121)) ([e8b32ce](https://github.com/havenhq/revideo/commit/e8b32ceff1b8216282c4b5713508ce1172645e20))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* meta field descriptions ([#664](https://github.com/havenhq/revideo/issues/664)) ([80c9d07](https://github.com/havenhq/revideo/commit/80c9d07f88f4a3df0f99e5741b31313f891a5d51))
* minor console improvements ([#145](https://github.com/havenhq/revideo/issues/145)) ([3e32e73](https://github.com/havenhq/revideo/commit/3e32e73434ad872049af9e3f1f711bc0185410f4))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* navigate to slide source ([#490](https://github.com/havenhq/revideo/issues/490)) ([b5ae4bf](https://github.com/havenhq/revideo/commit/b5ae4bf37076b262a20949cca030db3902186c8d))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* new plugin hooks ([#723](https://github.com/havenhq/revideo/issues/723)) ([9a2b5ab](https://github.com/havenhq/revideo/commit/9a2b5ab8be0d001414fd00da3053d408e00fd1cd))
* open time events in editor ([#87](https://github.com/havenhq/revideo/issues/87)) ([74b781d](https://github.com/havenhq/revideo/commit/74b781d57fca7ef1d10904673276f2a7354c01b8))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* **ui:** add color picker ([#691](https://github.com/havenhq/revideo/issues/691)) ([a33059c](https://github.com/havenhq/revideo/commit/a33059c0f455814919db31bc9e5e932907c797e4))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** add direct range selection & playhead shortcuts ([#907](https://github.com/havenhq/revideo/issues/907)) ([39264fc](https://github.com/havenhq/revideo/commit/39264fc074da739efddf24ef080f6c5f279f8014))
* **ui:** add external link to docs ([#346](https://github.com/havenhq/revideo/issues/346)) ([fc4ee5d](https://github.com/havenhq/revideo/commit/fc4ee5d028312904ed9e11c5341ac00f36e7242b))
* **ui:** add goto start and goto end buttons ([#814](https://github.com/havenhq/revideo/issues/814)) ([449f194](https://github.com/havenhq/revideo/commit/449f1946474af9886135571c14c83b8440bdf28c))
* **ui:** add number input dragging ([#917](https://github.com/havenhq/revideo/issues/917)) ([1b5c232](https://github.com/havenhq/revideo/commit/1b5c23260c3015608f202a103b4c0aebd1860e36)), closes [#799](https://github.com/havenhq/revideo/issues/799)
* **ui:** add quarter resolution ([#421](https://github.com/havenhq/revideo/issues/421)) ([d0160d0](https://github.com/havenhq/revideo/commit/d0160d0d5ef76ffb0d3591566891b5efa4061744))
* **ui:** add shortcuts to button titles ([#532](https://github.com/havenhq/revideo/issues/532)) ([3549dd3](https://github.com/havenhq/revideo/commit/3549dd3fd7ef47376a5a2dd516609499d3985ac3))
* **ui:** add volume slider ([#872](https://github.com/havenhq/revideo/issues/872)) ([5ac3069](https://github.com/havenhq/revideo/commit/5ac3069f027ee123c212217dcf8d26a78a3aa106))
* **ui:** custom checkbox style ([#529](https://github.com/havenhq/revideo/issues/529)) ([af98db1](https://github.com/havenhq/revideo/commit/af98db103d66e8af059dc483d49984b9adb9b95c))
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** estimate remaining rendering time ([#795](https://github.com/havenhq/revideo/issues/795)) ([1a46148](https://github.com/havenhq/revideo/commit/1a4614801869ab36827ca857d66eed8de9cffd09)), closes [#784](https://github.com/havenhq/revideo/issues/784)
* **ui:** improve rendering button ([#662](https://github.com/havenhq/revideo/issues/662)) ([2b4ae70](https://github.com/havenhq/revideo/commit/2b4ae70ea0b0305fbb2596e95bbc70440718bbe2))
* **ui:** include function names in stack traces ([#693](https://github.com/havenhq/revideo/issues/693)) ([835c0fa](https://github.com/havenhq/revideo/commit/835c0fa4b70429db6fe96be96d6d9e44949f7f6c))
* **ui:** list available shortcuts ([#444](https://github.com/havenhq/revideo/issues/444)) ([443fcc9](https://github.com/havenhq/revideo/commit/443fcc9feb1a1ca69aecbc4db2e194ce4f50f72e))
* **ui:** make inspector toggleable ([#921](https://github.com/havenhq/revideo/issues/921)) ([a365951](https://github.com/havenhq/revideo/commit/a365951e69c01cac1ea23d173034ad83f988c8eb))
* **ui:** new sidebar ([#692](https://github.com/havenhq/revideo/issues/692)) ([b555ee1](https://github.com/havenhq/revideo/commit/b555ee1d10f8a6e1b380c043dff2717ffa01a068)), closes [#492](https://github.com/havenhq/revideo/issues/492)
* **ui:** presentation interface ([#487](https://github.com/havenhq/revideo/issues/487)) ([1899f02](https://github.com/havenhq/revideo/commit/1899f020fb1c0b2136de4401e6fc068bcf5e0cc4))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** shift + right arrow moves to last frame ([#354](https://github.com/havenhq/revideo/issues/354)) ([4b81709](https://github.com/havenhq/revideo/commit/4b8170971400c5bf4fe690a58d3f44c3e1d00b94)), closes [#353](https://github.com/havenhq/revideo/issues/353)
* **ui:** small improvements ([#833](https://github.com/havenhq/revideo/issues/833)) ([f44400c](https://github.com/havenhq/revideo/commit/f44400c458a1d7f49520494f01efb9936f4df83e))
* **ui:** timeline dragging ([#794](https://github.com/havenhq/revideo/issues/794)) ([248e454](https://github.com/havenhq/revideo/commit/248e4546367f9d99221f64b811a07d54a9988e48)), closes [#699](https://github.com/havenhq/revideo/issues/699)
* **ui:** timeline overhaul ([#47](https://github.com/havenhq/revideo/issues/47)) ([4232a60](https://github.com/havenhq/revideo/commit/4232a6072540b54451e99e18c1001db0175bb93f)), closes [#20](https://github.com/havenhq/revideo/issues/20)
* **ui:** timeline scrubbing ([#862](https://github.com/havenhq/revideo/issues/862)) ([211b9a4](https://github.com/havenhq/revideo/commit/211b9a4327720afd1ce0ff93868a501c2fd745aa)), closes [#286](https://github.com/havenhq/revideo/issues/286)
* **ui:** vertical line on time event ([#808](https://github.com/havenhq/revideo/issues/808)) ([18015d6](https://github.com/havenhq/revideo/commit/18015d6714ffe2a6255f26895aa9a7c1908a4f7a)), closes [#804](https://github.com/havenhq/revideo/issues/804)
* **ui:** visual changes ([#96](https://github.com/havenhq/revideo/issues/96)) ([3d599f4](https://github.com/havenhq/revideo/commit/3d599f4e1788fbd15e996be8bf95679f1c6787bd))
* **ui:** zoom controls ([#531](https://github.com/havenhq/revideo/issues/531)) ([752350d](https://github.com/havenhq/revideo/commit/752350d0c547e21806f1b70a5c68025012e5ec11))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
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

* **2d:** fix audio offset editing ([#674](https://github.com/havenhq/revideo/issues/674)) ([58d6ef7](https://github.com/havenhq/revideo/commit/58d6ef79fa06e377e0c1821efe73585586d124a6))
* **2d:** fix performance issue with audio track ([#427](https://github.com/havenhq/revideo/issues/427)) ([c993770](https://github.com/havenhq/revideo/commit/c993770937ddfdf0ac39b144a1f79f1a300f7899))
* **2d:** fix version link ([#608](https://github.com/havenhq/revideo/issues/608)) ([4fe5b7a](https://github.com/havenhq/revideo/commit/4fe5b7a5150fbdf43ea50ecf3dc8b4690c0e2e34))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* correctly await re-renders ([#918](https://github.com/havenhq/revideo/issues/918)) ([873a9a3](https://github.com/havenhq/revideo/commit/873a9a3eed2676de4cc7f31fbd5ea58817a80aff))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix player state not being saved ([#85](https://github.com/havenhq/revideo/issues/85)) ([74b54b9](https://github.com/havenhq/revideo/commit/74b54b970d1287e80fe2334a034844ad6a80c23b))
* fix tsdoc comments ([#21](https://github.com/havenhq/revideo/issues/21)) ([4b6cb66](https://github.com/havenhq/revideo/commit/4b6cb660ad82befcfd41188c7a8f9c8c0cba93ed)), closes [#18](https://github.com/havenhq/revideo/issues/18)
* limit fps to positive numbers ([#937](https://github.com/havenhq/revideo/issues/937)) ([c7c0c67](https://github.com/havenhq/revideo/commit/c7c0c6730e1a00e6b23077188bfc2d389e98cff2)), closes [#936](https://github.com/havenhq/revideo/issues/936)
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* support hmr when navigating ([370ea16](https://github.com/havenhq/revideo/commit/370ea1676a1c34313c0fb917c0f0691538f72016))
* the resolution fields in Rendering no longer reset each other ([#73](https://github.com/havenhq/revideo/issues/73)) ([ddabec5](https://github.com/havenhq/revideo/commit/ddabec549be3cecec27cf9f5643b036e12a83472))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** correctly reset zoom ([#432](https://github.com/havenhq/revideo/issues/432)) ([a33ee14](https://github.com/havenhq/revideo/commit/a33ee14dfac3e1fe24c89d76631e23fe4cb625a6))
* **ui:** don't seek when editing time events ([#26](https://github.com/havenhq/revideo/issues/26)) ([524c200](https://github.com/havenhq/revideo/commit/524c200ef1bd6a6f52096d04c2aeed24a24cda6f))
* **ui:** downgrade preact ([#1](https://github.com/havenhq/revideo/issues/1)) ([5f7456f](https://github.com/havenhq/revideo/commit/5f7456fe4c5a1cc76ccd8fed5a6f9a8a4e846d27))
* **ui:** fix "go to source" ([#895](https://github.com/havenhq/revideo/issues/895)) ([ec729de](https://github.com/havenhq/revideo/commit/ec729dea0d65bc69aefc0abd601f365af1c4ed68))
* **ui:** fix collapse ([#698](https://github.com/havenhq/revideo/issues/698)) ([6bd8703](https://github.com/havenhq/revideo/commit/6bd8703ec9b16f55b3817f6a1f9130f17b66c69a))
* **ui:** fix inspector tab ([#374](https://github.com/havenhq/revideo/issues/374)) ([c4cb378](https://github.com/havenhq/revideo/commit/c4cb378c2f9d972bb41542bbe3b3aa314fa1f3ad))
* **ui:** fix new version link ([#505](https://github.com/havenhq/revideo/issues/505)) ([7459e7f](https://github.com/havenhq/revideo/commit/7459e7f8355163f3cb6a3ed791fc41a2962a186e))
* **ui:** fix onChange handlers ([#515](https://github.com/havenhq/revideo/issues/515)) ([a23d06c](https://github.com/havenhq/revideo/commit/a23d06cbf6e29f37a9259e50fe71c482640b83fb))
* **ui:** fix out of range warning ([#939](https://github.com/havenhq/revideo/issues/939)) ([c9f466f](https://github.com/havenhq/revideo/commit/c9f466f20ff1a3e2cb77aa5575823947ef9beeee))
* **ui:** fix play-pause button ([#299](https://github.com/havenhq/revideo/issues/299)) ([191f54a](https://github.com/havenhq/revideo/commit/191f54a0a5a9de2fd2dc27bffc6d21d692ce6f72))
* **ui:** fix snapshot ([#643](https://github.com/havenhq/revideo/issues/643)) ([590216a](https://github.com/havenhq/revideo/commit/590216ac094d6b6ef3e9c773499bc52063f617b1))
* **ui:** fix transparent background ([#886](https://github.com/havenhq/revideo/issues/886)) ([83f652f](https://github.com/havenhq/revideo/commit/83f652fdcfa075f5de24186ffdffd1b7db1d8fc9))
* **ui:** fix typo in viewport ID ([#620](https://github.com/havenhq/revideo/issues/620)) ([3a83f20](https://github.com/havenhq/revideo/commit/3a83f20cb1b8ddc7b95a8e36bf6f3d0cd036693b))
* **ui:** fix zoom to fit ([#561](https://github.com/havenhq/revideo/issues/561)) ([1c947b4](https://github.com/havenhq/revideo/commit/1c947b417e218809f33928d6cbb89d463bdc2e66))
* **ui:** ignore shortcuts when typing ([#521](https://github.com/havenhq/revideo/issues/521)) ([4d3e1a1](https://github.com/havenhq/revideo/commit/4d3e1a13caee2ddd03857961a44dd10a7e1cb32a)), closes [#518](https://github.com/havenhq/revideo/issues/518)
* **ui:** misaligned overlay ([#127](https://github.com/havenhq/revideo/issues/127)) ([0379730](https://github.com/havenhq/revideo/commit/03797302a302e28caf9f2428cfce4a122f827775))
* **ui:** prevent context menu in viewport ([#123](https://github.com/havenhq/revideo/issues/123)) ([0fdd85e](https://github.com/havenhq/revideo/commit/0fdd85ecf5b61907ce1e16f5fb9253540528a8b0))
* **ui:** prevent spawning multiple color pickers ([#747](https://github.com/havenhq/revideo/issues/747)) ([48ffd1f](https://github.com/havenhq/revideo/commit/48ffd1f2eec21f9880e172632a2310f5676e3c19)), closes [#744](https://github.com/havenhq/revideo/issues/744)
* **ui:** prevent timeline scroll when zooming ([#162](https://github.com/havenhq/revideo/issues/162)) ([b8278ae](https://github.com/havenhq/revideo/commit/b8278aeb7b92f215bccbd1aa57de17c9233cff01))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* **ui:** remove glossy <select> effect in Safari ([#292](https://github.com/havenhq/revideo/issues/292)) ([9c062b2](https://github.com/havenhq/revideo/commit/9c062b26e48fbdb1905daae25a3fb34df82307d3))
* **ui:** support small ranges ([#739](https://github.com/havenhq/revideo/issues/739)) ([cf32d8b](https://github.com/havenhq/revideo/commit/cf32d8b08b94f5044987eb554cd250fc79fbc99d)), closes [#738](https://github.com/havenhq/revideo/issues/738)
* **ui:** use signals correctly ([#906](https://github.com/havenhq/revideo/issues/906)) ([f67d691](https://github.com/havenhq/revideo/commit/f67d691b5f2f6358120e9582a1839ef3d49c77b8))
* **ui:** version comparison issue ([#520](https://github.com/havenhq/revideo/issues/520)) ([93b5e08](https://github.com/havenhq/revideo/commit/93b5e088b4a4fda0d2177cb2cc6680c34fa72d30)), closes [#519](https://github.com/havenhq/revideo/issues/519)
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* **2d:** expand animations and reduced motion ([#671](https://github.com/havenhq/revideo/issues/671)) ([b8e9d03](https://github.com/havenhq/revideo/commit/b8e9d03488f8ca7085b3e7e1b095a52f39f2bc89))
* **2d:** visual feedback about rendering process ([#681](https://github.com/havenhq/revideo/issues/681)) ([d0495f5](https://github.com/havenhq/revideo/commit/d0495f5c6396c05454a5323e4486ab4829adbc9e))
* add audio volume control through arrow keys ([#856](https://github.com/havenhq/revideo/issues/856)) ([8b86fd4](https://github.com/havenhq/revideo/commit/8b86fd4e70f91a0d5b1150d760427ca355666341))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add E2E testing ([#101](https://github.com/havenhq/revideo/issues/101)) ([6398c54](https://github.com/havenhq/revideo/commit/6398c54e4c4d6667ce9f45b9bbef6ea110ea2215)), closes [#42](https://github.com/havenhq/revideo/issues/42)
* add experimental features ([#876](https://github.com/havenhq/revideo/issues/876)) ([498d387](https://github.com/havenhq/revideo/commit/498d3871d05d4dcc83453654bec7762d2ab32e7e))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* added file type and quality options to rendering panel ([#50](https://github.com/havenhq/revideo/issues/50)) ([bee71ef](https://github.com/havenhq/revideo/commit/bee71ef2673c269db47a4433831720b7ad0fb4e8)), closes [#24](https://github.com/havenhq/revideo/issues/24)
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* auto meta fields ([#565](https://github.com/havenhq/revideo/issues/565)) ([645af6d](https://github.com/havenhq/revideo/commit/645af6d2b7e8d9332b6f08419c318ee9434d7f3f))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display array values in inspector ([#670](https://github.com/havenhq/revideo/issues/670)) ([e71d74c](https://github.com/havenhq/revideo/commit/e71d74c9c04995393ad8ee942b8e6e5baa6f982f))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* editor improvements ([#121](https://github.com/havenhq/revideo/issues/121)) ([e8b32ce](https://github.com/havenhq/revideo/commit/e8b32ceff1b8216282c4b5713508ce1172645e20))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* meta field descriptions ([#664](https://github.com/havenhq/revideo/issues/664)) ([80c9d07](https://github.com/havenhq/revideo/commit/80c9d07f88f4a3df0f99e5741b31313f891a5d51))
* minor console improvements ([#145](https://github.com/havenhq/revideo/issues/145)) ([3e32e73](https://github.com/havenhq/revideo/commit/3e32e73434ad872049af9e3f1f711bc0185410f4))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* navigate to slide source ([#490](https://github.com/havenhq/revideo/issues/490)) ([b5ae4bf](https://github.com/havenhq/revideo/commit/b5ae4bf37076b262a20949cca030db3902186c8d))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* new plugin hooks ([#723](https://github.com/havenhq/revideo/issues/723)) ([9a2b5ab](https://github.com/havenhq/revideo/commit/9a2b5ab8be0d001414fd00da3053d408e00fd1cd))
* open time events in editor ([#87](https://github.com/havenhq/revideo/issues/87)) ([74b781d](https://github.com/havenhq/revideo/commit/74b781d57fca7ef1d10904673276f2a7354c01b8))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* **ui:** add color picker ([#691](https://github.com/havenhq/revideo/issues/691)) ([a33059c](https://github.com/havenhq/revideo/commit/a33059c0f455814919db31bc9e5e932907c797e4))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** add direct range selection & playhead shortcuts ([#907](https://github.com/havenhq/revideo/issues/907)) ([39264fc](https://github.com/havenhq/revideo/commit/39264fc074da739efddf24ef080f6c5f279f8014))
* **ui:** add external link to docs ([#346](https://github.com/havenhq/revideo/issues/346)) ([fc4ee5d](https://github.com/havenhq/revideo/commit/fc4ee5d028312904ed9e11c5341ac00f36e7242b))
* **ui:** add goto start and goto end buttons ([#814](https://github.com/havenhq/revideo/issues/814)) ([449f194](https://github.com/havenhq/revideo/commit/449f1946474af9886135571c14c83b8440bdf28c))
* **ui:** add number input dragging ([#917](https://github.com/havenhq/revideo/issues/917)) ([1b5c232](https://github.com/havenhq/revideo/commit/1b5c23260c3015608f202a103b4c0aebd1860e36)), closes [#799](https://github.com/havenhq/revideo/issues/799)
* **ui:** add quarter resolution ([#421](https://github.com/havenhq/revideo/issues/421)) ([d0160d0](https://github.com/havenhq/revideo/commit/d0160d0d5ef76ffb0d3591566891b5efa4061744))
* **ui:** add shortcuts to button titles ([#532](https://github.com/havenhq/revideo/issues/532)) ([3549dd3](https://github.com/havenhq/revideo/commit/3549dd3fd7ef47376a5a2dd516609499d3985ac3))
* **ui:** add volume slider ([#872](https://github.com/havenhq/revideo/issues/872)) ([5ac3069](https://github.com/havenhq/revideo/commit/5ac3069f027ee123c212217dcf8d26a78a3aa106))
* **ui:** custom checkbox style ([#529](https://github.com/havenhq/revideo/issues/529)) ([af98db1](https://github.com/havenhq/revideo/commit/af98db103d66e8af059dc483d49984b9adb9b95c))
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** estimate remaining rendering time ([#795](https://github.com/havenhq/revideo/issues/795)) ([1a46148](https://github.com/havenhq/revideo/commit/1a4614801869ab36827ca857d66eed8de9cffd09)), closes [#784](https://github.com/havenhq/revideo/issues/784)
* **ui:** improve rendering button ([#662](https://github.com/havenhq/revideo/issues/662)) ([2b4ae70](https://github.com/havenhq/revideo/commit/2b4ae70ea0b0305fbb2596e95bbc70440718bbe2))
* **ui:** include function names in stack traces ([#693](https://github.com/havenhq/revideo/issues/693)) ([835c0fa](https://github.com/havenhq/revideo/commit/835c0fa4b70429db6fe96be96d6d9e44949f7f6c))
* **ui:** list available shortcuts ([#444](https://github.com/havenhq/revideo/issues/444)) ([443fcc9](https://github.com/havenhq/revideo/commit/443fcc9feb1a1ca69aecbc4db2e194ce4f50f72e))
* **ui:** make inspector toggleable ([#921](https://github.com/havenhq/revideo/issues/921)) ([a365951](https://github.com/havenhq/revideo/commit/a365951e69c01cac1ea23d173034ad83f988c8eb))
* **ui:** new sidebar ([#692](https://github.com/havenhq/revideo/issues/692)) ([b555ee1](https://github.com/havenhq/revideo/commit/b555ee1d10f8a6e1b380c043dff2717ffa01a068)), closes [#492](https://github.com/havenhq/revideo/issues/492)
* **ui:** presentation interface ([#487](https://github.com/havenhq/revideo/issues/487)) ([1899f02](https://github.com/havenhq/revideo/commit/1899f020fb1c0b2136de4401e6fc068bcf5e0cc4))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** shift + right arrow moves to last frame ([#354](https://github.com/havenhq/revideo/issues/354)) ([4b81709](https://github.com/havenhq/revideo/commit/4b8170971400c5bf4fe690a58d3f44c3e1d00b94)), closes [#353](https://github.com/havenhq/revideo/issues/353)
* **ui:** small improvements ([#833](https://github.com/havenhq/revideo/issues/833)) ([f44400c](https://github.com/havenhq/revideo/commit/f44400c458a1d7f49520494f01efb9936f4df83e))
* **ui:** timeline dragging ([#794](https://github.com/havenhq/revideo/issues/794)) ([248e454](https://github.com/havenhq/revideo/commit/248e4546367f9d99221f64b811a07d54a9988e48)), closes [#699](https://github.com/havenhq/revideo/issues/699)
* **ui:** timeline overhaul ([#47](https://github.com/havenhq/revideo/issues/47)) ([4232a60](https://github.com/havenhq/revideo/commit/4232a6072540b54451e99e18c1001db0175bb93f)), closes [#20](https://github.com/havenhq/revideo/issues/20)
* **ui:** timeline scrubbing ([#862](https://github.com/havenhq/revideo/issues/862)) ([211b9a4](https://github.com/havenhq/revideo/commit/211b9a4327720afd1ce0ff93868a501c2fd745aa)), closes [#286](https://github.com/havenhq/revideo/issues/286)
* **ui:** vertical line on time event ([#808](https://github.com/havenhq/revideo/issues/808)) ([18015d6](https://github.com/havenhq/revideo/commit/18015d6714ffe2a6255f26895aa9a7c1908a4f7a)), closes [#804](https://github.com/havenhq/revideo/issues/804)
* **ui:** visual changes ([#96](https://github.com/havenhq/revideo/issues/96)) ([3d599f4](https://github.com/havenhq/revideo/commit/3d599f4e1788fbd15e996be8bf95679f1c6787bd))
* **ui:** zoom controls ([#531](https://github.com/havenhq/revideo/issues/531)) ([752350d](https://github.com/havenhq/revideo/commit/752350d0c547e21806f1b70a5c68025012e5ec11))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
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

* **2d:** fix audio offset editing ([#674](https://github.com/havenhq/revideo/issues/674)) ([58d6ef7](https://github.com/havenhq/revideo/commit/58d6ef79fa06e377e0c1821efe73585586d124a6))
* **2d:** fix performance issue with audio track ([#427](https://github.com/havenhq/revideo/issues/427)) ([c993770](https://github.com/havenhq/revideo/commit/c993770937ddfdf0ac39b144a1f79f1a300f7899))
* **2d:** fix version link ([#608](https://github.com/havenhq/revideo/issues/608)) ([4fe5b7a](https://github.com/havenhq/revideo/commit/4fe5b7a5150fbdf43ea50ecf3dc8b4690c0e2e34))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* correctly await re-renders ([#918](https://github.com/havenhq/revideo/issues/918)) ([873a9a3](https://github.com/havenhq/revideo/commit/873a9a3eed2676de4cc7f31fbd5ea58817a80aff))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix player state not being saved ([#85](https://github.com/havenhq/revideo/issues/85)) ([74b54b9](https://github.com/havenhq/revideo/commit/74b54b970d1287e80fe2334a034844ad6a80c23b))
* fix tsdoc comments ([#21](https://github.com/havenhq/revideo/issues/21)) ([4b6cb66](https://github.com/havenhq/revideo/commit/4b6cb660ad82befcfd41188c7a8f9c8c0cba93ed)), closes [#18](https://github.com/havenhq/revideo/issues/18)
* limit fps to positive numbers ([#937](https://github.com/havenhq/revideo/issues/937)) ([c7c0c67](https://github.com/havenhq/revideo/commit/c7c0c6730e1a00e6b23077188bfc2d389e98cff2)), closes [#936](https://github.com/havenhq/revideo/issues/936)
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* support hmr when navigating ([370ea16](https://github.com/havenhq/revideo/commit/370ea1676a1c34313c0fb917c0f0691538f72016))
* the resolution fields in Rendering no longer reset each other ([#73](https://github.com/havenhq/revideo/issues/73)) ([ddabec5](https://github.com/havenhq/revideo/commit/ddabec549be3cecec27cf9f5643b036e12a83472))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** correctly reset zoom ([#432](https://github.com/havenhq/revideo/issues/432)) ([a33ee14](https://github.com/havenhq/revideo/commit/a33ee14dfac3e1fe24c89d76631e23fe4cb625a6))
* **ui:** don't seek when editing time events ([#26](https://github.com/havenhq/revideo/issues/26)) ([524c200](https://github.com/havenhq/revideo/commit/524c200ef1bd6a6f52096d04c2aeed24a24cda6f))
* **ui:** downgrade preact ([#1](https://github.com/havenhq/revideo/issues/1)) ([5f7456f](https://github.com/havenhq/revideo/commit/5f7456fe4c5a1cc76ccd8fed5a6f9a8a4e846d27))
* **ui:** fix "go to source" ([#895](https://github.com/havenhq/revideo/issues/895)) ([ec729de](https://github.com/havenhq/revideo/commit/ec729dea0d65bc69aefc0abd601f365af1c4ed68))
* **ui:** fix collapse ([#698](https://github.com/havenhq/revideo/issues/698)) ([6bd8703](https://github.com/havenhq/revideo/commit/6bd8703ec9b16f55b3817f6a1f9130f17b66c69a))
* **ui:** fix inspector tab ([#374](https://github.com/havenhq/revideo/issues/374)) ([c4cb378](https://github.com/havenhq/revideo/commit/c4cb378c2f9d972bb41542bbe3b3aa314fa1f3ad))
* **ui:** fix new version link ([#505](https://github.com/havenhq/revideo/issues/505)) ([7459e7f](https://github.com/havenhq/revideo/commit/7459e7f8355163f3cb6a3ed791fc41a2962a186e))
* **ui:** fix onChange handlers ([#515](https://github.com/havenhq/revideo/issues/515)) ([a23d06c](https://github.com/havenhq/revideo/commit/a23d06cbf6e29f37a9259e50fe71c482640b83fb))
* **ui:** fix out of range warning ([#939](https://github.com/havenhq/revideo/issues/939)) ([c9f466f](https://github.com/havenhq/revideo/commit/c9f466f20ff1a3e2cb77aa5575823947ef9beeee))
* **ui:** fix play-pause button ([#299](https://github.com/havenhq/revideo/issues/299)) ([191f54a](https://github.com/havenhq/revideo/commit/191f54a0a5a9de2fd2dc27bffc6d21d692ce6f72))
* **ui:** fix snapshot ([#643](https://github.com/havenhq/revideo/issues/643)) ([590216a](https://github.com/havenhq/revideo/commit/590216ac094d6b6ef3e9c773499bc52063f617b1))
* **ui:** fix transparent background ([#886](https://github.com/havenhq/revideo/issues/886)) ([83f652f](https://github.com/havenhq/revideo/commit/83f652fdcfa075f5de24186ffdffd1b7db1d8fc9))
* **ui:** fix typo in viewport ID ([#620](https://github.com/havenhq/revideo/issues/620)) ([3a83f20](https://github.com/havenhq/revideo/commit/3a83f20cb1b8ddc7b95a8e36bf6f3d0cd036693b))
* **ui:** fix zoom to fit ([#561](https://github.com/havenhq/revideo/issues/561)) ([1c947b4](https://github.com/havenhq/revideo/commit/1c947b417e218809f33928d6cbb89d463bdc2e66))
* **ui:** ignore shortcuts when typing ([#521](https://github.com/havenhq/revideo/issues/521)) ([4d3e1a1](https://github.com/havenhq/revideo/commit/4d3e1a13caee2ddd03857961a44dd10a7e1cb32a)), closes [#518](https://github.com/havenhq/revideo/issues/518)
* **ui:** misaligned overlay ([#127](https://github.com/havenhq/revideo/issues/127)) ([0379730](https://github.com/havenhq/revideo/commit/03797302a302e28caf9f2428cfce4a122f827775))
* **ui:** prevent context menu in viewport ([#123](https://github.com/havenhq/revideo/issues/123)) ([0fdd85e](https://github.com/havenhq/revideo/commit/0fdd85ecf5b61907ce1e16f5fb9253540528a8b0))
* **ui:** prevent spawning multiple color pickers ([#747](https://github.com/havenhq/revideo/issues/747)) ([48ffd1f](https://github.com/havenhq/revideo/commit/48ffd1f2eec21f9880e172632a2310f5676e3c19)), closes [#744](https://github.com/havenhq/revideo/issues/744)
* **ui:** prevent timeline scroll when zooming ([#162](https://github.com/havenhq/revideo/issues/162)) ([b8278ae](https://github.com/havenhq/revideo/commit/b8278aeb7b92f215bccbd1aa57de17c9233cff01))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* **ui:** remove glossy <select> effect in Safari ([#292](https://github.com/havenhq/revideo/issues/292)) ([9c062b2](https://github.com/havenhq/revideo/commit/9c062b26e48fbdb1905daae25a3fb34df82307d3))
* **ui:** support small ranges ([#739](https://github.com/havenhq/revideo/issues/739)) ([cf32d8b](https://github.com/havenhq/revideo/commit/cf32d8b08b94f5044987eb554cd250fc79fbc99d)), closes [#738](https://github.com/havenhq/revideo/issues/738)
* **ui:** use signals correctly ([#906](https://github.com/havenhq/revideo/issues/906)) ([f67d691](https://github.com/havenhq/revideo/commit/f67d691b5f2f6358120e9582a1839ef3d49c77b8))
* **ui:** version comparison issue ([#520](https://github.com/havenhq/revideo/issues/520)) ([93b5e08](https://github.com/havenhq/revideo/commit/93b5e088b4a4fda0d2177cb2cc6680c34fa72d30)), closes [#519](https://github.com/havenhq/revideo/issues/519)
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* **2d:** expand animations and reduced motion ([#671](https://github.com/havenhq/revideo/issues/671)) ([b8e9d03](https://github.com/havenhq/revideo/commit/b8e9d03488f8ca7085b3e7e1b095a52f39f2bc89))
* **2d:** visual feedback about rendering process ([#681](https://github.com/havenhq/revideo/issues/681)) ([d0495f5](https://github.com/havenhq/revideo/commit/d0495f5c6396c05454a5323e4486ab4829adbc9e))
* add audio volume control through arrow keys ([#856](https://github.com/havenhq/revideo/issues/856)) ([8b86fd4](https://github.com/havenhq/revideo/commit/8b86fd4e70f91a0d5b1150d760427ca355666341))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add E2E testing ([#101](https://github.com/havenhq/revideo/issues/101)) ([6398c54](https://github.com/havenhq/revideo/commit/6398c54e4c4d6667ce9f45b9bbef6ea110ea2215)), closes [#42](https://github.com/havenhq/revideo/issues/42)
* add experimental features ([#876](https://github.com/havenhq/revideo/issues/876)) ([498d387](https://github.com/havenhq/revideo/commit/498d3871d05d4dcc83453654bec7762d2ab32e7e))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* added file type and quality options to rendering panel ([#50](https://github.com/havenhq/revideo/issues/50)) ([bee71ef](https://github.com/havenhq/revideo/commit/bee71ef2673c269db47a4433831720b7ad0fb4e8)), closes [#24](https://github.com/havenhq/revideo/issues/24)
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* auto meta fields ([#565](https://github.com/havenhq/revideo/issues/565)) ([645af6d](https://github.com/havenhq/revideo/commit/645af6d2b7e8d9332b6f08419c318ee9434d7f3f))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display array values in inspector ([#670](https://github.com/havenhq/revideo/issues/670)) ([e71d74c](https://github.com/havenhq/revideo/commit/e71d74c9c04995393ad8ee942b8e6e5baa6f982f))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* editor improvements ([#121](https://github.com/havenhq/revideo/issues/121)) ([e8b32ce](https://github.com/havenhq/revideo/commit/e8b32ceff1b8216282c4b5713508ce1172645e20))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* meta field descriptions ([#664](https://github.com/havenhq/revideo/issues/664)) ([80c9d07](https://github.com/havenhq/revideo/commit/80c9d07f88f4a3df0f99e5741b31313f891a5d51))
* minor console improvements ([#145](https://github.com/havenhq/revideo/issues/145)) ([3e32e73](https://github.com/havenhq/revideo/commit/3e32e73434ad872049af9e3f1f711bc0185410f4))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* navigate to slide source ([#490](https://github.com/havenhq/revideo/issues/490)) ([b5ae4bf](https://github.com/havenhq/revideo/commit/b5ae4bf37076b262a20949cca030db3902186c8d))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* new plugin hooks ([#723](https://github.com/havenhq/revideo/issues/723)) ([9a2b5ab](https://github.com/havenhq/revideo/commit/9a2b5ab8be0d001414fd00da3053d408e00fd1cd))
* open time events in editor ([#87](https://github.com/havenhq/revideo/issues/87)) ([74b781d](https://github.com/havenhq/revideo/commit/74b781d57fca7ef1d10904673276f2a7354c01b8))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* **ui:** add color picker ([#691](https://github.com/havenhq/revideo/issues/691)) ([a33059c](https://github.com/havenhq/revideo/commit/a33059c0f455814919db31bc9e5e932907c797e4))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** add direct range selection & playhead shortcuts ([#907](https://github.com/havenhq/revideo/issues/907)) ([39264fc](https://github.com/havenhq/revideo/commit/39264fc074da739efddf24ef080f6c5f279f8014))
* **ui:** add external link to docs ([#346](https://github.com/havenhq/revideo/issues/346)) ([fc4ee5d](https://github.com/havenhq/revideo/commit/fc4ee5d028312904ed9e11c5341ac00f36e7242b))
* **ui:** add goto start and goto end buttons ([#814](https://github.com/havenhq/revideo/issues/814)) ([449f194](https://github.com/havenhq/revideo/commit/449f1946474af9886135571c14c83b8440bdf28c))
* **ui:** add number input dragging ([#917](https://github.com/havenhq/revideo/issues/917)) ([1b5c232](https://github.com/havenhq/revideo/commit/1b5c23260c3015608f202a103b4c0aebd1860e36)), closes [#799](https://github.com/havenhq/revideo/issues/799)
* **ui:** add quarter resolution ([#421](https://github.com/havenhq/revideo/issues/421)) ([d0160d0](https://github.com/havenhq/revideo/commit/d0160d0d5ef76ffb0d3591566891b5efa4061744))
* **ui:** add shortcuts to button titles ([#532](https://github.com/havenhq/revideo/issues/532)) ([3549dd3](https://github.com/havenhq/revideo/commit/3549dd3fd7ef47376a5a2dd516609499d3985ac3))
* **ui:** add volume slider ([#872](https://github.com/havenhq/revideo/issues/872)) ([5ac3069](https://github.com/havenhq/revideo/commit/5ac3069f027ee123c212217dcf8d26a78a3aa106))
* **ui:** custom checkbox style ([#529](https://github.com/havenhq/revideo/issues/529)) ([af98db1](https://github.com/havenhq/revideo/commit/af98db103d66e8af059dc483d49984b9adb9b95c))
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** estimate remaining rendering time ([#795](https://github.com/havenhq/revideo/issues/795)) ([1a46148](https://github.com/havenhq/revideo/commit/1a4614801869ab36827ca857d66eed8de9cffd09)), closes [#784](https://github.com/havenhq/revideo/issues/784)
* **ui:** improve rendering button ([#662](https://github.com/havenhq/revideo/issues/662)) ([2b4ae70](https://github.com/havenhq/revideo/commit/2b4ae70ea0b0305fbb2596e95bbc70440718bbe2))
* **ui:** include function names in stack traces ([#693](https://github.com/havenhq/revideo/issues/693)) ([835c0fa](https://github.com/havenhq/revideo/commit/835c0fa4b70429db6fe96be96d6d9e44949f7f6c))
* **ui:** list available shortcuts ([#444](https://github.com/havenhq/revideo/issues/444)) ([443fcc9](https://github.com/havenhq/revideo/commit/443fcc9feb1a1ca69aecbc4db2e194ce4f50f72e))
* **ui:** make inspector toggleable ([#921](https://github.com/havenhq/revideo/issues/921)) ([a365951](https://github.com/havenhq/revideo/commit/a365951e69c01cac1ea23d173034ad83f988c8eb))
* **ui:** new sidebar ([#692](https://github.com/havenhq/revideo/issues/692)) ([b555ee1](https://github.com/havenhq/revideo/commit/b555ee1d10f8a6e1b380c043dff2717ffa01a068)), closes [#492](https://github.com/havenhq/revideo/issues/492)
* **ui:** presentation interface ([#487](https://github.com/havenhq/revideo/issues/487)) ([1899f02](https://github.com/havenhq/revideo/commit/1899f020fb1c0b2136de4401e6fc068bcf5e0cc4))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** shift + right arrow moves to last frame ([#354](https://github.com/havenhq/revideo/issues/354)) ([4b81709](https://github.com/havenhq/revideo/commit/4b8170971400c5bf4fe690a58d3f44c3e1d00b94)), closes [#353](https://github.com/havenhq/revideo/issues/353)
* **ui:** small improvements ([#833](https://github.com/havenhq/revideo/issues/833)) ([f44400c](https://github.com/havenhq/revideo/commit/f44400c458a1d7f49520494f01efb9936f4df83e))
* **ui:** timeline dragging ([#794](https://github.com/havenhq/revideo/issues/794)) ([248e454](https://github.com/havenhq/revideo/commit/248e4546367f9d99221f64b811a07d54a9988e48)), closes [#699](https://github.com/havenhq/revideo/issues/699)
* **ui:** timeline overhaul ([#47](https://github.com/havenhq/revideo/issues/47)) ([4232a60](https://github.com/havenhq/revideo/commit/4232a6072540b54451e99e18c1001db0175bb93f)), closes [#20](https://github.com/havenhq/revideo/issues/20)
* **ui:** timeline scrubbing ([#862](https://github.com/havenhq/revideo/issues/862)) ([211b9a4](https://github.com/havenhq/revideo/commit/211b9a4327720afd1ce0ff93868a501c2fd745aa)), closes [#286](https://github.com/havenhq/revideo/issues/286)
* **ui:** vertical line on time event ([#808](https://github.com/havenhq/revideo/issues/808)) ([18015d6](https://github.com/havenhq/revideo/commit/18015d6714ffe2a6255f26895aa9a7c1908a4f7a)), closes [#804](https://github.com/havenhq/revideo/issues/804)
* **ui:** visual changes ([#96](https://github.com/havenhq/revideo/issues/96)) ([3d599f4](https://github.com/havenhq/revideo/commit/3d599f4e1788fbd15e996be8bf95679f1c6787bd))
* **ui:** zoom controls ([#531](https://github.com/havenhq/revideo/issues/531)) ([752350d](https://github.com/havenhq/revideo/commit/752350d0c547e21806f1b70a5c68025012e5ec11))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
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

* **2d:** fix audio offset editing ([#674](https://github.com/havenhq/revideo/issues/674)) ([58d6ef7](https://github.com/havenhq/revideo/commit/58d6ef79fa06e377e0c1821efe73585586d124a6))
* **2d:** fix performance issue with audio track ([#427](https://github.com/havenhq/revideo/issues/427)) ([c993770](https://github.com/havenhq/revideo/commit/c993770937ddfdf0ac39b144a1f79f1a300f7899))
* **2d:** fix version link ([#608](https://github.com/havenhq/revideo/issues/608)) ([4fe5b7a](https://github.com/havenhq/revideo/commit/4fe5b7a5150fbdf43ea50ecf3dc8b4690c0e2e34))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* correctly await re-renders ([#918](https://github.com/havenhq/revideo/issues/918)) ([873a9a3](https://github.com/havenhq/revideo/commit/873a9a3eed2676de4cc7f31fbd5ea58817a80aff))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix player state not being saved ([#85](https://github.com/havenhq/revideo/issues/85)) ([74b54b9](https://github.com/havenhq/revideo/commit/74b54b970d1287e80fe2334a034844ad6a80c23b))
* fix tsdoc comments ([#21](https://github.com/havenhq/revideo/issues/21)) ([4b6cb66](https://github.com/havenhq/revideo/commit/4b6cb660ad82befcfd41188c7a8f9c8c0cba93ed)), closes [#18](https://github.com/havenhq/revideo/issues/18)
* limit fps to positive numbers ([#937](https://github.com/havenhq/revideo/issues/937)) ([c7c0c67](https://github.com/havenhq/revideo/commit/c7c0c6730e1a00e6b23077188bfc2d389e98cff2)), closes [#936](https://github.com/havenhq/revideo/issues/936)
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* support hmr when navigating ([370ea16](https://github.com/havenhq/revideo/commit/370ea1676a1c34313c0fb917c0f0691538f72016))
* the resolution fields in Rendering no longer reset each other ([#73](https://github.com/havenhq/revideo/issues/73)) ([ddabec5](https://github.com/havenhq/revideo/commit/ddabec549be3cecec27cf9f5643b036e12a83472))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** correctly reset zoom ([#432](https://github.com/havenhq/revideo/issues/432)) ([a33ee14](https://github.com/havenhq/revideo/commit/a33ee14dfac3e1fe24c89d76631e23fe4cb625a6))
* **ui:** don't seek when editing time events ([#26](https://github.com/havenhq/revideo/issues/26)) ([524c200](https://github.com/havenhq/revideo/commit/524c200ef1bd6a6f52096d04c2aeed24a24cda6f))
* **ui:** downgrade preact ([#1](https://github.com/havenhq/revideo/issues/1)) ([5f7456f](https://github.com/havenhq/revideo/commit/5f7456fe4c5a1cc76ccd8fed5a6f9a8a4e846d27))
* **ui:** fix "go to source" ([#895](https://github.com/havenhq/revideo/issues/895)) ([ec729de](https://github.com/havenhq/revideo/commit/ec729dea0d65bc69aefc0abd601f365af1c4ed68))
* **ui:** fix collapse ([#698](https://github.com/havenhq/revideo/issues/698)) ([6bd8703](https://github.com/havenhq/revideo/commit/6bd8703ec9b16f55b3817f6a1f9130f17b66c69a))
* **ui:** fix inspector tab ([#374](https://github.com/havenhq/revideo/issues/374)) ([c4cb378](https://github.com/havenhq/revideo/commit/c4cb378c2f9d972bb41542bbe3b3aa314fa1f3ad))
* **ui:** fix new version link ([#505](https://github.com/havenhq/revideo/issues/505)) ([7459e7f](https://github.com/havenhq/revideo/commit/7459e7f8355163f3cb6a3ed791fc41a2962a186e))
* **ui:** fix onChange handlers ([#515](https://github.com/havenhq/revideo/issues/515)) ([a23d06c](https://github.com/havenhq/revideo/commit/a23d06cbf6e29f37a9259e50fe71c482640b83fb))
* **ui:** fix out of range warning ([#939](https://github.com/havenhq/revideo/issues/939)) ([c9f466f](https://github.com/havenhq/revideo/commit/c9f466f20ff1a3e2cb77aa5575823947ef9beeee))
* **ui:** fix play-pause button ([#299](https://github.com/havenhq/revideo/issues/299)) ([191f54a](https://github.com/havenhq/revideo/commit/191f54a0a5a9de2fd2dc27bffc6d21d692ce6f72))
* **ui:** fix snapshot ([#643](https://github.com/havenhq/revideo/issues/643)) ([590216a](https://github.com/havenhq/revideo/commit/590216ac094d6b6ef3e9c773499bc52063f617b1))
* **ui:** fix transparent background ([#886](https://github.com/havenhq/revideo/issues/886)) ([83f652f](https://github.com/havenhq/revideo/commit/83f652fdcfa075f5de24186ffdffd1b7db1d8fc9))
* **ui:** fix typo in viewport ID ([#620](https://github.com/havenhq/revideo/issues/620)) ([3a83f20](https://github.com/havenhq/revideo/commit/3a83f20cb1b8ddc7b95a8e36bf6f3d0cd036693b))
* **ui:** fix zoom to fit ([#561](https://github.com/havenhq/revideo/issues/561)) ([1c947b4](https://github.com/havenhq/revideo/commit/1c947b417e218809f33928d6cbb89d463bdc2e66))
* **ui:** ignore shortcuts when typing ([#521](https://github.com/havenhq/revideo/issues/521)) ([4d3e1a1](https://github.com/havenhq/revideo/commit/4d3e1a13caee2ddd03857961a44dd10a7e1cb32a)), closes [#518](https://github.com/havenhq/revideo/issues/518)
* **ui:** misaligned overlay ([#127](https://github.com/havenhq/revideo/issues/127)) ([0379730](https://github.com/havenhq/revideo/commit/03797302a302e28caf9f2428cfce4a122f827775))
* **ui:** prevent context menu in viewport ([#123](https://github.com/havenhq/revideo/issues/123)) ([0fdd85e](https://github.com/havenhq/revideo/commit/0fdd85ecf5b61907ce1e16f5fb9253540528a8b0))
* **ui:** prevent spawning multiple color pickers ([#747](https://github.com/havenhq/revideo/issues/747)) ([48ffd1f](https://github.com/havenhq/revideo/commit/48ffd1f2eec21f9880e172632a2310f5676e3c19)), closes [#744](https://github.com/havenhq/revideo/issues/744)
* **ui:** prevent timeline scroll when zooming ([#162](https://github.com/havenhq/revideo/issues/162)) ([b8278ae](https://github.com/havenhq/revideo/commit/b8278aeb7b92f215bccbd1aa57de17c9233cff01))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* **ui:** remove glossy <select> effect in Safari ([#292](https://github.com/havenhq/revideo/issues/292)) ([9c062b2](https://github.com/havenhq/revideo/commit/9c062b26e48fbdb1905daae25a3fb34df82307d3))
* **ui:** support small ranges ([#739](https://github.com/havenhq/revideo/issues/739)) ([cf32d8b](https://github.com/havenhq/revideo/commit/cf32d8b08b94f5044987eb554cd250fc79fbc99d)), closes [#738](https://github.com/havenhq/revideo/issues/738)
* **ui:** use signals correctly ([#906](https://github.com/havenhq/revideo/issues/906)) ([f67d691](https://github.com/havenhq/revideo/commit/f67d691b5f2f6358120e9582a1839ef3d49c77b8))
* **ui:** version comparison issue ([#520](https://github.com/havenhq/revideo/issues/520)) ([93b5e08](https://github.com/havenhq/revideo/commit/93b5e088b4a4fda0d2177cb2cc6680c34fa72d30)), closes [#519](https://github.com/havenhq/revideo/issues/519)
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* **2d:** expand animations and reduced motion ([#671](https://github.com/havenhq/revideo/issues/671)) ([b8e9d03](https://github.com/havenhq/revideo/commit/b8e9d03488f8ca7085b3e7e1b095a52f39f2bc89))
* **2d:** visual feedback about rendering process ([#681](https://github.com/havenhq/revideo/issues/681)) ([d0495f5](https://github.com/havenhq/revideo/commit/d0495f5c6396c05454a5323e4486ab4829adbc9e))
* add audio volume control through arrow keys ([#856](https://github.com/havenhq/revideo/issues/856)) ([8b86fd4](https://github.com/havenhq/revideo/commit/8b86fd4e70f91a0d5b1150d760427ca355666341))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add E2E testing ([#101](https://github.com/havenhq/revideo/issues/101)) ([6398c54](https://github.com/havenhq/revideo/commit/6398c54e4c4d6667ce9f45b9bbef6ea110ea2215)), closes [#42](https://github.com/havenhq/revideo/issues/42)
* add experimental features ([#876](https://github.com/havenhq/revideo/issues/876)) ([498d387](https://github.com/havenhq/revideo/commit/498d3871d05d4dcc83453654bec7762d2ab32e7e))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* added file type and quality options to rendering panel ([#50](https://github.com/havenhq/revideo/issues/50)) ([bee71ef](https://github.com/havenhq/revideo/commit/bee71ef2673c269db47a4433831720b7ad0fb4e8)), closes [#24](https://github.com/havenhq/revideo/issues/24)
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* auto meta fields ([#565](https://github.com/havenhq/revideo/issues/565)) ([645af6d](https://github.com/havenhq/revideo/commit/645af6d2b7e8d9332b6f08419c318ee9434d7f3f))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display array values in inspector ([#670](https://github.com/havenhq/revideo/issues/670)) ([e71d74c](https://github.com/havenhq/revideo/commit/e71d74c9c04995393ad8ee942b8e6e5baa6f982f))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* editor improvements ([#121](https://github.com/havenhq/revideo/issues/121)) ([e8b32ce](https://github.com/havenhq/revideo/commit/e8b32ceff1b8216282c4b5713508ce1172645e20))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* meta field descriptions ([#664](https://github.com/havenhq/revideo/issues/664)) ([80c9d07](https://github.com/havenhq/revideo/commit/80c9d07f88f4a3df0f99e5741b31313f891a5d51))
* minor console improvements ([#145](https://github.com/havenhq/revideo/issues/145)) ([3e32e73](https://github.com/havenhq/revideo/commit/3e32e73434ad872049af9e3f1f711bc0185410f4))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* navigate to slide source ([#490](https://github.com/havenhq/revideo/issues/490)) ([b5ae4bf](https://github.com/havenhq/revideo/commit/b5ae4bf37076b262a20949cca030db3902186c8d))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* new plugin hooks ([#723](https://github.com/havenhq/revideo/issues/723)) ([9a2b5ab](https://github.com/havenhq/revideo/commit/9a2b5ab8be0d001414fd00da3053d408e00fd1cd))
* open time events in editor ([#87](https://github.com/havenhq/revideo/issues/87)) ([74b781d](https://github.com/havenhq/revideo/commit/74b781d57fca7ef1d10904673276f2a7354c01b8))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* **ui:** add color picker ([#691](https://github.com/havenhq/revideo/issues/691)) ([a33059c](https://github.com/havenhq/revideo/commit/a33059c0f455814919db31bc9e5e932907c797e4))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** add direct range selection & playhead shortcuts ([#907](https://github.com/havenhq/revideo/issues/907)) ([39264fc](https://github.com/havenhq/revideo/commit/39264fc074da739efddf24ef080f6c5f279f8014))
* **ui:** add external link to docs ([#346](https://github.com/havenhq/revideo/issues/346)) ([fc4ee5d](https://github.com/havenhq/revideo/commit/fc4ee5d028312904ed9e11c5341ac00f36e7242b))
* **ui:** add goto start and goto end buttons ([#814](https://github.com/havenhq/revideo/issues/814)) ([449f194](https://github.com/havenhq/revideo/commit/449f1946474af9886135571c14c83b8440bdf28c))
* **ui:** add number input dragging ([#917](https://github.com/havenhq/revideo/issues/917)) ([1b5c232](https://github.com/havenhq/revideo/commit/1b5c23260c3015608f202a103b4c0aebd1860e36)), closes [#799](https://github.com/havenhq/revideo/issues/799)
* **ui:** add quarter resolution ([#421](https://github.com/havenhq/revideo/issues/421)) ([d0160d0](https://github.com/havenhq/revideo/commit/d0160d0d5ef76ffb0d3591566891b5efa4061744))
* **ui:** add shortcuts to button titles ([#532](https://github.com/havenhq/revideo/issues/532)) ([3549dd3](https://github.com/havenhq/revideo/commit/3549dd3fd7ef47376a5a2dd516609499d3985ac3))
* **ui:** add volume slider ([#872](https://github.com/havenhq/revideo/issues/872)) ([5ac3069](https://github.com/havenhq/revideo/commit/5ac3069f027ee123c212217dcf8d26a78a3aa106))
* **ui:** custom checkbox style ([#529](https://github.com/havenhq/revideo/issues/529)) ([af98db1](https://github.com/havenhq/revideo/commit/af98db103d66e8af059dc483d49984b9adb9b95c))
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** estimate remaining rendering time ([#795](https://github.com/havenhq/revideo/issues/795)) ([1a46148](https://github.com/havenhq/revideo/commit/1a4614801869ab36827ca857d66eed8de9cffd09)), closes [#784](https://github.com/havenhq/revideo/issues/784)
* **ui:** improve rendering button ([#662](https://github.com/havenhq/revideo/issues/662)) ([2b4ae70](https://github.com/havenhq/revideo/commit/2b4ae70ea0b0305fbb2596e95bbc70440718bbe2))
* **ui:** include function names in stack traces ([#693](https://github.com/havenhq/revideo/issues/693)) ([835c0fa](https://github.com/havenhq/revideo/commit/835c0fa4b70429db6fe96be96d6d9e44949f7f6c))
* **ui:** list available shortcuts ([#444](https://github.com/havenhq/revideo/issues/444)) ([443fcc9](https://github.com/havenhq/revideo/commit/443fcc9feb1a1ca69aecbc4db2e194ce4f50f72e))
* **ui:** make inspector toggleable ([#921](https://github.com/havenhq/revideo/issues/921)) ([a365951](https://github.com/havenhq/revideo/commit/a365951e69c01cac1ea23d173034ad83f988c8eb))
* **ui:** new sidebar ([#692](https://github.com/havenhq/revideo/issues/692)) ([b555ee1](https://github.com/havenhq/revideo/commit/b555ee1d10f8a6e1b380c043dff2717ffa01a068)), closes [#492](https://github.com/havenhq/revideo/issues/492)
* **ui:** presentation interface ([#487](https://github.com/havenhq/revideo/issues/487)) ([1899f02](https://github.com/havenhq/revideo/commit/1899f020fb1c0b2136de4401e6fc068bcf5e0cc4))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** shift + right arrow moves to last frame ([#354](https://github.com/havenhq/revideo/issues/354)) ([4b81709](https://github.com/havenhq/revideo/commit/4b8170971400c5bf4fe690a58d3f44c3e1d00b94)), closes [#353](https://github.com/havenhq/revideo/issues/353)
* **ui:** small improvements ([#833](https://github.com/havenhq/revideo/issues/833)) ([f44400c](https://github.com/havenhq/revideo/commit/f44400c458a1d7f49520494f01efb9936f4df83e))
* **ui:** timeline dragging ([#794](https://github.com/havenhq/revideo/issues/794)) ([248e454](https://github.com/havenhq/revideo/commit/248e4546367f9d99221f64b811a07d54a9988e48)), closes [#699](https://github.com/havenhq/revideo/issues/699)
* **ui:** timeline overhaul ([#47](https://github.com/havenhq/revideo/issues/47)) ([4232a60](https://github.com/havenhq/revideo/commit/4232a6072540b54451e99e18c1001db0175bb93f)), closes [#20](https://github.com/havenhq/revideo/issues/20)
* **ui:** timeline scrubbing ([#862](https://github.com/havenhq/revideo/issues/862)) ([211b9a4](https://github.com/havenhq/revideo/commit/211b9a4327720afd1ce0ff93868a501c2fd745aa)), closes [#286](https://github.com/havenhq/revideo/issues/286)
* **ui:** vertical line on time event ([#808](https://github.com/havenhq/revideo/issues/808)) ([18015d6](https://github.com/havenhq/revideo/commit/18015d6714ffe2a6255f26895aa9a7c1908a4f7a)), closes [#804](https://github.com/havenhq/revideo/issues/804)
* **ui:** visual changes ([#96](https://github.com/havenhq/revideo/issues/96)) ([3d599f4](https://github.com/havenhq/revideo/commit/3d599f4e1788fbd15e996be8bf95679f1c6787bd))
* **ui:** zoom controls ([#531](https://github.com/havenhq/revideo/issues/531)) ([752350d](https://github.com/havenhq/revideo/commit/752350d0c547e21806f1b70a5c68025012e5ec11))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
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

* **2d:** fix audio offset editing ([#674](https://github.com/havenhq/revideo/issues/674)) ([58d6ef7](https://github.com/havenhq/revideo/commit/58d6ef79fa06e377e0c1821efe73585586d124a6))
* **2d:** fix performance issue with audio track ([#427](https://github.com/havenhq/revideo/issues/427)) ([c993770](https://github.com/havenhq/revideo/commit/c993770937ddfdf0ac39b144a1f79f1a300f7899))
* **2d:** fix version link ([#608](https://github.com/havenhq/revideo/issues/608)) ([4fe5b7a](https://github.com/havenhq/revideo/commit/4fe5b7a5150fbdf43ea50ecf3dc8b4690c0e2e34))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* correctly await re-renders ([#918](https://github.com/havenhq/revideo/issues/918)) ([873a9a3](https://github.com/havenhq/revideo/commit/873a9a3eed2676de4cc7f31fbd5ea58817a80aff))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix player state not being saved ([#85](https://github.com/havenhq/revideo/issues/85)) ([74b54b9](https://github.com/havenhq/revideo/commit/74b54b970d1287e80fe2334a034844ad6a80c23b))
* fix tsdoc comments ([#21](https://github.com/havenhq/revideo/issues/21)) ([4b6cb66](https://github.com/havenhq/revideo/commit/4b6cb660ad82befcfd41188c7a8f9c8c0cba93ed)), closes [#18](https://github.com/havenhq/revideo/issues/18)
* limit fps to positive numbers ([#937](https://github.com/havenhq/revideo/issues/937)) ([c7c0c67](https://github.com/havenhq/revideo/commit/c7c0c6730e1a00e6b23077188bfc2d389e98cff2)), closes [#936](https://github.com/havenhq/revideo/issues/936)
* prevent progress error when rendering from ui ([#71](https://github.com/havenhq/revideo/issues/71)) ([534e089](https://github.com/havenhq/revideo/commit/534e089380857dbdcf29ab4a8cef231dbe269708))
* support hmr when navigating ([370ea16](https://github.com/havenhq/revideo/commit/370ea1676a1c34313c0fb917c0f0691538f72016))
* the resolution fields in Rendering no longer reset each other ([#73](https://github.com/havenhq/revideo/issues/73)) ([ddabec5](https://github.com/havenhq/revideo/commit/ddabec549be3cecec27cf9f5643b036e12a83472))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** correctly reset zoom ([#432](https://github.com/havenhq/revideo/issues/432)) ([a33ee14](https://github.com/havenhq/revideo/commit/a33ee14dfac3e1fe24c89d76631e23fe4cb625a6))
* **ui:** don't seek when editing time events ([#26](https://github.com/havenhq/revideo/issues/26)) ([524c200](https://github.com/havenhq/revideo/commit/524c200ef1bd6a6f52096d04c2aeed24a24cda6f))
* **ui:** downgrade preact ([#1](https://github.com/havenhq/revideo/issues/1)) ([5f7456f](https://github.com/havenhq/revideo/commit/5f7456fe4c5a1cc76ccd8fed5a6f9a8a4e846d27))
* **ui:** fix "go to source" ([#895](https://github.com/havenhq/revideo/issues/895)) ([ec729de](https://github.com/havenhq/revideo/commit/ec729dea0d65bc69aefc0abd601f365af1c4ed68))
* **ui:** fix collapse ([#698](https://github.com/havenhq/revideo/issues/698)) ([6bd8703](https://github.com/havenhq/revideo/commit/6bd8703ec9b16f55b3817f6a1f9130f17b66c69a))
* **ui:** fix inspector tab ([#374](https://github.com/havenhq/revideo/issues/374)) ([c4cb378](https://github.com/havenhq/revideo/commit/c4cb378c2f9d972bb41542bbe3b3aa314fa1f3ad))
* **ui:** fix new version link ([#505](https://github.com/havenhq/revideo/issues/505)) ([7459e7f](https://github.com/havenhq/revideo/commit/7459e7f8355163f3cb6a3ed791fc41a2962a186e))
* **ui:** fix onChange handlers ([#515](https://github.com/havenhq/revideo/issues/515)) ([a23d06c](https://github.com/havenhq/revideo/commit/a23d06cbf6e29f37a9259e50fe71c482640b83fb))
* **ui:** fix out of range warning ([#939](https://github.com/havenhq/revideo/issues/939)) ([c9f466f](https://github.com/havenhq/revideo/commit/c9f466f20ff1a3e2cb77aa5575823947ef9beeee))
* **ui:** fix play-pause button ([#299](https://github.com/havenhq/revideo/issues/299)) ([191f54a](https://github.com/havenhq/revideo/commit/191f54a0a5a9de2fd2dc27bffc6d21d692ce6f72))
* **ui:** fix snapshot ([#643](https://github.com/havenhq/revideo/issues/643)) ([590216a](https://github.com/havenhq/revideo/commit/590216ac094d6b6ef3e9c773499bc52063f617b1))
* **ui:** fix transparent background ([#886](https://github.com/havenhq/revideo/issues/886)) ([83f652f](https://github.com/havenhq/revideo/commit/83f652fdcfa075f5de24186ffdffd1b7db1d8fc9))
* **ui:** fix typo in viewport ID ([#620](https://github.com/havenhq/revideo/issues/620)) ([3a83f20](https://github.com/havenhq/revideo/commit/3a83f20cb1b8ddc7b95a8e36bf6f3d0cd036693b))
* **ui:** fix zoom to fit ([#561](https://github.com/havenhq/revideo/issues/561)) ([1c947b4](https://github.com/havenhq/revideo/commit/1c947b417e218809f33928d6cbb89d463bdc2e66))
* **ui:** ignore shortcuts when typing ([#521](https://github.com/havenhq/revideo/issues/521)) ([4d3e1a1](https://github.com/havenhq/revideo/commit/4d3e1a13caee2ddd03857961a44dd10a7e1cb32a)), closes [#518](https://github.com/havenhq/revideo/issues/518)
* **ui:** misaligned overlay ([#127](https://github.com/havenhq/revideo/issues/127)) ([0379730](https://github.com/havenhq/revideo/commit/03797302a302e28caf9f2428cfce4a122f827775))
* **ui:** prevent context menu in viewport ([#123](https://github.com/havenhq/revideo/issues/123)) ([0fdd85e](https://github.com/havenhq/revideo/commit/0fdd85ecf5b61907ce1e16f5fb9253540528a8b0))
* **ui:** prevent spawning multiple color pickers ([#747](https://github.com/havenhq/revideo/issues/747)) ([48ffd1f](https://github.com/havenhq/revideo/commit/48ffd1f2eec21f9880e172632a2310f5676e3c19)), closes [#744](https://github.com/havenhq/revideo/issues/744)
* **ui:** prevent timeline scroll when zooming ([#162](https://github.com/havenhq/revideo/issues/162)) ([b8278ae](https://github.com/havenhq/revideo/commit/b8278aeb7b92f215bccbd1aa57de17c9233cff01))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* **ui:** remove glossy <select> effect in Safari ([#292](https://github.com/havenhq/revideo/issues/292)) ([9c062b2](https://github.com/havenhq/revideo/commit/9c062b26e48fbdb1905daae25a3fb34df82307d3))
* **ui:** support small ranges ([#739](https://github.com/havenhq/revideo/issues/739)) ([cf32d8b](https://github.com/havenhq/revideo/commit/cf32d8b08b94f5044987eb554cd250fc79fbc99d)), closes [#738](https://github.com/havenhq/revideo/issues/738)
* **ui:** use signals correctly ([#906](https://github.com/havenhq/revideo/issues/906)) ([f67d691](https://github.com/havenhq/revideo/commit/f67d691b5f2f6358120e9582a1839ef3d49c77b8))
* **ui:** version comparison issue ([#520](https://github.com/havenhq/revideo/issues/520)) ([93b5e08](https://github.com/havenhq/revideo/commit/93b5e088b4a4fda0d2177cb2cc6680c34fa72d30)), closes [#519](https://github.com/havenhq/revideo/issues/519)
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* **2d:** expand animations and reduced motion ([#671](https://github.com/havenhq/revideo/issues/671)) ([b8e9d03](https://github.com/havenhq/revideo/commit/b8e9d03488f8ca7085b3e7e1b095a52f39f2bc89))
* **2d:** visual feedback about rendering process ([#681](https://github.com/havenhq/revideo/issues/681)) ([d0495f5](https://github.com/havenhq/revideo/commit/d0495f5c6396c05454a5323e4486ab4829adbc9e))
* add audio volume control through arrow keys ([#856](https://github.com/havenhq/revideo/issues/856)) ([8b86fd4](https://github.com/havenhq/revideo/commit/8b86fd4e70f91a0d5b1150d760427ca355666341))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add E2E testing ([#101](https://github.com/havenhq/revideo/issues/101)) ([6398c54](https://github.com/havenhq/revideo/commit/6398c54e4c4d6667ce9f45b9bbef6ea110ea2215)), closes [#42](https://github.com/havenhq/revideo/issues/42)
* add experimental features ([#876](https://github.com/havenhq/revideo/issues/876)) ([498d387](https://github.com/havenhq/revideo/commit/498d3871d05d4dcc83453654bec7762d2ab32e7e))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* added file type and quality options to rendering panel ([#50](https://github.com/havenhq/revideo/issues/50)) ([bee71ef](https://github.com/havenhq/revideo/commit/bee71ef2673c269db47a4433831720b7ad0fb4e8)), closes [#24](https://github.com/havenhq/revideo/issues/24)
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* auto meta fields ([#565](https://github.com/havenhq/revideo/issues/565)) ([645af6d](https://github.com/havenhq/revideo/commit/645af6d2b7e8d9332b6f08419c318ee9434d7f3f))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display array values in inspector ([#670](https://github.com/havenhq/revideo/issues/670)) ([e71d74c](https://github.com/havenhq/revideo/commit/e71d74c9c04995393ad8ee942b8e6e5baa6f982f))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* editor improvements ([#121](https://github.com/havenhq/revideo/issues/121)) ([e8b32ce](https://github.com/havenhq/revideo/commit/e8b32ceff1b8216282c4b5713508ce1172645e20))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* meta field descriptions ([#664](https://github.com/havenhq/revideo/issues/664)) ([80c9d07](https://github.com/havenhq/revideo/commit/80c9d07f88f4a3df0f99e5741b31313f891a5d51))
* minor console improvements ([#145](https://github.com/havenhq/revideo/issues/145)) ([3e32e73](https://github.com/havenhq/revideo/commit/3e32e73434ad872049af9e3f1f711bc0185410f4))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* navigate to slide source ([#490](https://github.com/havenhq/revideo/issues/490)) ([b5ae4bf](https://github.com/havenhq/revideo/commit/b5ae4bf37076b262a20949cca030db3902186c8d))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* new plugin hooks ([#723](https://github.com/havenhq/revideo/issues/723)) ([9a2b5ab](https://github.com/havenhq/revideo/commit/9a2b5ab8be0d001414fd00da3053d408e00fd1cd))
* open time events in editor ([#87](https://github.com/havenhq/revideo/issues/87)) ([74b781d](https://github.com/havenhq/revideo/commit/74b781d57fca7ef1d10904673276f2a7354c01b8))
* parallel rendering, make ffmpeg exporter default ([#74](https://github.com/havenhq/revideo/issues/74)) ([dc9ddd1](https://github.com/havenhq/revideo/commit/dc9ddd11fddda82cde18a7be6988218cbd1daab2))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* **ui:** add color picker ([#691](https://github.com/havenhq/revideo/issues/691)) ([a33059c](https://github.com/havenhq/revideo/commit/a33059c0f455814919db31bc9e5e932907c797e4))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** add direct range selection & playhead shortcuts ([#907](https://github.com/havenhq/revideo/issues/907)) ([39264fc](https://github.com/havenhq/revideo/commit/39264fc074da739efddf24ef080f6c5f279f8014))
* **ui:** add external link to docs ([#346](https://github.com/havenhq/revideo/issues/346)) ([fc4ee5d](https://github.com/havenhq/revideo/commit/fc4ee5d028312904ed9e11c5341ac00f36e7242b))
* **ui:** add goto start and goto end buttons ([#814](https://github.com/havenhq/revideo/issues/814)) ([449f194](https://github.com/havenhq/revideo/commit/449f1946474af9886135571c14c83b8440bdf28c))
* **ui:** add number input dragging ([#917](https://github.com/havenhq/revideo/issues/917)) ([1b5c232](https://github.com/havenhq/revideo/commit/1b5c23260c3015608f202a103b4c0aebd1860e36)), closes [#799](https://github.com/havenhq/revideo/issues/799)
* **ui:** add quarter resolution ([#421](https://github.com/havenhq/revideo/issues/421)) ([d0160d0](https://github.com/havenhq/revideo/commit/d0160d0d5ef76ffb0d3591566891b5efa4061744))
* **ui:** add shortcuts to button titles ([#532](https://github.com/havenhq/revideo/issues/532)) ([3549dd3](https://github.com/havenhq/revideo/commit/3549dd3fd7ef47376a5a2dd516609499d3985ac3))
* **ui:** add volume slider ([#872](https://github.com/havenhq/revideo/issues/872)) ([5ac3069](https://github.com/havenhq/revideo/commit/5ac3069f027ee123c212217dcf8d26a78a3aa106))
* **ui:** custom checkbox style ([#529](https://github.com/havenhq/revideo/issues/529)) ([af98db1](https://github.com/havenhq/revideo/commit/af98db103d66e8af059dc483d49984b9adb9b95c))
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** estimate remaining rendering time ([#795](https://github.com/havenhq/revideo/issues/795)) ([1a46148](https://github.com/havenhq/revideo/commit/1a4614801869ab36827ca857d66eed8de9cffd09)), closes [#784](https://github.com/havenhq/revideo/issues/784)
* **ui:** improve rendering button ([#662](https://github.com/havenhq/revideo/issues/662)) ([2b4ae70](https://github.com/havenhq/revideo/commit/2b4ae70ea0b0305fbb2596e95bbc70440718bbe2))
* **ui:** include function names in stack traces ([#693](https://github.com/havenhq/revideo/issues/693)) ([835c0fa](https://github.com/havenhq/revideo/commit/835c0fa4b70429db6fe96be96d6d9e44949f7f6c))
* **ui:** list available shortcuts ([#444](https://github.com/havenhq/revideo/issues/444)) ([443fcc9](https://github.com/havenhq/revideo/commit/443fcc9feb1a1ca69aecbc4db2e194ce4f50f72e))
* **ui:** make inspector toggleable ([#921](https://github.com/havenhq/revideo/issues/921)) ([a365951](https://github.com/havenhq/revideo/commit/a365951e69c01cac1ea23d173034ad83f988c8eb))
* **ui:** new sidebar ([#692](https://github.com/havenhq/revideo/issues/692)) ([b555ee1](https://github.com/havenhq/revideo/commit/b555ee1d10f8a6e1b380c043dff2717ffa01a068)), closes [#492](https://github.com/havenhq/revideo/issues/492)
* **ui:** presentation interface ([#487](https://github.com/havenhq/revideo/issues/487)) ([1899f02](https://github.com/havenhq/revideo/commit/1899f020fb1c0b2136de4401e6fc068bcf5e0cc4))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** shift + right arrow moves to last frame ([#354](https://github.com/havenhq/revideo/issues/354)) ([4b81709](https://github.com/havenhq/revideo/commit/4b8170971400c5bf4fe690a58d3f44c3e1d00b94)), closes [#353](https://github.com/havenhq/revideo/issues/353)
* **ui:** small improvements ([#833](https://github.com/havenhq/revideo/issues/833)) ([f44400c](https://github.com/havenhq/revideo/commit/f44400c458a1d7f49520494f01efb9936f4df83e))
* **ui:** timeline dragging ([#794](https://github.com/havenhq/revideo/issues/794)) ([248e454](https://github.com/havenhq/revideo/commit/248e4546367f9d99221f64b811a07d54a9988e48)), closes [#699](https://github.com/havenhq/revideo/issues/699)
* **ui:** timeline overhaul ([#47](https://github.com/havenhq/revideo/issues/47)) ([4232a60](https://github.com/havenhq/revideo/commit/4232a6072540b54451e99e18c1001db0175bb93f)), closes [#20](https://github.com/havenhq/revideo/issues/20)
* **ui:** timeline scrubbing ([#862](https://github.com/havenhq/revideo/issues/862)) ([211b9a4](https://github.com/havenhq/revideo/commit/211b9a4327720afd1ce0ff93868a501c2fd745aa)), closes [#286](https://github.com/havenhq/revideo/issues/286)
* **ui:** vertical line on time event ([#808](https://github.com/havenhq/revideo/issues/808)) ([18015d6](https://github.com/havenhq/revideo/commit/18015d6714ffe2a6255f26895aa9a7c1908a4f7a)), closes [#804](https://github.com/havenhq/revideo/issues/804)
* **ui:** visual changes ([#96](https://github.com/havenhq/revideo/issues/96)) ([3d599f4](https://github.com/havenhq/revideo/commit/3d599f4e1788fbd15e996be8bf95679f1c6787bd))
* **ui:** zoom controls ([#531](https://github.com/havenhq/revideo/issues/531)) ([752350d](https://github.com/havenhq/revideo/commit/752350d0c547e21806f1b70a5c68025012e5ec11))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
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

* **2d:** fix audio offset editing ([#674](https://github.com/havenhq/revideo/issues/674)) ([58d6ef7](https://github.com/havenhq/revideo/commit/58d6ef79fa06e377e0c1821efe73585586d124a6))
* **2d:** fix performance issue with audio track ([#427](https://github.com/havenhq/revideo/issues/427)) ([c993770](https://github.com/havenhq/revideo/commit/c993770937ddfdf0ac39b144a1f79f1a300f7899))
* **2d:** fix version link ([#608](https://github.com/havenhq/revideo/issues/608)) ([4fe5b7a](https://github.com/havenhq/revideo/commit/4fe5b7a5150fbdf43ea50ecf3dc8b4690c0e2e34))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* correctly await re-renders ([#918](https://github.com/havenhq/revideo/issues/918)) ([873a9a3](https://github.com/havenhq/revideo/commit/873a9a3eed2676de4cc7f31fbd5ea58817a80aff))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix player state not being saved ([#85](https://github.com/havenhq/revideo/issues/85)) ([74b54b9](https://github.com/havenhq/revideo/commit/74b54b970d1287e80fe2334a034844ad6a80c23b))
* fix tsdoc comments ([#21](https://github.com/havenhq/revideo/issues/21)) ([4b6cb66](https://github.com/havenhq/revideo/commit/4b6cb660ad82befcfd41188c7a8f9c8c0cba93ed)), closes [#18](https://github.com/havenhq/revideo/issues/18)
* limit fps to positive numbers ([#937](https://github.com/havenhq/revideo/issues/937)) ([c7c0c67](https://github.com/havenhq/revideo/commit/c7c0c6730e1a00e6b23077188bfc2d389e98cff2)), closes [#936](https://github.com/havenhq/revideo/issues/936)
* support hmr when navigating ([370ea16](https://github.com/havenhq/revideo/commit/370ea1676a1c34313c0fb917c0f0691538f72016))
* the resolution fields in Rendering no longer reset each other ([#73](https://github.com/havenhq/revideo/issues/73)) ([ddabec5](https://github.com/havenhq/revideo/commit/ddabec549be3cecec27cf9f5643b036e12a83472))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** correctly reset zoom ([#432](https://github.com/havenhq/revideo/issues/432)) ([a33ee14](https://github.com/havenhq/revideo/commit/a33ee14dfac3e1fe24c89d76631e23fe4cb625a6))
* **ui:** don't seek when editing time events ([#26](https://github.com/havenhq/revideo/issues/26)) ([524c200](https://github.com/havenhq/revideo/commit/524c200ef1bd6a6f52096d04c2aeed24a24cda6f))
* **ui:** downgrade preact ([#1](https://github.com/havenhq/revideo/issues/1)) ([5f7456f](https://github.com/havenhq/revideo/commit/5f7456fe4c5a1cc76ccd8fed5a6f9a8a4e846d27))
* **ui:** fix "go to source" ([#895](https://github.com/havenhq/revideo/issues/895)) ([ec729de](https://github.com/havenhq/revideo/commit/ec729dea0d65bc69aefc0abd601f365af1c4ed68))
* **ui:** fix collapse ([#698](https://github.com/havenhq/revideo/issues/698)) ([6bd8703](https://github.com/havenhq/revideo/commit/6bd8703ec9b16f55b3817f6a1f9130f17b66c69a))
* **ui:** fix inspector tab ([#374](https://github.com/havenhq/revideo/issues/374)) ([c4cb378](https://github.com/havenhq/revideo/commit/c4cb378c2f9d972bb41542bbe3b3aa314fa1f3ad))
* **ui:** fix new version link ([#505](https://github.com/havenhq/revideo/issues/505)) ([7459e7f](https://github.com/havenhq/revideo/commit/7459e7f8355163f3cb6a3ed791fc41a2962a186e))
* **ui:** fix onChange handlers ([#515](https://github.com/havenhq/revideo/issues/515)) ([a23d06c](https://github.com/havenhq/revideo/commit/a23d06cbf6e29f37a9259e50fe71c482640b83fb))
* **ui:** fix out of range warning ([#939](https://github.com/havenhq/revideo/issues/939)) ([c9f466f](https://github.com/havenhq/revideo/commit/c9f466f20ff1a3e2cb77aa5575823947ef9beeee))
* **ui:** fix play-pause button ([#299](https://github.com/havenhq/revideo/issues/299)) ([191f54a](https://github.com/havenhq/revideo/commit/191f54a0a5a9de2fd2dc27bffc6d21d692ce6f72))
* **ui:** fix snapshot ([#643](https://github.com/havenhq/revideo/issues/643)) ([590216a](https://github.com/havenhq/revideo/commit/590216ac094d6b6ef3e9c773499bc52063f617b1))
* **ui:** fix transparent background ([#886](https://github.com/havenhq/revideo/issues/886)) ([83f652f](https://github.com/havenhq/revideo/commit/83f652fdcfa075f5de24186ffdffd1b7db1d8fc9))
* **ui:** fix typo in viewport ID ([#620](https://github.com/havenhq/revideo/issues/620)) ([3a83f20](https://github.com/havenhq/revideo/commit/3a83f20cb1b8ddc7b95a8e36bf6f3d0cd036693b))
* **ui:** fix zoom to fit ([#561](https://github.com/havenhq/revideo/issues/561)) ([1c947b4](https://github.com/havenhq/revideo/commit/1c947b417e218809f33928d6cbb89d463bdc2e66))
* **ui:** ignore shortcuts when typing ([#521](https://github.com/havenhq/revideo/issues/521)) ([4d3e1a1](https://github.com/havenhq/revideo/commit/4d3e1a13caee2ddd03857961a44dd10a7e1cb32a)), closes [#518](https://github.com/havenhq/revideo/issues/518)
* **ui:** misaligned overlay ([#127](https://github.com/havenhq/revideo/issues/127)) ([0379730](https://github.com/havenhq/revideo/commit/03797302a302e28caf9f2428cfce4a122f827775))
* **ui:** prevent context menu in viewport ([#123](https://github.com/havenhq/revideo/issues/123)) ([0fdd85e](https://github.com/havenhq/revideo/commit/0fdd85ecf5b61907ce1e16f5fb9253540528a8b0))
* **ui:** prevent spawning multiple color pickers ([#747](https://github.com/havenhq/revideo/issues/747)) ([48ffd1f](https://github.com/havenhq/revideo/commit/48ffd1f2eec21f9880e172632a2310f5676e3c19)), closes [#744](https://github.com/havenhq/revideo/issues/744)
* **ui:** prevent timeline scroll when zooming ([#162](https://github.com/havenhq/revideo/issues/162)) ([b8278ae](https://github.com/havenhq/revideo/commit/b8278aeb7b92f215bccbd1aa57de17c9233cff01))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* **ui:** remove glossy <select> effect in Safari ([#292](https://github.com/havenhq/revideo/issues/292)) ([9c062b2](https://github.com/havenhq/revideo/commit/9c062b26e48fbdb1905daae25a3fb34df82307d3))
* **ui:** support small ranges ([#739](https://github.com/havenhq/revideo/issues/739)) ([cf32d8b](https://github.com/havenhq/revideo/commit/cf32d8b08b94f5044987eb554cd250fc79fbc99d)), closes [#738](https://github.com/havenhq/revideo/issues/738)
* **ui:** use signals correctly ([#906](https://github.com/havenhq/revideo/issues/906)) ([f67d691](https://github.com/havenhq/revideo/commit/f67d691b5f2f6358120e9582a1839ef3d49c77b8))
* **ui:** version comparison issue ([#520](https://github.com/havenhq/revideo/issues/520)) ([93b5e08](https://github.com/havenhq/revideo/commit/93b5e088b4a4fda0d2177cb2cc6680c34fa72d30)), closes [#519](https://github.com/havenhq/revideo/issues/519)
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* **2d:** expand animations and reduced motion ([#671](https://github.com/havenhq/revideo/issues/671)) ([b8e9d03](https://github.com/havenhq/revideo/commit/b8e9d03488f8ca7085b3e7e1b095a52f39f2bc89))
* **2d:** visual feedback about rendering process ([#681](https://github.com/havenhq/revideo/issues/681)) ([d0495f5](https://github.com/havenhq/revideo/commit/d0495f5c6396c05454a5323e4486ab4829adbc9e))
* add audio volume control through arrow keys ([#856](https://github.com/havenhq/revideo/issues/856)) ([8b86fd4](https://github.com/havenhq/revideo/commit/8b86fd4e70f91a0d5b1150d760427ca355666341))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add E2E testing ([#101](https://github.com/havenhq/revideo/issues/101)) ([6398c54](https://github.com/havenhq/revideo/commit/6398c54e4c4d6667ce9f45b9bbef6ea110ea2215)), closes [#42](https://github.com/havenhq/revideo/issues/42)
* add experimental features ([#876](https://github.com/havenhq/revideo/issues/876)) ([498d387](https://github.com/havenhq/revideo/commit/498d3871d05d4dcc83453654bec7762d2ab32e7e))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* added file type and quality options to rendering panel ([#50](https://github.com/havenhq/revideo/issues/50)) ([bee71ef](https://github.com/havenhq/revideo/commit/bee71ef2673c269db47a4433831720b7ad0fb4e8)), closes [#24](https://github.com/havenhq/revideo/issues/24)
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* auto meta fields ([#565](https://github.com/havenhq/revideo/issues/565)) ([645af6d](https://github.com/havenhq/revideo/commit/645af6d2b7e8d9332b6f08419c318ee9434d7f3f))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display array values in inspector ([#670](https://github.com/havenhq/revideo/issues/670)) ([e71d74c](https://github.com/havenhq/revideo/commit/e71d74c9c04995393ad8ee942b8e6e5baa6f982f))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* editor improvements ([#121](https://github.com/havenhq/revideo/issues/121)) ([e8b32ce](https://github.com/havenhq/revideo/commit/e8b32ceff1b8216282c4b5713508ce1172645e20))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* meta field descriptions ([#664](https://github.com/havenhq/revideo/issues/664)) ([80c9d07](https://github.com/havenhq/revideo/commit/80c9d07f88f4a3df0f99e5741b31313f891a5d51))
* minor console improvements ([#145](https://github.com/havenhq/revideo/issues/145)) ([3e32e73](https://github.com/havenhq/revideo/commit/3e32e73434ad872049af9e3f1f711bc0185410f4))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* navigate to slide source ([#490](https://github.com/havenhq/revideo/issues/490)) ([b5ae4bf](https://github.com/havenhq/revideo/commit/b5ae4bf37076b262a20949cca030db3902186c8d))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* new plugin hooks ([#723](https://github.com/havenhq/revideo/issues/723)) ([9a2b5ab](https://github.com/havenhq/revideo/commit/9a2b5ab8be0d001414fd00da3053d408e00fd1cd))
* open time events in editor ([#87](https://github.com/havenhq/revideo/issues/87)) ([74b781d](https://github.com/havenhq/revideo/commit/74b781d57fca7ef1d10904673276f2a7354c01b8))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* **ui:** add color picker ([#691](https://github.com/havenhq/revideo/issues/691)) ([a33059c](https://github.com/havenhq/revideo/commit/a33059c0f455814919db31bc9e5e932907c797e4))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** add direct range selection & playhead shortcuts ([#907](https://github.com/havenhq/revideo/issues/907)) ([39264fc](https://github.com/havenhq/revideo/commit/39264fc074da739efddf24ef080f6c5f279f8014))
* **ui:** add external link to docs ([#346](https://github.com/havenhq/revideo/issues/346)) ([fc4ee5d](https://github.com/havenhq/revideo/commit/fc4ee5d028312904ed9e11c5341ac00f36e7242b))
* **ui:** add goto start and goto end buttons ([#814](https://github.com/havenhq/revideo/issues/814)) ([449f194](https://github.com/havenhq/revideo/commit/449f1946474af9886135571c14c83b8440bdf28c))
* **ui:** add number input dragging ([#917](https://github.com/havenhq/revideo/issues/917)) ([1b5c232](https://github.com/havenhq/revideo/commit/1b5c23260c3015608f202a103b4c0aebd1860e36)), closes [#799](https://github.com/havenhq/revideo/issues/799)
* **ui:** add quarter resolution ([#421](https://github.com/havenhq/revideo/issues/421)) ([d0160d0](https://github.com/havenhq/revideo/commit/d0160d0d5ef76ffb0d3591566891b5efa4061744))
* **ui:** add shortcuts to button titles ([#532](https://github.com/havenhq/revideo/issues/532)) ([3549dd3](https://github.com/havenhq/revideo/commit/3549dd3fd7ef47376a5a2dd516609499d3985ac3))
* **ui:** add volume slider ([#872](https://github.com/havenhq/revideo/issues/872)) ([5ac3069](https://github.com/havenhq/revideo/commit/5ac3069f027ee123c212217dcf8d26a78a3aa106))
* **ui:** custom checkbox style ([#529](https://github.com/havenhq/revideo/issues/529)) ([af98db1](https://github.com/havenhq/revideo/commit/af98db103d66e8af059dc483d49984b9adb9b95c))
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** estimate remaining rendering time ([#795](https://github.com/havenhq/revideo/issues/795)) ([1a46148](https://github.com/havenhq/revideo/commit/1a4614801869ab36827ca857d66eed8de9cffd09)), closes [#784](https://github.com/havenhq/revideo/issues/784)
* **ui:** improve rendering button ([#662](https://github.com/havenhq/revideo/issues/662)) ([2b4ae70](https://github.com/havenhq/revideo/commit/2b4ae70ea0b0305fbb2596e95bbc70440718bbe2))
* **ui:** include function names in stack traces ([#693](https://github.com/havenhq/revideo/issues/693)) ([835c0fa](https://github.com/havenhq/revideo/commit/835c0fa4b70429db6fe96be96d6d9e44949f7f6c))
* **ui:** list available shortcuts ([#444](https://github.com/havenhq/revideo/issues/444)) ([443fcc9](https://github.com/havenhq/revideo/commit/443fcc9feb1a1ca69aecbc4db2e194ce4f50f72e))
* **ui:** make inspector toggleable ([#921](https://github.com/havenhq/revideo/issues/921)) ([a365951](https://github.com/havenhq/revideo/commit/a365951e69c01cac1ea23d173034ad83f988c8eb))
* **ui:** new sidebar ([#692](https://github.com/havenhq/revideo/issues/692)) ([b555ee1](https://github.com/havenhq/revideo/commit/b555ee1d10f8a6e1b380c043dff2717ffa01a068)), closes [#492](https://github.com/havenhq/revideo/issues/492)
* **ui:** presentation interface ([#487](https://github.com/havenhq/revideo/issues/487)) ([1899f02](https://github.com/havenhq/revideo/commit/1899f020fb1c0b2136de4401e6fc068bcf5e0cc4))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** shift + right arrow moves to last frame ([#354](https://github.com/havenhq/revideo/issues/354)) ([4b81709](https://github.com/havenhq/revideo/commit/4b8170971400c5bf4fe690a58d3f44c3e1d00b94)), closes [#353](https://github.com/havenhq/revideo/issues/353)
* **ui:** small improvements ([#833](https://github.com/havenhq/revideo/issues/833)) ([f44400c](https://github.com/havenhq/revideo/commit/f44400c458a1d7f49520494f01efb9936f4df83e))
* **ui:** timeline dragging ([#794](https://github.com/havenhq/revideo/issues/794)) ([248e454](https://github.com/havenhq/revideo/commit/248e4546367f9d99221f64b811a07d54a9988e48)), closes [#699](https://github.com/havenhq/revideo/issues/699)
* **ui:** timeline overhaul ([#47](https://github.com/havenhq/revideo/issues/47)) ([4232a60](https://github.com/havenhq/revideo/commit/4232a6072540b54451e99e18c1001db0175bb93f)), closes [#20](https://github.com/havenhq/revideo/issues/20)
* **ui:** timeline scrubbing ([#862](https://github.com/havenhq/revideo/issues/862)) ([211b9a4](https://github.com/havenhq/revideo/commit/211b9a4327720afd1ce0ff93868a501c2fd745aa)), closes [#286](https://github.com/havenhq/revideo/issues/286)
* **ui:** vertical line on time event ([#808](https://github.com/havenhq/revideo/issues/808)) ([18015d6](https://github.com/havenhq/revideo/commit/18015d6714ffe2a6255f26895aa9a7c1908a4f7a)), closes [#804](https://github.com/havenhq/revideo/issues/804)
* **ui:** visual changes ([#96](https://github.com/havenhq/revideo/issues/96)) ([3d599f4](https://github.com/havenhq/revideo/commit/3d599f4e1788fbd15e996be8bf95679f1c6787bd))
* **ui:** zoom controls ([#531](https://github.com/havenhq/revideo/issues/531)) ([752350d](https://github.com/havenhq/revideo/commit/752350d0c547e21806f1b70a5c68025012e5ec11))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
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

* **2d:** fix audio offset editing ([#674](https://github.com/havenhq/revideo/issues/674)) ([58d6ef7](https://github.com/havenhq/revideo/commit/58d6ef79fa06e377e0c1821efe73585586d124a6))
* **2d:** fix performance issue with audio track ([#427](https://github.com/havenhq/revideo/issues/427)) ([c993770](https://github.com/havenhq/revideo/commit/c993770937ddfdf0ac39b144a1f79f1a300f7899))
* **2d:** fix version link ([#608](https://github.com/havenhq/revideo/issues/608)) ([4fe5b7a](https://github.com/havenhq/revideo/commit/4fe5b7a5150fbdf43ea50ecf3dc8b4690c0e2e34))
* correct dependencies for create package ([#15](https://github.com/havenhq/revideo/issues/15)) ([27a2737](https://github.com/havenhq/revideo/commit/27a273782f0f22fbe261712f26709c9708020b18))
* correctly await re-renders ([#918](https://github.com/havenhq/revideo/issues/918)) ([873a9a3](https://github.com/havenhq/revideo/commit/873a9a3eed2676de4cc7f31fbd5ea58817a80aff))
* **create:** update templates ([#439](https://github.com/havenhq/revideo/issues/439)) ([8483557](https://github.com/havenhq/revideo/commit/8483557f0a3ca7914aafacceab5d466abba59df0))
* fix player state not being saved ([#85](https://github.com/havenhq/revideo/issues/85)) ([74b54b9](https://github.com/havenhq/revideo/commit/74b54b970d1287e80fe2334a034844ad6a80c23b))
* fix tsdoc comments ([#21](https://github.com/havenhq/revideo/issues/21)) ([4b6cb66](https://github.com/havenhq/revideo/commit/4b6cb660ad82befcfd41188c7a8f9c8c0cba93ed)), closes [#18](https://github.com/havenhq/revideo/issues/18)
* limit fps to positive numbers ([#937](https://github.com/havenhq/revideo/issues/937)) ([c7c0c67](https://github.com/havenhq/revideo/commit/c7c0c6730e1a00e6b23077188bfc2d389e98cff2)), closes [#936](https://github.com/havenhq/revideo/issues/936)
* support hmr when navigating ([370ea16](https://github.com/havenhq/revideo/commit/370ea1676a1c34313c0fb917c0f0691538f72016))
* the resolution fields in Rendering no longer reset each other ([#73](https://github.com/havenhq/revideo/issues/73)) ([ddabec5](https://github.com/havenhq/revideo/commit/ddabec549be3cecec27cf9f5643b036e12a83472))
* **ui:** correctly drag time events ([#912](https://github.com/havenhq/revideo/issues/912)) ([81f6dd6](https://github.com/havenhq/revideo/commit/81f6dd6e485be451a50a695a146ed6b69e30bbc2))
* **ui:** correctly reset zoom ([#432](https://github.com/havenhq/revideo/issues/432)) ([a33ee14](https://github.com/havenhq/revideo/commit/a33ee14dfac3e1fe24c89d76631e23fe4cb625a6))
* **ui:** don't seek when editing time events ([#26](https://github.com/havenhq/revideo/issues/26)) ([524c200](https://github.com/havenhq/revideo/commit/524c200ef1bd6a6f52096d04c2aeed24a24cda6f))
* **ui:** downgrade preact ([#1](https://github.com/havenhq/revideo/issues/1)) ([5f7456f](https://github.com/havenhq/revideo/commit/5f7456fe4c5a1cc76ccd8fed5a6f9a8a4e846d27))
* **ui:** fix "go to source" ([#895](https://github.com/havenhq/revideo/issues/895)) ([ec729de](https://github.com/havenhq/revideo/commit/ec729dea0d65bc69aefc0abd601f365af1c4ed68))
* **ui:** fix collapse ([#698](https://github.com/havenhq/revideo/issues/698)) ([6bd8703](https://github.com/havenhq/revideo/commit/6bd8703ec9b16f55b3817f6a1f9130f17b66c69a))
* **ui:** fix inspector tab ([#374](https://github.com/havenhq/revideo/issues/374)) ([c4cb378](https://github.com/havenhq/revideo/commit/c4cb378c2f9d972bb41542bbe3b3aa314fa1f3ad))
* **ui:** fix new version link ([#505](https://github.com/havenhq/revideo/issues/505)) ([7459e7f](https://github.com/havenhq/revideo/commit/7459e7f8355163f3cb6a3ed791fc41a2962a186e))
* **ui:** fix onChange handlers ([#515](https://github.com/havenhq/revideo/issues/515)) ([a23d06c](https://github.com/havenhq/revideo/commit/a23d06cbf6e29f37a9259e50fe71c482640b83fb))
* **ui:** fix out of range warning ([#939](https://github.com/havenhq/revideo/issues/939)) ([c9f466f](https://github.com/havenhq/revideo/commit/c9f466f20ff1a3e2cb77aa5575823947ef9beeee))
* **ui:** fix play-pause button ([#299](https://github.com/havenhq/revideo/issues/299)) ([191f54a](https://github.com/havenhq/revideo/commit/191f54a0a5a9de2fd2dc27bffc6d21d692ce6f72))
* **ui:** fix snapshot ([#643](https://github.com/havenhq/revideo/issues/643)) ([590216a](https://github.com/havenhq/revideo/commit/590216ac094d6b6ef3e9c773499bc52063f617b1))
* **ui:** fix transparent background ([#886](https://github.com/havenhq/revideo/issues/886)) ([83f652f](https://github.com/havenhq/revideo/commit/83f652fdcfa075f5de24186ffdffd1b7db1d8fc9))
* **ui:** fix typo in viewport ID ([#620](https://github.com/havenhq/revideo/issues/620)) ([3a83f20](https://github.com/havenhq/revideo/commit/3a83f20cb1b8ddc7b95a8e36bf6f3d0cd036693b))
* **ui:** fix zoom to fit ([#561](https://github.com/havenhq/revideo/issues/561)) ([1c947b4](https://github.com/havenhq/revideo/commit/1c947b417e218809f33928d6cbb89d463bdc2e66))
* **ui:** ignore shortcuts when typing ([#521](https://github.com/havenhq/revideo/issues/521)) ([4d3e1a1](https://github.com/havenhq/revideo/commit/4d3e1a13caee2ddd03857961a44dd10a7e1cb32a)), closes [#518](https://github.com/havenhq/revideo/issues/518)
* **ui:** misaligned overlay ([#127](https://github.com/havenhq/revideo/issues/127)) ([0379730](https://github.com/havenhq/revideo/commit/03797302a302e28caf9f2428cfce4a122f827775))
* **ui:** prevent context menu in viewport ([#123](https://github.com/havenhq/revideo/issues/123)) ([0fdd85e](https://github.com/havenhq/revideo/commit/0fdd85ecf5b61907ce1e16f5fb9253540528a8b0))
* **ui:** prevent spawning multiple color pickers ([#747](https://github.com/havenhq/revideo/issues/747)) ([48ffd1f](https://github.com/havenhq/revideo/commit/48ffd1f2eec21f9880e172632a2310f5676e3c19)), closes [#744](https://github.com/havenhq/revideo/issues/744)
* **ui:** prevent timeline scroll when zooming ([#162](https://github.com/havenhq/revideo/issues/162)) ([b8278ae](https://github.com/havenhq/revideo/commit/b8278aeb7b92f215bccbd1aa57de17c9233cff01))
* **ui:** remember state of custom tabs ([#900](https://github.com/havenhq/revideo/issues/900)) ([eac45b8](https://github.com/havenhq/revideo/commit/eac45b88ed09fc7cddc3336e46d8697de5775b1f))
* **ui:** remove glossy <select> effect in Safari ([#292](https://github.com/havenhq/revideo/issues/292)) ([9c062b2](https://github.com/havenhq/revideo/commit/9c062b26e48fbdb1905daae25a3fb34df82307d3))
* **ui:** support small ranges ([#739](https://github.com/havenhq/revideo/issues/739)) ([cf32d8b](https://github.com/havenhq/revideo/commit/cf32d8b08b94f5044987eb554cd250fc79fbc99d)), closes [#738](https://github.com/havenhq/revideo/issues/738)
* **ui:** use signals correctly ([#906](https://github.com/havenhq/revideo/issues/906)) ([f67d691](https://github.com/havenhq/revideo/commit/f67d691b5f2f6358120e9582a1839ef3d49c77b8))
* **ui:** version comparison issue ([#520](https://github.com/havenhq/revideo/issues/520)) ([93b5e08](https://github.com/havenhq/revideo/commit/93b5e088b4a4fda0d2177cb2cc6680c34fa72d30)), closes [#519](https://github.com/havenhq/revideo/issues/519)
* use correct scene sizes ([#146](https://github.com/havenhq/revideo/issues/146)) ([f279638](https://github.com/havenhq/revideo/commit/f279638f9ad7ed1f4c44900d48c10c2d6560946e))


### Features

* **2d:** expand animations and reduced motion ([#671](https://github.com/havenhq/revideo/issues/671)) ([b8e9d03](https://github.com/havenhq/revideo/commit/b8e9d03488f8ca7085b3e7e1b095a52f39f2bc89))
* **2d:** visual feedback about rendering process ([#681](https://github.com/havenhq/revideo/issues/681)) ([d0495f5](https://github.com/havenhq/revideo/commit/d0495f5c6396c05454a5323e4486ab4829adbc9e))
* add audio volume control through arrow keys ([#856](https://github.com/havenhq/revideo/issues/856)) ([8b86fd4](https://github.com/havenhq/revideo/commit/8b86fd4e70f91a0d5b1150d760427ca355666341))
* add basic logger ([#88](https://github.com/havenhq/revideo/issues/88)) ([3d82e86](https://github.com/havenhq/revideo/commit/3d82e863af3dc88b3709adbcd0b84e790d05c3b8)), closes [#17](https://github.com/havenhq/revideo/issues/17)
* add basic transform to Node class ([#83](https://github.com/havenhq/revideo/issues/83)) ([9e114c8](https://github.com/havenhq/revideo/commit/9e114c8830a99c78e6a4fd9265b0e7552758af14))
* add coordinates to preview ([#737](https://github.com/havenhq/revideo/issues/737)) ([330c1f9](https://github.com/havenhq/revideo/commit/330c1f962fb920269301e7ee8a2c49cbfc723d85))
* add E2E testing ([#101](https://github.com/havenhq/revideo/issues/101)) ([6398c54](https://github.com/havenhq/revideo/commit/6398c54e4c4d6667ce9f45b9bbef6ea110ea2215)), closes [#42](https://github.com/havenhq/revideo/issues/42)
* add experimental features ([#876](https://github.com/havenhq/revideo/issues/876)) ([498d387](https://github.com/havenhq/revideo/commit/498d3871d05d4dcc83453654bec7762d2ab32e7e))
* add inspection ([#82](https://github.com/havenhq/revideo/issues/82)) ([4d7f2ae](https://github.com/havenhq/revideo/commit/4d7f2aee6daeda1a2146b632dfdc28b455295776))
* add markdown logs ([#138](https://github.com/havenhq/revideo/issues/138)) ([e42447a](https://github.com/havenhq/revideo/commit/e42447a0c07a8192c06d21c5f1801f0266279075))
* add new hooks for plugins ([#679](https://github.com/havenhq/revideo/issues/679)) ([74e18bc](https://github.com/havenhq/revideo/commit/74e18bce71abd7e26a6415240603241b48cb36c2))
* add option to group output by scenes ([#477](https://github.com/havenhq/revideo/issues/477)) ([9934593](https://github.com/havenhq/revideo/commit/99345937e7ac92fb674fdee10288e467ffd941e2))
* add rendering again ([#43](https://github.com/havenhq/revideo/issues/43)) ([c10d3db](https://github.com/havenhq/revideo/commit/c10d3dbb63f6248eda04128ef0aa9d72c1edfcf7))
* add video node ([#86](https://github.com/havenhq/revideo/issues/86)) ([f4aa654](https://github.com/havenhq/revideo/commit/f4aa65437a18cc85b00199f80cd5e04654c00c4b))
* added file type and quality options to rendering panel ([#50](https://github.com/havenhq/revideo/issues/50)) ([bee71ef](https://github.com/havenhq/revideo/commit/bee71ef2673c269db47a4433831720b7ad0fb4e8)), closes [#24](https://github.com/havenhq/revideo/issues/24)
* animation player ([#92](https://github.com/havenhq/revideo/issues/92)) ([8155118](https://github.com/havenhq/revideo/commit/8155118eb13dc2a8b422b81aabacc923ce2f919b))
* application settings ([#697](https://github.com/havenhq/revideo/issues/697)) ([54016f5](https://github.com/havenhq/revideo/commit/54016f5cf3500abe13a217537307a3735d60f536)), closes [#167](https://github.com/havenhq/revideo/issues/167)
* auto meta fields ([#565](https://github.com/havenhq/revideo/issues/565)) ([645af6d](https://github.com/havenhq/revideo/commit/645af6d2b7e8d9332b6f08419c318ee9434d7f3f))
* better dependencies between packages ([#152](https://github.com/havenhq/revideo/issues/152)) ([a0a37b3](https://github.com/havenhq/revideo/commit/a0a37b3645fcb91206e65fd0a95b2f486b308c75))
* better dependencies between packages ([#153](https://github.com/havenhq/revideo/issues/153)) ([59a73d4](https://github.com/havenhq/revideo/commit/59a73d49a7b92c416e1f836a0f53bb676e9f924b))
* button for opening the output directory ([#663](https://github.com/havenhq/revideo/issues/663)) ([79f320c](https://github.com/havenhq/revideo/commit/79f320c07c422ca927b34bf339094fe0e70ffd0d))
* **core:** switch to vitest ([#99](https://github.com/havenhq/revideo/issues/99)) ([762eeb0](https://github.com/havenhq/revideo/commit/762eeb0a99c2f378d20dbd147f815ba6736099d9)), closes [#48](https://github.com/havenhq/revideo/issues/48)
* detect circular signal dependencies ([#129](https://github.com/havenhq/revideo/issues/129)) ([6fcdb41](https://github.com/havenhq/revideo/commit/6fcdb41df90dca1c39537a4f6d4960ab551f4d6e))
* display array values in inspector ([#670](https://github.com/havenhq/revideo/issues/670)) ([e71d74c](https://github.com/havenhq/revideo/commit/e71d74c9c04995393ad8ee942b8e6e5baa6f982f))
* display current package versions ([#501](https://github.com/havenhq/revideo/issues/501)) ([2972f67](https://github.com/havenhq/revideo/commit/2972f673e201310e69688ab6f2c1adf1cddf2bf3))
* editor improvements ([#121](https://github.com/havenhq/revideo/issues/121)) ([e8b32ce](https://github.com/havenhq/revideo/commit/e8b32ceff1b8216282c4b5713508ce1172645e20))
* get name from meta file ([#552](https://github.com/havenhq/revideo/issues/552)) ([ae2ed8a](https://github.com/havenhq/revideo/commit/ae2ed8a5998768f160ec340d8b63d600d27bc15c))
* improve error logs ([#953](https://github.com/havenhq/revideo/issues/953)) ([3b528cc](https://github.com/havenhq/revideo/commit/3b528cce13a3440c97641d1095ce09e737e89960))
* introduce editor plugins ([#879](https://github.com/havenhq/revideo/issues/879)) ([2b72007](https://github.com/havenhq/revideo/commit/2b720074d45fc254dc40b534785b591ae44a3f37))
* make exporting concurrent ([4f9ef8d](https://github.com/havenhq/revideo/commit/4f9ef8d40d9d9c1147e2edfc0766c5ea5cc4297c))
* meta field descriptions ([#664](https://github.com/havenhq/revideo/issues/664)) ([80c9d07](https://github.com/havenhq/revideo/commit/80c9d07f88f4a3df0f99e5741b31313f891a5d51))
* minor console improvements ([#145](https://github.com/havenhq/revideo/issues/145)) ([3e32e73](https://github.com/havenhq/revideo/commit/3e32e73434ad872049af9e3f1f711bc0185410f4))
* navigate to scene and node source ([#144](https://github.com/havenhq/revideo/issues/144)) ([86d495d](https://github.com/havenhq/revideo/commit/86d495d01a9f8f0a58e676fedb6df9c12a14d14a))
* navigate to slide source ([#490](https://github.com/havenhq/revideo/issues/490)) ([b5ae4bf](https://github.com/havenhq/revideo/commit/b5ae4bf37076b262a20949cca030db3902186c8d))
* new playback architecture ([#402](https://github.com/havenhq/revideo/issues/402)) ([bbe3e2a](https://github.com/havenhq/revideo/commit/bbe3e2a24de068a88f49ed7a2f13e9717039733b)), closes [#166](https://github.com/havenhq/revideo/issues/166)
* new plugin hooks ([#723](https://github.com/havenhq/revideo/issues/723)) ([9a2b5ab](https://github.com/havenhq/revideo/commit/9a2b5ab8be0d001414fd00da3053d408e00fd1cd))
* open time events in editor ([#87](https://github.com/havenhq/revideo/issues/87)) ([74b781d](https://github.com/havenhq/revideo/commit/74b781d57fca7ef1d10904673276f2a7354c01b8))
* publish package to npm ([#6](https://github.com/havenhq/revideo/issues/6)) ([1e508b9](https://github.com/havenhq/revideo/commit/1e508b983d75cc7a647f5d6de5ce62ff4ec90953))
* support for multiple projects ([#57](https://github.com/havenhq/revideo/issues/57)) ([573752d](https://github.com/havenhq/revideo/commit/573752dd4d79d62a1a30958f1ed550d2cf22c344)), closes [#141414](https://github.com/havenhq/revideo/issues/141414)
* support multiple players ([#128](https://github.com/havenhq/revideo/issues/128)) ([24f75cf](https://github.com/havenhq/revideo/commit/24f75cf7cdaf38f890e3936edf175afbfd340210))
* switch to Vite ([#28](https://github.com/havenhq/revideo/issues/28)) ([65b9133](https://github.com/havenhq/revideo/commit/65b91337dbc47fe51cecc83657f79fab15343a0d)), closes [#141414](https://github.com/havenhq/revideo/issues/141414) [#13](https://github.com/havenhq/revideo/issues/13)
* **ui:** add color picker ([#691](https://github.com/havenhq/revideo/issues/691)) ([a33059c](https://github.com/havenhq/revideo/commit/a33059c0f455814919db31bc9e5e932907c797e4))
* **ui:** add custom presentation overlays ([#884](https://github.com/havenhq/revideo/issues/884)) ([4696d3c](https://github.com/havenhq/revideo/commit/4696d3c8cb8b68e3475406359f9cf6b875b1c838)), closes [#825](https://github.com/havenhq/revideo/issues/825)
* **ui:** add direct range selection & playhead shortcuts ([#907](https://github.com/havenhq/revideo/issues/907)) ([39264fc](https://github.com/havenhq/revideo/commit/39264fc074da739efddf24ef080f6c5f279f8014))
* **ui:** add external link to docs ([#346](https://github.com/havenhq/revideo/issues/346)) ([fc4ee5d](https://github.com/havenhq/revideo/commit/fc4ee5d028312904ed9e11c5341ac00f36e7242b))
* **ui:** add goto start and goto end buttons ([#814](https://github.com/havenhq/revideo/issues/814)) ([449f194](https://github.com/havenhq/revideo/commit/449f1946474af9886135571c14c83b8440bdf28c))
* **ui:** add number input dragging ([#917](https://github.com/havenhq/revideo/issues/917)) ([1b5c232](https://github.com/havenhq/revideo/commit/1b5c23260c3015608f202a103b4c0aebd1860e36)), closes [#799](https://github.com/havenhq/revideo/issues/799)
* **ui:** add quarter resolution ([#421](https://github.com/havenhq/revideo/issues/421)) ([d0160d0](https://github.com/havenhq/revideo/commit/d0160d0d5ef76ffb0d3591566891b5efa4061744))
* **ui:** add shortcuts to button titles ([#532](https://github.com/havenhq/revideo/issues/532)) ([3549dd3](https://github.com/havenhq/revideo/commit/3549dd3fd7ef47376a5a2dd516609499d3985ac3))
* **ui:** add volume slider ([#872](https://github.com/havenhq/revideo/issues/872)) ([5ac3069](https://github.com/havenhq/revideo/commit/5ac3069f027ee123c212217dcf8d26a78a3aa106))
* **ui:** custom checkbox style ([#529](https://github.com/havenhq/revideo/issues/529)) ([af98db1](https://github.com/havenhq/revideo/commit/af98db103d66e8af059dc483d49984b9adb9b95c))
* **ui:** custom inspectors ([#913](https://github.com/havenhq/revideo/issues/913)) ([6c54424](https://github.com/havenhq/revideo/commit/6c544248a2bd733f2d42676a0ed60c93b79ee574))
* **ui:** estimate remaining rendering time ([#795](https://github.com/havenhq/revideo/issues/795)) ([1a46148](https://github.com/havenhq/revideo/commit/1a4614801869ab36827ca857d66eed8de9cffd09)), closes [#784](https://github.com/havenhq/revideo/issues/784)
* **ui:** improve rendering button ([#662](https://github.com/havenhq/revideo/issues/662)) ([2b4ae70](https://github.com/havenhq/revideo/commit/2b4ae70ea0b0305fbb2596e95bbc70440718bbe2))
* **ui:** include function names in stack traces ([#693](https://github.com/havenhq/revideo/issues/693)) ([835c0fa](https://github.com/havenhq/revideo/commit/835c0fa4b70429db6fe96be96d6d9e44949f7f6c))
* **ui:** list available shortcuts ([#444](https://github.com/havenhq/revideo/issues/444)) ([443fcc9](https://github.com/havenhq/revideo/commit/443fcc9feb1a1ca69aecbc4db2e194ce4f50f72e))
* **ui:** make inspector toggleable ([#921](https://github.com/havenhq/revideo/issues/921)) ([a365951](https://github.com/havenhq/revideo/commit/a365951e69c01cac1ea23d173034ad83f988c8eb))
* **ui:** new sidebar ([#692](https://github.com/havenhq/revideo/issues/692)) ([b555ee1](https://github.com/havenhq/revideo/commit/b555ee1d10f8a6e1b380c043dff2717ffa01a068)), closes [#492](https://github.com/havenhq/revideo/issues/492)
* **ui:** presentation interface ([#487](https://github.com/havenhq/revideo/issues/487)) ([1899f02](https://github.com/havenhq/revideo/commit/1899f020fb1c0b2136de4401e6fc068bcf5e0cc4))
* **ui:** scene graph ([#909](https://github.com/havenhq/revideo/issues/909)) ([bf85c5b](https://github.com/havenhq/revideo/commit/bf85c5b4a339719e79da1b87b1aed4492166ce79))
* **ui:** shift + right arrow moves to last frame ([#354](https://github.com/havenhq/revideo/issues/354)) ([4b81709](https://github.com/havenhq/revideo/commit/4b8170971400c5bf4fe690a58d3f44c3e1d00b94)), closes [#353](https://github.com/havenhq/revideo/issues/353)
* **ui:** small improvements ([#833](https://github.com/havenhq/revideo/issues/833)) ([f44400c](https://github.com/havenhq/revideo/commit/f44400c458a1d7f49520494f01efb9936f4df83e))
* **ui:** timeline dragging ([#794](https://github.com/havenhq/revideo/issues/794)) ([248e454](https://github.com/havenhq/revideo/commit/248e4546367f9d99221f64b811a07d54a9988e48)), closes [#699](https://github.com/havenhq/revideo/issues/699)
* **ui:** timeline overhaul ([#47](https://github.com/havenhq/revideo/issues/47)) ([4232a60](https://github.com/havenhq/revideo/commit/4232a6072540b54451e99e18c1001db0175bb93f)), closes [#20](https://github.com/havenhq/revideo/issues/20)
* **ui:** timeline scrubbing ([#862](https://github.com/havenhq/revideo/issues/862)) ([211b9a4](https://github.com/havenhq/revideo/commit/211b9a4327720afd1ce0ff93868a501c2fd745aa)), closes [#286](https://github.com/havenhq/revideo/issues/286)
* **ui:** vertical line on time event ([#808](https://github.com/havenhq/revideo/issues/808)) ([18015d6](https://github.com/havenhq/revideo/commit/18015d6714ffe2a6255f26895aa9a7c1908a4f7a)), closes [#804](https://github.com/havenhq/revideo/issues/804)
* **ui:** visual changes ([#96](https://github.com/havenhq/revideo/issues/96)) ([3d599f4](https://github.com/havenhq/revideo/commit/3d599f4e1788fbd15e996be8bf95679f1c6787bd))
* **ui:** zoom controls ([#531](https://github.com/havenhq/revideo/issues/531)) ([752350d](https://github.com/havenhq/revideo/commit/752350d0c547e21806f1b70a5c68025012e5ec11))
* unify core types ([#71](https://github.com/havenhq/revideo/issues/71)) ([9c5853d](https://github.com/havenhq/revideo/commit/9c5853d8bc65204693c38109a25d1fefd44241b7))
* webgl shaders ([#920](https://github.com/havenhq/revideo/issues/920)) ([849216e](https://github.com/havenhq/revideo/commit/849216ed34c4d29742c621b43a95ec4d99f8c755))


### Reverts

* "ci(release): 9.1.3 [skip ci]" ([62953a6](https://github.com/havenhq/revideo/commit/62953a6a8a1b1da3eb2e5f51c9fe60c716d6b94b))
* ci(release): 1.0.1 [skip ci] ([#175](https://github.com/havenhq/revideo/issues/175)) ([161a046](https://github.com/havenhq/revideo/commit/161a04647ecdc8203daf2d887a6a44c79a92ee20))
* ci(release): 2.0.0 [skip ci] ([#176](https://github.com/havenhq/revideo/issues/176)) ([551096b](https://github.com/havenhq/revideo/commit/551096bf636a791ea7c7c1d38d8e03c360433008))
* ci(release): 3.12.4 [skip ci] ([#908](https://github.com/havenhq/revideo/issues/908)) ([86c5170](https://github.com/havenhq/revideo/commit/86c517067c7225f827aa05b47e2397e0d90fe622))


### BREAKING CHANGES

* `makeProject` no longer accepts some settings.

Settings such as `background` and `audioOffset` are now stored in the project
meta file.
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
