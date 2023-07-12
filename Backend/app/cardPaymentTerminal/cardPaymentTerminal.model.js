// Card Payment Terminal:

// Name: Name or label of the payment terminal.
// Connection Type: Type of connection used (e.g., USB, Bluetooth).
// Payment Processor: Name or identifier of the payment processor.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentTerminalSchema = mongoose.model(
  "paymentTerminals",
  new Schema({
    name: { type: String, required: true, lowercase: true },
    connectionType: String,
    paymentProcessor: {
      type: String,
      required: true,
    },

    created_at: { type: Date, default: new Date().toUTCString() },
    updated_at: { type: Date, default: new Date().toUTCString() },
  })
);

module.exports = { paymentTerminalSchema };
