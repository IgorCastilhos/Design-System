module.exports = {
  "stories": ["../src/pages/**/*.stories.mdx", "../src/stories/**/*.stories.tsx"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-mdx-gfm", '@storybook/addon-a11y'],
  "framework": {
    name: "@storybook/react-vite",
    options: {}
  },
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/Design-System'
    }
    return config
  },
  docs: {
    autodocs: true
  }
};