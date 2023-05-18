import {Link} from 'react-router-dom';

function Nav()
{
    return(
        <div>
        <nav className="navbar mt-3 p-3 rounded border" style={{backgroundColor: 'Green'}}>
            <h3 className="Display-3 navbar-brand text-white"><img src="/images/bcalogo.png" alt="Logo" style={{"max-width" : "45px", "height" : "auto" }}></img> BCA Biodiversity</h3>
            <ul className="nav nav-pills navbar-right">
                <Link to="/" className='nav-link'>
                    <li className="nav-item text-white p-2"><h3>Home</h3></li>
                </Link>
                <Link to="/About" className='nav-link'>
                    <li className="nav-item text-white p-2"><h3>About</h3></li>
                </Link>
                <Link to="/Nursery" className='nav-link'>
                    <li className="nav-item text-white p-2"><h3>Nursery</h3></li>
                </Link>
                <Link to="/Hilltop" className='nav-link'>
                    <li className="nav-item text-white p-2"><h3>Hilltop</h3></li>
                </Link>
                <Link to="/Valley" className='nav-link'>
                    <li className="nav-item text-white p-2"><h3>Valley</h3></li>
                </Link>
                <Link to="/Wetlands" className='nav-link'>
                    <li className="nav-item text-white p-2"><h3>Wetlands</h3></li>
                </Link>
            </ul>
        </nav>
        </div>
    )
}

export default Nav;