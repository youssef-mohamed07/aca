const TimeLocation = ({ className = "", prop, prop1, location, location1 }) => {
  return (
    <div
      className={`w-[343px] rounded-lg bg-snow shrink-0 flex flex-col items-center justify-start p-6 box-border gap-[24px] max-w-full text-right text-xl text-black font-ibm-plex-sans-arabic ${className}`}
    >
      <div className="self-stretch flex flex-col items-end justify-start gap-[16px]">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
          <div className="w-[130px] relative inline-block">
            <b>
              <span>{[...prop].splice(11).splice(0, 5).join("")}</span>
              <span className="text-5xl">{` `}</span>
            </b>
            <span className="text-base">بتوقيت مكه</span>
          </div>
          <b className="relative text-base inline-block text-gray-100 min-w-[109px]">
            {prop1}
          </b>
        </div>
        <div className="flex flex-row items-center justify-start gap-[8px] text-base text-gray-100">
          <div className="relative font-medium inline-block min-w-[85px]">
            {location}{" "}
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            loading="lazy"
            alt=""
            src={location1}
          />
        </div>
      </div>
      <button className="cursor-pointer py-1.5 px-[30px] bg-[transparent] rounded-lg flex flex-row items-center justify-center border-[1px] border-solid border-brown hover:bg-indianred-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-indianred-100">
        <b className="relative text-base inline-block font-ibm-plex-sans-arabic text-brown min-w-[58px]">
          التفاصيل
        </b>
      </button>
    </div>
  );
};

export default TimeLocation;
