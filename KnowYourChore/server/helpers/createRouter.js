const express = require("express");
const ObjectId = require("mongodb").ObjectId;
const validation = require('./validation')

const createRouter = function (collection) {
  const router = express.Router();

  //   Index Route
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

    //   SHOW Route
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

  // Create Route
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

   
    // Delete Route
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
     router.put('/:id', (req, res) => {
      const id = req.params.id;
      const updatedData = req.body;
      delete updatedData.__dirname;

      collection
      .updateOne({ _id: ObjectId(id)}, { $set: updatedData})
      .then(result => {
          res.json(result);
      })
      .catch((error) => {
          res.status(500);
          res.json({ status: 500, error: error});
      });
  });

  return router;
};
module.exports = createRouter;
