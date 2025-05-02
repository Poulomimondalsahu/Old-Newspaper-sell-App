import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import axios from 'axios';
import Header from './Header';
import Menu from './Menu';
import {deleteItem, getItems} from "./services/ProductService";
import NewspaperSection from './NewspaperSection';

const Home = ({ addToCart })  => {
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  //const { addToCart } = useCart();
  
  //const [product, setProduct] = useState([]);
  const [error, setError] = useState([]);
  
// const addtocart=async (product)=>{
//   //console.log("hi");
// //console.log(product._id);
// const response=await axios.post('http://localhost:8185/cart/add',
//   {
    
//     "productId": product.itemId,
//     "quantity": 1,
//     "name": product.itemName,
//     "price": product.price
//   }
// )
// console.log(response.status);
// }
  const loadProductsBySell = async () => {
    try {
      const response = await getItems();
      setProductsBySell(response.data);
    } catch (error) {
      console.error("Error fetching Items:", error);
    }
  };
  const loadProductsByArrival = async () => {
    try {
      const response = await getItems();
      setProductsByArrival(response.data);
    } catch (error) {
      console.error("Error fetching Items:", error);
    }
  };
const fetchItems = async () => {
        try {
          const response = await getItems();
          setProductsByArrival(response.data);
        } catch (error) {
          console.error("Error fetching Items:", error);
        }
      };
  useEffect(() => {
    //var arr =  JSON.parse(localStorage.getItem('user')) ;
    //console.log(arr);
         //console.log("id="+arr._id);
    //loadProductsByArrival();
    loadProductsBySell();
  }, []);

  return (
    <div>
 
    {/* <Header></Header>  */}
        {/* <Menu/> */}
    <div className='row'>
      <div className='col-md-1'></div>
      <div className='col-md-10'>
       
        {/* Hero Banner */}
        <div className="jumbotron bg-light p-5 rounded mt-4 mb-5">
          <h1 className="display-4">Welcome to Old Newspaper Sell App</h1>
          <p className="lead">Discover vintage newspapers and historical collections from around the world.</p>
          <hr className="my-4" />
          <p>Browse our extensive collection of newspapers from different eras and regions.</p>
          <a className="btn btn-primary btn-lg" href="#newspaper-section" role="button">Explore Collection</a>
        </div>

        <h2 className='mb-2 mt-4'>Best Sellers</h2>
        <div className='row'>
          {productsBySell.map((item, i) => (
            <div key={i} className='col-xl-4 col-lg-6 col-md-6 col-sm-12'>
              <div className='product-img' style={{ height: '250px' }}>
                <img
                  src={`http://localhost:8185/images/${item.filename}`}
                  alt={item.itemName}
                  className='mb-3'
                  style={{
                    objectFit: 'contain',
                    height: '100%',
                    width: '100%',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }}
                />
              </div>
              <div className='py-2 flex flex-col gap-1'>
                <h2 className='cursor-pointer'>{item.itemName}</h2>
                <h2 className='text-center'>
                  ₹ <span className='text-red-500'>{item.itemPrice}</span>
                </h2>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <button className='btn btn-primary flex-grow-1 me-2' onClick={() => addToCart(item)}>Add to cart</button>
                <button className='btn btn-outline-success flex-grow-1' onClick={() => {
                  addToCart(item);
                  window.location.href = '/cart';
                }}>Buy Now</button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Newspaper Section */}
        <div id="newspaper-section" className="mt-5">
          <NewspaperSection addToCart={addToCart} />
        </div>
        
        {/* Featured Collections Section */}
        <div className="mt-5 mb-5">
          <h2 className="text-center mb-4">Featured Collections</h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">Historical Events</h5>
                  <p className="card-text">Newspapers covering major historical events from the 20th century.</p>
                  <a href="#" className="btn btn-outline-primary">View Collection</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">Sports Memorabilia</h5>
                  <p className="card-text">Newspapers featuring iconic sports moments and championships.</p>
                  <a href="#" className="btn btn-outline-primary">View Collection</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">Celebrity News</h5>
                  <p className="card-text">Vintage newspapers with celebrity interviews and entertainment news.</p>
                  <a href="#" className="btn btn-outline-primary">View Collection</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className='col-md-1'></div>
    </div>
      </div>
   
  );
};

export default Home;
