import React from 'react'
import { useGetAllBooksQuery, useLazyGetAllBooksQuery} from '../../services/booksApi'
import { Link, useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useDeleteBookMutation } from '../../services/booksApi'

function Books(){
    var {isLoading,data}=useGetAllBooksQuery()
    var [deleteBookById]=useDeleteBookMutation()
    // console.log(x)
    var [refetchBooks]=useLazyGetAllBooksQuery()
    
    function deleteBook(ind){
        deleteBookById(ind).then(()=>{
            refetchBooks()
        })
    }
    var navigate=useNavigate()
    return (
        <div className='p-3 m-2 d-flex flex-wrap'>
            <div className='w-50'>
                <h3>Books</h3>
                <Link to="addBook"><button>+Add Book</button></Link>
                {
                    isLoading && <h4>Loading...</h4>
                }
                {
                    !isLoading && data.map((book)=>{
                        return <li>
                            <h4>{book.title}</h4>
                            <h4>{book.author}</h4>
                            <button onClick={()=>{deleteBook(book.id)}}>Delete</button>&nbsp;&nbsp;
                            <button onClick={()=>{navigate("updatebook",{state:book})}}>UpdateBook</button>
                        </li>
                    })
                }
            </div>
            <div className='w-50'>
                <Outlet></Outlet>
            </div>
            
        </div>
    )
}
export default Books