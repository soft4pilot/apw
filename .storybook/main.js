module.exports = {
  "stories": [
    "../src/components/**/*.stories.mdx"
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  refs: {
   "design-system": {
     title: "Sistema de Diseño",
     url: "https://soft4pilot.github.io/sdb"
   }
  }
}
