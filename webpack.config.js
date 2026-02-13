const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry : './src/main.js', //Точка входа>
  output : {
    filename :'bundle.[contenthash].js', // Имя файла

    path : path.resolve(__dirname, 'build'), // Путь абсолютный
    clean : true, //чистка сборки перед созданием новой
  },
  devtool : 'source-map',
  plugins:[
    new HtmlPlugin({
      template: 'public/index.html',
    }),
    new CopyPlugin({
      patterns:[
        {
          from:'public',
          globalOptions: {
            ignore: ['**/index.html']
          },
        },
      ],
    }),
  ],
module: {
  rules:[
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use:{
        loader:'babel-loader',
        options:{
          presets: ['@babel/preset-env']
        },
      },
    }
  ]
}
};
