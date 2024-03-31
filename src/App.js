import './App.css';
import { Provider } from 'react-redux';
import { store } from './app/store';
// import Counter from './features/counter/Counter';
// import Todolist from './features/todolist/Todolist';
import Navbar from './shared/Navbar';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <Provider store={store}>
      {/* <div className="border border-2 border-dark p-3 m-4">
        <h2>Welcome to Edupoly RTK</h2>
        <Counter></Counter>
        <Todolist></Todolist>
      </div> */}
      <Navbar></Navbar>
      <Outlet></Outlet>
    </Provider>
    
  )
}

export default App;
