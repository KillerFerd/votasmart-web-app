module.exports = {
  content: [
    "./src/**/*.{jsx,js}",
    "./src/views/app/**/*.{jsx,js}"
  ],
  theme: {
    colors: {
      'titulo': '#265C4C',
      'seleccion': '#ECBD19',
      'fondo1': '#8FC1B5',
      'fondo2': '#AFC5C0',
      'fondo3': '#000000',
      'hover': '#FFFFFF'
    },
    fontFamily: {
      title: ['Vina Sans Regular','sans'],
      subtitle: ['Sarabun Bold','sans'],
      paragraph: ['Sarabun Regular','sans']
    },
    extend: {
      fontSize: {
        'sm': '14px',
        'base': '24px',
        'lg': '72px',
        'xl': '120px',
      },
      margin: {
        '0': '0',
        auto: 'auto',
      },
      padding: {
        '0': '0',
      },
      borderRadius: {
        'base': '12px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}


