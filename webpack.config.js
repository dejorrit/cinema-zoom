const path = require('path');

const config = {
	entry: {
		'cinema-zoom':     './src/js/index.js',
		'cinema-zoom.min': './src/js/index.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		libraryTarget: 'umd',
	},
	module: {
		rules: [{
			test: /\.js$/,
			use: [{
				loader: 'babel-loader',
			}]
		}, {
			test: /\.scss$/,
			use: [{
				loader: 'style-loader'
			}, {
				loader: 'css-loader'
			}, {
				loader: 'sass-loader'
			}]
		}]
	}
};

module.exports = config;
