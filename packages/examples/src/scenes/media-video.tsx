import {Video, makeScene2D} from '@revideo/2d';
import {createRef} from '@revideo/core';

import exampleMp4 from '@revideo/examples/assets/example.mp4';

export default makeScene2D(function* (view) {
  const videoRef = createRef<Video>();

  view.add(<Video ref={videoRef} src={exampleMp4} />);

  videoRef().play();
  yield* videoRef().scale(1.25, 2).to(1, 2);
});
