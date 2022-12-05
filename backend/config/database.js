const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/todos");
const db = mongoose.connection;
db.on("connected", function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});
