import tasks from "../data/tasksData.json"

export const getTask = async () => {
    return tasks;



}

export const postTask = async (newTask) => {
    newTask.id = tasks.length + 1
    tasks.push(newTask);
    return { ok: true, message: "Task Added Successfully" }

}







// export const addNewTask = async (taskData) => {
//     taskData.id = tasks.length + 1;
//     tasks.unshift(taskData)
//     return { ok: true, message: "Again new task  add" }
// }


