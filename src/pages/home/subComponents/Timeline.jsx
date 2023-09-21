import React from 'react'
import styled from 'styled-components';

const Timeline = () => {

  return (
    <Con>
      <h1>Timeline</h1>
      <p className='sub'>Here is the breakdown of the time we anticipate <br />
        using for the upcoming event.
      </p>
      <StepContainer>
        <Line />
        <Step>
          <TextLeft>
            <h3>Hackathon Announcement</h3>
            <p>The getlinked tech hackathon 1.0 is formally announced to the <br /> general public and teams begin to get ready to register</p>
          </TextLeft>
          <Circle>1</Circle>
          <TextRight>
            <h3>November 18, 2023</h3>
          </TextRight>

        </Step>
        <Line />
        <Step>
          <TextLeftA>
            <h3>November 18, 2023</h3>
          </TextLeftA>
          <Circle>2</Circle>
          <TextRightA>
            <h3>Teams Registration begins</h3>
            <p>
              Interested teams can now show their interest in the<br />
              getlinked tech hackathon 1.0 2023 by proceeding to register
            </p>
          </TextRightA>

        </Step>
        <Line />
        <Step>
          <TextLeft>
            <h3>Hackathon Announcement</h3>
            <p>The getlinked tech hackathon 1.0 is formally announced to the <br /> general public and teams begin to get ready to register</p>
          </TextLeft>
          <Circle>3</Circle>
          <TextRight>
            <h3>November 18, 2023</h3>
          </TextRight>

        </Step>
        <Line />
        <Step>
          <TextLeftA>
            <h3>November 18, 2023</h3>
          </TextLeftA>
          <Circle>4</Circle>
          <TextRightA>
            <h3>
              Announcement of the accepted teams<br />
              and ideas
            </h3>
            <p>
              All teams whom idea has been accepted into getlinked tech<br />
              hackathon 1.0 2023 are formally announced
            </p>
          </TextRightA>
        </Step>
        <Line />
        <Step>
          <TextLeft>
            <h3>Hackathon Announcement</h3>
            <p>The getlinked tech hackathon 1.0 is formally announced to the <br /> general public and teams begin to get ready to register</p>
          </TextLeft>
          <Circle>5</Circle>
          <TextRight>
            <h3>November 18, 2023</h3>
          </TextRight>

        </Step>
        <Line />
        <Step>
          <TextLeftA>
            <h3>November 18, 2023</h3>
          </TextLeftA>
          <Circle>6</Circle>
          <TextRightA>
            <h3>Demo Day</h3>
            <p>Teams get the opportunity to pitch their projects to judges.<br />
              The winner of the hackathon will also be announced on<br />
              this day
            </p>
          </TextRightA>
        </Step>
      </StepContainer>

    </Con>
  )
}

const Con = styled.div`  
  width: 100%;   
  padding:50px 0; 
  h1{
    color: #FFF;
    font-family: Clash Display;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 0%; /* 0px */
    text-align:center;
    margin-bottom:30px;
  }
  .sub{
    color: #FFF;
    text-align: center;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 172.4%; /* 24.136px */
    margin-bottom:70px;
  }
`;

const StepContainer = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

const Step = styled.div`
  width:80%;
  position:relative; 
  display: flex;
  align-items: center;
  justify-content: center; 
  margin:10px 0;
`;

const Circle = styled.div` 
  width: 53px;
  height: 53px;
  border-radius: 26.5px;
  background: linear-gradient(270deg, #903AFF 0%, #D434FE 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
  font-size: 24px;
  margin:0 100px;
`;

const TextLeft = styled.div`
  position:absolute; 
  left:0;
  h3{
    color: #D434FE;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: right;
    margin-bottom:10px;
  }
  p{
    color: #FFF;
    text-align: right;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 170.9%; /* 23.926px */
    text-align: right;
  }
`;

const TextLeftA = styled(TextLeft)` 
  left:210px; 
`;



const TextRight = styled.div`
  position:absolute;  
  right:210px;
  h3{
    color: #D434FE;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align:right;
    margin-bottom:10px;
  }
  p{
    color: #FFF;
    text-align: right;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 170.9%; /* 23.926px */
    text-align: right;
  }
`;

const TextRightA = styled(TextRight)` 
  right:0; 
  h3{ 
    text-align:left;
  }
  p{ 
    text-align: left;
  }
`;

const Line = styled.div`
  width: 4px;
  height: 137px;
  background: #D434FE;
`;

export default Timeline