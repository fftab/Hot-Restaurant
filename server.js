var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var tables = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
  });

  app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
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
  // Create New Characters - takes in JSON input
app.post("/api/characters", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newCharacter = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newCharacter);

  characters.push(newCharacter);

  res.json(newCharacter);
});

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });