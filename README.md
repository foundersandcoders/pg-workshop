**Author**: [@shiryz](https://github.com/shiryz)  

**Maintainer**: TBC

# pg-workshop

In this workshop we'll be building on what we learnt in the [pg walkthrough](https://github.com/shiryz/pg-walkthrough). This app currently contains static data on users' name and location. We'll be setting up our own database connection so that the data can be retrieved from a table of "users" instead. We'll also want to write code that enables us to add new users via a form.

### Getting started

1. Clone this repo
1. Install the node_modules by typing `npm install` in your terminal.
1. Run `npm run dev`in your terminal and checkout the result at http://localhost:5000. This is the starting template for what you'll be building.
1. In `src/router.js` you'll find a function that deals with calls to the `/users` endpoint. The data is currently coming from the `static.js` file. Add your own name and location within `static.js`. Refresh the page & check the results.

### Task 1: Setting up the database

We are currently hard-coding the data in to the application (`static.js`) because we don't have a database. Now we want to replace `static.js` with an actual database. Let's start by setting up the database we will connect to.

1. Connect to postgres, by typing `psql` in the terminal on MAC, and `sudo -u postgres psql` on ubuntu.
1. Create the database by typing `CREATE DATABASE [the name of the database];`.
1. Create a superuser with a password by typing `CREATE USER [the new username] WITH SUPERUSER PASSWORD '[the password of the database]';` (the password needs to be in quotes, otherwise you get an error).
1. Change ownership of the database to the new user by typing `ALTER DATABASE [name of the database] OWNER TO [the new username];`
1. Add a `config.env` file and add the database's url in this format:
`DB_URL = postgres://[username]:[password]@localhost:5432/[database]`. The database name needs to be in lower case.

### Task 2: Getting data from the database

Your job now is to add to `database/db_connection.js` and `queries/getData.js` and refactor `router.js` so that the response data comes from the users table in your database instead of from `static.js`.

1. In the terminal, connect to your database using `psql postgres://[username]:[password]@localhost:5432/[database]`.
1. Create a table called 'users' with three columns: 'id', 'name' and 'location' and add a couple of rows of dummy data. **Hint: don't hard code the ids**
1. Inside `queries/getData.js`, write a SQL query that pulls the necessary data from your database.
1. Change the `/users` handler in `router.js` to call the `getData` query. **Note:** Line 6 of `queries/getData.js` extracts the endpoint from our request (`const endpoint = request.url.split('/')[1];`).

### Task 3: Adding data to the database

So far, we've only been dealing with `GET`ting data from a server. But what if we want users to be able to add their details to our database?

As we still don't have a visible form in the front end, only a developer can add to the database, either through `psql` in the command line, or by adding `.sql` files to this repo. Let's change that.

In the commented out form in `index.html` we have this HTML attribute: `action="create-user"`. When a user clicks 'submit' on this form, the details they have entered will be sent in the payload to a 'create-user' endpoint.

1. Open up `index.html` and uncomment the form
1. Check that you can see an empty input box when you refresh your browser
1. Add a new endpoint to `router.js` (`/create-user`)
1. Create a new handler function for the endpoint `create-user` in `router.js` that uses the data from your form to INSERT a new row into your users table. What kind of **method** do you think you'll need (check the HTML!)? How will you access the data from your form?
1. Give the users of your website some helpful feedback, so they know that their data has been successfully dealt with.

### Task 4: CSS Challenge

Style it up!

1. Try and get the design looking as close as possible to the below:

![css-challenge](https://user-images.githubusercontent.com/20152018/28717127-6a22b320-7398-11e7-895e-a0e4cc67ebf5.png)

## Bonus

Customise your app!

You could:
1. Add some new columns to your `users` table
1. Try and handle different types on input on the client side (e.g. boolean values or longer text input)
1. Validate input to check that the user does not already exist
