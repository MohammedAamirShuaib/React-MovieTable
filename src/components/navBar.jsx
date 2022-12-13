import React from 'react';
import { NavLink, Link} from 'react-router-dom';

const NavBar = () => {
    return ( 
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">App</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <NavLink className="nav-item nav-link" aria-current="page" to="/movies">Movies</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-item nav-link" to="/customers">Customers</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-item nav-link" to="/rentals">Rentals</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
                </li>
            </ul>
            </div>
        </div>
    </nav>
     );
}
 
export default NavBar;