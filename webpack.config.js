//Here we get the absolute path to the file
const path = require('path');

module.exports = {
	entry: './src/js/index.js',
	output: {
		//__dirname current absolute path
		path: path.resolve(__dirname, 'dist/js'),
		filename: 'bundle.js'
	},
};