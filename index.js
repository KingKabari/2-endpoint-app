const express = require("express");
const app = express();
const PORT = 4000;

// Endpoint 1 
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Endpoint 2 
app.get("/welcome", (req, res) => {
  res.send("Welcome to my app");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
