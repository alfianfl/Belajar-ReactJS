import React, { useState } from 'react'
const pemateri = {
    color:"#eb8a2f",
    fontSize:"11px"
}

function DeskripsiPemateri() {
        const text = `               
        Hey!
        Kenalkan, saya Yudi.
        Saya memiliki  lebih dari 2 tahun pengalaman sebagai instructor/facilitator di salah satu coding bootcamp terbesar di Indonesia.
        Saat ini saya bekerja di salah satu BUMN sebagai Frontend Developer.
        Saya memiliki passion yang tinggi dalam mengajar dan sharing ilmu yang saya miliki, khususnya yang berkaitan dengan software development.
        Saya juga sering membagikan tutorial tentang programing, baik melalui tulisan di medium maupun video di channel youtube saya.`
    const [isTruncated, setIsTruncated] = useState(true)
    const[showmore, setShowmore] = useState('Tampilkan lebih banyak')

    const resultTruncated = isTruncated ? text.slice(0,300) : text;

    const toggleTruncated = () =>{
        setIsTruncated(!isTruncated)
        if(showmore=='Tampilkan lebih banyak'){
            setShowmore('Tampilkan lebih sedikit')
        }else{
            setShowmore('Tampilkan lebih banyak')
        }
    }
    return (
        <div>
            <h4><strong>Instruktur</strong></h4>
                <div className="detail-pemateri">
                  <h5><strong>Yudi Krisnandi</strong></h5>
                  <span style={{color:" #73726c"}}>Instructor and Software Developer</span>
                  <div className="d-flex mt-2">
                    <div className="thumb-img">
                      {/* bgimage */}
                    </div>
                    <div className="penilaian-pemateri">
                      <ul>
                        <li><i class="fas fa-star mr-3" style={pemateri}></i> 4,6 Peringkat Instruktur</li>
                        <li><i class="fas fa-trophy mr-3" style={pemateri}></i> 37 Ulasan</li>
                        <li><i class="fas fa-user-friends mr-3" style={pemateri}></i>105 Peserta</li>
                        <li><i class="fas fa-play-circle mr-4" style={pemateri}></i>2 Kursus</li>
                      </ul>
                    </div>
                  </div>
            </div>
            <div className="biodata-pemateri mt-2">
                <p>
                    {resultTruncated}
                    <strong className="ml-2 show-more" onClick={toggleTruncated}>{showmore} <span></span></strong> 
                </p>
            </div>
        </div>
    )
}

export default DeskripsiPemateri
