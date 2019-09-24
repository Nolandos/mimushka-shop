const Product = require('./models/productsModel');

const loadTestData = async () => {

  const data = [
    {
        id: 1,
        name: "Produkt 1",
        price: "120zł",
        additionalInfo: "Ostatnia sztuka",
        image: "./books.png",
    },{
        id: 2,
        name: "Produkt 2",
        price: "130zł",
        additionalInfo: "Promocja",
        image: "./books.png",
    },{
        id: 3,
        name: "Produkt 3",
        price: "130zł",
        additionalInfo: "Promocja",
        image: "./books.png",
    },{
        id: 4,
        name: "Produkt 4",
        price: "130zł",
        additionalInfo: "Promocja",
        image: "./books.png",
    },{
        id: 5,
        name: "Produkt 5",
        price: "130zł",
        additionalInfo: "Promocja",
        image: "./books.png",
    },{
        id: 6,
        name: "Produkt 6",
        price: "130zł",
        additionalInfo: "Promocja",
        image: "./books.png",
    },{
        id: 7,
        name: "Produkt 7",
        price: "130zł",
        additionalInfo: "Promocja",
        image: "./books.png",
    },{
        id: 8,
        name: "Produkt 7",
        price: "130zł",
        additionalInfo: "Promocja",
        image: "./books.png",
    },{
        id: 9,
        name: "Produkt 7",
        price: "130zł",
        additionalInfo: "Promocja",
        image: "./books.png",
    },
    ,{
        id: 10,
        name: "Produkt 7",
        price: "130zł",
        additionalInfo: "Promocja",
        image: "./books.png",
    }
  ];

  try {
    let counter = await Product.countDocuments();
    if(counter === 0) {
      console.log('No products. Loading data...');
      await Product.create(data);
      console.log('Test data has been successfully loaded');
    }
  } catch (err) {
    console.log('Couldn\'t load test data', err);
  }

};

module.exports = loadTestData;