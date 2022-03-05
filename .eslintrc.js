module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	extends: [
		'@nuxtjs/eslint-config-typescript',
		'plugin:nuxt/recommended',
		'prettier'
	],
	plugins: [
	],
	// add your custom rules here
	rules: {
		'no-tabs': 0,
		indent: [1, 'tab']
	}
}
