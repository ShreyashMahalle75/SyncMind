import express from "express";

const router = express.Router();

// LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  console.log("BODY:", req.body);

  if (email && password) {
    return res.json({
      message: "Login successful",
      user: { email },
    });
  }

  res.status(400).json({ message: "Invalid credentials" });
});

// REGISTER
router.post("/register", (req, res) => {
  res.json({ message: "Register working" });
});

// ⭐ THIS LINE FIXES YOUR ERROR
export default router;