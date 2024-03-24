<br/>
<p align="center">
  <a href="https://re.video">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./logo_dark.svg">
      <img width="360" alt="Revideo logo" src="./logo.svg">
    </picture>
  </a>
</p>
<p align="center">
  <a href="https://lerna.js.org"><img src="https://img.shields.io/badge/published%20with-lerna-c084fc?style=flat" alt="published with lerna"></a>
  <a href="https://vitejs.dev"><img src="https://img.shields.io/badge/powered%20by-vite-646cff?style=flat" alt="powered by vite"></a>
  <a href="https://www.npmjs.com/package/@revideo/core"><img src="https://img.shields.io/npm/v/@revideo/core?style=flat" alt="npm package version"></a>
  <a href="https://discord.com/invite/JDjbfp6q2G"><img src="https://img.shields.io/discord/1071029581009657896?style=flat&logo=discord&logoColor=fff&color=404eed" alt="discord"></a>
</p>
<br/>

# Revideo - Create Videos with Code

Revideo lets you create videos using Typescript. It is forked from the amazing [Motion Canvas](https://motioncanvas.io/) library and extended to provide features that are essential for video, such as:

- the ability to integrate and edit Audio
- an API for rendering parameterized videos

Revideo is meant to be an open-source alternative to [Remotion](https://www.remotion.dev/), which has a [restrictive license](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md), making it unsuitable for many projects. While Remotion is built on top of React, Revideo uses the HTML Canvas API and uses generator functions.
<br/>


## Getting Started

To create an example project, run the following command:

```bash
npm init @revideo@latest
```

The example project will have the following code, which defines the video shown below.

```tsx
import {Audio, Img, Video, makeScene2D} from '@revideo/2d';
import {all, chain, createRef, waitFor} from '@revideo/core';

export default makeScene2D(function* (view) {
  const logoRef = createRef<Img>();

  yield view.add(
    <>
      <Video
        src={'https://revideo-example-assets.s3.amazonaws.com/stars.mp4'}
        size={['100%', '100%']}
        play={true}
      />
      <Audio
        src={'https://revideo-example-assets.s3.amazonaws.com/chill-beat.mp3'}
        play={true}
        time={17.0}
      />
    </>,
  );

  yield* waitFor(1);

  view.add(
    <Img
      width={'1%'}
      ref={logoRef}
      src={
        'https://revideo-example-assets.s3.amazonaws.com/revideo-logo-white.png'
      }
    />,
  );

  yield* chain(
    all(logoRef().scale(40, 2), logoRef().rotation(360, 2)),
    logoRef().scale(60, 1),
  );
});
```

https://github.com/havenhq/revideo/assets/122226645/4d4e56ba-5143-4e4b-9acf-d8a04330d162
