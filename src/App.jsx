//Import  useState amd useRef  from react
import { useState,useRef } from "react";
const App=()=>{
const [todo , settodo]=useState([]);
const todoval = useRef()

//use  addEventListener
const addtodo =(event)=>{
  event.preventDefault();
  if (todoval.current.value.trim()) {
 
  
todo.push(todoval.current.value)
settodo([...todo])
console.log(todo);
todoval.current.value=""}
else{alert("Enter a todo list")}
}

 //Delet arrow function
const delet = (index)=>{
  console.log("todo delet", index);
  todo.splice(index,1)
  settodo([...todo])  
}
 
//Edit arrow function
const edit =(index)=>{
  console.log("edited", index);
 const editvalue = prompt("Enter a new value")
 todo.splice(index,1,editvalue)
 settodo([...todo]) 
}

  return(
    <>
    <h1> TodoApp</h1>
    <form onSubmit={addtodo}>
  <input type="text" placeholder="Enter a todo" ref={todoval} />
  <button type="submit" className="btn">Add</button>
    </form>
    <ol>
      {todo.map((item,index)=>{
        return   <div key={index} className="main">
          <li>{item}
<button onClick={()=>edit(index)}>Edit</button>
<button onClick={()=>delet(index)}>Delet</button>
          </li>
          <hr />
        </div>
      })}
    </ol>   
    </>
  )
}
export default App
