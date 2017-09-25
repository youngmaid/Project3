\c faces_dev;
DROP TABLE IF EXISTS scores;
DROP TABLE IF EXISTS users;


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email varchar(128),
  password text NOT NULL,
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE scores (
  id SERIAL PRIMARY KEY,
  happy BOOLEAN,
  mad BOOLEAN,
  url VARCHAR (255),
  result INT,
  user_id INTEGER REFERENCES users(id),
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX ON users (email);
CREATE INDEX ON scores (user_id);
