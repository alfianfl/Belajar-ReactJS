import React from 'react'

function Rekomendasi(props) {
    return (
        <div>
            <h4><strong>Peserta juga membeli</strong></h4>
                {
                  props.recomList.map(recom => (
                    <div className="rekomendasi">
                      <div className="row detail-rekomendasi">
                        <div className="col-lg-12 d-flex justify-content-between">
                          <div className="d-flex justify-content-between">
                            <img className="mr-2" src={props.image}/>
                            <div>
                              <h6><strong>Pemrogaman Kotlin: Pemula sampai mahir</strong></h6>
                              <span className="best-seller mr-2"><strong>Terlaris </strong> </span>
                              <span className="total-jam"><strong>18 total jam </strong> </span>
                              <span> Diperbarui 1/2021 </span>
                            </div>
                          </div>
                          <div className=" rating d-flex justify-content-between">
                            <span style={{color:" #be5a0e"}}><strong>4.9</strong><i class=" ml-1 fas fa-star"></i></span>
                            <span><i class="far fa-user mr-1"></i>52</span>
                            <span> <strong>Rp. 179.000</strong></span>
                            <span style={{color:"#0f7c90",fontSize:"25px"}}><i class="far fa-heart"></i></span>
                          </div>
                        </div>
                      </div>
                      <div className="line" style={{marginTop:"15px"}}></div>
                    </div>
                  ))
                }
        </div>
    )
}

export default Rekomendasi
