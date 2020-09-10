import React, { useEffect } from 'react';
import '../styles/components/loader.css';

const Loader = () => {
  return (
    <div id="loader-container" className="Loader-div">
      <div className="Loader-container">
        <h1>Uploading...</h1>
        <div id="Loader-progress">
          <div id="Loader-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
