import React from 'react'
import styled from 'styled-components';
import bulb from "../images/bulb.svg"


const SecondSection = () => {
    return (
        <Con id="overview">
            <Left className='btn animate__animated animate__fadeInLeft animate__delay-1s'>
                <img src={bulb} alt="img" />
            </Left>
            <Right className='btn animate__animated animate__fadeInLeft animate__delay-2s'>
                <h3>Introduction to getlinked <br/> <span>tech Hackathon 1.0</span></h3>
                <p>
                    Our tech hackathon is a melting pot of visionaries, and its purpose is as
                    clear as day: to shape the future. Whether you're a coding genius, a
                    design maverick, or a concept wizard, you'll have the chance to transform
                    your ideas into reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world,
                    that's what we're all about!
                </p>
            </Right>
        </Con>
    )
}

const Con = styled.section`  
    width: 100%;     
    display:flex; 
    align-items:center;
    padding:50px 20px; 
    border-top:1px solid rgba(255, 255, 255, 0.18);  
    background-image: url('/images/Second Section Bg.png');
    background-position: 100% 100%; 
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
    height: 400px; 
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
            width: 100%;  
            font-size: 20px;
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
        @media (max-width: 1200px) { 
            text-align:center;
            font-size: 13px;
            width: 100%;  
        }

    } 
    @media (max-width: 1200px) { 
        width:100%;
    } 
`;
export default SecondSection