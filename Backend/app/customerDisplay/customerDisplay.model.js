// Customer Display:

// Name: Name or label of the display.
// Type: Type or model of the display (e.g., LCD, LED).
// Screen Size: Size of the display screen.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerDisplaySchema = mongoose.model(
  "customerDisplay",
  new Schema({
    name: { type: String, required: true, lowercase: true },
    type: {
      type: String,
      required: true,
    },
    screenSize: String,
    created_at: { type: Date, default: new Date().toUTCString() },
    updated_at: { type: Date, default: new Date().toUTCString() },
  })
);

module.exports = { customerDisplaySchema };
