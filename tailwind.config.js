module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			screens: {
				'3xl': '1920px',
			},
		},
		zIndex: {
			1030: 1030,
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
