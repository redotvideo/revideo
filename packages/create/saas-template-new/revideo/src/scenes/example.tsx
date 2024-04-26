import {Audio, Img, makeScene2D, Txt, View2D} from '@revideo/2d';
import {all, createRef, useScene, waitFor} from '@revideo/core';

interface Word {
  punctuatedWord: string;
  start: number;
  end: number;
}

export default makeScene2D(function* (view) {
  const images = useScene().variables.get('images', [])();
  const audioUrl = useScene().variables.get('audioUrl', 'none')();
  const words = useScene().variables.get('words', [])();

  const duration = words[words.length - 1].end + 0.5; // add one half additional second

  yield view.add(<Audio src={audioUrl} play={true} />);

  yield* all(displayImages(view, images, duration), displayWords(view, words));
});

function* displayImages(view: View2D, images: string[], totalDuration: number) {
  console.log('duration', totalDuration);
  for (const img of images) {
    const ref = createRef<Img>();
    view.add(<Img src={img} size={['100%', '100%']} ref={ref} zIndex={0} />);
    yield* waitFor(totalDuration / images.length);
  }
}

function* displayWords(view: View2D, words: Word[]) {
  const fontColor = useScene().variables.get('fontColor', 'red')();

  let waitBefore = words[0].start;

  for (let i = 0; i < words.length; i++) {
    const currentClip = words[i];
    const nextClipStart = i < words.length - 1 ? words[i + 1].start : null;
    const isLastClip = i === words.length - 1;
    const waitAfter = isLastClip ? 1 : 0;
    const textRef = createRef<Txt>();
    yield* waitFor(waitBefore);
    view.add(
      <Txt
        fontSize={100}
        fontWeight={800}
        ref={textRef}
        fontFamily={'Rubik'}
        textWrap={true}
        textAlign={'center'}
        fill={fontColor}
        width={'70%'}
        lineWidth={6}
        shadowBlur={10}
        shadowColor={'black'}
        zIndex={1}
      >
        {currentClip.punctuatedWord}
      </Txt>,
    );
    yield* waitFor(currentClip.end - currentClip.start + waitAfter);
    textRef().remove();
    waitBefore = nextClipStart !== null ? nextClipStart - currentClip.end : 0;
  }
}
