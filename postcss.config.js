module.exports = {
  plugins: [
    require('postcss-import'),
    require("tailwindcss/nesting"),
    require('postcss-extend'),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
}
