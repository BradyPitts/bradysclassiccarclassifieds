let carsList = [null];
const myGarage = [null];
const fs = require ('fs');
let headers = {"Access-Control-Allow-Origin": "*"}

module.exports = {
  //laod CarsList.json for ForSale component
  loadCars: (req,res) =>{
    rawData = fs.readFileSync('./public/CarsList.json');
    let carsList = JSON.parse(rawData) 
    console.log(carsList)
    // res.writeHead(headers);
    res.status(200).send(carsList);
  },


  //add car to myGarage and remove from carsList
  buyCar: (req,res) =>{
    console.log('buy car invoked')
    let index = null;
    // let carsList = fs.readFileSync('./public/CarsList.json');
    carsList.foreach((car, i) => {
      if (carsList[i].id === Number(req.params.id)) index = i;
    });
    myGarage.push(carsList.index)
    console.log(carsList.index)
    carsList.splice(index, 1);
    

    let returnLists = {"carsList": carsList, "myGarage": myGarage}
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