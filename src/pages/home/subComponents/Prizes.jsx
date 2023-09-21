import React from 'react'
import styled from 'styled-components';
import trophy from "../images/trophy.svg"
import medal1 from "../images/medal1.svg"
import medal2 from "../images/medal2.svg"
import medal3 from "../images/medal3.svg"

const Prizes = () => {
  return (
    <Con>
      <Left>
        <img src={trophy} alt="img" />
      </Left>
      <Right>
        <h3>Prizes and <br /> <span>Rewards</span></h3>
        <p>
          Evaluate the uniqueness and creativity of the
        </p>
        <div className='medals-con'>
          <div className='in-con'>
            <div className='medal-img'>
              <img src={medal2} alt="img" />
            </div>
            <div className='medal-values'>
              <p className='position'>2nd</p>
              <p className='runner'>Runner</p>
              <p className='amount'>N300,000</p>
            </div>
          </div>
          <div className='in-con gold'>
            <div className='medal-img'>
              <img src={medal1} alt="img" />
            </div>
            <div className='medal-values'>
              <p className='position'>1st</p>
              <p className='runner'>Runner</p>
              <p className='amount'>N400,000</p>
            </div>
          </div>
          <div className='in-con'>
            <div className='medal-img'>
              <img src={medal3} alt="img" />
            </div>
            <div className='medal-values'>
              <p className='position'>3rd</p>
              <p className='runner'>Runner</p>
              <p className='amount'>N150,000</p>
            </div>
          </div>
        </div>


      </Right>
    </Con>
  )
}

const Con = styled.section`  
    width: 100%;     
    display:flex; 
    align-items:center;
    padding:100px 20px;
    @media (max-width: 1200px) { 
        flex-direction:column;
    }
`;

const Left = styled.div`  
    width: 50%;   
    height: 400px; 
    display:flex; 
    justify-content:center;
    padding:20px;    
    img{
        width:100%;
        height:100%;
    }
    @media (max-width: 1200px) { 
        width:100%;
    }
`;

const Right = styled.div`  
    width: 50%;  
    display:flex;
    flex-direction:column;
    justify-content:center; 
    padding:20px;  
    padding-left:50px; 
    @media (max-width: 1200px) { 
      padding-left:0px;  
    }
    h3{ 
        width: 80%;    
        color: #FFF;
        font-family: 'Clash Display', sans-serif;
        font-size: 32px;
        font-style: normal;
        font-weight: 700; 
        text-align:left;
        margin-bottom:20px;
        span{
            color:#D434FE;
        }
        @media (max-width: 1200px) { 
            text-align:center;
            font-size: 24px;
            width: 100%;  
        }
    }
    p{ 
        width: 80%;    
        color: #FFF;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 27.5px; /* 196.429% */
        margin-bottom:20px;
        span{
            color: #FF26B9;
            font-family: Montserrat;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: 173.5%; /* 27.76px */
        }
        @media (max-width: 1200px) { 
            text-align:center;
            font-size: 16px;
            width: 100%;  
        }

    } 
    .medals-con{
      width:100%;
      display:grid;
      grid-template-columns:1fr 1fr 1fr; 
      row-gap:40px;
      column-gap:10px;
      margin-top:150px;
      @media (max-width: 1200px) {  
        margin-top:190px;
      }
      @media (max-width: 700px) { 
        grid-template-columns:100%;
        margin-top:180px;
      }
      .in-con{
        height:296px;
        border-radius: 8px;
        border: 1px solid #D434FE;
        background: rgba(212, 52, 254, 0.12);
        display:flex;
        flex-direction:column;
        align-items:center;
        .medal-img{
          margin-top:-50%;
          img{
            width:89%;
            height:89%; 
            @media (max-width: 1200px) { 
              width:95%;
              height:95%; 
            }
          }
          @media (max-width: 1200px) { 
            margin-top:-30%;
          }
          @media (max-width: 700px) { 
            display:none;
          }
        }
        .medal-values{
          width:100%; 
          display:flex;
          flex-direction:column;
          align-items:center;
          margin-top:30px;
          .position{
            color: #FFF;
            font-family: Montserrat;
            font-size: 36px;
            font-style: normal;
            font-weight: 700; 
            text-align:center;
            margin-bottom:10px;
          }
          .runner{
            color: #FFF;
            font-family: Montserrat;
            font-size: 24px;
            font-style: normal;
            font-weight: 600; 
            text-align:center;
            margin-bottom:30px;
          }
          .amount{
            color: #D434FE;
            font-family: Montserrat;
            font-size: 30px;
            font-style: normal;
            font-weight: 700;
            margin-bottom:0; 
            text-align:center;
          }
        }
      }
      .gold{
        height:347px;
        border-radius: 8px;
        border: 1px solid #903AFF;
        background: rgba(144, 58, 255, 0.12);
        .medal-img{
          margin-top:-60%; 
          img{
            width:100%;
            height:100%;
          }
        }
        .medal-values{
          .amount{
            color:#903AFF;
            margin-top:40px;
          }
        }
      }
    }
    @media (max-width: 1200px) { 
        width:100%;
    } 
`;

export default Prizes