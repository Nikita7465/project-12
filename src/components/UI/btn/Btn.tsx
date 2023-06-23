import styles from "./btn.module.css";

const Btn = () => {
  return (
    <div className={styles.btnWrap}>
      <button className={styles.btn}>More</button>
    </div>
  );
};

export default Btn;
