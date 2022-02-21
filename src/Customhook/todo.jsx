import React,{useState} from "react";



function Todohook(){
    
    let [todo,settodo]=useState([])
    let [item,setitem]=useState()


    const addtodo=()=>{
        settodo([...todo,item])
    }
    const remove=()=>{
        let arr = [...todo]
        arr.slice(1,1)
        settodo(arr)
        alert("remove it")
    }

    const edit=()=>{
        var update = prompt("enter your todo")
        todo[1]=update;
        settodo=([...todo])
        
    }

    return[todo,settodo,item,setitem,addtodo,remove,edit]
        
}

export default Todohook;