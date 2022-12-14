import React from "react";
import Card from "../../Components/Card";
import styles from "./TV.module.css";

interface ITVProps {
  children?: React.ReactNode;
  filteredArray: any;
  setFilteredArray: any;
}

const TV: React.FC<ITVProps> = ({ filteredArray, setFilteredArray }) => {
  const data = filteredArray.filter((itemData: { category: string }) => {
    return itemData.category === "TV Series";
  });
  return (
    <>
      {filteredArray.length > 0 ? (
        <>
          {" "}
          <h2>TV Series</h2>
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
        <h3>Nothing found</h3>
      )}
    </>
  );
};

export default TV;
