// postcss.config.js

export default ({ env }) => ({
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: env === "production" ? {} : false,
  },
});
