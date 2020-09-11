import React from 'react';
import '../styles/containers/download.css';

import Success from '../img/success.svg';
import ImageError from '../img/error.jpg';

const Download = ({ URL, err }) => {
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
          {err ? null : (
            <img src={Success} width="35px" height="35px" alt="Image message" />
          )}
          <h1>{err ? err : 'Uploaded successfully!'}</h1>
        </div>
        <div className="Download-img-preview">
          <img
            src={err ? ImageError : URL}
            width="338px"
            height="224.4px"
            alt=""
          />
        </div>
        <div className="Download-actions">
          <p id="Text-to-copy">{err ? 'ERROR' : URL}</p>
          <button
            id="btn-copy"
            onClick={CopyText}
            style={
              err
                ? { backgroundColor: '#fa1616' }
                : { backgroundColor: '#2f80ed' }
            }
          >
            Copy Link
          </button>
        </div>
      </div>
    </main>
  );
};

export default Download;
