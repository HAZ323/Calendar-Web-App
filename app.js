const express = require("express");
const path = require("path");

const app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

let month = 0;
let year = 0;

app.get("/calendar", function (req, res) {});

app.listen(3000);

function isToday(m, d, y) {
  const today = new Date();
  return (
    m == today.getMonth() + 1 &&
    y == today.getFullYear() &&
    d == today.getDate()
  );
}
