function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  darkMode: 'class',
    content: [
      "./src/components/**/*.{js,vue,ts}",
      "./src/layouts/**/*.vue",
      "./src/pages/**/*.vue",
      "./src/plugins/**/*.{js,ts}",
      "./src/nuxt.config.{js,ts}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'body': "var(--font-base)",
          'heading': "var(--font-heading)",
          'fantasy':"var(--font-fantasy)"
        },
        colors:{
          accesible:{
            primary : withOpacity("--accesible-primary"),
            secondary : withOpacity("--accesible-secondary"),
          },


          primary:{
            DEFAULT: withOpacity("--primary"),
            100:  withOpacity("--primary-lighten-300"),
            200:  withOpacity("--primary-lighten-200"),
            300:  withOpacity("--primary-lighten-100"),
            400:  withOpacity("--primary"),
            500:  withOpacity("--primary-darken-100"),
            600:  withOpacity("--primary-darken-200"),
            700:  withOpacity("--primary-darken-300"),
          },
          secondary:{
            DEFAULT: withOpacity("--secondary"),
            100:  withOpacity("--secondary-lighten-300"),
            200:  withOpacity("--secondary-lighten-200"),
            300:  withOpacity("--secondary-lighten-100"),
            400:  withOpacity("--secondary"),
            500:  withOpacity("--secondary-darken-100"),
            600:  withOpacity("--secondary-darken-200"),
            700:  withOpacity("--secondary-darken-300"),
          },
          dark:{
            DEFAULT: withOpacity("--dark"),
            100:  withOpacity("--dark-lighten-300"),
            200:  withOpacity("--dark-lighten-200"),
            300:  withOpacity("--dark-lighten-100"),
            400:  withOpacity("--dark"),
            500:  withOpacity("--dark-darken-100"),
            600:  withOpacity("--dark-darken-200"),
            700:  withOpacity("--dark-darken-300"),
          },
          light:{
            DEFAULT: withOpacity("--light"),
            100:  withOpacity("--light-lighten-300"),
            200:  withOpacity("--light-lighten-200"),
            300:  withOpacity("--light-lighten-100"),
            400:  withOpacity("--light"),
            500:  withOpacity("--light-darken-100"),
            600:  withOpacity("--light-darken-200"),
            700:  withOpacity("--light-darken-300"),
          },
        },

      },
    },
    plugins: [],
  }