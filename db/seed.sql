\c scores_dev;

INSERT INTO users (name) VALUES
('Julia'),
('Ann'),
('Jess'),
('Norma'),
('Mike'),
('Jane'),
('Tom');

INSERT INTO scores (happy, mad, url, result, user_id) VALUES
(
  true,
  false,
  'url',
  4,
  1
),
(
  false,
  false,
  'url',
  5,
  2
),
(
  false,
  true,
  'url',
  8,
  3
),
(
  true,
  true,
  'url',
  4,
  4
),
(
  true,
  false,
  'url',
  0,
  5
),
(
  true,
  false,
  'url',
  2,
  6
);
