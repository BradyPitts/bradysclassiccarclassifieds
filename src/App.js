import React, { Component } from 'react'
import Header from './components/Header'
import ForSale from './components/Forsale'
import MyGarage from './components/MyGarage'
import axios from 'axios'
// import './CarsList.json'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      carsList: []
    }
    this.saleList = this.saleList.bind(this);
  }
  
  saleList(carsList){
    axios.get ('./CarsList.json')
      .then(res => {
      this.setState({ carsList: res.data })
      console.log(this.state.carsList)
    })
  }

  
  componentDidMount(){
    //componentDidMount is a lifecycle method. It will fire after the first invocation of render
    //in the component. This is a great method for retrieving data from a server that you need 
    //in your component right away.
    this.saleList()
  }

  // function BuyCar(){
  //   this.ownedList.post
  //   this.SaleList.delete
  // }

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
    console.log(this.state.carsList)
    return (
      <>
      <Header />
      <main>
      <ForSale carsList={this.state.carsList}/>
      <MyGarage />
      </main>
      </>
    );
  }
}

export default App;
