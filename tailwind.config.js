module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    mode: "all",
    content: [
      "./hugo_stats.json",
      "./layouts/**/*.html"
    ]
  },
  variants: {},
  plugins: [],
};
