import React, {useEffect}from 'react'
import axios from 'axios';
function Books(){
    var [books,setBooks]=React.useState([])
    var [newbook,setNewbook]=React.useState({title:"",author:""})
    useEffect(()=>{
        getBooks()
    },[])
       
    function addBook(){
        // alert(JSON.stringify(newbook))
        axios.post("http://localhost:4000/books",newbook).then((res)=>{
            // console.log("after post",JSON.stringify(res.data))
            getBooks();
        })
    }

    function getBooks(){
        axios.get("http://localhost:4000/books").then((res)=>{
            setBooks([...res.data])
        }).catch(()=>{})
    }

    function deleteBook(id){
        axios.delete("http://localhost:4000/books/"+id).then((res)=>{
            // console.log(id)
            alert("deleted....")
        })

    }
    return (
        <div className='mybox'>
            <input type="text" placeholder='enter title' onKeyUp={(e)=>{setNewbook({...newbook,title:e.target.value})}}/><br/>
            <input type="text" placeholder='enter author' onKeyUp={(e)=>{setNewbook({...newbook,author:e.target.value})}}/><br/>
            <button onClick={()=>{addBook()}}>Add</button>
            <ul>
                {
                    books.map((book)=>{
                        return <li>
                            <h2>{book.title}</h2>
                            <h3>{book.author.toUpperCase()}</h3>
                            <button onClick={()=>{deleteBook(book.id)}}>Delete</button>
                            </li>
                    })

                }
            </ul>
            

        </div>
    )
}

export default Books;