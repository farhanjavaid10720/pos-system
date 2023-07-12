const express = require("express");
var router = express.Router();
const { body, param, validationResult } = require("express-validator");
const { ValidateInput, GenerateResponse } = require("../../common/commons");

/* Controller Endpoints */
const timeClockService = require("./employeeTimeClock.service");
router.get("/", (req, res) => {
  GenerateResponse(timeClockService.getAlltimeClocks(), res);
});

router.get("/:id", param("id"), (req, res) => {
  const err = ValidateInput(validationResult(req), res);
  if (err) return;
  const id = req.params.id;
  GenerateResponse(timeClockService.gettimeClockById(id), res);
});
router.post("/", async (req, res) => {
  const timeClock = req.body;
  let result = await timeClockService.addNewtimeClock(timeClock);
  res.send(result);
});
router.put("/:id", async (req, res) => {
  const timeClock = req.body;
  const id = req.params.id;
  let result = await timeClockService.updatetimeClockData(id, timeClock);
  res.send(result);
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let result = await timeClockService.deletetimeClockData(id);
  res.send(result);
});

module.exports = router;
