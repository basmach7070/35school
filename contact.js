const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// Yangi xabar yuborish
router.post("/", async (req, res) => {
  const contact = new Contact({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });

  try {
    const newMessage = await contact.save();
    res.status(201).json({ message: "Xabar yuborildi", data: newMessage });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Contact", ContactSchema);