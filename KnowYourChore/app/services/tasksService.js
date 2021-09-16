const baseUrl = 'http://localhost:5000/api/tasks/';

const taskService = {
    getTasks(){
        return fetch(`${baseUrl}`)
        .then(res => res.json())
    }
}

export default taskService;