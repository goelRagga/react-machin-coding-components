import React, { useEffect, useState } from "react"

const Todo = () => {


    const [todos, setTodos] = useState(["GYM", "Dance"])
    const [todoElement,setToDoElement] = useState("")

    const addTodo = () =>{
        if(!todos.includes(todoElement) && todoElement.length>0){
            setTodos((prev)=>([...prev,todoElement]))
            setToDoElement("");
        }
        else{
            setToDoElement("")
        }
    }  

    const handleDelete = (index) =>{
        console.log("deleting index",index)
        let newTodos =[...todos]
  newTodos.splice(index,1);
        console.log("NEW TODOS", newTodos)
        setTodos(newTodos)
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h2>TODO List</h2>
            <input style={{width:"65%"}} value={todoElement} onChange={(e)=>setToDoElement(e.target.value)} onKeyPress={(e)=>{
                if(e.key=="Enter"){
                    console.log("Adding ")
                    addTodo()
                }
            }}/>
            <button className="" style={{margin:"4px", padding:"4px", cursor:"pointer", borderRadius:"6px", fontWeight:"800"}}  onClick={addTodo}>Add Todo</button>

            <ul>
                {todos.map((item, index) => (
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <li key={index}><b>{item}</b></li>
                        <button className="" style={{margin:"4px", padding:"4px", cursor:"pointer", borderRadius:"6px", fontWeight:"800"}}   onClick={()=>handleDelete(index)}>Delete</button>
                    </div>


                ))}
            </ul>

        </div>

    )


}

export default Todo;