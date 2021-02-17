import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const[gets,setGets] = useState([]);

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts'

        axios.get(url)
            .then(response => {
                console.log(response)
                setGets(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[]);
    return (
        <div>
            <h2>Get Title From API</h2>
            {
                gets.map((get) => (
                    <ul key={get.id}>
                        <li>{get.title}</li>
                    </ul>
                ))
            }
        </div>
    )
}

export default DataFetching
