import React, { useState } from 'react';
import '../styles/containers/upload.css';
import Axios from 'Axios';

import Title from '../components/Title';
import image from '../img/image.svg';
import Loader from '../components/Loader';
import Move from '../utils/Move';
import Download from './Download';

const Upload = () => {
  const [fileName, setFileName] = useState('');
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const { API_KEY } = process.env;

  async function OnChangeFileHandle(e) {
    e.persist();

    const container = document.getElementById('Upload-main');

    container.classList.add('AnimationOut');
    setTimeout(() => {
      container.classList.add('Hide');
      setLoading(true);
      Move();
    }, 1000);

    const formData = new FormData();
    formData.append('image', document.getElementById('file').files[0]);

    Axios({
      method: 'POST',
      url: 'http://localhost:8000/api/upload',
      data: formData,
      headers: { 'api-key': API_KEY },
    })
      .then((res) => {
        console.log(res);
        setUrl(res.data.data.url);
        document
          .getElementById('loader-container')
          .classList.add('AnimationOut');
        setTimeout(() => {
          setLoading(false);
          document.getElementById('loader-container').classList.remove('Show');
          document.getElementById('loader-container').classList.add('Hide');
        }, 1000);
        setTimeout(() => {
          document.getElementById('Download-main').classList.add('Show');
          document.getElementById('Download-main').classList.add('AnimationIn');
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      {loading
        ? document.getElementById('loader-container').classList.add('Show')
        : null}
      <Loader />

      <main id="Upload-main" className="Upload-main">
        <div className="Upload-container">
          <div className="Upload-title">
            <Title Content="Upload your image" />
            <p>File should be Jepg, Png...</p>
          </div>
          <form>
            <div className="Upload-input-container">
              <div className="Upload-img">
                <img src={image} alt="Image drag and drop" />
                <p>{fileName ? fileName : 'Drag & Drop your image here'}</p>
              </div>
              <input
                id="file"
                className="Upload-inputFile"
                type="file"
                name="image"
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
            </div>
            {/* <input type="submit" /> */}
          </form>
        </div>
      </main>
      <Download URL={url} />
    </>
  );
};

export default Upload;
