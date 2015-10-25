var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'eval',
    entry: [
    	'webpack-dev-server/client?http://localhost:3000',
    	'webpack/hot/only-dev-server',
    	'./index'
  ],
	output: {
		path: __dirname,
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
    	new webpack.HotModuleReplacementPlugin()
  	],
	module: {
		loaders: [
		{
			test: /\.js$/,
			loaders: ['react-hot','babel?stage=0'],
			exclude: /node_modules/,
		},
		{
			test: /\.sass$/,
			loaders: ['style','css','sass?indentedSyntax']
		}
		]
	}

};