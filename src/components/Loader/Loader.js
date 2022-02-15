import React from 'react';

const Loader = () => {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div
        className="spinner-border text-info"
        style={{ width: '3rem', height: '3rem' }}
        role="status"
      ></div>
    </div>
  );
};

export default Loader;
