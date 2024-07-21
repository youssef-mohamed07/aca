import React, { useEffect, useState } from 'react';
import ContactRegister from '../components/ContactRegister';
import FrameComponent1 from '../components/TrainingSessions/FrameComponent1';
import Footer from '../components/Footer';
import CourseDetails from '../components/TrainingSessions/CourseDetails';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const UdemyCoursePage = () => {
    const [expandedSections, setExpandedSections] = useState({});
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [data, setData] = useState();

    const id = useLocation();
    console.log(id.pathname.slice(10));


useEffect(() => {
    axios.get(`https://cocacademy-com.preview-domain.com/api/video-groups/${id.pathname.slice(10)}?user_id=${localStorage.getItem('id')}`
)
    .then(response => {
        setData(response.data.videos);
        console.log(response.data);
    })
    .catch(error => {
    console.log(error);
    });
}, [])
    const toggleSection = (index) => {
        setExpandedSections(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
     <>
       <div className="font-sans bg-gray-900 text-white">
            {/* <main className="max-w-6xl mx-auto p-6">
                <div className="flex flex-col md:flex-row justify-between mb-8">
                    <div className="md:w-2/3">
                        <h1 className="text-3xl font-bold mb-2">{courseData.title}</h1>
                        <p className="mb-2">{courseData.subtitle}</p>
                        <div className="flex items-center text-sm mb-2">
                            <span className="bg-red-600 text-white px-2 py-1 rounded mr-2">Bestseller</span>
                            <span className="mr-2">{courseData.rating} ★★★★☆</span>
                            <span className="mr-2">({courseData.ratingCount} ratings)</span>
                            <span>{courseData.studentCount} students</span>
                        </div>
                        <p className="text-sm">
                            Created by <span className="text-red-400">{courseData.instructor.name}</span>
                        </p>
                        <p className="text-sm">
                            Last updated {courseData.lastUpdated} • {courseData.language}
                        </p>
                    </div>
                    <div className="md:w-1/3 bg-gray-800 p-4 rounded-lg mt-4 md:mt-0">
                        <div className="mb-4">
                            <span className="text-3xl font-bold text-red-500">{courseData.price.current}</span>
                            <span className="line-through ml-2">{courseData.price.original}</span>
                            <span className="text-sm block text-red-400">{courseData.price.discount}</span>
                            <span className="text-red-400 text-sm">4 hours left at this price!</span>
                        </div>
                        <button className="w-full bg-red-600 text-white py-3 rounded mb-2 hover:bg-red-700">Add to cart</button>
                        <button className="w-full border border-white py-3 rounded mb-2 hover:bg-gray-700">Buy now</button>
                        <p className="text-center text-sm">30-Day Money-Back Guarantee</p>
                        <div className="mt-4">
                            <h3 className="font-bold mb-2">This course includes:</h3>
                            <ul className="text-sm">
                                {courseData.features.map((feature, index) => (
                                    <li key={index} className="flex items-center mb-1">
                                        <span className="mr-2 text-red-400">✓</span> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <section className="bg-gray-800 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {courseData.whatYouWillLearn.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <svg className="w-6 h-6 mr-2 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="bg-gray-800 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-4">Course content</h2>
                    <div className="flex justify-between items-center mb-4">
                        <p>{courseData.content.totalSections} sections • {courseData.content.totalLectures} lectures • {courseData.content.totalLength} total length</p>
                        <button className="text-red-400 font-semibold">Expand all sections</button>
                    </div>
                    
                    {courseData.content.sections.map((section, index) => (
                        <div key={index} className="border-t border-gray-700 py-4">
                            <div 
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleSection(index)}
                            >
                                <div className="flex items-center">
                                    <span className="mr-2">{expandedSections[index] ? '▼' : '▶'}</span>
                                    <h3 className="font-semibold">{section.title}</h3>
                                </div>
                                <span className="text-sm text-gray-400">{section.lectures} lectures • {section.duration}</span>
                            </div>
                            {expandedSections[index] && section.subsections && (
                                <div className="mt-2 ml-6">
                                    {section.subsections.map((subsection, subIndex) => (
                                        <div key={subIndex} className="flex justify-between items-center py-2">
                                            <div className="flex items-center">
                                                {subsection.preview ? (
                                                    <span className="mr-2 text-red-400">▶</span>
                                                ) : (
                                                    <span className="mr-2">□</span>
                                                )}
                                                <span className={subsection.preview ? "text-red-400" : ""}>
                                                    {subsection.title}
                                                </span>
                                            </div>
                                            <div className="flex items-center">
                                                {subsection.preview && (
                                                    <span className="mr-4 text-red-400">Preview</span>
                                                )}
                                                <span className="text-sm text-gray-400">{subsection.duration}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </section>

                <section className="bg-gray-800 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-4">Description</h2>
                    <p className={showFullDescription ? "" : "line-clamp-3"}>
                        {courseData.description}
                    </p>
                    <button 
                        className="text-red-400 font-semibold mt-2"
                        onClick={() => setShowFullDescription(!showFullDescription)}
                    >
                        {showFullDescription ? "Show less" : "Show more"}
                    </button>
                </section>

                <section className="bg-gray-800 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-4">Instructor</h2>
                    <div className="flex items-start">
                        <img src="https://placeholder.com/150" alt={courseData.instructor.name} className="w-16 h-16 rounded-full mr-4" />
                        <div>
                            <h3 className="text-xl font-semibold">{courseData.instructor.name}</h3>
                            <p className="text-gray-400">CCNP Instructor</p>
                            <div className="flex items-center mt-2">
                                <span className="text-yellow-500 mr-1">★</span>
                                <span>{courseData.instructor.rating} Instructor Rating</span>
                            </div>
                            <div className="mt-2">
                                <span className="mr-4">{courseData.instructor.courses} courses</span>
                                <span>{courseData.instructor.students} students</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-800 p-6 rounded-lg mb-6">
                    <h2 className="text-2xl font-bold mb-4">Featured review</h2>
                    <div className="flex items-start">
                        <img src="https://placeholder.com/50" alt={courseData.featuredReview.name} className="w-12 h-12 rounded-full mr-4" />
                        <div>
                            <h3 className="font-semibold">{courseData.featuredReview.name}</h3>
                            <div className="flex items-center text-yellow-500 mb-2">
                                {"★".repeat(courseData.featuredReview.rating)}
                            </div>
                            <p className="text-gray-400 mb-2">{courseData.featuredReview.date}</p>
                            <p>{courseData.featuredReview.content}</p>
                            <div className="mt-2">
                                <button className="text-gray-400 mr-4">Helpful</button>
                                <button className="text-gray-400">Report</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main> */}
                  <ContactRegister />
                  <FrameComponent1/>
                  <CourseDetails data={data}/>
                  <Footer />



        </div>
     </>
    );
};

export default UdemyCoursePage;