module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
  plugins: ['stylelint-scss', 'stylelint-order', 'stylelint-config-rational-order/plugin'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
      },
    ],
    'declaration-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'after-declaration', 'first-nested', 'inside-single-line-block'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
};
