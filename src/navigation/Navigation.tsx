import { NavLink } from 'react-router';
import './Navigation.scss';
import { useEffect, useRef } from 'react';

interface NavigationProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navigation = ({ open, setOpen }: NavigationProps) => {
  const menuRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

// Make sure focus stays in menu when active
useEffect(() => {
  if (!open) return;

  // Focus close btn
  buttonRef.current?.focus();

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!menuRef.current || !buttonRef.current) return;

    const focusable = [buttonRef.current, ...Array.from(menuRef.current.querySelectorAll<HTMLElement>('a'))];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  document.addEventListener('keydown', handleKeyDown);
  return () => document.removeEventListener('keydown', handleKeyDown);
}, [open, setOpen]);

  return (
    <nav>
      <a href="/" className="logo">
        Atlantis Frame
      </a>

      <button
        ref={buttonRef}
        className={`menubtn ${open ? 'active' : ''}`}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>

      {/* Mobile menu */}
      <ul
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-menu ${open ? 'active' : ''}`}
        aria-hidden={!open}
      >
        <li>
          <NavLink to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/DestinationPage" onClick={() => setOpen(false)}>
            Destinations
          </NavLink>
        </li>
        <li>
          <NavLink to="/AboutPage" onClick={() => setOpen(false)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/ContactPage" onClick={() => setOpen(false)}>
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Tablet/Desktop */}
      <ul className="tablet-desktop">
        <li>
          <NavLink to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/DestinationPage" onClick={() => setOpen(false)}>
            Destinations
          </NavLink>
        </li>
        <li>
          <NavLink to="/AboutPage" onClick={() => setOpen(false)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/ContactPage" onClick={() => setOpen(false)}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
