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
import SimplifiedOffers from './SimplifiedOffers';
import PricingPlans from './PricingPlans';
import TestimonialsSection from './TestimonialsSection';
import NewspaperFilters from './NewspaperFilters';
import './custom.css';

const Home = ({ addToCart })  => {
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState({ category: 'All', decade: 'All Decades' });
  const [priceRange, setPriceRange] = useState(1000);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
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
      setFilteredProducts(response.data);
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
  
  // Apply filters to products
  useEffect(() => {
    if (productsBySell.length > 0) {
      let result = [...productsBySell];
      
      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        result = result.filter(product => 
          product.itemName.toLowerCase().includes(query) || 
          (product.description && product.description.toLowerCase().includes(query))
        );
      }
      
      // Filter by category (if implemented in your data)
      if (activeFilter.category !== 'All' && result.some(item => item.category)) {
        result = result.filter(product => product.category === activeFilter.category);
      }
      
      // Filter by decade (if implemented in your data)
      if (activeFilter.decade !== 'All Decades' && result.some(item => item.decade)) {
        result = result.filter(product => product.decade === activeFilter.decade);
      }
      
      // Filter by price
      result = result.filter(product => {
        const price = product.itemPrice || product.price;
        return price <= priceRange;
      });
      
      setFilteredProducts(result);
    }
  }, [productsBySell, activeFilter, priceRange, searchQuery]);
  
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
        
        {/* Special Deals Banner */}
        <div className="special-deals-banner p-4 bg-primary text-white rounded mb-5">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h3><i className="bi bi-lightning-charge-fill me-2"></i>Special Deals of the Week</h3>
              <p className="mb-0">Explore our curated collection of rare newspapers with exclusive discounts!</p>
            </div>
            <div className="col-md-4 text-md-end mt-3 mt-md-0">
              <button className="btn btn-light">View Special Deals</button>
            </div>
          </div>
        </div>

        {/* Best Sellers Section - Flipkart Style */}
        <div className="best-sellers-section mb-5">
          <div className="section-header bg-light p-3 rounded mb-4">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className='mb-0'>Best Sellers</h2>
              </div>
              <div className="col-md-6 text-md-end">
                <div className="d-flex justify-content-md-end align-items-center">
                  <span className="me-3">View as:</span>
                  <div className="btn-group" role="group">
                    <button type="button" className="btn btn-outline-primary active">
                      <i className="bi bi-grid-3x3-gap-fill"></i>
                    </button>
                    <button type="button" className="btn btn-outline-primary">
                      <i className="bi bi-list"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mb-4">
            <div className="col-lg-3">
              {/* Filter Component */}
              <NewspaperFilters 
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </div>
            
            <div className="col-lg-9">
              {/* Flipkart-style sorting bar */}
              <div className="sort-bar bg-light p-3 rounded mb-3 d-flex justify-content-between align-items-center">
                <div>
                  <span className="fw-bold me-2">Sort By:</span>
                  <div className="btn-group" role="group">
                    <button type="button" className="btn btn-sm btn-outline-primary active">Popularity</button>
                    <button type="button" className="btn btn-sm btn-outline-primary">Price Low to High</button>
                    <button type="button" className="btn btn-sm btn-outline-primary">Price High to Low</button>
                    <button type="button" className="btn btn-sm btn-outline-primary">Newest First</button>
                  </div>
                </div>
                <div>
                  <span className="text-muted">{filteredProducts.length} items</span>
                </div>
              </div>
              
              {isLoading ? (
                <div className="text-center p-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <p className="mt-3">Loading products...</p>
                </div>
              ) : filteredProducts.length === 0 ? (
                <div className="alert alert-info text-center p-5">
                  <h4>No products match your filters</h4>
                  <p>Try adjusting your filter criteria or search query</p>
                </div>
              ) : (
                <div className='row'>
                  {filteredProducts.map((item, i) => (
                    <div key={i} className='col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-4'>
                      <div className="card h-100 shadow-sm position-relative product-card"
                        style={{
                          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-5px)';
                          e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        {/* Flipkart-style badges */}
                        {item.discount > 0 && (
                          <div className="position-absolute top-0 end-0 p-2">
                            <span className="badge bg-danger">{item.discount}% OFF</span>
                          </div>
                        )}
                        {item.featured && (
                          <div className="position-absolute top-0 start-0 p-2">
                            <span className="badge bg-primary">Featured</span>
                          </div>
                        )}
                        
                        <div className='product-img' style={{ height: '250px', overflow: 'hidden', position: 'relative' }}>
                          {/* Quick view overlay */}
                          <div className="quick-view-overlay position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
                            style={{
                              top: 0,
                              left: 0,
                              background: 'rgba(0,0,0,0.5)',
                              opacity: 0,
                              transition: 'opacity 0.3s ease',
                              zIndex: 1
                            }}
                            onMouseEnter={(e) => {e.currentTarget.style.opacity = '1'}}
                            onMouseLeave={(e) => {e.currentTarget.style.opacity = '0'}}
                          >
                            <button className="btn btn-light btn-sm me-2">
                              <i className="bi bi-eye"></i> Quick View
                            </button>
                            <button className="btn btn-light btn-sm">
                              <i className="bi bi-heart"></i> Wishlist
                            </button>
                          </div>
                          
                          <img
                            src={item.imageUrl || `http://localhost:8185/images/${item.filename}`}
                            alt={item.itemName}
                            className='mb-3'
                            onError={(e) => {
                              // If the image fails to load, try the alternative source or use a placeholder
                              if (e.target.src.includes(item.filename)) {
                                e.target.src = item.imageUrl || 'https://via.placeholder.com/400x300?text=Newspaper+Image';
                              } else {
                                e.target.src = 'https://via.placeholder.com/400x300?text=Newspaper+Image';
                              }
                            }}
                            style={{
                              objectFit: 'contain',
                              height: '100%',
                              width: '100%',
                              display: 'block',
                              marginLeft: 'auto',
                              marginRight: 'auto',
                              transition: 'transform 0.5s ease',
                            }}
                            onMouseEnter={(e) => {e.currentTarget.style.transform = 'scale(1.05)'}}
                            onMouseLeave={(e) => {e.currentTarget.style.transform = 'scale(1)'}}
                          />
                        </div>
                        
                        <div className='card-body d-flex flex-column'>
                          <h5 className='card-title'>{item.itemName}</h5>
                          
                          {/* Flipkart-style ratings */}
                          <div className="ratings mb-2">
                            <span className="badge bg-success me-2">
                              4.5 <i className="bi bi-star-fill"></i>
                            </span>
                            <small className="text-muted">(24 Reviews)</small>
                          </div>
                          
                          {item.category && (
                            <div className="mb-2">
                              <span className="badge bg-secondary me-1">{item.category}</span>
                              {item.decade && <span className="badge bg-info text-dark">{item.decade}</span>}
                            </div>
                          )}
                          
                          <p className="card-text small">{item.description}</p>
                          
                          <div className='mt-auto'>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                              {item.discount > 0 ? (
                                <div>
                                  <span className="h5 mb-0 text-danger">
                                    ₹{(item.itemPrice - (item.itemPrice * item.discount / 100)).toFixed(0)}
                                  </span>
                                  <span className="text-muted text-decoration-line-through ms-2">₹{item.itemPrice}</span>
                                  <div className="text-success small mt-1">
                                    <i className="bi bi-tag-fill"></i> {item.discount}% off
                                  </div>
                                </div>
                              ) : (
                                <h5 className='mb-0'>
                                  ₹ <span className='text-danger'>{item.itemPrice}</span>
                                </h5>
                              )}
                              
                              {/* Flipkart-style availability badge */}
                              <span className="badge bg-success">
                                <i className="bi bi-check-circle-fill me-1"></i>In Stock
                              </span>
                            </div>
                            
                            <div className="d-flex justify-content-between mt-2">
                              <button className='btn btn-primary flex-grow-1 me-2' onClick={() => addToCart(item)}>
                                <i className="bi bi-cart-plus me-2"></i>Add to cart
                              </button>
                              <button className='btn btn-outline-success flex-grow-1' onClick={() => {
                                addToCart(item);
                                window.location.href = '/cart';
                              }}>
                                <i className="bi bi-lightning-fill me-1"></i>Buy Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Flipkart-style pagination */}
              {filteredProducts.length > 0 && (
                <div className="pagination-container d-flex justify-content-center mt-4">
                  <nav aria-label="Page navigation">
                    <ul className="pagination">
                      <li className="page-item disabled">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li className="page-item active"><a className="page-link" href="#">1</a></li>
                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              )}
            </div>
          </div>
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
        
        {/* Coupon Offers Section */}
        <SimplifiedOffers />
        
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
