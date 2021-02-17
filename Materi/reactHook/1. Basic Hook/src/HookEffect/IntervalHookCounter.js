import React,{useState,useEffect} from 'react'

function IntervalHookCounter() {
    const [count,setCount] = useState(0);

    const tick = () => {
        setCount(prevCount => prevCount +1)
    }

    useEffect(() => {
        
        console.log('useEffect running')
        const interval = setInterval(tick,1000);

        return () => {
            clearInterval(tick);
        }
    },[]); //agar useEffect hanya terjadi satu kali
    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter;
