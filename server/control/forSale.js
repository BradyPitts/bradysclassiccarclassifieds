let carsList = [];
let myGarage = [];
const fs = require ('fs');
let headers = {"Access-Control-Allow-Origin": "*"}

module.exports = {
  //laod CarsList.json for ForSale component
  loadCars: (req,res) =>{
    rawData = fs.readFileSync('./public/CarsList.json');
    carsList = JSON.parse(rawData) 
    // console.log(carsList)
    // res.writeHead(headers);
    res.status(200).send(carsList);
  },


  //add car to myGarage and remove from carsList
  buyCar: (req,res) =>{
    console.log('buy car invoked')
    let targetIndex = null;
    let targetCar = Number(req.params.id)

    for (let x = 0; x < carsList.length; x++){

      // console.log(targetCar)
      // console.log(`current loop cheching ${carsList[x].id}`)

      console.log(`id passed in - ${targetCar}`)
      console.log(`id checking against - ${carsList[x].id}`)

      if (carsList[x].id == targetCar){

        // myGarage.push(carsList[x]);

        console.log(`pre splice id = ${carsList[x].name}`);
        console.log(typeof (carsList[x]));
        console.log(carsList[x])

        // targetIndex = Number(carsList[x])

        // console.log(targetIndex)
        myGarage.push(carsList[x]);
        carsList.splice(carsList[x], 1);
        // carsList.push(myGarage[x]);
        // myGarage.splice(myGarage[x], 1);
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
    console.log('rename car invoked')
    let targetCarName = (req.params.name)
    for (let x = 0; x < myGarage.length; x++){

    }
  },

  //add a car back to carsList and remove from myGarage
  sellCar: (req,res) =>{
    console.log('sell car invoked')
    let targetIndex = null;
    let targetCar = Number(req.params.id)

    for (let x = 0; x < myGarage.length; x++){

      // console.log(targetCar)
      // console.log(`current loop cheching ${carsList[x].id}`)

      console.log(`id passed in - ${targetCar}`)
      console.log(`id checking against - ${myGarage[x].id}`)

      if (myGarage[x].id == targetCar){

        // myGarage.push(carsList[x]);

        console.log(`pre splice id = ${myGarage[x].name}`);
        console.log(typeof (myGarage[x]));
        console.log(myGarage[0])

        // targetIndex = Number(carsList[x])

        // console.log(targetIndex)
        
        // console.log('here i am')
        // console.log(myGarage[x])
        carsList.push(myGarage[x]);
        myGarage.splice(myGarage[x], 1);
        // console.log('entered if statement');
        break
      }
    };
    let returnLists = {"carsList": carsList, "myGarage": myGarage}
    console.log(returnLists)
    res.status(200).send(returnLists);
  },

  //add all cars back to carsList and remove all from myGarage
  sellAll: (req,res) => {
    console.log('server requested sell all')
    carsList.push(myGarage)
    myGarage = [];
    let returnLists = {"carsList": carsList, "myGarage": myGarage}
    res.status(200).send(returnLists)
  }
}