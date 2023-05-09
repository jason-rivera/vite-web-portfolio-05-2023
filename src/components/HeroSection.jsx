import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <div className={styles.topBanner}>
      <div className={styles.topBannerContent}>
        <div>
          <div className={styles.header}>
            JASON <b>RIVERA</b>
          </div>
          <div className={styles.subheader}>
            Under Construction
            {/* Web Developer */}
          </div>
        </div>
        <div className={styles.heroIconSection}>
          <div className={styles.heroIconContainer}>
            <img
              className={styles.heroIcon}
              src='https://www.svgrepo.com/show/512317/github-142.svg'
            />
          </div>
          <div className={styles.heroIconContainer}>
            <img
              className={styles.heroIcon}
              src='https://www.svgrepo.com/show/506517/linkedin.svg'
            />
          </div>
          <div className={styles.heroIconContainer}>
            <img
              className={styles.heroIcon}
              src='https://www.svgrepo.com/show/511917/email-1572.svg'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
