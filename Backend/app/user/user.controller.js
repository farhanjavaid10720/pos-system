/* Node Modules*/

const express = require("express");
var router = express.Router();
const { body, param, validationResult } = require("express-validator");
const { ValidateInput, GenerateResponse } = require("../../common/commons");
const jwt = require("jsonwebtoken");

/* Controller Endpoints */
const userService = require("./user.service");
router.get("/", (req, res) => {
  GenerateResponse(userService.getAllUsers(), res);
});
router.get(
  "/getUserByEmail",
  body("email").isEmail().trim().toLowerCase(),
  (req, res) => {
    const err = ValidateInput(validationResult(req), res);
    if (err) return;
    // This code will be executed if email has a valid data
    const email = req.body.email;
    GenerateResponse(userService.getUserByEmail(email), res);
  }
);
router.get("/:id", param("id"), (req, res) => {
  const err = ValidateInput(validationResult(req), res);
  if (err) return;
  const id = req.params.id;
  GenerateResponse(userService.getUserById(id), res);
});

router.put("/:id", async (req, res) => {
  const user = req.body;
  const id = req.params.id;
  let result = await userService.updateuserData(id, user);
  res.send(result);
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  let result = await userService.deleteuserData(id);
  res.send(result);
});
router.post("/me", async (req, res) => {
  const token = req.headers?.authorization;
  var decoded = jwt.verify(token, process.env.PRIVATE_KEY);
  GenerateResponse(decoded, res, "User Record");
  // GenerateResponse(userService.getUserById(id),res);
});

module.exports = router;
