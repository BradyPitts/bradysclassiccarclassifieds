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

  saleList(carsList){
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

  
  componentDidMount(){
    //componentDidMount is a lifecycle method. It will fire after the first invocation of render
    //in the component. This is a great method for retrieving data from a server that you need 
    //in your component right away.
    this.saleList()
  }

  buyCarFn = (carId) => {
    console.log('App.js button press')
    console.log(carId)
    axios.post(`/api/buyCar/${carId}`)
    .then(res => {
      this.setState({carslist: res.data.carsList, myGarage: res.data.myGarage})
      console.log('axios call sent')
    })
    .catch(err => console.log(err))
  }


  

  sellCarFn = (carId) => {
    console.log('App.js button press')
    console.log(carId)
    axios.post(`/api/sellCar/${carId}`)
    .then(res => {
      this.setState({carslist: res.data.carsList, myGarage: res.data.myGarage})
      console.log('axios call sent')
    })
    .catch(err => console.log(err))
  }

  // function OwnedCars(){
  //   axios.get ('./CarsList/ownedCars/')
  //   .this(response => {
  //     for(let i = 0; i < ownedCars.length; i++){
  //       return(
  //         <section>
  //           CarsList[i]
  //           <button onclick={NameCar} >Rename Car</button>
  //           <button onclick={SellCar} >Sell Car</button>
  //         </section>
  //       ) 
  //     }
  //   })
  // }

  // function NameCar(){
  //   this.ownedCars.name = InputEvent
  // }

  // function SellCar(){
  //   this.SaleList.post
  //   this.ownedCars.delete
  // }
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
      sellCarFn = {this.state.sellCarFn}
      />

      </main>
      </>
    );
  }
}

export default App;
