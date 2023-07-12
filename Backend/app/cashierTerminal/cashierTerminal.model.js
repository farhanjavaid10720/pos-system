// Cashier Terminal:
// Name: Name or label of the cashier terminal.
// Location: Location of the cashier terminal (e.g., store branch or department).
// Active: Indicates whether the cashier terminal is currently in use or active.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cashierTerminalSchema = mongoose.model(
  "cashierTerminals",
  new Schema({
    name: { type: String, required: true, lowercase: true },
    location: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    created_at: { type: Date, default: new Date().toUTCString() },
    updated_at: { type: Date, default: new Date().toUTCString() },
  })
);

module.exports = { cashierTerminalSchema };
