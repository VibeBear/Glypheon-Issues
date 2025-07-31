/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero': "url('https://glypheon.app/hero.webp')",
				'thanks': "url('https://glypheon.app/thanks.jpg')",
			},
			blur: {
				xs: '2px',
			},
		},
	},
	plugins: [],
}
