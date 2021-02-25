import React, { Component } from 'react';
import '../assets/css/home.css'
import imageReact from '../assets/img/logoReact.png';
import WhatYouLearn from '../component/WhatYouLearn';
import youtubeApi from '../API/youtubeApi';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Deskripsi from '../component/Deskripsi'
import NavKelas from '../component/NavKelas'
import ListVideo from '../component/ListVedeo'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thumbVideo : [],
      dropdownActive:null,
      selectedVideoId: null,
      videoChannel:'',
      videoTitle:'',
      recomList:[{},{},{},{}],
      videoImage:null,
      modal:false,
      isTruncated:true,
      showmore:'Tampilkan lebih banyak'
    };
  }
  dropdownActive = (index) =>{
    this.setState({
      dropdownActive:this.state.thumbVideo[index],
      active:true
    })
  }
  dropdownActiveStyle = (index) =>{
    if(this.state.dropdownActive === this.state.thumbVideo[index] ){
      return 'detail-video '

    }else{
      return 'detail-video display-none'
    }
  }
  componentDidMount(){
    youtubeApi.get('/search',{
      params: {
        q: 'india'
      }
    })
    .then(response => {
      this.setState({
        thumbVideo: response.data.items,
        videoImage:response.data.items[0].snippet.thumbnails.default.url
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  // videoSelected
  toggle = (Id,title) => {
    this.setState({
      modal:!this.state.modal,
      selectedVideoId:Id,
      videoTitle:title
    })
  }

  // toggle
  toggleTruncated = () =>{
    this.setState({
      isTruncated:!this.state.isTruncated
    })
    if(this.state.showmore=='Tampilkan lebih banyak'){
        this.setState({showmore:'Tampilkan lebih sedikit'})
    }else{
      this.setState({showmore:'Tampilkan lebih banyak'})
    }
}
  render() {
    const resultTruncated = this.state.isTruncated ? this.state.thumbVideo.slice(0,9) : this.state.thumbVideo;
    return (
      <div>
        <NavKelas/>
        <div className="row">
          <div className=" col-lg-12">
            <div className="thumbnail pb-5 pt-5 pl-5" >
              <div className="row">
                <div className="col-lg-7">
                  <div className="link-progress">
                    <span> <strong>Pengembangan</strong></span>
                    <span style={{color:"white"}}> > </span>
                    <span> <strong>Pengembangan Web</strong> </span>
                    <span style={{color:"white"}}> > </span>
                    <span> <strong>React</strong> </span>
                  </div>
                  <div className="detail-kelas" style={{color:'white',width:"100%"}}>
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
                </div>
                <div className="col-lg-5">
                  <div className="card card-checkout" style={{marginLeft:"60px"}}>
                      <img src={imageReact} className="card-img-top" alt="..." />
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
              </div>
            </div>
          </div>
          <div className="container-fluid py-4">
            <div className="row">
              <div className="col-lg-8">
              < WhatYouLearn />
                <div className="konten-kursus mt-4">
                  <h4 > <strong> Konten kursus</strong></h4>
                  <div className="detail-pengerjaan d-flex justify-content-between mt-4 mb-2">
                    <span>13 bagian • 149 pelajaran • 18j 3m total durasi</span>
                    <strong><a href="#" style={{color:"#0f7c90"}}>Perluas semua bagian</a></strong>
                  </div>
                  <div className="list-video ">
                    <ListVideo
                      thumbVideo={resultTruncated}
                      dropdownActiveStyle={(index) => this.dropdownActiveStyle(index)}
                      dropdownActive={(index) => this.dropdownActive(index)}
                      toggle={(videoId,title) => this.toggle(videoId,title)}
                    />
                  <div>
                    <button className="btn btn-login w-100 mt-3" onClick={this.toggleTruncated}> <strong>{this.state.showmore}</strong> </button>
                  </div>   
                  </div>
                </div>
              </div>
            </div> 
            <div className="row mt-4">
              <div className="col-lg-7">
                <h4><strong>Persyaratan</strong></h4>
                <ul className="dot-list mt-3">
                    <li>Dasar - dasar HTML dan CSS</li>
                    <li>Dasar - dasar pemprograman seperti varibale, if statement, looping, dan function</li>
                    <li>Terbiasa menggunakan code editor seperti Visual Studio, Sublime, Atom , atau editor lainnya</li>
                </ul>
                <div className="deskripsi mt-4">
                  <Deskripsi/>     
                </div>     
              </div>
            </div>
            <div className="row mt-4 rekomendasi-container">
              <div className="col-lg-8 ">
                <h4><strong>Peserta juga membeli</strong></h4>
                {
                  this.state.recomList.map(recom => (
                    <div className="rekomendasi">
                      <div className="row detail-rekomendasi">
                        <div className="col-lg-12 d-flex justify-content-between">
                          <div className="d-flex justify-content-between">
                            <img className="mr-2" src={this.state.videoImage}/>
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
            </div>
            <div className="row">
              
            </div>       
          </div>
          <div>
            <Modal isOpen={this.state.modal} toggle={this.toggle} >
              <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
              <ModalBody>
                <div className=" video-player">
                  <iframe
                    title=""
                    className="video-iframe"
                    src={`https://www.youtube.com/embed/${this.state.selectedVideoId}`}
                  />
                  <h5>{this.state.videoTitle}</h5>
                  <p></p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggle}>Clsoe</Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
