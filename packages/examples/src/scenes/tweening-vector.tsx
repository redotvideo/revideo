import {Circle, makeScene2D} from '@revideo/2d';
import {Vector2, createRef, easeInOutCubic, tween} from '@revideo/core';

export default makeScene2D('tweening-vector', function* (view) {
  const circle = createRef<Circle>();

  view.add(
    <Circle
      //highlight-start
      ref={circle}
      x={-300}
      y={200}
      width={240}
      height={240}
      fill="#e13238"
    />,
  );
  //highlight-start
  yield* tween(2, value => {
    circle().position(
      Vector2.arcLerp(
        new Vector2(-300, 200),
        new Vector2(300, -200),
        easeInOutCubic(value),
      ),
    );
  });
  //highlight-end
});
