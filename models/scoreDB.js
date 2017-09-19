const db = require('../config/dbConfig');

module.exports = {

  findAll() {
    return db.many(`
      SELECT scores.id, happy, mad, url, result, user_id, name
      FROM scores INNER JOIN users ON scores.user_id = users.id
      ORDER BY id
      `);
  },

  findById(id) {
    return db.one(`
      SELECT scores.id, happy, mad, url, result, users.name
      FROM scores INNER JOIN users
      ON scores.user_id = users.id
      WHERE scores.id = $1;
      `, id);
  },

  save(score) {
    score.user_id = Number.parseInt(score.user_id, 10);
    return db.one(`
      INSERT INTO scores
      (happy, mad, url, result, user_id)

      VALUES
      ($/happy/, $/mad/, $/url/, $/result/, $/user_id/)
      RETURNING *
      `, score);
  },

  update(score) {
    return db.one(`
      UPDATE scores
      SET
      happy = $/happy/,
      mad = $/mad/,
      url = $/url/,
      result = $/result/,
      user_id = $/user_id/
      WHERE id = $/id/
      RETURNING *
      `, score);
  },

  destroy(id) {
    return db.none(`
    DELETE
    FROM scores
    WHERE id = $1
    `, id);
  },
};

