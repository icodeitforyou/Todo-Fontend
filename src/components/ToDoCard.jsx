import React, { useRef } from "react";
import EditToDo from "./EditToDo";
import axios from "axios";

export default function ToDoCard({ note, setaddData }) {
  const newRef = useRef();
  const editNewRef = useRef();
  const { title, description, _id } = note;

  const handleDelete = async () => {
  const confirmDelete = window.confirm(`Are you sure you want to delete the note: "${title}"?`);
  if (!confirmDelete) {
    return;
  }
    try {
      const token = localStorage.getItem("token");
      const res = await axios.delete("https://todo-backend-qccs.onrender.com/todos/delete", {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
        data: { id: _id },
      });
      setaddData(res);
    } catch (error) {
      console.log(error);
    }
  };
  function truncateText(text, wordLimit = 10) {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  }
  return (
    <div className="group card shadow-xl bg-neutral">
      <div className="card-body px-4 py-6 relative">
        <h2 className="card-title">{title}</h2>
        <p>{truncateText(description)}</p>
        <div className="flex justify-between gap-2 overflow-hidden pt-3">
          <button
            className="btn min-h-8 h-8 btn-primary"
            onClick={() => newRef.current?.showModal()}
          >
            Read More
          </button>
          <div className="flex items-center gap-2 transition-all duration-300 translate-y-[100%] group-hover:translate-y-[0%]">
            <button
              onClick={() => editNewRef.current?.showModal()}
              className="btn min-h-8 h-8 btn-success"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="btn min-h-8 h-8 btn-error"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <dialog ref={newRef} className="modal">
        <div
          onClick={() => newRef.current?.close()}
          className="w-full h-full absolute top-0 left-0"
        ></div>
        <div className="modal-box w-full max-w-[90%]">
          <button
            onClick={() => newRef.current?.close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{description}</p>
        </div>
      </dialog>
      <EditToDo editNewRef={editNewRef} note={note} setaddData={setaddData} />
    </div>
  );
}
