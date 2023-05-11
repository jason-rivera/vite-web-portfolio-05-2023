import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';
import hackerDetectorImage from '../assets/hacker-detector-image.png';
import SectionTitle from './SectionTitle';

const Projects = () => {
  const astroIcon =
    'https://astro-build.gallerycdn.vsassets.io/extensions/astro-build/astro-vscode/1.0.4/1683133116776/Microsoft.VisualStudio.Services.Icons.Default';
  const javaScriptIcon =
    'https://cdn-icons-png.flaticon.com/512/5968/5968292.png';
  const directusIcon =
    'https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/764d7f73-1254-41ad-b31b-f988f0a39b5d.png';
  const reactIcon =
    'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png';
  const nodeIcon =
    'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png';
  const vueIcon =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png';
  const htmlIcon =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png';
  const cssIcon =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png';

  return (
    <div id='projects' className={styles.projectsSection}>
      <SectionTitle title='Projects' />
      <div className={styles.projectsSectionContent}>
        <ProjectCard
          title='Glentel Inc.'
          subtitle='03/2023 - 05/2023'
          description='Recreated the corporate website using Astro which increased load times by 50% and integrated Directus CMS for content management.'
          btnText='View it live'
          btnLink='https://black-beach-023542a10.2.azurestaticapps.net/en/'
          image='https://newglentel.directus.app/assets/1d6d16ef-f001-4a91-93a4-dc0386676388'
          techIcons={[astroIcon, javaScriptIcon, directusIcon]}
        />
        <ProjectCard
          title='Twitter Clone'
          subtitle='09/2022 - 12/2022'
          description='Developed a functional and responsive Twitter Clone using the MERN stack with key features such as user authentication, profiles, tweets, real-time updates, and integrating JWT tokens and RESTful API for secure communication.'
          btnText='View the source code'
          btnLink='https://github.com/jason-rivera/insta-clone-fe'
          image='https://cdn.dribbble.com/users/1578582/screenshots/15847097/media/95f9cdd3c745f636860e38f3dd4d1a6f.png'
          techIcons={[reactIcon, javaScriptIcon, nodeIcon]}
        />
        <ProjectCard
          title='Hacker Detector'
          subtitle='05/2021 - 05/2022'
          description='During my co-op at Secure Hive, I worked on the Hacker Detector project which is a web application that detects hackers and their IP addresses. I was responsible for the front-end development of the web application using Vue and JavaScript. I also created an admin panel that utilizes RESTful API to manage data in the database.'
          btnText='View it live'
          btnLink='https://hackerdetector.com/'
          image={hackerDetectorImage}
          techIcons={[vueIcon, javaScriptIcon, htmlIcon, cssIcon]}
        />
      </div>
    </div>
  );
};

export default Projects;
