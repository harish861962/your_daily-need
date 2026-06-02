import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Todolist() {

    const [tododata, settododata] = useState([])
    const [addtask, setaddtask] = useState("");


    async function Gettodo() {
        const apiurl = await fetch("http://localhost:3000/tododata");
        const data = await apiurl.json();
        settododata(data);
    }

    useEffect(() => {
        Gettodo();
    }, [])


    async function handleform(e) {
        e.preventDefault()

        if (!addtask) {
            toast.warn("enter task to add")
            return;
        }


        await fetch("http://localhost:3000/tododata", {
            method: "POST",
            body: JSON.stringify({ task: addtask })
        });
        toast.success("New task added")
        Gettodo()
    }


    async function deleteitem(id) {
        await fetch(`http://localhost:3000/tododata/${id}`, {
            method: "DELETE"
        });
        toast.success("Task Deleted ");
        Gettodo();
    }

    return (
        <>
            <div className="todo-container">
                <h2 >Todo List</h2>
                <br />
                <br />

                <form className="todo-form" action="" onSubmit={handleform}>


                    <input type="text" value={addtask} placeholder="add task" onChange={(e) => setaddtask(e.target.value)} />

                    <button>Add </button>
                </form>

                {
                    tododata.map((p) => (
                        <div className="todo-item" key={p.id}>
                            <h3>{p.task}</h3>

                            <button onClick={() => deleteitem(p.id)}>Delete</button>
                        </div>

                    ))
                }
            </div>
        </>
    )
}