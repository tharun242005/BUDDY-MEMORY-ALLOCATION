import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 10, right: 10, zIndex: 1000 }}>
      {/* Menu Icon */}
      <div onClick={toggleMenu} style={{ cursor: 'pointer' }}>
        <span style={{ fontSize: '2em', color: 'var(--blue-dark)' }}>
          &#x22EE;
        </span>
      </div>

      {/* Dropdown */}
      {open && (
        <div
          ref={menuRef}
          style={{
            marginTop: '0.5em',
            background: '#fff',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
            position: 'absolute',
            right: 0,
            minWidth: '200px',
            animation: 'fadeSlideIn 0.3s ease-out',
            color: '#000',
          }}
        >
          <div
            onClick={() => setOpen(false)}
            style={{
              textAlign: 'right',
              padding: '0.5em 1em',
              cursor: 'pointer',
              fontWeight: 'bold',
              color: '#888',
            }}
          >
            ×
          </div>

          <Link to="/" onClick={() => setOpen(false)} style={getLinkStyle()}>🏠 Home</Link>
          <Link to="/cheatsheet" onClick={() => setOpen(false)} style={getLinkStyle()}>ℹ️ About</Link>
          <a href="https://github.com/tharun242005/BUDDY-MEMORY-ALLOCATION" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} style={getLinkStyle()}>🐙 GitHub</a>
          <a href="/Buddy Memory Allocation System.docx" download onClick={() => setOpen(false)} style={getLinkStyle()}>📄 Docs</a>
          <a href="mailto:run40081@gmail.com" onClick={() => setOpen(false)} style={getLinkStyle()}>💡 Help</a>
        </div>
      )}

      {/* Animation Style */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

const getLinkStyle = () => ({
  display: 'block',
  padding: '0.6em 1em',
  color: '#000',
  textDecoration: 'none',
  transition: 'background 0.2s',
  backgroundColor: '#fff',
});

export default Navbar;
