import PropTypes from "prop-types";

const GroupComponent = ({ className = "", rectangle4, group89092 }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-end justify-center py-4 px-[46px] box-border relative gap-[15.5px] min-h-[261px] text-right text-base text-blanc font-ibm-plex-sans-arabic mq450:flex-wrap mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-2xl max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={rectangle4}
      />
      <div className="flex-1 relative leading-[130%] whitespace-pre-wrap inline-block min-w-[143px] z-[1]">{`الحصة التدريبية الصباحية لفئة الاكابر  لليوم الحالي بحضور ازيد من 34 لاعب `}</div>
      <div className="h-[37.5px] flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0 box-border">
        <div className="w-px h-[34px] relative box-border z-[1] border-r-[1px] border-solid border-silver" />
      </div>
      <div className="flex flex-col items-start justify-start pt-[1.8px] px-0 pb-0">
        <img
          className="w-[38.4px] h-[38.4px] relative object-contain z-[1]"
          loading="lazy"
          alt=""
          src={group89092}
        />
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  rectangle4: PropTypes.string,
  group89092: PropTypes.string,
};

export default GroupComponent;
