import React, {useEffect, useRef, useState } from "react";
import EditToDo from "./EditToDo";
import axios from "axios";

export default function ToDoCard({ note, setaddData }) {
  const newRef = useRef();
  const editNewRef = useRef();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(0);
  const [pin, setPin] = useState(0);

  useEffect(() => {
    if (note?.id) {
      setTitle(note.title);
      setDescription(note.description);
      setId(note.id);
      setPin(note.pined);
    }
  }, [note]);

  const handlePined = async () => {
    try {
      let checkPin = pin ? 0 : 1;
      const token = localStorage.getItem("token");
      console.log(token);
      
      const res = await axios.put("http://localhost:3000/todos/pined",{ id: id, pined: checkPin }, {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
      });
      setaddData(res);
      setPin(checkPin);
    } catch (error) {
      console.log(error);
    }
  };


  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete the note: "${title}"?`
    );
    if (!confirmDelete) {
      return;
    }
    try {
      const token = localStorage.getItem("token");
      const res = await axios.delete("http://localhost:3000/todos/delete", {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
        data: { id: id },
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
        <button
          onClick={handlePined}
          className="p-0 m-0 absolute top-[10px] right-[10px] w-[auto]"
        >
          <svg
            width="20"
            viewBox="0 0 66 91"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {pin ? (
              <path
                d="M49.9447 19.5138L49.9444 19.514L47.2569 21.0515L45.9778 21.7832L46.2977 23.2217L51.7102 47.5592L52.0584 49.125H53.6625H58C61.2079 49.125 63.8125 51.7296 63.8125 54.9375V61.1875C63.8125 64.3954 61.2079 67 58 67H40.6187H38.9252L38.6461 68.6704L35.6461 86.6267L35.6441 86.6387C35.5429 87.268 35.2209 87.8406 34.7358 88.2539C34.2507 88.6673 33.6342 88.8943 32.9969 88.8943C32.3596 88.8943 31.7431 88.6673 31.2579 88.2539C30.7728 87.8406 30.4508 87.268 30.3497 86.6387L30.3478 86.6273L27.354 68.6711L27.0754 67H25.3813H8C4.79207 67 2.1875 64.3954 2.1875 61.1875V54.9375C2.1875 51.7296 4.79207 49.125 8 49.125H12.3375H13.9416L14.2898 47.5592L19.7023 23.2217L20.0222 21.7832L18.7431 21.0515L16.0556 19.514L16.0545 19.5134C15.1649 19.0052 14.4254 18.2709 13.9109 17.3849C13.3966 16.4991 13.1254 15.4931 13.125 14.4688C13.125 14.4685 13.125 14.4683 13.125 14.4681V8.0625C13.125 4.85457 15.7296 2.25 18.9375 2.25H47.0625C50.2704 2.25 52.875 4.85457 52.875 8.0625V14.4688C52.875 16.5507 51.7599 18.4759 49.9447 19.5138Z"
                fill="white"
                stroke="white"
                strokeWidth="4"
              />
            ) : (
              <path
                d="M49.9447 19.5138L49.9444 19.514L47.2569 21.0515L45.9778 21.7832L46.2977 23.2217L51.7102 47.5592L52.0584 49.125H53.6625H58C61.2079 49.125 63.8125 51.7296 63.8125 54.9375V61.1875C63.8125 64.3954 61.2079 67 58 67H40.6187H38.9252L38.6461 68.6704L35.6461 86.6267L35.6441 86.6387C35.5429 87.268 35.2209 87.8406 34.7358 88.2539C34.2507 88.6673 33.6342 88.8943 32.9969 88.8943C32.3596 88.8943 31.7431 88.6673 31.2579 88.2539C30.7728 87.8406 30.4508 87.268 30.3497 86.6387L30.3478 86.6273L27.354 68.6711L27.0754 67H25.3813H8C4.79207 67 2.1875 64.3954 2.1875 61.1875V54.9375C2.1875 51.7296 4.79207 49.125 8 49.125H12.3375H13.9416L14.2898 47.5592L19.7023 23.2217L20.0222 21.7832L18.7431 21.0515L16.0556 19.514L16.0545 19.5134C15.1649 19.0052 14.4254 18.2709 13.9109 17.3849C13.3966 16.4991 13.1254 15.4931 13.125 14.4688C13.125 14.4685 13.125 14.4683 13.125 14.4681V8.0625C13.125 4.85457 15.7296 2.25 18.9375 2.25H47.0625C50.2704 2.25 52.875 4.85457 52.875 8.0625V14.4688C52.875 16.5507 51.7599 18.4759 49.9447 19.5138Z"
                stroke="white"
                strokeWidth="4"
              />
            )}
          </svg>
        </button>
        <h2 className="card-title text-white">{title}</h2>
        <p className="text-white">{truncateText(description)}</p>
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
          <h3 className="font-bold text-lg text-white">{title}</h3>
          <p className="py-4 text-white">{description}</p>
        </div>
      </dialog>
      <EditToDo editNewRef={editNewRef} note={note} setaddData={setaddData} />
    </div>
  );
}
