/* eslint-env node */
module.exports = {
	extends: [
		'eslint:recommended',
		'prettier',
		'plugin:jsx-a11y/recommended',
		'plugin:import/errors',
		'plugin:import/warnings'
	],
	plugins: ['jsx-a11y', 'mocha'],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			experimentalObjectRestSpread: true
		}
	},
	root: true,
	rules: {
		strict: 0,
		curly: 1,
		'no-console': ['warn', { allow: ['warn', 'error'] }],
		'no-unused-vars': 'warn',
		'prefer-const': 'error',
		'no-var': 'error',
		'import/named': 'warn',
		'import/export': 'warn',
		'import/namespace': 'off',
		'prefer-template': 'error',
		eqeqeq: ['error', 'always'],
		'no-param-reassign': 'warn',
		'jsx-a11y/label-has-for': 'warn', // This rule is deprecated
		'jsx-a11y/no-noninteractive-tabindex': 'warn'
	},
	env: {
		browser: true,
		es6: true
	},
	overrides: [
		{
			files: ['archetypes/**'],
			globals: {
				require: true,
				module: true,
				__dirname: true,
				process: true
			}
		},
		{
			files: ['**/functional.test.js', '**/karma.test.js'],
			env: {
				mocha: true
			},
			globals: {
				global: true
			},
			rules: {
				'mocha/no-exclusive-tests': 'error'
			}
		},
		{
			files: ['**/**unit.test.js', '**/tests/setup.js', '**/__tests__/**/*.js'],
			globals: {
				global: true
			},
			env: {
				jest: true
			}
		}
	]
};