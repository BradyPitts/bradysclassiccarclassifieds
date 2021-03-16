import React from 'react'
import Header from './Header'
import ForSale from './Forsale'
import MyGarage from './MyGarage'
import axios from 'axios'

function App() {

  // function SaleList(){
  //   axios.get ('./CarsList/carsList/')
  //   .this(response => {
  //     for(let i = 0; i < carsList.length; i++){
  //       return(
  //         <section>
  //           CarsList[i]
  //           <button onclick={BuyCar} >Buy Car</button>
  //         </section>
  //       ) 
  //     }
  //   })
  // }

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

  return (
    <>
    
    <Header />
    
    <main>
    <ForSale />
    <MyGarage />
    </main>
    </>
  );
}

export default App;
