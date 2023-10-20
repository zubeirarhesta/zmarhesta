import styles from "@/components/layout/main-navigation.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function MainNavigation() {
  const [navbarActive, setNavbarActive] = useState(false);
  const navbarRef = useRef(null);
  const router = useRouter();

  const changeActive = () => {
    if (window.scrollY >= 20) {
      setNavbarActive(true);
    } else {
      setNavbarActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeActive);
  }, [changeActive]);

  if (router.pathname === "/about" || router.pathname === "/contact") {
    return (
      <header
        className={`${styles.navbar} ${styles.navbar_active}`}
        ref={navbarRef}
      >
        <Link href="/" className={`${styles.logo} ${styles.logo_active}`}>
          zmarhesta
        </Link>
        <ul className={`${styles.links} ${styles.links_active}`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </header>
    );
  }

  return (
    <header
      className={`${styles.navbar} ${
        navbarActive ? `${styles.navbar_active}` : ""
      } `}
      ref={navbarRef}
    >
      <Link
        href="/"
        className={`${styles.logo} ${
          navbarActive ? `${styles.logo_active}` : ""
        } `}
      >
        zmarhesta
      </Link>
      <ul
        className={`${styles.links} ${
          navbarActive ? `${styles.links_active}` : ""
        } `}
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
}
