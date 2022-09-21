/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
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
