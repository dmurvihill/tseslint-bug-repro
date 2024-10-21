This repo was created by following the instructions in the TS-ESlint [Getting Started guide](https://typescript-eslint.io/getting-started/).

Build: `npx tsc`

Lint: `npx eslint`

The configuration file will emit the full expanded flatConfig before
linting. Errors:

```
/Users/dolan/IdeaProjects/typescript-eslint-bug/babel.config.cjs
  1:1  error  'module' is not defined  no-undef

/Users/dolan/IdeaProjects/typescript-eslint-bug/eslint.config.mjs
  11:1  error  'console' is not defined  no-undef

✖ 2 problems (2 errors, 0 warnings)
```

The `no-undef` rule is enabled despite being [strongly discouraged](https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors).

To see the full flat config:
`node eslint.config.mjs > eslint-config-expanded.json`

On line 49:
`"no-undef": "error",`

The rule comes in from `eslint.configs.recommended` in `eslint.config.mjs`,
l7. Commenting out that line fixes the errors.