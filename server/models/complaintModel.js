const { default: mongoose } = require("mongoose");

const complaintSchema = require("mongoose").Schema(
  {
    phone: {
      type: Number,
      required: false,
      default: null,
    },
    complaint: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Complaint", complaintSchema);
