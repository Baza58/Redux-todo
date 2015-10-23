var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: './index.js',
	output: {
		path: __dirname,
		filename: './bundle.js'
	},
	module: {
		loaders: [
		{
			test: /\.js$/,
			loaders: ['babel?stage=0'],
			exclude: /node_modules/,
		}
		]
	}

};