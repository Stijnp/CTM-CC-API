**Checking Credit Cards**
----
  REST API in Node.js and Express.js to test AMEX, Discover, MasterCard and Visa cards. The API takes the card number and defines the card type and gets validated by the Luhn Algorithm.

  Simple front-end in React providing a form that will pass the input through the API and return it's results back to you.

**How to run Project**

  Run “npm start” in backend folder for node server (API)
  Run “npm start” in frontend folder to start react app

**API**

* **URL**

  /numberValidation/:number

* **Method:**

  `GET`

**Todo List**

  * Other things that can be done is limiting the field to 16 numbers only
  * Check CVV with Luhn
  * Check if Expiry date is in future