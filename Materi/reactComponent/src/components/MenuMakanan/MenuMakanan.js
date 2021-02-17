import React,{useState} from 'react';
const MenuMakanan = (props) => {
  const [nama, setNama] = useState('alfian');
  if(props.stockMenu == 0){
    return null
  }else {
    return (
        <div style={{border: "1px solid black", width: 300, margin: 'auto'}}>
          <h1>nama {nama}</h1>
          <button onClick={() =>{
            if(nama=='fadhil'){
              setNama('alfian')
            }else{
              setNama('fadhil')
            }
            } }>Ubah nama</button>
          <p>Nama Menu:{ props.namaMenu}</p>
          <p>Harga: {props.hargaMenu}</p>
          <p>Stock: {props.stockMenu}</p>
        </div>
      )
  }
}

export default MenuMakanan;