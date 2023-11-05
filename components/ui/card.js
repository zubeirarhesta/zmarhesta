import styles from "@/components/ui/card.module.css";
import Image from "next/image";

export default function Card({ image, alt, date }) {
  return (
    <div className={styles.card}>
      <div id={styles.card_img_alt}>
        <div id={styles.img_alt_wrapper}>
          <h3 id={styles.img_alt}>{alt}</h3>
          <h3 id={styles.img_alt}>{date}</h3>
        </div>
      </div>
      <Image
        id={styles.card_img}
        src={`/images/${image}`}
        width={500}
        height={500}
        alt={alt}
        quality={50}
      />
    </div>
  );
}
