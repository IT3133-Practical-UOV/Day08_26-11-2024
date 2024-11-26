import './App.css';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from 'react-router-dom';


function App() {
  return (
    <Router>

      <nav>
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
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
