import logo from './logo.svg';
import './App.css';
import Task from './components/Task';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
{/* <Task></Task>      */}

   <Header/>
   <Home></Home>

    </div>
  );
}

export default App;
