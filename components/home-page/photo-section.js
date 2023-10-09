import styles from "@/components/home-page/photo-section.module.css";
import { useEffect, useRef, useState } from "react";
import Card from "../ui/card";
import { photos } from "@/data";

export default function Photo({ onPhotoClick }) {
  const [isPhotoTitleIntersecting, setIsPhotoTitleIntersecting] =
    useState(false);
  const photoTitleRef = useRef(null);

  const [isCardIntersecting, setIsCardIntersecting] = useState(false);
  const cardsRef = useRef(null);

  const featuredPhotos = photos.filter((photo) => photo.isFeatured == true);

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
        {featuredPhotos.map((photo) => (
          <li
            key={photo.id}
            className={`${styles.hidden} ${
              isCardIntersecting ? `${styles.slideIn}` : ""
            }`}
            onClick={() => onPhotoClick(photo.id)}
          >
            <Card image={photo.url} alt={photo.alt} />
          </li>
        ))}
      </ul>
    </section>
  );
}
