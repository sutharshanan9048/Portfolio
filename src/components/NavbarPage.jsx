
// export default NavbarPage
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavbarPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='nav'>
      <div className='navbar'>
        <h1>Portfolio.</h1>
        <button 
          className="menu-btn" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav>
          <ol className={isMenuOpen ? "active" : ""}>
            <li><Link to='/' className='link' onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to='/about' className='link' onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to='/skills' className='link' onClick={() => setIsMenuOpen(false)}>Skills</Link></li>
            <li><Link to='/contact' className='link' onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ol>
        </nav>
      </div>
    </div>
  )
}

export default NavbarPage;
