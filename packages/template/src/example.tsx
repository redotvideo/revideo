/** @jsxImportSource @revideo/2d/lib */
import {
  Gradient,
  Img,
  Layout,
  Line,
  Rect,
  Spline,
  Txt,
  makeScene2D,
} from '@revideo/2d';
import {Vector2, all, createRef, useScene, waitFor} from '@revideo/core';

/**
 * Some example data to use in the scene when no data is provided
 */
const exampleData = [
  0, 105826000, 265664000, 265671000, 265684000, 265689000, 265694000,
  335596000, 414108000, 416767000, 425249000, 674375000, 964912000, 1177339000,
  1186686000, 1213498000, 1214781000, 1214895000, 1219921000, 1221668000,
  1222281000, 1222410000, 1222433000, 1227527000, 1228300000, 1230497000,
  1230501000, 1231234000, 1231239000, 1231314000, 1232727000, 1233520000,
  1234669000, 1236349000, 1236806000, 1237795000, 1245092000, 1251533000,
  1254263000, 1262147000, 1262899000, 1264370000, 1267519000, 1268870000,
  1271198000, 1271847000, 1274347000, 1276515000, 1276671000, 1279966000,
  1280551000, 1283338000, 1283777000, 1285088000, 1286336000, 1286728000,
  1293071000, 1293863000, 1294963000, 1295005000, 1301398000, 1303551000,
  1312541000, 1317615000, 1321096000, 1323718000, 1337789000, 1343521000,
  1344711000, 1346543000, 1371003000, 1389862000, 1494428000, 1525657000,
  1533978000, 1591597000, 1654009000, 1738062000, 1817754000, 1860276000,
  1883450000, 1883998000, 1891635000, 1930667000, 2055652000, 2201181000,
  2216214000, 2246708000, 2324529000, 2366960000, 2366996000, 2391904000,
  2479357000, 2596772000, 2601046000, 2615944000, 2637502000, 2689660000,
  2733368000, 2737046000, 2812890000, 2863564000, 2955232000, 2955857000,
  2961163000, 2983003000, 2984020000, 2987437000, 2990281000, 2996230000,
  3007072000, 3007175000, 3013062000, 3016417000, 3018616000, 3019154000,
  3026357000, 3029804000, 3036897000, 3037202000, 3037298000, 3037737000,
  3038639000, 3039016000, 3039322000, 3042145000, 3042529000, 3043490000,
  3044558000, 3046472000, 3047534000, 3048199000, 3048524000, 3048862000,
  3051935000, 3058895000, 3065009000, 3072790000, 3074109000, 3075041000,
  3079153000, 3079875000, 3080083000, 3099026000, 3099874000, 3103039000,
  3109664000, 3112885000, 3127743000, 3134934000, 3140075000, 3173641000,
  3173788000, 3176205000, 3176720000, 3178996000, 3183882000, 3184287000,
  3186716000, 3191153000, 3196320000, 3196620000, 3198638000, 3213076000,
  3234269000, 3263068000, 3270668000, 3278896000, 3284646000, 3290556000,
  3294331000, 3297742000, 3332896000, 3344044000, 3368767000, 3378844000,
  3398863000, 3434188000, 3435264000, 3435696000, 3435803000, 3442071000,
  3517995000, 3519849000, 3554474000, 3558289000, 3611948000, 3616675000,
  3618144000, 3622775000, 3635577000, 3640600000, 3669592000, 3679346000,
  3698749000, 3715355000, 3729047000, 3759434000, 3787838000, 3801028000,
  3817911000, 3878742000, 3983973000, 4006119000, 4067980000, 4087451000,
  4101992000, 4200703000, 4212009000, 4212143000, 4212882000, 4213748000,
  4213977000, 4214180000, 4214445000, 4220193000, 4220422000, 4222468000,
  4236874000, 4258899000, 4326288000, 4334389000, 4401276000, 4416803000,
  4421444000, 4437462000, 4501703000, 4556531000, 4598409000, 4690540000,
  4736772000, 4742561000, 4803793000, 4834054000, 4866127000, 4868886000,
  4873958000, 4891455000, 4921352000, 4941837000, 4953890000, 4956018000,
  4979428000, 4985123000, 5062420000, 5108308000, 5333539000, 5459835000,
  5461002000, 5521826000, 5584695000, 5586217000, 5598497000, 5604962000,
  5625413000, 5636146000, 5637453000, 5682023000, 5718405000, 5722303000,
  5760543000, 5769209000, 5772790000, 5880569000, 6110458000, 6135651000,
  6185575000, 6202790000, 6232205000, 6284650000, 6297771000, 6392835000,
  6401789000, 6480914000, 6566872000, 6643031000, 6695443000, 6696088000,
  6710689000, 6712966000, 6727715000, 6733098000, 6783253000, 6805478000,
  6875821000, 6904033000, 6971558000, 6972735000,
];

const exampleRepoName = 'redotvideo/revideo10';
const exampleRepoImage = 'https://avatars.githubusercontent.com/u/133898679';

export default makeScene2D('scene 1', function* (view) {
  // Get variables
  const repoName = useScene().variables.get('repoName', exampleRepoName);
  const repoImage = useScene().variables.get('repoImage', exampleRepoImage);
  const data = useScene().variables.get('data', exampleData);

  const max = Math.max(...data());
  const videoLength = 5; // seconds
  const totalValues = data().length;

  // Black background
  view.fill('#000000');

  // Calculate coordinates for each timestamp
  const linePoints = data().map((ms, i) => {
    const x = (ms / max) * view.width();
    const xShifted = x - view.width() / 2;

    const y = ((-i / totalValues) * view.height()) / 2;
    const yShifted = y + view.height() / 4;

    return new Vector2(xShifted, yShifted);
  });

  // Coordinates of the bottom corners
  const bottomCorners = [
    new Vector2(view.width() / 2, view.height() / 2),
    new Vector2(-view.width() / 2, view.height() / 2),
  ];

  // Background gradient
  const gradient = new Gradient({
    type: 'linear',
    from: [0, 0],
    to: [0, view.height()],
    stops: [
      {offset: 0, color: '#000000'},
      {offset: 1, color: 'green'},
    ],
  });

  // Refs, used to animate elements
  const outerLayoutRef = createRef<Layout>();
  const innerLayoutRef = createRef<Layout>();
  const rectRef = createRef<Rect>();

  // Add elements to the view
  view.add(
    <>
      <>
        <Line points={linePoints} lineWidth={30} stroke={'#3EAC45'} />
        <Spline points={[...linePoints, ...bottomCorners]} fill={gradient} />
        <Rect
          ref={rectRef}
          x={view.width() / 2}
          y={0}
          width={view.width() * 2}
          height={view.height()}
          fill={'#000000'}
        />
      </>
      <Layout
        ref={outerLayoutRef}
        layout
        alignItems={'center'}
        gap={40}
        x={-870}
        y={-400}
        offset={[-1, 0]}
      >
        <Img
          src={repoImage()}
          width={100}
          height={100}
          stroke={'#555555'}
          lineWidth={8}
          strokeFirst={true}
          radius={10}
        />
        <Layout ref={innerLayoutRef} direction={'column'}>
          <Txt
            fontFamily={'Roboto'}
            text={repoName()}
            fill={'#ffffff'}
            x={-520}
            y={-395}
            fontSize={50}
            fontWeight={600}
          />
        </Layout>
      </Layout>
    </>,
  );

  // Resize the rectangle to reveal the scene
  yield* rectRef().width(0, videoLength);

  // Make rectangle transparent and cover the scene again
  rectRef().fill('#00000000');
  rectRef().width(view.width() * 2);

  // Cover the scene while the Layout block
  // is centered
  yield* all(
    rectRef().fill('#000000', 2),
    outerLayoutRef().x(0, 2),
    outerLayoutRef().y(-50, 2),
    outerLayoutRef().offset([0, 0], 2),
  );

  // Add text with the total number of stars
  const starTextRef = createRef<Txt>();
  innerLayoutRef().add(
    <Txt
      fontFamily={'Roboto'}
      ref={starTextRef}
      text={`${totalValues} stars`}
      fill={'#000000'}
      x={0}
      y={0}
      fontSize={40}
      fontWeight={500}
      marginBottom={-45}
    />,
  );
  yield* all(starTextRef().fill('#ffffff', 2), starTextRef().margin(0, 2));

  // Wait for 2 seconds
  yield* waitFor(2);
});
