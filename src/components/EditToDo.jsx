import axios from "axios";
import React, { useState } from "react";

export default function EditToDo({ editNewRef, note, setaddData }) {
  const { title, description, _id } = note;
  const [formData, setFormData] = useState({
    title: title,
    description: description,
    id: _id,
  });

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        "http://localhost:3000/todos/edit",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
          },
        }
      );
      editNewRef.current?.close();
      setaddData(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <button
        onClick={() => editNewRef.current?.showModal()}
        title="ADD TODO"
        className="w-12 h-12 p-3 btn btn-primary fixed right-4 bottom-16 text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-45 w-full h-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <dialog ref={editNewRef} className="modal">
        <div
          onClick={() => editNewRef.current?.close()}
          className="w-full h-full absolute top-0 left-0"
        ></div>
        <div className="modal-box w-full max-w-[90%]">
          <button
            onClick={() => editNewRef.current?.close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">Update To Do</h3>
          <input
            type="text"
            name="title"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            value={formData.title}
            placeholder="To Do Title"
            className="input input-bordered input-primary w-full my-4"
          />
          <textarea
            name="description"
            placeholder="To Do Description"
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            value={formData.description}
            className="input input-bordered input-primary w-full"
          ></textarea>
          <button onClick={handleSubmit} className="btn btn-primary mt-4">
            Update To Do
          </button>
        </div>
      </dialog>
    </>
  );
}
