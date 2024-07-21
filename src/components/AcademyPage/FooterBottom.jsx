import PropTypes from "prop-types";

const FooterBottom = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-8 px-[100px] box-border bg-[url('/public/footer-bottom@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-right text-21xl text-blanc font-ibm-plex-sans-arabic mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[18px] mq750:pl-[50px] mq750:pr-[50px] mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-end justify-start py-0 pr-0 pl-[542px] box-border gap-[24px] max-w-full lg:pl-[271px] lg:box-border mq450:pl-5 mq450:box-border mq750:pl-[135px] mq750:box-border">
        <h1 className="m-0 relative text-inherit font-bold font-inherit mq450:text-5xl mq1050:text-13xl">
          النشرة الإخبارية
        </h1>
        <form className="m-0 self-stretch flex flex-row items-start justify-end gap-[24px] mq1050:flex-wrap">
          <div className="flex-1 rounded bg-blanc box-border overflow-hidden flex flex-row items-center justify-end py-2.5 px-3 min-w-[174px] border-[1px] border-solid border-gray-200 mq1050:flex-1">
            <div className="overflow-hidden flex flex-row items-start justify-start">
              <div className="relative text-smi font-ibm-plex-sans-arabic text-darkslategray text-left inline-block min-w-[75px]">
                اخبار الاكاديمية*
              </div>
            </div>
          </div>
          <div className="flex-1 rounded bg-blanc box-border overflow-hidden flex flex-row items-center justify-end py-2.5 px-3 min-w-[174px] border-[1px] border-solid border-gray-200 mq1050:flex-1">
            <div className="overflow-hidden flex flex-row items-start justify-start">
              <div className="relative text-smi font-ibm-plex-sans-arabic text-darkslategray text-left inline-block min-w-[107px]">
                عنوان البريد الإلكتروني*
              </div>
            </div>
          </div>
        </form>
        <button className="cursor-pointer [border:none] py-[11.5px] px-[39px] bg-brown shadow-[0px_0px_0px_4px_rgba(0,_0,_0,_0.03)_inset] rounded overflow-hidden flex flex-row items-center justify-center hover:bg-indianred">
          <b className="relative text-sm inline-block font-ibm-plex-sans-arabic text-blanc text-center min-w-[38px] max-w-[211.19px]">
            اشتراك
          </b>
        </button>
        <div className="w-[625px] relative text-base inline-block max-w-full">
          نقوم بمعالجة بياناتك وفقاً لسياسة حماية البيانات الخاصة بنا. يمكن أن
          تكون رسائلنا الإخبارية مصممة خصيصاً لك شخصياً. باشتراكك في النشرة
          الإخبارية، فإنك توافق على أنه يجوز لنا معالجة ودمج تفاعلاتك مع النشرات
          الإخبارية
        </div>
      </div>
    </section>
  );
};

FooterBottom.propTypes = {
  className: PropTypes.string,
};

export default FooterBottom;
