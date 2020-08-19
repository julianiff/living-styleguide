[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
![Publish NPM](https://github.com/julianiff/living-styleguide/workflows/Publish%20NPM/badge.svg?branch=master)

# Living Styleguide - Component Library in react

## Available Scripts

In the root directory, you can run:

### `yarn`

Install all development dependencies.

### `yarn storybook`

Run a local storybook with all the components and their stories.

### `lerna create <name>`

Create new Lerna managed component.

### Commit messages to trigger npm PATCH, MINOR, MAJOR release

This project follows the [Angular Release Messages](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit). A short summary can be found here [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) with the most important types beeing:

- **fix**: patches a bug in your codebase (this correlates with PATCH in semantic versioning).
- **feat**: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in semantic versioning).
- **BREAKING CHANGE**: or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in semantic versioning). A BREAKING CHANGE can be part of commits of any type.

An example commit message has the following logic:

```
<type>(<optional scope>): <short summary>
  │         │            │
  │         │            └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │         │
  │         └─⫸ Optional Commit Scope: ls-card|ls-list|ls-XXXX
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|style|test
```

## Learn More

- [Lerna Concepts](https://github.com/lerna/lerna#concepts)
- [React.js](https://reactjs.org/)
- [Storybook](https://storybook.js.org/)
