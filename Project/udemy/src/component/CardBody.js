import React,{useState} from 'react'
import imageReact from '../assets/img/logoReact.png';

function CardBody() {
    const [cardImg, setCardImg] = useState(false)

    const cardOnscroll = () =>{
    
      if(window.scrollY >= 440 && window.scrollY <= 3000  ){
        setCardImg(true)
      }
      else{
        setCardImg(false)
      }
    }
  
    window.addEventListener('scroll', cardOnscroll)
    if(cardImg){
        return (
            <div className={cardImg ? 'card card-checkout animation':'card card-checkout active'} style={{position:"fixed",bottom:"90px",zIndex:"999"}}>
                <div>
                    <div className="card-body">
                                <div className="d-flex justify-content-around">
                                <h6>Personal</h6>
                                <h6>Tim</h6>
                                </div>
                                <div className="card-content mt-3">
                                <strong>Rp279.000</strong>
                                <div className="btn-checkout mt-2">
                                    <button className="btn btn-keranjang btn-danger mb-2 py-2"> <strong>Tambah ke keranjang</strong> </button>
                                    <button className="btn btn-beli py-2"><strong> Beli sekarang</strong></button>
                                    <p className="mt-3">Jaminan Uang Kembali 30 Hari</p>
                                </div>
                                <div className="cakupan-kursus mt-4">
                                    <h6> <strong> Kursus ini mencakup</strong></h6>
                                    <span><i class="fas fa-tv mr-2"></i>Video atas permintaan 18 jam</span>
                                    <span><i class="fas fa-file mr-3 mt-2"></i>2 artikel</span>
                                    <span><i class="fas fa-clock mr-2 mt-2"></i> Akses penuh seumur hidup</span>
                                    <span><i class="fas fa-mobile mr-3 mt-2"></i>Akses di perangkat seluler dan TV</span>
                                    <span><i class="fas fa-trophy mr-2 mt-2"></i>Sertifikat penyelesaian</span>
                                </div>
                                <p className="mt-4" style={{textAlign:"center"}}> <strong>Gunakan Kupon</strong></p>
                                </div>
                    </div> 
                </div>
            </div>
        )
    }else{
        return(
            <div className={cardImg ? 'card card-checkout active':'card card-checkout'} >
            <img src={imageReact} className='card-img-top' alt="..." />
            <div>
                <div className="card-body">
                            <div className="d-flex justify-content-around">
                            <h6>Personal</h6>
                            <h6>Tim</h6>
                            </div>
                            <div className="card-content mt-3">
                            <strong>Rp279.000</strong>
                            <div className="btn-checkout mt-2">
                                <button className="btn btn-keranjang btn-danger mb-2 py-2"> <strong>Tambah ke keranjang</strong> </button>
                                <button className="btn btn-beli py-2"><strong> Beli sekarang</strong></button>
                                <p className="mt-3">Jaminan Uang Kembali 30 Hari</p>
                            </div>
                            <div className="cakupan-kursus mt-4">
                                <h6> <strong> Kursus ini mencakup</strong></h6>
                                <span><i class="fas fa-tv mr-2"></i>Video atas permintaan 18 jam</span>
                                <span><i class="fas fa-file mr-3 mt-2"></i>2 artikel</span>
                                <span><i class="fas fa-clock mr-2 mt-2"></i> Akses penuh seumur hidup</span>
                                <span><i class="fas fa-mobile mr-3 mt-2"></i>Akses di perangkat seluler dan TV</span>
                                <span><i class="fas fa-trophy mr-2 mt-2"></i>Sertifikat penyelesaian</span>
                            </div>
                            <p className="mt-4" style={{textAlign:"center"}}> <strong>Gunakan Kupon</strong></p>
                    </div>
                </div> 
            </div>

        </div>
        )
    }
}

export default CardBody;
