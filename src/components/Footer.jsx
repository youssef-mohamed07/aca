import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch [background:linear-gradient(87.31deg,_#df193c,_#1a2242)] flex flex-col items-start justify-start py-10 px-0 box-border gap-[24px] max-w-full text-left text-base text-blanc font-ibm-plex-sans-arabic mq450:pt-[26px] mq450:pb-[26px] mq450:box-border ${className}`}
    >
      <div className="w-full grow self-stretch flex flex-row items-start justify-between pt-12 pb-0 box-border gap-[30px] lg:flex-wrap mq450:box-border mq825:box-border sm:px-[100px] px-2">
        <div className="flex md:w-full flex-row items-start justify-start text-right md:px-2">
          <div className="grow w-full flex flex-col items-end justify-start pt-0 px-0 pb-[5.8px] gap-[32.3px] mq450:gap-[16px]">
            <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-0 relative gap-[16px]">
              <img
                className="w-[111px] h-[111px] absolute !m-[0] top-[-53px] left-[92px] object-cover"
                loading="lazy"
                alt=""
                src="/ball-1-1@2x.png"
              />
              <b dir="rtl" className="relative z-[1] ">
                سجل البريد الخاص بك :
              </b>
              <div className="self-stretch rounded-lg bg-blanc flex flex-row items-center justify-end py-2 pr-1 pl-0 gap-[8px] text-xs text-flw">
                <div className="w-[297px] flex flex-row items-center justify-end py-0 px-1 box-border shrink-0">
                  <div className="w-[150px] flex flex-row items-center justify-center">
                    <div className="flex-1 relative">ادخل البريد</div>
                  </div>
                </div>
                <img
                  className="h-6 w-6 relative shrink-0"
                  alt=""
                  src="/emailsemailmailletter.svg"
                />
              </div>
            </div>
            <div className="grow w-full flex flex-col items-end justify-start gap-[13.9px]">
              <div
                dir="rtl"
                className="grow w-full flex flex-row items-center justify-start md:justify-center gap-[15.7px] text-center text-lg font-abel"
              >
                تابعنا :
                <div className="h-8 w-8 relative">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[21.83px] bg-gray-600 box-border border-[1.1px] border-solid border-blanc" />
                  <img
                    className="absolute h-[38.44%] w-[17.81%] top-[30.63%] right-[41.25%] bottom-[30.94%] left-[40.94%] max-w-full overflow-hidden max-h-full z-[1]"
                    alt=""
                    src="/shape.svg"
                  />
                </div>
                <img
                  className="h-8 w-8 relative min-h-[32px]"
                  loading="lazy"
                  alt=""
                  src="/linkedin-icon.svg"
                />
                <div className="h-8 w-8 relative">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[21.83px] bg-gray-600 box-border border-[1.1px] border-solid border-blanc" />
                  <img
                    className="absolute top-[9px] left-[9.9px] w-[13.1px] h-[14.8px] overflow-hidden z-[1]"
                    alt=""
                    src="/instagram-logo.svg"
                  />
                </div>
                <div className="h-8 w-8 relative">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[21.83px] bg-gray-600 box-border border-[1.1px] border-solid border-blanc" />
                  <img
                    className="absolute h-[28.13%] w-[33.44%] top-[35.94%] right-[33.12%] bottom-[35.94%] left-[33.44%] max-w-full overflow-hidden max-h-full z-[1]"
                    alt=""
                    src="/twitter.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grow flex flex-col items-center justify-start gap-[16px]">
          <div className="flex flex-row items-start justify-end">
            <b className="relative inline-block">عن الموقع</b>
          </div>
          <div className="flex flex-row items-start justify-end">
            <div className="relative inline-block">تواصل معنا</div>
          </div>
          <div className="flex flex-row items-start justify-end">
            <div className="relative inline-block z-[1]">المدونة</div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-0">
            <div className="flex flex-row items-start justify-start relative">
              <img
                className="h-[174px] w-[174px] absolute !m-[0] md:hidden right-[-107.1px] bottom-[-105px] object-cover"
                loading="lazy"
                alt=""
                src="/ball-1-2@2x.png"
              />
              <div className="relative inline-block z-[1]">عن الأكاديمية</div>
            </div>
          </div>
          <div className="relative inline-block z-[1]">سياسة الخصوصية</div>
        </div>
        <div className="w-[488.1px] lg:grow px-2 flex flex-col items-start justify-start gap-[24px] max-w-full text-13xl font-knewave">
          <div className="self-stretch flex flex-row items-start justify-end">
            <h1 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[61px] z-[1] mq450:text-lgi mq825:text-7xl d-flex justify-content-end">
            <img src='/logo.png' alt="logo"className="w-25" />
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-right text-base font-ibm-plex-sans-arabic">
            <img
              className="h-[174px] w-[174px] absolute !m-[0] top-[-136px] right-[11px] object-cover"
              loading="lazy"
              alt=""
              src="/ball-1-2@2x.png"
            />
            <div
              dir="rtl"
              className="flex-1 relative leading-[27px] whitespace-pre-wrap inline-block max-w-full z-[1]"
            >
              تهدف أكادميتنا إلى تدريب وتطوير مهارات اللاعبين الشباب في لعبة كرة
              القدم. تعمل الأكاديمية على توفير بيئة مهنية تعليمية تساعد اللاعبين
              على تنمية قدراتهم البدنية والفنية والنفسية، مما يؤهلهم للوصول إلى
              مستويات احترافية في اللعبة.
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-center font-cairo">
        <div className="relative leading-[16px] font-medium inline-block min-w-[90px]">
          Academy.com
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
