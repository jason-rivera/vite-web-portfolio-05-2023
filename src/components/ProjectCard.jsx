import styles from './ProjectCard.module.css';
import PropTypes from 'prop-types';

const ProjectCard = (props) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.hello}
        style={{ height: props.height + 'px', backgroundColor: props.bgColor }}
      >
        Image goes here
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  height: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default ProjectCard;
