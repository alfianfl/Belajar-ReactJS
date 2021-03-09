import React from 'react'
import '../assets/css/navbar.css'
import { Link} from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-desktop navbar-expand-lg navbar-light bg-light" style={{zIndex:"2"}}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse pt-2 pb-2 navbar-collapse " id="navbarTogglerDemo01">
                    <ul className="navbar-nav mt-2 mt-lg-0 m-auto">
                        <li className="nav-item m">
                            <Link className="navbar-brand" to='/'><img src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg" width="100px"/></Link>
                        </li>
                        <li className="nav-item mr-3">
                            <Link className="nav-link" to='#'>Topik</Link>
                        </li>
                        <li className="nav-item mr-3">
                            <form className="form-inline my-2 my-lg-0">
                                <div className="input-group input-search input-group-lg" >
                                    {/* <i class="fas fa-search"></i> */}
                                    <input type="text" placeholder="cari apa saja" className="form-control " style={{borderRadius:"50px",fontSize:"14px"}} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                                </div>
                            </form>
                        </li>
                        <li className="nav-item mr-3">
                            <Link className="nav-link" to='/teaching'>Mengajar di Udemy</Link>
                        </li>
                        <li className="nav-item mr-3">
                            <a className="nav-link" href="#"><i class="fas fa-shopping-cart" style={{fontSize:"18px"}}></i></a>
                        </li>
                        <li className="nav-item">
                            <div className="udlite-btn">
                                <button className="btn btn-login mr-2 pt-2 pb-2 my-2 my-sm-0" type="submit"> <strong>Login</strong></button>
                                <button className="btn btn-daftar my-2 pt-2 pb-2 my-sm-0" type="submit"> <strong>Daftar</strong> </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
