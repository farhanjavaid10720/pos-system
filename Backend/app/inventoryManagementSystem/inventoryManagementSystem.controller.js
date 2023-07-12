const express = require("express");
var router = express.Router();
const { body, param, validationResult } = require("express-validator");
const { ValidateInput, GenerateResponse } = require("../../common/commons");

/* Controller Endpoints */
const inventoryManagementService = require("./inventoryManagementSystem.service");
router.get("/", (req, res) => {
  GenerateResponse(
    inventoryManagementService.getAllinventoryManagements(),
    res
  );
});

router.get("/:id", param("id"), (req, res) => {
  const err = ValidateInput(validationResult(req), res);
  if (err) return;
  const id = req.params.id;
  GenerateResponse(
    inventoryManagementService.getinventoryManagementById(id),
    res
  );
});
router.post("/", async (req, res) => {
  const inventoryManagement = req.body;
  let result = await inventoryManagementService.addNewinventoryManagement(
    inventoryManagement
  );
  res.send(result);
});
router.put("/:id", async (req, res) => {
  const inventoryManagement = req.body;
  const id = req.params.id;
  let result = await inventoryManagementService.updateinventoryManagementData(
    id,
    inventoryManagement
  );
  res.send(result);
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let result = await inventoryManagementService.deleteinventoryManagementData(
    id
  );
  res.send(result);
});

module.exports = router;
