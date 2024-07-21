import React from "react";
import TrainingCardContainer from "./TrainingCardContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useTrainingSessions } from "../../hooks/useTrainingSessions";

const FrameComponent = () => {
  const { data, isLoading, error } = useTrainingSessions();

  const swiperProps = {
    modules: [Navigation],
    navigation: true,
    breakpoints: {
      640: { slidesPerView: 1, spaceBetween: 20 },
      768: { slidesPerView: 2, spaceBetween: 10 },
      1024: { slidesPerView: 3, spaceBetween: 20 },
    },
  };

  return (
    <section
      aria-label="Training Sessions for June"
      className="flex flex-col items-start justify-start gap-[16px] max-w-full text-right text-21xl text-blanc font-ibm-plex-sans-arabic w-100 justify-content-start"
    >
      <div className="flex flex-col items-end justify-center w-full px-5 mb-4 py-0 box-border gap-[16px] max-w-full mq750:box-border mq450:box-border">
        <h1 className="m-0 relative text-inherit leading-[150%] font-bold font-inherit mq450:text-5xl mq450:leading-[36px] mq1050:text-13xl mq1050:leading-[48px]">
          الحصص التدريبية لشهر جوان
        </h1>
        <div className="w-96 relative text-base leading-[21px] inline-block max-w-full">
          فرصة من ذهب لحظور حصص تدريبية جدا قيمة مع خيرة المدربين
        </div>
      </div>

      {isLoading ? (
        <div className="text-center w-full">جاري التحميل...</div>
      ) : error ? (
        <div className="text-center w-full text-red-500">
          حدث خطأ أثناء تحميل البيانات. الرجاء المحاولة مرة أخرى.
        </div>
      ) : data && data.data && data.data.length > 0 ? (
        <Swiper
          {...swiperProps}
          className="max-w-screen h-full shrink-0 flex flex-row items-center justify-center py-0 pl-[100px] box-border max-w-full text-center text-base lg:pr-[5px] lg:box-border mq750:pl-[5px] mq750:box-border"
        >
          {data.data.map((t) => (
            <SwiperSlide key={t.id}>
              <TrainingCardContainer
                trainingCardBackgrounds="/training-card-backgrounds@2x.png"
                item={t}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="text-center w-full">لا توجد حصص تدريبية متاحة حاليًا.</div>
      )}
    </section>
  );
};

export default FrameComponent;