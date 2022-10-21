import React from "react";
import Card from "../../Components/Card";
import styles from "./Movies.module.css";

interface IMoviesProps {
  children?: React.ReactNode;
  filteredArray: any;
  setFilteredArray: any;
}

const Movies: React.FC<IMoviesProps> = ({
  filteredArray,
  setFilteredArray,
}) => {
  const data = filteredArray.filter((itemData: { category: string }) => {
    return itemData.category === "Movie";
  });

  return (
    <>
      {filteredArray.length > 0 ? (
        <>
          <h2>Movies</h2>
          <div className="list">
            {data.map((elem: any) => {
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
      ) : (
        <h3>Nothing found...</h3>
      )}
    </>
  );
};

export default Movies;
