// For JWT token understanding for Products
const jwt = require("jsonwebtoken");

const ensureAuthorization = (req, res, next) => {
  const auth = req.headers["authorization"];
  if (!auth) {
    return res.status(403).json({
      message: "Unauthorized.JWT Token is required",
    });
  }

  try {
    const decodedJwt = jwt.verify(auth, process.env.JWT_SECRET);
    req.user = decodedJwt;

    next();
  } catch (err) {
    return res
      .status(403)
      .json({ message: "Unauthorized, JWT is wrong or expired." });
  }
};

module.exports = ensureAuthorization;
