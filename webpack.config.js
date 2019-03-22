var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: 
  {
    path: path.resolve(__dirname, 'dist'),
    filename: 'dsheet.js'
  },
  module:
  {
	  rules: 
	  [
	    { 
			test: /\.js$/, 
			exclude: /node_modules/, 
			loader: "babel-loader" 
	 	}
	  ]	
  }
};