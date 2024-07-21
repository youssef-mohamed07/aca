import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent3 = ({
  className = "",
  videoThumbnails,
  group89092,
  propAlignSelf,
}) => {
  const groupDiv1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div
      className={`self-stretch flex-1 flex flex-row items-end justify-start py-4 px-[46px] relative text-right text-base text-blanc font-ibm-plex-sans-arabic mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
      style={groupDiv1Style}
    >
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-2xl max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={videoThumbnails}
      />
      <div className="flex-1 flex flex-row items-start justify-start gap-[15.5px] z-[1]">
        <div className="flex-1 relative leading-[130%] whitespace-pre-wrap">{`الحصة التدريبية الصباحية لفئة الاكابر  لليوم الحالي بحضور ازيد من 34 لاعب `}</div>
        <div className="h-[37.5px] flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0 box-border">
          <div className="w-px h-[34px] relative box-border border-r-[1px] border-solid border-silver" />
        </div>
        <div className="flex flex-col items-start justify-start pt-[1.8px] px-0 pb-0">
          <img
            className="w-[38.4px] h-[38.4px] relative object-contain"
            loading="lazy"
            alt=""
            src={group89092}
          />
        </div>
      </div>
    </div>
  );
};

GroupComponent3.propTypes = {
  className: PropTypes.string,
  videoThumbnails: PropTypes.string,
  group89092: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
};

export default GroupComponent3;
