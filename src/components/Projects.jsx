import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <div id='projects' className={styles.projectsSection}>
      <div className={styles.projectsTitle}>PROJECTS</div>
      <div className={styles.projectsSectionContent}>
        <ProjectCard
          title='Glentel Inc.'
          subtitle='03/2023 - 05/2023'
          description='Recreated the corporate website using Astro which increased load times by 50% and integrated Directus CMS for content management.'
          btnText='View it live'
          btnLink='https://black-beach-023542a10.2.azurestaticapps.net/en/'
          image='https://newglentel.directus.app/assets/1d6d16ef-f001-4a91-93a4-dc0386676388'
          techIcons={[
            'https://astro-build.gallerycdn.vsassets.io/extensions/astro-build/astro-vscode/1.0.4/1683133116776/Microsoft.VisualStudio.Services.Icons.Default',
            'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
            'https://private-user-images.githubusercontent.com/58869791/237780179-9daa351e-84a9-40eb-8a7c-bfc68ad7af7c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJrZXkxIiwiZXhwIjoxNjgzODMxMDI3LCJuYmYiOjE2ODM4MzA3MjcsInBhdGgiOiIvNTg4Njk3OTEvMjM3NzgwMTc5LTlkYWEzNTFlLTg0YTktNDBlYi04YTdjLWJmYzY4YWQ3YWY3Yy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwNTExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDUxMVQxODQ1MjdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iZDhmNWNmNWQ1MTkzZTNiMDE0ZDk5ZmEzNTNhZGUyZDA1YzdmNmIxMzAzYzk5NjdkMzgyNWU2ZTNlOTc5OTgyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.DIPLX5-a0L8BGavpIt85vZXlx0kH7naqJw8skPbaEEs',
          ]}
        />
        <ProjectCard
          title='Twitter Clone'
          subtitle='09/2022 - 12/2022'
          description='Developed a functional and responsive Twitter Clone using the MERN stack with key features such as user authentication, profiles, tweets, real-time updates, and integrating JWT tokens and RESTful API for secure communication.'
          btnText='View the source'
          btnLink='https://github.com/jason-rivera/insta-clone-fe'
          image='https://cdn.dribbble.com/users/1578582/screenshots/15847097/media/95f9cdd3c745f636860e38f3dd4d1a6f.png'
          techIcons={[
            'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png',
            'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
            'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png',
          ]}
        />
        <ProjectCard
          title='Hacker Detector'
          subtitle='05/2021 - 05/2022'
          description='During my co-op at Secure Hive, I worked on the Hacker Detector project which is a web application that detects hackers and their location using the IP address. I was responsible for the front-end development of the application using Vue.'
          btnText='View It Live'
          btnLink='https://www.jasonrivera.xyz'
          image='https://private-user-images.githubusercontent.com/58869791/237798121-ed7f4881-ae34-476b-8ecf-fa5c62a26e68.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJrZXkxIiwiZXhwIjoxNjgzODM1MTE4LCJuYmYiOjE2ODM4MzQ4MTgsInBhdGgiOiIvNTg4Njk3OTEvMjM3Nzk4MTIxLWVkN2Y0ODgxLWFlMzQtNDc2Yi04ZWNmLWZhNWM2MmEyNmU2OC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwNTExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDUxMVQxOTUzMzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wMzk3ODg5NmUyYjU5MDJiNjU4ZDNiYTA2NWMzNTJhYTJkMDNiYmM2MmFjMzc3MTFlZmQ4ZDU3Yjc1N2NkMGJiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.DraRlYvzEFsthrBgqXvIJyKs254HAxi5KS8bp8Ub6x4'
          techIcons={[
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png',
            'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
          ]}
        />
      </div>
    </div>
  );
};

export default Projects;
