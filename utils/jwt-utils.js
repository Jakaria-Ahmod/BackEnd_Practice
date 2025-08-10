const jwt = require('jsonwebtoken');

function jsonwebtokenGenrator(payload) {
  return jwt.sign(payload, process.env.SECTET_KEY, { expiresIn: '1m' });
}
function jsonweRfreshGenrator(payload) {
  return jwt.sign(payload, process.env.SECTET_KEY, { expiresIn: '7d' });
}
function jsonwebtokenVarify(Token) {
  return jwt.verify(Token, process.env.SECTET_KEY);
}

module.exports = {
  jsonwebtokenGenrator,
  jsonwebtokenVarify,
  jsonweRfreshGenrator,
};
