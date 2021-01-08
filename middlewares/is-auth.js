const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const authHeader = req.get('authorization');
  if (!authHeader) {
    req.isAuth = false;
    return next();
  }
  const token = authHeader.split(' ')[1];
  if (!token || token === '') {
    req.isAuth = false;
    return next();
  }
  let currentUser;
  try {
    currentUser = await jwt.verify(token, process.env.SECRET);
  } catch (err) {
    req.isAuth = false;
    return next();
  }
  if (!currentUser) {
    req.isAuth = false;
    return next();
  }
  req.isAuth = true;
  req.currentUser = currentUser;
  next();
};
