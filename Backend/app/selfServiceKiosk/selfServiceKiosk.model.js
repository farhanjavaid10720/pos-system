// Self-Service Kiosk:

// Name: Name or label of the self-service kiosk.
// Location: Location of the self-service kiosk (e.g., store entrance, dining area).
// Payment Methods: Supported payment methods at the kiosk (e.g., cash, card, mobile payment).

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const selfServiceKioskSchema = mongoose.model(
  "selfServiceKiosk",
  new Schema({
    name: { type: String, required: true, lowercase: true },
    location: {
      type: String,
      required: true,
    },
    paymentMethods: {
      type: [String],
      required: true,
    },
    created_at: { type: Date, default: new Date().toUTCString() },
    updated_at: { type: Date, default: new Date().toUTCString() },
  })
);

module.exports = { selfServiceKioskSchema };
