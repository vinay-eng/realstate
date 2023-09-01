import * as React from 'react';

import LOGO from '../assets/logoRealEtstate.png'

import "../style/navbar.css"

function NavBar(props) {
  

  return (
    // <Box sx={{ display: 'flex' }}>
      <div className='navbar'>
        {/* <img src={LOGO} /> */}
        <h2 className='logo'>!Real Estate</h2>
        <ul>
          <li><a href='#'>HOME</a></li>
          <li><a href='#'>ABOUT</a></li>
          <li><a href='#'>CONTACT US</a></li>
          <li><a href='#'>PAGES</a></li>
          <li><a href='#'>Listings</a></li>
        </ul>
      </div>
      
    // </Box>
  );
}



export default NavBar;