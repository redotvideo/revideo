# Contributing

First and foremost, thank you for contributing to Revideo! We really appreciate
your effort :heart:

You can contribute to Revideo by opening issues or pull requests. You can also
help us by spreading the word about Revideo online or offline.

## What to work on

You can find features or bugs to work on by checking out our
[issues](https://github.com/redotvideo/revideo/issues). If you have ideas for
larger new features yourself, please open an issue first to discuss it. You can
also join our [Discord server](https://discord.com/invite/JDjbfp6q2G) to talk to
Revideo users and developers and learn about how the project can be improved.

## Development Setup

If you want to work on Revideo, you can fork the repository and clone it
locally. To install dependencies, run:

```
npm install
```

The `packages/template` folder contains an example revideo project - you should
use this project folder to test your code changes. To start the project, run
`npm run template:dev` (or `npm run template:render` to render a video). You can
also navigate to the `packages/template` folder and just run `npm run dev` /
`npm run render` in there.

Revideo is a monorepo consisting of many individual packages such as the
`renderer` or `ffmpeg` package. The monorepo is managed with lerna - every time
you make changes, you need to run the following command to build the project:

```
npx lerna run build
```

Note that the build process caches changes and sometimes ignores logs when
rebuilding. If you want to be sure that console.logs are not ignored, run the
above command with the `--skip-nx-cache` flag.

### Navigating and understanding the codebase

Revideo consists of the following packages, which you can find in the
`/packages` folder:

- `2d`: The default renderer for 2D motion graphics
- `cli`: The command line interface for Revideo
- `core`: All logic related to running and rendering animations.
- `create`: A package for bootstrapping new projects.
- `docs`: Our documentation website.
- `e2e`: End-to-end tests.
- `examples`: Animation examples used in documentation.
- `ffmpeg`: Utilities for ffmpeg and, contains logic for exporting videos
- `internal`: Internal helpers used for building the packages.
- `player-react`: A React component for displaying Revideo projects in a
  browser.
- `player`: A non-React Player the browser.
- `renderer`: A headless renderer for Revideo projects
- `telemetry`: Anonymous telemetry for understanding usage
- `template`: A template project included for developer's convenience.
- `ui`: The user interface used for editing.
- `vite-plugin`: A plugin for Vite used for developing and bundling animations

The package names and descriptions are pretty self-explanatory and should help
you find what package you need to work on to implement certain features. One
thing that is not intuivite is the role of the `vite-plugin` package:

Revideo doesn't have a true backend server and all of the functionality that
does not run in the browser is handled through vite plugins. Within
`vite-plugin/src/partials`, you'll find different vite plugins handling
different responsibilities. For instance
`vite-plugin/src/partials/ffmpegExporter.ts` is a ite plugin that manages the
communication between the browser sending video frames to the
`FFmpegExporterServer` from `packages/ffmpeg` through websockets. Other vite
plugins are responsible for reading to and writing from `.meta` files.

We plan on moving away from this setup to a more classical backend server in the
future - for now, this is however the way to implement backend functionality
when contributing to Revideo.

### CI / CD

We use Github Actions for CI/CD, you can find its configuration in
`.github/workflows`. Every pull request gets verified through the
`.github/workflows/verify.yml` pipeline, which checks linting, code style, and
runs some tests.

When submitting a PR, you should do the following to avoid the pipeline from
failing:

- run `npx lerna run build` to verify that the project build works
- run `npx prettier --write .` to fix code style issues
- adhere to the
  [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
  guidelines for your commit messages (e.g., `fix:`, `feat(ffmpeg):`, `chore:`)

## Questions?

Please join our [Discord server](https://discord.com/invite/JDjbfp6q2G) if you
have any further questions! You can also email us at hello@re.video.

Thank you for contributing to Revideo and happy coding!
