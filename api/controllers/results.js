const ResultSchema = require("../models/resultModel");

const results = [];

module.exports.CREATE_RESULT = function (req, res) {
  const result = new ResultSchema({
    name: req.body.name,
    _id: req.body.scoreboard_id,
    result: [],
    ASC: req.body.scoreDirection,
  });
  result.save().then((result) => {
    return res
      .status(200)
      .json({ response: "Result was created successfully" });
  });
};

module.exports.EDIT_RESULT = (req, res) => {
  ResultSchema.updateOne(
    { _id: req.params.id },
    { name: req.body.editedName }
  ).then((result) => {
    return res
      .status(200)
      .json({ statusMessage: "Edited successfully", editedResult: result });
  });
};

module.exports.GET_RESULTS = function (req, res) {
  ResultSchema.find()
    .sort("result")
    .then((results) => {
      return res.status(200).json({ results: results });
    });
};

module.exports.GET_RESULT = function (req, res) {
  ResultSchema.findOne({ _id: req.params.id }).then((results) => {
    return res.status(200).json({ tasks: results });
  });
};
