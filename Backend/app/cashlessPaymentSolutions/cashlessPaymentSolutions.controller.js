const express = require("express");
var router = express.Router();
const { body, param, validationResult } = require("express-validator");
const { ValidateInput, GenerateResponse } = require("../../common/commons");

/* Controller Endpoints */
const cashlessPaymentService = require("./cashlessPaymentSolutions.service");
router.get("/", (req, res) => {
  GenerateResponse(cashlessPaymentService.getAllcashlessPayments(), res);
});

router.get("/:id", param("id"), (req, res) => {
  const err = ValidateInput(validationResult(req), res);
  if (err) return;
  const id = req.params.id;
  GenerateResponse(cashlessPaymentService.getcashlessPaymentById(id), res);
});
router.post("/", async (req, res) => {
  const cashlessPayment = req.body;
  let result = await cashlessPaymentService.addNewcashlessPayment(
    cashlessPayment
  );
  res.send(result);
});
router.put("/:id", async (req, res) => {
  const cashlessPayment = req.body;
  const id = req.params.id;
  let result = await cashlessPaymentService.updatecashlessPaymentData(
    id,
    cashlessPayment
  );
  res.send(result);
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let result = await cashlessPaymentService.deletecashlessPaymentData(id);
  res.send(result);
});

module.exports = router;
