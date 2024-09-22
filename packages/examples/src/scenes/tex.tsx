import {Latex, makeScene2D} from '@revideo/2d';
import {createRef, waitFor} from '@revideo/core';

export default makeScene2D('tex', function* (view) {
  const tex = createRef<Latex>();
  view.add(
    <Latex
      ref={tex}
      tex="{\color{white} x = \sin \left( \frac{\pi}{2} \right)}"
      y={0}
      width={400} // height and width can calculate based on each other
    />,
  );

  yield* waitFor(2);
  yield* tex().opacity(0, 1);
  yield* waitFor(2);
  yield* tex().opacity(1, 1);
});
