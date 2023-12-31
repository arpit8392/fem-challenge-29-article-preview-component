/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				darkGrayishBlue: 'hsl(217, 19%, 35%)',
				desaturatedDarkBlue: 'hsl(214, 17%, 51%)',
				grayishBlue: 'hsl(212, 23%, 69%)',
				lightGrayishBlue: 'hsl(210, 46%, 95%)',
			},
		},
	},
	plugins: [],
}
