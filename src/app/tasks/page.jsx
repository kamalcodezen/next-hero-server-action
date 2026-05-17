import { AddTask } from "@/components/addTask/AddTask";
import TaskCard from "@/components/taskCard/TaskCard";
import { getTask } from "@/lib/task";

const TasksPages = async () => {
  const tasks = await getTask();
  console.log(tasks);

  return (
    <div>
      <h2>Tasks : {tasks.length}</h2>
      <AddTask />
      <div className="grid grid-cols-3 gap-6">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default TasksPages;
