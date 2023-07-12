const express = require("express");
var router = express.Router();
const { body, param, validationResult } = require("express-validator");
const { ValidateInput, GenerateResponse } = require("../../common/commons");

/* Controller Endpoints */
const customerTabletService = require("./customerFacingTablet.service");
router.get("/", (req, res) => {
  GenerateResponse(customerTabletService.getAllcustomerTablets(), res);
});

router.get("/:id", param("id"), (req, res) => {
  const err = ValidateInput(validationResult(req), res);
  if (err) return;
  const id = req.params.id;
  GenerateResponse(customerTabletService.getcustomerTabletById(id), res);
});
router.post("/", async (req, res) => {
  const customerTablet = req.body;
  let result = await customerTabletService.addNewcustomerTablet(customerTablet);
  res.send(result);
});
router.put("/:id", async (req, res) => {
  const customerTablet = req.body;
  const id = req.params.id;
  let result = await customerTabletService.updatecustomerTabletData(
    id,
    customerTablet
  );
  res.send(result);
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let result = await customerTabletService.deletecustomerTabletData(id);
  res.send(result);
});

module.exports = router;
