const chalk = require('chalk');
const ora = require('ora');
const path = require('path');
const rm = require('rimraf');
const webpack = require('webpack');

const webpackDevConf = require('./webpack.dev.conf');
const webpackProdConf = require('./webpack.prod.conf');
const compiler = webpack(webpackDevConf);

if (process.env.NODE_ENV === 'production') {
	const spinner = ora('building for production...');
	spinner.start();

	rm(path.join(path.resolve(__dirname, '../../backend/public')), err => {
		if (err) throw err;
		webpack(webpackProdConf, (err, stats) => {
			spinner.stop();
			if (err) throw err;
			process.stdout.write(stats.toString({
				colors: true,
				modules: false,
				children: false,
				chunks: false,
				chunkModules: false
			}) + '\n\n');

			console.log(chalk.cyan('  Build complete.\n'));
			console.log(chalk.yellow(
				'  Tip: built files are meant to be served over an HTTP server.\n' +
				'  Opening index.html over file:// won\'t work.\n'
			));
		});
	});
} else {
	const spinner = ora('building for development...');
	spinner.start();
	compiler.watch({}, (err, stats) => {
		spinner.stop();
	});
}
