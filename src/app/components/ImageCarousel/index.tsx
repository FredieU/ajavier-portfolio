import React, { useState } from 'react';
import './index.scss';

const NEXT_ICON = '>';
const PREV_ICON = '<';
const PERCENT = 100;

export interface IProps {
  imageArray: string[];
}

export default function ImageCarousel({ imageArray }: IProps) {
  const [x, setX] = useState(0);
  const next = () => {
    setX(x - PERCENT);
    console.log(x);
  };
  const previous = () => {
    setX(x + PERCENT);
    console.log(x);
  };

  return (
    <div className="img-carousel">
      {imageArray.map((imgSrc, index) => (
        <img
          key={`${imgSrc}${index}`}
          src={imgSrc}
          style={{ transform: `translate(${x}%)` }}
        />
      ))}
      {x !== -PERCENT * (imageArray.length - 1) && (
        <button className="next" onClick={next}>
          {NEXT_ICON}
        </button>
      )}
      {x !== 0 && (
        <button className="previous" onClick={previous}>
          {PREV_ICON}
        </button>
      )}
    </div>
  );
}

// const imgPath =
//   'https://res.cloudinary.com/futest/image/upload/v1583784180/ajavier-portfolio/mountain_1_dy9oqy.jpg';
