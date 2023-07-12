const express = require("express");
var router = express.Router();
const { body, param, validationResult } = require("express-validator");
const { ValidateInput, GenerateResponse } = require("../../common/commons");

/* Controller Endpoints */
const cashierTerminalService = require("./cashierTerminal.service");
router.get("/", (req, res) => {
  GenerateResponse(cashierTerminalService.getAllcashierTerminals(), res);
});

router.get("/:id", param("id"), (req, res) => {
  const err = ValidateInput(validationResult(req), res);
  if (err) return;
  const id = req.params.id;
  GenerateResponse(cashierTerminalService.getcashierTerminalById(id), res);
});
router.post("/", async (req, res) => {
  const cashierTerminal = req.body;
  let result = await cashierTerminalService.addNewcashierTerminal(
    cashierTerminal
  );
  res.send(result);
});
router.put("/:id", async (req, res) => {
  const cashierTerminal = req.body;
  const id = req.params.id;
  let result = await cashierTerminalService.updatecashierTerminalData(
    id,
    cashierTerminal
  );
  res.send(result);
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let result = await cashierTerminalService.deletecashierTerminalData(id);
  res.send(result);
});

module.exports = router;
