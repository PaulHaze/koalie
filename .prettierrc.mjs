/** @type {import("prettier").Config} */
export default {
	printWidth: 80,
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'es5',
	useTabs: true,
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	overrides: [
		{
		files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
