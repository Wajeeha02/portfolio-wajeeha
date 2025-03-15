import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutMe from './AboutMe/AboutMe.jsx';
import './App.css';
import Contact from './Contact/Contact.jsx';
import Footer from './Footer/Footer.jsx';
import Home from './Home/Home.jsx';
import Navbar from './Navbar/Navbar.jsx';
import PortfolioPage from './Portfolio/PortfolioPage.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AboutMe' element={<AboutMe/>} />
          <Route path='/Portfolio' element={<PortfolioPage/>} />
          <Route path='/Contact' element={<Contact/>} />  
        </Routes>
        <Footer /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
