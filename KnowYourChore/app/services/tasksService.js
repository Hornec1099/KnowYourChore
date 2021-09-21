const baseUrl = "http://192.168.1.45:5000/api/taskLists/";
// const baseUrl = "http://192.168.1.100:5000/api/taskLists/";

const taskService = {
  // returns all task Lists
    getTasks() {
        return fetch(baseUrl)
            .then((res) => res.json())
            
        },
//  returns the Individual TaskList to get tasks Array
    getIndividualTask(id){
      return fetch(baseUrl + id) 
          .then((res) => res.json())
      },

// adds a new TaskList
    addTaskList(taskList){
        return fetch(baseUrl, {
          method: 'POST',
          body: JSON.stringify(taskList),
          headers: {
              'Accept' : 'application/json',
              'Content-Type': 'application/json'
          }})
        .then(res => res.json())
      },

// adds task to a TaskList array
    addTask(task, taskListId) {
        return fetch(`${baseUrl}${taskListId}/tasks`  , {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        }
        })
        .then(res => {res.json()})
      },

// 
    updateTask(task) {
        return fetch(baseUrl + task._id, {
          method: 'PUT',
          body: JSON.stringify(task),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json());
    },

  // removes task from the taskList array
    deleteTask(task, taskListId){
        return fetch(`${baseUrl}${taskListId}/delete`, {
            method: 'PUT',
            body: JSON.stringify(task),
            headers: {
              'Content-Type': 'application/json'
            }
        });
    }
};

export default taskService;





