import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import FooterBottom from "../../components/AcademyPage/FooterBottom";
import Container1 from "../../components/AcademyPage/Container1";
import ContactRegister from "../../components/ContactRegister";
import { useEffect, useState } from "react";
import axios from "axios";

const YouthPlayers = ({ rectangle7, id, name, age, bio }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([])
useEffect(() => {
  axios.get(`https://cocacademy-com.preview-domain.com/api/youthPlayers`)
  .then(response => {
    setData(response.data);
    localStorage.setItem('youthPlayer', JSON.stringify(response.data));

  })
  .catch(error => {
  //   setError(error.message);
  //   setLoading(false);
  });
}, [])
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start gap-[120px] leading-[normal] tracking-[normal] mq450:gap-[50px] mq750:gap-[60px]">
    <ContactRegister />
    <section className="h-[90vh] mq750:h-[70vh] w-full bg-cover bg-center bg-headerPlayersImg flex flex-row items-center justify-center py-0 box-border max-w-full text-center text-[48px] text-blanc font-ibm-plex-sans-arabic mt-[-120px] mq450:mt-[-50px] mq750:mt-[-60px]">
      <div className="w-full flex flex-col items-start justify-start gap-[16px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-full z-[1] mq450:text-[29px] mq1050:text-[38px] px-2">
            رحلة البحث عن المواهب الواعدة في أكاديميتنا
          </h1>
        </div>
        <div className="self-stretch relative text-xl z-[1] px-2 mq450:text-base">
          رحلة مستمرة للبحث عن المواهب الواعدة وتطويرها في أكاديميتنا، لنصنع
          جيلاً جديداً من الأبطال
        </div>
      </div>
    </section>
    <FooterBottom />
    <Container1 data={data}/>
    <Footer />
  </div>
  );
};

export default YouthPlayers;
