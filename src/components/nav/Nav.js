import React from 'react'
import './Nav.scss';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white',
        textDecoration:'none',
    }
  return (
    <nav>
        <h3>Fake Store</h3>
        <ul className='nav-links'>
            <Link style={navStyle} to='/'>
                <li>Home</li>
            </Link>
            <Link style={navStyle} to='/products'>
                <li>Products</li>
            </Link>
            <Link style={navStyle} to='/contact'>
                <li>Contact</li>
            </Link>
            <Link style={navStyle} to='/cart'>
                <li>Cart</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;