// GroupComponent.js
import React from "react";
import PropTypes from "prop-types";

const GroupComponent = ({ video }) => {
  if (!video) return null;

  return (
    <div className="self-stretch rounded-3xs bg-darkslategray-200 flex flex-col items-center justify-start pt-0 px-0 pb-4 gap-[16px] text-left text-xl text-blanc">
      <div className="self-stretch relative h-[236px] overflow-hidden shrink-0">
        <video
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          controls
        >
          <source src={video.video_url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-4">
        <div className="flex-1 relative leading-[140%] font-medium">
          {video.description || "تدريب فريق"}
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  video: PropTypes.shape({
    video_url: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default GroupComponent;