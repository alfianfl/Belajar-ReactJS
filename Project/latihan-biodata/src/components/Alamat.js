import React from 'react'

const Alamat = () => (
        <div className="container">
            <form className="form-horizontal mt-5" action="/action_page.php">
                <div className="card shadow-lg">
                    <div className="card-body">
                        <h2 style={{textAlign:"center"}}>Alamat</h2>
                        <div className="form-group mb-3 mt-5">
                            <div className="col-sm-12 d-flex">
                            <label for="floatingTextarea2" className="col-2">Alamat</label>
                            <textarea className="form-control" placeholder="Alamat..." id="floatingTextarea2" style={{height: "100px"}}></textarea>
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <div className="col-sm-12 d-flex"> 
                            <label className="control-label col-2" htmlFor="pwd">Kota  :</label>         
                                <input type="text" className="form-control" id="pwd" placeholder="Kota..." name="pwd" />
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <div className="col-sm-12 d-flex"> 
                            <label className="control-label col-2" htmlFor="pwd">Kode POS  :</label>         
                                <input type="number" className="form-control" id="pwd" placeholder="45xxx" name="pwd" />
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <div className="col-sm-12 d-flex"> 
                            <label className="control-label col-2" htmlFor="pwd">No Telp  :</label>         
                                <input type="number" className="form-control" id="pwd" placeholder="081723xxx" name="pwd" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

)

export default Alamat;