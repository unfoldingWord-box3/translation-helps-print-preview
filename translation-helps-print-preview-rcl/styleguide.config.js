const path = require('path');
const upperFirst = require('lodash/upperFirst');
const camelCase = require('lodash/camelCase');

const {
  name, version, repository,
} = require('./package.json');

module.exports = {
  usageMode: 'expand',
  exampleMode: 'expand',
  components: 'src/components/**/*.{js,jsx,ts,tsx}',
  moduleAliases: { 'translation-helps-print-preview-rcl': path.resolve(__dirname, 'src') },
  getComponentPathLine: componentPath => {
    const name = path.basename(componentPath, '.jsx');
    return `import { ${name} } from 'translation-helps-print-preview-rcl';`;
  },
  title: `${upperFirst(camelCase(name))} v${version}`,
  ribbon: {
    url: repository.url,
    text: 'View on GitHub',
  },
};