// Customer Loyalty Program Integration:

// Name: Name or label of the loyalty program integration.
// Loyalty Program ID: Identifier for the associated loyalty program.
// Integration Key: Key or token used for authentication with the loyalty program API.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loyaltyProgramSchema = mongoose.model(
  "loyaltyProgram",
  new Schema({
    name: { type: String, required: true, lowercase: true },
    loyaltyProgramId: {
      type: String,
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

module.exports = { loyaltyProgramSchema };
