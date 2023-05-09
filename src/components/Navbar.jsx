import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navContent}>
        <div>Home</div>
        <div>About</div>
        <div>Projects</div>
      </div>
    </div>
  );
};

export default Navbar;
