import styles from './Navbar.module.css';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <div>
        <div className={styles.navContent}>
          <div>Home</div>
          <div>About</div>
          <div>Projects</div>
        </div>
        <div className={styles.mobileIcons}>
          <MenuIcon style={{ color: 'white' }} fontSize='large' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
