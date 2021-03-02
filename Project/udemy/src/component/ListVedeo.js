import React,{useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function ListVedeo(props) {
  const [modal,setModal] = useState({
    modalToggle:false,
    selectedVideoId:null,
    videoTitle:''
  }) 
    // videoSelected
   const toggle = (Id,title) => {
      setModal({
        ...modal,
        modalToggle:!modal.modalToggle,
        selectedVideoId:Id,
        videoTitle:title
      })
    }
    return (
        <div>
            {
                      props.thumbVideo.map((thumb,index) => (
                        <div key={index}  onClick={ () => props.dropdownActive(index)} >
                          <div className="thumb-video d-flex justify-content-between">
                            <div>
                              <span><i class="fas fa-caret-down mr-3"></i></span>
                              <strong>{thumb.snippet.title}</strong>
                            </div>
                            <div className="time">
                              <span>5 pelajaran • 18j 3m</span>
                            </div>
                          </div>
                          <div className={props.dropdownActiveStyle(index)}>
                            <div className="detail">
                              <div>
                                <span><i class="fab fa-youtube mr-3"></i></span>
                                <a onClick={() => toggle(thumb.id.videoId,thumb.snippet.title)}>Introduction</a>
                              </div>
                              <div className="durasi">
                                <span>03:48</span>
                              </div>
                            </div>
                            <div className="detail">
                              <div>
                                <span><i class="fab fa-youtube mr-3"></i></span>
                                <a>Introduction</a>
                              </div>
                              <div className="durasi">
                                <span>03:48</span>
                              </div>
                            </div>
                            <div className="detail">
                              <div>
                                <span><i class="fab fa-youtube mr-3"></i></span>
                                <a>Introduction</a>
                              </div>
                              <div className="durasi">
                                <span>03:48</span>
                              </div>
                            </div>
                          </div>                                   
                        </div>
                      ))
                    } 
                  <Modal isOpen={modal.modalToggle} toggle={toggle} >
                    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                    <ModalBody>
                      <div className=" video-player">
                        <iframe
                          title=""
                          className="video-iframe"
                          src={`https://www.youtube.com/embed/${modal.selectedVideoId}`}
                        />
                        <h5>{modal.videoTitle}</h5>
                        <p></p>
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="secondary" onClick={toggle}>Clsoe</Button>
                    </ModalFooter>
                  </Modal>  
        </div>
    )
}

export default ListVedeo
