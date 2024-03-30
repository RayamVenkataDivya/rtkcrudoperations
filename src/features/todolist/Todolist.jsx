import React from "react"
import { useSelector,useDispatch } from "react-redux";
import { addTodo,deleteTodo } from "./todolistSlice";
function Todolist(){
    var {todos}=useSelector((state)=>{return state.t})
    var [nt,setNt]=React.useState()
    var dispatch=useDispatch()
    return (
        <div className="mybox">
            <input type="text" onKeyUp={(e)=>{setNt(e.target.value)}} />&nbsp;&nbsp;
            <button onClick={()=>{dispatch(addTodo(nt))}}>Add Task</button><br/>
            {
                todos.map((todo,i)=>{
                    return (
                        <div className="m-2">
                            <li>{todo}&nbsp;&nbsp;
                            <button onClick={()=>{dispatch(deleteTodo(i))}}>Delete</button><br/>
                            </li>
                        </div>
                    )
                })
            }

        </div>
    )
}
export default Todolist;