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
          <MobileTextRightA>
            <h3>Teams Registration begins</h3>
            <p>
              The getlinked tech hackathon 1.0 is formally <br />
              announced to the general public and teams <br />
              begin to get ready to register
            </p>
            <h3>November 18, 2023</h3>
          </MobileTextRightA>
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
          <MobileTextRightA>
            <h3>Teams Registration begins</h3>
            <p>
              Interested teams can now show their interest <br />
              in the getlinked tech hackathon 1.0 2023 by <br />
              proceeding to register
            </p>
            <h3>November 18, 2023</h3>
          </MobileTextRightA>

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
          <MobileTextRightA>
            <h3>Teams Registration begins</h3>
            <p>
              Interested Participants are no longer Allowed<br />
              to register
            </p>
            <h3>November 18, 2023</h3>
          </MobileTextRightA>
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
          <MobileTextRightA>
            <h3>Teams Registration begins</h3>
            <p>
              All teams whom idea has been accepted into <br />
              getlinked tech hackathon 1.0 2023 are formally <br />
              announced
            </p>
            <h3>November 18, 2023</h3>
          </MobileTextRightA>
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
          <MobileTextRightA>
            <h3>Teams Registration begins</h3>
            <p>
              Accepted teams can now proceed to build <br />
              their ground breaking skill driven solutions
            </p>
            <h3>November 18, 2023</h3>
          </MobileTextRightA>
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
          <MobileTextRightA>
            <h3>Teams Registration begins</h3>
            <p>
              Teams get the opportunity to pitch their <br />
              projects to judges. The winner of the <br />
              hackathon will also be announced on this day
            </p>
            <h3>November 18, 2023</h3>
          </MobileTextRightA>
        </Step>
      </StepContainer>

    </Con>
  )
}

const Con = styled.div`  
  width: 100%;    
  display: flex;
  flex-direction: column;
  align-items: center; 
  h1{
    color: #FFF;
    font-family: Clash Display;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 0%; /* 0px */
    text-align:center;
    margin-bottom:30px;
    @media (max-width: 1200px) {  
      font-size: 20px; 
    }
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
  @media (max-width: 1200px) { 
    align-items: flex-start; 
    padding:20px 20px 20px 50px;
  }
`;

const Step = styled.div`
  width:80%;
  position:relative; 
  display: flex;
  align-items: center;
  justify-content: center;  
  margin:10px 0;
  @media (max-width: 1200px) { 
    justify-content: flex-start; 
    margin-bottom:30px;
    width:100%;
  }
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
  @media (max-width: 1200px) { 
    margin:0;
    width: 19.32px;
    height: 19.32px;
    color: #FFF;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left:-10px;
  }
`;

const TextLeft = styled.div`
  position:absolute; 
  left:0;
  h3{
    color: #D434FE;
    font-family: Montserrat;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: right;
    margin-bottom:10px;
    @media (max-width: 1200px) { 
      color: #D434FE;
      font-family: Montserrat;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      display:none;
    }
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
    @media (max-width: 1200px) { 
      color: #FFF;
      font-family: Montserrat;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 159.9%; /* 19.188px */
      display:none;
    }
  } 
`;

const TextLeftA = styled(TextLeft)` 
  left:210px; 
`;



const TextRight = styled.div`
  display:block;
  position:absolute;  
  right:210px;
  @media (max-width: 1200px) {  
    display:none;
  }
  h3{
    color: #D434FE;
    font-family: Montserrat;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align:right;
    margin-bottom:10px;
    @media (max-width: 1200px) { 
      color: #D434FE;
      font-family: Montserrat;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      dislay:none;
    }
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
    @media (max-width: 1200px) { 
      color: #FFF;
      font-family: Montserrat;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 159.9%; /* 19.188px */
    }
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
  @media (max-width: 1200px) { 
    display:none;
  }
`;

const MobileTextRightA = styled.div`
  display:none;
  position:absolute;   
  left:15px; 
  bottom:-7px; 
  @media (max-width: 1200px) { 
    display:block;
  }
  h3{
    color: #D434FE;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: left;
    margin-bottom:10px;
    @media (max-width: 1200px) { 
      color: #D434FE;
      font-family: Montserrat;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
  p{
    color: #FFF;
    text-align: right;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 170.9%; /* 23.926px */
    text-align: left;
    margin-bottom:10px;
    @media (max-width: 1200px) { 
      color: #FFF;
      font-family: Montserrat;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 159.9%; /* 19.188px */
    }
  } 
`;

const Line = styled.div`
  width: 4px;
  height: 137px;
  background: #D434FE;
  @media (max-width: 1200px) { 
    width: 2px;
    height: 77px
  }
`;

export default Timeline