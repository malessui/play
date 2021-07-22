const postcss = require("rollup-plugin-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const path = require("path");

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [
          autoprefixer(),
          cssnano({
            preset: "default",
          }),
        ],
        config: {
          path: "./postcss.config.js",
        },
        inject: true,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: path.resolve("dist/style.css"),
      })
    );
    return config;
  },
};