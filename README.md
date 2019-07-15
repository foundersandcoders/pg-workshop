# pg-workshop

**Author**: [@shiryz](https://github.com/shiryz)

## Getting started

1.  Clone this repo and `npm i`.
1.  Run `npm run dev`in your terminal and see the result at http://localhost:5000. This is the starting template for what you'll be building.
1.  In `src/handlers.js` you'll find a function that deals with calls to the `/users` endpoint. The data is currently coming from the `static.js` file.

### Task 1: Setting up the database

We want to replace the data in `static.js` with an actual database, which we'll set up now!

1.  Connect to postgres: `psql` or `pgcli`.
1.  Create the database: `CREATE DATABASE [the name of the database];`. Note, if we were storing sensitive information you need to change your password. For now, we'll leave it as default 'password'.
1.  Add a `config.env` file and add the database's url in this format: `DB_URL = postgres://[username]:[password]@localhost:5432/[database]`. The database name needs to be in lower case.

### Task 2: Getting data from the database

1.  Connect to your database using `psql postgres://[username]:[password]@localhost:5432/[database]`.
1.  Create a table called 'users' with three columns: 'id', 'name' and 'location' and add a couple of rows of dummy data. **Hint: don't hard code the ids**
1.  Inside `queries/getData.js`, write a SQL query that pulls the user and location from your database.
1.  Change the `/users` handler in `handlers.js` to call the `getData` query.

### Task 3: Adding data to the database

In the commented out form in `index.html` we have this attribute: `action="create-user"`. When a user clicks 'submit' on this form, the details they have entered will be sent in the body to a 'create-user' endpoint.

1.  Open up `index.html` and uncomment the form
1.  Add a new endpoint to `router.js` (`/create-user`)
1.  Create a handler for the endpoint `create-user` in `handlers.js` that uses the data from your form to insert a new row into your users table.

## Stretch goals

1.  Add some new columns to your `users` table
1.  Try and handle different types on input on the client side (e.g. boolean values or longer text input)
1.  Validate input to check that the user does not already exist
