import styles from "@/components/ui/modal.module.css";
import { photos } from "@/data";

const Modal = ({ id, onClose, isOpen }) => {
  const currentPhoto = photos.find((e) => e.id == id);

  return (
    <div
      className={`${styles.modal_container} ${
        isOpen ? `${styles.modal_show}` : ""
      }`}
      onClick={onClose}
    >
      <h3>{currentPhoto?.alt}</h3>
      <img
        className={`${styles.modal_img} ${isOpen ? `${styles.img_show}` : ""}`}
        src={`/images/${currentPhoto?.url}`}
      />
      <button
        className={`${styles.modal_close} ${
          isOpen ? `${styles.close_rotate}` : ""
        }`}
        onClick={onClose}
      >
        <i className="material-icons">close</i>
      </button>
    </div>
  );
};

export default Modal;
