import GroupComponent1 from "./GroupComponent1";
import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";

const AboutContent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start gap-[112px] max-w-full text-right text-21xl text-blanc font-ibm-plex-sans-arabic mq450:gap-[28px] mq825:gap-[56px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-between py-0 px-[100px] box-border [row-gap:20px] max-w-full gap-[0px] mq450:pl-2 mq450:pr-2 mq450:box-border mq825:pl-[50px] mq825:pr-[50px] mq825:box-border mq1425:flex-wrap mq1425:justify-center">
        <img
          className="w-[615px] relative max-h-full max-w-full mq1425:flex-1"
          loading="lazy"
          alt=""
          src="/group-89091.svg"
        />
        <div className="w-[625px] flex flex-col items-end justify-start gap-[24px] min-w-[625px] max-w-full lg:min-w-full mq1425:flex-1">
          <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block min-w-[128px] mq450:text-5xl mq825:text-13xl">
            من نحن
          </h1>
          <div className="self-stretch flex flex-col items-end justify-start gap-[16px] text-5xl">
            <h3 className="m-0 relative text-inherit font-bold font-inherit mq450:text-lg w-full">
              أكاديمية الأبطال
            </h3>
            <div
              dir="rtl"
              className="self-stretch relative text-base leading-[0%]"
            >
              <p className="m-0 whitespace-pre-wrap leading-10">
                {" "}
                تهدف أكادميتنا إلى تدريب وتطوير مهارات اللاعبين الشباب في لعبة
                كرة القدم. تعمل الأكاديمية على توفير بيئة مهنية تعليمية تساعد
                اللاعبين على تنمية قدراتهم البدنية والفنية والنفسية، مما يؤهلهم
                للوصول إلى مستويات احترافية في اللعبة.
              </p>
              <p className="m-0 leading-10">
                تشمل برامج الأكاديمية مجموعة متنوعة من الأنشطة التدريبية مثل
                التمارين البدنية، التدريبات التكتيكية، والتمارين الفنية التي
                تتناول الجوانب المختلفة للعبة مثل التمرير، التسديد، الدفاع،
                والهجوم. بالإضافة إلى ذلك، تركز الأكاديمية على تعليم اللاعبين
                قيمًا رياضية مثل الروح الرياضية، العمل الجماعي، والانضباط.
              </p>
              <p className="m-0 leading-10">
                تُدار الأكاديمية بواسطة فريق من المدربين المحترفين والخبراء في
                مجال كرة القدم، الذين يمتلكون خبرة واسعة في التدريب والتطوير.
                غالبًا ما تكون الأكاديميات مرتبطة بأندية كرة قدم كبيرة، مما يتيح
                للاعبين الشباب الفرصة للانضمام إلى فرق الأندية والاستفادة من
                البنية التحتية الاحترافية المتاحة.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[1240px] flex flex-col items-end justify-start gap-[24px] max-w-full">
          <div className="flex flex-col items-end justify-start gap-[16px] max-w-full">
            <h1 className="m-0 relative text-inherit leading-[150%] font-bold font-inherit mq450:text-5xl mq450:leading-[36px] mq825:text-13xl mq825:leading-[48px]">{`شاهد مقاطع من الحصص التدريبية `}</h1>
            <div className="w-96 relative text-base leading-[21px] inline-block max-w-full">{`تستطيع تصفح طرق و أساليب الاكاديمية في الحصص التدريبية `}</div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full text-xl lg:flex-wrap">
            <GroupComponent1 />
            <div className="w-[383px] flex flex-col items-start justify-start gap-[16px] min-w-[383px] max-w-full text-base lg:flex-1 mq450:min-w-full">
              <GroupComponent
                rectangle4="/rectangle-4-6@2x.png"
                group89092="/group-89092-1@2x.png"
              />
              <GroupComponent
                rectangle4="/rectangle-4-7@2x.png"
                group89092="/group-89092-2@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutContent.propTypes = {
  className: PropTypes.string,
};

export default AboutContent;
