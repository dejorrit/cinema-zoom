const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const config = {
	entry: './src/demo.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'demo.js',
	},
	module: {

	},
	plugins: [
		new BrowserSyncPlugin({
			proxy: {
				target: 'http://localhost:63342/zinch/demo/demo.html'
			}
		})
	]
};

module.exports = config;
