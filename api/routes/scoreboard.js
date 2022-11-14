const express = require("express");
const router = express.Router();
const {
  CREATE_SCOREBOARD,
  GET_SCOREBOARD,
} = require("../controllers/scoreboard");

router.post("/createScoreboard", CREATE_SCOREBOARD);

router.get("/getScoreboard/:id", GET_SCOREBOARD);

module.exports = router;
