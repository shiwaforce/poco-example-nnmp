module.exports = {
	plugins: [
		require('postcss-import'),
		require('postcss-nested'),
		require('postcss-custom-media')({
			extensions: {
				'--small': '(width >= 480px)',
				'--medium': '(width >= 640px)',
				'--large': '(width >= 960px)',
				'--xlarge': '(width >= 1280px)',
				'--xxlarge': '(width >= 1440px)',
				'--xxxlarge': '(width >= 1560px)'
			}
		}),
		require('postcss-custom-properties')({
			appendVariables: false,
			preserve: false
		}),
		require('postcss-media-minmax'),
		require('autoprefixer')
	]
};
