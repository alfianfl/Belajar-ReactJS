import React from 'react'


function Thumb(props) {
    return (
        <div className="thumb">
            <div className="row">
                {                
                  props.hasil.map(photo => (
                  <div className="col-lg-4 mt-3">
                    <img style={{height:"200px",width:"100%"}} alt="img" className="img-thumbnail" src={photo.urls.small}/>
                  </div>
                  ))
                }
            </div>
        </div>
    )
}

export default Thumb
