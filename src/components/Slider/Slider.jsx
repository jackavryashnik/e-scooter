import { useState } from 'react';
import css from './Slider.module.css';

import colorBlack from '../../img/colorBlack-removebg.png';
import colorBlue from '../../img/colorBlue-removebg.png';
import colorGreen from '../../img/colorGreen-removebg.png';
import colorRed from '../../img/colorRed-removebg.png';
import colorWhite from '../../img/colorWhite-removebg.png';

export default function Slider() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [colorBlack, colorBlue, colorGreen, colorRed, colorWhite];

  const handlePrevSlide = () => {
    setCurrentImage(currentImage - 1);
  };

  const handleNextSlide = () => {
    setCurrentImage(currentImage + 1);
  };

  return (
    <div className={css.slider}>
      <img
        className={css.image}
        src={images[currentImage]}
        alt={`Scooter ${currentImage + 1}`}
        width="856"
        height="646"
      />
      <div className={css.buttonsContainer}>
        <button
          className={css.prevButton}
          onClick={handlePrevSlide}
          disabled={currentImage === 0}
        >
          <svg
            className={css.icon}
            width="6"
            height="11"
            viewBox="0 0 6 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.75 9.37858L2.19454 5.42402L5.75 1.46946L4.65273 0.249023L0 5.42402L4.65273 10.599L5.75 9.37858Z" />
          </svg>
        </button>
        <button
          className={css.nextButton}
          onClick={handleNextSlide}
          disabled={currentImage === images.length - 1}
        >
          <svg
            className={css.icon}
            width="7"
            height="11"
            viewBox="0 0 7 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.75 1.46956L4.30546 5.42412L0.749999 9.37868L1.84727 10.5991L6.5 5.42412L1.84727 0.24912L0.75 1.46956Z" />
          </svg>
        </button>
      </div>
      <div className={css.background}></div>
    </div>
  );
}
