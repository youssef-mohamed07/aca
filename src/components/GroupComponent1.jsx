import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent1 = ({
  className = "",
  about,
  prop,
  prop1,
  propPadding,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      dir="rtl"
      className={`lg:w-full self-stretch w-[30%] grow flex flex-row items-start justify-start pt-[159.7px] px-3 pb-[30.6px] box-border relative text-right text-base text-blanc font-ibm-plex-sans-arabic ${className}`}
      style={groupDivStyle}
    >
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded overflow-hidden object-cover"
        loading="lazy"
        alt=""
        src={"/rectangle-4@2x.png"}
      />
      <div className="w-full rounded flex flex-row items-start justify-start pt-[2.3px] pb-[2.4px] box-border max-w-full z-[1]">
        <div className="flex-1 relative leading-[155%] inline-block max-w-full">
          <p className="m-0 font-semibold">{prop}</p>
          <p className="m-0 text-xs">{prop1}</p>
        </div>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  about: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default GroupComponent1;
