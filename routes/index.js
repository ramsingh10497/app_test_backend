const productRoutes = require("./productRoutes");

function routeConfig(app) {
  app.use("/product", productRoutes);
}

module.exports = routeConfig;
