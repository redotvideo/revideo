import {Circle, makeScene2D} from '@revideo/2d';
import {createRef, map, tween} from '@revideo/core';

export default makeScene2D('tweening-linear', function* (view) {
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
    circle().position.x(map(-300, 300, value));
  });
  //highlight-end
});
