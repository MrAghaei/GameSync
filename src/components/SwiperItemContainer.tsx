import Item, { ItemInputDataModel } from "./Item";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
interface SwiperItemContainerInputDataModel {
  headline: string;
  gameList: ItemInputDataModel[];
}

function SwiperItemContainer(data: SwiperItemContainerInputDataModel) {
  return (
    <div className={"bg-gray-dark max-w-fit p-10"}>
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-4 md:mb-0">
          {data.headline}
        </h2>
        <button className="text-2xl font-bold text-white">See more</button>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        navigation
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {data.gameList.map((item) => (
          <SwiperSlide key={item.gameName}>
            <Item data={item} key={item.gameName} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperItemContainer;
