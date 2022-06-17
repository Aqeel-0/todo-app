import {useEffect} from 'react'

export default function ({item, todolist, setTodolist, setRenderlist}) {

    const change_list = (prevL, id) =>{
        const newarr = prevL.map((arr_item)=>{
            if(arr_item.id == id) arr_item.completed = !arr_item.completed
            return arr_item
        })
        return newarr
    }

    const delete_list = (prevL, id) =>{
        const newarr = prevL.filter((arr_item)=>{
            if(arr_item.id != id) return arr_item
        })
        
        return newarr
    }
    const check_complete = (e)=>{
        const curr_id = e.target.parentNode.id
        setTodolist(prevList => change_list(prevList, curr_id))
    }

    const delete_item = (e)=>{
        const curr_id = e.target.parentNode.id
        e.target.parentNode.className+=' fall'
        setTimeout(() => {
            setTodolist(prevList => delete_list(prevList, curr_id))
            setRenderlist(prevList => delete_list(prevList, curr_id))
        }, 1000);
    }
    useEffect(() => {
        const check = localStorage.getItem('todo_list')
        if(check && check.length != 0) localStorage.setItem('todo_list', JSON.stringify(todolist))
    }, [todolist])
    



    
  return (
    <div id = {item.id} className='todo'>
        <li className={`todo-item ${item.completed === true ? 'completed': ''}`}>
            {item.text}
        </li>
        <button onClick={check_complete} className='complete-btn'>R</button>
        <button onClick ={delete_item}className='trash-btn'>T</button>
    </div>
  )
}
