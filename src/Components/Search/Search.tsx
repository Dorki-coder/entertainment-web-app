import React from "react";
import styles from "./Search.module.css";

interface ISearchProps {
  setInputValue: any;
  data: any;
  inputValue: string;
  setFilteredArray: any;
}

const Search: React.FC<ISearchProps> = ({
  setInputValue,
  data,
  inputValue,
  setFilteredArray,
}) => {
  return (
    <div className={styles.input__wrapper}>
      <img src={"/assets/icon-search.svg"} alt="searchIco" />
      <input
        placeholder="Search for movies or TV series"
        type="text"
        className={styles.input}
        onChange={(e) => {
          const filteredArray = data.filter((itemData: any) => {
            return itemData.title
              .toLocaleLowerCase()
              .includes(e.target.value.toLocaleLowerCase());
          });
          setInputValue(e.target.value);
          setFilteredArray(filteredArray);
        }}
      ></input>
    </div>
  );
};

export default Search;
