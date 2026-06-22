import type { Config } from 'tailwindcss'
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { emeraldBrand: '#0F766E', emeraldAccent: '#10B981', night: '#0B1120' } } }, plugins: [] }
export default config
