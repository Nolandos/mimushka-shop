const Product = require('./models/productsModel');
const uuid = require('uuid');

const loadTestData = async () => {

  const data = [
    {
        id: uuid(),
        name: "Kokon",
        price: 50,
        amount: 1,
        additionalInfo: "Ostatnia sztuka",
        image: "http://localhost:3000/images/books.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam."
    },{
        id: uuid(),
        name: "Poduszka",
        price: 100,
        amount: 1,
        additionalInfo: "Promocja",
        image: "http://localhost:3000/images/books.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam."
    },{
        id: uuid(),
        name: "Kocyk",
        price: 115,
        amount: 1,
        additionalInfo: "Promocja",
        image: "http://localhost:3000/images/books.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam."
    },{
        id: uuid(),
        name: "Rożek",
        price: 119,
        amount: 1,
        additionalInfo: "Promocja",
        image: "http://localhost:3000/images/books.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam."
    },{
        id: uuid(),
        name: "Koszulka",
        price: 140,
        amount: 1,
        additionalInfo: "Promocja",
        image: "http://localhost:3000/images/books.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam."
    },{
        id: uuid(),
        name: "Produkt 6",
        price: 130,
        amount: 1,
        additionalInfo: "Promocja",
        image: "http://localhost:3000/images/books.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam."
    },{
        id: uuid(),
        name: "Produkt 7",
        price: 50,
        amount: 1,
        additionalInfo: "Promocja",
        image: "http://localhost:3000/images/books.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam."
    },{
        id: uuid(),
        name: "Produkt 8",
        price: 110,
        amount: 1,
        additionalInfo: "Promocja",
        image: "http://localhost:3000/images/books.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam."
    },{
        id: uuid(),
        name: "Produkt 9",
        price: "130zł",
        amount: 1,
        additionalInfo: "Promocja",
        image: "http://localhost:3000/images/books.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam."
    },
    ,{
        id: uuid(),
        name: "Produkt 10",
        price: 170,
        amount: 1,
        additionalInfo: "Promocja",
        image: "http://localhost:3000/images/books.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam."
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