import React from 'react';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { Link } from "react-router-dom";
import './Navbar.css';
import Search from '../Search/Search';


const Navbar = (props) => (
  <AppBar position="sticky" className="navbar">
    <Toolbar className="navbar__container">
      <Link to="/" className="navbar__title-link text-white">
        <h1 variant="h4" color="inherit" className='navbar__title'>
          GameStore
        </h1>
      </Link>
      <Link to="/recommended" className="navbar__item">
        <Typography variant="button" color="inherit" style={{ fontWeight: 'bold' }}>
          Recommended Games
        </Typography>
      </Link>
      <Link to="/genre" className="navbar__item">
        <Typography variant="button" color="inherit" style={{ fontWeight: 'bold' }}>
          Genre
        </Typography>
      </Link>
      <Link to="/publishers" className="navbar__item">
        <Typography variant="button" color="inherit" style={{ fontWeight: 'bold' }}>
          Publishers
        </Typography>
      </Link>
      <Search {...props}/> {/* passing down props for the results handler function */}

    </Toolbar>
  </AppBar>
)

export default Navbar;