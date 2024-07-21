import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaCalendarAlt, FaTimes } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:shadow-2xl hover:scale-105 flex flex-col h-full">
        <div className="relative">
          <img
            src={news.imgSrc}
            alt={news.title}
            className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-4 sm:p-6 flex-grow">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 line-clamp-2 hover:text-blue-600 transition-colors">
            {news.title}
          </h3>
          <p className="text-gray-700 mb-4 line-clamp-3 text-sm sm:text-base">
            {news.description}
          </p>
          <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-4">
            <FaCalendarAlt className="mr-2" />
            <span>{new Date(news.created_at).toLocaleDateString()}</span>
          </div>
        </div>
        <div className="px-4 sm:px-6 pb-4 sm:pb-6">
          <button
            onClick={toggleDetails}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors transform hover:scale-105 duration-200 flex items-center justify-center text-sm sm:text-base"
          >
            <span>اقرأ المزيد</span>
            <svg
              className="w-4 h-4 ml-2 rtl:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {showDetails && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="container mx-auto px-4 py-8">
            <button
              onClick={toggleDetails}
              className="fixed top-4 right-4 bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-colors"
            >
              <FaTimes className="text-gray-800 text-xl" />
            </button>
            
            <div className="max-w-4xl mx-auto">
              <img
                src={news.imgSrc}
                alt={news.title}
                className="w-full h-auto max-h-96 object-cover rounded-xl mb-8"
              />
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                {news.title}
              </h1>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <FaCalendarAlt className="mr-2" />
                <span>{new Date(news.created_at).toLocaleDateString()}</span>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">{news.description}</p>
                {/* Add more content here. For example: */}
                
                {/* You can add more sections, images, or any other content here */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

NewsCard.propTypes = {
  news: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewsCard;