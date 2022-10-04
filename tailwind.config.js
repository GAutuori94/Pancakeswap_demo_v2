/** @type {import('tailwindcss').Config} */
module.exports = { 
	darkMode: ['className', '[data-mode = "dark"]'],
	content: [ './src/**/*.{js,jsx,ts,tsx}' ],
	theme: {
		extend: {
			spacing: {
				'128': '32rem',
				'144': '36rem',
				'30': '30%'
			}
		}
	},
	plugins: []
};


