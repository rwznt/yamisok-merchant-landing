import './Navbar.css';
import navLogo from '../assets/nav-logo.svg';
import navMenu from '../assets/mobile/navbar-menu.svg';
import { useState, useEffect, useRef } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    // Attach event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <nav className="nav-main">
      <div className="nav-logo">
        <img src={navLogo} alt="" className="navlogo-image" />
      </div>
      <div className="connects">
        <div className="links">
          <a href="#security-section" className="navlinks">
            Produk
          </a>
          <a href="#merch-section" className="navlinks">
            Web & Merchants
          </a>
          <a href="#explain-section" className="navlinks">
            Tentang Kami
          </a>
          <a href="#faq-section" className="navlinks">
            Kontak Kami
          </a>
        </div>
        <div className="log-in-desk">
          <a href="#" className="log-in-text">
            Login
          </a>
        </div>
        <div className="hamburg">
          <button
            className="hamburg-button"
            onClick={toggleMenu}
            ref={buttonRef}
          >
            <img src={navMenu} alt="" className="hamburg-icon" />
          </button>
        </div>
      </div>
      {isMenuOpen ? (
        <div
          className={`mobile-menu ${isMenuOpen ? 'show' : ''}`}
          ref={menuRef}
        >
          <div className="log-in">
            <a href="#" className="log-in-text">
              Login
            </a>
          </div>
          <a href="#security-section">Produk</a>
          <a href="#merch-section">Web & Merchants</a>
          <a href="#explain-section">Tentang Kami</a>
          <a href="#faq-section">Kontak Kami</a>
        </div>
      ) : null}
    </nav>
  );
};
