import React, { Component } from 'react'
import axios from 'axios'
import Header from './components/Header'
import ForSale from './components/Forsale'
import MyGarage from './components/MyGarage'
import Car from './components/Car'
// import './CarsList.json'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      carsList: [],
      myGarage: []
    }
    this.saleList = this.saleList.bind(this);
  }

  saleList(){
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.get('/api/carsList/') 
      .then(res => {
      this.setState({ carsList: res.data })
      console.log('carslist loaded')
      // console.log(this.state.carsList)
    })
    .catch(error =>{
      alert('Error Sale List not loaded')
    })
  }


  
  buyCarFn = (carId) => {
    console.log('App.js buy button press')
    console.log(carId)
    axios.post(`/api/buyCar/${carId}`)
    .then(res => {
      this.setState({carslist: res.data.carsList, myGarage: res.data.myGarage})
      
      console.log('server response')
      console.log(res.data)
    })
    .catch(err => console.log(err))
  }




  sellCarFn = (carId) => {
    console.log('App.js sellbutton press')
    console.log(carId)
    axios.post(`/api/sellCar/${carId}`)
    .then(res => {
      this.setState({carslist: res.data.carsList, myGarage: res.data.myGarage})
      console.log('axios call sent')
    })
    .catch(err => console.log(err))
  }



  sellAllFn = () =>{
    console.log('sell all pressed')
    axios.delete('/api/sellAll')
    .then(res =>{
      this.setState({carsList: res.data.carsList, myGarage: res.data.myGarage})
    })
    .catch(err => console.log(err))
  }

  // reNameCarFn = (carId, name) =>{
  //   console.log('rename Car pressed')
  //   axios.put(`/api/reNameCar/${carID}${name}`)
  //   .then(res =>{
  //     console.log('rename server responded')
  //     this.setState({myGarage: res.data})
  //   })
  //   .catch(err => console.log(err))
  // }

  
  componentDidMount(){
    //componentDidMount is a lifecycle method. It will fire after the first invocation of render
    //in the component. This is a great method for retrieving data from a server that you need 
    //in your component right away.
    this.saleList()
  }


  render() {
    // console.log(this.state.carsList)
    return (
      <>
      <Header />
      <main>
      <ForSale 
      carsList={this.state.carsList}
      buyCarFn = {this.buyCarFn}
      />

      <MyGarage
      myGarage = {this.state.myGarage} 
      sellCarFn = {this.sellCarFn}
      sellAllFn = {this.sellAllFn}
      reNameCarFn = {this.reNameCarFn}
      />

      </main>
      </>
    );
  }
}

export default App;
