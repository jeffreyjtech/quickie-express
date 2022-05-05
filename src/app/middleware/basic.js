'use strict';

const base64 = require('base-64');
const bcrypt = require('bcrypt');

const testUser = {
  username: 'test user',
  password: hashPassword('test password'),
}

async function hashPassword(pass) {
  return await bcrypt.hash(pass, 10);
}

module.exports = async (req, res, next) => {
  try {
    if(!req.headers.authorization) {
      return _authError();
    }
    let basic = req.headers.authorization.split(' ').pop();
    let [ user, pass ] = base64.decode(basic).split(':');
    const valid = await bcrypt.compare(pass, testUser.password);
    if(valid) {
      req.user = user;
      next();
    } else {
      return _authError();
    }
  } catch(e) {
    return _authError();
  }
}

function _authError () {
  res.status(403).send('invalid Login');
}