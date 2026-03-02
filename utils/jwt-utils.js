const jwt = require('jsonwebtoken');

function jsonwebtokenGenrator(payload) {
  return jwt.sign(payload, process.env.SECTET_KEY_ACCESS, { expiresIn: '7d' });
}
function jsonweRfreshGenrator(payload) {
  return jwt.sign(payload, process.env.SECTET_KEY_REFRASH, { expiresIn: '7d' });
}
function jsonwebtokenVarify(Token) {
  return jwt.verify(Token, process.env.SECTET_KEY_ACCESS);
}

module.exports = {
  jsonwebtokenGenrator,
  jsonwebtokenVarify,
  jsonweRfreshGenrator,
};
