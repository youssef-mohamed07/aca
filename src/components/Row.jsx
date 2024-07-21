import PropTypes from "prop-types";

const Row = ({ className = "" }) => {
  return (
    <div
      className={`rounded-21xl [background:linear-gradient(223.58deg,_#1a2242_15.56%,_#445081)] box-border flex flex-col items-center justify-center py-0 pr-8 pl-0 relative gap-[48px] min-w-[392px] min-h-[495px] max-w-full text-left text-xl text-blanc font-almarai border-[1px] border-solid border-gray-500 lg:flex-1 lg:pr-0 lg:box-border mq450:gap-[24px] mq825:min-w-full ${className}`}
    >
      <img
        className="w-[302px] h-[514px] absolute !m-[0] top-[-19px] left-[-6px] object-cover"
        loading="lazy"
        alt=""
        src="/player-2@2x.png"
      />
      <div className="flex flex-row items-center justify-end py-0 pr-[15px] pl-[125px] gap-[8px] z-[1] mq450:flex-wrap mq450:pl-5 mq450:box-border">
        <div className="relative leading-[28px] whitespace-nowrap mq450:text-base mq450:leading-[22px]">
          academy@gmail.com
        </div>
        <img
          className="h-8 w-8 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/icon--envelope.svg"
        />
      </div>
      <div className="flex flex-row items-center justify-end py-0 pr-[15px] pl-[125px] gap-[8px] z-[1] mq450:flex-wrap mq450:pl-5 mq450:box-border">
        <div className="relative leading-[28px] whitespace-nowrap mq450:text-base mq450:leading-[22px]">
          academy@gmail.com
        </div>
        <img
          className="h-8 w-8 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/icon--messagedetail.svg"
        />
      </div>
      <div className="flex flex-row items-center justify-end py-0 pr-[15px] pl-[196px] gap-[8px] z-[1] mq450:flex-wrap mq450:pl-5 mq450:box-border">
        <div className="relative leading-[28px] inline-block min-w-[107px] mq450:text-base mq450:leading-[22px]">
          92003231027
        </div>
        <img
          className="h-8 w-8 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/icon--phone.svg"
        />
      </div>
      <div className="flex flex-row items-center justify-end py-0 pr-[15px] pl-[221px] gap-[8px] z-[1] text-right mq450:flex-wrap mq450:pl-5 mq450:box-border">
        <div className="flex flex-col items-end justify-start">
          <div className="relative inline-block min-w-[82px] mq450:text-base">
            السعودية
          </div>
        </div>
        <img
          className="h-8 w-8 relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/icon--map.svg"
        />
      </div>
    </div>
  );
};

Row.propTypes = {
  className: PropTypes.string,
};

export default Row;
