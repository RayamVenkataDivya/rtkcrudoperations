import React from 'react'
import { useAddBookMutation, useLazyGetAllBooksQuery } from '../../services/booksApi'

function AddBook(){
    var [newBook,setNewBook]=React.useState({title:"",author:""})
    var [addNewBook] = useAddBookMutation()
    var [refetchBook] = useLazyGetAllBooksQuery()
    // console.log(x)
    function addBook(){
        addNewBook(newBook).then(()=>{
            refetchBook()
        })
    }
    return (
        <div>
            <h3>Add newBook</h3>
            <input type="text" placeholder='enter title' onKeyUp={(e)=>{setNewBook({...newBook,title:e.target.value})}}/><br/><br/>
            <input type="text" placeholder='enter author'onKeyUp={(e)=>{setNewBook({...newBook,author:e.target.value})}}/><br/><br/>
            <button onClick={()=>{addBook()}}>AddBook</button>
        </div>
    )
}
export default AddBook;