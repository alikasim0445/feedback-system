require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");
const complaintRouter = require("./routes/complaint");
const cors = require("cors");
const path = require("path");

// express app
const app = express();

// middleware
app.use(express.json());

// Corrected CORS configuration
app.use(
  cors({
    origin: ["https://feedback-system-1.onrender.com", "http://localhost:3000"], // Allow multiple origins
    credentials: true,
  })
);

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);
app.use("/api/complaint", complaintRouter);

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "/client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
