use tasks;

db.dropDatabase();

db.tasks.insertMany([{
    "id" :1,
    "taskList1":[
            {   "id": 1,
                "taskName": "Deep clean oven",
                "taskDescription": "Clean oven using products under sink",
                "taskCompleteBy": "4.00 pm",
                "taskLocation": "Kitchen",
                "taskAssignedTo": "Cameron"
            },
            { " id": 2,
                "taskName": "Vacuum",
                "taskDescription": "Vacuum bedrooms",
                "taskCompleteBy": "7.30 pm",
                "taskLocation": "Bedrooms",
                "taskAssignedTo": "Arek"
            },
            {   "id": 3,
                "taskName": "Clean bathroom",
                "taskDescription": "Clean your bloody bathroom",
                "taskCompleteBy": "2:00 pm",
                "taskLocation": "En-Suite",
                "taskAssignedTo": "Akwasi"
            }]
        },
        {"id":2,
        "taskList2":[]
    }]

);