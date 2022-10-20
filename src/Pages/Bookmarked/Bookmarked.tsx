import React from "react";
import Card from "../../Components/Card";
import styles from "./Bookmarked.module.css";

interface IBookmarkedProps {
  children?: React.ReactNode;
  filteredArray: any;
  setFilteredArray: any;
}

const Bookmarked: React.FC<IBookmarkedProps> = ({
  filteredArray,
  setFilteredArray,
}) => {
  const tvSeriesArray = filteredArray.filter((e: any) => {
    return e.category === "TV Series" && e.isBookmarked === true;
  });

  const moviesArray = filteredArray.filter((e: any) => {
    return e.category === "Movie" && e.isBookmarked === true;
  });

  return (
    <>
      {moviesArray.length > 0 ? (
        <>
          <h2>Bookmarked Movies</h2>
          <div className="list">
            {moviesArray.map((elem: any) => {
              return (
                <Card
                  key={elem.title}
                  data={elem}
                  filteredArray={filteredArray}
                  setFilteredArray={setFilteredArray}
                />
              );
            })}
          </div>
        </>
      ) : null}
      {tvSeriesArray.length > 0 ? (
        <>
          <h2>Bookmarked TV Series</h2>
          <div className="list">
            {tvSeriesArray.map((elem: any) => {
              return (
                <Card
                  key={elem.title}
                  data={elem}
                  filteredArray={filteredArray}
                  setFilteredArray={setFilteredArray}
                />
              );
            })}
          </div>
        </>
      ) : null}
    </>
  );
};

export default Bookmarked;
