CREATE TABLE users (
  id serial primary key,
  email varchar(50) unique not null,
  password varchar(255) not null,
  first_name varchar(50) not null,
  last_name varchar(50) not null,
  city varchar(50),
  state char(2) CHECK (upper(state) = state),
  created_at date default current_date
);