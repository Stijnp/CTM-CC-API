# Checking Credit Cards #
  REST API in Node.js and Express.js to test AMEX, Discover, MasterCard and Visa cards. The API takes the card number and defines the card type and gets validated by the Luhn Algorithm.

  Simple front-end in React providing a form that will pass the input through the API and return its results back to you.

## How to run Project ##

  1. **Backend:** Run `npm install` in this folder to install all dependencies and `npm start` to start the server.
  2. **Frontend:** Run `npm install` in this folder to install all dependencies and `npm start` to start the ReactJS app.

## API ##

* **URL**

  /numberValidation/:number

* **Method:**

  `GET`

## Todo List ##

  * Limit the card number field to 16 numbers only
  * Check if Expiry date is in future
