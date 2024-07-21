import { useCallback } from "react";
import PropTypes from "prop-types";

const FrameComponent = ({
  className = "",
  rectangle7,
  onFrameContainerClick,
}) => {
  const onFrameContainerClick1 = useCallback(() => {
    // Please sync "player" to the project
  }, []);

  return (
    <div
      className={`self-stretch w-[334px] rounded-xl bg-gray-300 shrink-0 flex flex-col items-end justify-start pt-2 px-2 pb-4 box-border relative gap-[16px] max-w-full cursor-pointer text-center text-xl text-blanc font-ibm-plex-sans-arabic ${className}`}
      onClick={onFrameContainerClick}
    >
      <img
        className="self-stretch flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={rectangle7}
        onClick={onFrameContainerClick}
      />
      <img
        className="w-40 h-[290px] absolute !m-[0] top-[8px] left-[157px] z-[1]"
        loading="lazy"
        alt=""
        src="/vector-1.svg"
      />
      <div
        className="self-stretch flex flex-col items-end justify-start py-0 px-2 gap-[8px]"
        onClick={onFrameContainerClick}
      >
        <div className="flex flex-row items-start justify-end py-0 pr-0 pl-5 gap-[8px]">
          <button className="cursor-pointer py-0.5 px-9 bg-[transparent] rounded-3xl flex flex-row items-center justify-center border-[1px] border-solid border-blanc hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
            <div className="relative text-base font-ibm-plex-sans-arabic text-blanc text-center inline-block min-w-[42px]">
              محترف
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-1 px-[43px] bg-brown rounded-3xl flex flex-row items-center justify-center hover:bg-indianred">
            <div className="relative text-base font-ibm-plex-sans-arabic text-blanc text-center inline-block min-w-[29px]">
              ناشئ
            </div>
          </button>
        </div>
        <div
          dir="rtl"
          className="self-stretch h-full flex flex-col items-end justify-start py-0 pr-0 pl-0.5 gap-[8px]"
        >
          <div className="relative mq450:text-base">
            <span className="font-medium">الاسم :</span>
            <span> ايمن مدور</span>
          </div>
          <div className="relative inline-block min-w-[113px] mq450:text-base">
            <span className="font-medium">العمر :</span>
            <span> 16 سنة</span>
          </div>
          <div
            dir="rtl"
            className="self-stretch relative text-right [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] mq450:text-base"
          >
            <span className="font-medium">الوصف :</span>
            <p dir="rtl">
              أحمد هو لاعب كرة قدم ناشئ ذو موهبة استثنائية. يتمتع بقدرة رائعة
              على التحكم بالكرة ورؤية مميزة للملعب. تميزه سرعته ومهاراته
              الفردية، مما يجعله لاعبًا حاسمًا في المباريات. يعمل بجد واجتهاد في
              التدريبات ويظهر تفانيًا كبيرًا لتطوير مستواه بشكل مستمر.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  rectangle7: PropTypes.string,

  /** Action props */
  onFrameContainerClick: PropTypes.func,
};

export default FrameComponent;
