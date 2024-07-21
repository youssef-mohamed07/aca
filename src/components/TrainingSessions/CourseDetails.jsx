import React from 'react';
import styled from 'styled-components';

// Styled Components
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 16px;
  max-width: 100%;
  text-align: right;
  font-size: 21px;
  color: #fff;
  font-family: 'IBM Plex Sans Arabic', sans-serif;
  width: 100%;
  padding: 20px;
  background-color: #1f1f1f; /* Dark background for better contrast */
`;

const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
  gap: 16px;
`;

const Video = styled.video`
  width: 100%;
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Description = styled.p`
  text-align: right;
  line-height: 1.6;
  font-size: 16px;
  color: #ddd;
  margin-top: 8px;
`;

const CenteredText = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 20px;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 12px 24px;
  text-align: center;
  background-color: #7f4d35; /* brown */
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background-color 0.3s, transform 0.2s;
  &:hover {
    background-color: #d05d5d; /* IndianRed */
    transform: scale(1.02);
  }
`;

const ButtonText = styled.span`
  font-size: 16px;
  font-family: 'IBM Plex Sans Arabic', sans-serif;
  color: #fff; /* blanc */
`;

function CourseDetails({ data }) {
  const sendMessage = () => {
    const phoneNumber = '201023402756'; // Replace with the recipient's phone number
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, '_blank'); // Open the WhatsApp URL in a new tab
  };

  return (
    <Section>
      {data ? (
        <VideoWrapper>
          {data.length ? (
            data.map((item) => (
              <div key={item.id} style={{ width: '100%' }}>
                <Video controls>
                  <source src={item?.video_url} type="video/mp4" />
                  Your browser does not support the video tag.
                </Video>
                <Description>{item?.description}</Description>
              </div>
            ))
          ) : (
            <CenteredText>لا توجد فيديوهات</CenteredText>
          )}
          <CenteredText>
            <p className="text-xl">اذا كنت تريد مشاهدة باقي الفيديوهات</p>
            <Button onClick={sendMessage}>
              <ButtonText>للاشتراك إضغط هنا</ButtonText>
            </Button>
          </CenteredText>
        </VideoWrapper>
      ) : (
        <CenteredText>Loading...</CenteredText>
      )}
    </Section>
  );
}

export default CourseDetails;
