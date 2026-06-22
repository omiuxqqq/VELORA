import type { Config } from 'tailwindcss'
const config: Config = { content: ['./app/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'], theme: { extend: { colors: { night:'#0B1120', panel:'#1F2937', emeraldMain:'#0F766E', emeraldAccent:'#10B981', surface:'#F8FAFC' } } }, plugins: [] }
export default config
