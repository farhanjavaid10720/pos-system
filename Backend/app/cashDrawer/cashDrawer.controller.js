const express = require("express");
var router = express.Router();
const { body, param, validationResult } = require("express-validator");
const { ValidateInput, GenerateResponse } = require("../../common/commons");

/* Controller Endpoints */
const cashDrawerService = require("./cashDrawer.service");
router.get("/", (req, res) => {
  GenerateResponse(cashDrawerService.getAllcashDrawers(), res);
});

router.get("/:id", param("id"), (req, res) => {
  const err = ValidateInput(validationResult(req), res);
  if (err) return;
  const id = req.params.id;
  GenerateResponse(cashDrawerService.getcashDrawerById(id), res);
});
router.post("/", async (req, res) => {
  const cashDrawer = req.body;
  let result = await cashDrawerService.addNewcashDrawer(cashDrawer);
  res.send(result);
});
router.put("/:id", async (req, res) => {
  const cashDrawer = req.body;
  const id = req.params.id;
  let result = await cashDrawerService.updatecashDrawerData(id, cashDrawer);
  res.send(result);
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let result = await cashDrawerService.deletecashDrawerData(id);
  res.send(result);
});

module.exports = router;
