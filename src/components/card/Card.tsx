import styles from "./card.module.css";

interface cardProps {
  imgUrl: string;
  title: string;
  author: string;
  text: string;
  hoursCount: number;
  lessonsCount: number;
  levelCount: string;
}

const Card: React.FC<cardProps> = ({
  imgUrl,
  title,
  author,
  text,
  hoursCount,
  lessonsCount,
  levelCount,
}): React.ReactElement => {
  return (
    <div className={styles.card}>
      <img src={imgUrl} alt="" className={styles.cardImg} />
      <div className={styles.cardTextWrap}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <span className={styles.cardAuthor}>{author}</span>
        <p className={styles.cardText}>{text}</p>
      </div>

      <div className={styles.cardDesc}>
        <span className={styles.desc}>
          <img src="time.svg" alt="" className={styles.cardDescIcon} />
          <span>{hoursCount} </span> hours
        </span>

        <span className={styles.desc}>
          <img src="lessons.svg" alt="" className={styles.cardDescIcon} />
          <span>{lessonsCount}</span> lessons
        </span>

        <span className={styles.desc}>
          <img src="level.svg" alt="" className={styles.cardDescIcon} />
          <span>{levelCount}</span> level
        </span>
      </div>
    </div>
  );
};

export default Card;
