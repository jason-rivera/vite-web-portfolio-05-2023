import React from 'react';
// Lazily loading ProjectCards
const ProjectCard = React.lazy(() => import('./ProjectCard'));

import styles from './Projects.module.css';
import hackerDetectorImage from '../assets/hacker-detector-image.png';
import preggoImage from '../assets/website-preggo-thumbnail-2.png';
import SectionTitle from './SectionTitle';

const Projects = () => {
  const astroIcon = [
    'Astro',
    'https://astro-build.gallerycdn.vsassets.io/extensions/astro-build/astro-vscode/1.0.4/1683133116776/Microsoft.VisualStudio.Services.Icons.Default',
  ];
  const javaScriptIcon = [
    'JavaScript',
    'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
  ];
  const directusIcon = [
    'Directus CMS',
    'https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/764d7f73-1254-41ad-b31b-f988f0a39b5d.png',
  ];
  const reactIcon = [
    'React',
    'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png',
  ];
  const nodeIcon = [
    'Node',
    'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png',
  ];
  const vueIcon = [
    'Vue',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png',
  ];
  const htmlIcon = ['HTML5', 'https://semibran.github.io/assets/icon-html.svg'];
  const cssIcon = ['CSS3', 'https://semibran.github.io/assets/icon-css.svg'];
  const svelteIcon = [
    'Svelte',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png',
  ];
  const chatGPTIcon = [
    'ChatGPT',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/120px-ChatGPT_logo.svg.png',
  ];
  const awsLambda = [
    'AWS Lambda',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Amazon_Lambda_architecture_logo.svg/1200px-Amazon_Lambda_architecture_logo.svg.png',
  ];

  return (
    <section id='projects' className={styles.projectsSection}>
      <SectionTitle title='Projects' />
      <div className={styles.projectsSectionContent}>
        <ProjectCard
          title='PreggoGPT'
          subtitle='05/2023'
          description='PreggoGPT is a web app that I developed using Svelte. It leverages the ChatGPT API to provide valuable insights on the safety of consuming different food and drink items during pregnancy. I used AWS Lambda for the backend.'
          btnText='View it live'
          btnLink='https://preggo.jasonrivera.xyz'
          image={preggoImage}
          techIcons={[chatGPTIcon, awsLambda, svelteIcon]}
        />
        <ProjectCard
          title='Glentel Inc.'
          subtitle='03/2023 - 05/2023'
          description='Recreated the corporate website using Astro which decreased load times by 50%. I also integrated Directus CMS for content management.'
          btnText='View it live'
          btnLink='https://black-beach-023542a10.2.azurestaticapps.net/en/'
          image='https://newglentel.directus.app/assets/1d6d16ef-f001-4a91-93a4-dc0386676388'
          techIcons={[astroIcon, directusIcon]}
        />
        <ProjectCard
          title='Twitter Clone'
          subtitle='09/2022 - 12/2022'
          description='Developed a functional and responsive Twitter Clone using the MERN stack with key features such as user authentication, profiles, tweets, real-time updates, and integrating JWT tokens and RESTful API for secure communication.'
          btnText='View the source code'
          btnLink='https://github.com/jason-rivera/insta-clone-fe'
          image='https://cdn.dribbble.com/users/1578582/screenshots/15847097/media/95f9cdd3c745f636860e38f3dd4d1a6f.png'
          techIcons={[reactIcon, nodeIcon]}
        />
        <ProjectCard
          title='Hacker Detector'
          subtitle='05/2021 - 05/2022'
          description="Hacker Detector is a web application that detects hackers and their IP addresses. I was responsible for the front-end development of the web application using Vue.js. I also created an admin panel that utilizes the company's RESTful API to easily manage it's data."
          btnText='View it live'
          btnLink='https://hackerdetector.com/'
          image={hackerDetectorImage}
          techIcons={[vueIcon]}
        />
        <ProjectCard
          title='Marvel Search Engine'
          subtitle='2021'
          description='Built a search engine using the Marvel API which allows users to search for their favourite Marvel characters and comics.'
          btnText='View the source code'
          btnLink='https://github.com/jason-rivera/marvel-api'
          image='https://wallpapers.com/images/featured/bte9zcsa9pvyzpvk.jpg'
          techIcons={[reactIcon]}
        />
        <ProjectCard
          title='Amiibo Finder'
          subtitle='2021'
          description='Built an Amiibo Finder web application using the Amiibo API. It allows users to search for their favourite Amiibo characters.'
          btnText='View the source code'
          btnLink='https://github.com/jason-rivera/amiibo-finder'
          image='https://sm.ign.com/ign_ap/news/f/first-two-waves-of-amiibo-detailed-with-release-da/first-two-waves-of-amiibo-detailed-with-release-da_mk5c.jpg'
          techIcons={[javaScriptIcon, htmlIcon, cssIcon]}
        />
      </div>
    </section>
  );
};

export default Projects;
