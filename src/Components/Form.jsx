import {useState, useEffect} from 'react'


export default function Form({todoinput, setTodoinput, todolist, setTodolist, setRenderlist}) {


    const input_capture = (e)=>{
        setTodoinput(e.target.value)
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        if(todoinput == '') alert("Input can't be empty")
        else{
            const newobj = {
                text: todoinput,
                completed: false,
                id: Math.floor(Math.random()*1000)
            }
            setTodolist(prevArr => ([...prevArr, newobj]))
            setRenderlist(prevArr => ([...prevArr, newobj]))
            console.log(todolist)
            localStorage.setItem('todo_list', JSON.stringify())
            setTodoinput("")
        }
        
    

    }

    const Handlecategory = (e)=>{
        const category = e.target.value
        const completed_arr = []
        const incompleted_arr = []
        todolist.forEach((item)=>{
            if(item.completed === true) completed_arr.push(item)
            else incompleted_arr.push(item)
        })
        if(category === 'completed'){
            setRenderlist(completed_arr)
        }
        else if(category === 'uncompleted') setRenderlist(incompleted_arr)
        else setRenderlist(todolist)
        

    }
    return (
        <div>
            <header>
                <h1>Aqeel's Todo List</h1>
            </header>
            <form onSubmit={submitHandler}>
                <input onChange={input_capture} value = {todoinput} type="text" className="todo-input" />
                <button className="todo-button" type="submit">
                    ADD
                </button>
                <div onChange={Handlecategory} className="select">
                    <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}
