import React from 'react'
import styled from 'styled-components';
import padlockman from "../images/padlockman.svg"
import list from "../images/list.svg"

const Privacy = () => {
  return (
    <Con>
      <Left>
        <img src={padlockman} alt="img" />
      </Left>
      <Right>
        <h3>Privacy Policy and  <br /> <span>Terms</span></h3>
        <p className='second'>
          <span>Last updated on September 12, 2023</span>
        </p>
        <p>Below are our privacy & policy, which outline a lot of goodies.
          it's our aim to always take of our participant
        </p>
        <div className='policy'>
          <p className='para'>
            At getlinked tech Hackathon 1.0, we value your privacy
            and are committed to protecting your personal information.
            This Privacy Policy outlines how we collect, use, disclose,
            and safeguard your data when you participate in our tech
            hackathon event. By participating in our event, you consent
            to the practices described in this policy.
          </p>
          <h4>Licensing Policy</h4>
          <h5>Here are terms of our Standard License:</h5>
          <div className='list'>
            <img src={list} alt="img" />
            <p>The Standard License grants you a non-exclusive right to
              navigate and register for our event
            </p>
          </div>
          <div className='list'>
            <img src={list} alt="img" />
            <p>
              You are licensed to use the item available at any free source
              sites, for your project developement
            </p>
          </div>
          <div className='btn-con'>
            <NavButton>Read More</NavButton>
          </div>
        </div>
      </Right>
    </Con>
  )
}

const Con = styled.section`  
    width: 100%;     
    display:flex; 
    flex-direction: row-reverse; 
    padding:100px 20px;
    border-top:1px solid rgba(255, 255, 255, 0.18);  
    @media (max-width: 1200px) { 
        flex-direction:column-reverse;
    }
`;

const Left = styled.div`  
    width: 40%;   
    height: 500px; 
    display:flex; 
    justify-content:center;  
    align-items:flex-end; 
    background-image: url('/images/safety.svg');
    background-position: center center;
    background-size: 100% 100%;
    img{
      width:99%;
      height:99%;
      margin-bottom:-33%;
      margin-right:43px;
      @media (max-width: 1200px) { 
        margin-bottom:0;
      }
    }
    @media (max-width: 1200px) { 
        width:100%;
    }
`;

const Right = styled.div`  
    width: 60%;    
    display:flex;
    flex-direction:column;
    justify-content:center; 
    padding-left:150px;  
    padding-top:70px;
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
            font-size: 20px;
            width: 100%;  
        }
    }
    .second{
      margin-bottom:20px;
    }
    p{ 
        width: 70%;    
        color: #FFF;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 27.5px; /* 196.429% */
        margin-bottom:50px;
        span{
            color: rgba(255, 255, 255, 0.75);
            font-family: Montserrat;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 27.5px;
        }
        @media (max-width: 1200px) { 
            text-align:center;
            font-size: 13px;
            width: 100%;  
        }

    } 
    .policy{ 
      width:90%;
      border-radius: 5px;
      border: 1px solid #D434FE;
      background: rgba(217, 217, 217, 0.03); 
      padding:30px;
      @media (max-width: 1200px) { 
        width:100%; 
      }
      .para{
        width: 90%;  
        margin-bottom:30px;  
        text-align:left;
        @media (max-width: 1200px) { 
          width: 100%;  
          font-size: 12px;
          text-align:center;
        }
      }
      h4{
        color: #D434FE;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 216.4%; /* 34.624px */
        text-align:left;
      }
      h5{
        color: #FFF;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 216.4%; /* 30.296px */
        margin-bottom:20px;
      }
      .list{
        display:flex;
        align-items:center;
        margin-bottom:10px;
        img{
          margin-right:20px;
        }
        p{
          margin-bottom:0;
          text-align:left;
          @media (max-width: 1200px) { 
            font-size: 12px;
          }
        }
      }
      .btn-con{
        width:100%;
        display:flex;
        justify-content:center;
        margin-top:40px;
      }
    }
    @media (max-width: 1200px) { 
        width:100%;
        padding-left:0px;
    } 
`;

const NavButton = styled.button` 
    min-width: 172px;
    height: 44px;   
    padding: 10px 24px;
    border-radius: 4px;
    border:none;
    background: linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%); 
    line-height: normal; 
    color: #FFF;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;  
`;


export default Privacy