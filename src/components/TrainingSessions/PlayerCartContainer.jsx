import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PlayerCardContainer({ item, state }) {
  return (
    <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative h-48">
        <img
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          alt={item.name}
          src={item.playerPicture_url}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <div className="p-4 text-right">
        <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
        
        <div className="space-y-2 mb-4">
          <InfoItem label="المركز" value={item.position} />
          <InfoItem label="الجنسية" value={item.nationality} />
        </div>

        <Link 
          to={state === 'pro' ? `/players/pro/${item.id}` : `/players/youth/${item.id}`}
          className="block w-full py-2 px-4 bg-brown text-white text-center rounded-lg hover:bg-brown-dark transition-colors duration-300 no-underline"
        >
          تفاصيل
        </Link>
      </div>
    </div>
  );
}

function InfoItem({ label, value }) {
  return (
    <div className="flex justify-end items-center gap-2">
      <span className="font-medium text-gray-700">{label}:</span>
      <span className="text-gray-900">{value}</span>
    </div>
  );
}

PlayerCardContainer.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    playerPicture_url: PropTypes.string.isRequired,
  }).isRequired,
  state: PropTypes.oneOf(['pro', 'youth']).isRequired,
};

export default PlayerCardContainer;