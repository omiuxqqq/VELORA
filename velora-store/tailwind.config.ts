import type { Config } from 'tailwindcss'
const config: Config = { content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}','./lib/**/*.{ts,tsx}'], theme: { extend: { colors: { night:'#07110f', emeraldBrand:'#10b981' } } }, plugins: [] }
export default config
