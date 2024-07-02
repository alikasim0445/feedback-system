const Complaint = require("../models/complaintModel");
const mongoose = require("mongoose");

const getComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.find({}).sort({ createdAt: -1 });
    if (!complaint) {
      return res.status(404).json({ error: "Not found" });
    }
    res.status(200).json(complaint);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createComplaint = async (req, res) => {
  const { phone, complaint } = req.body;

  try {
    const newComplaint = await Complaint.create({ phone, complaint });
    res.status(201).json(newComplaint);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getSingleComplaint = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  try {
    const complaint = await Complaint.findById(id);
    if (!complaint) {
      return res.status(404).json({ error: "Complaint not found" });
    }
    res.status(200).json(complaint);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteComplaint = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }
  try {
    const complaint = await Complaint.findByIdAndDelete(id);
    if (!complaint) {
      return res.status(404).json({ error: "Not Found" });
    }
    res.status(200).json(complaint);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const updateComplaint = async (req, res) => {};

module.exports = {
  getComplaint,
  createComplaint,
  getSingleComplaint,
  deleteComplaint,
  updateComplaint,
};
