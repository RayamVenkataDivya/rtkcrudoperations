import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from './todolistSlice';

function Todolist(){
    var {todos}=useSelector((state)=>{return state.t})
    var [nt,setNt]=React.useState()
    var dispatch=useDispatch()
    return(
        <div className='border border-2 border-dark p-3 m-3'>
            <h3>Todolist...</h3>
            <input type="text" onKeyUp={(e)=>{setNt(e.target.value)}}/>&nbsp;
            <button onClick={()=>{dispatch(addTodo(nt))}}>Add Task</button>
            {
                todos.map((todo,i)=>{
                    return <li>
                        {todo}&nbsp;&nbsp;
                        <button onClick={()=>{dispatch(deleteTodo(i))}}>Delete</button>
                        </li>
                })
            }
        </div>
    )
}
export default Todolist;