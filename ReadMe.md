## **Sign Up**

Returns json data about a register event.

- **URL**

  https://vr-fund.herokuapp.com/account/signup

- **Method:**

  `POST`

- **BODY Params**

  **Required:**

  `{ "first_name": "STRING", "last_name": "STRING", "email": "STRING", "password": ""STRING", "role": INT // 1 === FUNDRAISER 2 === FUNDER }`

- **Success Response:**

  - **Code:** 201 <br />
    **Content:**
    `{ "id": 6, "first_name": "JOHN", "last_name": "DOE", "email": "jd@vrfund.com", "password": "$2a$09$d84RC3GVG1CNR54ghsp4e.HaHz6E3TTC04veTCGxDq/Eh2eTi10Ly", "role": 1 }`

- **Error Response:**

  - **Code:** 500 SERVER ERROR <br />
    **Content:** `{ message: error.message }`

  OR

  - **Code:** 400 UNAUTHORIZED <br />
    **Content:** `{ error : "Email must be unique" }`

- **Sample Call:**

  ```javascript
  $.ajax({
    url: "/account/signup",
    dataType: "json",
    type: "POST",
    success: function (r) {
      console.log(r);
    },
  });
  ```

## **LOGIN**

---

Returns JSON data about a login event and token upon success.

- **URL**

  https://vr-fund.herokuapp.com/account/login

- **Method:**

  `POST`

- **BODY Params**

  **Required:**

  `{ "email": "STRING", "password": ""STRING" }`

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**
    `{ "message": "Welcome, User Email", "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJlbWFpbCI6Imhlcm9rdVRlc3QyZEB2cmZ1bmQuY29tIiwicm9sZSI6MSwiaWF0IjoxNjA5ODY2NjIwLCJleHAiOjE2MDk4ODEwMjB9.NqESaB3csQGLLlZBb0-BWaa506cgEvXRnJFs-z8n13s", "role": 1 }`

- **Error Response:**

  - **Code:** 500 SERVER ERROR <br />
    **Content:** `{ message: error.message }`

  OR

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Invalid credentials, please try again" }`

- **Sample Call:**

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

## **GET ALL PROJECTS**

---

Returns json data regarding all active projects.

- **URL**

  https://vr-fund.herokuapp.com/projects

- **Method:**

  `GET`

- **BODY Params**

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**

    `[ { project information }, {project information} ]`

- **Error Response:**

  - **Code:** 500 SERVER ERROR <br />
    **Content:** `{ message: error.message }`

  OR

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You must be logged (invalid token)." }`

- **Sample Call:**

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

}

## **GET A SINGLE PROJECT**

---

Returns json data regarding a single project.

- **URL**

  https://vr-fund.herokuapp.com/projects/:id

- **Method:**

  `GET`

- **BODY Params**

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**

    `{ project information }`

- **Error Response:**

  - **Code:** 500 SERVER ERROR <br />
    **Content:** `{ message: error.message }`

  OR

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You must be logged (invalid token)." }`

- **Sample Call:**

  ```javascript
  $.ajax({
    url: "/projects/:id",
    dataType: "json",
    type: "GET",
    success: function (r) {
      console.log(r);
    },
  });
  ```

}

## **Create a Project**

---

Returns json data regarding all active projects including new project.

- **URL**

  https://vr-fund.herokuapp.com/projects

- **Method:**

  `POST`

- **BODY Params**

**Required:**

`{ "project_title": "STRING", "project_type": "STRING", "mission_statement": "STRING", "project_description": ""STRING", "funding_amount": INT , amount_raised": INT ,"project_timeline": ""STRING" }`

- **Success Response:**

  - **Code:** 201<br />
    **Content:**

    `[ { project information }, {project information} ]`

- **Error Response:**

  - **Code:** 500 SERVER ERROR <br />
    **Content:** `{ message: error.message }`

  OR

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You must be logged (invalid token)." }`

- **Sample Call:**

  ```javascript
  $.ajax({
    url: "/projects",
    dataType: "json",
    type: "POST",
    success: function (r) {
      console.log(r);
    },
  });
  ```

## **Edit a Project**

---

Returns json data regarding the changes to the project.

- **URL**

  https://vr-fund.herokuapp.com/projects/:id

- **Method:**

  `PUT`

- **BODY Params**

**Required:**

`{ "project_title": "STRING", "project_type": "STRING", "mission_statement": "STRING", "project_description": ""STRING", "funding_amount": INT , amount_raised": INT ,"project_timeline": ""STRING" }`

- **Success Response:**

  - **Code:** 201<br />
    **Content:**

    `{ updated project information }`

- **Error Response:**

  - **Code:** 500 SERVER ERROR <br />
    **Content:** `{ message: error.message }`

  OR

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Restricted Access: You must be the owner to edit this project." }`

- **Sample Call:**

  ```javascript
  $.ajax({
    url: "/projects/:id",
    dataType: "json",
    type: "PUT",
    success: function (r) {
      console.log(r);
    },
  });
  ```

## **Delete a Project**

---

Returns json data regarding all active projects.

- **URL**

  https://vr-fund.herokuapp.com/projects/:id

- **Method:**

  `DELETE`

- **BODY Params**

**Required:**

`{ "project_title": "STRING", "project_type": "STRING", "mission_statement": "STRING", "project_description": ""STRING", "funding_amount": INT , amount_raised": INT ,"project_timeline": ""STRING" }`

- **Success Response:**

  - **Code:** 201<br />
    **Content:**

    `[ { project information }, {project information} ]`

- **Error Response:**

  - **Code:** 500 SERVER ERROR <br />
    **Content:** `{ message: error.message }`

  OR

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Restricted Access: You must be the owner to edit this project." }`

- **Sample Call:**

  ```javascript
  $.ajax({
    url: "/projects/:id",
    dataType: "json",
    type: "DELETE",
    success: function (r) {
      console.log(r);
    },
  });
  ```

  ## **GET USER DATA**

---

Returns json data regarding a single user.

- **URL**

  https://vr-fund.herokuapp.com/user/:id

- **Method:**

  `GET`

- **BODY Params**

- **Success Response:**

  - **Code:** 200 <br />
    **Content:**

    `{ user information, projects: [project information]}`

- **Error Response:**

  - **Code:** 500 SERVER ERROR <br />
    **Content:** `{ message: error.message }`

  OR

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You must be logged (invalid token)." }`

  OR

  - **Code:** 204 NO DATA <br />
    **Content:** `{ error : "We were unable to locate the requested user."}`

- **Sample Call:**

  ```javascript
  $.ajax({
    url: "/projects/:id",
    dataType: "json",
    type: "GET",
    success: function (r) {
      console.log(r);
    },
  });
  ```

}
