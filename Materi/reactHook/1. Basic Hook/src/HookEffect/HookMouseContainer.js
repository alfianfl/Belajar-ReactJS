
import React,{useState} from 'react';
import HookMouse from './HookMouse.js'

function HookMouseContainer() {
const [display,setDisplay] = useState(true);

  return (
    <div className="App">
        <button onClick={() => setDisplay(!display)}>Toogle display</button>
        {display && <HookMouse/>}
    </div>
  );
}

export default HookMouseContainer;
