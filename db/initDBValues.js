const bcrypt = require('bcrypt');
const faker = require('faker');

const db = require('../config/dbConfig');

const userData = () => ({
  name:     faker.name.findName(),
  email:    faker.internet.email(),
  happy:    faker.random.boolean(),
  mad:      faker.random.boolean(),
  url:      faker.internet.url(),
  result:   faker.random.number(),
  password: bcrypt.hashSync('chocolate', 11),
});

Array(5).fill(0).forEach(() => {
  function* insertUserData(t) {
    const user = userData();
    const results = yield t.one(`
      INSERT INTO users
      (name, email, password)
      VALUES
      ($/name/, $/email/, $/password/)
      RETURNING id
      `, user);

    user.userId = results.id;

    user.moodID =  yield t.one(`
      INSERT INTO scores
      (happy, mad, url, result, user_id)
      VALUES
      ($/happy/, $/mad/, $/url/, $/result/, $/userId/)
      RETURNING *
      `, user);
    return user;
  }

  db.tx(insertUserData)
    .then((userInfo) => {
    console.log(userInfo);
    })
    .catch((err) => {
      console.log(err);
    });


  //insert into user table
  // get new user ID
  // insert the rest of the data into the scores table
});

