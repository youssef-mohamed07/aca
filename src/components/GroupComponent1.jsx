// GroupComponent1.js
import React, { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent1 = ({ video, className = "", propPadding }) => {
  const groupDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  if (!video) return null;

  return (
    <div
      dir="rtl"
      className={`lg:w-full self-stretch w-[30%] grow flex flex-row items-start justify-start pt-[159.7px] px-3 pb-[30.6px] box-border relative text-right text-base text-blanc font-ibm-plex-sans-arabic ${className}`}
      style={groupDivStyle}
    >
      <video
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded overflow-hidden object-cover"
        controls
      >
        <source src={video.video_url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="w-full rounded flex flex-row items-start justify-start pt-[2.3px] pb-[2.4px] box-border max-w-full z-[1]">
        <div className="flex-1 relative leading-[155%] inline-block max-w-full">
          <p className="m-0 font-semibold">{video.description || "تدريب فريق"}</p>
          <p className="m-0 text-xs">{new Date(video.created_at).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  video: PropTypes.shape({
    video_url: PropTypes.string,
    description: PropTypes.string,
    created_at: PropTypes.string,
  }),
  className: PropTypes.string,
  propPadding: PropTypes.any,
};

export default GroupComponent1;