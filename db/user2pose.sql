DROP table IF EXISTS user2pose;
CREATE TABLE user2pose (
  user_id INTEGER NOT NULL,
  pose_id INTEGER NOT NULL,
  list_name VARCHAR(255) NOT NULL
);
