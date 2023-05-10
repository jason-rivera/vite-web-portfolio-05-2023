import styles from './ProjectCard.module.css';
import PropTypes from 'prop-types';

const ProjectCard = (props) => {
  return (
    <div className={styles.singleCardContainer}>
      <div
        className={styles.card}
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
