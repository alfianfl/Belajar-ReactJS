
import React,{useState} from 'react';

function HookCountTwo() {
  const initialState = 0;
  const [count, setCount] = useState(initialState);

  const incrementfive = () => {
    for(let i=0; i<5;i++){
      setCount(prevCount => prevCount + 1)
    }
  }
  return (
    <div className="App">
      count : {count}
      <button onClick={() => setCount(initialState)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
      <button onClick={incrementfive}>Increment 5</button>
    </div>
  );
}

export default HookCountTwo;
