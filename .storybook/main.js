const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-storysource',
    {
      name: '@storybook/addon-docs',
      options: {
        sourceLoaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
    "@storybook/preset-create-react-app",
    "storybook-addon-pseudo-states"
  ],
  webpackFinal: async(config) => {
    config.module.rules.forEach((rule) => {
      if (rule.oneOf) {
        rule.oneOf.forEach((oneOfRule) => {
          if (oneOfRule.loader && oneOfRule.loader.includes('file-loader')) {
            // Exclude the SVG from the file loader (Add `.inline` namespace to exclude inline SVGs).
            oneOfRule.exclude.push(/\.svg$/);
          }
        })
        
        // Add SVG loading with SVGR to webpack rules.
        rule.oneOf.push({
          exclude: /node_modules/,
          loader: '@svgr/webpack', // or any other.
          test: /\.svg$/,
        })
      }
    });
    return config;
  }
}