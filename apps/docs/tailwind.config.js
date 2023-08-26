import plugin from 'tailwindcss/plugin'
import { echoui } from '@echo-ui/vue'

module.exports = {
  content: ['./node_modules/@echo-ui/theme/dist/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [plugin(echoui())]
}
