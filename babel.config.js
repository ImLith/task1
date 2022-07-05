module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
          alias: {
            '<assets>': './assets',
            '<pages>': './src/pages',
            '<routes>': './src/routes',
            '<constants>': './src/constants',
            '<types>': './src/types',
            '<utils>': './src/utils',
            '<components>': './src/components',
          },
        },
      ],
    ],
  };
};
