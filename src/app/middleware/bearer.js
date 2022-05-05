'use strict';

const jwt = require('jsonwebtoken');
const SECRET = 'supersecret';

const testUser = {
  username: 'test user',
  password: 'test password',
  token: jwt.sign({ handle: this.handle }, SECRET),
}

module.exports = async (req, res, next) => {
  try {

    if(!req.headers.authorization) { return _authError(); }
    const token = req.headers.authorization.split(' ').pop();
    const validUser = await jwt.compare(token, SECRET);
    req.user = validUser;
    req.token = validUser.token;
    next();
  } catch(e) {
    console.error(e);
    _authError();
  }

  function _authError(){
    let error = new Error('Invalid Login');
    error.status = 403;
    next(error);
  }
};