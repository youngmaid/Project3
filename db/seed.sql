\c faces_dev;

INSERT INTO users (name, email) VALUES
('Julia', 'julia@ggmail.com'),
('Ann', 'ann@ggmail.com'),
('Jess', 'jess@ggmail.com'),
('Norma', 'norma@ggmail.com'),
('Mike', 'mike@ggmail.com'),
('Jane', 'jane@ggmail.com'),
('Tom', 'tom@ggmail.com');

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

