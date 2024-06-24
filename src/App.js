import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../src/pages/Home';
import './App.css';
import About from './pages/About2';
import Events from './pages/Events';
import NewPost from './pages/NewPost';
import PostComp from './pages/Post';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/newpost" element={<NewPost />} />
            <Route path="/post/:id" element={<PostComp />} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
