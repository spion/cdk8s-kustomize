const { cdk8s } = require('projen');
const project = new cdk8s.ConstructLibraryCdk8s({
  author: 'spion',
  authorAddress: 'gorgi.kosev@gmail.com',
  cdk8sVersion: '1.4.10',
  defaultReleaseBranch: 'main',
  name: 'cdk8s-kustomize',
  repositoryUrl: 'https://github.com/spion/cdk8s-kustomize.git',
  eslint: false,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

project.npmignore.removePatterns('/src/')
project.synth();

