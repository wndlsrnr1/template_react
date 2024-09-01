/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#4880FF', // 파란색계열
				logoColor: '#FFB617', // 주황색계열
				whiteHover: '#F3F4F6', // 연한회색계열
			},
		},
	},
	plugins: [],
};
