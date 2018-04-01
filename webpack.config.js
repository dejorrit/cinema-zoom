const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'zinch.js',
		libraryTarget: 'umd',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [{
					loader: "babel-loader",
				}]
			},
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader"
				}, {
					loader: "sass-loader"
				}]
			}
		]
	},
	plugins: [
		new UglifyJsPlugin({
			sourceMap: true,
			extractComments: true,
			cache: true,
			parallel: true,
		})
	]
};

module.exports = config;
