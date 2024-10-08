import {Img, makeScene2D} from '@revideo/2d';
import {all, createRef} from '@revideo/core';

import logoSvg from '@revideo/examples/assets/logo.svg';

export default makeScene2D('media-image', function* (view) {
  const imageRef = createRef<Img>();

  yield view.add(<Img ref={imageRef} src={logoSvg} scale={2} />);

  yield* all(
    imageRef().scale(2.5, 1.5).to(2, 1.5),
    imageRef().absoluteRotation(90, 1.5).to(0, 1.5),
  );
});
