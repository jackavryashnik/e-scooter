import css from './HeroTitle.module.css';

export default function HeroTitle() {
  return (
    <div>
      <h1 className={css.title}>
        Let&apos;s ride
        <span className={css.span}> the future.</span>
      </h1>
      <p className={css.description}>
        Simple and sleek design with users in mind.
      </p>
    </div>
  );
}
