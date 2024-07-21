import PropTypes from "prop-types";

const Homepage = ({ className = "" }) => {
  return (
    <section
      className={`h-[90vh] mq750:h-[70vh] mb-[-150px] mq750:mb-[-100px] relative bg-headerImg bg-cover bg-no-repeat bg-center w-full overflow-y-hidden top-[0px] left-[0px] flex flex-row items-start justify-start max-w-full text-right text-29xl text-blanc font-ibm-plex-sans-arabic mt-[-112px] mq450:mt-[-28px] mq825:mt-[-56px] ${className}`}
      style={{ backgroundPositionY: "-80px" }}
    >
      <div className="mq750:backdrop-brightness-[60%] absolute h-full top-[0px] right-[0px] flex flex-col items-center justify-center box-border w-[60%] mq750:w-full max-w-full px-4 overflow-hidden">
        <div className="w-full h-full !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] mq750:hidden">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
            alt=""
            src="/rectangle-1.svg"
          />
          <img
            className="absolute bottom-0 left-1/2 w-60 object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/ball-1@2x.png"
          />
          <img
            className="absolute top-28 left-[288px] w-[129px] h-[129px] object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/ball-2@2x.png"
          />
          <img
            className="absolute bottom-40 left-[250px] w-[116px] h-[116px] object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/ball-3@2x.png"
          />
        </div>
        <div className="w-[641px] max-w-full flex flex-col items-end justify-start gap-[20px] z-[3] xl:mt-[50px] mb-[150px]">
          <div className="self-stretch w-full flex flex-col items-end justify-start gap-[16px]">
            <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq450:text-[23px] mq825:text-19xl">
              انضم إلى أكاديمية الأبطال حيث يصنع نجوم كرة القدم
            </h1>
            <div className="self-stretch relative text-xl mq450:text-base">
              <p className="m-0">{`لدينا خيرة المدربين و المحضرين البدنيين اللذين يستطيعون اكتشاف المواهب و اللاعبين `}</p>
              <p className="m-0">الجيدين في مجال كرة القدم</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end gap-[15px] md:gap-2 max-w-full">

            <a
      href="https://wa.me/201023402756" // Replace with your WhatsApp phone number
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer [border:none] py-3 md:px-4 px-8 text-center bg-blanc rounded-lg flex flex-row whitespace-nowrap hover:bg-gainsboro"
    >
      <b className="relative text-[16px] inline-block font-ibm-plex-sans-arabic text-brown min-w-[73px]">
        تواصل معنا
      </b>
    </a>
    <a
      href="/registeration" // Replace with your actual signup URL
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer [border:none] py-3 md:px-3 px-6 text-center bg-brown rounded-lg flex flex-row whitespace-nowrap hover:bg-indianred-100"
    >
      <b className="relative text-[16px] inline-block font-ibm-plex-sans-arabic text-blanc min-w-[97px]">
        سجل عضويتك
      </b>
    </a>
          </div>
        </div>
      </div>
    </section>
  );
};

Homepage.propTypes = {
  className: PropTypes.string,
};

export default Homepage;
