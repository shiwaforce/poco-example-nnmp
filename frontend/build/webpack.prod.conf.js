const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const confBase = require('./webpack.base.conf');

module.exports = merge(confBase, {
	output: {
		path: path.resolve(__dirname, '../../backend/public'),
		filename: 'assets/js/[name].js',
		publicPath: '/'
	},
	optimization: {
		minimize: true,
		minimizer: [
			new UglifyJSPlugin({
				sourceMap: false,
				uglifyOptions: {
					compress: {
						inline: false
					}
				}
			})
		],
		splitChunks: {
			chunks: 'all',
			minSize: 30000,
			minChunks: 1,
			maxAsyncRequests: 8,
			maxInitialRequests: 8,
			automaticNameDelimiter: '-',
			name: true,
			cacheGroups: {
				default: false,
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					chunks: 'all',
					enforce: true
				}
			}
		}
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'assets/css/[name].css'
		}),
		new OptimizeCssAssetsPlugin({
			cssProcessor: require('cssnano'),
			cssProcessorOptions: {discardComments: {removeAll: true}}
		}),
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, '../source/assets'),
				to: './assets',
				ignore: ['.*']
			}
		])
	]
});
