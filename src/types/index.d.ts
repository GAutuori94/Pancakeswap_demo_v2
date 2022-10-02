declare module '*.svg' {
  const content: string;
  export default content;
}

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
}