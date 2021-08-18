const withOffline = require("next-offline");

const nextConfig = {
  workboxOpts: {
    globPatterns: ["static/**/*"],
    globDirectory: ".",
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: "NetworkFirst",
        options: {
          cacheName: "offlineCache",
          expiration: {
            maxEntries: 200
          }
        }
      }
    ]
  }
};

module.exports = withOffline(nextConfig);
