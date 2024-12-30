import React from "react";

export default function AddToDo({
  addNewRef,
  handleSubmit,
  setFormData,
  formData,
}) {
  return (
    <>
      <button
        onClick={() => addNewRef.current?.showModal()}
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
      <dialog ref={addNewRef} className="modal">
        <div
          onClick={() => addNewRef.current?.close()}
          className="w-full h-full absolute top-0 left-0"
        ></div>
        <div className="modal-box w-full max-w-[90%]">
          <button
            onClick={() => addNewRef.current?.close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">Add To Do</h3>
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
            Add
          </button>
        </div>
      </dialog>
    </>
  );
}
