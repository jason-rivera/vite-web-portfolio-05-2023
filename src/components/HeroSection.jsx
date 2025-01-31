import styles from './HeroSection.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AddIcon from '@mui/icons-material/Add';

const HeroSection = () => {
  return (
    <section id='home' className={styles.topBanner}>
      <div className={styles.topBannerContent}>
        <div>
          <div className={styles.header}>
            Jason <b>Rivera</b>
          </div>
          <div className={styles.subheader}>
            <span>Full Stack Developer</span>
            <span>
              <AddIcon style={{ paddingLeft: '2px' }} fontSize='small' />
              ReactJS Powered
            </span>
            {/* Web Developer */}
          </div>
        </div>
        <div className={styles.heroIconSection}>
          <a
            className={styles.heroIconContainer}
            href='https://github.com/jason-rivera'
            target='_blank'
            rel='noreferrer'
          >
            <GitHubIcon />
          </a>
          <a
            className={styles.heroIconContainer}
            href='https://www.linkedin.com/in/rivera-jason/'
            target='_blank'
            rel='noreferrer'
          >
            <LinkedInIcon />
          </a>
          <a
            className={styles.heroIconContainer}
            href='mailto:jp_rivera_+web@hotmail.com'
          >
            <EmailIcon />
          </a>
        </div>
      </div>
      <a href='#about' className={`${styles.arrow} ${styles.bounce}`}>
        <ArrowDownwardIcon fontSize='large' />
      </a>
    </section>
  );
};

export default HeroSection;
