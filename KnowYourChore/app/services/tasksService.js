// const baseUrl = "http://192.168.1.45:5000/api/taskLists/";
const baseUrl = "http://192.168.1.100:5000/api/taskLists/";

const taskService = {
  
  // returns all task Lists
    getTasks() {
        return fetch(baseUrl)
            .then((res) => res.json())
            
        },

        // used to add a task to a TaskList 
    addTask(task, taskListId) {
        return fetch(`${baseUrl}${taskListId}/tasks`  , {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        }
        })
        .then(res => res.json())
      },

    updateTask(task, taskListId) {
        return fetch(`${baseUrl}${taskListId}`, {
          method: 'PUT',
          body: JSON.stringify(task),
          headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json());
    },

  // used to remove a task from an existing task list
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





