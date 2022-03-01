module.exports = {
	env: {
		node: true,
		commonjs: true,
		es2021: true,
	},
	extends: 'eslint:recommended',
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single', { avoidEscape: true }],
		semi: ['error', 'always'],
		'prefer-arrow-callback': 'warn',
		'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
		'comma-dangle': ['warn', 'always-multiline'],
		'prefer-const': ['warn'],
		'no-undef': ['warn'],
	},
};
