import React from 'react'
import OwnedCar from './OwnedCar'


  let myMoney = 10000;


const MyGarage = (props) =>{
  
  console.log('displaying owned cars')

  const myGarage = props.myGarage.map((myGarage, i ) => (
    <OwnedCar 
      key={i}
      carId={myGarage.id}
      img={myGarage.img}
      name={myGarage.name}
      make={myGarage.make}
      model={myGarage.model}
      year={myGarage.year}
      price={myGarage.price}
      sellCarFn = {props.sellCarFn}
      reNameCarFn = {props.reNameCarFn}
    />
    
  ));


  // function OwnedList(){
  //   return(
  //     <section>
  //       ${this.ownedCars}

  //       <button onclick={SellCar} >
  //         Sell Car
  //       </button>
        
  //     </section>
  //   )
  // }


    
  return(
    
    <aside>
      <h3>Your Owned Cars</h3>
      <h5>Your Money ${myMoney}</h5>
      {/* <button onClick = {()=>this.sellAllFn()}>Sell All</button> */}
      {myGarage}
    </aside>
    
  );
}

export default  MyGarage;