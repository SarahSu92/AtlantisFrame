import { NavLink } from 'react-router';
import './Navigation.scss';
import { useState } from 'react';


export const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <a href="/" className="logo">Atlantis Frame</a>

      
      <button
        className={`menubtn ${open ? "active" : ""}`}
        aria-label="Menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>

      
      <ul id="mobile-menu" className={`menu ${open ? "active" : ""}`}>
        <li><NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/DestinationPage" onClick={() => setOpen(false)}>Destinations</NavLink></li>
        <li><NavLink to="/AboutPage" onClick={() => setOpen(false)}>About</NavLink></li>
        <li><NavLink to="/ContactPage" onClick={() => setOpen(false)}>Contact</NavLink></li>
      </ul>
    </nav>
  );
};