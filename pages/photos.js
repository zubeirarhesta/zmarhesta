import { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import styles from "@/styles/About.module.css";
import Card from "@/components/ui/card";
import { photos } from "@/data";
import Image from "next/image";

export default function Photos() {
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
        <img src="/images/parallax.jpeg" className={styles.background} />
        <h1 className={styles.title}>PHOTOS</h1>
      </div>

      <div
        className={`${styles.section} ${
          isContentIntersecting ? `${styles.colored_section}` : ""
        }`}
        ref={contentRef}
      >
        <div className={styles.section_title_wrapper}>
          <p
            className={`${styles.section_title} ${
              isContentIntersecting ? `${styles.fadeIn}` : ""
            }`}
          >
            all photos
          </p>
        </div>

        <Swiper
          className={`${styles.swiper} ${
            isContentIntersecting ? `${styles.reveal}` : ""
          }`}
          spaceBetween={10}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          effect={"coverflow"}
          grabCursor={"true"}
          centeredSlides={"true"}
          slidesPerView={"auto"}
          loop={true}
          mousewheel={true}
          coverflowEffect={{
            rotate: 20,
            stretch: 25,
            depth: 250,
            modifier: 2.5,
          }}
        >
          {photos.map((photo) => (
            <SwiperSlide className={styles.slide} key={photo.id}>
              <div id={styles.slide_img_alt}>
                <div id={styles.img_alt_wrapper}>
                  <h3 id={styles.img_alt}>{photo.alt}</h3>
                </div>
              </div>
              <Image
                id={styles.slide_img}
                src={`/images/${photo.url}`}
                width={300}
                height={400}
                alt={photo.alt}
                quality={80}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <p
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
        </p> */}
      </div>
    </div>
  );
}
