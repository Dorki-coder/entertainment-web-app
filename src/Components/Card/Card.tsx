import React, { useState } from "react";
import styles from "./Card.module.css";

interface ICardProps {
  data: any;
  setFilteredArray: any;
  filteredArray: any;
}

const Card: React.FC<ICardProps> = ({
  data,
  setFilteredArray,
  filteredArray,
}) => {
  const handleClick = () => {
    const array = filteredArray.map((e: any) => {
      if (e === data) {
        e.isBookmarked = !e.isBookmarked;
        return e;
      } else return e;
    });
    localStorage.setItem("localData", JSON.stringify(array));
    setFilteredArray(array);
  };

  const [isHovering, setHovering] = useState(false);
  return (
    <div className={styles.card}>
      <img src={data.thumbnail.regular.large} alt={data.title} />
      <div className={styles.descrition}>
        <div>{data.year}</div>
        <div>·</div>
        <div>{data.category}</div>
        <div>·</div>
        <div>{data.rating}</div>
      </div>
      <button
        onClick={handleClick}
        className={styles.bookmark}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {data.isBookmarked === true ? (
          <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"
              fill="#FFF"
            />
          </svg>
        ) : (
          <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
              stroke={isHovering ? "#10141E" : "#FFFFFF"}
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        )}
      </button>
      <h3>{data.title}</h3>
    </div>
  );
};

export default Card;
