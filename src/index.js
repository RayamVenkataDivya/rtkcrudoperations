import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Counter from './features/counter/Counter';
import Todolist from './features/todolist/Todolist';
import Countries from './features/countries/Countries';
import  Home from './features/countries/Home'
import CountryDetails from './features/countries/CountryDetails'
import Books from './features/books/Books';
import AddBook from './features/books/AddBook';
import UpdateBook from './features/books/UpdateBook';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/home",
        element:<Home></Home>
      },
      {
        path:"/counter",
        element:<Counter></Counter>
      },
      {
        path:"/todolist",
        element:<Todolist></Todolist>
      },
      {
        path:"/countries",
        element:<Countries></Countries>,
        children:[
          {
            path:"/countries/:cname",
            element:<CountryDetails></CountryDetails>
          }
      ]
      },
      {
        path:"/books",
        element:<Books></Books>,
        children:[
          {
            path:"/books/addBook",
            element:<AddBook></AddBook>
          },
          {
            path:"/books/updatebook",
            element:<UpdateBook></UpdateBook>
          }
        ]
      },
    
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
