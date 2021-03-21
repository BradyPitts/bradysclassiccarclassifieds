let carsList = [];
let myGarage = [];
const fs = require ('fs');
let headers = {"Access-Control-Allow-Origin": "*"}

module.exports = {
  //laod CarsList.json for ForSale component
  loadCars: (req,res) =>{
    rawData = fs.readFileSync('./public/CarsList.json');
    carsList = JSON.parse(rawData) 
    console.log(carsList)
    // res.writeHead(headers);
    res.status(200).send(carsList);
  },


  //add car to myGarage and remove from carsList
  buyCar: (req,res) =>{
    console.log('buy car invoked')
    let index = null;
    let targetCar = Number(req.params.id)

    for (let x = 0; x < carsList.length; x++){

      // console.log(targetCar)
      // console.log(`current loop cheching ${carsList[x].id}`)

      console.log(`id passed in - ${targetCar}`)
      console.log(`id checking against - ${carsList[x].id}`)

      if (carsList[x].id == targetCar){

        myGarage.push(carsList[x]);
        console.log(`pre splice id = ${carsList[x].name}`);
        console.log(typeof (carsList[x]));
        carsList.splice(carsList[x].id, 1);
        // console.log('entered if statement');
        break
      }
    };
    // myGarage.push(carsList.index)
    // console.log(carsList.index)
    // carsList.splice(index, 1);
    

    let returnLists = {"carsList": carsList, "myGarage": myGarage}
    console.log(returnLists)
    res.status(200).send(returnLists);
  },

  //load cars from myGarage for MyGarage component
  loadGarage: (req,res) =>{
    res.status(200).send(myGarage);
  },

  //edit the name of a car
  renameCar: (req,res) =>{

  },

  //add a car back to carsList and remove from myGarage
  sellCar: (req,res) =>{

  },

  //add all cars back to carsList and remove all from myGarage
  sellAll: (req,res) => {

  }
}