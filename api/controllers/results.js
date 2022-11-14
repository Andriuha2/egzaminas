const ResultSchema = require("../models/resultModel");

const results = [];

module.exports.GET_RESULTS = function (req, res) {
  ResultSchema.find()
    .sort("result")
    .then((results) => {
      return res.status(200).json({ tasks: results });
    });
};

module.exports.GET_RESULT = function (req, res) {
  ResultSchema.findOne({ _id: req.params.id }).then((results) => {
    return res.status(200).json({ tasks: results });
  });
};

module.exports.INSERT_RESULT = function (req, res) {
  const result = new ResultSchema({
    title: req.body.title,
    scoreboard_id: req.body.scoreboard_id,
    points: req.body.points,
  });

  result.save().then((result) => {
    return res.status(200).json({
      statusMessage: "result was inserted successfully",
      result: result,
    });
  });
};

module.exports.EDIT_RESULT = (req, res) => {
  ResultSchema.updateOne(
    { _id: req.params.id },
    { task: req.body.editedResult }
  ).then((result) => {
    return res
      .status(200)
      .json({ statusMessage: "Edited successfully", editedResult: result });
  });
};

module.exports.CHANGE_RESULT_DIRECTION = async (req, res) => {
  const currentResult = await ResultSchema.findOne({
    _id: req.params.id,
  }).exec();

  ResultSchema.updateOne(
    { _id: req.params.id },
    { ASC: !currentResult.ASC }
  ).then((result) => {
    return res
      .status(200)
      .json({ statusMessage: "Edited successfully", editedResult: result });
  });
};

module.exports.DELETE_RESULT = function (req, res) {
  ResultSchema.deleteOne({ _id: req.params.id }).then((results) => {
    console.log("results", results);
    res.status(200).json({
      statusMessage: "result was deleted sucessfuly",
      deletedResult: results,
    });
  });
};
