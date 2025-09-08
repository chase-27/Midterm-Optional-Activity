const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // allow requests from other origins

const items = [
  { id: 1, name: "First item from my server" },
  { id: 2, name: "Another cool item" },
  { id: 3, name: "Learning Vue is fun!" }
];

app.get("/api/items", (req, res) => {
  res.json(items);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
