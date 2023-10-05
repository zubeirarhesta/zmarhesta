import styles from "@/components/home-page/photo-section.module.css";
import { useEffect, useRef, useState } from "react";

export default function Photo() {
  const [isPhotoTitleIntersecting, setIsPhotoTitleIntersecting] =
    useState(false);
  const photoTitleRef = useRef(null);

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

  return (
    <section className={styles.photo_container}>
      <div
        className={`${styles.photo_title} ${
          isPhotoTitleIntersecting ? `${styles.fadeIn}` : ""
        }`}
        ref={photoTitleRef}
      >
        My Photographs
      </div>
    </section>
  );
}
