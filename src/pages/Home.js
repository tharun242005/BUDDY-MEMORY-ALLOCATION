// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import gmailIcon from '../assets/google-mail-gmail-icon-logo-symbol-free-png.webp';

function Home() {
  return (
    <div>
      {/* Hero Banner Section */}
      <div
        className="hero-banner"
        style={{
          background: 'linear-gradient(90deg, var(--blue-dark), var(--purple))',
          padding: '2em',
          textAlign: 'center',
          color: 'white',
          borderRadius: '0 0 20px 20px',
        }}
      >
        <h1
          className="hero-heading"
          style={{
            fontSize: '2.5rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: 'bold',
            margin: 0,
            textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)',
            letterSpacing: '1px',
          }}
        >
          Buddy Memory System
        </h1>
      </div>

      <div className="card text-center" style={{ maxWidth: '600px', margin: '2em auto' }}>
        <img
          src={logo}
          alt="Buddy Memory System Logo"
          style={{ maxWidth: '200px' }}
        />

        <p>
          This interactive app visualizes how <strong>Buddy Memory Allocation</strong> works.
          Allocate and deallocate memory blocks to see them split and merge in real time.
          It’s a hands-on way to learn this memory management algorithm.
        </p>

        <Link to="/simulation" aria-label="Go to Simulation">
          <button>Continue</button>
        </Link>

        <div style={{ marginTop: '1em' }}>
          <a
            href="/Buddy Memory Allocation System.docx"
            download
            style={{ color: 'var(--blue-dark)' }}
          >
            Click here for acquaintance
          </a>
        </div>

        <footer className="text-center" style={{ marginTop: '2em', fontSize: '0.9em', color: '#666' }}>
          <span>© TP 2025</span>
          &nbsp;&nbsp;
          <a href="mailto:run40081@gmail.com" aria-label="Send Email">
            <img src={gmailIcon} alt="Gmail Icon" style={{ width: '24px', verticalAlign: 'middle' }} />
          </a>
        </footer>
      </div>

      {/* Inline CSS for responsive heading */}
      <style>
        {`
          @media (max-width: 600px) {
            .hero-heading {
              font-size: 2.2rem;
              line-height: 1.2;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Home;
