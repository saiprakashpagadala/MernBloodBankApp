//imports
import express from "express";
import testRoutes from './routes/testRoute.js'

// rest object
const app = express();

// routes
app.use("/api/v1/test", testRoutes)

// port
const PORT = 8080;

// listen
app.listen(PORT, () => {
  console.log(`Node Server Running at port ${PORT}`);
});
