import styles from './styles/global.module.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className={styles.topBanner}>
        <div className={styles.topBannerContent}>
          <div>
            <div className={styles.header}>
              JASON <b>RIVERA</b>
            </div>
            <div className={styles.subheader}>Web Developer</div>
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
      <div className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <div className={styles.sectionTitle}>ABOUT</div>
          <div className={styles.aboutColumns}>
            <div className={styles.profilePictureContainer}>
              <div className={styles.profilePicture}>
                <img src='https://media.licdn.com/dms/image/C4E03AQHHLgrFAcaZcg/profile-displayphoto-shrink_800_800/0/1609387611539?e=1689206400&v=beta&t=BXXlFy-OXEjnNCcV3x9BCPkrM8Wd1-ACkj0jJULAFgI' />
              </div>
            </div>
            <p>
              Hi, I'm Jason. I'm a web developer and UI/UX designer. My primary
              expertise is in front-end development and design, particularly
              HTML/CSS/JS and using frameworks like React to build web apps. I
              also do backend work, tooling, testing, DevOps, mobile, and
              small-scale game development. I have a bunch of past projects you
              can check out below. If you want to get in touch, feel free to
              shoot me a message on LinkedIn or just email me.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.projectsSection}>
        <div className={styles.sectionTitle}>Projects section</div>
      </div>
      <div className={styles.footer}>
        <div>©2023 Jason Rivera · MIT License</div>
        <div>GIT / LINKEDIN / EMAIL</div>
      </div>
    </>
  );
}

export default App;
