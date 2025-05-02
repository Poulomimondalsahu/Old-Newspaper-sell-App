import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import axios from 'axios';
import Header from './Header';
import Menu from './Menu';
import {deleteItem, getItems} from "./services/ProductService";
import NewspaperSection from './NewspaperSection';
import OffersSection from './OffersSection';
import ImageGuide from './ImageGuide';
import ImageFileList from './ImageFileList';
import ImageMapping from './ImageMapping';
import FeaturesSection from './FeaturesSection';
import PricingPlans from './PricingPlans';
import TestimonialsSection from './TestimonialsSection';

const Home = ({ addToCart })  => {
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
    setIsLoading(true);
    try {
      const response = await getItems();
      setProductsBySell(response.data);
    } catch (error) {
      console.error("Error fetching Items:", error);
    } finally {
      setIsLoading(false);
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
          <div className="d-flex gap-3">
            <a className="btn btn-primary btn-lg" href="#newspaper-section" role="button">Explore Collection</a>
            <a className="btn btn-outline-danger btn-lg" href="#offers-section" role="button">View Offers</a>
          </div>
        </div>

        {/* Offers Section */}
        <div id="offers-section" className="mb-5">
          <OffersSection />
        </div>

        {/* Best Sellers Section */}
        <h2 className='mb-4 mt-5 text-center'>Best Sellers</h2>
        {isLoading ? (
          <div className="text-center p-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading products...</p>
          </div>
        ) : (
          <div className='row'>
            {productsBySell.map((item, i) => (
              <div key={i} className='col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4'>
                <div className="card h-100 shadow-sm">
                  <div className='product-img' style={{ height: '250px' }}>
                    <img
                      src={`/${item.filename}`}
                      alt={item.itemName}
                      className='mb-3'
                      onError={(e) => {
                        // If the local image fails to load, use a placeholder
                        e.target.src = 'https://via.placeholder.com/400x300?text=Newspaper+Image';
                      }}
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
                  <div className='card-body d-flex flex-column'>
                    <h5 className='card-title'>{item.itemName}</h5>
                    <div className='mt-auto'>
                      <h5 className='text-center mb-3'>
                        ₹ <span className='text-danger'>{item.itemPrice}</span>
                      </h5>
                      <div className="d-flex justify-content-between mt-2">
                        <button className='btn btn-primary flex-grow-1 me-2' onClick={() => addToCart(item)}>
                          <i className="bi bi-cart-plus me-2"></i>Add to cart
                        </button>
                        <button className='btn btn-outline-success flex-grow-1' onClick={() => {
                          addToCart(item);
                          window.location.href = '/cart';
                        }}>Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Newspaper Section */}
        <div id="newspaper-section" className="mt-5">
          <NewspaperSection addToCart={addToCart} />
        </div>
        
        {/* Featured Collections Section */}
        <div className="mt-5 mb-5">
          <h2 className="text-center mb-4">Featured Collections</h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body text-center">
                  <div className="collection-icon mb-3">
                    <i className="bi bi-journal-richtext" style={{ fontSize: '2.5rem', color: '#0d6efd' }}></i>
                  </div>
                  <h5 className="card-title">Historical Events</h5>
                  <p className="card-text">Newspapers covering major historical events from the 20th century.</p>
                  <a href="#" className="btn btn-outline-primary">View Collection</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body text-center">
                  <div className="collection-icon mb-3">
                    <i className="bi bi-trophy" style={{ fontSize: '2.5rem', color: '#0d6efd' }}></i>
                  </div>
                  <h5 className="card-title">Sports Memorabilia</h5>
                  <p className="card-text">Newspapers featuring iconic sports moments and championships.</p>
                  <a href="#" className="btn btn-outline-primary">View Collection</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body text-center">
                  <div className="collection-icon mb-3">
                    <i className="bi bi-star" style={{ fontSize: '2.5rem', color: '#0d6efd' }}></i>
                  </div>
                  <h5 className="card-title">Celebrity News</h5>
                  <p className="card-text">Vintage newspapers with celebrity interviews and entertainment news.</p>
                  <a href="#" className="btn btn-outline-primary">View Collection</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <FeaturesSection />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Pricing Plans Section */}
        <PricingPlans />
        
        {/* Newsletter Subscription */}
        <div className="bg-light p-5 rounded mb-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h3>Subscribe to Our Newsletter</h3>
              <p className="text-muted">Get updates on new arrivals, special offers, and historical newspaper insights.</p>
            </div>
            <div className="col-md-6">
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Your email address" />
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Image Guide Section */}
        <div className="card mb-5">
          <div className="card-header bg-info text-white">
            <h4 className="mb-0"><i className="bi bi-info-circle-fill me-2"></i>Image Guide for Newspaper App</h4>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <h5>Where to Place Your Images</h5>
                <p>Based on the code, your images should be placed in:</p>
                <div className="bg-light p-3 mb-3 rounded">
                  <code>http://localhost:8185/images/</code>
                </div>
                <p>This suggests that your backend server is serving images from a folder named "images" at port 8185.</p>
                
                <h6 className="mt-4">Alternative Approach:</h6>
                <ol>
                  <li>Create an "images" folder in the "public" directory</li>
                  <li>Place your newspaper images there</li>
                  <li>Update image paths in the code to use: <code>/images/filename.jpg</code></li>
                </ol>
              </div>
              <div className="col-md-6">
                <h5>Recommended Number of Images</h5>
                <ul className="list-group mb-4">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Best Sellers section
                    <span className="badge bg-primary rounded-pill">6-9 images</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Newspaper Collection section
                    <span className="badge bg-primary rounded-pill">9-12 images</span>
                  </li>
                </ul>
                
                <h5>Image Requirements:</h5>
                <ul className="list-group">
                  <li className="list-group-item">Format: JPG, PNG or WebP</li>
                  <li className="list-group-item">Size: 500px × 500px (minimum)</li>
                  <li className="list-group-item">File size: Less than 1MB per image</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4">
              <ImageFileList />
            </div>
            
            <div className="mt-4">
              <ImageMapping />
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
