import React,{useState,useEffect} from 'react'
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'
function App() {

  useEffect( ()=>{
   // console.log("call page loading")
  },[])

  const [inputText,setInputText]=useState("");
  const [todos, setTodos]= useState([]);
  const [status, setStatus]=useState("all");
  const [filteredTodos,setFilteredTodos]=useState([]);

  useEffect( ()=>{
    //console.log("call when todo changes--<?")
    filterHandler();
  },[todos,status])

  const filterHandler=()=>{
    switch(status){
      case 'completed':
          setFilteredTodos(todos.filter( (todo)=> todo.completed ==true ) );
          break;
      case 'uncompleted':
        setFilteredTodos(todos.filter( (todo)=> todo.completed === false ) );
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }


  return (
    <div className="App">
      <header>
          <h1>Todo App</h1>
      </header>
        <Form setInputText={setInputText} inputText={inputText} setTodos={setTodos} todos={todos} setStatus={setStatus}/><br></br>
        <TodoList setTodos={setTodos} todos={todos} setFilteredTodos={setFilteredTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
