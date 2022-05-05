'use strict';

module.exports = (capability) => async (req, res, next) => {
  console.log(capability);
  next();
}