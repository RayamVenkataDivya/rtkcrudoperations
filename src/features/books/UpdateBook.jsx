import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLazyGetAllBooksQuery, useUpdateBookMutation } from '../../services/booksApi'

function UpdateBook(){
    var [updateBookDetails]=useUpdateBookMutation()
    var [prefetchBooks]=useLazyGetAllBooksQuery()
    var [selectedBook,setSelectedBook]=React.useState({title:"",author:""})

    var {state}=useLocation()
    // console.log(state)
    // console.log(x)
    useEffect(()=>{
        setSelectedBook({...state})
    },[state])
    function updateBook(){
        // console.log(selectedBook)
        updateBookDetails(selectedBook).then(()=>{
            prefetchBooks()
        })
    }
    
    return(
        <div>
            <h3>UpdateBook</h3>
            {
                state && <div>
                    <input type="text" placeholder='enter title' value={selectedBook.title} onChange={(e)=>{setSelectedBook({...selectedBook,title:e.target.value})}}/><br/><br/>
                    <input type="text" placeholder='enter author' value={selectedBook.author} onChange={(e)=>{setSelectedBook({...selectedBook,author:e.target.value})}}/><br/><br/>
                    <button onClick={()=>{updateBook()}}>AddBook</button>
                </div>
            }
        </div>
    )
}
export default UpdateBook