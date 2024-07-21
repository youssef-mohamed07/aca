import Homepage from "../components/Homepage";
import ContactRegister from "../components/ContactRegister";
import MatchInfo from "../components/MatchInfo";
import NewsHeading from "../components/NewsHeading";
import AboutContent from "../components/AboutContent";
import FrameComponent from "../components/FrameComponent";
import CoachesGrid from "../components/CoachesGrid";
import FormFields from "../components/FormFields";
import Row from "../components/Row";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full relative bg-gray-200 overflow-hidden flex flex-col items-start justify-start gap-[112px] leading-[normal] tracking-[normal] mq450:gap-[28px] mq825:gap-[56px]">
      <ContactRegister />
      <Homepage />
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-2 box-border max-w-full">
        <div className="w-[1240px] flex flex-col items-start justify-start gap-[70px] max-w-full mq450:gap-[17px] mq825:gap-[35px]">
          <MatchInfo />
          <NewsHeading />
        </div>
      </section>
      <AboutContent />
      <FrameComponent />
      <CoachesGrid />
      <section className="self-stretch flex flex-row items-center justify-start py-0 px-[100px] box-border gap-[48px] max-w-full text-right text-21xl text-blanc font-ibm-plex-sans-arabic lg:flex-wrap mq450:pl-3 mq450:pr-3 mq450:box-border mq825:gap-[24px] mq825:pl-[50px] mq825:pr-[50px] mq825:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[520px] max-w-full mq825:min-w-full">
          <div className="self-stretch flex flex-col items-end justify-start  gap-[16px] mq450:box-border mq825:box-border">
            <h1 className="m-0 relative text-inherit leading-[150%] font-bold font-inherit mq450:text-5xl mq450:leading-[36px] mq825:text-13xl mq825:leading-[48px]">
              سجل معنا الان
            </h1>
            <div className="self-stretch relative text-base leading-[21px]">
              املأ الاستمارة التالية للتسجيل في الاكاديمية
            </div>
          </div>
          <FormFields />
        </div>
        <Row />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
