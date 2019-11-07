module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname + './public'
  },
  module: {
    rules: [
      {
        test: /\.js$/, //barra a esquerda qualquer caracter
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname + '/public'
  },
  module: {
    rules: [
      {
        test: /\.js$/, //barra a esquerda qualquer caracter
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
