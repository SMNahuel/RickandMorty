/* Evitamos imports hell en nuestros archivos con esta configuracion */

const { override, addBabelPlugins } = require('customize-cra');
module.exports = override(
  ...addBabelPlugins(
    [
      'module-resolver', 
        {
          root: ["./src"],
          alias: {
            pages: "./src/pages",
            components: "./src/components",
            utils: "./src/utils",
            store: "./src/store",
            assets: "./src/assets",
          }
        }
    ],
  ),
);