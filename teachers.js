const express = require("express");
const router = express.Router();
const Teacher = require("../models/Teacher");

// Barcha o'qituvchilarni olish
router.get("/", async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Yangi o'qituvchi qo'shish
router.post("/", async (req, res) => {
  const teacher = new Teacher({
    name: req.body.name,
    subject: req.body.subject,
  });

  try {
    const newTeacher = await teacher.save();
    res.status(201).json(newTeacher);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subject: { type: String, required: true },
});

module.exports = mongoose.model("Teacher", TeacherSchema);