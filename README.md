This branch contains some kind of fork of a project i am working on right now. I removed every peace of code, that's not really necessary to reproduce https://github.com/microsoft/vscode-eslint/issues/1994. But i kept the configs of TS and ESLint and all the dependencies in all `package.json`s (so they're pretty heavy).

# How to prepare?
1. `pnpm install`
2. `pnpm run lint` should pass
3. `pnpm run ts-check` should pass

# How to _not_ reproduce https://github.com/microsoft/vscode-eslint/issues/1994 ?
1. Open project in VS Code. No file should be opened automatically.
2. Open `apps/storybook-ui/stories/0_Pages/Demo.stories.tsx`.
3. Open `packages/ui/src/components/Composition/Composition.tsx`.

ESLint shouldn't complain about anything.

# How to reproduce https://github.com/microsoft/vscode-eslint/issues/1994 ?
1. Close all opened files in VS Code before closing VS Code itself.
2. Open project in VS Code. No file should be opened automatically.
3. Open `packages/ui/src/components/Composition/Composition.tsx`.
4. Open `apps/storybook-ui/stories/0_Pages/Demo.stories.tsx`.

ESLint now complains about being
> Unable to resolve path to module 'storybook-ui/utils/components/Button/Button'
