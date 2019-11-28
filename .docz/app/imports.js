export const imports = {
  'src/components/atoms/Button.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-atoms-button" */ 'src/components/atoms/Button.mdx'
    ),
}
