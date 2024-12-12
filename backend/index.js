const express = require("express");
const app = express();
require("dotenv").config();
require("./Models/db");
const cors = require("cors");
const bodyparser = require("body-parser");
const AuthRouter = require("./Routes/AuthRouter");
const ProductRouter = require("./Routes/ProductRouter");

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(cors());
app.use(bodyparser.json());
app.use("/auth", AuthRouter);

// Below code is for JWT token understanding
app.use("/products", ProductRouter);

app.get("/ping", (req, res) => {
  res.send("pong");
});
