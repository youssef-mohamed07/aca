import React, { useState } from "react";
import Slider from "react-slick";
import { BounceLoader } from "react-spinners";
import { useNews } from "../hooks/useNews";
import NewsCard from "./Player/NewsContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewsHeading = () => {
  const { data: news, isLoading } = useNews();
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-6 text-red-800">
          آخر الأخبار
        </h1>
        <p className="text-lg sm:text-xl text-center mb-12 text-red-600">
          آخر أخبار الأكاديمية
        </p>
        {isLoading ? (
          <div className="flex justify-center">
            <BounceLoader color="#4A90E2" loading size={60} />
          </div>
        ) : !news?.length ? (
          <h2 className="text-2xl text-center text-gray-500">لا توجد أخبار</h2>
        ) : (
          <div className="relative">
            <Slider {...settings} className="mx-auto max-w-6xl">
              {news.map((item, index) => (
                <div
                  key={item.id}
                  className={`px-2 transform transition-transform duration-300 ${
                    index === activeSlide ? "scale-105" : "scale-100"
                  }`}
                >
                  <NewsCard news={item} />
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsHeading;