const { jsonwebtokenVarify } = require('../utils/jwt-utils');

function authMiddle(req, res, next) {
  // 1️⃣ Authorization header
  const authHeader = req.headers['authorization']; // lowercase
  if (!authHeader) {
    return res.sttus(401).json({ message: 'No token, authorization denied' });
  }
  a;

  const token = authHeader.split(' ')[1]; // Bearer TOKEN
  if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }

  try {
    // 3️⃣ Token verify
    const user = jsonwebtokenVarify(token);
    req.user = user; // user data request object এ সংরক্ষণ
    next(); //
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
}

module.exports = authMiddle;
