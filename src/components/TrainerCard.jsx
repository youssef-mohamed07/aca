import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  background: linear-gradient(to bottom right, #6b4f9c, #5a3f8e);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transform: scale(1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
`;

const Content = styled.div`
  padding: 16px;
  color: white;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Info = styled.p`
  font-size: 0.875rem;
  margin-bottom: 8px;
`;

const Button = styled.button`
  width: 100%;
  background-color: #f59e0b;
  color: #1f2937;
  padding: 12px;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: semi-bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  &:hover {
    background-color: #fbbf24;
    transform: scale(1.05);
  }
`;

const TrainerCard = ({ coach }) => (
  <Card>
    <ImageWrapper>
      <Image src={coach.imgSrc} alt={coach.coachName} />
      <Overlay />
    </ImageWrapper>
    <Content>
      <Title>{coach.coachName}</Title>
      <Description>{coach.description}</Description>
      <Info>تاريخ: {coach.date}</Info>
      <Info>السعر: ${coach.price}</Info>
    </Content>
  </Card>
);

TrainerCard.propTypes = {
  coach: PropTypes.shape({
    id: PropTypes.number.isRequired,
    coachName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired,
};

export default TrainerCard;
