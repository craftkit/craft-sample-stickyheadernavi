
var path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname,'../docroot'),
		filename: 'demo.stickyheader.js',
		library: 'Demo',
		libraryTarget: 'window',
		globalObject: 'window'
	}
};
