# OrigaAiBackendAssignment

## Problem Statement

[Drive Link](https://drive.google.com/file/d/1ei07XtpNlK9zYBkKvnOC4bqh63LK5dhd/view?usp=sharing)

## Requirements

node 12.18.2 or higher
npm version 6.14.7 or higher
mysql/mariadb 8.0.0 0r higher
nodemon npm package (OPTIONAL)

By, default npm comes with node, no need to install seperatly.

## Installation Process

Step 1 : Clone this Repository into your local machine.
Step 2 : Install all the dependencies by running the command `npm install or npm i`.
Step 3 : Before running this project in a local machine, you also need to setup a mysql database (Refer to below where detail explanation is given, about how database is going to setting up).
Step 4 : After setting up all the things including database, now you can run a local development server by running command `npm run main` or by simply running the command `nodemon` (nodemon will only work if you have nodemon npm package installed).
Step 5 : Your server is running up on `http://localhost:8080`, look at your command promt/terminal.\

Now you are good to go.

## API END-Points

1. ` GET http://localhost:8080/api/order`

### Response

`[ { "userId": 1, "name": "Rahul", "noOfOrders": 5, "averageBillValue": 650 }, { "userId": 2, "name": "Ramesh", "noOfOrders": 3, "averageBillValue": 966 }, { "userId": 3, "name": "Ankita", "noOfOrders": 2, "averageBillValue": 850 } ]`

2. `POST http://localhost:8080/api/user`

### Response

`{ "success": true, "message": "Successfully Updated" }`
