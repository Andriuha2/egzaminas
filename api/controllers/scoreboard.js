const ScoreboardSchema = require("../models/scoreboardModel");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports.CREATE_SCOREBOARD = function (req, res) {
  const user = new ScoreboardSchema({
    name: req.body.name,
    dateCreated: req.body.dateCreated,
    resultsIds: req.body._id,
    scoreDirection: req.body.scoreDirection,
    taskIds: [],
  });

  user.save().then((result) => {
    return res
      .status(200)
      .json({ response: "Scoreboard was created successfully" });
  });
};

module.exports.GET_SCOREBOARD = async function (req, res) {
  const data = await ScoreboardSchema.aggregate([
    {
      $lookup: {
        from: "results",
        localField: "tresultIds",
        foreignField: "id",
        as: "Scoreboard_results",
      },
    },
    { $match: { _id: ObjectId(req.params.id) } },
  ]).exec();

  console.log(data);

  return res.status(200).json({ user: data });
};
