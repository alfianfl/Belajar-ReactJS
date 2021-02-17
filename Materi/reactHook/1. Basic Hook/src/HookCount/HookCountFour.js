
import React,{useState} from 'react';

function HookCountFour() {
  const [items,setItems] = useState([]);
  const addItem = () => {
    setItems([...items, {
            id: items.length,
            value:Math.floor(Math.random()*10)+1
        }])
  }
  const ubahwarna = () =>{
        alert('ubah warna jadi merah')

  }
  return (
    <div className="App">
        <button className="button" onClick={ubahwarna}>Ubahwarna</button>
        <button onClick={addItem}>Add Number</button>
        <ul>
            {items.map(item => { 
                return <li key={item.id}>{item.value}</li>
            })}
        </ul>
    </div>
  );
}

export default HookCountFour;
