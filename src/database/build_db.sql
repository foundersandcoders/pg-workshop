BEGIN;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  location TEXT NOT NULL
);

INSERT INTO users (name,location) VALUES
  ('Dan','Turnpike Lane'),
  ('Jamie','Sydenham');

COMMIT;
