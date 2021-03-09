import axios from 'axios';
const KEY = 'AIzaSyDUNZv4TGVYc_ZPWwfCQ0w7kf6gXb_SKGI';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: "snippet",
        maxResults: 15,
        key: KEY
    },
    headers: {}
})