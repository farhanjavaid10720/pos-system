// // // const express = require('express');
// // // var router = express.Router();
// // // const {body,validationResult} = require("express-validator")
// // // const {addNewuser,Login} = require('./auth.service');
// // // const {ValidateInput} = require("../../common/commons");

// // // router.post("/login",[body("email").isEmail(),body("password").isLength(5)],async (req,res)=>{
// // //     const user = req.body
// // //     const err = ValidateInput(validationResult(req),res)
// // //     if(err) return;
// // //     let result = await Login(user.email,user.password)
// // //     res.send(result)
// // // })

// // // router.post("/register",async (req,res)=>{
// // //     const user = req.body
// // //     let result = await addNewuser(user)
// // //     res.send(result)
// // // })

// // // module.exports = router;

// // const express = require("express");
// // var router = express.Router();
// // const { body, validationResult } = require("express-validator");
// // const { addNewuser, Login } = require("./auth.service");
// // const { ValidateInput, GenerateDataResponse } = require("../../common/commons");

// // router.post(
// //   "/login",
// //   [body("email").isEmail(), body("password").isLength(5)],
// //   async (req, res) => {
// //     const user = req.body;
// //     const err = ValidateInput(validationResult(req), res);
// //     if (err) return;
// //     let result = await Login(user.email, user.password, req);
// //     res.send(result);
// //   }
// // );

// // router.post("/register", async (req, res) => {
// //   const user = req.body;
// //   let result = await addNewuser(user);
// //   res.send(result);
// // });

// // router.post("/logout", async (req, res) => {
// //   req.session.destroy();
// //   res.send(GenerateDataResponse("User Logged out", 0));
// // });

// // module.exports = router;

// const express = require("express");
// var router = express.Router();
// const { body, validationResult } = require("express-validator");
// const { addNewuser, Login, Logout } = require("./auth.service");
// const { ValidateInput, GenerateDataResponse } = require("../../common/commons");
// const { Auth } = require("./auth.middleware");

// router.post(
//   "/login",
//   [body("email").isEmail(), body("password").isLength(5)],
//   async (req, res) => {
//     const user = req.body;
//     const err = ValidateInput(validationResult(req), res);
//     if (err) return;
//     await Login(user.email, user.password, res);
//   }
// );

// router.post("/register", async (req, res) => {
//   const user = req.body;
//   let result = await addNewuser(user);
//   res.send(result);
// });

// module.exports = router;

const express = require("express");
var router = express.Router();
const { body, validationResult } = require("express-validator");
const { addNewuser, Login, Logout } = require("./auth.service");
const {
  ValidateInput,
  GenerateDataResponse,
  ValidateUploadType,
} = require("../../common/commons");
const { uploads } = require("../../common/Upload.settings");
const path = require("path");
const nodemailer = require("nodemailer");
const SendEmail = require("../../common/mail");

router.post(
  "/login",
  [body("email").isEmail(), body("password").isLength(5)],
  async (req, res) => {
    const user = req.body;
    const err = ValidateInput(validationResult(req), res);
    console.log(user);
    if (err) return;
    await Login(user.email, user.password, res);
  }
);

router.post("/register", uploads.single("image"), async (req, res) => {
  if (!req.file) return res.send(GenerateDataResponse("invalid file", 1));
  try {
    var user = JSON.parse(req.body.data);
  } catch (err) {
    return res.send(GenerateDataResponse("Invalid data", true));
  }
  let result = await addNewuser(
    user,
    path.join(
      `${process.env.BASE_URL}:${process.env.BACKEND_PORT}/uploads/`,
      req.file.filename
    )
  );
  res.send(result);
});

router.post("/sendmail", async (req, res) => {
  const data = {
    to: "farhan.javaid17arid19@gmail.com",
    username: "Farhan Javaid",
  };
  SendEmail(data, "forget");
  return res.send({ send: 1 });
});

module.exports = router;
