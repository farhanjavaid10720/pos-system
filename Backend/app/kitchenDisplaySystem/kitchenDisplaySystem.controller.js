const express = require("express");
var router = express.Router();
const { body, param, validationResult } = require("express-validator");
const { ValidateInput, GenerateResponse } = require("../../common/commons");

/* Controller Endpoints */
const kitchenDisplayService = require("./kitchenDisplaySystem.service");
router.get("/", (req, res) => {
  GenerateResponse(kitchenDisplayService.getAllkitchenDisplays(), res);
});

router.get("/:id", param("id"), (req, res) => {
  const err = ValidateInput(validationResult(req), res);
  if (err) return;
  const id = req.params.id;
  GenerateResponse(kitchenDisplayService.getkitchenDisplayById(id), res);
});
router.post("/", async (req, res) => {
  const kitchenDisplay = req.body;
  let result = await kitchenDisplayService.addNewkitchenDisplay(kitchenDisplay);
  res.send(result);
});
router.put("/:id", async (req, res) => {
  const kitchenDisplay = req.body;
  const id = req.params.id;
  let result = await kitchenDisplayService.updatekitchenDisplayData(
    id,
    kitchenDisplay
  );
  res.send(result);
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let result = await kitchenDisplayService.deletekitchenDisplayData(id);
  res.send(result);
});

module.exports = router;
