// Pole Display:

// Name: Name or label of the pole display.
// Display Type: Type or model of the pole display.
// Connection Type: Type of connection used (e.g., USB, serial).

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const poleDisplaySchema = mongoose.model(
  "poleDisplay",
  new Schema({
    name: { type: String, required: true, lowercase: true },
    displayType: {
      type: String,
      required: true,
    },
    connectionType: String,
    created_at: { type: Date, default: new Date().toUTCString() },
    updated_at: { type: Date, default: new Date().toUTCString() },
  })
);

module.exports = { poleDisplaySchema };
