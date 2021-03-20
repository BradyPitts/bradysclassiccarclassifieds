const carsList = [];

module.exports = {
  //laod CarsList.json for ForSale component
  loadCars: (req,res) =>{
    res.status(200).send(carsList);
  },


  //add car to myGarage and remove from carsList
  buyCar: (req,res) =>{

  }
}