const express = require("express");
var router = express.Router();
const { body, param, validationResult } = require("express-validator");
const { ValidateInput, GenerateResponse } = require("../../common/commons");

/* Controller Endpoints */
const managementTerminalService = require("./managementTerminal.service");
router.get("/", (req, res) => {
  GenerateResponse(managementTerminalService.getAllmanagementTerminals(), res);
});

router.get("/:id", param("id"), (req, res) => {
  const err = ValidateInput(validationResult(req), res);
  if (err) return;
  const id = req.params.id;
  GenerateResponse(
    managementTerminalService.getmanagementTerminalById(id),
    res
  );
});
router.post("/", async (req, res) => {
  const managementTerminal = req.body;
  let result = await managementTerminalService.addNewmanagementTerminal(
    managementTerminal
  );
  res.send(result);
});
router.put("/:id", async (req, res) => {
  const managementTerminal = req.body;
  const id = req.params.id;
  let result = await managementTerminalService.updatemanagementTerminalData(
    id,
    managementTerminal
  );
  res.send(result);
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let result = await managementTerminalService.deletemanagementTerminalData(id);
  res.send(result);
});

module.exports = router;
