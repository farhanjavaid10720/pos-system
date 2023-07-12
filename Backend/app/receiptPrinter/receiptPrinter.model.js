// Receipt Printer:

// Name: Name or label of the printer.
// Paper Size: Size of the receipt paper used (e.g., 80mm, 58mm).
// Connection Type: Type of connection used (e.g., USB, Ethernet).

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const receiptPrinterSchema = mongoose.model(
  "receiptPrinter",
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

module.exports = { receiptPrinterSchema };
