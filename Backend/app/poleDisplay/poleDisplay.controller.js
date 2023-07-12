const express = require("express");
var router = express.Router();
const { body, param, validationResult } = require("express-validator");
const { ValidateInput, GenerateResponse } = require("../../common/commons");

/* Controller Endpoints */
const poleDisplayService = require("./poleDisplay.service");
router.get("/", (req, res) => {
  GenerateResponse(poleDisplayService.getAllpoleDisplays(), res);
});

router.get("/:id", param("id"), (req, res) => {
  const err = ValidateInput(validationResult(req), res);
  if (err) return;
  const id = req.params.id;
  GenerateResponse(poleDisplayService.getpoleDisplayById(id), res);
});
router.post("/", async (req, res) => {
  const poleDisplay = req.body;
  let result = await poleDisplayService.addNewpoleDisplay(poleDisplay);
  res.send(result);
});
router.put("/:id", async (req, res) => {
  const poleDisplay = req.body;
  const id = req.params.id;
  let result = await poleDisplayService.updatepoleDisplayData(id, poleDisplay);
  res.send(result);
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let result = await poleDisplayService.deletepoleDisplayData(id);
  res.send(result);
});

module.exports = router;
