const express = require("express");
var router = express.Router();
const { body, param, validationResult } = require("express-validator");
const { ValidateInput, GenerateResponse } = require("../../common/commons");

/* Controller Endpoints */
const loyaltyProgramService = require("./customerLoyaltyProgram.service");
router.get("/", (req, res) => {
  GenerateResponse(loyaltyProgramService.getAllloyaltyPrograms(), res);
});

router.get("/:id", param("id"), (req, res) => {
  const err = ValidateInput(validationResult(req), res);
  if (err) return;
  const id = req.params.id;
  GenerateResponse(loyaltyProgramService.getloyaltyProgramById(id), res);
});
router.post("/", async (req, res) => {
  const loyaltyProgram = req.body;
  let result = await loyaltyProgramService.addNewloyaltyProgram(loyaltyProgram);
  res.send(result);
});
router.put("/:id", async (req, res) => {
  const loyaltyProgram = req.body;
  const id = req.params.id;
  let result = await loyaltyProgramService.updateloyaltyProgramData(
    id,
    loyaltyProgram
  );
  res.send(result);
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let result = await loyaltyProgramService.deleteloyaltyProgramData(id);
  res.send(result);
});

module.exports = router;
