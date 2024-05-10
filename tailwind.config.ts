import type { Config } from 'tailwindcss'

export default {
	content: ['./app/**/*.{js,jsx,ts,tsx,mdx}'],
	daisyui: {
		themes: ['light', 'dark', 'cupcake'],
	},
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/container-queries'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
		require('tailwindcss-animate'),
		require('daisyui'),
	],
} satisfies Config
