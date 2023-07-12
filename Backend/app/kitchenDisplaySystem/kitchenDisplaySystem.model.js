// Kitchen Display System (KDS):

// Name: Name or label of the KDS.
// Display Type: Type or model of the display used in the kitchen (e.g., monitor, tablet).
// Order Status: Current status of orders displayed on the KDS (e.g., pending, prepared).

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const kitchenDisplaySchema = mongoose.model(
  "kitchenDisplay",
  new Schema({
    name: { type: String, required: true, lowercase: true },
    displayType: {
      type: String,
      required: true,
    },
    orderStatus: String,
    created_at: { type: Date, default: new Date().toUTCString() },
    updated_at: { type: Date, default: new Date().toUTCString() },
  })
);

module.exports = { kitchenDisplaySchema };
