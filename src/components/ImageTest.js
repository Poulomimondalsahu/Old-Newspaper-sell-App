import React from 'react';
// Import images directly
import im01 from '../assets/im01.jpeg';
import im02 from '../assets/im02.jpg';

const ImageTest = () => {
  return (
    <div style={{ padding: '20px', border: '2px solid #ccc', margin: '20px', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Image Path Testing</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        <div style={{ border: '1px solid #eee', padding: '10px', borderRadius: '8px', width: '250px' }}>
          <h3>Method 1: Direct path</h3>
          <img src="/image/im01.jpeg" alt="Test 1" style={{ width: '100%', height: 'auto', marginTop: '10px' }} />
          <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>src="/image/im01.jpeg"</p>
        </div>
        
        <div style={{ border: '1px solid #eee', padding: '10px', borderRadius: '8px', width: '250px' }}>
          <h3>Method 2: With PUBLIC_URL</h3>
          <img src={process.env.PUBLIC_URL + '/image/im02.jpg'} alt="Test 2" style={{ width: '100%', height: 'auto', marginTop: '10px' }} />
          <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>src=&#123;process.env.PUBLIC_URL + '/image/im02.jpg'&#125;</p>
        </div>
        
        <div style={{ border: '1px solid #eee', padding: '10px', borderRadius: '8px', width: '250px' }}>
          <h3>Method 3: Relative path</h3>
          <img src="./image/im03.jpg" alt="Test 3" style={{ width: '100%', height: 'auto', marginTop: '10px' }} />
          <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>src="./image/im03.jpg"</p>
        </div>
        
        <div style={{ border: '1px solid #eee', padding: '10px', borderRadius: '8px', width: '250px' }}>
          <h3>Method 4: Absolute URL</h3>
          <img src="http://localhost:3000/image/im04.jpeg" alt="Test 4" style={{ width: '100%', height: 'auto', marginTop: '10px' }} />
          <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>src="http://localhost:3000/image/im04.jpeg"</p>
        </div>
      </div>
      
      <h3 style={{ textAlign: 'center', margin: '30px 0 20px' }}>Testing with require()</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        <div style={{ border: '1px solid #eee', padding: '10px', borderRadius: '8px', width: '250px' }}>
          <h3>Method 5: With require</h3>
          <img src={require('../image/im05.jpeg')} alt="Test 5" style={{ width: '100%', height: 'auto', marginTop: '10px' }} />
          <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>src=&#123;require('../image/im05.jpeg')&#125;</p>
        </div>
        
        <div style={{ border: '1px solid #eee', padding: '10px', borderRadius: '8px', width: '250px' }}>
          <h3>Method 6: With import</h3>
          <img src={im01} alt="Test 6" style={{ width: '100%', height: 'auto', marginTop: '10px' }} />
          <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>import im01 from '../assets/im01.jpeg'</p>
        </div>
      </div>
    </div>
  );
};

export default ImageTest;