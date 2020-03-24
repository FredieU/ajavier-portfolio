import React from 'react';
import './index.css';
import ImageCarousel from './components/ImageCarousel';

export const HEADER_CLASS = 'App-header';

const imageArray = [
  'https://res.cloudinary.com/funabia/image/upload/v1585079902/naples/naples_volcano_1_z4gro4.jpg',
  'https://res.cloudinary.com/funabia/image/upload/v1585079902/naples/naples_volcano_2_udtlpk.jpg',
  'https://res.cloudinary.com/funabia/image/upload/v1585079903/naples/naples_volcano_3_sesm8u.jpg',
];

export default function App() {
  return (
    <div className="App">
      <header className={HEADER_CLASS}>
        <p className="logo">AJavier</p>
      </header>
      <ImageCarousel imageArray={imageArray} />
    </div>
  );
}
