const express = require("express");
var router = express.Router();
const { body, param, validationResult } = require("express-validator");
const { ValidateInput, GenerateResponse } = require("../../common/commons");

/* Controller Endpoints */
const mobileDeviceService = require("./mobileDevices.service");
router.get("/", (req, res) => {
  GenerateResponse(mobileDeviceService.getAllmobileDevices(), res);
});

router.get("/:id", param("id"), (req, res) => {
  const err = ValidateInput(validationResult(req), res);
  if (err) return;
  const id = req.params.id;
  GenerateResponse(mobileDeviceService.getmobileDeviceById(id), res);
});
router.post("/", async (req, res) => {
  const mobileDevice = req.body;
  let result = await mobileDeviceService.addNewmobileDevice(mobileDevice);
  res.send(result);
});
router.put("/:id", async (req, res) => {
  const mobileDevice = req.body;
  const id = req.params.id;
  let result = await mobileDeviceService.updatemobileDeviceData(
    id,
    mobileDevice
  );
  res.send(result);
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let result = await mobileDeviceService.deletemobileDeviceData(id);
  res.send(result);
});

module.exports = router;
