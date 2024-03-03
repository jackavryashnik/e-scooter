import styles from './SectionSubtitle.module.css';

const SectionSubtitle = ({ children }) => {
  return <p className={styles.subtitle}>{children}</p>;
};

export default SectionSubtitle;
