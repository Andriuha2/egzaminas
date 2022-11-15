const express = require("express");
const router = express.Router();
const {
  CREATE_RESULT,
  GET_RESULTS,
  GET_RESULT,
  EDIT_RESULT,
} = require("../controllers/results");

router.post("/createResult", CREATE_RESULT);

router.put("/editResult/:id", EDIT_RESULT);

router.get("/getResults", GET_RESULTS);

router.get("/getResult/:id", GET_RESULT);

module.exports = router;
