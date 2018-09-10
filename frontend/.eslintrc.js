module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	env: {
		browser: true
	},
	extends: 'eslint-config-client-shiwaforce',
	plugins: [
		'html'
	],
	rules: {
		"semi": [1, "always"],
		'arrow-parens': 0,
		'generator-star-spacing': 0,
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
	}
};
