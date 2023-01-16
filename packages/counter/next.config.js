/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
// const withFederatedSidecar = require("@module-federation/nextjs-mf")

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "sharedState",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          main: `main@http://localhost:3000/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
          sharedState: `sharedState@http://localhost:8080/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        exposes: {
          "./sharedStateReducer": "./src/sharedState/sharedStateReducer.jsx",
          "./sharedStateContext": "./src/sharedState/sharedStateContext.jsx",
        },
        shared: {},
      })
    );
    return config;
  },
};
// module.exports = withFederatedSidecar({
//   // ...
//   exposes: {
// 		'./useCount': './src/counter/Store.jsx'
//   },
//   // ...
// })(nxNextConfig);
