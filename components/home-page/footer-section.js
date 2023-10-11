import styles from "@/components/home-page/footer-section.module.css";
import Link from "next/link";
import { forwardRef } from "react";

const Footer = forwardRef(({ iconVisibility }, ref) => {
  return (
    <div ref={ref} className={styles.footer_container}>
      <div className={styles.footer_title}>
        <p>stacks used for this website</p>
        <h3> html, css, js, react</h3>
      </div>
      <ul className={styles.footer_icons}>
        <li
          className={`${styles.hidden} ${
            iconVisibility ? `${styles.show}` : ""
          }`}
        >
          <Link href="https://www.facebook.com/zmarhesta">
            <i className="fa fa-facebook"></i>
          </Link>
        </li>
        <li
          className={`${styles.hidden} ${
            iconVisibility ? `${styles.show}` : ""
          }`}
        >
          <p>|</p>
        </li>
        <li
          className={`${styles.hidden} ${
            iconVisibility ? `${styles.show}` : ""
          }`}
        >
          <Link href="https://www.instagram.com/zmarhesta?igshid=MzNlNGNkZWQ4Mg==">
            <i className="fa fa-instagram"></i>
          </Link>
        </li>
        <li
          className={`${styles.hidden} ${
            iconVisibility ? `${styles.show}` : ""
          }`}
        >
          <p>|</p>
        </li>
        <li
          className={`${styles.hidden} ${
            iconVisibility ? `${styles.show}` : ""
          }`}
        >
          <Link href="https://www.linkedin.com/in/zubeir-muhammad-arhesta-41b5b210b/">
            <i className="fa fa-linkedin"></i>
          </Link>
        </li>
      </ul>
      <div className={styles.footer_copyright}>
        © 2023 Zubeir Muhammad Arhesta
      </div>
    </div>
  );
});

Footer.displayName = "Footer";

export default Footer;
