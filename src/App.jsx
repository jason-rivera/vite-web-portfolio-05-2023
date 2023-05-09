import styles from './styles/global.module.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className={styles.topBanner}>
        <div className={styles.topBannerContent}>
          <div>
            <div>JASON RIVERA</div>
            <div>Web Developer</div>
          </div>
          <div>GIT / INSTA / EMAIL</div>
        </div>
      </div>
      <div className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <h1>ABOUT</h1>
          <p>
            Hi, I'm Jason. I'm a web developer and UI/UX designer. My primary
            expertise is in front-end development and design, particularly
            HTML/CSS/JS and using frameworks like React to build web apps. I
            also do backend work, tooling, testing, DevOps, mobile, and
            small-scale game development. I have a bunch of past projects you
            can check out below. If you want to get in touch, feel free to shoot
            me a message on LinkedIn or just email me.
          </p>
        </div>
      </div>
      <div className={styles.projectsSection}>Projects section</div>
      <div className={styles.footer}>Footer</div>
    </>
  );
}

export default App;
