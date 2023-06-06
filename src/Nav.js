import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Nav() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  let lastScrollPosition = 0; // Declare and initialize lastScrollPosition

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleScroll = () => {
    // Get the current scroll position
    const currentScrollPosition = window.pageYOffset;

    // Check the scroll direction and update the navbar visibility
    if (currentScrollPosition > 100 && currentScrollPosition > lastScrollPosition) {
      setIsNavbarHidden(true);
    } else {
      setIsNavbarHidden(false);
    }

    // Update the last scroll position
    lastScrollPosition = currentScrollPosition;
  };

  

  return (
    <nav className={`navbar navbar-expand-lg p-3 rounded border fixed-top ${isNavbarHidden ? 'navbar-hidden' : ''}`} style={{ backgroundColor: 'rgba(0,0,0,0.92)' }}>
      <Link to="/" className="navbar-brand text-white">
        <img src="/images/tiwaiwakaLogoWhite.png" alt="Logo" style={{ maxWidth: '45px', height: 'auto' }}></img> Tiwaiwaka
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={handleToggle}
        
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`${isExpanded ? 'navbar-collapse' : 'collapse'} navbar-collapse`} id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/About" className="nav-link text-white" onClick={() => setIsExpanded(false)}>
              <h3>About</h3>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Nursery" className="nav-link text-white" onClick={() => setIsExpanded(false)}>
              <h3>Nursery</h3>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Hilltop" className="nav-link text-white" onClick={() => setIsExpanded(false)}>
              <h3>Hilltop</h3>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Valley" className="nav-link text-white" onClick={() => setIsExpanded(false)}>
              <h3>Valley</h3>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Wetlands" className="nav-link text-white" onClick={() => setIsExpanded(false)}>
              <h3>Wetlands</h3>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Glossary" className="nav-link text-white" onClick={() => setIsExpanded(false)}>
              <h3>Glossary</h3>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

