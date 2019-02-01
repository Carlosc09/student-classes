# Node.JS Rest Api with express and mongo
Create a REST api with ExpressJS and connect to MongoDB using MongooseJs, implement authorization using jsonwebtoken.
### Prerequisites
    Node.js version 10.9.0
    MongoDB version 4.0.3
### Installing
Install mongoDB, Run
`npm install`
and create a .env file with:

    DB_HOST=mongodb host ip
    PORT=The por that you want express to run
    SECRET=Secret key for token encryption
  Run  the MongoDB database:

    mongod
Run the Express server:

    npm run start
Validate you code:

    npm run lint
