import { AddTask } from "@/components/addTask/AddTask";
import TaskCard from "@/components/taskCard/TaskCard";
import { createATask } from "@/lib/createATask";
import { getTask } from "@/lib/task";
import { Button } from "@heroui/react";
import Link from "next/link";

const TasksPages = async () => {
  const tasks = await getTask();
  console.log(tasks);

  return (
    <div>
      <h2>Tasks : {tasks.length}</h2>
      <AddTask createATask={createATask} />
      <Link href={"/tasks/newtasks"}>
        <Button variant="secondary">Add New Task</Button>
      </Link>
      <div className="grid grid-cols-3 gap-6">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default TasksPages;
