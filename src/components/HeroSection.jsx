import styles from './HeroSection.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const HeroSection = () => {
  return (
    <div className={styles.topBanner}>
      <div className={styles.topBannerContent}>
        <div>
          <div className={styles.header}>
            JASON <b>RIVERA</b>
          </div>
          <div className={styles.subheader}>
            Fullstack Developer
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
    </div>
  );
};

export default HeroSection;
