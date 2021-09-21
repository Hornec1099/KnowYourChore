const baseUrl = "http://192.168.1.45:5000/api/taskLists/";
// const baseUrl = "http://localhost:5000/api/taskLists/";

const taskService = {
    getTasks() {
        return fetch(baseUrl)
            .then((res) => res.json())
            
        },

    getIndividualTask(id){
      return fetch(baseUrl + id) 
          .then((res) => res.json())
      },
    

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

  
    deleteTask(id){
        return fetch(baseUrl + id, {
            method: 'DELETE'
        });
    }
};

export default taskService;





