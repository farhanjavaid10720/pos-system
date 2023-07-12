const express = require("express");
var router = express.Router();
const { body, param, validationResult } = require("express-validator");
const { ValidateInput, GenerateResponse } = require("../../common/commons");

/* Controller Endpoints */
const voucherScannerService = require("./voucherCouponScanner.service");
router.get("/", (req, res) => {
  GenerateResponse(voucherScannerService.getAllvoucherScanners(), res);
});

router.get("/:id", param("id"), (req, res) => {
  const err = ValidateInput(validationResult(req), res);
  if (err) return;
  const id = req.params.id;
  GenerateResponse(voucherScannerService.getvoucherScannerById(id), res);
});
router.post("/", async (req, res) => {
  const voucherScanner = req.body;
  let result = await voucherScannerService.addNewvoucherScanner(voucherScanner);
  res.send(result);
});
router.put("/:id", async (req, res) => {
  const voucherScanner = req.body;
  const id = req.params.id;
  let result = await voucherScannerService.updatevoucherScannerData(
    id,
    voucherScanner
  );
  res.send(result);
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let result = await voucherScannerService.deletevoucherScannerData(id);
  res.send(result);
});

module.exports = router;
