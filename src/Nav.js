import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Nav() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className="navbar navbar-expand-lg p-3 rounded border fixed-top" style={{ backgroundColor: 'rgba(0,0,0,0.92)'  }}>
      <Link to="/" className="navbar-brand text-white">
        <img src="/images/bcalogo.png" alt="Logo" style={{ maxWidth: '45px', height: 'auto' }}></img> BCA Biodiversity
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
            <Link to="/" className="nav-link text-white" onClick={() => setIsExpanded(false)}>
              <h3>Home</h3>
            </Link>
          </li>
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
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

// import {Link} from 'react-router-dom';
// import './styles.css';

// function Nav()
// {
//     return(
//         <nav className="navbar p-3 rounded border" style={{backgroundColor: "rgba(0,0,0,0.92)"}}>
//             <h3 className="Display-3 navbar-brand text-white"><img src="/images/bcalogo.png" alt="Logo" style={{"max-width" : "45px", "height" : "auto" }}></img> BCA Biodiversity</h3>
//             <ul className="nav nav-pills navbar-right">
//                 <Link to="/" className='nav-link'>
//                     <li className="nav-item text-white p-3"><h3>Home</h3></li>
//                 </Link>
//                 <Link to="/About" className='nav-link'>
//                     <li className="nav-item text-white p-3"><h3>About</h3></li>
//                 </Link>
//                 <Link to="/Nursery" className='nav-link'>
//                     <li className="nav-item text-white p-3"><h3>Nursery</h3></li>
//                 </Link>
//                 <Link to="/Hilltop" className='nav-link'>
//                     <li className="nav-item text-white p-3"><h3>Hilltop</h3></li>
//                 </Link>
//                 <Link to="/Valley" className='nav-link'>
//                     <li className="nav-item text-white p-3"><h3>Valley</h3></li>
//                 </Link>
//                 <Link to="/Wetlands" className='nav-link'>
//                     <li className="nav-item text-white p-3"><h3>Wetlands</h3></li>
//                 </Link>
//             </ul>

//         </nav>
//     )
// }

// export default Nav;