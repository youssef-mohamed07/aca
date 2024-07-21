import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useProPlayers } from "../../hooks/useProPlayers";
import { BounceLoader } from "react-spinners";
import ProPlayers from "./ProPlayers";
import PlayerCarfContainer from "../TrainingSessions/PlayerCartContainer";

const Container = ({data}) => {

  return (
    <section
      dir="rtl"
      className={`flex w-full flex-col items-end justify-start gap-[16px] max-w-full text-right text-21xl text-blanc font-ibm-plex-sans-arabic`}
    >
      <div className="flex w-full flex-col items-start justify-start py-0 px-5 mb-5 box-border gap-[16px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq750:box-border">
        <h1 className="m-0 w-[386px] relative text-inherit leading-[150%] font-bold font-inherit inline-block max-w-full mq450:text-5xl mq450:leading-[36px] mq1050:text-13xl mq1050:leading-[48px]">
          لاعبي الاكاديمية المحترفين
        </h1>
        <div className="w-96 relative text-base leading-[21px] inline-block max-w-full">
          اللاعبين هم خريجي الاكاديمية و هم الان متاحين للبيع
        </div>
      </div>
      {data!==undefined?

        <Swiper
          className="flex md:px-0 px-5 flex-row box-border max-w-full text-center text-base"
          modules={[Navigation]}
          navigation={true}
          breakpoints={{
            500: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1300: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {data?.map((p) => (
            <>
              <SwiperSlide key={p.id}>
              <PlayerCarfContainer
    item={p}
    state={'pro'}
    />
              </SwiperSlide>
            </>
          ))}
        </Swiper>
     :
     <>
     </>
}
    </section>
  );
};

export default Container;
