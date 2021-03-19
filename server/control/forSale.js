const forSaleList = [];

module.exports = {
  loadCars: (req,res) =>{
    res.status(200).send(forSaleList);
  },

  buyCar: (req,res) =>{

  }
}