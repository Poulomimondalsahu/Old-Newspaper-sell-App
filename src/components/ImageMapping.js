import React, { useState } from 'react';

const ImageMapping = () => {
  const [copied, setCopied] = useState(false);
  
  const originalImages = [
    'pexels-digitalbuggu-167538.jpg',
    'pexels-pixabay-158651.jpg',
    'pexels-cottonbro-3944377.jpg',
    'pexels-elijahsad-3473495.jpg',
    'pexels-brotin-biswas-158640-518543.jpg',
    'pexels-efe-ersoy-393937500-15139464.jpg'
  ];
  
  const targetImages = [
    'times1990.jpg',
    'nyherald1985.jpg',
    'guardian1970.jpg',
    'wapost1970.jpg',
    'ft1980.jpg',
    'tribune1960.jpg'
  ];
  
  const mappings = originalImages.map((original, index) => {
    return {
      original,
      target: index < targetImages.length ? targetImages[index] : null
    };
  });
  
  // Generate Windows batch commands
  const batchCommands = mappings
    .filter(mapping => mapping.target)
    .map(mapping => `rename "public\\${mapping.original}" "${mapping.target}"`)
    .join('\n');
  
  const handleCopyCommands = () => {
    navigator.clipboard.writeText(batchCommands);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };
  
  return (
    <div className="card">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">Image Renaming Guide</h5>
      </div>
      <div className="card-body">
        <p>We've detected the following images in your public folder:</p>
        
        <div className="table-responsive mb-4">
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Current Filename</th>
                <th>Should Be Renamed To</th>
              </tr>
            </thead>
            <tbody>
              {mappings.map((mapping, index) => (
                <tr key={index}>
                  <td><code>{mapping.original}</code></td>
                  <td>
                    {mapping.target ? (
                      <code className="text-success">{mapping.target}</code>
                    ) : (
                      <span className="text-muted">No mapping available</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="alert alert-info">
          <h6 className="alert-heading">Manual Renaming Instructions:</h6>
          <p>Please rename each file according to the mapping above. This will ensure the newspaper images display correctly in the app.</p>
        </div>
        
        <div className="mt-4">
          <h6>Windows Command Prompt Instructions:</h6>
          <p>You can also rename the files using Command Prompt. Copy the commands below and run them in Command Prompt while in the project root directory:</p>
          
          <div className="bg-dark text-light p-3 rounded position-relative">
            <pre className="mb-0" style={{ whiteSpace: 'pre-wrap' }}>{batchCommands}</pre>
            <button 
              className="btn btn-sm btn-outline-light position-absolute top-0 end-0 m-2"
              onClick={handleCopyCommands}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
        
        <div className="alert alert-warning mt-4">
          <h6 className="alert-heading">Important Note:</h6>
          <p>After renaming, you may need to update the code to use the correct path to your images:</p>
          <code>src={`/images/${newspaper.filename}`}</code>
          <p className="mt-2">Instead of:</p>
          <code>src={`http://localhost:8185/images/${newspaper.filename}`}</code>
        </div>
      </div>
    </div>
  );
};

export default ImageMapping;