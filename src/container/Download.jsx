import React from 'react';
import '../styles/containers/download.css';

import Success from '../img/success.svg';
import imageTest from '../img/SocialMedia-API.png';

const Download = ({ URL }) => {
  function CopyText() {
    const textToCopy = document.getElementById('Text-to-copy');

    const range = document.createRange();
    range.selectNode(textToCopy);
    window.getSelection().addRange(range);

    const resultado = document.execCommand('copy');
    if (!resultado) {
      console.log('ERROR al intentar copiar el email');
    }
  }

  return (
    <main id="Download-main" className="Download-main ">
      <div className="Download-container">
        <div className="Download-Message">
          <img src={Success} width="35px" height="35px" alt="Image message" />
          <h1>Uploaded successfully!</h1>
        </div>
        <div className="Download-img-preview">
          <img src={URL} width="338px" height="224.4px" alt="" />
        </div>
        <div className="Download-actions">
          <p id="Text-to-copy">{URL}</p>
          <button id="btn-copy" onClick={CopyText}>
            Copy Link
          </button>
        </div>
      </div>
    </main>
  );
};

export default Download;
