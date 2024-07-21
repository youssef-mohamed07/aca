import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent = ({
  className = "",
  rectangle4,
  heading,
  propMarginLeft,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  return (
    <div
      className={`grow shrink-0 flex flex-row flex-wrap items-start justify-center pt-[203px] px-[46px] pb-[19.6px] box-border relative gap-[15.5px] max-w-full text-right text-base text-blanc font-ibm-plex-sans-arabic mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
      style={groupDivStyle}
    >
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-2xl max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={rectangle4}
      />
      <div className="flex-1 flex flex-col items-start justify-start pt-[8.7px] px-0 pb-0 box-border min-w-[143px]">
        <div className="self-stretch relative leading-[130%] z-[1]">
          {heading}
        </div>
      </div>
      <div className="h-[35.7px] flex flex-col items-start justify-start pt-[2.7px] px-0 pb-0 box-border">
        <div className="w-px h-[34px] relative box-border z-[1] border-r-[1px] border-solid border-silver" />
      </div>
      <img
        className="h-[38.4px] w-[38.4px] relative object-contain min-h-[38px] z-[1]"
        loading="lazy"
        alt=""
        src="/group-89092@2x.png"
      />
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  rectangle4: PropTypes.string,
  heading: PropTypes.string,

  /** Style props */
  propMarginLeft: PropTypes.any,
};

export default GroupComponent;
