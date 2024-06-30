import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/Info.css'

function Info() {

const navigate = useNavigate();

const navigateToHome = () => {
    navigate('/login');
};



return (
    <div className='Info'>
        <div className='info-content'>
            <h2>הגעתם לבית לאוהבי כלבים כאן תוכלו למצוא מידע מועיל, לשאול שאלות מאלפים, ולהשתתף במבצעים ובאירועים שקשורים לעולם הכלבים. המטרה העיקרית היא ליצור קהילה מקוונת תומכת שבה יכולים להתחבר ולשתף פעולה אוהבי החיות</h2>
            <button className='click' onClick={navigateToHome}> !צאו לטיול </button>
        </div>
    </div>
  )
}

export default Info
