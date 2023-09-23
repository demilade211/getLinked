import React from 'react'
import styled from 'styled-components';
import spark from "../images/spark.svg"
import sbulb from "../images/line1.svg"
import chain from "../images/chain.svg"
import line from "../images/line.svg"
import glow from "../images/glow.svg"
import man from "../images/man.svg"
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const navigate = useNavigate();
    return (
        <Con>
            <LineCon className='animate__animated animate__bounce animate__delay-2s'>
                <h1>Igniting a Revolution in HR Innovation</h1>
                <div>
                    <img src={line} alt="img" />
                </div>
            </LineCon>
            <FirstSectionCon>
                <LeftSide>
                    <h1 className='animate__animated animate__fadeInDown animate__delay-3s'>getlinked Tech <span className='icon'><img src={sbulb} alt="img" className='sbulb' /></span>
                        Hackathon
                        <span className='purple'>1.0<img src={chain} alt="img" className='chain' /><img src={spark} className='spark' alt="img" /></span>
                    </h1>
                    <p className='sub'>Participate in getlinked tech Hackathon 2023 stand
                        a chance to win a Big prize
                    </p>
                    <div className='btn animate__animated animate__wobble animate__delay-4s'>
                        <NavButton onClick={() => navigate("/register")}>Register</NavButton>
                    </div>
                    <div className='timer-con'>
                        <p>00<span>H</span></p>
                        <p>00<span>M</span></p>
                        <p>00<span>S</span></p>
                    </div>
                </LeftSide>
                <RigthSide>
                    <div className='img-con'>
                        <img className='man' src={man} alt="img" />
                        <img className='glow' src={glow} alt="img" />
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
    background-image: url('/images/New Hero Slice.png');
    background-position: center center;
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
            margin-right:-49px;
            img{ 
                width:60%;
                height:60%;
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
        font-size: 60px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-align:left;
        line-height: 1.3;  
        .icon{
            position:relative; 
            .sbulb{ 
                position:absolute;
                top:-55px; 
                right:15px;
                @media (max-width: 1200px) {  
                    right:18px;
                    top:-17px;
                    width:18px;
                    height:26px;
                }
                
            }
        }
        .purple{ 
            position:relative;
            color: #D434FE;
            .chain{
                width:100%;
                height:100%;
                position:absolute;
                bottom:0;
                right:-90px;
                @media (max-width: 1200px) {  
                    right:-40px;
                    width:90%;
                    height:90%;
                }
            }
            .spark{
                width:100%;
                height:100%;
                position:absolute;
                right:-150px;
                bottom:0;
                @media (max-width: 1200px) {  
                    right:-70px;
                    width:90%;
                    height:90%;
                }
            }
        }
        @media (max-width: 1200px) { 
            width:80%; 
            font-size: 40px;  
            text-align:center;
            margin-bottom:10px;
        } 
        @media (max-width: 500px) {  
            width:100%;  
            font-size: 32px; 
        }  
    }
    .sub{ 
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
        width:60%;
        display:grid; 
        grid-template-columns:auto auto auto;
        column-gap:20px; 
        margin-bottom:10px;
        p{
            color: #FFF;
            font-family: 'Unica One', cursive;
            font-size: 64px;
            font-style: normal;
            font-weight: 400;   
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
            width:auto; 
            justify-content:center;
            p{ 
                font-size: 48px;  
            }
        } 
    }
    @media (max-width: 1200px) { 
        padding-left: 0px;
        align-items:center;
    }
`;

const RigthSide = styled.div`  
    display:flex; 
    justify-content:center;
    padding:20px 0;  
    .img-con{  
        position:relative;
        width:80%;
        display:flex; 
        align-items:center; 
        .man{ 
            width:100%;
            height:100%;
            mix-blend-mode: luminosity;
        }
        .glow{  
            position:absolute;
            left:0;
            width:86%;
            height:86%;
            mix-blend-mode: hard-light;
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