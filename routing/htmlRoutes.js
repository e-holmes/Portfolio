var path = require("path");


module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../app/public/index.html"));
  });

  app.get("/contacts", function(req, res) {
    res.sendFile(path.join(__dirname, "../app/public/contacts.html"));
  });

  app.get("/aboutMe", function(req, res) {
    res.sendFile(path.join(__dirname, "../app/public/aboutMe.html"));
  });

  app.get("/portfolio", function(req, res) {
    res.sendFile(path.join(__dirname, "../app/public/portfolio.html"));
  });

};