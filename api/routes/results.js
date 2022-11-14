const express = require("express");
const router = express.Router();
const {
  GET_RESULTS,
  GET_RESULT,
  INSERT_RESULT,
  EDIT_RESULT,
  CHANGE_RESULT_DIRECTION,
  DELETE_RESULT,
} = require("../controllers/results");

router.get("/getResults", GET_RESULTS);

router.get("/getResult/:id", GET_RESULT);

router.post("/insertResult", INSERT_RESULT);

router.put("/editResult/:id", EDIT_RESULT);

router.put("/changeResultDirection/:id", CHANGE_RESULT_DIRECTION);

router.delete("/deleteResult/:id", DELETE_RESULT);

module.exports = router;
