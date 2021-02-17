import React, { Component } from 'react';
import './App.css';
import Thumb from './components/Thumb'
import unsplash from './api/unsplash'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasil : [],
      photo : '',
      client_id:'ghZwZI3z1oB5VJf1r1f-4siw23iHW1PzCk6Vg4Z9pmA'
    };
  }

  // componentDidMount() {

  // }
  inputHandler = (e) => {
    this.setState({photo:e.target.value})
  }
  buttonHandler = () => {
    unsplash
    .get('/search/photos', {
      params:{
        page:2,
        query:this.state.photo
      }
    })
      .then(response => {
        console.log(response)
        if(response.data.total === 0){
          alert('Gambar Tidak Ada')
        }else{
          this.setState({hasil:response.data.results})

        }

      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row mb-4"> 
          <div className="col-lg-4 d-flex justify-content-center">
            <input className="form-control" placeholder="Masukan input..." type="text" value={this.state.photo} onChange={this.inputHandler}/>
            <button type="button" className="btn btn-primary" onClick={this.buttonHandler}>Search</button>
          </div>
        </div>
        <Thumb
          hasil={this.state.hasil}
        />
      </div>
    );
  }
}

export default App;
