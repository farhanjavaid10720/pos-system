const express = require("express");
var router = express.Router();
const { body, param, validationResult } = require("express-validator");
const { ValidateInput, GenerateResponse } = require("../../common/commons");

/* Controller Endpoints */
const weighingScaleService = require("./weighingScale.service");
router.get("/", (req, res) => {
  GenerateResponse(weighingScaleService.getAllweighingScales(), res);
});

router.get("/:id", param("id"), (req, res) => {
  const err = ValidateInput(validationResult(req), res);
  if (err) return;
  const id = req.params.id;
  GenerateResponse(weighingScaleService.getweighingScaleById(id), res);
});
router.post("/", async (req, res) => {
  const weighingScale = req.body;
  let result = await weighingScaleService.addNewweighingScale(weighingScale);
  res.send(result);
});
router.put("/:id", async (req, res) => {
  const weighingScale = req.body;
  const id = req.params.id;
  let result = await weighingScaleService.updateweighingScaleData(
    id,
    weighingScale
  );
  res.send(result);
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let result = await weighingScaleService.deleteweighingScaleData(id);
  res.send(result);
});

module.exports = router;
