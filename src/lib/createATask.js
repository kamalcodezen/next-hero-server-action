

import { revalidatePath } from "next/cache";
import { addNewTask, postTask } from "./task";
import { redirect } from "next/navigation";



export const createATask = async (formData) => {
    "use server"

    // const title = formData.get("title")
    // const description = formData.get("description")
    // const status = formData.get("status")
    // const priority = formData.get("priority")
    // const assign = formData.get("assign")

    // const newObj = {
    //     title, description, status, priority, assign
    // }

    // console.log("adding task name", newObj)


    const newTask = Object.fromEntries(formData.entries());

    console.log(newTask);

    const res = await postTask(newTask)
    if (res.ok) {
        revalidatePath("/tasks")
    }
    return res;
};






export const addNewTasks = async (formData) => {
    "use server"
    const newTask = Object.fromEntries(formData.entries())
    // console.log(taskData)
    const res = await postTask(newTask)
    if (res.ok) {
        revalidatePath("/tasks")
        redirect("/tasks")
    }
    return res;
}
