
import React,{useState, useEffect} from 'react';

function HookCountFive() {
const [count,setCount] = useState(0);
const [name,setName] = useState('');

// useEffect berjalan setelah document dirender
useEffect(() => {
    console.log('use effect- updating document title')
    document.title = `you clicked ${count} times`
 },[count])  //agar useEffect berjalan pada state
  return (
    <div className="App">
        <input type='text' value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={ () => setCount(count +1) }>Count {count} </button>
    </div>
  );
}

export default HookCountFive;
