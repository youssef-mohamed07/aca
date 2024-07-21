import { useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TrainingCardContainer = ({ className = "", item }) => {
  const onTrainingCardContainerClick = useCallback(() => {
    // Please sync "player" to the project
  }, []);

  return (
    <div
      className={`grow rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 shrink-0 flex flex-col items-end justify-start p-4 box-border relative gap-[16px] max-w-full cursor-pointer text-center text-xl text-blanc font-ibm-plex-sans-arabic ${className}`}
      onClick={onTrainingCardContainerClick}
    >
      <div className="relative w-full h-48 overflow-hidden rounded-lg">
        <img
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          alt={item.coachName}
          src={item.imgSrc}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      
      <div className="self-stretch flex flex-col items-end justify-start gap-[12px] text-right">
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-700">المدرب:</span>
          <span className="text-lg">{item.coachName}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-700">التاريخ:</span>
          <span className="text-lg whitespace-pre-wrap">{item.date}</span>
        </div>
        <div className="self-stretch">
          <span className="font-medium text-gray-700">الحصة:</span>
          <span className="text-base ml-2">{item.description}</span>
        </div>
      </div>

      <div className="self-stretch mt-4">
        {localStorage.getItem('id') ? (
          <Link 
            to={`/training/${item.id}`} 
            className="block w-full py-2 px-4 bg-brown text-white text-center rounded-lg hover:bg-brown-dark transition-colors duration-300"
          >
            تفاصيل
          </Link>
        ) : (
          <Link 
            to="/login" 
            className="block w-full py-2 px-4 bg-brown text-white text-center rounded-lg hover:bg-brown-dark transition-colors duration-300"
          >
            تفاصيل
          </Link>
        )}
      </div>
    </div>
  );
};

TrainingCardContainer.propTypes = {
  className: PropTypes.string,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    coachName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default TrainingCardContainer;