import {} from "react";
import { useSelector } from "react-redux";
import { BsCheck } from "react-icons/bs";

const TaskList = () => {
  const tasks = useSelector((store) => store.task);

  return (
    <section className="mt-8 flex flex-col gap-4">
      {tasks.map((t) => (
        <Task task={t} key={t.id} />
      ))}
    </section>
  );
};
6;

const Task = ({ task }) => {
  return (
    <div className="border-2 border-slate-700 p-2">
      <div className="flex items-center gap-8">
        <div className="bg-white rounded-md w-[20px] h-[20px] cursor-pointer border-[1px] border-green-200">
          {task.isCompleted && (
            <BsCheck className="text-black -ml-[.6px] text-xl" />
          )}
        </div>
        <div className="flex flex-col">
          <h2>{task.title}</h2>
          <div>
            <span>{task.priority}</span>
            {/* <span>{new Date(task.due_date).getDate()}</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
