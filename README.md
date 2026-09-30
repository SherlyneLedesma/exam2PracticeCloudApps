## CSCE 41333: Exam 2: Practice (Single Page Application-SPA)

### Instructions

Create a **Single Page Application(SPA)** using *HTML/JavaScript/BootStrap CSS* that interface with NodeJS/Express/MySQL2 Web API.  Your main page, **index.html** and *all of your JavaScript and CSS files* should be in the **public** directory.  Your application will provide a **User Management page** that calls the Web API to **display the list of users*, and a **form that allows you to add a new user** using the Web API.  Test your application in the browser to ensure it works correctly.


### REST API Endpoints

| HTTP Method | Endpoint | Description | Payload Body (JSON) |
| ----------- | -------- | ----------- | ------------------- |
| GET | /api/users | **R**etrieve all users | None |
| POST | /api/users | **C**reate new user | "{ ""username"", ""lastname"", ""firstname"", ""passwd"", ""email"", ""urole"" }" | 

#### Create MySQL Database
```
sudo mysql < exam2Practical.sql
```

#### Run the WEB API
```
node app.js
```
