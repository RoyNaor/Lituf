import React, { useEffect, useState, useRef } from 'react';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);
  const contentRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://10.100.102.11:3001/posts").then((response) => {
      console.log(response.data);
      setListOfPosts(response.data);
    });
  }, []);

  const scrollToTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const navigateToNewPost = () => {
    navigate('/newpost');
  };

  return (
    <div className='Home'>
      <Navbar/>
      <div className='content' ref={contentRef}>
        {listOfPosts.map((value, key) => {
          return (
            <div className='post' key={key}>
              <div className='title'>{value.title}</div>
              <div className='body'>{value.PostContent}</div>
              <div className='footer'>{value.username}</div>
            </div>
          );
        })}
        <div className='inner-footer'>
          <div className='icon'>
            <button className='up-btn' onClick={scrollToTop}>
              <ArrowCircleUpIcon />
            </button>
          </div>
          <div className='icon2'>
            <button className='add-btn' onClick={navigateToNewPost}>
              <AddCircleIcon />
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
