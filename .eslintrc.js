module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb',
		'airbnb-typescript',
		'airbnb/hooks',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		'react/react-in-jsx-scope': 0,
		'linebreak-style': 0,
		'object-curly-newline': 0,
		'class-methods-use-this': 0,
		'arrow-parens': 0,
		'no-param-reassign': 0,
		'no-underscore-dangle': 0,
		'implicit-arrow-linebreak': 0,
		'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
		"import/no-extraneous-dependencies": "off",
		'max-len': 0,
		'no-tabs': 'off',
		indent: 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/button-has-type': 0,
		'import/extensions': 'off',
		"prettier/prettier": [
			"error",
			{
			  "endOfLine": "auto"
			},
		  ],
	},
};
