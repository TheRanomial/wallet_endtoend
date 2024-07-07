const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

async function userMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({});
  }

  const jwttoken = authHeader.split(" ")[1];

  try {
    const decodedValue = jwt.verify(jwttoken, JWT_SECRET);
    if (decodedValue) {
      req.userId = decodedValue.userId;
      next();
    } else {
      res.status(403).json({
        msg: "You are not authenticated",
      });
    }
  } catch (err) {
    res.json({
      msg: "Incorrect inputs",
    });
  }
}

module.exports = {
  userMiddleware,
};
