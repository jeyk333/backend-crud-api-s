# Node CRUD APIs - Backend

### Using Express

Simple RESTful CRUD APIs to do CRUD operation in Nodejs using Express framework and MongoDB.

## Prereqisite

- Node v10+
- NPM v6+

## Getting Started

```
git clone https://github.com/jeyk333/backend-crud-api-s.git
cd backend-crud-api-s
npm install
npm start
```

## Usage

Once you installed the application, create a project and cluster in mongoDB cloud. Please check the following link for Documentation to create db in mongo, link > https://www.mongodb.com/cloud/atlas. Once you created the cluster, it will give you an URI to connect with the app. Copy the URI and replace the `process.env.DB_CONNECTION` with that URI inside the index.js file. Now, the app is ready now.

## Dependencies Used

- express - ^4.17.1
- mongoose - ^5.9.9
- dotenv - ^8.2.0
