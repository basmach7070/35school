
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB ulash
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routerlar
const teacherRoutes = require("./routes/teachers");
const contactRoutes = require("./routes/contact");

app.use("/api/teachers", teacherRoutes);
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("35-Maktab Backend Server ishlayapti!");
});

app.listen(PORT, () => {
  console.log(`Server ${PORT} portda ishlamoqda`);
});
