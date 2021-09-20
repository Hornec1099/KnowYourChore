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
  const taskListsCollection = db.collection("tasks");
  const taskListsRouter = createRouter(taskListsCollection);
  app.use("/api/taskLists", taskListsRouter);
})
.catch(console.error);



app.listen(5000, function(){
    console.log(`Listening on ${this.address().port}`);
});