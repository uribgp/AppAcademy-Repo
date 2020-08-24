// ./src/image/Image.js

import React from 'react';
import './Image.css';
import dog from './dog.jpg';

console.log(dog);

function Image() {
  // Import result is the URL of your image.
  return (
      <div>
          <img src={dog}alt='Dog' />
          <div className='dog'></div>
      </div>
    );
}

export default Image;