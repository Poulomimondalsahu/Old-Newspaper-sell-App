import React from 'react';

const ImageTest = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Image Test</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        <div>
          <h3>Image 1 (direct path)</h3>
          <img src="/image/im01.jpeg" alt="Test 1" style={{ width: '200px', height: 'auto' }} />
        </div>
        
        <div>
          <h3>Image 2 (with process.env.PUBLIC_URL)</h3>
          <img src={process.env.PUBLIC_URL + '/image/im02.jpg'} alt="Test 2" style={{ width: '200px', height: 'auto' }} />
        </div>
        
        <div>
          <h3>Image 3 (with %PUBLIC_URL%)</h3>
          <img src="%PUBLIC_URL%/image/im03.jpg" alt="Test 3" style={{ width: '200px', height: 'auto' }} />
        </div>
        
        <div>
          <h3>Image 4 (with ./)</h3>
          <img src="./image/im04.jpeg" alt="Test 4" style={{ width: '200px', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
};

export default ImageTest;