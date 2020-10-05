module.exports = {
  theme: {
    extend: {
      colors: {
        'gf-orange': '#F26B21',
        'gf-blue': '#343A40',
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/ui')
  ]
}
