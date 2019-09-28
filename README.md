NodeJS, express, MongoDb and Angular(MEAN)
==================================

This is a simple experimental example of how to match MongoDb, express, angular and NodeJs(MEAN) for the implementation and consumption of a Rest API.

- This project requires a version of NodeJS with support for async-await

Getting Started
---------------

```sh
# clone the project
git clone https://github.com/lexican/MEAN-REST-API.git

#BACKEND
cd backend

# Install dependencies
npm install
#ensure your mongodb server is up and running
mongoose.connect('mongodb://localhost:27017/issues', {useNewUrlParser: true});
mongoose.connection.once('open', ()=> {
  console.log("Connected successfully");
});
# Run the server
node server

# End points
#return all issues in json format
http://localhost:4000/

#return issue where id=id 
http://localhost:4000/issues/:id

#create issue
http://localhost:4000/issues/add

#update issue
http://localhost:4000/issues/update/:id

#delete issue
http://localhost:4000/issues/delete/:id

```


```sh
#FRONTEND
cd frontend

# Install dependencies
npm install

#Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`


```
License
-------

MIT
