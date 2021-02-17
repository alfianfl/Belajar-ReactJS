import React from 'react'

const Keluarga = () => (
        <div className="container">
                <div className="card mt-5 shadow-lg " style={{marginBottom:"100px"}}>
                    <div className="card-body">
                        <h2 style={{textAlign:"center"}}>Data Keluarga</h2>
                        <h5 className="text-secondary">Data Ayah</h5>
                        <div className="form-group mb-3 mt-4">
                            <div className="col-sm-12 d-flex">
                                <label className="control-label col-2" htmlFor="email">Nama :</label>
                                <input type="text" className="form-control" id="email" placeholder="Nama ayah..." name="ttl" />
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <div className="col-sm-12 d-flex"> 
                                <label className="control-label col-2" htmlFor="pwd">Pendidikan  :</label>         
                                <select id="inputState" className="form-control">
                                    <option selected>S1</option>
                                    <option>S2</option>
                                    <option>SMA</option>
                                    <option>Diploma</option>
                                    <option>Lainnya...</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <div className="col-sm-12 d-flex"> 
                                <label className="control-label col-2" htmlFor="pwd">Pekerjaan  :</label>         
                                <select id="inputState" className="form-control">
                                    <option>Wiraswasta</option>
                                    <option>wirausaha</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <div className="col-sm-12 d-flex"> 
                            <label className="control-label col-2" htmlFor="pwd">Hidup  :</label>         
                            <select id="inputState" className="form-control">
                                    <option selected>Meninggal</option>
                                    <option>Hidup</option>
                            </select>
                            </div>
                        </div>
                        <h5 className="text-secondary">Data Ibu</h5>
                            <div className="form-group mb-3 mt-4">
                                <div className="col-sm-12 d-flex">
                                    <label className="control-label col-2" htmlFor="email">Nama :</label>
                                    <input type="text" className="form-control" id="email" placeholder="Nama ayah..." name="ttl" />
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <div className="col-sm-12 d-flex"> 
                                    <label className="control-label col-2" htmlFor="pwd">Pendidikan  :</label>         
                                    <select id="inputState" className="form-control">
                                        <option selected>S1</option>
                                        <option>S2</option>
                                        <option>SMA</option>
                                        <option>Diploma</option>
                                        <option>Lainnya...</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <div className="col-sm-12 d-flex"> 
                                    <label className="control-label col-2" htmlFor="pwd">Pekerjaan  :</label>         
                                    <select id="inputState" className="form-control">
                                        <option>Wiraswasta</option>
                                        <option>wirausaha</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <div className="col-sm-12 d-flex"> 
                                <label className="control-label col-2" htmlFor="pwd">Hidup  :</label>         
                                <select id="inputState" className="form-control">
                                        <option selected>Hidup</option>
                                        <option>Meninggal</option>
                                </select>
                                </div>
                            </div>
                        </div>
                </div>
        </div>

)

export default Keluarga;