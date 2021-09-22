use tasks;

db.dropDatabase();

db.taskLists.insertMany(  [  {
    "listName":"Mum List",
    "taskList":[
            {   "taskName": "Deep clean oven",
                "taskDescription": "Clean oven using products under sink",
                "taskCompleteBy": "4.00 pm",
                "taskLocation": "Kitchen",
                "taskAssignedTo": "Cameron"
            },
            {   "taskName": "Vacuum",
                "taskDescription": "Vacuum bedrooms",
                "taskCompleteBy": "7.30 pm",
                "taskLocation": "Bedrooms",
                "taskAssignedTo": "Arek"
            },
            {   "taskName": "Clean bathroom",
                "taskDescription": "Clean your bloody bathroom",
                "taskCompleteBy": "2:00 pm",
                "taskLocation": "En-Suite",
                "taskAssignedTo": "Akwasi"
            }]
        },
        {
        "listName":"Dad List",
        "taskList":[]
    }]

);