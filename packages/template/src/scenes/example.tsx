import {Rect, makeScene2D} from '@revideo/2d';
import {
  all,
  createRef,
  easeInExpo,
  easeInOutExpo,
  useScene,
  waitFor,
} from '@revideo/core';

export default makeScene2D(function* (view) {
  const rect = createRef<Rect>();

  view.add(
    <Rect ref={rect} size={320} radius={80} smoothCorners fill={'#f3303f'} />,
  );

  yield* rect().scale(2, 1, easeInOutExpo).to(1, 0.6, easeInExpo);
  const circleFill = useScene().variables.get('fill', 'blue')();
  rect().fill(circleFill);
  yield* all(rect().ripple(1));
  yield* waitFor(0.3);
});
