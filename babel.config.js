module.exports = {
  presets: ['@vue/app'],
  plugins: [
    [
      'component',
      // [
      {
        libraryName: 'mint-ui',
        style: true
      }
      //]
    ],
    'transform-remove-strict-mode'
  ],
  ignore: ['./src/lib/zh/mui/js/*.js', './src/lib/zz/mui/js/*.js']
};
