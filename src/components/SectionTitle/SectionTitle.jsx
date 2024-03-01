import styles from './SectionTitle.module.css';

const SectionTitle = ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>;
};

export default SectionTitle;
