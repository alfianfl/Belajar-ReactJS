import './App.css';
import './CSS/main.css';
import React, {Component} from 'react';
import MenuMakanan from './components/MenuMakanan/MenuMakanan.js';
import MenuMinuman from './components/MenuMinuman/MenuMinuman.js';
class App extends Component {
  constructor() {
    super()
    this.state = {
      namaResto : "codepolitan",
      gantiNamaResto: "progammer",
      namaPembeli: "",
      keterangan:"",
      jenisPembayaran:"",
      menuMakanan: [
        {
          nama:"Ayam Goreng",
          harga:50000,
          stock:10
        },
        {
          nama:"Ayam Bakar",
          harga:55000,
          stock:0
        }
      ],
      menuMinuman: [
        {
          nama:"Josu",
          harga:1000,
          stock:10
        },
        {
          nama:"Milo",
          harga:3000,
          stock:10
        },
        {
          nama:"Nutrisari",
          harga:5500,
          stock:10
        },
        {
          nama:"Marimas",
          harga:5000,
          stock:10
        },
        {
          nama:"Teh Sisri",
          harga:50000,
          stock:10
        }
      ]

    }
  }

  handleGantiNama = (nama) =>{
    if(this.state.namaResto=="Progammer"){
      this.setState({namaResto:"codepolitan",gantiNamaResto: "progammer"})
    }else{
      this.setState({namaResto:nama,gantiNamaResto: "codepolitan"})
    }
  }
  handleOnChange = (event) => {
    var name = event.target.name;
    var value = event.target.value;

    this.setState({[name]:value});
  }

  render() {
    return (
      <div className="main-content-style">
        <div className="App">
          <h1>Cafe and Resto {this.state.namaResto}</h1>
          <button className="btn btn-primary" onClick={() => this.handleGantiNama("Progammer")} > Ganti Nama Resto {this.state.gantiNamaResto}</button>
          <div className="row" style={{marginTop:"10px"}}>
            <div className="col-md-4 offset-md-4">
              <form>
              <div className="form-group">
                <label>Nama Pembeli:</label>
                <input 
                  onChange={this.handleOnChange}
                  className="form-control"
                  name="namaPembeli"
                  value={this.state.namaPembeli} 
                />
                <small>Nama Pembeli : {this.state.namaPembeli}</small>
              </div>
              <div className="form-group">
                <label>Keterangan:</label>
                <textarea 
                  onChange={this.handleOnChange}
                  className="form-control"
                  name="keterangan"
                  value={this.state.keterangan} 
                />
                <small>Keterangan : {this.state.keterangan}</small>
              </div>
              <div className="form-group">
                <label>Jenis Pembayaran:</label>
                <select                   
                  onChange={this.handleOnChange}
                  className="form-control"
                  name="jenisPembayaran"
                  value={this.state.jenisPembayaran} >

                  <option value="cash">Cash</option>
                  <option value="Kredit">Kredit</option>
                  <option value="Voucher">Voucher</option>
                </select>
                <small>Jenis Pembayaran : {this.state.jenisPembayaran}</small>
              </div>
              </form>
            </div>       
          </div>
          <h2>Menu Makanan</h2>
            <MenuMakanan 
              namaMenu={this.state.menuMakanan[0].nama} 
              hargaMenu={this.state.menuMakanan[0].harga}
              stockMenu={this.state.menuMakanan[0].stock}
            />
            <MenuMakanan 
              namaMenu={this.state.menuMakanan[1].nama} 
              hargaMenu={this.state.menuMakanan[1].harga}
              stockMenu={this.state.menuMakanan[1].stock}
            />
          <h2>Menu Minuman</h2>
            {this.state.menuMinuman.map(menu => {
              return <MenuMinuman 
                namaMenu={menu.nama} 
                hargaMenu={menu.harga} 
                stockMenu={menu.stock} 
              />
            })}
        </div>
      </div>
    );
  }
}

export default App;
