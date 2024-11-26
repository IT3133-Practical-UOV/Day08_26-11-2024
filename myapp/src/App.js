import './App.css';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from 'react-router-dom';


function App() {
  return (
    <Router>

      <nav>
        <ul className='navbar'>
          <li><NavLink to='/home' className='listItem'>Home</NavLink></li>
          <li><NavLink to='/about' className='listItem'>About Us</NavLink></li>
          <li><NavLink to='/contact' className='listItem'>Contact Us</NavLink></li>
        </ul>
      </nav>
      <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/contact' element={<ContactUs/>}/> 
      </Routes>
    </Router>
  );
}

export default App;
