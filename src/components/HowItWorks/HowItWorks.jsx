import css from './HowItWorks.module.css';

export default function HowItWorks() {
  return (
    <div className={css.container}>
      <p className={css.description}>Watch our video how it works</p>
      <button className={css.button}>
        <svg className={css.buttonIcon}>
          <path
            id="circlePath"
            d="M 37,37 m -37,0 a 37,37 0 1,0 74,0 a 37,37 0 1,0 -74,0"
            fill="none"
            stroke="none"
          />
          <text>
            <textPath href="#circlePath">See • how • it • works</textPath>
          </text>
        </svg>
        <svg
          className={css.playIcon}
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.16699 8.33317V1.6665L5.33366 4.77762L1.16699 8.33317Z"
            fill="#38413B"
            stroke="#38413B"
            strokeWidth="0.833333"
          />
        </svg>
      </button>
    </div>
  );
}
