const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://bugbank.netlify.app',
    env: {
      hideCredentials: true,
      requestMode: true,
    },
    video: false,
  },
});
