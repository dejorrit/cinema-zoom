const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
	entry: {
		'cinema-zoom': './src/js/index.js',
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
				loader: "babel-loader",
			}]
		}, {
			test: /\.scss$/,
			use: [{
				loader: "style-loader"
			}, {
				loader: "css-loader"
			}, {
				loader: "sass-loader"
			}]
		}]
	},
	plugins: [
		new UglifyJsPlugin({
			test: /\.min.js$/,
			cache: true,
			parallel: true,
			uglifyOptions: {
				toplevel: true,
			}
		})
	]
};

module.exports = config;
