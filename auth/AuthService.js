const bcrypt = require('bcrypt');
const User   = require('../user/model/User');
const TokenService = require('./TokenService');


const isValidUser = async ({ username, password:textPassword }) => {
  try {
    // find the user by username
    const user = await User.findOne(username);
    console.log(user)

    // compare the cleartext password and the pwd from the db
    // using bcrypt
    const goodPassword = await bcrypt.compare(textPassword, user.password)
    console.log({goodPassword});
    return goodPassword;
  } catch (err) {
    console.error(err);
    return false;
  }
};

module.exports = {
  authenticate(req, res, next) {
    if (!isValidUser(req.body)) {
      return next({});
    }

    TokenService.makeToken({
        username: req.body.username,
        roles: ['admin', 'editor'],
      }).then((token) => {
         res.locals.token = token;
         next();
      }).catch((err) => {
        debugger;
        next(err);
      });
      return false
  },

  allow({roles}) {
    return [
      (req, res, next) => {
        TokenService.verify(req.authToken)
        .then((payload) => {
          const isAuthorized = roles.some (n => payload.roles.includes(n));
          return isAuthorized ? next() : Promise.reject('User not authorized');
        })
        .catch(next);
      },
      (err, req, res, next) => res.status(403).json({})
    ];
  }
};


