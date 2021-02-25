import React from 'react'

function NavKelas() {
    return (
        <div>
            <nav className="nav-class" >
                <h5><strong>React Masterclass Untuk Semua</strong></h5>
                <div className="ulasan">
                    <span className="best-seller mr-2"><strong>Terlaris</strong></span> 
                    <span className="mr-2" style={{color: "rgb(255, 196, 140)"}}>4,7 <i class="fas fa-star"></i>  </span>
                    <span> (31) 89 peserta</span>
                </div>
            </nav>
        </div>
    )
}

export default NavKelas
