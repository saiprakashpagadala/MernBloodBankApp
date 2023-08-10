//imports
import express from "express";

// rest object
const app = express();

// routes

// test route
app.get("/test", (req, res) => {
  res.status(200).json({
    message: "Welcome to Blood Bank Application",
  });
});

// port
const PORT = 8080;

// listen
app.listen(PORT, () => {
  console.log(`Node Server Running at port ${PORT}`);
});
