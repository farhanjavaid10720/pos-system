// Back Office/Management Terminal:

// Name: Name or label of the management terminal.
// Access Level: Level of access or privileges for the management terminal (e.g., administrator, manager).
// Functionality: Supported functions or tasks for the management terminal.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const managementTerminalSchema = mongoose.model(
  "managementTerminal",
  new Schema({
    name: { type: String, required: true, lowercase: true },
    accessLevel: {
      type: String,
      required: true,
    },
    functionality: {
      type: [String],
      required: true,
    },
    created_at: { type: Date, default: new Date().toUTCString() },
    updated_at: { type: Date, default: new Date().toUTCString() },
  })
);

module.exports = { managementTerminalSchema };
