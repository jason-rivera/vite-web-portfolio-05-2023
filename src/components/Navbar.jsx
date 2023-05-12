import styles from './Navbar.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerClick = () => {
    const root = document.getElementById('all-container');
    root.style.translate = isOpen ? '0px' : '-250px';
    console.log('ham clicked');
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = () => {
    const root = document.getElementById('all-container');
    root.style.translate = '0px';
    setIsOpen(false);
  };

  // const root = document.getElementById('all-container');
  // window.addEventListener('click', (e) => {
  //   if (isOpen) {
  //     if (!root.contains(e.target)) {
  //       root.style.translate = '0px';
  //       setIsOpen(false);
  //     }
  //   } else {
  //     return;
  //   }
  // });

  useEffect(() => {}, []);

  return (
    <>
      <div id='navbar' className={styles.navContainer}>
        <div>
          <div className={styles.navContent}>
            <a href='#home'>Home</a>
            <a href='#about'>About</a>
            <a href='#projects'>Projects</a>
          </div>

          <div
            className={styles.hamburgerMenu}
            onClick={() => handleHamburgerClick()}
          >
            <span id='hamburger'>
              {isOpen ? (
                <CloseIcon style={{ color: 'white' }} fontSize='large' />
              ) : (
                <MenuIcon style={{ color: 'white' }} fontSize='large' />
              )}
            </span>
          </div>
        </div>
      </div>

      {/** Testing MOBILE NAV */}
      <div
        id='mobileNavBar'
        className={`${styles.mobileNav} ${isOpen && styles.active}`}
      >
        <div className={styles.mobileNavContent}>
          <div>
            <a href='#home' onClick={() => handleNavLinkClick()}>
              Home
            </a>
          </div>
          <div>
            <a href='#about' onClick={() => handleNavLinkClick()}>
              About
            </a>
          </div>
          <div>
            <a href='#projects' onClick={() => handleNavLinkClick()}>
              Projects
            </a>
          </div>
        </div>
      </div>
      {/** End Testing */}
    </>
  );
};

export default Navbar;
