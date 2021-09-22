const express = require("express");
const ObjectId = require("mongodb").ObjectId;



const validation = (collection, task, taskListId) => {
    const taskName = task.taskName;
    
    return collection.findOne({ '_id': ObjectId(taskListId) })
    .then(result => {
        return result.taskList
    })
    .then(array =>  {
        const newArray = array.map((task) => {
        return task.taskName   })
        const foundTask = newArray.indexOf(taskName)
        if(foundTask === -1 ){
            return true
        }})
    
 }

//  const validationUpdate = (collection, task, taskListId) => {
//     const taskId = task.taskId;
    
//     return collection.findOne({ '_id': ObjectId(taskListId) })
//     .then(result => {
//         return result.taskList
//     })
//     .then(array =>  {
//         const newArray = array.map((task) => {
//         return task.taskId   })
//         const foundId = newArray.indexOf(taskId)
//         if(foundId === -1 ){
//             return true
//         }})
    
//  }
 module.exports = validation