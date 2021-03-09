import React from 'react'
import '../assets/css/footer.css'

function Footer() {
    return (
        <>
            <div className="row pb-5 footer">
                <div className="col-lg-12">
                    <div className="nav-footer">
                        <div className="row ">
                            <div className="col-lg-12 ">
                                <div className=" list-footer-nav ml-2 " >
                                    <ul>
                                        <li>Udemy for Business</li>
                                        <li>Mengajar di Udemy</li>
                                        <li>Dapatkan aplikasi</li>
                                        <li>Tentang kami</li> 
                                        <li>Hubungi kami</li>       
                                    </ul>
                                    <ul>
                                        <li>Karier</li>
                                        <li>Blog</li>
                                        <li>Bantuan dan Dukungan</li>
                                        <li>Afiliasi</li>        
                                    </ul>
                                    <ul>
                                        <li>Persyaratan</li>
                                        <li>Kebijakan privasi</li>
                                        <li>Peta situs</li>
                                        <li>Kursus unggulan</li>        
                                    </ul>
                                </div>
                                <div className="btnBahasa">
                                    <div className="btn-group dropup mr-3" >
                                        <button type="button" className="btn btn-bahasa dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <strong><i class="fas fa-globe mr-2"></i><span>Bahasa Indonesia</span></strong>
                                        </button>
                                        <div className="dropdown-menu">
                                            {/* Dropdown menu links */}
                                        </div>
                                    </div> 
                                </div>
                            </div>     
                        </div>
                        <div className="row mr-3 ml-4 mt-5 last-footer">
                            <div className="col-lg-12 d-flex justify-content-between \">
                                <img src="https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg" width="100px"/>
                                <span style={{color:"#73726c",fontSize:"12px"}}>© 2021 Udemy, Inc.</span> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
