import { useSelector, useDispatch } from "react-redux";
import {
  createTask,
  completeTask,
  deleteTask,
  editTask,
} from "./store/taskSlice";
import TaskList from "./components/TaskList";
import { RiTodoLine } from "react-icons/ri";
import { IoCreateOutline } from "react-icons/io5";
function App() {
  // const tasks = useSelector((state) => state.task);
  // const dispatch = useDispatch();
  // console.log(tasks);
  return (
    <main className="bg-slate-900 min-h-screen text-white">
      <div className="max-w-2xl mx-auto pt-8 px-2">
        <section className="flex justify-between items-center">
          <div className="inline-flex gap-3 items-center">
            <RiTodoLine className="w-8 h-8 text-slate-500" />
            <h1 className="text-2xl text-slate-500 font-semibold">My tasks</h1>
          </div>
          <button className="hover:text-orange-400 transition-colors ease-out">
            <IoCreateOutline title="Create Task" className="w-6 h-6" />
          </button>
        </section>
        <TaskList />
      </div>
      {/* <button
        onClick={() => {
          dispatch(
            editTask({
              task: {
                id: 1,
                title: "go shopping",
                isCompleted: false,
                priority: "moderate",
                due_date:
                  "Wed May 05 2023 19:17:25 GMT+0530 (India Standard Time)",
              },
            })
          );
        }}
      >
        Edit task
      </button>
      <button
        onClick={() => {
          dispatch(
            deleteTask({
              id: 1,
            })
          );
        }}
      >
        Delete first task
      </button> */}
    </main>
  );
}

export default App;
