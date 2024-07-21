import PropTypes from "prop-types";

const FormFields = ({ className = "" }) => {
  return (
    <form
      className={`m-0 self-stretch rounded-lg box-border flex flex-col items-start justify-start py-[11px] px-3 gap-[16px] max-w-full border-[4px] border-solid border-brown ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-[11px] max-w-full mq825:flex-wrap">
        <div className="flex-1 rounded bg-blanc box-border overflow-hidden flex flex-row items-center justify-end py-2.5 px-3 min-w-[246px] max-w-full border-[1px] border-solid border-gray-400">
          <div className="overflow-hidden flex flex-row items-start justify-start">
            <div className="relative text-smi font-ibm-plex-sans-arabic text-darkslategray text-left inline-block min-w-[59px]">
              رقم الجوال*
            </div>
          </div>
        </div>
        <div className="flex-1 rounded bg-blanc box-border overflow-hidden flex flex-row items-center justify-end py-2.5 px-3 min-w-[246px] max-w-full border-[1px] border-solid border-gray-400">
          <input
            className="w-[68px] [border:none] [outline:none] bg-[transparent] h-5 overflow-hidden flex flex-row items-start justify-end font-ibm-plex-sans-arabic text-smi text-darkslategray"
            placeholder="الاسم الكامل*"
            type="text"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[11px] max-w-full mq825:flex-wrap">
        <div className="flex-1 rounded bg-blanc box-border overflow-hidden flex flex-row items-center justify-end py-2.5 px-3 min-w-[246px] max-w-full border-[1px] border-solid border-gray-400">
          <input
            className="w-[57px] [border:none] [outline:none] bg-[transparent] h-5 overflow-hidden flex flex-row items-start justify-start font-ibm-plex-sans-arabic text-smi text-darkslategray"
            placeholder="مكان الميلاد*"
            type="text"
          />
        </div>
        <div className="flex-1 rounded bg-blanc box-border overflow-hidden flex flex-row items-center justify-end py-2.5 px-3 min-w-[246px] max-w-full border-[1px] border-solid border-gray-400">
          <div className="overflow-hidden flex flex-row items-start justify-end">
            <div className="relative text-smi font-ibm-plex-sans-arabic text-darkslategray text-left inline-block min-w-[30px]">
              العمر*
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch rounded bg-blanc overflow-hidden flex flex-row items-center justify-end py-2.5 px-3 border-[1px] border-solid border-gray-400">
        <div className="overflow-hidden flex flex-row items-start justify-start">
          <div className="relative text-smi font-ibm-plex-sans-arabic text-darkslategray text-left inline-block min-w-[107px]">
            عنوان البريد الإلكتروني*
          </div>
        </div>
      </div>
      <div className="self-stretch rounded bg-blanc overflow-hidden flex flex-row items-start justify-end pt-2.5 px-3 pb-[72px] border-[1px] border-solid border-gray-400">
        <div className="relative text-smi font-ibm-plex-sans-arabic text-darkslategray text-left">
          اكتب نبذة عن مهاراتك و تجاربك...
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-[13.5px] px-5 bg-brown self-stretch shadow-[0px_0px_0px_4px_rgba(0,_0,_0,_0.03)_inset] rounded overflow-hidden flex flex-row items-center justify-center hover:bg-indianred-100">
        <b className="relative text-sm inline-block font-ibm-plex-sans-arabic text-blanc text-center min-w-[32px] max-w-[211.19px]">
          إرسال
        </b>
      </button>
    </form>
  );
};

FormFields.propTypes = {
  className: PropTypes.string,
};

export default FormFields;
