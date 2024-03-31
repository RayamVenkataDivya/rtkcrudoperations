import { createSlice } from "@reduxjs/toolkit";

const initialState={
    todos:["goto office","complete work"]
}
export const todolistSlice=createSlice({
    name:"todolist",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push(action.payload)
        },
        deleteTodo:(state,action)=>{
            state.todos.splice(action.payload,1)
        }
    }
})
export const {addTodo,deleteTodo}=todolistSlice.actions
export default todolistSlice.reducer