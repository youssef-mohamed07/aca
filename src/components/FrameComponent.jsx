import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-right text-13xl text-blanc font-ibm-plex-sans-arabic ${className}`}
    >
      <div className="w-[1240px] flex flex-row items-start justify-start gap-[48px] max-w-full lg:flex-wrap mq825:gap-[24px]">
        <div className="flex-1 flex flex-col items-end justify-start gap-[24px] min-w-[404px] max-w-full mq825:min-w-full">
          <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-lgi mq825:text-7xl">
            اكتشف موهبتك الكروية مع اكاديميتنا
          </h1>
          <h3 className="m-0 relative text-5xl font-bold font-inherit mq450:text-lgi">
            ما هي مميزات أكادميتنا؟
          </h3>
          <div
            dir="rtl"
            className="self-stretch relative text-base leading-[0%]"
          >
            <p className="m-0 whitespace-pre-wrap leading-10">
              {" "}
              -تدريب محترف على أعلى مستوى: نقدم تدريبات متقدمة تحت إشراف مدربين
              محترفين معتمدين بخبرات واسعة في كرة القدم.
            </p>
            <p className="m-0 whitespace-pre-wrap leading-10">
              {" "}
              -برامج تدريب مخصصة: نصمم برامج تدريب فردية لكل لاعب، بناءً على
              مستواه الحالي وأهدافه الشخصية، لضمان تحقيق أفضل النتائج.
            </p>
            <p className="m-0 whitespace-pre-wrap leading-10">
              {" "}
              -منشآت حديثة ومتطورة: نتوفر على ملاعب وأدوات تدريب حديثة توفر بيئة
              مثالية للتطوير الرياضي.
            </p>
            <p className="m-0 whitespace-pre-wrap leading-10">
              {" "}
              -فرص للمشاركة في بطولات محلية ودولية: نوفر للاعبين فرصة المشاركة
              في بطولات ومباريات ودية لتجربة أجواء المنافسات الحقيقية.
            </p>
            <p className="m-0 whitespace-pre-wrap leading-10">
              {" "}
              -تنمية شاملة للمهارات: نهتم بتطوير الجوانب البدنية والفنية
              والنفسية للاعبين، لضمان إعدادهم بشكل شامل للمستقبل.
            </p>
            <p className="m-0 whitespace-pre-wrap leading-10">
              {" "}
              -متابعة وتقييم مستمر: نقدم تقارير دورية حول تطور اللاعبين، مع
              تقديم نصائح وتوجيهات لتحسين الأداء باستمرار.
            </p>
          </div>
        </div>
        <div className="w-[570px] flex flex-col items-start justify-start pt-[25.6px] px-0 pb-0 box-border min-w-[570px] max-w-full lg:flex-1 mq825:min-w-full">
          <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
            <div className="h-[574px] w-[574px] absolute !m-[0] bottom-[-205px] left-[-32px] [filter:blur(344.4px)] rounded-[50%] bg-brown" />
            <div className="h-[388.7px] flex-1 flex flex-row items-start justify-start relative max-w-full z-[1]">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                <img
                  className="absolute h-[calc(100%_-_13.7px)] top-[7.4px] bottom-[6.3px] left-[0px] md:left-[-50px] max-h-full w-[556.3px] object-cover"
                  alt=""
                  src="/group-89095@2x.png"
                />
                <img
                  className="absolute top-[0px] left-[63.5px] md:left-[-20px] w-[506.5px] h-[388.7px] object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/youngcaucasianfootballsoccerplayeractionmotionisolatedblackbackground-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
