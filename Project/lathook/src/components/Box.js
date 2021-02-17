import React,{useState} from 'react'
import '../App.css'


function Box(props) {
    const [appState,setappState] = useState({
        activeObjects: null,
        objects: [{id:1},{id:2},{id:3},{id:4}]
    })
    function toggleActive(index) {
        setappState({...appState, activeObjects:appState.objects[index]})

    }
    return (
        <div>
            {
                appState.objects.map((object,index)=>(
                    <div 
                    className="box"
                    key={index}
                    onClick={() => toggleActive(index)}
                    >
                        {props.id}
                    </div>
                ))   
            }
        </div>
    )
}

export default Box
