import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
// import { useYouthPlayers } from "../../hooks/useYouthPlayers";
import { BounceLoader } from "react-spinners";
import YouthPlayers from "./YouthPlayers";
import TrainingCardContainer from "../TrainingSessions/TrainingCardContainer";
import PlayerCarfContainer from "../TrainingSessions/PlayerCartContainer";
import YouthPlayer from "../../pages/YouthPlayer";

const Container1 = ({data}) => {
  return (
    <section
      dir="rtl"
      className={`flex w-full flex-col items-end justify-start gap-[16px] max-w-full text-right text-21xl text-blanc font-ibm-plex-sans-arabic`}
    >
      <div className="flex w-full flex-col items-start justify-start py-0 px-5 mb-5 box-border gap-[16px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq750:box-border">
        <h1 className="m-0 w-[386px] relative text-inherit leading-[150%] font-bold font-inherit inline-block max-w-full mq450:text-5xl mq450:leading-[36px] mq1050:text-13xl mq1050:leading-[48px]">
          لاعبي الاكاديمية الناشئين 18
        </h1>
        <div className="w-96 relative text-base leading-[21px] inline-block max-w-full">
          تستطيع تصفح طرق و أساليب الاكاديمية في الحصص التدريبية
        </div>
      </div>
    
      {data!==undefined?
      <Swiper
        className="max-w-screen h-full shrink-0 flex flex-row items-center justify-center py-0 pl-[100px] box-border max-w-full text-center text-base lg:pr-[5px] lg:box-border mq750:pl-[5px] mq750:box-border"
        modules={[Navigation]}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >

{data?.map((item)=>{
  return(
    <SwiperSlide key={item.id}>
    <PlayerCarfContainer
    item={item}/>
 
      </SwiperSlide>
)
})}
        {/* <SwiperSlide>
          <TrainingCardContainer trainingCardBackgrounds="/rectangle-7-1@2x.png" />
        </SwiperSlide>
        <SwiperSlide>
          <TrainingCardContainer trainingCardBackgrounds="/rectangle-7-2@2x.png" />
        </SwiperSlide>
        <SwiperSlide>
          <TrainingCardContainer trainingCardBackgrounds="/rectangle-7-3@2x.png" />
        </SwiperSlide> */}
      </Swiper>
      :
      <>
      </>
}

    </section>
  );
};

export default Container1;
