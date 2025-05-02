import React from 'react';
import { newspapers } from './NewspaperData';

const ImageFileList = () => {
  // Extract unique filenames from the newspaper data
  const filenames = newspapers
    .filter(newspaper => newspaper.filename)
    .map(newspaper => newspaper.filename);
  
  return (
    <div className="card">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">Required Image Files</h5>
      </div>
      <div className="card-body">
        <p>Please prepare the following image files and place them in your images folder:</p>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Filename</th>
                <th>For Newspaper</th>
              </tr>
            </thead>
            <tbody>
              {newspapers.map((newspaper, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td><code>{newspaper.filename}</code></td>
                  <td>{newspaper.itemName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ImageFileList;