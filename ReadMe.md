**Sign Up**
----
  Returns json data about a register event.

* **URL**

  https://vr-fund.herokuapp.com/account/signup

* **Method:**

  `POST`
  
*  **BODY Params**

   **Required:**
 
   `{
          "first_name": "STRING",
          "last_name": "STRING",
          "email": "STRING",
          "password": ""STRING",
          "role": INT // 1 === FUNDRAISER 2 === FUNDER
        }`


* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    
    `{
    "id": 6,
    "first_name": "JOHN",
    "last_name": "DOE",
    "email": "jd@vrfund.com",
    "password": "$2a$09$d84RC3GVG1CNR54ghsp4e.HaHz6E3TTC04veTCGxDq/Eh2eTi10Ly",
    "role": 1
}`
 
* **Error Response:**

  * **Code:** 404 SERVER ERROR <br />
    **Content:** `{ message: error.message }`

  OR

  * **Code:** 400 UNAUTHORIZED <br />
    **Content:** `{ error : "Email must be unique" }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/account/signup",
      dataType: "json",
      type : "POST",
      success : function(r) {
        console.log(r);
      }
    });
  ```
  
  **LOGIN**
----
  Returns json data about a login event.

* **URL**

  https://vr-fund.herokuapp.com/account/login

* **Method:**

  `POST`
  
*  **BODY Params**

   **Required:**
 
   `{
        "email": "STRING",
        "password": ""STRING"
    }`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    `{
    "message": "Welcome, User Email",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJlbWFpbCI6Imhlcm9rdVRlc3QyZEB2cmZ1bmQuY29tIiwicm9sZSI6MSwiaWF0IjoxNjA5ODY2NjIwLCJleHAiOjE2MDk4ODEwMjB9.NqESaB3csQGLLlZBb0-BWaa506cgEvXRnJFs-z8n13s",
    "role": 1
}`
 
* **Error Response:**

  * **Code:** 404 SERVER ERROR <br />
    **Content:** `{ message: error.message }`

  OR

  * **Code:** 400 UNAUTHORIZED <br />
    **Content:** `{ error : "Invalid credentials, please try again" }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/account/login,
      dataType: "json",
      type : "POST",
      success : function(r) {
        console.log(r);
      }
    });
  ```
  
    **GET ALL PROJECTS**
----
  Returns json data about all projects.

* **URL**

  https://vr-fund.herokuapp.com/projects

* **Method:**

  `GET`
  
*  **BODY Params**


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    `[ { project information }, {project information} ]`
 
* **Error Response:**

  * **Code:** 404 SERVER ERROR <br />
    **Content:** `{ message: error.message }`

  OR

  * **Code:** 400 UNAUTHORIZED <br />
    **Content:** `{ error : "You must be logged (invalid token)." }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/projects,
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
  
