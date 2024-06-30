import React, { useEffect, useState, useRef } from 'react';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);
  const navigate = useNavigate();

  const contentRef = useRef(null);

  useEffect(() => {
    axios.get("http://10.100.102.7:3001/posts").then((response) => {
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

  const navigateToPost = (id) => {
    navigate(`/post/${id}`);
  };

  return (
    <div className='Home'>
      <Navbar/>
      <div className='content' ref={contentRef}>
        {listOfPosts.map((value, key) => {
          return (
            <div className='post' key={key} onClick={() => navigateToPost(value.id)}>
              <div className='title'>{value.title}</div>
              <div className='body'>{value.PostContent}</div>
              <div className='footer'>
                <span className='username'>{value.username}</span>
                <div className='likes'>
                  <ThumbUpOffAltIcon />
                  <span>{value.Likes.length}</span>
                </div>
              </div>
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
