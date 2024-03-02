import css from './PropertyItem.module.css';

export default function PropertyList({ description, span, property }) {
  return (
    <li className={css.listItem}>
      <p className={css.description}>
        {description}
        <span className={css.span}>{span}</span>
      </p>
      <p className={css.property}>{property}</p>
    </li>
  );
}
