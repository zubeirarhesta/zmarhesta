import styles from "@/components/ui/card.module.css";

export default function Card({ image }) {
  return (
    <div className={styles.card}>
      <img className={styles.card_img} src={`/images/${image}`} />
    </div>
  );
}
