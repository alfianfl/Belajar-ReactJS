
import React,{useState, useEffect} from 'react';

function HookMouse() {
const [X,setX] = useState(0);
const [Y,setY] = useState(0);

const mouseEvent = (e) => {
    console.log('mouse event')
    setX(e.clientX);
    setY(e.clientY);
}
// useEffect berjalan setelah document dirender
useEffect(() => {
    console.log('useEffect Called');
    window.addEventListener('mousemove',mouseEvent)

    return () => {
        console.log('useEffect will unmount');
        window.removeEventListener('mousemove', mouseEvent) // sama seperti componentWillUnmount di Classbased
    }
 },[])  //agar useEffect berjalan satukali saja
  return (
    <div className="App">
        <p>X : <span>{X}</span></p>
        <p>Y : <span>{Y}</span></p>
    </div>
  );
}

export default HookMouse;
