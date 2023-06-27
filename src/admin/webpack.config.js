// 'use strict';

// const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

// module.exports = (config) => {
//   config.plugins.push(new MonacoWebpackPlugin());

//   return config;
// };

// // ./src/admin/webpack.config.js
'use strict';

module.exports = (config, webpack) => {
  // Note: we provide webpack above so you should not `require` it
  // Perform customizations to webpack config
  // Important: return the modified config
  console.log("conosle");
  config.plugins.push(
    new webpack.DefinePlugin({
      FRONT_END_URL: JSON.stringify("http://localhost:3000"),
    })
  )
  return config;
};