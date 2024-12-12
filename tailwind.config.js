/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      "dark-navy": "#313e51",
      "grey-navy": "#626c7f",
      "light-bluish": "#abc1e1",
      "light-grey": "#f4f6fa",
      "green": "#26d782",
      "navy": "#3b4d66",
      "purple": "#a729f5",
      "red": "#ee5454",
      "pure-white": "#ffffff",
      "square-orange": "#FFF1E9",
      "square-green": "#E0FDEF",
      "square-blue": "#ebf0ff",
      "square-purple": "#f6e7ff",
    },
    backgroundImage: {
      "desktop-dark": "url('/images/pattern-background-desktop-dark.svg')",
      "desktop-light": "url('/images/pattern-background-desktop-light.svg')",
      "mobile-dark": "url('/images/pattern-background-mobile-dark.svg')",
      "mobile-light": "url('/images/pattern-background-mobile-light.svg')",
      "tablet-dark": "url('/images/pattern-background-tablet-dark.svg')",
      "tablet-light": "url('/images/pattern-background-tablet-light.svg')"
    },
    extend: {
      fontSize: {
        "display": "clamp(5.5rem, 6.188vw + 4.05rem, 9rem)",
        "heading-l": "clamp(2.5rem, 2.652vw + 1.878rem, 4rem)",
        "heading-m": "clamp(1.25rem, 1.768vw + 0.836rem, 2.25rem)",
        "heading-sm": "clamp(1.125rem, 0.663vw + 0.97rem, 1.5rem)",
        "body-m": "clamp(1.125rem, 0.663vw + 0.97rem, 1.5rem)",
        "body-s": "clamp(0.875rem, 0.663vw + 0.72rem, 1.25rem)"
      }
    }
  },
  plugins: [],
}