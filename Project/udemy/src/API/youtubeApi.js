import axios from 'axios';
const KEY ='AIzaSyDqAAD9i8t4pjqgEMovjQ1d7WUEb9ex-Yo';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: "snippet",
        maxResults: 10,
        key: KEY
    },
    headers: {}
})