[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
![Publish NPM](https://github.com/julianiff/living-styleguide/workflows/Publish%20NPM/badge.svg?branch=master)

# Living Styleguide - Component Library in react

## Available Scripts

In the root directory, you can run:

### `yarn`

Install all development dependencies.

### `yarn storybook`

Run a local storybook with all the components and their stories.

### `lerna link convert`

Link packages into root to have only one node_modules

### `lerna create <name>`

Create new Lerna managed component.

### `lerna add <dependency>`

Adds new depdency to all subsequent packages [lerna add](https://github.com/lerna/lerna/tree/master/commands/add) (For example styled-components needed to be installed as a dependency)

### `lerna add <dependency> --peer`

Adds dependencies as peerDependencies to all the packages.

### `lerna run dev`

Runs in all the packages the npm dev script.

## Conventional Commits, how to commit to trigger CI jobs

The CI jobs evaluate the commit messages, when merged on master. A short summary for conventional commits can be found on [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) and on [Angular Release Messages](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit). The most important types are:

- **fix**: patches a bug in your codebase (this correlates with PATCH in semantic versioning, x.x.1 -> x.x.2).
- **feat**: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in semantic versioning x.1.x -> x.2.x).
- **BREAKING CHANGE**: or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in semantic versioning 1.x.x -> 2.x.x). A BREAKING CHANGE can be part of commits of any type.

An example commit message has the following logic:

```
<type>(<optional scope>): <short summary>
  │         │                   │
  │         │                   └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │         │
  │         └─⫸ Optional Commit Scope: ls-card|ls-list|ls-XXXX
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|style|test
```

## Adding a new Component

- Copy existing component.
- Adjust package.json of new component and add correct type file (name of the <component>.d.js).
- Run `lerna link convert` in root
- run `yarn`to generate new yarn.lock

## Learn More

- [Lerna Concepts](https://github.com/lerna/lerna#concepts)
- [React.js](https://reactjs.org/)
- [Storybook](https://storybook.js.org/)
