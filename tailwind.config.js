/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary50: '#eff6ff',
        primary100: '#dbeafe',
        primary200: '#bfdbfe',
        primary300: '#93c5fd',
        primary400: '#60a5fa',
        primary500: '#3b82f6',
        primary600: '#2563eb',
        primary700: '#1d4ed8',
        primary800: '#1e40af',
        primary900: '#1e3a8a',
        isGrey50: '#f0f4f8',
        isGrey100: '#d9e2ec',
        isGrey200: '#bcccdc',
        isGrey300: '#9fb3c8',
        isGrey400: '#829ab1',
        isGrey500: '#627d98',
        isGrey600: '#486581',
        isGrey700: '#334e68',
        isGrey800: '#243b53',
        isGrey900: '#102a43',
        isBlack: '#222',
        isWhite: '#fff',
        isRedLight: '#f8d7da',
        isRedDark: '#842029',
        isGreenLight: '#d1e7dd',
        isGreenDark: '#0f5132',
      },
      fontFamily: {
        headingFont: 'Roboto Condensed, Sans-Serif',
        bodyFont: 'Cabin, Sans-Serif'
      },
      boxShadow: {
        shadow1: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        shadow2: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        shadow3: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        shadow4: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      borderRadius:{
        r25: '0.25rem'
      }
    },
  },
  plugins: [],
}