// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

const expandedConfig = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
);

console.log(JSON.stringify(expandedConfig, null, 2));

export default expandedConfig;
