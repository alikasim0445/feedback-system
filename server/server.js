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

// Corrected CORS configuration for both local and production environments
app.use(
  cors({
    origin: ["http://localhost:3000", "https://feedback-system-2.onrender.com"],
    credentials: true, // If using cookies, session, etc.
  })
);

// Logger middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// API routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);
app.use("/api/complaint", complaintRouter);

// Serve static files from the React frontend app (in production)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
  });
} else {
  // If in development, serve a different message (optional)
  app.get("/", (req, res) => {
    res.send("API running in development mode");
  });
}

// connect to db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT || 5555, () => {
      console.log(
        "connected to db & listening on port",
        process.env.PORT || 5555
      );
    });
  })
  .catch((error) => {
    console.error("DB connection error:", error);
  });
