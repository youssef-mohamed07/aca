import NewsContainer from "../components/Player/NewsContainer";
import FrameComponent1 from "../components/Player/FrameComponent1";
import ContactRegister from "../components/ContactRegister";
import Footer from "../components/Footer";
import { useLocation, useParams } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { useGetProPlayer } from "../hooks/useGetProPlayer";

const ProPlayer = () => {
  const params = useParams();
  // const { data, isLoading } = useGetProPlayer(params.id);
  const id = useLocation();
  console.log(id.pathname.slice(13));

  // console.log(item);
const storedArray = localStorage.getItem('proPlayer');
 const storedArrayStr = JSON.parse(storedArray)
const data = storedArrayStr.find((element) => element.id == id.pathname.slice(13));
console.log(data);
  // console.log(JSON.parse(storedArray));



  return (
    <>
      <div className="w-full min-h-screen relative bg-gray-200 overflow-hidden flex flex-col items-start justify-start gap-[120px] leading-[normal] tracking-[normal] text-center text-[48px] text-blanc font-ibm-plex-sans-arabic mq750:gap-[60px] mq450:gap-[40px]">
        <ContactRegister />
   
            <section
              className={`self-stretch flex flex-row items-start justify-start relative max-w-full text-center text-231xl text-gray-300 font-ibm-plex-sans-arabic lg:opacity-50`}
            >
              <h1 className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-90%] w-full font-bold z-[1] text-[300px] mq1425:text-[200px] mq750:text-[150px] mq450:text-[90px] opacity-20">
                {data.name}{" "}
              </h1>
              <div className="h-[782px] w-[740px] absolute !m-[0] right-[75px] bottom-[-585px]">
                <img
                  className="absolute h-full top-[0px] bottom-[0px] left-[121px] max-h-full w-[619px]"
                  alt=""
                  src="/vector-4.svg"
                />
                <img
                  className="absolute top-[203px] right-[0px] rounded-lg w-[634px] h-[579px] object-contain z-[2] xl:left-[30%]  w-50"
                  alt=""
                  src={data.playerPicture_url}
                />
              </div>
            </section>
            <div className="w-[789px] flex flex-row items-start justify-start pt-0 px-[74px] pb-[110px] box-border max-w-full mq1050:pl-[37px] mq1050:pr-[37px] mq1050:box-border">
              <div className="flex-1 flex flex-col items-end justify-start gap-[16px] max-w-full ">
                <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block max-w-full z-[3] mq1050:text-[38px] mq450:text-[29px]">
                  {data.name} اللاعب{" "}
                </h1>
                <div className="self-stretch relative text-[20px] text-right z-[3] mq450:text-base">
                  {data.bio}
                </div>
                <button className="cursor-pointer [border:none] py-1 px-[26px] bg-blanc rounded-lg flex flex-row items-start justify-start whitespace-nowrap z-[3] hover:bg-gainsboro">
                <a href={data.playerPDF_url}>

                  <b className="relative text-base font-ibm-plex-sans-arabic text-brown text-right">
                    ارسل طلب شراء اللاعب
                  </b>
                  </a>
                </button>
              </div>
            </div>
            <section
              className={`self-stretch bg-blanc flex flex-row items-start justify-star px-[129px] box-border gap-[80px] max-w-full z-[3] text-right text-base text-gray-100 font-ibm-plex-sans-arabic lg:flex-wrap lg:gap-[5px] lg:pl-10 lg:pr-10 lg:box-border mq750:gap-[20px] mq750:pl-8 mq750:pr-8 mq750:box-border`}
            >
              <div className="flex-1 flex flex-col items-start justify-start pt-[31.5px] px-0 pb-0 box-border min-w-[381px] max-w-full mq750:min-w-full">
                <div className="self-stretch flex flex-col items-end justify-start gap-[24px]">
                  <div
                    dir="rtl"
                    className="self-stretch relative font-semibold"
                  >
                    تم تسجيل {data.name} معنا منذ الفئة العمرية تحت 6 سنوات بعد
                    توقيعه من خلال برنامج مركز التطوير الخاص بنا.
                  </div>
                  <div className="w-[227px] flex flex-row items-start justify-between gap-[20px]">
                    <div className="w-[89px] flex flex-col items-end justify-start gap-[16px]">
                      <div className="self-stretch relative">{data.name}</div>
                      <div className="self-stretch relative">
                        {data.age} سنة
                      </div>
                      <div className="self-stretch relative">
                        {data.nationality}
                      </div>
                      <div className="self-stretch relative">
                        {data.position}
                      </div>
                      <div className="relative inline-block min-w-[89px]">
                        {data.birthDate}
                      </div>
                      <div className="relative inline-block min-w-[89px]">
                        {data.joinDate}
                      </div>
                    </div>
                    <div
                      style={{ direction: "rtl" }}
                      className="w-[98px] flex flex-col items-end justify-start gap-[16px]"
                    >
                      <div className="self-stretch relative font-semibold">
                        الاسم :
                      </div>
                      <div className="self-stretch relative font-semibold">
                        العمر :
                      </div>
                      <div className="self-stretch relative font-semibold">
                        الجنسية :
                      </div>
                      <div className="self-stretch relative font-semibold">
                        مكان اللعب :
                      </div>
                      <div className="self-stretch relative font-semibold">
                        تاريخ الميلاد :
                      </div>
                      <div className="relative font-semibold inline-block min-w-[98px]">
                        تاريخ الانضمام :
                      </div>
                    </div>
                  </div>
                  <div
                    dir="rtl"
                    className="self-stretch relative font-semibold text-dimgray"
                  >
                    {data.bio}
                  </div>
                </div>
              </div>
              <div className="h-[455px] w-[515.9px] flex flex-row items-start justify-start relative min-w-[515.9px] max-w-full lg:flex-1 mq1050:min-w-full">
                <div className="h-full w-full absolute !m-[0] top-[0px] bottom-[0px] left-[0px]">
                  <img
                    className="absolute h-full top-[0px] bottom-[0px] left-[170.8px] max-h-full w-[345px]"
                    loading="lazy"
                    alt=""
                    src="/vector-3.svg"
                  />
                  <img
                    className="absolute top-[72px] left-[0px] md:left-[-20px] rounded-lg w-[343px] h-[312px] object-cover z-[1]"
                    alt=""
                    src={data.playerPicture_url}
                    />
                </div>
              </div>
            </section>
            <section className="self-stretch flex flex-col items-end justify-start gap-[16px] max-w-full text-right text-[40px] text-blanc font-ibm-plex-sans-arabic px-32 lg:px-0">
              <div className="w-[601px] flex flex-row items-start justify-end py-0 px-5 box-border max-w-full">
                <h1 className="m-0 relative text-inherit leading-[150%] font-bold font-inherit mq1050:text-13xl mq1050:leading-[48px] mq450:text-5xl mq450:leading-[36px]">{`أخبار اللاعب & فيديوهات`}</h1>
              </div>
              <div className="w-[584px] flex flex-row items-start justify-end py-0 px-5 box-border max-w-full text-base mb-10">
                <div className="w-96 relative leading-[21px] inline-block shrink-0 max-w-full">{`تستطيع تصفح طرق و أساليب الاكاديمية في الحصص التدريبية `}</div>
              </div>
              <NewsContainer />
              <FrameComponent1 />
            </section>
            <Footer />
       
      </div>
    </>
  );
};

export default ProPlayer;
