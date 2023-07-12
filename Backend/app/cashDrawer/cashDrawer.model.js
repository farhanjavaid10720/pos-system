// Cash Drawer:

// Name: Name or label of the cash drawer.
// Currency: Currency used in the cash drawer.
// Initial Amount: Initial amount of cash in the drawer.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cashDrawerSchema = mongoose.model(
  "cashDrawers",
  new Schema({
    name: { type: String, required: true, lowercase: true },

    currency: {
      type: String,
      required: true,
      lowercase: true,
    },
    initialAmount: {
      type: Number,
      required: true,
    },

    created_at: { type: Date, default: new Date().toUTCString() },
    updated_at: { type: Date, default: new Date().toUTCString() },
  })
);

module.exports = { cashDrawerSchema };
