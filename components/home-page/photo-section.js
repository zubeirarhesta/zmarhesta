import styles from "@/components/home-page/photo-section.module.css";
import { useEffect, useRef, useState } from "react";
import Card from "../ui/card";

export default function Photo() {
  const [isPhotoTitleIntersecting, setIsPhotoTitleIntersecting] =
    useState(false);
  const photoTitleRef = useRef(null);

  const [isCardIntersecting, setIsCardIntersecting] = useState(false);
  const cardsRef = useRef(null);

  useEffect(() => {
    const photoTitleObserver = new IntersectionObserver(
      ([entry]) => {
        setIsPhotoTitleIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    photoTitleObserver.observe(photoTitleRef.current);

    return () => photoTitleObserver.disconnect();
  }, [isPhotoTitleIntersecting]);

  useEffect(() => {
    const cardsObserver = new IntersectionObserver(
      ([entry]) => {
        setIsCardIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    cardsObserver.observe(cardsRef.current);

    return () => cardsObserver.disconnect();
  }, []);

  return (
    <section className={styles.photo_container}>
      <div
        className={`${styles.photo_title} ${
          isPhotoTitleIntersecting ? `${styles.fadeIn}` : ""
        }`}
        ref={photoTitleRef}
      >
        Featured Ones
      </div>
      <div
        className={`${styles.photo_sub_title} ${
          isPhotoTitleIntersecting ? `${styles.fadeIn}` : ""
        }`}
        ref={photoTitleRef}
      >
        featured photos taken
        <br /> by me
      </div>
      <ul className={styles.cards_container} ref={cardsRef}>
        <li
          className={`${styles.hidden} ${
            isCardIntersecting ? `${styles.slideIn}` : ""
          }`}
        >
          <Card image="card-image1.jpeg" alt="cikalong kulon, cianjur, 2022" />
        </li>
        <li
          className={`${styles.hidden} ${
            isCardIntersecting ? `${styles.slideIn}` : ""
          }`}
        >
          <Card image="card-image2.jpeg" alt="tol cipularang, km 97, 2022" />
        </li>
        <li
          className={`${styles.hidden} ${
            isCardIntersecting ? `${styles.slideIn}` : ""
          }`}
        >
          <Card image="card-image3.jpeg" alt="karang tengah, cianjur, 2022" />
        </li>
        <li
          className={`${styles.hidden} ${
            isCardIntersecting ? `${styles.slideIn}` : ""
          }`}
        >
          <Card image="card-image4.jpeg" alt="sukaluyu, cianjur, 2021" />
        </li>
      </ul>
    </section>
  );
}
