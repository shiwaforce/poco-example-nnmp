const CopyWebpackPlugin = require('copy-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const confBase = require('./webpack.base.conf');

module.exports = merge(confBase, {
	output: {
		path: path.resolve(__dirname, '../../backend/public'),
		filename: 'assets/js/[name].js',
		publicPath: '/'
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, '../source/assets'),
				to: './assets',
				ignore: ['.*']
			}
		]),
		new FriendlyErrorsPlugin()
	]
});
