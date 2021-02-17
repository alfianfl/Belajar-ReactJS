import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetchingPartTwo() {
    const[get,setGet] = useState([]); 
    const[id,setID] = useState(1);
    const[IDFromButton,setIDFromButton] = useState(1);

    const buttonHeandler = () => {
        setIDFromButton(id);
    }
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${IDFromButton}`

        axios.get(url)
            .then(response => {
                console.log(response)
                setGet(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[IDFromButton]);
    return (
        <div>
            <h2>Get Data Title From API</h2>
            <input type="text" value={id} onChange={e => setID(e.target.value)}/>
            <button type="button" onClick={buttonHeandler}>Fetch Post</button>
            {get.title}
            {/* {
                gets.map((get) => (
                    <ul key={get.id}>
                        <li>{get.title}</li>
                    </ul>
                ))
            } */}
        </div>
    )
}

export default DataFetchingPartTwo
