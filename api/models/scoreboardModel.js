const mongoose = require("mongoose");

const scoreboardSchema = mongoose.Schema({
  name: { type: String, required: true, min: 3 },
  dateCreated: { type: Number, required: true, min: 3 },
  resultsIds: { type: Array },
  scoreDirection: { type: String },
});

module.exports = mongoose.model("Scoreboard", scoreboardSchema);
