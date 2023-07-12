const express = require("express");
var router = express.Router();
const { body, param, validationResult } = require("express-validator");
const { ValidateInput, GenerateResponse } = require("../../common/commons");

/* Controller Endpoints */
const securityCameraService = require("./securityCameras.service");
router.get("/", (req, res) => {
  GenerateResponse(securityCameraService.getAllsecurityCameras(), res);
});

router.get("/:id", param("id"), (req, res) => {
  const err = ValidateInput(validationResult(req), res);
  if (err) return;
  const id = req.params.id;
  GenerateResponse(securityCameraService.getsecurityCameraById(id), res);
});
router.post("/", async (req, res) => {
  const securityCamera = req.body;
  let result = await securityCameraService.addNewsecurityCamera(securityCamera);
  res.send(result);
});
router.put("/:id", async (req, res) => {
  const securityCamera = req.body;
  const id = req.params.id;
  let result = await securityCameraService.updatesecurityCameraData(
    id,
    securityCamera
  );
  res.send(result);
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let result = await securityCameraService.deletesecurityCameraData(id);
  res.send(result);
});

module.exports = router;
