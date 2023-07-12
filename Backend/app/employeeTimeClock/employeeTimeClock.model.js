// Employee Time Clock:

// Name: Name or label of the time clock.
// Location: Location of the time clock (e.g., near entrance, break room).
// Clock Type: Type or model of the time clock (e.g., biometric, RFID).

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const timeClockSchema = mongoose.model(
  "timeClocks",
  new Schema({
    name: { type: String, required: true, lowercase: true },
    location: {
      type: String,
      required: true,
    },
    clockType: {
      type: String,
      required: true,
    },
    created_at: { type: Date, default: new Date().toUTCString() },
    updated_at: { type: Date, default: new Date().toUTCString() },
  })
);

module.exports = { timeClockSchema };
