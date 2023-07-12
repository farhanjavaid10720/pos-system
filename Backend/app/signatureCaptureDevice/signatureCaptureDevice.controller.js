const express = require("express");
var router = express.Router();
const { body, param, validationResult } = require("express-validator");
const { ValidateInput, GenerateResponse } = require("../../common/commons");

/* Controller Endpoints */
const signatureCaptureService = require("./signatureCaptureDevice.service");
router.get("/", (req, res) => {
  GenerateResponse(signatureCaptureService.getAllsignatureCaptures(), res);
});

router.get("/:id", param("id"), (req, res) => {
  const err = ValidateInput(validationResult(req), res);
  if (err) return;
  const id = req.params.id;
  GenerateResponse(signatureCaptureService.getsignatureCaptureById(id), res);
});
router.post("/", async (req, res) => {
  const signatureCapture = req.body;
  let result = await signatureCaptureService.addNewsignatureCapture(
    signatureCapture
  );
  res.send(result);
});
router.put("/:id", async (req, res) => {
  const signatureCapture = req.body;
  const id = req.params.id;
  let result = await signatureCaptureService.updatesignatureCaptureData(
    id,
    signatureCapture
  );
  res.send(result);
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let result = await signatureCaptureService.deletesignatureCaptureData(id);
  res.send(result);
});

module.exports = router;
