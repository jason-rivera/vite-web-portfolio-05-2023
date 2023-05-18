import styles from './About.module.css';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section id='about' className={styles.aboutSection}>
      <SectionTitle title='About' />
      <div className={styles.aboutContent}>
        <div className={styles.aboutColumns}>
          <div className={styles.profilePictureContainer}>
            <div className={styles.profilePicture}>
              {/* <img src='https://media.licdn.com/dms/image/C4E03AQHHLgrFAcaZcg/profile-displayphoto-shrink_800_800/0/1609387611539?e=1689206400&v=beta&t=BXXlFy-OXEjnNCcV3x9BCPkrM8Wd1-ACkj0jJULAFgI' /> */}
            </div>
          </div>
          <div>
            <p>
              Hi, I'm Jason. I'm a full stack developer and UI/UX designer with
              2 years of work experience. My primary expertise is in front-end
              development and design, particularly HTML, CSS, and JavaScript and
              using frameworks like React to build web apps. I also do backend
              work by utilizing RESTful API as well as testing and mobile
              development.
            </p>
            <p>
              I have a bunch of past projects you can check out below. If you
              want to get in touch, feel free to shoot me a message on{' '}
              <a
                className={styles.aboutLinks}
                href='https://www.linkedin.com/in/rivera-jason/'
                target='_blank'
                rel='noreferrer'
              >
                LinkedIn
              </a>{' '}
              or just{' '}
              <a
                className={styles.aboutLinks}
                href='mailto:jp_rivera_@hotmail.com'
              >
                email me
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
