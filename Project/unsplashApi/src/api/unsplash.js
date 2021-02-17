import axios from 'axios';
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
        'Client-ID ghZwZI3z1oB5VJf1r1f-4siw23iHW1PzCk6Vg4Z9pmA'
    }
})