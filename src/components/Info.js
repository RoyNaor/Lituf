import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/Info.css'

function Info() {

const navigate = useNavigate();

const navigateToHome = () => {
    navigate('/home');
};



return (
    <div className='Info'>
        <button className='click' onClick={navigateToHome}> click me</button>
    </div>
  )
}

export default Info
