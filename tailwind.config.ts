import type {Config} from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        semiBlack: '#1C1C1C',
        grey1: '#333333',
        grey2: '#606060',
        grey3: '#8D8D8D',
        grey4: '#BBBBBB',
        grey5: '#E8E8E8',
        semiWhite: '#F4F4F4',
        white: '#FFFFFF',
        dark1: '#3765D6',
        dark2: '#4F7DEE',
        main: '#7BA1FF',
        light1: '#A7C0FF',
        light2: '#D7E2FF',
        light3: '#E3EBFF',
        deepBlue: '#273963',
        page1anibg: '#EBF0FF',
      },

      keyframes: {
        loop: {
          '0%': {transform: 'translateX(0)'},
          '100%': {transform: 'translateX(-100%)'},
        },
      },
      animation: {
        loop: 'loop 20s linear infinite',
      },

      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
