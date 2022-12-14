module.exports = {
  mode: 'jit',
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  vite: {
    server: {
      watch: {
        usePolling: true
      }
    }
  }
}