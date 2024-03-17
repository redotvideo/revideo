import {Line, makeScene2D} from '@revideo/2d';
import {createRef} from '@revideo/core';

export default makeScene2D(function* (view) {
  const line = createRef<Line>();
  view.add(
    <Line
      ref={line}
      points={[
        [-150, 70],
        [150, 70],
        [0, -70],
      ]}
      stroke={'lightseagreen'}
      lineWidth={8}
      radius={20}
      closed
    />,
  );

  yield* line()
    .points(
      [
        [-150, 0],
        [0, 100],
        [150, 0],
        [150, -70],
        [-150, -70],
      ],
      2,
    )
    .back(2);
});
