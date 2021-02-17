import React from 'react'

const Intro = (props) => (
    <div className="col-md-6" style={styles.box450}>
        <h5 style={styles.greyText}>
            {props.content}
        </h5>
        <button className="btn buttonAction" >
            Pelajari Detail Program
        </button>
    </div>
)

const styles = {
    box450: {
        height: '450px'
    },
    greyText: {
        color: '#808080',
    }
}

export default Intro