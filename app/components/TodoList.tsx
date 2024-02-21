import { useTodoStore } from "@/store/store";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const TodoList = () => {
  const [todoIndex, setTodoIndex] = useState<number | null>();
  const [toggle, setToggle] = useState(true);
  const [updatedTodo, setUpdatedTodo] = useState<string>();
  const { Todos, deleteTodo, editTodo } = useTodoStore();
  const handleUpdate = (index: number) => {
    setToggle(!toggle);
    editTodo(index, updatedTodo);
    setTodoIndex(null);
  };
  return (
    <div className="overflow-x-auto">
      {Todos.length ? (
        <table className="table w-full">
          <thead>
            <tr>
              <th>Todos</th>
            </tr>
          </thead>
          <tbody>
            {Todos?.map((todo: string, index: number) => (
              <div className="flex gap-5 w-full justify-between">
                <input
                  disabled={toggle}
                  value={todoIndex == index ? updatedTodo : todo}
                  onChange={(e) => setUpdatedTodo(e.target.value)}
                  type="text"
                  className="input input-bordered w-full my-2"
                />
                <div
                  className="flex gap-3 justify-start
               items-center "
                >
                  {todoIndex !== index ? (
                    <>
                      <FiEdit
                        cursor="pointer"
                        className="text-blue-500"
                        size={25}
                        onClick={() => (
                          setToggle(!toggle),
                          setUpdatedTodo(todo),
                          setTodoIndex(index)
                        )}
                      />
                      <FiTrash2
                        onClick={() => deleteTodo(index)}
                        cursor="pointer"
                        className="text-red-500"
                        size={25}
                      />
                    </>
                  ) : (
                    <FaCheck
                      cursor="pointer"
                      className="text-white-500"
                      size={25}
                      onClick={() => handleUpdate(index)}
                    />
                  )}
                </div>
              </div>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default TodoList;
