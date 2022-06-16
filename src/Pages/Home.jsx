import {useState, useEffect} from 'react'
import Form from '../Components/Form'
import Todo_list from '../Components/Todo_list'
export default function Home() {
  const [todoinput, setTodoinput] = useState("")
  const [todolist, setTodolist] = useState([])
  const [renderlist, setRenderlist] = useState([])

  // saving to localStroage
  useEffect(() =>{
    const check = localStorage.getItem('todo_list')
    if(check){
      setTodolist(JSON.parse(check))
      setRenderlist(JSON.parse(check))
    }
    else{
      localStorage.setItem('todo_list', JSON.stringify(todolist))
    }
  }, [])
  
  return (
    <div>
        <Form setTodoinput={setTodoinput}
              todoinput = {todoinput}
              setTodolist={setTodolist}
              todolist={todolist}
              setRenderlist={setRenderlist} />
        <Todo_list todolist={todolist}  setTodolist={setTodolist} 
                    renderlist={renderlist} setRenderlist={setRenderlist}/>
    </div>
  )
}
