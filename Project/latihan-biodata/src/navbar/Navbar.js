import React from 'react'
import {Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-center bg-light">
                <Link className="navbar-brand" to="/">Biodata</Link>
                <Link className="nav-item nav-link text-secondary" to="/">Data Pribadi</Link>
                <Link className="nav-item nav-link text-secondary" to="/ReactAxios">Axios</Link>
                <Link className="nav-item nav-link text-secondary" to="/devschool">DevSchool</Link>
                <Link className="nav-item nav-link text-secondary" to="/keluarga">Redux</Link>
            </nav>
        </div>
    )
}

export default Navbar
