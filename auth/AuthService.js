// const bcrypt = require('bcrypt');
// const User   = require('../user/model/User');
// const TokenService = require('./TokenService');


// const isValidUser = async ({ username, password:textPassword }) => {
//   try {
//     // find the user by username
//     const user = await User.findOne(username);

//     // compare the cleartext password and the pwd from the db
//     // using bcrypt
//     //return await bcrypt.compare(textPassword, user.password);
//   } catch (err) {
//     console.error(err);
//     return false;
//   }
// };

// module.exports = {
//   async authenticate(req, res, next) {
//     if (await isValidUser(req.body)) {
//       res.locals.token = await TokenService.makeToken({
//         username: req.body.username,
//         roles: ['admin', 'editor'],
//       });
//       return next();
//     }

//     return next({});
//   },

//   isAuth(roles) {
//     return [
//       async function isAuth(req, res, next) {
//         const token = req.headers.authorization;
//         const isValid = await TokenService.verify(token)
//         debugger;
//       },
//       (err, req, res, next) => res.status(403).json({})
//     ];
//   },

// };
