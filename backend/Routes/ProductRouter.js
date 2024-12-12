const ensureAuthorization = require("../Middlewares/Auth");
const router = require("express").Router();

router.get("/", ensureAuthorization, (req, res) => {
  res.status(200).json([
    {
      name: "Mobile",
      price: 100000,
    },
    {
      name: "Tv",
      price: 40000,
    },
  ]);
});

module.exports = router;
