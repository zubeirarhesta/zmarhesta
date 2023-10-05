import styles from "@/components/home-page/hero-section.module.css";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const heroRef = useRef(null);
  const [isProfileScrolled, setIsProfileScrolled] = useState(false);

  const animateProfile = () => {
    if (
      window.scrollY >= 10 /* &&
      window.scrollY <=
        heroRef.current.offsetHeight - heroRef.current.offsetHeight / 2 */
    ) {
      setIsProfileScrolled(true);
    } else {
      setIsProfileScrolled(false);
    }
  };

  useEffect(() => {
    console.log(heroRef.current.offsetHeight);
    window.addEventListener("scroll", animateProfile);
  }, []);

  return (
    <div className={styles.hero} ref={heroRef}>
      {/* <div className={styles.profile_container}> */}
      <img
        className={`${styles.profile_img} ${
          isProfileScrolled ? `${styles.scrolled}` : ""
        }`}
        src="/images/profile-image.JPG"
      />
      <div
        className={`${styles.profile_desc} ${
          isProfileScrolled ? `${styles.revealed}` : ""
        }`}
      >
        <h1>Zubeir Arhesta</h1>
        <p>I love programming and photography</p>
      </div>
      {/* </div> */}
      {/* <img className={styles.hero_img} src="/images/hero-image.jpeg" /> */}
    </div>
  );
}
