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
            <div className="Upload-img">
              <img src={image} alt="Image drag and drop" />
              <p>Drag & Drop your image here</p>
            </div>
            <input type="file" />
          </div>
          <p className="Upload-Or">Or</p>
          <div className="Upload-submit-container">
            <input type="submit" value="Choose file" />
          </div>
        </form>
      </div>
    </main>
  );
};

export default Upload;
