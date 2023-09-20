import React from 'react'
import styled from 'styled-components';
import pat1 from "../images/pat1.svg"
import pat2 from "../images/pat2.svg"
import pat3 from "../images/pat3.svg"
import pat4 from "../images/pat4.svg"
import pat5 from "../images/pat5.svg"
import pat6 from "../images/pat6.svg"

const Partners = () => {
  return (
    <Con>
      <h1>Partners and Sponsors</h1>
      <p className='sub-head'>Getlinked Hackathon 1.0 is honored to have the following major<br />
        companies as its partners and sponsors
      </p>
      <PartnersBox>
        <div className='grid-con'>
          <div>
            <img src={pat1} alt="img" />
            <VerticalDivider/>
            <HorizontalDividers/>
          </div>

          <div>
            <img src={pat2} alt="img" />
            <VerticalDivider/>
            <HorizontalDivider/>
          </div>
          <div className='no-right'>
            <img src={pat3} alt="img" />
            <HorizontalDivider/>
          </div>
          <div className='no-bottom'>
            <img src={pat4} alt="img" />
            <VerticalDivider/>
          </div>
          <div className='no-bottom'>
            <img src={pat5} alt="img" />
            <VerticalDivider/>
          </div>
          <div className='no-right no-bottom'>
            <img src={pat6} alt="img" />
          </div>
        </div>
      </PartnersBox>
    </Con>
  )
}

const Con = styled.section`  
    width: 100%;     
    display:flex; 
    flex-direction:column;
    align-items:center;
    padding:20px;  
    @media (max-width: 1200px) { 
        flex-direction:column;
    }
    h1{
      margin-bottom:20px;
      color: #FFF;
      font-family: 'Clash Display', sans-serif;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 27.5px; 
      text-align:center;
    }
    .sub-head{
      color: #FFF;
      text-align: center;
      font-family: Montserrat;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 27.5px; /* 196.429% */
      margin-bottom:50px;
    }
`;

const PartnersBox = styled.section`  
    width: 80%;     
    height: 560px; 
    border-radius: 5px;
    border: 1px solid #D434FE;
    background: rgba(255, 255, 255, 0.01);
    display:flex;
    justify-content:center;
    align-items:center;
    padding:20px;
    .grid-con{
      width: 80%; 
      display:grid; 
      grid-template-columns:1fr 1fr 1fr;  
      div{ 
        position:relative;
        width:100%;
        padding:30px;
        display:flex;
        justify-content:center;
        align-items:center; 
        border:none; 
      }
      .no-right{
        border-right:none;
      }
      .no-bottom{
        border-bottom:none;
      }
    }
`;

const HorizontalDivider = styled.section`  
  width: 80%;
  height: 4px;
  position:absolute;   
  bottom:0;
  background: #D434FE;
`;

const HorizontalDividers = styled.section`  
  width: 70%;
  height: 4px;
  position:absolute;   
  bottom:0;
  background: #D434FE;
`;

const VerticalDivider = styled.section`  
  width: 4px;
  height: 112.476px;
  background: #D434FE;
  position:absolute;   
  right:0;
`;

export default Partners