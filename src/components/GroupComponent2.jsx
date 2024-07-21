import PropTypes from "prop-types";

const GroupComponent2 = ({ className = "", rectangle4 }) => {
  return (
    <div
      className={`self-stretch grow flex flex-row items-end justify-start pt-5 px-8 pb-[19.6px] box-border relative min-w-[393px] min-h-[284px] max-w-full text-right text-sm text-blanc font-ibm-plex-sans-arabic mq825:min-w-full ${className}`}
    >
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src={rectangle4}
      />
      <div
      dir="rtl"
      className="flex-1 rounded flex flex-row items-start justify-center max-w-full z-[1] md:mb-10">
        <div className="h-[60px] w-[468px] relative leading-[157%] inline-block shrink-0 max-w-full">
          <p className="m-0 font-semibold">بطولة الأكاديمية الودية:</p>
          <p className="m-0 text-xs">
            أقامت الأكاديمية بطولة ودية شارك فيها فرق من مختلف الفئات العمرية.
            شهدت البطولة تنافسًا قويًا وأظهرت العديد من المواهب الواعدة. وحققت
            فرق الأكاديمية نتائج مميزة وأداءً مشرفًا.
          </p>
        </div>
      </div>
    </div>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,
  rectangle4: PropTypes.string,
};

export default GroupComponent2;
