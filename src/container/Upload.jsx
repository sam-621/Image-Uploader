import React, { useState } from 'react';
import '../styles/containers/upload.css';

import Title from '../components/Title';
import image from '../img/image.svg';

const Upload = () => {
  const [fileName, setFileName] = useState();

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
              <p>{fileName ? fileName : 'Drag & Drop your image here'}</p>
            </div>
            <input
              id="file"
              className="Upload-inputFile"
              type="file"
              onClick={() => {
                setFileName(undefined);
              }}
              accept="image/*"
              onChange={(e) => {
                e.persist();
                setFileName(document.getElementById('file').files[0].name);
              }}
            />
          </div>
          <p className="Upload-Or">Or</p>
          <div className="Upload-submit-container">
            <label htmlFor="file">Chose a file</label>
            {/* <input
              id="file2"
              type="file"
              accept="image/*"
              onClick={() => {
                setFileName(undefined);
              }}
              onChange={(e) => {
                e.persist();
                setFileName(document.getElementById('file2').files[0].name);
              }}
            /> */}
          </div>
        </form>
      </div>
    </main>
  );
};

export default Upload;
