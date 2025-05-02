import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import axios from 'axios';
import Header from './Header';
import Menu from './Menu';
import BestSellers from './BestSellers';
import NewspaperCategories from './NewspaperCategories';
import FeaturedNewspaper from './FeaturedNewspaper';
import {deleteItem, getItems} from "./services/ProductService"

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
      
      {/* Hero Banner */}
      <div className="hero-banner" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1582661702593-149b3f4f2927?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '3rem',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)'
        }}></div>
        <div style={{
          position: 'relative',
          color: 'white',
          textAlign: 'center',
          padding: '0 2rem'
        }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Old Newspaper Sell App</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
            Discover rare and vintage newspapers from different eras. Each piece carries a unique story and historical significance.
          </p>
          <button className="btn btn-danger btn-lg">Explore Collection</button>
        </div>
      </div>
      
      {/* Newspaper Best Sellers Section */}
      <BestSellers addToCart={addToCart} />
      
      {/* Newspaper Categories Section */}
      <NewspaperCategories />
      
      {/* Featured Newspaper Section */}
      <FeaturedNewspaper addToCart={addToCart} />
      
      {/* Original Products Section */}
      <div className='row mt-5'>
        <div className='col-md-1'></div>
        <div className='col-md-10'>
          <h2 className='mb-2 mt-4'>Featured Products</h2>
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
                <button className='btn btn-primary' onClick={() => addToCart(item)}>Add to cart</button>
              </div>
            ))}
          </div>
        </div>
        <div className='col-md-1'></div>
      </div>
      
      {/* Testimonials Section */}
      <div className="testimonials-section" style={{
        backgroundColor: '#f8f9fa',
        padding: '4rem 0',
        margin: '4rem 0'
      }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>What Our Customers Say</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 p-4">
                <div className="d-flex align-items-center mb-3">
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: '#e63946',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    marginRight: '1rem'
                  }}>JD</div>
                  <div>
                    <h5 className="mb-0">John Doe</h5>
                    <small className="text-muted">Collector</small>
                  </div>
                </div>
                <p className="card-text">"I've been collecting newspapers for over 20 years, and this is by far the best place to find rare editions. The quality and authenticity are unmatched!"</p>
                <div className="text-warning">
                  ★★★★★
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 p-4">
                <div className="d-flex align-items-center mb-3">
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: '#457b9d',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    marginRight: '1rem'
                  }}>MS</div>
                  <div>
                    <h5 className="mb-0">Mary Smith</h5>
                    <small className="text-muted">Historian</small>
                  </div>
                </div>
                <p className="card-text">"As a historian, I rely on authentic sources for my research. The newspapers I've purchased here have been invaluable for my work on 20th century events."</p>
                <div className="text-warning">
                  ★★★★★
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 p-4">
                <div className="d-flex align-items-center mb-3">
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: '#1d3557',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    marginRight: '1rem'
                  }}>RJ</div>
                  <div>
                    <h5 className="mb-0">Robert Johnson</h5>
                    <small className="text-muted">Enthusiast</small>
                  </div>
                </div>
                <p className="card-text">"I bought a bundle of 1970s newspapers as a gift for my father. He was thrilled to revisit the headlines from his youth. Great service and fast delivery!"</p>
                <div className="text-warning">
                  ★★★★☆
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
