import React from 'react';


const Form=({inputText,setInputText,todos,setTodos,setStatus})=>{
    
    const inputTextHandler=(e)=>{
//        console.log("-->"+e.target.value)
        setInputText(e.target.value)
    }

    const formSubmitHandler=(e)=>{
        e.preventDefault();
        if(inputText !==""){
            setTodos([
                ...todos,{text:inputText, completed:false,id:Math.random()*1000}
            ])
            setInputText("")
        }
    }

    const statusHandler=(e)=>{
      //  console.log("-->"+e.target.value)
        setStatus(e.target.value)
    }

    return (
        <div  className="container">
            <div className="row">
                    <div className="col align-self-center">
                        <input type="text" value={inputText} onChange={inputTextHandler}  className="form-control" />
                    </div>
                    <div className="col align-self-center">
                        <button type="submit" onClick={formSubmitHandler}  className="btn btn-primary">Add</button>
                    </div>

                    <div className="col align-self-center" >
                        <select name="todos" className="form-select" aria-label="Default select example" onChange={statusHandler}>
                            <option value="all" >All</option>
                            <option value="completed" >Completed</option>
                            <option value="uncompleted" >Uncompleted</option>
                        </select>
                    </div>
            </div>
        </div>
     
    );
}

export default Form;