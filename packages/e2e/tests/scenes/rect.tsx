import {makeScene2D, Rect} from '@revideo/2d';

export default makeScene2D('rect', function* (view) {
  view.add(
    <Rect
      width={300}
      height={200}
      fill={'#0008'}
      radius={[0, 100, 30, 200]}
      start={0.35}
    />,
  );
  yield;
});
