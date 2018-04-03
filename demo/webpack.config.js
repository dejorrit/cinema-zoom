const path = require('path');

const config = {
	entry: './src/demo.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'demo.js',
	},
	module: {

	},
	plugins: [

	]
};

module.exports = config;
