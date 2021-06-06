const path = require('path')


module.exports = {
  webpackFinal: async(config, {configType}) => {
    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: ['style-loader', 'css-loader', 'sass-loader'],
    // })
    config.resolve.alias['~'] = path.resolve(__dirname, "../src/assets/sass");
    config.resolve.alias['@images'] = path.resolve(__dirname, "../src/assets/images");
    config.resolve.alias['@components'] = path.resolve(__dirname, "../src/components");
    config.resolve.alias['@mixins'] = path.resolve(__dirname, "../src/mixins");

    return config
  },
  "stories": [
    "./stories/**/*.stories.mdx",
    "./stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}