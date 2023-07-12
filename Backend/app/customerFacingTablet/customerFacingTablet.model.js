// Customer-facing Tablet:

// Name: Name or label of the tablet.
// Operating System: Operating system running on the tablet (e.g., iOS, Android).
// Screen Size: Size of the tablet screen.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerTabletSchema = mongoose.model(
  "customerTablet",
  new Schema({
    name: { type: String, required: true, lowercase: true },
    operatingSystem: {
      type: String,
      required: true,
    },
    screenSize: String,
    created_at: { type: Date, default: new Date().toUTCString() },
    updated_at: { type: Date, default: new Date().toUTCString() },
  })
);

module.exports = { customerTabletSchema };
