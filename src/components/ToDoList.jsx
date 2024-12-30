import React, { useRef, useState } from "react";
import ToDoCard from "./ToDoCard";
import { useEffect } from "react";
import axios from "axios";
import AddToDo from "./AddToDo";

export default function ToDoList() {
  const addNewRef = useRef();
  const [toDos, setToDos] = useState([]);
  const [addData, setaddData] = useState([]);
  const [formData, setFormData] = useState({ title: "", description: "" });
  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "https://todo-backend-qccs.onrender.com/todos/add",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
          },
        }
      );
      addNewRef.current?.close();
      setaddData(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    (async function () {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("https://todo-backend-qccs.onrender.com/todos", {
          headers: {
            "Content-Type": "application/json",
            "x-access-token": token,
          },
        });
        setToDos(res.data.notes);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [addData]);
  return (
    <section className="min-h-[calc(100vh-118px)] px-4">
      {toDos && toDos.length > 0 ? (
        <div className="grid max-md:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-6 py-10">
          {toDos.map((note, index) => (
            <ToDoCard key={index} note={note} setaddData={setaddData} />
          ))}
        </div>
      ) : (
        <div className="min-h-[calc(100vh-118px)] flex flex-col items-center justify-center">
          <h2 className="text-center text-xl text-white">
            No Todo present, please add a todo.
          </h2>
        </div>
      )}
      <AddToDo
        addNewRef={addNewRef}
        handleSubmit={handleSubmit}
        setFormData={setFormData}
        formData={formData}
      />
    </section>
  );
}
