const complaintModel = require("../models/complaintModel");
const express = require("express");
const {
  getComplaint,
  createComplaint,
  getSingleComplaint,
  deleteComplaint,
  updateComplaint,
} = require("../controllers/complaintController");

const router = express.Router();

router.get("/", getComplaint);
router.post("/", createComplaint);
router.get("/:id", getSingleComplaint);
router.delete("/:id", deleteComplaint);
router.patch("/:id", updateComplaint);

module.exports = router;
