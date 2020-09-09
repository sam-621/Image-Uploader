import React, { useState } from 'react';
import '../styles/containers/upload.css';

import Title from '../components/Title';
import image from '../img/image.svg';
import Loader from '../components/Loader';

const Upload = () => {
  var i = 0;
  function move() {
    if (i == 0) {
      i = 1;
      var elem = document.getElementById('Loader-bar');
      var width = 1;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + '%';
        }
      }
    }
  }
  const [fileName, setFileName] = useState();

  function OnChangeFileHandle(e) {
    e.persist();
    // console.log(document.getElementById('file').files);
    setFileName(document.getElementById('file').files[0].name);

    const container = document.getElementById('Upload-main');

    container.classList.add('AnimationOut');
    setTimeout(() => {
      container.classList.add('Hide');
    }, 1000);
    setTimeout(() => {
      document.getElementById('loader-container').classList.add('Show');
      move();
    }, 1000);
  }

  return (
    <>
      <Loader />

      <main id="Upload-main" className="Upload-main">
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
                onChange={OnChangeFileHandle}
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
    </>
  );
};

export default Upload;
