import React from 'react'

export default function MyGarage(){

  let myMoney = 10000;


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

      {/* ${OwnedCars()} */}
      <section>
        <h4>Owned Car</h4>
        <br />
        <button>Sell Car</button>
      </section>
      <section>
        <h4>Owned Car</h4>
        <br />
        <button>Sell Car</button>
      </section>



    </aside>
    
  );
}