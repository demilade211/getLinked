import React from 'react'
import styled from 'styled-components';
import spark from "../images/spark.svg"
import line from "../images/line.svg"
import glow from "../images/glow.svg"

const HeroSection = () => {
    return (
        <Con>
            <LineCon>
                <h1>Igniting a Revolution in HR Innovation</h1>
                <div>
                    <img src={line} alt="img" />
                </div>
            </LineCon>
            <FirstSectionCon>
                <LeftSide>
                    <h1>getlinked Tech Hackathon <span>1.0</span></h1>
                    <p>Participate in getlinked tech Hackathon 2023 stand
                        a chance to win a Big prize
                    </p>
                    <div className='btn animate__animated animate__wobble'>
                        <NavButton>Register</NavButton>
                    </div>
                    <div className='timer-con'>
                        <p>00<span>H</span></p>
                        <p>00<span>M</span></p>
                        <p>00<span>S</span></p>
                    </div>
                </LeftSide>
                <RigthSide>
                    <div className='img-con'>
                        <img src={glow} alt="img" />
                    </div>
                </RigthSide>
            </FirstSectionCon>
        </Con>
    )
}

const Con = styled.section`  
    width: 100%;  
    margin-top:80px;  
    padding:30px; 
`;

const FirstSectionCon = styled.div`  
    width: 100%;   
    display:grid;  
    grid-template-columns:45% 55%; 
    row-gap:10px;
    
    @media (max-width: 1200px) { 
        grid-template-columns:100%; 
    }
`;

const LineCon = styled.div`  
    width: 100%;    
    display:flex;  
    flex-direction:column;
    align-items:flex-end; 
    margin:30px 0; 
    div{
        width:100%;
        display:flex;  
        justify-content:flex-end; 
    }
    h1{
        color: #FFF;
        font-family: Montserrat;
        font-size: 36px;
        font-style: italic;
        font-weight: 700;
        line-height: normal;
    }
    @media (max-width: 1200px) {  
        align-items:center;  
        h1{
            text-align:center;
            font-size: 16px;
            white-space: nowrap;
        }
        div{ 
            img{ 
                width:40%;
                height:40%;
            }
        }
    }
`;

const LeftSide = styled.div`    
    padding-left: 40px;
    display:flex;
    flex-direction:column;
    justify-content:center; 
    h1{ 
        font-family: 'Clash Display', sans-serif;
        color: #FFF; 
        font-size: 66px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-align:left;
        line-height: 1.3; 
        span{
            color: #D434FE;
        }
        @media (max-width: 1200px) {  
            font-size: 40px;  
            text-align:center;
            margin-bottom:10px;
        } 
        @media (max-width: 500px) {   
            font-size: 32px; 
        }  
    }
    p{ 
        color: #FFF;
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 166%; /* 33.2px */
        text-align:left;
        margin-bottom:30px; 
        @media (max-width: 1200px) {  
            text-align:center;
        } 
        @media (max-width: 500px) {  
            color: #FFF;
            text-align: center;
            font-family: Montserrat;
            font-size: 13px;
            font-style: normal;
            font-weight: 400;
            line-height: 166%; /* 21.58px */
        }  
    }
    .btn{
        display:flex;
        margin-bottom:20px;
        @media (max-width: 1200px) { 
            width:100%;
            justify-content:center;
        } 
    }
    .timer-con{
        width:100%;
        display:flex; 
        p{
            color: #FFF;
            font-family: 'Unica One', cursive;
            font-size: 64px;
            font-style: normal;
            font-weight: 400; 
            margin-right:30px;
            span{
                color: #FFF;
                font-family: Montserrat;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 133%; /* 18.62px */ 
            }
        }
        @media (max-width: 1200px) { 
            justify-content:center;
            p{
                text-align:center;
                font-size: 48px; 
            }
        } 
    }
    @media (max-width: 1200px) { 
        padding-left: 0px;
    }
`;

const RigthSide = styled.div`  
    display:flex; 
    justify-content:center;
    padding:20px 0; 
    .img-con{ 
        width:80%;
        display:flex; 
        align-items:center;
        background-image: url('/images/man.svg');
        background-position: center center;
        background-size: 100% 100%;
        img{
            width:86%;
            height:86%;
        }
        @media (min-width: 700px) and (max-width: 1200px) { 
            width:60%;
        }
        @media (max-width: 500px) { 
            width:90%;
        }
    }
`;

const NavButton = styled.button` 
    width: 172px;
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

export default HeroSection