import styles from "@/components/ui/card.module.css";

export default function Card({ image, alt }) {
  return (
    <div className={styles.card}>
      <div id={styles.card_img_alt}>
        <div id={styles.img_alt_wrapper}>
          <h3 id={styles.img_alt}>{alt}</h3>
        </div>
      </div>
      <img id={styles.card_img} src={`/images/${image}`} />
    </div>
  );
}
