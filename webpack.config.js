const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4200/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "hostApp",
      filename: "remoteEntry.js",
      remotes: {
        remote1: "remote1@http://localhost:4201/remoteEntry.js",
        remote2: "remote2@http://localhost:4202/remoteEntry.js",
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true },
        "@angular/common": { singleton: true, strictVersion: true },
        "@angular/router": { singleton: true, strictVersion: true },
      },
    }),
  ],
};
