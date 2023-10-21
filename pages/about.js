import { useEffect, useRef, useState } from "react";
import styles from "@/styles/About.module.css";
import Image from "next/image";

export default function About() {
  const [isContentIntersecting, setIsContentIntersecting] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const contentObserver = new IntersectionObserver(
      ([entry]) => {
        setIsContentIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    contentObserver.observe(contentRef.current);
    return () => contentObserver.disconnect();
  }, [isContentIntersecting]);

  useEffect(() => {
    if (isContentIntersecting) {
    } else {
    }
  }, [isContentIntersecting]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Image
          src="/images/parallax3.jpeg"
          className={styles.background}
          width={800}
          height={500}
          alt="parallax background"
          quality={50}
        />
        <h1 className={styles.title}>ABOUT</h1>
      </div>

      <div className={styles.section} ref={contentRef}>
        <p
          className={`${styles.p} ${
            isContentIntersecting ? `${styles.reveal}` : ""
          }`}
        >
          This ABOUT page is under contruction <br />
          <br />
          This page uses both <br />
          <br />
          parallax effect with pure css and <br />
          <br />
          animation on scroll using intersection observer
        </p>
      </div>
    </div>
  );
}
