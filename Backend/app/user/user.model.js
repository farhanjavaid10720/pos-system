const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = mongoose.model(
  "User",
  new Schema({
    name: { type: String, required: true, lowercase: true },
    type: {
      type: String,
      enum: ["customer", "admin", "staff"],
      default: "customer",
    },
    image: { type: String, default: "/public/default.svg", require: false },
    age: { type: Number, min: 18, max: 70, required: false },

    // email: { type: String, require: true, unique: true, index: true },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
      validate: {
        validator: function (value) {
          // Regular expression for email validation
          const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
          return emailRegex.test(value);
        },
        message: "Invalid email address",
      },
    },
    password: { type: String, required: true },
    reset_password: { type: Object, required: false },

    created_at: { type: Date, default: new Date().toUTCString() },
    updated_at: { type: Date, default: new Date().toUTCString() },
  }),
  "user"
);
module.exports = { user };
