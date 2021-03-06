const express = require("express");
const ObjectId = require("mongodb").ObjectId;
const validation = require('./validation')

const createRouter = function (collection) {
  const router = express.Router();

  //   Index Route for all TaskLists
  router.get("/", (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((error) => {
        console.error(error);
        res.status(500);
        res.json({ status: 500, error: error });
      })});

  //   SHOW Route to get Individual TaskLists
  router.get('/:id', (req, res) =>{
    collection
    .findOne( { _id: ObjectId(req.params.id) } )
    .then( (result) => { res.json(result)})
    .catch((error) => {
        console.error(error);
        res.status(500);
        res.json({ status: 500, error: error })
       })
    });

// Create Route for TaskLists
  router.post('/', (req, res) => {
  const newTaskList = req.body;
  collection
  .insertOne(newTaskList)
  .then((result) => {
    newTaskList["_id"] = result["insertedId"]
    res.json( newTaskList )
      })
  .catch((err) => {
    console.error(err);
    res.status(500);
    res.json({ status: 500, error: err})
      })
    })

  // Create Route for Tasks
  router.post('/:id/tasks', (req, res) => {
      const newTask = req.body;
      const taskListId = req.params.id
      validation(collection, newTask, taskListId)
      .then( Found => {
        
      if(Found){ 
        collection
        .updateOne({ _id: ObjectId(taskListId)}, { $addToSet: {taskList: newTask  }})
        .then((result) => {
         res.json(result);
            }
          )} 
        }) 
      })

   
    // Delete Route for removing Task
  router.put('/:id/delete', (req, res) => {
      const id = req.params.id;
      const deleteTask = req.body;
      collection
      .updateOne({ _id: ObjectId(id)}, { $pull : {taskList: deleteTask }})
      .then(result => {
                res.json(result);
          })
      .catch((error) => {
          console.error(error);
          res.status(500);
          res.json({ status: 500, error: error });
            }
          )
        })
      ;


     // Update Route
     router.put('/:id/tasks/:taskName', (req, res) => {
      const id = req.params.id;
      const updatedTask = req.body;
      const taskName = req.params.taskName;
      validation(collection, updatedTask, id)
      .then (isFound => {
        if (!isFound){
        collection
        .updateOne({ _id: ObjectId(id)}, { $pull: {taskList: updatedTask.taskName}})
        .then(collection.updateOne({ _id: ObjectId(id)}, { $addToSet: {taskList: updatedTask}}))
        .then(result => {
          res.json(result);
        })
        .catch((error) => {
          res.status(500);
          res.json({ status: 500, error: error});
        });
        }
      })
      
  });

  return router;
}
module.exports = createRouter;
