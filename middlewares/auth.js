const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    const error = new Error("토큰이 존재하지 않습니다.");
    error.statusCode = 400;
    throw error;
  }

  const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = user;
  next();
};

module.exports = {
  authMiddleware,
};
