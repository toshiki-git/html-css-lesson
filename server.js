const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 3000;

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/styles.css", (req, res) => {
  res.sendFile(path.join(__dirname, "styles.css"));
});

// Route to serve the HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Route to handle form submission
app.post("/submit-form", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  // フォームデータをコンソールに出力
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  res.sendFile(path.join(__dirname, "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
