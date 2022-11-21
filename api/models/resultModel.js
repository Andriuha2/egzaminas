const mongoose = require("mongoose");

const resultSchema = mongoose.Schema({
  name: { type: String, required: true, min: 3 },
  result: { type: Number, required: true, min: 3 },
  _id: { type: String, required: true },
});

module.exports = mongoose.model("Result", resultSchema);
