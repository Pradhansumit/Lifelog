const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt_token;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: "user is not authenticated." });
      } else {
        next();
      }
    });
  } else {
    return res.status(401).json({ message: "user is not authenticated." });
  }
};

export default requireAuth;
