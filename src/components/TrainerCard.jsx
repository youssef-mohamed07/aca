import React from 'react';
import PropTypes from 'prop-types';

const TrainerCard = ({ coach }) => (
  <div className="bg-[#a30c3d] rounded-lg overflow-hidden shadow-lg">
    <div className="relative pt-[100%]">
      <img
        src={coach.imgSrc}
        alt={coach.coachName}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>
    <div className="p-4 text-white text-center">
      <h2 className="text-xl font-bold mb-2">{coach.coachName}</h2>
      <p className="text-sm mb-3">{coach.description}</p>
      <p className="text-sm mb-3">{coach.price}$</p>
    </div>
  </div>
);

TrainerCard.propTypes = {
  coach: PropTypes.shape({
    id: PropTypes.number.isRequired,
    coachName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired, // Ensure price is included and is a number
  }).isRequired,
};

export default TrainerCard;
