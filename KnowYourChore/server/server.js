const express = require("express");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
const app = express();
const createRouter = require('./helpers/createRouter')

app.use(express.json());
app.use(cors());

MongoClient.connect("mongodb://localhost:27017")
    .then((client) => {
  const db = client.db("tasks");
  const tasksCollection = db.collection("tasks");
  const tasksRouter = createRouter(tasksCollection);
  app.use("/api/tasks", tasksRouter);
})
.catch(console.error);



app.listen(5000, function(){
    console.log(`Listening on ${this.address().port}`);
});