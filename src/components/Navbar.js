import React, { useState } from 'react';
import '../styles/Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import HomeIcon from '@mui/icons-material/Home';
import AboutIcon from '@mui/icons-material/Info';
import EventIcon from '@mui/icons-material/Event';
import PetsIcon from '@mui/icons-material/Pets';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

function Navbar() {
const [openLinks, setOpenLinks] = useState(false);
const toggleNavbar = () => {
setOpenLinks(!openLinks);
};

return (
    <div className='Navbar' id={openLinks ? 'open' : 'close'}>
        <div className='left-side'>
            <Link className='title' to="/">
                <PetsIcon />
                <h1>LITUF</h1>
            </Link>
        </div>
        <div className='right-side'>
            <button className="menu-icon" onClick={toggleNavbar}>
                {openLinks ? <ClearOutlinedIcon /> : <MenuIcon />}
            </button>
            <button className="search-icon">
                <SearchIcon />
            </button>
        </div>
        <div className='links'>
            <Link to="/" onClick={toggleNavbar}>
                <HomeIcon />
                <b>בית</b>
            </Link>
            <Link to="/events" onClick={toggleNavbar}>
                <EventIcon />
                <b>אירועים</b>
            </Link>
            <Link to="/About" onClick={toggleNavbar}>
                <AboutIcon />
                <b>אודות</b>
            </Link>
        </div>
    </div>
);

}

export default Navbar;
