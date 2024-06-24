import React from 'react'
import '../styles/Landing.css'
import PetsIcon from '@mui/icons-material/Pets';
import Lottie from 'lottie-react'
import arrowDown from '../assets/arrowDown.json'

function Landing() {
  return (
    <div className='Landing'>
        <div className='header'>
                <PetsIcon/>
                <h1>LITUF</h1>
        </div>
        <div className='landing-title'>
            <h1 className='first'>הבית של</h1>
            <h1 className='second'>אוהבי הכלבים</h1>
        </div>
        
        <div className='landing-gif'>
            <Lottie loop={true} animationData={arrowDown} />
        </div>
    </div>
  )
}

export default Landing