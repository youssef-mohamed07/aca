import { BounceLoader } from "react-spinners";
import { useEvents } from "../hooks/useEvents";
import TimeLocation from "./TimeLocation";

const MatchInfo = ({ className = "" }) => {
  const { data, isLoading } = useEvents();

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-1 box-border max-w-full text-right text-xl text-black font-ibm-plex-sans-arabic ${className} mb-5 mt-[-20px]`}
    >
      <div className="w-[1077px] overflow-x-auto shrink-0 flex flex-wrap items-center justify-center gap-[24px] max-w-full z-[3]">
        {!data?.length && !isLoading && <h1 className="text-white">لا يوجد احداث</h1>}

        {isLoading ? (
          <BounceLoader color="#ffffff" loading size={40} />
        ) : (
          <>
            {data?.map((e) => (
              <TimeLocation
                key={e.id}
                prop={e.eventTime}
                prop1={e.title}
                location={e.eventPlace}
                location1="/location.svg"
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default MatchInfo;
