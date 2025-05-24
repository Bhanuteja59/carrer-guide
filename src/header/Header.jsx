import React, { useState } from 'react';

function Header() {
  // State to toggle mobile menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // Added sticky-top class to keep header fixed at top on scroll
    <header className="header bg-green-100 shadow-sm px-3 py-4 sticky-top">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center flex-wrap">

          {/* Logo Section */}
          <div className="d-flex align-items-center">
            <h3 className="m-0 text-primary fw-bold">Career Guidance</h3>
          </div>

          {/* Mobile menu toggle button (visible only on small screens) */}
          <button
            className="navbar-toggler d-lg-none border-2 border-primary rounded-3 bg-light"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="black"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm0-4a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm0-4a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11z"
              />
            </svg>
          </button>

          {/* Navigation Menu */}
          <nav
            className={`header__menu col-12 col-lg-6 mt-3 mt-lg-0 ${
              menuOpen ? 'd-block' : 'd-none d-lg-block'
            }`}
          >
            <ul className="nav justify-content-center flex-column flex-lg-row gap-3 list-unstyled mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="/" className="nav-link text-dark fw-semibold" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link text-dark fw-semibold">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/contact" className="nav-link text-dark fw-semibold">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Placeholder for Search/Auth Buttons */}
          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0 col-12 col-lg-4 justify-content-lg-end">
            {/* Optional search or auth buttons can go here */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
