import logo from './logo.svg';
import './App.css';
import Task from './components/Task';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContriesTable from './components/AboutUs';
import Login from './Login';
import { Routes,BrowserRouter,Route } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import MyDetails from './components/MyDetails';
import Myheader from './Myheader';
import ContactUs from './components/ContactUs';
import NoPageFound from './components/NoPageFound';

function App() {
  function clickMe(){

    alert("hello")
  }
  return (
    <div className="App">
{/* <Header></Header>
<BrowserRouter>

<Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="about/:id" element={<AboutUs />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
  </BrowserRouter> */}
     <Myheader></Myheader>
     <BrowserRouter>
       <Routes>
        <Route  path='about' element={<AboutUs/>}></Route>
        <Route  path='about/:id' element={<AboutUs/>}></Route>
        <Route  path='contact' element={<ContactUs/>}></Route>
        <Route  path='*' element={<NoPageFound/>}></Route>
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
