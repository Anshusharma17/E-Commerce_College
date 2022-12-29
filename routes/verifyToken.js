const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    // console.log();
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_CODE, (err, user) => {
      if (err) res.status(403).json("wrong token or expired");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("Your are not auth");
  }
};

const verifyTokenAndAuth = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("you are not allowed");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("you are not allowed");
    }
  });
};
module.exports = { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin };
