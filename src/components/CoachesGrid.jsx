import React from 'react';
import { BounceLoader } from 'react-spinners';
import { useCoaches } from '../hooks/useCoaches';
import TrainerCard from './TrainerCard';
import styled from 'styled-components';

const Section = styled.section`
  background: linear-gradient(to right, #2b2a75, #5a3f8e);
  min-height: 100vh;
  padding: 4rem 1rem;
  @media (min-width: 640px) {
    padding: 4rem 2rem;
  }
  @media (min-width: 1024px) {
    padding: 4rem 4rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(to right, #fbbf24, #f87171);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  text-align: center;
  @media (min-width: 640px) {
    font-size: 4rem;
  }
  @media (min-width: 768px) {
    font-size: 5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: white;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ErrorContainer = styled.div`
  background-color: rgba(255, 0, 0, 0.8);
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
`;

const EmptyContainer = styled.div`
  background-color: rgba(255, 215, 0, 0.8);
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const CoachesGrid = () => {
  const { data: coaches, isLoading, isError } = useCoaches();

  return (
    <Section>
      <Title>مدربي الأكاديمية</Title>
      <Subtitle>
        لدينا خيرة المدربين والمحضرين البدنيين اللذين يستطيعون اكتشاف المواهب واللاعبين الجيدين في مجال كرة القدم
      </Subtitle>
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <BounceLoader color="#ffffff" size={60} />
        </div>
      ) : isError ? (
        <ErrorContainer>
          <p className="text-2xl text-white">حدث خطأ أثناء تحميل البيانات</p>
        </ErrorContainer>
      ) : !coaches?.length ? (
        <EmptyContainer>
          <p className="text-2xl text-white">لا يوجد مدربين</p>
        </EmptyContainer>
      ) : (
        <Grid>
          {coaches.map((coach) => (
            <TrainerCard key={coach.id} coach={coach} />
          ))}
        </Grid>
      )}
    </Section>
  );
};

export default CoachesGrid;
