import PropTypes from "prop-types";

const GroupComponent1 = ({ className = "", rectangle4 }) => {
  return (
    <div
      className={`grow flex flex-row items-end justify-start pt-5 px-8 pb-[19.6px] box-border relative lg:w-full w-[45%] min-h-[284px] max-w-full text-right text-sm text-blanc font-ibm-plex-sans-arabic ${className}`}
    >
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src={rectangle4}
      />
      <div
        dir="rtl"
        className="grow w-full rounded flex flex-col gap-2 items-start justify-center z-[1] backdrop-brightness-[90%]"
      >
          <p className="m-0 font-semibold">تألق في بطولة الأكاديمية الودية:</p>
          <p className="m-0 text-xs">
            شارك أحمد في بطولة الأكاديمية الودية وقدم أداءً رائعًا، حيث سجل عدة
            أهداف حاسمة وساهم بشكل كبير في فوز فريقه بالبطولة. تم اختياره كأفضل
            لاعب في البطولة نظير أدائه المميز.
          </p>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  rectangle4: PropTypes.string,
};

export default GroupComponent1;
