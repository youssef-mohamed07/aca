import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[90vh] lg:h-[65vh] bg-headerSessionsImg bg-center bg-cover flex flex-row items-center justify-center box-border max-w-full text-right text-21xl text-blanc font-ibm-plex-sans-arabic px-4 mt-[-120px] mq750:mt-[-60px] mq450:mt-[-40px] ${className}`}
    >
      <div className="flex flex-row items-start justify-start relative max-w-full">
        <div className="flex-1 flex flex-col items-end justify-start max-w-full z-[1] mq750:gap-[16px] md:mt-[-40px]">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-end gap-[32px] max-w-full mq750:gap-[16px]">
           
            <div className="flex-1 flex flex-col items-end justify-start gap-[16px] min-w-[566px] max-w-full mq750:min-w-full">
              <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq450:text-5xl mq1050:text-13xl">
                الحصص التدريبية 
              </h1>
              <div className="w-[641px] relative text-xl inline-block max-w-full mq450:text-base">
                حصة تحضيرية لمباراة ودية يوم 12/06/2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
