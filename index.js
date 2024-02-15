const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDb = require("./db/db");
require("dotenv").config();
const todoRoutes = require("./routers/todoRouter");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// routes
app.use("/api", todoRoutes);

// connect to db
connectDb();

// start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
