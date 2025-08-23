import type { Config } from 'tailwindcss'


const config: Config = {
content: [
"./app/**/*.{ts,tsx}",
"./components/**/*.{ts,tsx}",
],
theme: {
extend: {
borderRadius: {
'2xl': '1rem',
},
boxShadow: {
'sm': '0 1px 2px rgba(0,0,0,0.05)',
}
},
},
plugins: [],
}
export default config