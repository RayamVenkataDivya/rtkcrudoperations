import './App.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
// import Counter from './features/counter/Counter';
// import Todolist from './features/todolist/Todolist';
import Navbar from './shared/Navbar';
import { Outlet } from 'react-router-dom';
function App() {
 
  return (
    <Provider store={store}>
      <div className="mybox">
        {/* <Counter></Counter>
        <Todolist></Todolist> */}
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </Provider>
  );
}

export default App;
