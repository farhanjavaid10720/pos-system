const express = require("express");
var router = express.Router();
const { body, param, validationResult } = require("express-validator");
const { ValidateInput, GenerateResponse } = require("../../common/commons");

/* Controller Endpoints */
const customerDisplayService = require("./customerDisplay.service");
router.get("/", (req, res) => {
  GenerateResponse(customerDisplayService.getAllcustomerDisplays(), res);
});

router.get("/:id", param("id"), (req, res) => {
  const err = ValidateInput(validationResult(req), res);
  if (err) return;
  const id = req.params.id;
  GenerateResponse(customerDisplayService.getcustomerDisplayById(id), res);
});
router.post("/", async (req, res) => {
  const customerDisplay = req.body;
  let result = await customerDisplayService.addNewcustomerDisplay(
    customerDisplay
  );
  res.send(result);
});
router.put("/:id", async (req, res) => {
  const customerDisplay = req.body;
  const id = req.params.id;
  let result = await customerDisplayService.updatecustomerDisplayData(
    id,
    customerDisplay
  );
  res.send(result);
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let result = await customerDisplayService.deletecustomerDisplayData(id);
  res.send(result);
});

module.exports = router;
