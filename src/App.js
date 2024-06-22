import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from '../src/pages/Home';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About2';
import Events from './pages/Events';
import NewPost from './pages/NewPost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ConditionalComponents>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/newpost" element={<NewPost />} />
          </Routes>
        </ConditionalComponents>
      </BrowserRouter>
    </div>
  );
}

const ConditionalComponents = ({ children }) => {
  const location = useLocation();
  const hideNavbarFooter = location.pathname === '/newpost';

  return (
    <>
      {!hideNavbarFooter && <Navbar />}
      {children}
      {!hideNavbarFooter && <Footer />}
    </>
  );
};

export default App;
