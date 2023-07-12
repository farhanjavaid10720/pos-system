const express = require("express");
var router = express.Router();
const { body, param, validationResult } = require("express-validator");
const { ValidateInput, GenerateResponse } = require("../../common/commons");

/* Controller Endpoints */
const selfServiceKioskService = require("./selfServiceKiosk.service");
router.get("/", (req, res) => {
  GenerateResponse(selfServiceKioskService.getAllselfServiceKiosks(), res);
});

router.get("/:id", param("id"), (req, res) => {
  const err = ValidateInput(validationResult(req), res);
  if (err) return;
  const id = req.params.id;
  GenerateResponse(selfServiceKioskService.getselfServiceKioskById(id), res);
});
router.post("/", async (req, res) => {
  const selfServiceKiosk = req.body;
  let result = await selfServiceKioskService.addNewselfServiceKiosk(
    selfServiceKiosk
  );
  res.send(result);
});
router.put("/:id", async (req, res) => {
  const selfServiceKiosk = req.body;
  const id = req.params.id;
  let result = await selfServiceKioskService.updateselfServiceKioskData(
    id,
    selfServiceKiosk
  );
  res.send(result);
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let result = await selfServiceKioskService.deleteselfServiceKioskData(id);
  res.send(result);
});

module.exports = router;
