import React from 'react'
import { Link } from 'react-router-dom';
function Navbar(){
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/counter">Counter</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/todolist">Todolist</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/countries">Countries</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" to="/books">books</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;