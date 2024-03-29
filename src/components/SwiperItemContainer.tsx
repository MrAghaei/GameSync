import Item, { ItemInputDataModel } from "./Item";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
interface SwiperItemContainerInputDataModel {
  headline: string;
  gameList: ItemInputDataModel[];
}
interface SwiperItemContainerInputModel {
  data: SwiperItemContainerInputDataModel;
  handleOpenDialog: (gameId: string) => void;
}

function SwiperItemContainer(data: SwiperItemContainerInputModel) {
  return (
    <div className={"bg-gray-dark max-w-max h-auto"}>
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-4 md:mb-0">
          {data.data.headline}
        </h2>
        <button className="text-2xl font-bold text-white">See more</button>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {data.data.gameList.map((item) => (
          <SwiperSlide key={item.gameName}>
            <Item
              data={item}
              key={item.gameName}
              handleOpenDialog={() => {
                data.handleOpenDialog(item.id);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperItemContainer;
