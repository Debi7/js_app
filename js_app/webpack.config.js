const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        path: __dirname + '/dist', //текущий путь + папка dist
        filename: 'bundle.js' //файл с совокупностью скриптов и модулей которые создаём
    },
    devServer: {
        static: __dirname + '/dist'
    },
    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
      ],
    resolve: { //разрешать
        extensions: ['.js'] //расширения (с окончанием файла .js)
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
    }
}
