module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          // presets: [require.resolve("babel-preset-react-app")],
          presets: [['react-app', { flow: false, typescript: true }]],
          plugins: [
            [
              require.resolve('babel-plugin-named-asset-import'),
              {
                loaderMap: {
                  svg: {
                    ReactComponent: '@svgr/webpack?-svgo,+titleProp,+ref![path]',
                  },
                },
              },
            ],
          ],
        },
      },
      //https://github.com/storybookjs/storybook/blob/next/addons/docs/README.md#installation
      require.resolve('react-docgen-typescript-loader'),
    ],
  });

  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
