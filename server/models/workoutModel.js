const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    sector: { type: String, required: true },
    office: { type: String, required: true },
    desk: { type: String, required: true },
    rate: { type: String, required: true },
    phone: { type: Number, required: false, default: null },
    comment: { type: String, required: false, default: null },
    // user_id: {
    //   type: String,
    //   required: true
    // }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Workout", workoutSchema);
