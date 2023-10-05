import styles from "@/components/layout/main-navigation.module.css";
import { useEffect, useRef, useState } from "react";

export default function MainNavigation() {
  const [navbarActive, setNavbarActive] = useState(false);
  const navbarRef = useRef(null);

  const changeActive = () => {
    if (window.scrollY >= 20) {
      setNavbarActive(true);
    } else {
      setNavbarActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeActive);
  }, []);

  return (
    <header
      className={`${styles.navbar} ${
        navbarActive ? `${styles.navbar_active}` : ""
      } `}
      ref={navbarRef}
    >
      <a
        href="#"
        className={`${styles.logo} ${
          navbarActive ? `${styles.logo_active}` : ""
        } `}
      >
        zmarhesta
      </a>
      <ul
        className={`${styles.links} ${
          navbarActive ? `${styles.links_active}` : ""
        } `}
      >
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </header>
  );
}
