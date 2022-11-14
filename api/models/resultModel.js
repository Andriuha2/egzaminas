const mongoose = require("mongoose");

const resultSchema = mongoose.Schema({
  result: { type: Number, required: true, min: 3 },
  ASC: { type: String, required: true },
});

module.exports = mongoose.model("Result", resultSchema);
