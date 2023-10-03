/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors : {
        primary : '#3F22D2',
        secondary : '#414141',
        body: '#F5F5F5',
        bgdark : '#111827',
      },

    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      "2xl":'1400px'
    },
    
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
