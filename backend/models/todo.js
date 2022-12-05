const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    name: String,
    done: Boolean,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo", todoSchema);
