import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <div id='projects' className={styles.projectsSection}>
      <div className={styles.projectsTitle}>PROJECTS</div>
      <div className={styles.projectsSectionContent}>
        <ProjectCard height='200' bgColor='red' />
        <ProjectCard height='300' bgColor='blue' />
        <ProjectCard height='250' bgColor='green' />
        <ProjectCard height='350' bgColor='grey' />
        <ProjectCard height='300' bgColor='pink' />
      </div>
    </div>
  );
};

export default Projects;
