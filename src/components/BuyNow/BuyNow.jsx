import css from './BuyNow.module.css';

export default function BuyNow() {
  return (
    <button className={css.button}>
      <div className={css.arrowIcon}>
        <svg
          width="25"
          height="10"
          viewBox="0 0 25 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.5 5L18.4655 -7.19605e-08L18.4655 4L0.5 4L0.5 6L18.4655 6L18.4655 10L24.5 5Z"
            fill="#F7EAE3"
          />
        </svg>
      </div>
      Buy now
    </button>
  );
}
