"use client";
import { useTodoStore } from "@/store/store";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import Modal from "../components/Modal";

const page = () => {
  const router = useRouter();
  const { addTodo } = useTodoStore();
  const [newTodoValue, setNewTodoValue] = useState<string>("");
  const [openAlertModal, setOpenAlertModal] = useState<boolean>(false);

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!newTodoValue) {
      setOpenAlertModal(true);
    } else {
      addTodo(newTodoValue);
      router.push("/");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitNewTodo}>
        <h3 className="font-bold text-lg">Add new Todo</h3>
        <div className="modal-action">
          <input
            value={newTodoValue}
            onChange={(e) => setNewTodoValue(e.target.value)}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <button type="submit" className="btn">
            Add
          </button>
        </div>
      </form>
      <Modal modalOpen={openAlertModal} setModalOpen={setOpenAlertModal}>
        <h3 className="text-lg">Please enter a todo!</h3>
        <div className="modal-action">
          <button onClick={() => setOpenAlertModal(false)} className="btn">
            ok
          </button>
        </div>
      </Modal>
    </>
  );
};
export default page;
