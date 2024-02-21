import React from 'react';
import {Link} from 'react-router-dom';
function Header() {
  const headerStyle = {
  //   background: 'url("https://mobirise.com/extensions/hotelm4/assets/images/background13-1920x1280.jpg")', // Replace "your-image-url.jpg" with the actual URL of your image
  // backgroundSize: 'cover',
    background: '#1a4b43',
    color: '#fff',
    padding: '1rem',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Adjusted justifyContent
    height: '8rem',
  };

  const linkStyle = {
    margin: '0 1rem',
    textDecoration: 'none',
    color: '#fff',
  };

  const logoStyle = {
    width: '200px',
    marginRight: '1rem',
    textAlign: 'left', // Adjusted textAlign
    display: 'flex',
    alignItems: 'center', // Adjusted alignItems
    justifyContent: 'flex-start', // Adjusted justifyContent
  };

  // Replace the placeholder with the actual URL or path to your image
  const imageUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTavOdEYQ32An1Pj7Cu3g2Kzoozhtya_7USuScvLlTuvhZBdXpax5wK9dI21YfaeK3RnA&usqp=CAU';

  return (
    <div style={headerStyle}>
      <img src={imageUrl} alt="Logo" style={logoStyle} />
      <div>
        <Link to="/home" style={linkStyle}>
          Home
        </Link>
        <Link to="/Rooms" style={linkStyle}>
          Rooms
        </Link>
        <Link to="/Gallery" style={linkStyle}>
          Gallery
        </Link>
        <Link to="/contact" style={linkStyle}>
          Contact
        </Link>
        <Link to="/about" style={linkStyle}>
          About
        </Link>
        <Link to="/Login" style={linkStyle}>
          Login
        </Link>
      </div>
    </div>
  );
}

export default Header;