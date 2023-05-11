import styles from './ProjectCard.module.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PropTypes from 'prop-types';

const ProjectCard = ({
  image,
  title,
  subtitle,
  description,
  btnText,
  btnLink,
  techIcons,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <img className={styles.image} src={image} />

        <div className={styles.belowImageContainer}>
          <div className={styles.topContainer}>
            <div>
              <div className={styles.title}>{title}</div>
            </div>
            <div className={styles.projectIconsContainer}>
              {techIcons.map((iconLink, index) => (
                <img
                  key={index}
                  src={iconLink}
                  className={styles.projectIcon}
                />
              ))}
            </div>
          </div>
          <div className={styles.subtitle}>{subtitle}</div>

          <div className={styles.descriptionContainer}>{description}</div>

          <a href={btnLink} target='_blank' rel='noreferrer'>
            <button className={styles.cardBtn}>
              {btnText}
              <KeyboardArrowRightIcon />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  btnLink: PropTypes.string.isRequired,
  techIcons: PropTypes.array.isRequired,
};

export default ProjectCard;
