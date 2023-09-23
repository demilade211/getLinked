import React from 'react'
import styled from 'styled-components';
import logo from "../images/logo.svg"
import call from "../images/call.svg"
import location from "../images/location.svg"
import fb from "../images/fb.svg"
import x from "../images/x.svg"
import insta from "../images/insta.svg"
import lnkdin from "../images/lnkdin.svg"

const Footer = () => {
    return (
        <Con>
            <FirstRow>
                <div className='first'>
                    <img src={logo} alt="img" />
                    <p className='first-p'>
                        At getlinked tech Hackathon 1.0, we value your privacy
                        and are committed to protecting your personal information.
                        This Privacy Policy outlines how we collect, use, disclose,
                        to the practices described in this policy.
                    </p>
                    <MobileSecondRow>
                        <p>Terms of Use</p>
                        <VerticalDivider></VerticalDivider>
                        <p>Privacy Policy</p>
                    </MobileSecondRow>
                </div>
                <div className='second'>
                    <h4>Useful Links</h4>
                    <div className='links'>
                        <p>Overview</p>
                        <p>Timeline</p>
                        <p>FAQs</p>
                        <p>Register</p>
                        <div>
                            <span>Follow us</span>
                            <div><img src={insta} alt="img" /></div>
                            <div><img src={x} alt="img" /></div>
                            <div><img src={fb} alt="img" /></div>
                            <div><img src={lnkdin} alt="img" /></div>
                        </div>
                    </div>
                </div>
                <div className='third'>
                    <h4>Contact Us</h4>
                    <div className='call'>
                        <img src={call} alt="img" />
                        <p>+234 6707653444</p>
                    </div>
                    <div className='loc'>
                        <img src={location} alt="img" />
                        <p>
                            27,Alara Street<br />
                            Yaba 100012<br />
                            Lagos State
                        </p>
                    </div>
                </div>
            </FirstRow>
            <SecondRow>
                <p>Terms of Use</p>
                <VerticalDivider></VerticalDivider>
                <p>Privacy Policy</p>
            </SecondRow>
            <ThirdRow>
                <p>All rights reserved. © getlinked Ltd.</p>
            </ThirdRow>
        </Con>
    )
}

const Con = styled.section`  
    width: 100%;      
    padding:20px;   
    background-image: url('/images/Footer background.png');
    background-position: center center;  
    p{ 
        color: #FFF;
        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 172.4%; /* 20.688px */
    }
`;

const FirstRow = styled.div`  
    width: 100%;     
    display:grid;  
    padding:20px 90px; 
    grid-template-columns:1.3fr 1fr 1fr; 
    column-gap:70px;
    @media (max-width: 1200px) { 
        grid-template-columns:100%; 
        padding:20px 50px; 
    }
    .first{ 
        @media (max-width: 1200px) { 
            margin-bottom:20px;
        }
        img{
            margin-bottom:10px;
        } 
        .first-p{
            width:100%;
        }
    }
    .second{ 
        display:flex;
        flex-direction:column; 
        padding-left:80px;
        @media (max-width: 1200px) { 
            padding-left:0px;
            margin-bottom:60px;
        }
        h4{
            color: #D434FE;
            font-family: Montserrat;
            font-size: 14px;
            font-style: normal;
            font-weight: 600; 
            margin-bottom:10px;
            text-align:left;
        }
        .links{ 
            p{
                margin-bottom:10px; 
                text-align:left;
            }
            div{
                display:flex;
                align-items:center;
                img{
                    margin-left:20px;
                }
                span{
                    color: #D434FE;
                    font-family: Montserrat;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                }
            }
        }
    }
    .third{ 
        display:flex;
        flex-direction:column;  
        padding-left:80px;
        @media (max-width: 1200px) { 
            padding-left:0px; 
        }
        h4{
            color: #D434FE;
            font-family: Montserrat;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;  
            margin-bottom:10px;
        }
        div{
            display:flex;
            margin-bottom:10px;
            align-items:flex-start;
            img{
                margin-right:10px;
            }
        }
    }
`;

const SecondRow = styled.div`  
    width: 100%;     
    padding:20px 90px;    
    display:flex;
    align-items:center;
    @media (max-width: 1200px) { 
        display:none;
    }
`;

const MobileSecondRow = styled.div`  
    width: auto;     
    padding:20px 0px;    
    display:flex;
    align-items:center; 
    @media (min-width: 1200px) { 
        display:none;
    }
`;

const ThirdRow = styled.div`  
    width: 100%;     
    display:flex;
    justify-content:center;   
    p{
        text-align:center;
    }
`;

const VerticalDivider = styled.section`  
  width: 2px;
  height: 19px;
  background: #D434FE; 
  margin:0 15px;
`;


export default Footer