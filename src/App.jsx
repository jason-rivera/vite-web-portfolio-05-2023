import styles from './styles/global.module.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
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
        <div className={styles.projectsSectionContent}>
          <ProjectCard height='200' bgColor='red' />
          <ProjectCard height='300' bgColor='blue' />
          <ProjectCard height='250' bgColor='green' />
          <ProjectCard height='350' bgColor='grey' />
          <ProjectCard height='300' bgColor='pink' />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
