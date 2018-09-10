const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');

const env = process.env.NODE_ENV;
const isProduction = env === 'production';

const resolve = (dir) => {
	return path.join(__dirname, '..', dir);
};

module.exports = {
	mode: isProduction ? 'production' : 'development',
	entry: {
		app: './source/app.js'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		modules: [path.resolve(__dirname, '../source'), 'node_modules'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|vue)$/,
				loader: 'eslint-loader',
				enforce: 'pre',
				include: [resolve('source')],
				options: {
					formatter: require('eslint-friendly-formatter')
				}
			},
			{
				test: /\.vue$/,
				include: [resolve('source')],
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				include: [resolve('source')],
				loader: 'babel-loader'
			},
			{
				test: /\.pug$/,
				loader: 'pug-plain-loader'
			},
			{
				test: /\.p(ost)?css$/,
				oneOf: [{
					resourceQuery: /module/,
					use: [
						!isProduction ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								modules: true,
								localIdentName: isProduction ? '[hash:base64:5]' : '[name]__[local]___[hash:base64:5]'
							}
						},
						{loader: 'postcss-loader', options: {sourceMap: true}}
					]
				}, {
					use: [
						!isProduction ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								modules: true,
								localIdentName: isProduction ? '[hash:base64:5]' : '[name]__[local]___[hash:base64:5]'
							}
						},
						{loader: 'postcss-loader', options: {sourceMap: true}}
					]
				}]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {importLoaders: 1}
					},
					'postcss-loader'
				]
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'assets/fonts/[name].[ext]'
				}
			}
		]
	},
	plugins: [
		new VueLoaderPlugin()
	]
};
