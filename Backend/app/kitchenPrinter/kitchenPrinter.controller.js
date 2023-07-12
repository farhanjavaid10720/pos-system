const express = require("express");
var router = express.Router();
const { body, param, validationResult } = require("express-validator");
const { ValidateInput, GenerateResponse } = require("../../common/commons");

/* Controller Endpoints */
const kitchenPrinterService = require("./kitchenPrinter.service");
router.get("/", (req, res) => {
  GenerateResponse(kitchenPrinterService.getAllkitchenPrinters(), res);
});

router.get("/:id", param("id"), (req, res) => {
  const err = ValidateInput(validationResult(req), res);
  if (err) return;
  const id = req.params.id;
  GenerateResponse(kitchenPrinterService.getkitchenPrinterById(id), res);
});
router.post("/", async (req, res) => {
  const kitchenPrinter = req.body;
  let result = await kitchenPrinterService.addNewkitchenPrinter(kitchenPrinter);
  res.send(result);
});
router.put("/:id", async (req, res) => {
  const kitchenPrinter = req.body;
  const id = req.params.id;
  let result = await kitchenPrinterService.updatekitchenPrinterData(
    id,
    kitchenPrinter
  );
  res.send(result);
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let result = await kitchenPrinterService.deletekitchenPrinterData(id);
  res.send(result);
});

module.exports = router;
