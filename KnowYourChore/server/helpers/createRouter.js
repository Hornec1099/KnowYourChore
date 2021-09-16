const express = require("express");
const ObjectId = require("mongodb").ObjectId;

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
      });

  // Create Route
    router.post('/', (req, res) => {
        const newTask = req.body;
        collection
        .insertOne(newTask)
        .then((result) => {
          res.json(result.ops[0]);
        })
        .catch((err) => {
          console.error(err);
          res.status(500);
          res.json({status: 500, error: err});
        ;});
    })

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

    // Delete Route
    router.delete('/:id', (req, res) => {
        const id = req.params.id;
        collection
        .deleteOne({ _id: ObjectId(id)})
        .then(result => {
            res.json(result);
        })
        .catch((error) => {
            console.error(error);
            res.status(500);
            res.json({ status: 500, error: error });
        });
    })
  

   });
  return router;
};
module.exports = createRouter;
