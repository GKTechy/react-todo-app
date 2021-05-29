import React from 'react'

const Todo=({todo , todos,setTodos})=>{

    const deleteHandler=()=>{
        setTodos(todos.filter( e=> e.id !== todo.id))
    }

    const completeHandler=()=>{

        setTodos( todos.map( (obj)=>{
                if(obj.id=== todo.id){ return { ...obj, completed:!obj.completed }} return obj;
            } 
        ))

    }

    return(
        <>
            <li className="list-group-item d-flex justify-content-between align-items-center">{todo.text} 
                <span className= {todo.completed? "badge bg-success rounded-pill" : "badge bg-primary rounded-pill"}  onClick={completeHandler}>{todo.completed? "Completed" : "UnCompleted"}</span>
                <span className="badge bg-danger rounded-pill"  onClick={deleteHandler}>delete</span>
            </li>
            
        </>
    )
}

export default Todo;