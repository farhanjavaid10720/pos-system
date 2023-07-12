const express = require("express");
var router = express.Router();
const { body, param, validationResult } = require("express-validator");
const { ValidateInput, GenerateResponse } = require("../../common/commons");

/* Controller Endpoints */
const itemDisplayService = require("./order-itemDisplay.service");
router.get("/", (req, res) => {
  GenerateResponse(itemDisplayService.getAllitemDisplays(), res);
});

router.get("/:id", param("id"), (req, res) => {
  const err = ValidateInput(validationResult(req), res);
  if (err) return;
  const id = req.params.id;
  GenerateResponse(itemDisplayService.getitemDisplayById(id), res);
});
router.post("/", async (req, res) => {
  const itemDisplay = req.body;
  let result = await itemDisplayService.addNewitemDisplay(itemDisplay);
  res.send(result);
});
router.put("/:id", async (req, res) => {
  const itemDisplay = req.body;
  const id = req.params.id;
  let result = await itemDisplayService.updateitemDisplayData(id, itemDisplay);
  res.send(result);
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let result = await itemDisplayService.deleteitemDisplayData(id);
  res.send(result);
});

module.exports = router;
