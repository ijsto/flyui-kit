
const path = require("path");
const alias = require(`../src/config/aliases`);

const KIT = "../src/kit";
const aliases = alias(KIT);

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [
    key,
    path.resolve(__dirname, value),
  ])
);
console.log('resolvedAliases', resolvedAliases);

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "storybook-preset-craco",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // "@storybook/preset-create-react-app",
    "storybook-addon-pseudo-states",
  ],
  webpackFinal: async(config) => {
    config.module.rules.forEach((rule) => {
          
    config.resolve.modules.push(path.resolve(__dirname, KIT));
    config.resolve.alias = resolvedAliases;
    
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