import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import HomeIcon from '@mui/icons-material/Home';
import AboutIcon from '@mui/icons-material/Info';
import EventIcon from '@mui/icons-material/Event';
import PetsIcon from '@mui/icons-material/Pets';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
    const [openUserMenu, setOpenUserMenu] = useState(false);
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

    const toggleUserMenu = () => {
        setOpenUserMenu(!openUserMenu);
    };

    useEffect(() => {
        const storedUsername = sessionStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const handleLogout = () => {
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('username');
        setOpenUserMenu(false);
        navigate('/');
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
                <button className="user-icon" onClick={toggleUserMenu}>
                    <AccountCircleIcon />
                </button>
            </div>
            <div className='links'>
                <Link to="/home" onClick={toggleNavbar}>
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
            <div className={`user-links ${openUserMenu ? 'open' : ''}`}>
                <span> :בעל הכלב </span>
                {username && <span style={{fontWeight:'bold'}}>{username}</span>}
                <Link to="/" onClick={handleLogout}>
                    <b> התנתק </b>
                    <LogoutIcon />
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
