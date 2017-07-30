# pg-workshop

In this workshop we'll be building on what we learnt in the [pg walkthrough](https://github.com/shiryz/pg-walkthrough). We'll be setting up our own database connection and using the data from a table of "users".

### Getting started

- Clone this repo
- Install the node_modules by typing `npm install` in your terminal.
- Run `npm run dev`in your terminal and checkout the result at http://localhost:5000. This is the starting template for what you'll be building.

### Setting up the database

- Connect to postgres, by typing `psql` in the terminal on MAC, and `sudo -u postgres psql` on ubuntu.
- Create the database by typing `CREATE DATABASE [the name of the database];`.
- Create a superuser with a password by typing `CREATE USER [the new username] WITH SUPERUSER PASSWORD '[the password of the database]';` (the password needs to be in quotes, otherwise you get an error).
- Change ownership of the database to the new user by typing `ALTER DATABASE [name of the database] OWNER TO [the new username];`
- Add a `config.env` file and add the database's url in this format:
`DB_URL = postgres://[username]:[password]@localhost:5432/[database]`. The database name needs to be in lower case.

### Task 1

In `src/router.js` you'll find a function that deals with calls to the `/users` endpoint. The data is currently coming from the `static.js` file. You can add your own names and locations in `static.js`. Once you've done this, refresh the page and check the results.


In the terminal, connect to your database using `psql postgres://[username]:[password]@localhost:5432/[database]`.

Create a table called 'users' with three columns: 'id', 'name' and 'location' and add a couple of rows of dummy data.
**Hint: don't hard code the ids**

Your job is to add to `database/db_connection.js` and `handlers/getData.js` and refactor `router.js` so that the response data comes from the users table in your database instead of from `static.js`.

### Task 2

So far, we've only been dealing with `GET`ting data from a server. But what if we want to send some new data to our database instead?

- Create a new handler function for the endpoint `create-user` in `router.js`. What kind of **method** do you think you'll need (check the HTML!)? How will you access the data from your form?
- The data from your form should be used to `INSERT` a new row into your `users` table
- What response will you show the user to let them know their data has been successfully dealt with? (there's no right or wrong answer here, although it's best if you give the user some helpful feedback!)

### Task 3
** CSS Challenge! **

- Open up `index.html` and uncomment the form
- Check that you can see an empty input box when you refresh your browser
- Try and get the design looking as close as possible to the below before moving on:

![css-challenge](https://user-images.githubusercontent.com/20152018/28717127-6a22b320-7398-11e7-895e-a0e4cc67ebf5.png)

## Bonus

Customise your app!

You could:
- Add some new columns to your `users` table
- Try and handle different types on input on the client side (e.g. boolean values or longer text input)
- Validate input to check that the user does not already exist
