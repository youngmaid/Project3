const db = require('../config/dbConfig');

module.exports = {

  findAll() {
    return db.many(`
      SELECT scores.id, happy, mad, url, result, name, email
      FROM scores INNER JOIN users ON scores.user_id = users.id
      ORDER BY id
      `);
  },

  findById(id) {
    return db.one(`
      SELECT scores.id, happy, mad, url, result, users.name, users.email
      FROM scores INNER JOIN users
      ON scores.user_id = users.id
      WHERE scores.id = $1;
      `, id);
  },

  save(score) {
    score.user_id = Number.parseInt(score.user_id, 10);
    console.log(score.user_id);
    return db.one(`
      INSERT INTO scores
      (happy, mad, url, result, user_id)
      VALUES
      ($/happy/, $/mad/, $/url/, $/result/, $/user_id/)
      RETURNING *
      `, score);
  },

  update(score, id) {
    score.user_id = Number.parseInt(score.user_id, 10);
    console.log(score.user_id);
    return db.one(`
      UPDATE scores
      SET
      happy = $/happy/,
      mad = $/mad/,
      url = $/url/,
      result = $/result/,
      user_id = $/user_id/
      WHERE scores.id = ${id}
      RETURNING *
      `, score);
  },

  destroy(id) {
    return db.none(`
    DELETE
    FROM scores
    WHERE scores.id = $1
    `, id);
  },
};

