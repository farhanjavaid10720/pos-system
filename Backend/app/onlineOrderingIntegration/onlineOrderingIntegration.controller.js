const express = require("express");
var router = express.Router();
const { body, param, validationResult } = require("express-validator");
const { ValidateInput, GenerateResponse } = require("../../common/commons");

/* Controller Endpoints */
const onlineOrderingService = require("./onlineOrderingIntegration.service");
router.get("/", (req, res) => {
  GenerateResponse(onlineOrderingService.getAllonlineOrderings(), res);
});

router.get("/:id", param("id"), (req, res) => {
  const err = ValidateInput(validationResult(req), res);
  if (err) return;
  const id = req.params.id;
  GenerateResponse(onlineOrderingService.getonlineOrderingById(id), res);
});
router.post("/", async (req, res) => {
  const onlineOrdering = req.body;
  let result = await onlineOrderingService.addNewonlineOrdering(onlineOrdering);
  res.send(result);
});
router.put("/:id", async (req, res) => {
  const onlineOrdering = req.body;
  const id = req.params.id;
  let result = await onlineOrderingService.updateonlineOrderingData(
    id,
    onlineOrdering
  );
  res.send(result);
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let result = await onlineOrderingService.deleteonlineOrderingData(id);
  res.send(result);
});

module.exports = router;
