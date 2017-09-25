/**
 * @module userDB
 * @desc this module is the interface for the database. It contains
 * CRUD methods in SQL to talk to the database.
 * Each function returns a promise
 */

// TODO: [2] require our DB config
const db = require('../../config/dbConfig');

// @see https://github.com/vitaly-t/pg-promise#query-result-mask

// export our collection of functions
module.exports = {
  /**
   * @func findAll
   * @desc search through all the users
   * @returns {Promise}
   * @hint this
   */
  findAll() {
    return db.many(`
      SELECT *
        FROM users
     ORDER BY id
    `);
  },

  findOne(username) {
    return db.one(`
      SELECT *
        FROM users
       WHERE email = $1
    `, username);
  },


  /**
   * @func findById
   * @param id {number} the ID of the user to search for
   * @desc search through the users and find by an ID
   * @returns {Promise}
   */
  findById(id) {
    return db.one(`
      SELECT *
        FROM users
       WHERE email = $1
    `, id);
  },

  /* upsert = (insert or update) */
  save(user) {
    return db.one(`
      INSERT INTO users
      (name, email, password)
      VALUES
      ($/name/, $/email/, $/password/)
      ON CONFLICT (email) DO UPDATE
      SET
      name = $/name/,
      email = $/email/,
      password = $/password/,
      RETURNING *
    `, user);
  },

  /**
   * Removes one user from DB
   * @param {number} id - the id of a user
   * @returns {Promise}
   */
  destroy(id) {
    return db.none(`
      DELETE
        FROM users
       WHERE id = $1
    `, id);
  },
};
