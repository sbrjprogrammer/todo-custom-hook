
import React,{useState} from 'react';
import Todohook from './Customhook/todo';
import './App.css';

function App() {

let[todo,settodo,item,setitem,addtodo,remove,edit]= Todohook()
  return (
    <div style={{textAlign:"center",margin:"30px"}}>
    <input type="text" className="form__field" placeholder="Name" name="name" id='name'  onChange={(e)=>{setitem(e.target.value)}}  />
    <button onClick={addtodo} class="button-29" role="button">ADDtodo</button>
      {todo.map((val,ind)=>{
        return <li style={{fontSize:"20px",fontWeight:"bold"}} key={ind}>{val} 
        
        <button style={{marginLeft:"30px"}} onClick={()=>remove(ind)} class="button-24" role="button">Remove</button>
        <button onClick={()=>{edit(ind)}} class="button-34" role="button">Edit</button>


     </li>
      })}
    </div>
  );
}

export default App;
