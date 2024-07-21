import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" ,playerVideos}) => {
  return (
    <div
      className={`px-5 w-full grow lg:px-2 flex flex-wrap items-start justify-center py-0 box-border gap-5 max-w-full text-right text-base text-blanc font-ibm-plex-sans-arabic lg:box-border mq750:gap-[25px]  ${className}`}
    >
           <video controls style={{ width: '100%' }}>
                          <source src={playerVideos} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
      {/* <GroupComponent
        rectangle4="/rectangle-4-2@2x.png"
        heading="استضافة للاعب حصريا"
      />
      <GroupComponent
        rectangle4="/rectangle-4-3@2x.png"
        heading="استضافة للاعب حصريا"
        propMarginLeft="unset"
      />
      <div className="grow shrink-0 flex flex-row flex-wrap items-end justify-center py-4 px-[46px] box-border relative gap-[15.5px] min-h-[261px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-2xl max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/rectangle-4-4@2x.png"
        />
        <div className="flex-1 relative leading-[130%] inline-block min-w-[143px] z-[1]">
          بعض مهارات اللاعب في المباريات الرسمية
        </div>
        <div className="h-[37.5px] flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0 box-border">
          <div className="w-px h-[34px] relative box-border z-[1] border-r-[1px] border-solid border-silver" />
        </div>
        <img className="flex flex-col items-start justify-start pt-[1.8px] px-0 pb-0" />
      </div>
      <GroupComponent
        rectangle4="/rectangle-4-2@2x.png"
        heading="متابعة اللاعب من التدريبات"
        propMarginLeft="unset"
      /> */}
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
