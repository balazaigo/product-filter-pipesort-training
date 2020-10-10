import React,{ useEffect, useState} from 'react';

//Internal Components
import SideBar from './Components/Layout/SideBar';
import {Products} from './Components/Main';

//css
import './Main.css'
import './Products.css'

function App() {
  const products = [
    {name:'Puma Tshirt',category:'tshirts',brand:'puma',price:'1.00'},
    {name:'Cotton Shirt',category:'shirts',brand:'nike',price:'1.00'},
    {name:'Black Hoodie from Reebok',category:'hoodies',brand:'reebok',price:'1.00'},
    {name:'Black Tshirt from Woodlands',category:'hoodies',brand:'woodlands',price:'2.00'},
    {name:'Red Tshirt from Adidas',category:'tshirts',brand:'adidas',price:'4.00'},
    {name:'Seven Sweat Pants',category:'sweatpants',brand:'seven',price:'5.00'},
    {name:'Seven Pants',category:'pants',brand:'puma',price:'4.00'},
    {name:'Nike Tshirt',category:'tshirts',brand:'nike',price:'2.35'},
    {name:'Nike Hoodie',category:'hoodies',brand:'nike',price:'1.10'},
    {name:'Seven Hoodie',category:'hoodies',brand:'seven',price:'8.70'},
    {name:'Puma Hoodie',category:'hoodies',brand:'puma',price:'4.21'},
    {name:'puma sweat pants',category:'sweatpants',brand:'puma',price:'1.15'},
    {name:'Adidas Pants',category:'pants',brand:'adidas',price:'1.10'},
    {name:'Woodlands Pants',category:'pants',brand:'woodlands',price:'4.00'},
  ];

  const [fil,setFilter] = useState({category:[],brand:[]});
  const [prods,setProds] = useState(products);

  useEffect(() => {
    if(fil.category.length > 0 || fil.brand.length > 0){
      if(fil.category.length > 0 && fil.brand.length > 0){
        setProds([...products.filter(prod => fil.category.includes(prod.category) && fil.brand.includes(prod.brand))])
      }
      if(fil.category.length > 0 && fil.brand.length === 0){
        setProds([...products.filter(prod => fil.category.includes(prod.category))])
      }
      if(fil.brand.length > 0 && fil.category.length === 0){
        setProds([...products.filter(prod => fil.brand.includes(prod.brand))])
      }
    }
  },[fil]);

  return (
    <>
      <SideBar setFilter={setFilter}/>
      <div className="main">
        <div className="row">
          <Products products={prods}/>
        </div>
      </div>
    </>
  );
}

export default App;
