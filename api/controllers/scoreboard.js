const ScoreboardSchema = require("../models/scoreboardModel");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports.CREATE_SCOREBOARD = function (req, res) {
  const scoreboard = new ScoreboardSchema({
    name: req.body.name,
    dateCreated: new Date(),
    results_ids: [],
    scoreDirection: req.body.scoreDirection,
  });
  scoreboard.save().then((result) => {
    return res
      .status(200)
      .json({ response: "Scoreboard was created successfully" });
  });
};

module.exports.EDIT_SCOREBOARD_NAME = (req, res) => {
  ScoreboardSchema.updateOne(
    { _id: req.params.id },
    { name: req.body.editedName }
  ).then((result) => {
    return res
      .status(200)
      .json({ statusMessage: "Edited successfully", editedScoreboard: result });
  });
};

module.exports.EDIT_SCOREBOARD_DIRECTION = (req, res) => {
  ScoreboardSchema.updateOne(
    { _id: req.params.id },
    { scoreDirection: req.body.editedScoreDirection }
  ).then((result) => {
    return res
      .status(200)
      .json({ statusMessage: "Edited successfully", editedScoreboard: result });
  });
};

module.exports.GET_ALL_SCOREBOARDS = function (req, res) {
  ScoreboardSchema.find()
    .sort("result")
    .then((results) => {
      return res.status(200).json({ scoreboards: results });
    });
};

module.exports.GET_SCOREBOARD_BY_ID = function (req, res) {
  ScoreboardSchema.findOne({ _id: req.params.id }).then((results) => {
    return res.status(200).json({ scoreboard: results });
  });
};
