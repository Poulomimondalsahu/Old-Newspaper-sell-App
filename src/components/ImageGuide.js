import React from 'react';

const ImageGuide = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Image Upload Guide</h4>
            </div>
            <div className="card-body">
              <h5 className="card-title">Where to Place Your Newspaper Images</h5>
              
              <div className="alert alert-info">
                <h6><i className="bi bi-info-circle-fill me-2"></i>Image Folder Location</h6>
                <p>Based on the code, your images should be placed in:</p>
                <code className="d-block bg-light p-2 mb-3">http://localhost:8185/images/</code>
                <p>This suggests that your backend server is serving images from a folder named "images" at port 8185.</p>
              </div>
              
              <h5 className="mt-4">Steps to Add Your Newspaper Images:</h5>
              <ol className="list-group list-group-numbered mb-4">
                <li className="list-group-item">Create an "images" folder on your backend server (if it doesn't exist already)</li>
                <li className="list-group-item">Name your image files according to the filenames in the code (e.g., times1990.jpg, nyherald1985.jpg)</li>
                <li className="list-group-item">Upload the images to the server's images folder</li>
                <li className="list-group-item">Make sure your backend server is running on port 8185</li>
              </ol>
              
              <h5 className="mt-4">Alternative Approach (For Development):</h5>
              <p>If you're still developing and don't have a backend server set up yet, you can:</p>
              <ol className="list-group list-group-numbered mb-4">
                <li className="list-group-item">Create an "images" folder in the "public" directory of your React app</li>
                <li className="list-group-item">Place your newspaper images there</li>
                <li className="list-group-item">Update the image paths in the code to use relative paths like: <code>/images/times1990.jpg</code></li>
              </ol>
              
              <div className="alert alert-warning">
                <h6><i className="bi bi-exclamation-triangle-fill me-2"></i>Important Note</h6>
                <p>The current code is looking for images at <code>http://localhost:8185/images/${item.filename}</code>, so you'll need to either:</p>
                <ul>
                  <li>Set up your backend server to serve images from this location</li>
                  <li>Or modify the code to point to where your images are actually stored</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="card mt-4">
            <div className="card-header bg-success text-white">
              <h4 className="mb-0">Recommended Number of Newspaper Images</h4>
            </div>
            <div className="card-body">
              <p>For a good user experience, we recommend adding:</p>
              <ul className="list-group mb-4">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  For the main Best Sellers section
                  <span className="badge bg-primary rounded-pill">6-9 images</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  For the Newspaper Collection section
                  <span className="badge bg-primary rounded-pill">9-12 images</span>
                </li>
              </ul>
              
              <h5>Image Requirements:</h5>
              <ul className="list-group">
                <li className="list-group-item">Format: JPG, PNG or WebP</li>
                <li className="list-group-item">Size: 500px × 500px (minimum)</li>
                <li className="list-group-item">Resolution: 72 DPI (minimum)</li>
                <li className="list-group-item">File size: Less than 1MB per image (recommended)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGuide;