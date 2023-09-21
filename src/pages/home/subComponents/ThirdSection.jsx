import React from 'react'
import styled from 'styled-components';
import girl from "../images/girl.svg"

const ThirdSection = () => {
    return (
        <Con>
            <Left>
                <img src={girl} alt="img" />
            </Left>
            <Right>
                <h3>Rules and  <br /> <span>Guidelines</span></h3>
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
    flex-direction: row-reverse;
    align-items:center;
    padding:20px;  
    @media (max-width: 1200px) { 
        flex-direction:column;
    }
`;

const Left = styled.div`  
    width: 50%;   
    height: 600px; 
    display:flex; 
    justify-content:center;  
    img{
        width:100%;
        height:100%;
    }
    @media (max-width: 1200px) { 
        width:100%;
        height: 400px; 
        justify-content:start; 
    }
`;

const Right = styled.div`  
    width: 50%;   
    height: 400px; 
    display:flex;
    flex-direction:column;
    justify-content:center; 
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
            font-size: 20px;
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
        @media (max-width: 1200px) { 
            text-align:center;
            font-size: 13px;
            width: 100%;  
        }

    } 
    @media (max-width: 1200px) { 
        width:100%;
        padding-left:0px;
    } 
`;

export default ThirdSection