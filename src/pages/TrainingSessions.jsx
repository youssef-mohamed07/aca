import ContactRegister from "../components/ContactRegister";
import FrameComponent1 from "../components/TrainingSessions/FrameComponent1";
import FrameComponent from "../components/TrainingSessions/FrameComponent";
import AcademyPromo from "../components/TrainingSessions/AcademyPromo";
import Footer from "../components/Footer";

const TrainingSessions = () => {
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start gap-[120px] leading-[normal] tracking-[normal] mq750:gap-[60px] mq450:gap-[40px]">
      <ContactRegister />
      <FrameComponent1 />
      <FrameComponent />
      <AcademyPromo />
      <Footer />
    </div>
  );
};

export default TrainingSessions;
