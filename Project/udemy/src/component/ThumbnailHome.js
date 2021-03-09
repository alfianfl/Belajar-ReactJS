import React, {useState} from 'react'
import CardBody from '../component/CardBody'

function ThumbnailHome() {
    return (
        <div>
            <div className="thumbnail d-flex   pb-4 pt-4" >
                  <div className="detail-kelas " style={{color:'white'}}>
                    <div className="link-progress">
                      <span> <strong>Pengembangan</strong></span>
                      <span style={{color:"white"}}> > </span>
                      <span> <strong>Pengembangan Web</strong> </span>
                      <span style={{color:"white"}}> > </span>
                      <span> <strong>React</strong> </span>
                    </div>
                    <h2 >React Masterclass Untuk Semua</h2>
                    <p>Belajar React dari dasar sampai advanced topik seperti context-api, redux, redux-<br/>saga, Ant design, styled-component, dll</p>
                    <div className="ulasan">
                      <span className="best-seller mr-2"><strong>Terlaris</strong></span> 
                      <span className="mr-2" style={{color: "rgb(255, 196, 140)"}}>4,7 <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
                      <span>28 rating) 82 peserta</span>
                      <p className="mt-2">Dibuat oleh <a href="#">Yudi Krisnandi</a><br/>
                        <i class="fas fa-exclamation-circle mr-1"></i>
                        <span className="mr-2"> Terakhir diperbarui 1/2021 </span>
                        <i class="fas fa-globe mr-1"></i>
                        <span> Indonesia </span>
                      </p>
                    </div>
                    <div className="button-detail-kelas mt-3">
                      <button className="btn mr-2" ><strong className="mr-1">Wishlist</strong> <i class="fas fa-heart"></i></button>
                      <button className="btn mr-2"><strong className="mr-1">Bagikan</strong> <i class="fas fa-share"></i></button>
                      <button className="btn"><strong>Hadian kursus ini</strong></button>
                    </div>
                  </div>
                  <div className="grid-card">
                    <div>
                      <CardBody/>
                    </div>
                  </div>
                </div>    
        </div>
    )
}

export default ThumbnailHome
