import {Circle, makeScene2D} from '@revideo/2d';
import {createRef, easeInOutCubic, map, tween} from '@revideo/core';

export default makeScene2D('tweening-cubic', function* (view) {
  const circle = createRef<Circle>();

  view.add(
    <Circle
      //highlight-start
      ref={circle}
      x={-300}
      width={240}
      height={240}
      fill="#e13238"
    />,
  );
  //highlight-start
  yield* tween(2, value => {
    circle().position.x(map(-300, 300, easeInOutCubic(value)));
  });
  //highlight-end
});
