\c scores_dev;

INSERT INTO users (name, email, password) VALUES
('Julia', 'julia@ggmail.com', '@#%^^$#@@##EFDSVDFVSD'),
('Ann', 'ann@ggmail.com', '@#%^^$#@@##EFDSVDFVSD'),
('Jess', 'jess@ggmail.com', '@#%^^$#@@##EFDSVDFVSD'),
('Norma', 'norma@ggmail.com', '@#%^^$#@@##EFDSVDFVSD'),
('Mike', 'mike@ggmail.com', '@#%^^$#@@##EFDSVDFVSD'),
('Jane', 'jane@ggmail.com', '@#%^^$#@@##EFDSVDFVSD'),
('Tom', 'tom@ggmail.com', '@#%^^$#@@##EFDSVDFVSD');

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
