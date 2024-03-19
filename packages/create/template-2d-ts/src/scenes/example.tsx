import {Audio, Img, Layout, Rect, Txt, Video, makeScene2D} from '@revideo/2d';
import {all, chain, createRef, waitFor} from '@revideo/core';

export default makeScene2D(function* (view) {
  const upperBox = createRef<Rect>();
  const logoRef = createRef<Img>();

  view.add(
    <>
      <Layout direction={'column'} size={[1024, 1792]} layout={true}>
        <Rect
          fill={'#FFFFFF'}
          size={['100%', '40%']}
          direction={'column'}
          gap={'20%'}
          ref={upperBox}
          justifyContent={'center'}
          alignItems={'center'}
          layout={true}
        />
        <Video
          src={
            'https://revideo-example-assets.s3.amazonaws.com/aurora-borealis.mp4'
          }
          size={['100%', '60%']}
          play={true}
        />
      </Layout>
      <Audio
        src={
          'https://revideo-example-assets.s3.amazonaws.com/heart-on-my-sleeve.mp3'
        }
        play={true}
        time={6.6}
      />
    </>,
  );

  yield* waitFor(0.5);

  upperBox().add(
    <Txt fontWeight={700} fontSize={70}>
      Hello! Welcome to
    </Txt>,
  );
  upperBox().add(
    <Img
      width={'1%'}
      ref={logoRef}
      src={'https://revideo-example-assets.s3.amazonaws.com/revideo-banner.png'}
    />,
  );

  yield* chain(
    all(logoRef().scale(30, 2), logoRef().rotation(360, 2)),
    logoRef().scale(40, 2),
  );
});
