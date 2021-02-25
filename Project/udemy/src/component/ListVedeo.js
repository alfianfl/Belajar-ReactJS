import React from 'react'

function ListVedeo(props) {
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
                                <a onClick={() => props.toggle(thumb.id.videoId,thumb.snippet.title)}>Introduction</a>
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
        </div>
    )
}

export default ListVedeo
