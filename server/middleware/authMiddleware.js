const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {

  let token;

  // Check authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {

    try {

      // Get token
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET
      );

      // Save user id
      req.user = decoded.id;

      next();

    } catch (error) {

      console.log(error);

      return res.status(401).json({
        message: "Not authorized",
      });
    }

  }

  // No token
  if (!token) {

    return res.status(401).json({
      message: "No token provided",
    });
  }
};

module.exports = protect;