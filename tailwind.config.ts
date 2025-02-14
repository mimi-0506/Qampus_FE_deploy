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
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        mainlight: 'rgba(235, 240, 255, 1)',
        maindark: 'rgba(79, 125, 238, 1)',
        maindrakgray: 'rgba(42, 51, 73, 1)',
        maindarkblue: 'rgba(23, 52, 123, 1)',
        mainpage2gary: 'rgba(96, 96, 96, 1)',
        semiBlack: '#1C1C1C',
        grey4: '#BBBBBB',
        grey5: '#E8E8E8',
        dark2: '#4F7DEE',
        main: '#7BA1FF',
        light1: '#A7C0FF',
        light2: '#D7E2FF',
        light3: '#E3EBFF',
        deepBlue: '#273963',
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
