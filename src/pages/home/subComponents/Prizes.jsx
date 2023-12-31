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
          Highlight of the prizes or rewards for winner and for participants
        </p>
        <div className='medals-con'>
          <Normal>
            <div className='medal-img'>
              <img src={medal2} alt="img" />
            </div>
            <div className='medal-values'>
              <p className='position'>2nd</p>
              <p className='runner'>Runner</p>
              <p className='amount'>N300,000</p>
            </div>
          </Normal>
          <Middle>
            <div className='medal-img'>
              <img src={medal1} alt="img" />
            </div>
            <div className='medal-values'>
              <p className='position'>1st</p>
              <p className='runner'>Runner</p>
              <p className='amount'>N400,000</p>
            </div>
          </Middle>
          <Normal>
            <div className='medal-img'>
              <img src={medal3} alt="img" />
            </div>
            <div className='medal-values'>
              <p className='position'>3rd</p>
              <p className='runner'>Runner</p>
              <p className='amount'>N150,000</p>
            </div>
          </Normal>
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
    background-image: url('/images/Testimonials (1).png');
    background-position: center center;
    margin-top:50px;
    @media (max-width: 1200px) { 
      flex-direction:column;
      padding:100px 0px; 
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
        padding:20px;
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
      grid-template-columns: repeat(3, minmax(calc(33.33% - 20px), 1fr)); 
      row-gap:40px;
      column-gap:10px;
      margin-top:150px;
      @media (max-width: 1200px) {  
        margin-top:190px;
        grid-template-rows: auto auto auto;
      } 
    }
    @media (max-width: 1200px) { 
        width:100%;
    } 
`;

const Normal = styled.div`  
  height:280px;
  border-radius: 8px;
  border: 1px solid #D434FE;
  background: rgba(212, 52, 254, 0.12);
  display:flex;
  flex-direction:column;
  align-items:center;
  @media (max-width: 1200px) { 
    height:auto; 
    padding:20px 0;
  }
  .medal-img{ 
    margin-top:-60%; 
    @media (min-width: 800px) and (max-width: 1200px) { 
      margin-top:-30%;
    }
    img{
      width:100%;
      height:100%; 
      object-fit: contain; 
    } 
  }
  .medal-values{ 
    width:100%; 
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:30px;
    @media (max-width: 700px) { 
      margin-top:10px;
    }
    .position{
      color: #FFF;
      font-family: Montserrat;
      font-size: 36px;
      font-style: normal;
      font-weight: 700; 
      text-align:center;
      margin-bottom:10px;
      @media (max-width: 700px) { 
        font-size:15px;
        margin-bottom:0px;
      }
    }
    .runner{
      color: #FFF;
      font-family: Montserrat;
      font-size: 24px;
      font-style: normal;
      font-weight: 600; 
      text-align:center;
      margin-bottom:30px;
      @media (max-width: 700px) { 
        font-size:15px;
        margin-bottom:0px;
      }
    }
    .amount{
      color: #D434FE;
      font-family: Montserrat;
      font-size: 30px;
      font-style: normal;
      font-weight: 700;
      margin-bottom:0; 
      text-align:center;
      @media (max-width: 700px) { 
        font-size: 12px;
      }
    }
  } 
`;

const Middle = styled(Normal)`  
  height:310px;
  border-radius: 8px;
  border: 1px solid #903AFF;
  background: rgba(144, 58, 255, 0.12);
  @media (max-width: 1200px) { 
    height:auto; 
    padding:20px 0;
  }
  .medal-img{ 
    margin-top:-60%; 
    @media (max-width: 700px) {  
      display:flex;
      justify-content:center;
    }
    img{ 
      width:100%;
      height:100%;
      transform: scale(1.2); 
      object-fit: contain; 
    }
  }
  .medal-values{
    .amount{
      color:#903AFF;
      margin-top:20px; 
      @media (max-width: 700px) { 
        font-size: 12px;
      }
    }
  }
`;

export default Prizes