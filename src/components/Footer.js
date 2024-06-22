import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Footer.css';
import HomeIcon from '@mui/icons-material/Home';
import AboutIcon from '@mui/icons-material/Info';
import EventIcon from '@mui/icons-material/Event';

function Footer() {
  return (
    <div className='Footer'>
        <p>© 2024 Lituf.com</p>
        <div className="footer-icons">
            <NavLink to="/" className="footer-icon" activeClassName="active">
                <HomeIcon />
                <span>בית</span>
            </NavLink>
            
            <NavLink to="/events" className="footer-icon" activeClassName="active">
                <EventIcon />
                <span>אירועים</span>
            </NavLink>

            <NavLink to="/about" className="footer-icon" activeClassName="active">
                <AboutIcon />
                <span>אודות</span>
            </NavLink>
        </div>
    </div>
  );
}

export default Footer;
