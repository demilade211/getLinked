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
    padding:100px 20px;
    background-image: url('/images/Partners Background Container.png');
    background-position: center center;
    background-size: 100% 100%;
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
      @media (max-width: 1200px) {  
        font-size: 20px;
        width: 100%;  
      }
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
    border-radius: 5px;
    border: 1px solid #D434FE;
    background: rgba(255, 255, 255, 0.01);
    display:flex;
    justify-content:center;
    align-items:center;
    padding:20px;
    @media (max-width: 1200px) { 
      width: 98%;    
    }
    .grid-con{
      width: 80%; 
      display:grid; 
      grid-template-columns: repeat(3, minmax(calc(33.33% - 20px), 1fr)); 
      justify-content:center;
      @media (max-width: 1200px) { 
          
      }
      div{ 
        position:relative;
        width:100%;
        padding:30px;
        display:flex;
        justify-content:center;
        align-items:center; 
        border:none; 
        img{
          object-fit: contain; 
          @media (max-width: 1200px) { 
            width: 100%;
            height: 100%;
          }
          @media (max-width: 700px) { 
            width: 50.99px;
            height: 50.234px;
          }
        }
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
  @media (max-width: 1200px) { 
    height: 2px;
  }
`;

const HorizontalDividers = styled.section`  
  width: 70%;
  height: 4px;
  position:absolute;   
  bottom:0;
  background: #D434FE;
  @media (max-width: 1200px) { 
    height: 2px;
  }
`;

const VerticalDivider = styled.section`  
  width: 4px;
  height: 112.476px;
  background: #D434FE;
  position:absolute;   
  right:0;
  @media (max-width: 1200px) { 
    width: 2px;
    height: 80%;
  }
`;

export default Partners