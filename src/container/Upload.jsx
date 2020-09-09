import React from 'react';
import '../styles/containers/upload.css';

import Title from '../components/Title';
import image from '../img/image.svg';

const Upload = () => {
  return (
    <main className="Upload-main">
      <div className="Upload-container">
        <div className="Upload-title">
          <Title Content="Upload your image" />
          <p>File should be Jepg, Png...</p>
        </div>
        <form method="POST">
          <div className="Upload-input-container">
            <div className="img">
              <img src={image} alt="" srcset="" />
              <p>Drag & Drop your image here</p>
            </div>
            <input type="file" />
          </div>
          <p>Or</p>
          <input type="submit" value="Choose file" />
        </form>
      </div>
    </main>
  );
};

export default Upload;
