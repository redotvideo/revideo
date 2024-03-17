import {Circle, makeScene2D} from '@revideo/2d';
import {createRef} from '@revideo/core';

export default makeScene2D(function* (view) {
  // Create your animations here

  const circle = createRef();

  view.add(<Circle ref={circle} size={320} fill={'lightseagreen'} />);

  yield* circle().scale(2, 2).to(1, 2);
});
