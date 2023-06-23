import Btn from "../UI/btn/Btn";
import styles from "./cardMore.module.css";

interface cardMoreProps {
  imgUrl: string;
  title: string;
}

const CardMore: React.FC<cardMoreProps> = ({ imgUrl, title }) => {
  return (
    <div className={styles.cardMore}>
      <img src={imgUrl} alt="" className={styles.cardMoreBg} />
      <h3 className={styles.cardMoreTitle}>{title}</h3>
      <Btn />
    </div>
  );
};

export default CardMore;
