import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement,reset } from './counterSlice';

function Counter(){
    var {count}= useSelector((state)=>{return state.c})
    // console.log(x)
    var dispatch=useDispatch()
    // console.log(dispatch)
    return (
        <div className="mybox">
            <h2>Counter:{count}</h2>
            <button onClick={()=>{dispatch(increment())}}>Increment</button>&nbsp;&nbsp;&nbsp;
            <button  onClick={()=>{dispatch(decrement())}}>Decrement</button>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{dispatch(reset())}}>Reset</button>&nbsp;&nbsp;
        </div>
    )
}
export default Counter;