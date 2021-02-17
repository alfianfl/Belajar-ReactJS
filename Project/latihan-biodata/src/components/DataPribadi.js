import React from 'react'
import Keluarga from './Keluarga'
import Alamat from './Alamat'

const DataPribadi = () => (
        <div className="container">
            <form className="form-horizontal mt-5" action="/action_page.php">
                <div className="card shadow-lg">
                    <div className="card-body">
                        <h2 style={{textAlign:"center"}}>Data Pribadi</h2>
                        <div className="form-group mb-3 mt-5">
                            <div className="col-sm-12 d-flex">
                                <label className="control-label col-2" htmlFor="email">Tempat Lahir :</label>
                                <input type="email" className="form-control" id="email" placeholder="Tempat Lahir" name="ttl" />
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <div className="col-sm-12 d-flex"> 
                            <label className="control-label col-2" htmlFor="pwd">Tanggal Lahir  :</label>         
                                <input type="date" className="form-control" id="pwd" placeholder="yy/mm/yyyy" name="pwd" />
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <div className="col-sm-12 d-flex"> 
                                <label className="control-label col-2" htmlFor="pwd">Jenis Kelamin  :</label>         
                                <select id="inputState" className="form-control">
                                    <option selected>L</option>
                                    <option>P</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <div className="col-sm-12 d-flex"> 
                                <label className="control-label col-2" htmlFor="pwd">Golongan Darah  :</label>         
                                <select id="inputState" className="form-control">
                                    <option selected>A</option>
                                    <option>B</option>
                                    <option>AB</option>
                                    <option>O</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <div className="col-sm-12 d-flex"> 
                            <label className="control-label col-2" htmlFor="pwd">NIK  :</label>         
                                <input type="number" className="form-control" id="pwd" placeholder="140810xxxxx" name="pwd" />
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <div className="col-sm-12 d-flex"> 
                            <label className="control-label col-2" htmlFor="pwd">Agama  :</label>         
                            <select id="inputState" className="form-control">
                                    <option selected>Islam</option>
                                    <option>Kristen</option>
                                    <option>Yahudi</option>
                                    <option>Budha</option>
                            </select>
                            </div>
                        </div>
                    </div>
                </div>
                <Alamat/>
                <Keluarga/>
                <div className="card mt-5 shadow-lg fixed-bottom">
                    <div className="card-body d-flex justify-content-end">
                        <button className="btn btn-secondary btn-md ">Simpan</button>
                        <button className="btn btn-secondary btn-md margin-left ">Ulang</button>
                    </div>
                </div>
            </form>
        </div>

)

export default DataPribadi;