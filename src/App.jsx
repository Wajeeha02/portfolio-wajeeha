import Navbar from './Navbar/Navbar.jsx';
import Footer from './Footer/Footer.jsx'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home.jsx';
import Contact from './Contact Me/Contact.jsx';
import AboutMe from './AboutMe/AboutMe.jsx';
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
          <Route path='/ContactMe' element={<Contact/>} />
         
        </Routes>
        <Footer /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
