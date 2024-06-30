import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../src/pages/Home';
import './App.css';
import About from './pages/About2';
import Events from './pages/Events';
import NewPost from './pages/NewPost';
import PostComp from './pages/Post';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Reg from './pages/Reg';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/newpost" element={<NewPost />} />
            <Route path="/post/:id" element={<PostComp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reg" element={<Reg />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
