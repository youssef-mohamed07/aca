import React from 'react';
import { BounceLoader } from 'react-spinners';
import { useCoaches } from '../hooks/useCoaches';
import TrainerCard from './TrainerCard';

const CoachesGrid = () => {
  const { data: coaches, isLoading, isError } = useCoaches();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <BounceLoader color="#ffffff" size={60} />
      </div>
    );
  }

  if (isError) {
    return (
      <section
        className="min-h-screen p-4 sm:p-8 lg:p-16"
        style={{
          backgroundImage: 'url(back.jpeg)', // Ensure the path is correct
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-red-600 bg-opacity-80 p-8 rounded-lg text-center">
          <p className="text-2xl text-white">حدث خطأ أثناء تحميل البيانات</p>
        </div>
      </section>
    );
  }

  if (!coaches?.length) {
    return (
      <section
        className="min-h-screen p-4 sm:p-8 lg:p-16"
        style={{
          backgroundImage: 'url(back.jpeg)', // Ensure the path is correct
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-yellow-400 bg-opacity-80 p-8 rounded-lg text-center">
          <p className="text-2xl text-white">لا يوجد مدربين</p>
        </div>
      </section>
    );
  }

  return (
    <div
      className="py-16"
      style={{
        backgroundImage: 'url(back.jpeg)', // Ensure the path is correct
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <section className="container mx-auto px-4 sm:px-8 lg:px-16">
        <h1 className="text-3xl font-bold text-white mb-4 text-center sm:text-4xl md:text-5xl">
          مدربي الأكاديمية
        </h1>
        <p className="text-xl text-white mb-8 text-center max-w-3xl mx-auto sm:text-2xl">
          لدينا خيرة المدربين والمحضرين البدنيين اللذين يستطيعون اكتشاف المواهب واللاعبين الجيدين في مجال كرة القدم
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {coaches.map((coach) => (
            <TrainerCard key={coach.id} coach={coach} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CoachesGrid;
