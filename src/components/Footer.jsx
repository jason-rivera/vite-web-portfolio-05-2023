import styles from './Footer.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        ©2023 Jason Rivera ·{' '}
        <a
          className={styles.extraText}
          href='https://react.dev/'
          target='_blank'
          rel='noreferrer'
        >
          ReactJS Powered
        </a>
      </div>
      <div className={styles.icon}>
        <a
          href='https://github.com/jason-rivera'
          target='_blank'
          rel='noreferrer'
        >
          <GitHubIcon />
        </a>
        <a
          href='https://www.linkedin.com/in/rivera-jason/'
          target='_blank'
          rel='noreferrer'
        >
          <LinkedInIcon />
        </a>
        <a href='mailto:jp_rivera_+web@hotmail.com'>
          <EmailIcon />
        </a>
      </div>
    </div>
  );
};

export default Footer;
