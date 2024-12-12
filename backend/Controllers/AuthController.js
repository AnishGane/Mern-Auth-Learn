const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../Models/User");

const signup = async (req, res) => {
  try {
    // Given by the user from frontend
    const { name, email, password } = req.body;
    // Finds email from the database
    const user = await userModel.findOne({ email });
    // Check if user already exists
    if (user) {
      // status(409) is for conflict
      return res
        .status(409)
        .json({ message: "User already exists. Please login", success: false });
    }

    // Create a new user
    const newUser = new userModel({ name, email, password });

    // Encrypt the password from the body
    newUser.password = await bcrypt.hash(password, 10);
    await newUser.save();

    res.status(201).json({ message: "SignUp successfully", success: true });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    const errorMsg = "Auth failed. Email or Password is incorrect";
    // Check if user is signedup
    if (!user) {
      return res.status(403).json({ message: errorMsg, success: false });
    }

    // Decrypt the password
    const isPassEqual = await bcrypt.compare(password, user.password);
    if (!isPassEqual) {
      return res.status(403).json({ message: errorMsg, success: false });
    }

    const jwttoken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(200).json({
      message: "Login success",
      success: true,
      jwttoken,
      email,
      name: user.name,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};

module.exports = {
  signup,
  login,
};
