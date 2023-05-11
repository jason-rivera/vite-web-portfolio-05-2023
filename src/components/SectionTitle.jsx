import styles from './SectionTitle.module.css';
import PropTypes from 'prop-types';

const SectionTitle = ({ title }) => {
  return <div className={styles.title}>{title}</div>;
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
