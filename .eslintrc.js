module.exports = {
  root: true,
  env: {
    browser: true,
    'jest/globals': true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript'
  ],
  plugins: [
    'jest'
  ],
  // add your custom rules here
  rules: {
    'vue/no-v-html': 0
  }
}
