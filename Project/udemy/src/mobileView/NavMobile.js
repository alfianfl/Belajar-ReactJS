import React,{useState} from 'react'
import '../assets/css/mobileCSS/navMobile.css'

function NavMobile(props) {

    return (
            <div className="navbar-mobile">
                {/*/.Navbar*/}
                    {/* NAVBAR FUNCTION */}
                <nav className="d-flex nav-mobile px-4">
                    <div className="logo">
                    <img src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg" width="100px"/>
                    </div>
                    <ul className={props.toggleNav ? 'slide' : null}>
                        <li>
                            <button className="btn btn-login mr-2 pt-2 pb-2 my-2 my-sm-0" type="submit"> <strong>Login</strong></button>
                            <button className="btn btn-daftar my-2 pt-2 pb-2 my-sm-0" type="submit"> <strong>Daftar</strong> </button>
                        </li>
                        <li><a href="#">Product</a></li>
                        <li><a href="/Home/help">Support</a></li>
                        <li><a href="/Home/transaksi">Transaction</a></li>
                        <li><a href="/Home/pricing">Pricing</a></li>
                        <li><a href="/Home/transaksi">Transaction</a></li>
                 
                    </ul>
                    <div className="menu-toggle" onClick={props.toggleTruncatedNav} >
                        <input type="checkbox" />
                        <span />
                        <span />
                        <span />
                    </div>
                </nav>
            </div>



        
    )
}

export default NavMobile
