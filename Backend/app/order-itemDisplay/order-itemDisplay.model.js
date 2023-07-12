// Order/Item Display:

// Name: Name or label of the display.
// Display Type: Type or model of the display used for order/item display.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemDisplaySchema = mongoose.model(
  "itemDisplay",
  new Schema({
    name: { type: String, required: true, lowercase: true },
    displayType: {
      type: String,
      required: true,
    },
    created_at: { type: Date, default: new Date().toUTCString() },
    updated_at: { type: Date, default: new Date().toUTCString() },
  })
);

module.exports = { itemDisplaySchema };
