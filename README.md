# pg-workshop

In this workshop we'll be building on what we learnt in the [pg walkthrough](https://github.com/shiryz/pg-walkthrough). We'll be setting up our own database connection and using the data from a table of "users".

### Getting started

- Clone this repo
- Run `npm run dev`in your terminal and checkout the result at [http://localhost:5000]. This is a preview of what you'll be building.
- Create a database locally
- Create a table called users with 3 columns: id, name, and location
- Install the npm module `pg`

### Task 1

In `src/handler.js` you'll find a function that deals with calls to the `/users` endpoint. The data is currently coming from the `static.js` file. You can change the data in `static.js` and check the results.

Your job is to refactor the handler so that the response data comes from the users table in your database instead of from `static.js`.

### Task 2

So far, we've only been dealing with `GET`ting data from a server. But what if we want to send some new data to our database instead?

- Open up `index.html` and uncomment the form
- Check that you can see an empty input box when you refresh your browser
- Create a new handler function for the endpoint `create-user`. What kind of **method** do you think you'll need? How will you access the data from your form?
- The data from your form should be used to `INSERT` a new row into your `users` table
- What response will you show the user to let them know their data has been successfully dealt with? (there's no right or wrong answer here, although it's best if you give the user some helpful feedback!)

## Bonus

Customise your app!

You could:
- Add some new columns to your `users` table
- Try and handle different types on input on the client side (e.g. boolean values or longer text input)
- Validate input to check that the user does not already exist
