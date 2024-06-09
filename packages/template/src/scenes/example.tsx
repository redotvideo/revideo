import {Audio, Rect, makeScene2D} from '@revideo/2d';
import {createRef, waitFor} from '@revideo/core';

export default makeScene2D(function* (view) {
  const rect = createRef<Rect>();

  view.add(<Audio play={true} src={'/likethis.mp3'} />);

  yield* waitFor(2);

  view.add(<Audio play={true} src={'/lofi.mp3'} volume={0.5} />);

  yield* waitFor(2);

  view.add(<Audio play={true} src={'/nice.mp3'} volume={0.1} />);

  yield* waitFor(2);

  view.add(<Audio play={true} src={'/stomp.mp3'} />);

  yield* waitFor(2);

  view.add(<Audio play={true} src={'/thanks.mp3'} />);

  yield* waitFor(2);
});
