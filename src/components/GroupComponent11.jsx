import PropTypes from "prop-types";

const GroupComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-row items-end justify-center pt-9 pb-[35.8px] pr-5 pl-[51px] box-border relative gap-[15.5px] min-h-[538px] max-w-full text-right text-xl text-blanc font-ibm-plex-sans-arabic mq825:flex-wrap mq825:pl-[25px] mq825:box-border mq825:min-w-full ${className}`}
    >
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-2xl max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/rectangle-4-5@2x.png"
      />
      <div className="w-[568px] relative leading-[130%] whitespace-pre-wrap inline-block shrink-0 max-w-full z-[1] mq450:text-base mq450:leading-[21px]">{`الحصة التدريبية الصباحية لفئة الناشئين  لليوم الحالي بقيادة المدربمعاذ الدوسري بحضور ازيد من 34 لاعب `}</div>
      <div className="h-[48.5px] flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0 box-border">
        <div className="w-px h-[46px] relative box-border z-[1] border-r-[1px] border-solid border-silver" />
      </div>
      <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
        <img
          className="w-[49px] h-[49px] relative object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/group-89092@2x.png"
        />
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent1;
