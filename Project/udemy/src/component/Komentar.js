import React from 'react'

function Komentar(props) {
    return (
        <div>
            {
                  props.komentar.map(komentarList => (
                    <div className="komentar mb-3">
                      <div className="row">
                        <div className="col-lg-1">
                          <div className="thumb-user">
                            {/* bgimage */}
                          </div>
                        </div>
                        <div className="col-lg-11">
                          <div className="detail-ulasan">
                            <h6><strong>Suryanti setya utami</strong></h6>
                            <p>
                              <i className="fas fa-star"/><i className="fas fa-star"/><i className="fas fa-star"/><i className="fas fa-star"/><i className="fas fa-star"/>
                              <span className="ml-2" style={{color: "#73726c",fontSize:"14px"}}>3 minggu lalu</span>
                            </p>
                            <p>sangat mudah dimengerti. dan dibangingkan dgn harganya more than worth it</p>
                            <p style={{fontSize:"12px"}}>apakah ulasan anda membantu?</p>
                            <div className="icon-like">
                              <i class="far fa-thumbs-up"></i>
                              <i class="far fa-thumbs-down"></i>
                              <span>Laporkan</span>
                            </div>
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

export default Komentar
