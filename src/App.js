import React from 'react'
import Header from './Header'
import ForSale from './Forsale'
import MyGarage from './MyGarage'
import axios from 'axios'

function App() {

  function SaleList(){
    axios.get ('./CarsList/')
    .this(response => {
      for(let i = 0; i < CarsList; i++){
        return(
          <section>
            CarsList[i]
            <button onclick >Buy Car</button>
          </section>
        ) 
      }
    })
  }

  function BuyCar(){

  }

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
