var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var tables = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });
  
  // Displays all tables
  app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });
  
  // Displays a single character, or returns false
  app.get("/api/tables/:table", function(req, res) {
    var chosen = req.params.table;

    return res.json(false);
  }

  app.post("/api/tables", function(req, res) {
  }