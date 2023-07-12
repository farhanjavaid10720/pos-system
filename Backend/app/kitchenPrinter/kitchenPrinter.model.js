// Kitchen Printer:

// Name: Name or label of the printer.
// Paper Size: Size of the paper used in the kitchen printer.
// Connection Type: Type of connection used (e.g., Ethernet, Wi-Fi).

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const kitchenPrinterSchema = mongoose.model(
  "kitchenPrinter",
  new Schema({
    name: { type: String, required: true, lowercase: true },
    paperSize: {
      type: String,
      required: true,
    },
    connectionType: String,
    created_at: { type: Date, default: new Date().toUTCString() },
    updated_at: { type: Date, default: new Date().toUTCString() },
  })
);

module.exports = { kitchenPrinterSchema };
