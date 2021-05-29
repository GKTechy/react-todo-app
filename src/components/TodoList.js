import React from 'react'
import Todo from './Todo'


const TodoList=({todos,setTodos,setFilteredTodos,filteredTodos})=>{

    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <ul className="list-group col-5">
                    {
                        filteredTodos.map( todo =>(
                            <Todo todo={todo} key={todo.id} setTodos={setTodos} todos={todos}/>
                        ))
                    }
                    
                </ul>
           </div>
        </div>
    )
}

export default TodoList;