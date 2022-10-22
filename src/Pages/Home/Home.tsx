import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../../Components/Card";
import styles from "./Home.module.css";

import "swiper/modules/pagination/pagination.min.css";
import "swiper/swiper.min.css";
import SliderCard from "../../Components/SliderCard";

interface IHomeProps {
  inputValue: string;
  filteredArray: any;
  setFilteredArray: any;
  array: any;
}

const Home: React.FC<IHomeProps> = ({
  filteredArray,
  setFilteredArray,
  array,
}) => {
  const trendingArray = array.filter((e: any) => {
    return e.isTrending === true;
  });

  return (
    <>
      <section>
        <h2> Trending</h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={2.5}
          breakpoints={{
            375: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
            1100: {
              width: 1100,
              slidesPerView: 2.5,
            },
          }}
          className={styles.slider__wrapper}
        >
          {trendingArray.map((e: any) => {
            return (
              <SwiperSlide key={e.title}>
                <SliderCard
                  key={e.title}
                  data={e}
                  filteredArray={filteredArray}
                  setFilteredArray={setFilteredArray}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      <section>
        <h2>Recommended for you</h2>
        <div className="list">
          {filteredArray.map((elem: any) => {
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
      </section>
    </>
  );
};

export default Home;
