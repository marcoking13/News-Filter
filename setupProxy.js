const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy(["/api/accounts", , "/api/currentAccount"], { target: "http://localhost:5000" });
  );
};
