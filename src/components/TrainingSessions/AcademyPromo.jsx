import PropTypes from "prop-types";

const AcademyPromo = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-8 px-[100px] box-border bg-[url('/public/academy-promo@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-right text-21xl text-blanc font-ibm-plex-sans-arabic mq750:gap-[18px] mq750:pl-[50px] mq750:pr-[50px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-end justify-start py-0 pr-0 pl-[542px] box-border gap-[24px] max-w-full lg:pl-[271px] lg:box-border mq750:pl-[135px] mq750:box-border mq450:pl-5 mq450:box-border">
        <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-5xl mq1050:text-13xl">
          أكاديميتنا تنظم دورة كرة القدم
        </h1>
        <div className="w-[625px] flex flex-col items-start justify-start gap-[8px] max-w-full text-base">
          <div className="self-stretch h-7 relative leading-[0%] inline-block">
            فرصتك لتطوير مهاراتك والانضمام إلى نجوم المستقبل!
          </div>
          <div className="self-stretch h-7 relative leading-[0%] inline-block">
            سجل الآن لتكون جزءًا من رحلتنا لصناعة أبطال المستقبل
          </div>
        </div>
        <form className="m-0 self-stretch flex flex-row items-start justify-end gap-[24px] mq1050:flex-wrap">
          <div className="flex-1 rounded bg-blanc box-border overflow-hidden flex flex-row items-center justify-end py-2.5 px-3 min-w-[174px] border-[1px] border-solid border-gray-300 mq1050:flex-1">
            <input
              className="w-[55px] [border:none] [outline:none] bg-[transparent] h-5 overflow-hidden flex flex-row items-start justify-start font-ibm-plex-sans-arabic text-smi text-darkslategray"
              placeholder="اسم الفريق"
              type="text"
            />
          </div>
          <div className="flex-1 rounded bg-blanc box-border overflow-hidden flex flex-row items-center justify-end py-2.5 px-3 min-w-[174px] border-[1px] border-solid border-gray-300 mq1050:flex-1">
            <input
              className="w-[54px] [border:none] [outline:none] bg-[transparent] h-5 overflow-hidden flex flex-row items-start justify-start font-ibm-plex-sans-arabic text-smi text-darkslategray"
              placeholder="رقم الجوال"
              type="text"
            />
          </div>
        </form>
        <button className="cursor-pointer [border:none] py-[11.5px] px-[37px] bg-brown shadow-[0px_0px_0px_4px_rgba(0,_0,_0,_0.03)_inset] rounded overflow-hidden flex flex-row items-center justify-center hover:bg-indianred">
          <b className="relative text-sm inline-block font-ibm-plex-sans-arabic text-blanc text-center min-w-[41px] max-w-[211.19px]">
            تسجيل
          </b>
        </button>
      </div>
    </section>
  );
};

AcademyPromo.propTypes = {
  className: PropTypes.string,
};

export default AcademyPromo;
