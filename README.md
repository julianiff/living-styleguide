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

This project uses the angular release messages to trigger patch, minor, major of the npm package.

[Angular Release Messages](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)

It follows the following logic

```
<type>(<scope>): <short summary>
  │       │            │
  │       │            └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: ls-card|ls-list|ls-XXXX
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|style|test
```

## Learn More

- [Lerna Concepts](https://github.com/lerna/lerna#concepts)
- [React.js](https://reactjs.org/)
- [Storybook](https://storybook.js.org/)
