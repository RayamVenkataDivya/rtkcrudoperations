import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement,reset } from './counterSlice';
function Counter(){
    var {count} = useSelector((state)=>{return state.c})
    var dispatch = useDispatch()
    return (
        <div className='border border-2 border-dark p-3 m-3'>
            <h3>Counter:{count}</h3>
            <button onClick={()=>{dispatch(increment())}}>Increment</button>&nbsp;&nbsp;
            <button onClick={()=>{dispatch(decrement())}}>Decrement</button>&nbsp;&nbsp;
            <button onClick={()=>{dispatch(reset())}}>Reset</button>&nbsp;&nbsp;
        </div>
    )
}
export default Counter;