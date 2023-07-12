const express = require("express");
var router = express.Router();
const { body, param, validationResult } = require("express-validator");
const { ValidateInput, GenerateResponse } = require("../../common/commons");

/* Controller Endpoints */
const receiptPrinterService = require("./receiptPrinter.service");
router.get("/", (req, res) => {
  GenerateResponse(receiptPrinterService.getAllreceiptPrinters(), res);
});

router.get("/:id", param("id"), (req, res) => {
  const err = ValidateInput(validationResult(req), res);
  if (err) return;
  const id = req.params.id;
  GenerateResponse(receiptPrinterService.getreceiptPrinterById(id), res);
});
router.post("/", async (req, res) => {
  const receiptPrinter = req.body;
  let result = await receiptPrinterService.addNewreceiptPrinter(receiptPrinter);
  res.send(result);
});
router.put("/:id", async (req, res) => {
  const receiptPrinter = req.body;
  const id = req.params.id;
  let result = await receiptPrinterService.updatereceiptPrinterData(
    id,
    receiptPrinter
  );
  res.send(result);
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let result = await receiptPrinterService.deletereceiptPrinterData(id);
  res.send(result);
});

module.exports = router;
