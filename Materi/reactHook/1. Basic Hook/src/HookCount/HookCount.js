
import React,{useState} from 'react';

function HookCount() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <button onClick={() => setCount(count+1)}>count {count}</button>
    </div>
  );
}

export default HookCount;
