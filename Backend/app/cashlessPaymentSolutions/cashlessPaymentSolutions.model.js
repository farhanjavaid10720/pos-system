// Cashless Payment Solutions:

// Name: Name or label of the cashless payment solution.
// Supported Methods: Supported digital payment methods (e.g., mobile wallets, contactless payments).
// Integration Key: Key or token used for authentication with the payment provider API.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cashlessPaymentSchema = mongoose.model(
  "cashlessPayments",
  new Schema({
    name: { type: String, required: true, lowercase: true },
    supportedMethods: {
      type: [String],
      required: true,
    },
    integrationKey: {
      type: String,
      required: true,
    },

    created_at: { type: Date, default: new Date().toUTCString() },
    updated_at: { type: Date, default: new Date().toUTCString() },
  })
);

module.exports = { cashlessPaymentSchema };
