const express = require("express");
var router = express.Router();
const { body, param, validationResult } = require("express-validator");
const { ValidateInput, GenerateResponse } = require("../../common/commons");

/* Controller Endpoints */
const scannerService = require("./barcodeScanner.service");
router.get("/", (req, res) => {
  GenerateResponse(scannerService.getAllScanners(), res);
});

router.get("/:id", param("id"), (req, res) => {
  const err = ValidateInput(validationResult(req), res);
  if (err) return;
  const id = req.params.id;
  GenerateResponse(scannerService.getScannerById(id), res);
});
router.post("/", async (req, res) => {
  const scanner = req.body;
  let result = await scannerService.addNewScanner(scanner);
  res.send(result);
});
router.put("/:id", async (req, res) => {
  const scanner = req.body;
  const id = req.params.id;
  let result = await scannerService.updateScannerData(id, scanner);
  res.send(result);
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let result = await scannerService.deleteScannerData(id);
  res.send(result);
});

module.exports = router;
