import React from 'react'

function FormUlasan() {
    return (
        <div>
            <h4><strong>Ulasan</strong></h4>
                <div className="w-100 mt-3">
                  <div className="row">
                      <div className="col-md-12 col-lg-6">
                        <div className="form-group form-ulasan d-flex" style={{width:"100%"}}>
                        <input type="text" placeholder="Cari ulasan" className="form-control py-4  "/>
                        <span><i style={{margin:"auto"}} className="fas fa-search"/></span>
                        </div>
                      </div>
                    <div className="col-md-12 col-lg-6">
                        <div className="dropdown show   "style={{width:"40%"}}>
                            <a class="btn dropdown-toggle dropdown-peringkat py-2"  href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Semua peringkat
                            </a>
                            <div className="dropdown-menu " aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item" href="#">Lima bintang</a>
                                <a className="dropdown-item" href="#">Empat bintang</a>
                                <a className="dropdown-item" href="#">Tiga bintang</a>
                                <a className="dropdown-item" href="#">Dua bintang</a>
                                <a className="dropdown-item" href="#">Satu bintang</a>
                            </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
        
    )
}

export default FormUlasan
