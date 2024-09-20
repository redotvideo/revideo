import {Layout, Node, Rect, makeScene2D} from '@revideo/2d';
import {createRef} from '@revideo/core';

export default makeScene2D('layout-group', function* (view) {
  const group = createRef<Node>();

  view.add(
    <>
      <Layout direction={'column'} width={960} gap={40} layout>
        <Node ref={group}>
          <Rect height={240} fill={'#ff6470'} />
          <Rect height={240} fill={'#ff6470'} />
        </Node>
        <Rect height={240} fill={'#ff6470'} />
      </Layout>
    </>,
  );

  yield* group().opacity(0.1, 1).to(1, 1);
});
