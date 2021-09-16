const baseUrl = "http://localhost:5000/api/tasks/";

const taskService = {
    getTasks() {
        return fetch(baseUrl)
            .then((res) => res.json())
        },

    getIndividualTask(id){
      return fetch(baseUrl + id) 
          .then((res) => res.json())
      },
    

    addTask(task) {
        return fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
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





