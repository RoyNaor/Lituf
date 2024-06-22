import React from 'react'
import '../styles/About2.css'
import dog from '../assets/dog.json'
import Lottie from 'lottie-react'
import { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function About2() {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked); // Toggle the state
    };

  return (
    <div className='About'>
        <div className='content'>
            <div className='add-cont'>
                
                <h2 className="icons-title">!עקבו אחרינו</h2>

                <div className="icons">
                    <InstagramIcon />
                    <FacebookIcon />
                    <LinkedInIcon />
                </div>

                <div className='animation-cont'>
                    <Lottie loop={true} animationData={dog} />
                </div>
            </div>

            <div className='text-cont'>
                <h1>מי אנחנו?</h1>
                <b>ליטוף היא פלטפורמה לאוהבי כלבים המספקת חווית משתמש מקיפה ומגוונת, מסייעת בלמידה ובשיתוף פעולה עם מומחים, ומסייעת לקידום הרווחה והבריאות של הכלבים. בנוסף, היא מקדמת את ההתנדבות והתרומה לעמותות, ומקיימת קהילה אינטראקטיבית שמבוססת על האהבה המשותפת לחיות המחמד</b>
                <button onClick={handleClick} style={{ backgroundColor: isClicked ? '#2b9fc2' : '#2FC446' }}>
                    ליצירת קשר
                </button>
            </div>
        </div>
    </div>
  )
}

export default About2
