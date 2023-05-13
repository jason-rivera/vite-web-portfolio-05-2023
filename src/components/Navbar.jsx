import styles from './Navbar.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerClick = () => {
    const root = document.getElementById('all-container');
    //if you change the vw value, you must change the vw in Navbar.module.css
    root.style.translate = isOpen ? '0px' : '-40vw';
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

  useEffect(() => {
    const navigationScrollChecker = (element) => {
      // console.log(element);
      var topOfObject = element.offsetTop;
      var bottomOfWindow = window.scrollY;

      const homeLink = document.getElementById('home-link');
      const aboutLink = document.getElementById('about-link');
      const projectsLink = document.getElementById('projects-link');

      const homeLinkMobile = document.getElementById('home-link-mobile');
      const aboutLinkMobile = document.getElementById('about-link-mobile');
      const projectsLinkMobile = document.getElementById(
        'projects-link-mobile'
      );

      const underlineCSS = `
        text-decoration: underline;
        text-underline-offset: 8px;
        text-decoration-thickness: 5px;
        text-decoration-color: rgba(32, 228, 169, 1);
      `;

      const hide_underline = `rgba(32, 228, 169, 0)`;

      if (bottomOfWindow >= topOfObject) {
        if (!isOpen) {
          // console.log('not open');
          switch (element.id) {
            case 'home':
              homeLink.style.cssText = underlineCSS;
              aboutLink.style.textDecorationColor = hide_underline;
              projectsLink.style.textDecoration = hide_underline;

              break;
            case 'about':
              homeLink.style.textDecoration = hide_underline;
              aboutLink.style.cssText = underlineCSS;
              projectsLink.style.textDecoration = hide_underline;
              break;
            case 'projects':
              homeLink.style.textDecoration = hide_underline;
              aboutLink.style.textDecoration = hide_underline;
              projectsLink.style.cssText = underlineCSS;
              break;
            default:
              break;
          }
        } else {
          // console.log('open');
          switch (element.id) {
            case 'home':
              homeLinkMobile.style.cssText = underlineCSS;
              aboutLinkMobile.style.textDecorationColor = hide_underline;
              projectsLinkMobile.style.textDecoration = hide_underline;

              break;
            case 'about':
              homeLinkMobile.style.textDecoration = hide_underline;
              aboutLinkMobile.style.cssText = underlineCSS;
              projectsLinkMobile.style.textDecoration = hide_underline;
              break;
            case 'projects':
              homeLinkMobile.style.textDecoration = hide_underline;
              aboutLinkMobile.style.textDecoration = hide_underline;
              projectsLinkMobile.style.cssText = underlineCSS;
              break;
            default:
              break;
          }
        }
      }
    };

    window.addEventListener('scroll', () => {
      const sections = document.getElementsByTagName('section');
      for (let section of sections) {
        navigationScrollChecker(section);
      }
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, [isOpen]);

  return (
    <>
      <div id='navbar' className={styles.navContainer}>
        <div>
          <div className={styles.navContent}>
            <a
              className={`${styles.navLink} ${styles.homeLink}`}
              id='home-link'
              href='#home'
            >
              Home
            </a>
            <a className={`${styles.navLink}`} id='about-link' href='#about'>
              About
            </a>
            <a
              className={`${styles.navLink}`}
              id='projects-link'
              href='#projects'
            >
              Projects
            </a>
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
        className={`${styles.mobileNav} ${isOpen && styles.sideMenuActive}`}
      >
        <div className={styles.mobileNavContent}>
          <div>
            <a
              id='home-link-mobile'
              href='#home'
              className={`${styles.mobileNavLink} ${styles.homeLink}`}
              onClick={() => handleNavLinkClick()}
            >
              Home
            </a>
          </div>
          <div>
            <a
              id='about-link-mobile'
              href='#about'
              className={styles.mobileNavLink}
              onClick={() => handleNavLinkClick()}
            >
              About
            </a>
          </div>
          <div>
            <a
              id='projects-link-mobile'
              href='#projects'
              className={styles.mobileNavLink}
              onClick={() => handleNavLinkClick()}
            >
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
